import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Util from '../mx-tree/util';
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

        let info = Util.listToTree(extra.list, valueKey, parentKey);
        let map = info.map,
            list = info.list;
        that.updater.set({
            disabled,
            placeholder: that.placeholder || I18n['choose'],
            valueKey,
            textKey,
            parentKey,
            map,
            list,
            expand: false,
            triggerType
        })

        // 选择结果
        let selectedValue = extra.selected || '';
        let data = this['@{get}'](selectedValue);
        data.selectedValue = selectedValue;
        data.selectedText = data.selectedTexts.join('/'); // 拼接选择的文案
        this.updater.set(data);

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
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            groups = [list];
        } else {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(s => {
                        s.cur = false;
                    })
                    i.cur = true;
                    groups.unshift(list);
                } else {
                    let siblings = map[i[parentKey]].children;
                    siblings.forEach(s => {
                        s.cur = false;
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
        let that = this;
        let expand = that.updater.get('expand');
        if (expand) {
            that.updater.digest({
                expand: false
            });

            that['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](that);
        }
    },
    '@{show}<click>'(e) {
        let { expand, selectedValue } = this.updater.get();

        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            let data = this['@{get}'](selectedValue);
            data.expand = true;
            this.updater.digest(data);

            this['@{owner.node}'].trigger('focusin');
            Monitor['@{add}'](this);
        }
    },

    /**
     * trigger-type说明
     * 1. hover类型：hover展示
     *      叶子节点：需要点击事件，选中叶子节点
     *      非叶子：不需要点击事件
     * 2. click类型：点击选择
     * 
     * 该方法处理
     * 1. trigger-type = click
     * 2. trigger-type = hover的选择叶子节点
     */
    '@{select}<click>'(e) {
        let that = this;
        let { selectedValues, valueKey, groups } = that.updater.get();

        let gIndex = e.params.gIndex,
            iIndex = e.params.iIndex;
        let list = groups[gIndex];
        let item = list[iIndex];
        item.children = item.children || [];
        if (item.children.length > 0) {
            // 还有子节点
            list.forEach(g => {
                g.cur = false;
            })
            item.cur = true;
            groups = groups.slice(0, gIndex + 1);

            // 恢复选中态
            item.children.forEach(c => {
                c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
            })

            groups.push(item.children);
            that.updater.digest({
                groups
            })
        } else {
            // 选中叶子节点
            let selectedValue = item[valueKey];
            let data = that['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            that.updater.digest(data);

            let event = $.Event('change', {
                item,
                selected: selectedValue
            });
            that['@{owner.node}'].val(selectedValue).trigger(event);
            that['@{hide}']();
        }
    },

    /**
     * trigger-type说明
     * 1. hover类型：hover展示
     *      叶子节点：需要点击事件，选中叶子节点
     *      非叶子：不需要点击事件
     * 2. click类型：点击选择
     * 
     * 该方法处理：
     * trigger-type = hover
     */
    '@{select}<mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        let { selectedValues, valueKey, groups } = that.updater.get();

        let { gIndex, iIndex } = e.params;
        let list = groups[gIndex];
        let item = list[iIndex];
        list.forEach(g => {
            g.hover = false;
        })
        item.hover = true;
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

        that.updater.digest({
            groups
        })
    }
});

