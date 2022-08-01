import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from '../mx-tree/util';
import * as I18n from '../mx-medusa/util';
import * as Monitor from '../mx-util/monitor';
import * as Fns from './mixin';

export default View.extend({
    tmpl: '@index.html',
    mixins: [Fns],
    init(extra) {
        Monitor['@{setup}']();
        this.assign(extra);

        this.on('destroy', () => {
            this['@{owner.node}'].off('mouseenter mouseleave');
            $('#mx_output_' + this.id).remove();
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();

            ['@{anim.timer}', '@{delay.show.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },
    assign(extra) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        let valueKey = extra.valueKey || 'value';
        let textKey = extra.textKey || 'text';
        let parentKey = extra.parentKey || 'pValue';

        // 是否支持搜索
        let searchbox = extra.searchbox + '' === 'true';

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + this.id)[0].hasAttribute('mx-disabled');

        // 默认只能选择叶子节点
        let leafOnly = (extra.leafOnly + '' !== 'false');

        // 对齐方式：left right
        let align = extra.align || 'left';

        let emptyText = extra.emptyText;
        let originList = JSON.parse(JSON.stringify(extra.list || []));
        if (emptyText) {
            // 配置空状态值，添加一个空选项
            originList.unshift({
                [textKey]: emptyText,
                [valueKey]: '',
                [parentKey]: null
            })
        }

        let { map, list } = Util.listToTree(originList, valueKey, parentKey);
        let d = {
            align,
            searchbox,
            disabled,
            placeholder: emptyText || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            map,
            list,
            leafOnly,
            width: this['@{owner.node}'].outerWidth(),
        }
        this.updater.set(d);

        // 选择结果
        let result = this['@{get}'](extra.selected || '');
        this.updater.set(result);

        // 传入content的数据
        this['@{content.data}'] = {
            ...d,
            ...result,
        };

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { map, selectedValues, selectedValue } = this.updater.get();
        // debugger
        this['@{owner.node}'].val(selectedValue)

        if (fire) {
            let items = selectedValues.map(v => {
                return map[v];
            })
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: selectedValue,
                item: map[selectedValue],
                items,
            });
        }
    },

    '@{init}'() {
        let vId = this.id;

        let ddId = `mx_output_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output" style="min-width: 0; max-width: none;" id="${ddId}"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = this.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            this['@{set.pos}']();
        });
        this['@{content.vf}'] = vf;
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'mx_output_' + this.id);
    },

    '@{show}'() {
        if (!this['@{pos.init}']) {
            this['@{pos.init}'] = true;
            this['@{init}']();
        }

        if (this.updater.get('expand')) {
            return;
        }

        this['@{content.vf}'].mountView('@./content', {
            data: this['@{content.data}'],
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = this['@{set.pos}']();
                this['@{mx.output.show}'](ddNode);
                this['@{owner.node}'].trigger('focusin');
                Monitor['@{add}'](this);
            },
            submit: (result) => {
                // 单选 or 多选
                this['@{hide}']();
                this.updater.digest(result);
                this['@{val}'](true);
            },
        })
        this.updater.digest({
            expand: true
        })
    },

    '@{hide}'() {
        if (this.updater.get('expand')) {
            this.updater.digest({
                expand: false
            })
            let ddNode = $('#mx_output_' + this.id);
            this['@{mx.output.hide}'](ddNode);
            this['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](this);
        }
    },

    '@{set.pos}'() {
        let oNode = this['@{owner.node}'];
        let ddNode = $('#mx_output_' + this.id);
        let width = oNode.outerWidth(),
            height = oNode.outerHeight(),
            offset = oNode.offset();

        let { align } = this.updater.get();
        if (align == 'right') {
            ddNode.css({
                top: offset.top + height,
                left: 'auto',
                right: document.documentElement.clientWidth - offset.left - width,
            });
        } else {
            ddNode.css({
                top: offset.top + height,
                left: offset.left,
                right: 'auto',
            });
        }
        return ddNode;
    },

    '@{toggle}<click>'(e) {
        e.preventDefault();
        let { expand, disabled } = this.updater.get();
        if (disabled) {
            return;
        }

        if (this.updater.get('animing')) {
            return;
        };

        // 只记录状态不digest
        this.updater.digest({ animing: true })
        this['@{anim.timer}'] = setTimeout(() => {
            this.updater.digest({ animing: false })
        }, this['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));

        if (expand) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    },
});

