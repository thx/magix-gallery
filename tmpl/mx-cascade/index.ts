import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from '../mx-tree/util';
import * as I18n from '../mx-medusa/util';
import * as Monitor from '../mx-util/monitor';

export default View.extend({
    tmpl: '@index.html',
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

        // 计算树结构
        let { map, list } = Util.listToTree(originList, valueKey, parentKey);

        // 是否为多选
        let multiple = extra.multiple + '' === 'true';
        // 多选上下限范围
        let min = +extra.min || 0,
            max = +extra.max || 0;
        if ((max > 0) && (min > max)) {
            min = max;
        }

        // 统一转成数组处理
        let selectedValues = [];
        if (multiple) {
            // 多选：统一处理为数组
            if ($.isArray(extra.selected)) {
                // 数组，保留初始数据状态，双向绑定原样返回
                this['@{bak.type}'] = 'array';
                selectedValues = extra.selected;
            } else {
                // 字符串
                selectedValues = (extra.selected === undefined || extra.selected === null) ? [] : (extra.selected + '').split(',');
            }
        } else {
            // 单选
            selectedValues = (extra.selected === undefined || extra.selected === null) ? [] : [extra.selected];
        }

        // 剔除不合法值
        for (let i = 0; i < selectedValues.length; i++) {
            if (!map[selectedValues[i]]) {
                selectedValues.splice(i--, 1);
            }
        }

        let d = {
            multiple,
            min,
            max,
            leafOnly,
            width: this['@{owner.node}'].outerWidth(),
            align,
            searchbox,
            disabled,
            placeholder: emptyText || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            map,
            list,
            selectedValues,
        }
        this['@{content.data}'] = d;
        this.updater.set(d);

        // 固定刷新
        return true;
    },

    render() {
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { map, selectedValues, valueKey, textKey, parentKey } = this.updater.get();

        // 计算显示值
        let _loop = (v, values, texts) => {
            let i = map[v];
            values.unshift(i[valueKey]);
            texts.unshift(i[textKey]);
            if (!(i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null)) {
                _loop(i[parentKey], values, texts);
            }
        }

        let selectedItems = selectedValues.map(selectedValue => {
            let values = [], texts = [];
            _loop(selectedValue, values, texts);
            return {
                items: values.map(v => map[v]),// 完整的父子对象数组
                values,
                texts,
                item: map[selectedValue], // 当前对象完整对象
                value: selectedValue, // 当前对应的value
                text: texts.join('/')  // 结果框显示的拼接文案
            }
        })

        this.updater.digest({
            selectedItems,
        })

        let selected = this['@{bak.type}'] == 'array' ? selectedValues : selectedValues.join(',');
        this['@{owner.node}'].val(selected);
        if (fire) {
            this['@{fire}']();
        }
    },

    '@{fire}'() {
        let { multiple, selectedItems } = this.updater.get();
        let selected = this['@{owner.node}'].val();
        if (multiple) {
            // 多选
            this['@{owner.node}'].trigger({
                type: 'change',
                selected,
                items: selectedItems,
            });
        } else {
            // 单选
            this['@{owner.node}'].trigger({
                type: 'change',
                selected,
                ...(selectedItems[0] || {}),
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
        let that = this;
        if (!that['@{pos.init}']) {
            that['@{pos.init}'] = true;
            that['@{init}']();
        }

        if (that.updater.get('expand')) {
            return;
        }
        that['@{content.vf}'].mountView('@./content', {
            data: that['@{content.data}'],
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = that['@{set.pos}']();
                that['@{mx.output.show}'](ddNode);
                that['@{owner.node}'].trigger('focusin');
                Monitor['@{add}'](that);
            },
            submit: (selectedValues) => {
                // 单选
                that['@{hide}']();
                that.updater.set({
                    selectedValues
                });
                that['@{val}'](true);
            },
            check: (selectedValues) => {
                let selectedMap = {};
                selectedValues.forEach(v => {
                    selectedMap[v] = true;
                })

                let deleteIndexes = [];
                that.updater.get('selectedItems').forEach((item, i) => {
                    if (!selectedMap[item.value]) {
                        deleteIndexes.push(i);
                    }
                })
                // 多选移除动画
                that['@{delete}'](deleteIndexes).then(resolve => {
                    that.updater.set({
                        selectedValues
                    });
                    that['@{val}'](true);
                })
            }
        })
        that.updater.digest({
            expand: true
        })
    },

    '@{hide}'() {
        let { expand } = this.updater.get();
        if (expand) {
            this.updater.digest({
                expand: false
            });
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

    /**
     * 多选单个移除
     */
    '@{delete}<click>'(e) {
        e.stopPropagation && e.stopPropagation();
        if (this.updater.get('disabled')) {
            return;
        }

        let { selectedItems, min } = this.updater.get();
        let index = e.params.index;
        if (min > 0 && selectedItems.length <= min) {
            selectedItems[index].error = true;
            this.updater.digest({
                selectedItems,
            });
            return;
        };

        this['@{delete}']([index]).then(resolve => {
            selectedItems.splice(index, 1);
            let selectedValues = selectedItems.map(item => item.value);
            this.updater.digest({
                selectedValues,
                selectedItems,
            });
            this['@{owner.node}'].val(this['@{bak.type}'] == 'array' ? selectedValues : selectedValues.join(','));
            this['@{fire}']();

            if (this.updater.get('expand') && this['@{content.vf}']) {
                // 展开的情况下，再次刷新下下拉列表
                this['@{content.vf}'].invoke('reset', [selectedValues]);
            }
        });

    },

    '@{delete}'(indexes) {
        let that = this;
        return new Promise(resolve => {
            if (indexes && indexes.length > 0) {
                let count = 0;
                let tags = that['@{owner.node}'].find(indexes.map(index => `[data-tag="${that.id}_${index}"]`).join(','));
                tags.animate({
                    width: 0,
                    opacity: 0,
                }, 200, () => {
                    count++;
                    if (count == indexes.length) {
                        resolve(true);
                    }
                });
            } else {
                resolve(true);
            }
        })
    }

});

