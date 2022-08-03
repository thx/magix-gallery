import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from '../mx-tree/util';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@card.less');

export default View.extend({
    tmpl: '@card.html',
    init(extra) {
        this.assign(extra);

        this.on('destroy', () => {
            ['@{delay.hide.timer}', '@{delay.hover.timer}'].forEach(timerKey => {
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
        let imgKey = extra.imgKey || 'img';
        let tipKey = extra.tipKey || 'tip';

        let { map, list } = Util.listToTree(extra.list, valueKey, parentKey);
        this.updater.set({
            valueKey,
            textKey,
            parentKey,
            imgKey,
            tipKey,
            map,
            list,
            title: extra.headerTitle || '标题',
            tip: extra.headerTip || '',
            width: extra.width || 280,
            height: extra.height || 360,
        })

        // 完整的选择结果
        let data = this['@{get}'](extra.selected || '');
        this.updater.set(data);

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();

        // 双向绑定
        let { selectedValue } = this.updater.get();
        this['@{owner.node}'].val(selectedValue);

        // 恢复到初始态
        this['@{owner.node}'].hover(() => {
            clearTimeout(this['@{delay.hide.timer}']);
        }, () => {
            clearTimeout(this['@{delay.hide.timer}']);
            this['@{delay.hide.timer}'] = setTimeout(() => {
                this['@{hide}']();
            }, 300)
        })
    },

    '@{select}<mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        clearTimeout(that['@{delay.hover.timer}']);
        that['@{delay.hover.timer}'] = setTimeout(that.wrapAsync(() => {
            let { selectedValues, valueKey, groups } = that.updater.get();
            let { gIndex, iIndex } = e.params;
            let list = groups[gIndex];
            let item = list[iIndex];

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

            that.updater.digest({
                groups
            })
        }), 100);
    },

    '@{select}<click>'(e) {
        let that = this;
        let { valueKey, groups, map } = that.updater.get();
        let { gIndex, iIndex } = e.params;
        let list = groups[gIndex];
        let item = list[iIndex];

        // 可选中的节点
        // 1. 选中叶子节点
        // 2. hover展开，非叶子节点也可选中
        let selectedValue = item[valueKey];
        let result = that['@{get}'](selectedValue);
        that.updater.digest(result);

        let items = result.selectedValues.map(v => {
            return map[v];
        })
        let event = $.Event('change', {
            item,
            items,
            selected: selectedValue
        });
        that['@{owner.node}'].val(selectedValue).trigger(event);
        that['@{hide}']();
    },

    '@{get}'(selectedValue) {
        let { valueKey, textKey, parentKey, map, list } = this.updater.get();

        let selectedValues = [];

        // 恢复默认态
        let _end = (item) => {
            item.cur = false;
            item.hover = false;
            item.hide = false;
            if (item.children && item.children.length) {
                item.children.forEach(child => {
                    _end(child);
                })
            }
        }
        list.forEach(item => {
            _end(item);
        });

        if (selectedValue === '' || selectedValue === undefined || selectedValue === null || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedValue = '';
            selectedValues = [];
            list.forEach(item => {
                item.cur = item[valueKey] === '';
            });
        } else {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                i.cur = true;
                selectedValues.unshift(i[valueKey] + '');
                if (!(i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null)) {
                    _loop(i[parentKey]);
                }
            }
            _loop(selectedValue);
        }

        return {
            groups: [list],
            selectedValues,
            selectedValue,
        }
    },

    '@{hide}'(e) {
        let { groups } = this.updater.get();
        // 卡片只保留第一组
        groups[0].forEach(i => {
            i.hover = false;
        })
        this.updater.digest({
            groups: [groups[0]]
        })
    }
});

