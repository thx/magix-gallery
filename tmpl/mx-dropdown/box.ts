/**
 * 单选多选混合选择：https://aone.alibaba-inc.com/req/33785293
 * demo：https://done.alibaba-inc.com/file/lKXtJBCkVypm/QMr2WG4FxSpLd7w4/preview?aid=4B516C1E-F859-4562-B011-124598902CED
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@../mx-tabs/box.less');
Magix.applyStyle('@box.less');

export default View.extend({
    tmpl: '@box.html',
    init(ops) {
        this.assign(ops);
    },
    assign(ops) {
        let that = this;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.snapshot();

        // mode
        // single：单选
        // multiple：多选
        // combine：单选多选混合
        let mode = (['single', 'multiple', 'combine'].indexOf(ops.mode) > -1) ? ops.mode : 'single';

        // 整体禁用
        let disabled = (ops.disabled + '' === 'true');

        // 已选中数据
        let selectedMap = [];
        if ($.isArray(ops.selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            that['@{bak.type}'] = 'array';
            ops.selected.forEach(v => {
                selectedMap[v] = true;
            })
        } else {
            // 字符串
            ((ops.selected === undefined || ops.selected === null) ? [] : (ops.selected + '').split(',')).map(v => {
                selectedMap[v] = true;
            })
        }

        let textKey, valueKey, list;
        if (ops.adcList && ops.adcList.length) {
            that['@{origin.list}'] = JSON.parse(JSON.stringify(ops.adcList || []));
            textKey = 'name';
            valueKey = 'code';

            list = that['@{origin.list}'].map(item => {
                let v = item[valueKey];
                return {
                    ...item,
                    disabled: disabled || (item.properties?.disabled + '' === 'true'),
                    disabledTip: item.properties?.disabledTip,
                    multiple: (mode == 'multiple') || (mode == 'combine' && item.properties?.multiple + '' === 'true'),
                    selected: selectedMap[v],
                    text: item.name,
                    value: v,
                    tip: item.description,
                    tag: item.properties?.tag,
                    color: item.properties?.tagColor,
                    detail: item.properties?.tip,
                }
            });
        } else {
            that['@{origin.list}'] = JSON.parse(JSON.stringify(ops.list || []));
            textKey = ops.textKey || 'text';
            valueKey = ops.valueKey || 'value';

            list = that['@{origin.list}'].map(item => {
                let v = item[valueKey];
                return {
                    ...item,
                    disabled: disabled || (item.disabled + '' === 'true'),
                    // disabledTip
                    multiple: (mode == 'multiple') || (mode == 'combine' && item.multiple + '' === 'true'),
                    selected: selectedMap[v],
                    text: item[textKey],
                    value: v,
                    tip: item.tips || item.tip || '', // 提示：兼容下tips和tip
                    // tag
                    // color
                    // tagContent
                    // detail
                }
            });
        }


        if (mode == 'combine') {
            // 混合模式下，单选在前
            let lasts = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].multiple) {
                    lasts = lasts.concat(list.splice(i--, 1));
                }
            }
            list = list.concat(lasts);
        }

        // 最小宽度
        let reg = /^[0-9]*$/;
        let minWidth = reg.test(ops.minWidth) ? (ops.minWidth + 'px') : (ops.minWidth || 'calc(var(--font-size)*8)');

        // 溢出情况是否可展开收起
        let toggle = ops.toggle + '' === 'true',
            toggleDefault = ops.toggleDefault + '' === 'true';
        let toggleState = that.updater.get('toggleState');
        if (toggleState == null || toggleState == undefined) {
            toggleState = toggleDefault;
        }

        that.updater.set({
            minWidth,
            disabled,
            mode,
            textKey,
            valueKey,
            selectedMap,
            groups: [{
                list
            }],
            toggle,
            toggleState,
        });

        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{val}']();

        // 处理换行样式
        this['@{cal.line}']();
        // 处理展开收起样式
        this['@{cal.style}']();
    },
    '@{cal.style}'() {
        this.updater.digest({
            lineLeft: this['@{owner.node}'].find('.@box.less:dropdown-box-line:first-child').outerWidth(),
        });
    },
    '@{cal.line}'() {
        let { groups } = this.updater.get();
        let { top } = this['@{owner.node}'].offset();
        let newGroups = [], index = -1;
        groups.forEach((group, gi) => {
            group.list.forEach((item, i) => {
                let node = this['@{owner.node}'].find(`[data-index="${gi}_${i}"]`);
                let { top: t } = node.offset(),
                    h = node.outerHeight();
                let lineIndex = Math.floor((t - top) / h);
                if (index != lineIndex) {
                    index++;
                    newGroups.push({
                        list: []
                    })
                }
                newGroups[index].list.push(item);
            })
        });
        this.updater.digest({
            groups: newGroups,
        });
    },

    '@{val}'() {
        let that = this;
        let { selectedMap } = that.updater.get();
        let values = Object.keys(selectedMap);
        if (that['@{bak.type}'] == 'array') {
            that['@{owner.node}'].val(values);
        } else {
            that['@{owner.node}'].val(values.join(','));
        }
    },

    '@{select}<click>'(e) {
        let that = this;
        let { groups, selectedMap: oldSelectedMap, valueKey } = that.updater.get();
        let curItem = e.params.item, selectedMap = {};
        if (curItem.multiple) {
            // 多选，删除所有单选项
            groups.forEach(group => {
                group.list.forEach(item => {
                    if (item.multiple) {
                        if (item.value == curItem.value) {
                            item.selected = !item.selected;
                        };
                        if (item.selected) {
                            selectedMap[item.value] = true;
                        }
                    } else {
                        item.selected = false;
                    }
                })
            })
        } else {
            // 单选，删除所有多选项
            groups.forEach(group => {
                group.list.forEach(item => {
                    if (item.multiple) {
                        item.selected = false;
                    } else {
                        item.selected = (item.value == curItem.value);
                        if (item.selected) {
                            selectedMap[item.value] = true;
                        }
                    }
                })
            })
        }
        if (Object.keys(selectedMap).join(',') == Object.keys(oldSelectedMap).join(',')) {
            return;
        }

        let items = [];
        that['@{origin.list}'].forEach(item => {
            if (selectedMap[item[valueKey]]) {
                items.push(item);
            }
        });
        let values = Object.keys(selectedMap);

        let d = {
            items,
            values,
            selected: (that['@{bak.type}'] == 'array') ? values : values.join(',')
        };
        let mxcResult = that['@{get.mxc.vars}'](that['@{owner.node}'], d);
        Magix.mix(d, mxcResult);

        let event = $.Event('change', d);
        that.updater.digest({
            selectedMap,
        });

        that['@{val}']();
        that['@{owner.node}'].trigger(event);
    },

    '@{toggle}<click>'(e) {
        this.updater.digest({
            toggleState: !this.updater.get('toggleState'),
        })
    }
});
