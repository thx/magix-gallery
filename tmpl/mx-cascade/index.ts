import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from '../mx-tree/util';
import * as I18n from '../mx-medusa/util';
import * as Monitor from '../mx-util/monitor';
const Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);

        Monitor['@{setup}']();
        this.on('destroy', () => {
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();
        });
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let valueKey = extra.valueKey || 'value';
        let textKey = extra.textKey || 'text';
        let parentKey = extra.parentKey || 'pValue';

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        // 点击展现或者hover展示
        // click
        // hover
        let triggerType = extra.triggerType || 'click';

        // 默认只能选择叶子节点
        // 只在triggerType=hover下支持，click下只能选择叶子
        let leafOnly = (extra.leafOnly + '' !== 'false');

        let info = Util.listToTree(extra.list, valueKey, parentKey);
        let map = info.map,
            list = info.list;
        that.updater.set({
            disabled,
            placeholder: extra.placeholder || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            map,
            list,
            expand: false,
            triggerType,
            leafOnly
        })

        // 选择结果
        let selectedValue = extra.selected || '';
        let data = that['@{get}'](selectedValue);
        data.selectedValue = selectedValue;
        data.selectedText = data.selectedTexts.join('/'); // 拼接选择的文案
        that.updater.set(data);

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();

        // 双向绑定
        let { selectedValue } = this.updater.get();
        this['@{owner.node}'] = $('#' + this.id);
        this['@{owner.node}'].val(selectedValue);
    },
    '@{get}'(selectedValue) {
        let { valueKey, textKey, parentKey, placeholder, map, list } = this.updater.get();

        let selectedTexts = [],
            selectedValues = [],
            groups = [];
        if (selectedValue === '' || selectedValue === undefined || selectedValue === null || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];

            // 恢复默认态
            let _loop = (item) => {
                item.cur = false;
                item.hover = false;
                if (item.children && item.children.length) {
                    item.children.forEach(child => {
                        _loop(child);
                    })
                }
            }
            list.forEach(item => {
                _loop(item);
            })

            groups = [list];
        } else {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null) {
                    // 根节点
                    list.forEach(s => {
                        s.cur = false;
                        s.hover = false;
                    })
                    i.cur = true;
                    groups.unshift(list);
                } else {
                    let siblings = map[i[parentKey]].children;
                    siblings.forEach(s => {
                        s.cur = false;
                        s.hover = false;
                    })
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop(i[parentKey]);
                }
            }
            _loop(selectedValue);
        }

        return {
            groups,
            selectedTexts,
            selectedValues
        }
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}'(e) {
        let { expand } = this.updater.get();
        if (expand) {
            this.updater.digest({
                expand: false
            });

            this['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](this);
        }
    },
    '@{show}<click>'(e) {
        let that = this;
        let { expand, selectedValue } = that.updater.get();

        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            let data = that['@{get}'](selectedValue);
            data.expand = true;
            that.updater.digest(data);

            that['@{owner.node}'].trigger('focusin');
            Monitor['@{add}'](that);

            // output动画结束
            that['@{output.animation.end}'] = false;
            let output = document.querySelector(`#${that.id} #${that.id}_content`);
            output.addEventListener('animationend', function (e) {
                that['@{output.animation.end}'] = true;
            }, false);
        }
    },

    /**
     * trigger-type说明
     * 1. hover类型：hover展示
     * 2. click类型：点击展示
     */
    '@{select}<mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        if (!that['@{output.animation.end}']) {
            // 判断动画是否结束
            return;
        }

        clearTimeout(that['@{delay.hover.timer}']);
        that['@{delay.hover.timer}'] = setTimeout(that.wrapAsync(() => {
            let { selectedValues, valueKey, groups, triggerType } = that.updater.get();
            let { gIndex, iIndex } = e.params;
            let list = groups[gIndex];
            let item = list[iIndex];

            if (triggerType == 'hover') {
                // 置空当前列hover态
                list.forEach(i => {
                    i.hover = false;
                })
                item.hover = true;

                // hover展开子项时处理子项
                // 否则只更新hover态
                groups = groups.slice(0, gIndex + 1);
                if (item.children && item.children.length > 0) {
                    // hover有子节点
                    // 1. 恢复选中态
                    // 2. 置空hover态
                    item.children.forEach(c => {
                        c.hover = false;
                        c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                    })

                    groups.push(item.children);
                }
            } else {
                // 置空当前列hover态
                groups.forEach(l => {
                    l.forEach(i => {
                        i.hover = false;
                    })
                })
                item.hover = true;
            }

            that.updater.digest({
                groups
            })
        }), 150);
    },

    /**
    * trigger-type说明
    * 1. hover类型：hover展示
    *      叶子节点：需要点击事件，选中叶子节点
    *      非叶子：不需要点击事件 / 需要点击事件，选中该节点
    * 2. click类型：点击展示
    *      叶子节点：选中叶子节点
    *      非叶子：展开子项
    */
    '@{select}<click>'(e) {
        let that = this;
        let { selectedValues, valueKey, groups, triggerType, map, leafOnly } = that.updater.get();
        let { gIndex, iIndex } = e.params;
        let list = groups[gIndex];
        let item = list[iIndex];

        if (!item.children || !item.children.length ||
            (!leafOnly && item.children.length && triggerType == 'hover')) {
            // 可选中的节点
            // 1. 选中叶子节点
            // 2. hover展开，非叶子节点也可选中
            let selectedValue = item[valueKey];
            let data = that['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            that.updater.digest(data);

            let items = data.selectedValues.map(v => {
                return map[v];
            })
            let event = $.Event('change', {
                item,
                items,
                selected: selectedValue
            });
            that['@{owner.node}'].val(selectedValue).trigger(event);
            that['@{hide}']();
        } else {
            // 还有子节点
            if (triggerType == 'click') {
                // 点击展开子项时响应
                list.forEach(g => {
                    g.hover = false;
                    g.cur = false;
                })
                item.cur = true;
                item.hover = true;
                groups = groups.slice(0, gIndex + 1);

                // 恢复选中态
                item.children.forEach(c => {
                    c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                })

                groups.push(item.children);
                that.updater.digest({
                    groups
                })
            }
        }
    }
});

