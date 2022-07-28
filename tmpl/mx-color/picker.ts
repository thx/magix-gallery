import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@picker.html',
    init(extra) {
        Monitor['@{setup}']();
        this.assign(extra);

        this.on('destroy', () => {
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();

            ['@{anim.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },

    assign(extra) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + this.id)[0].hasAttribute('mx-disabled');

        // 当前选中色值
        let color = extra.color || '';

        // 快捷选项
        let originList = extra.list || [], list = [];
        let needAll = extra.needAll + '' === 'true';
        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value';
        if (originList.length > 0) {
            if (typeof originList[0] === 'object') {
                // 本身是个对象
                // 存在分组的情况
                list = originList.map(item => {
                    let value = item[valueKey];
                    return {
                        ...item,
                        text: `<span class="@index.less:preview">
                            <span class="@index.less:preview-dot" style="background-color: ${value};"></span>${item[textKey]}
                        </span>`,
                        value,
                        tip: value,
                    };
                })
            } else {
                // 直接value列表（无分组）
                list = originList.map(value => {
                    return {
                        text: `<span class="@index.less:preview">
                            <span class="@index.less:preview-dot" style="background-color: ${value};"></span>${value}
                        </span>`,
                        tip: value,
                        value,
                    };
                });
            };

            if (needAll) {
                list.unshift({
                    text: `<span class="@index.less:preview">
                        <span class="@index.less:preview-dot" style="background-image: url(https://img.alicdn.com/imgextra/i2/O1CN01Yjn6h21CcIlwN9usc_!!6000000000101-2-tps-40-40.png);"></span>全部
                    </span>`,
                    tip: '全部',
                    value: ''
                })
            }
        }

        this.updater.set({
            disabled,
            list,
            dot: (extra.dot + '') === 'true',
            showAlpha: extra.showAlpha,
            color,
        })

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { color } = this.updater.get();
        this['@{owner.node}'].val(color);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                color,
            });
        }
    },

    '@{change}<change>'(e) {
        e.stopPropagation();
        this.updater.digest({
            color: e.selected
        })
        this['@{val}'](true);
    },

    '@{init}'() {
        let vId = this.id;

        let ddId = `color_picker_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output" style="width: calc(var(--mx-color-width) + var(--mx-trigger-h-gap, 8px) * 2 + 2); min-width: 0; max-width: none; padding: var(--mx-trigger-v-gap, 8px) var(--mx-trigger-h-gap, 8px);" id="${ddId}"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        this['@{content.vf}'] = this.owner.mountVframe(ddId, '');
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'color_picker_' + this.id);
    },

    '@{show}'() {
        if (!this['@{pos.init}']) {
            this['@{pos.init}'] = true;
            this['@{init}']();
        }

        if (this.updater.get('expand')) {
            return;
        }

        let { showAlpha, color } = this.updater.get();
        this['@{content.vf}'].mountView('@./index', {
            data: {
                showBtns: true,
                showAlpha,
                color,
            },
            prepare: () => {
                // 每次show时都重新定位
                let iNode = this['@{setPos}']();
                this['@{mx.output.show}'](iNode);
                Monitor['@{add}'](this);
            },
            submit: (result) => {
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
            let iNode = $('#color_picker_' + this.id);
            this['@{mx.output.hide}'](iNode);
            Monitor['@{remove}'](this);
        }
    },

    '@{setPos}'() {
        let oNode = this['@{owner.node}'];
        let iNode = $('#color_picker_' + this.id);

        let winWidth = window.innerWidth,
            winHeight = window.innerHeight,
            winScrollTop = $(window).scrollTop(),
            height = oNode.outerHeight(),
            offset = oNode.offset(),
            rWidth = iNode.outerWidth(),
            rHeight = iNode.outerHeight();

        let top = offset.top + height,
            left = offset.left;
        // 修正到可视范围之内
        if (top + rHeight > winHeight + winScrollTop) {
            top = winHeight + winScrollTop - rHeight - 10;
        }
        if (left + rWidth > winWidth) {
            let scrollbarWidth = winWidth - document.documentElement.clientWidth;
            left = winWidth - rWidth - scrollbarWidth;
        }
        iNode.css({ left, top });
        return iNode;
    },

    '@{toggle}<click>'(e) {
        e.preventDefault();
        let { expand, dot, disabled } = this.updater.get();
        if (disabled) {
            return;
        }

        if (!dot) {
            if (this.updater.get('animing')) {
                return;
            };

            // 只记录状态不digest
            this.updater.digest({ animing: true })
            this['@{anim.timer}'] = setTimeout(() => {
                this.updater.digest({ animing: false })
            }, this['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));
        }

        if (expand) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    },
});