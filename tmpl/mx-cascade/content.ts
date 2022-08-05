import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(extra) {
        this.viewOptions = extra;

        this.updater.set({
            ...extra.data,
            stateConstant: {
                unchecked: 1,
                indeterminate: 2,
                checked: 3,
            },
            text: {
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                search: I18n['dropdown.search'],
                empty: I18n['empty.text'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel'],
            }
        })

        this.on('destroy', () => {
            ['@{search.delay.timer}', '@{delay.hover.timer}', '@{delay.out.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },

    '@{single.cal}'() {
        let { map, list, valueKey, parentKey, selectedValues } = this.updater.get();

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

        let groups = [];
        if (selectedValues.length > 0) {
            // 已选中
            let _loop = (v) => {
                let i = map[v];
                if (i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null) {
                    // 根节点
                    i.cur = true;
                    groups.unshift(list);
                } else {
                    i.cur = true;
                    let siblings = map[i[parentKey]].children;
                    groups.unshift(siblings);
                    _loop(i[parentKey]);
                }
            }
            _loop(selectedValues[0]);
        } else {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            list.forEach(item => {
                item.cur = item[valueKey] === '';
            });
            groups = [list];
        }

        this.updater.digest({
            allHide: false,
            list,
            groups
        })
    },

    '@{multiple.cal}'() {
        let { max, valueKey, list, selectedValues, stateConstant } = this.updater.get();

        let selectedMap = {};
        selectedValues.forEach(selectedValue => {
            selectedMap[selectedValue] = true;
        })

        // 递归判断每个节点的状态
        let getCheckboxState = (item) => {
            let itemAll = 0, itemChecked = 0;
            let _lp1 = (item) => {
                if (item.children && item.children.length) {
                    item.children.forEach(sub => {
                        _lp1(sub);
                    })
                } else {
                    // 叶子节点
                    itemAll++;
                    if (selectedMap[item[valueKey]]) {
                        itemChecked++;
                    }
                }
            }
            _lp1(item);

            let checkboxState = stateConstant.unchecked;
            if (itemChecked > 0) {
                checkboxState = (itemChecked == itemAll) ? stateConstant.checked : stateConstant.indeterminate;
            }
            return checkboxState;
        }

        let allCount = 0, checkedCount = selectedValues.length;
        let _lp2 = (arr) => {
            arr.forEach(item => {
                Magix.mix(item, {
                    checkboxState: getCheckboxState(item),
                })

                if (item.children && item.children.length > 0) {
                    _lp2(item.children);
                } else {
                    allCount++;
                }
            })
        }
        _lp2(list);

        let groups = this.updater.get('groups') || [];
        if (groups.length == 0) {
            // 多选默认显示第一列
            groups = [list]
        }

        let allCheckboxState = stateConstant.unchecked;
        if ((!max && checkedCount > 0 && checkedCount == allCount) || (max > 0 && checkedCount > 0 && checkedCount == max)) {
            allCheckboxState = stateConstant.checked;
        } else {
            allCheckboxState = (checkedCount == 0) ? stateConstant.unchecked : stateConstant.indeterminate;
        }

        this.updater.digest({
            allCheckboxState,
            list,
            groups,
        })
    },

    render() {
        let { multiple } = this.updater.get();
        this[multiple ? '@{multiple.cal}' : '@{single.cal}']();

        let viewOptions = this.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },

    reset(selectedValues) {
        this.updater.set({
            selectedValues,
        })
        let { multiple } = this.updater.get();
        this[multiple ? '@{multiple.cal}' : '@{single.cal}']();
    },

    '@{clear.hover}<mouseout,mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let { groups } = this.updater.get();
        clearTimeout(this['@{delay.out.timer}']);
        if (e.type == 'mouseout') {
            this['@{delay.out.timer}'] = setTimeout(this.wrapAsync(() => {
                groups[groups.length - 1].forEach(item => {
                    item.hover = false;
                })
                this.updater.digest({
                    groups
                })
            }), 250);
        }
    },

    '@{hover}<mouseover>'(e) {
        e.stopPropagation();
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        // 展开子列表延迟显示
        clearTimeout(this['@{delay.hover.timer}']);
        this['@{delay.hover.timer}'] = setTimeout(this.wrapAsync(() => {
            let { gIndex, iIndex } = e.params;
            let { valueKey, groups, selectedValues, multiple } = this.updater.get();
            let list = groups[gIndex];
            let item = list[iIndex];
            list.forEach(i => {
                // 置空当前列hover态
                i.hover = false;
            })
            item.hover = true;

            // hover展开子项时处理子项
            groups = groups.slice(0, gIndex + 1);
            if (item.children && item.children.length > 0) {
                // hover有子节点
                // 1. 恢复选中态
                // 2. 置空hover态
                item.children.forEach(c => {
                    c.hover = false;
                    if (!multiple) {
                        // 单选
                        c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
                    }
                })

                groups.push(item.children);
            }

            this.updater.digest({
                groups,
            })
        }), 100);
    },

    /**
     * 单选
     *   叶子节点：需要点击事件，选中叶子节点
     *   非叶子：不需要点击事件 / 需要点击事件，选中该节点
     */
    '@{select}<click>'(e) {
        e.stopPropagation();
        let { valueKey, groups, leafOnly } = this.updater.get();
        let { gIndex, iIndex } = e.params;
        let list = groups[gIndex];
        let item = list[iIndex];

        if (!item.children || !item.children.length || (!leafOnly && item.children.length)) {
            // 可选中的节点
            // 1. 选中叶子节点
            // 2. hover展开，非叶子节点也可选中
            let selectedValues = [item[valueKey]];
            this.updater.set({
                selectedValues,
            })
            this['@{single.cal}']();
            let viewOptions = this.viewOptions;
            if (viewOptions.submit) {
                viewOptions.submit(selectedValues);
            }
        }
    },

    /**
     * 多选
     */
    '@{check}<change>'(e) {
        e.stopPropagation();

        let { valueKey, groups, selectedValues, max, stateConstant } = this.updater.get();
        let last = (max > 0) ? (max - selectedValues.length) : 0;

        let endMap = {}, addValues = [];
        let _end = (item) => {
            if (item.children && item.children.length) {
                item.children.forEach(child => {
                    _end(child);
                })
            } else {
                if ((item.checkboxState == stateConstant.unchecked) && (!max || (max > 0 && last > 0))) {
                    last--;
                    addValues.push(item[valueKey]);
                }
                endMap[item[valueKey]] = true;
            }
        }

        let { gIndex, iIndex } = e.params;
        if (gIndex == -1 && iIndex == -1) {
            // 全选
            groups.forEach(list => {
                list.forEach(item => {
                    _end(item);
                })
            })
        } else {
            // 单个
            _end(groups[gIndex][iIndex]);
        }

        if (e.target.checked) {
            // 选中
            selectedValues = selectedValues.concat(addValues);
        } else {
            // 移除
            for (let i = 0; i < selectedValues.length; i++) {
                if (endMap[selectedValues[i]]) {
                    selectedValues.splice(i--, 1);
                }
            }
        }

        this.updater.set({
            selectedValues,
        })
        this['@{multiple.cal}']();

        // 点击确定才更新
        // let viewOptions = this.viewOptions;
        // if (viewOptions.check) {
        //     viewOptions.check(selectedValues);
        // }
    },

    /**
     * 展开时候单次搜索
     */
    '@{fn.search}'() {
        let that = this;
        let { list, map, keyword, textKey, valueKey, parentKey } = that.updater.get();

        if (!keyword) {
            that['@{single.cal}']();
        } else {
            let linkGap = `_${that.id}_`,
                hoverSearchVs = [], // 命中的第一个选项
                searchShowMap = {}; // 所有可展示的结果

            let _end = (item) => {
                if ((item._search_text.indexOf(keyword) > -1) && (hoverSearchVs.length == 0)) {
                    hoverSearchVs = item._search_value.split(linkGap);
                }

                if (item.children && item.children.length) {
                    item.children.forEach(child => {
                        Magix.mix(child, {
                            _search_text: [item._search_text, child[textKey]].join(linkGap),
                            _search_value: [item._search_value, child[valueKey]].join(linkGap),
                        });
                        _end(child);
                    })
                } else {
                    // 叶子节点
                    if (item._search_text.indexOf(keyword) > -1) {
                        item._search_value.split(linkGap).forEach(v => {
                            searchShowMap[v] = true;
                        })
                    }
                }
            };
            list.forEach(item => {
                Magix.mix(item, {
                    _search_text: item[textKey] + '',
                    _search_value: item[valueKey] + '',
                });
                _end(item);
            });

            let allHide = true,
                groups = [];
            if (hoverSearchVs.length > 0) {
                // 计算所有可展示的数据
                let _lp1 = (item) => {
                    Magix.mix(item, {
                        hover: false,
                        hide: !searchShowMap[item[valueKey]],
                    })
                    allHide = allHide && item.hide;
                    if (item.children && item.children.length) {
                        item.children.forEach(child => {
                            _lp1(child);
                        })
                    }
                }
                list.forEach(item => {
                    _lp1(item);
                })

                // 默认展开命中的第一个
                let _lp2 = (v) => {
                    let i = map[v];
                    i.hover = true;
                    if (i[parentKey] === '' || i[parentKey] === undefined || i[parentKey] === null) {
                        // 根节点
                        groups.unshift(list);
                    } else {
                        let siblings = map[i[parentKey]].children;
                        groups.unshift(siblings);
                        _lp2(i[parentKey]);
                    }
                }
                _lp2(hoverSearchVs[hoverSearchVs.length - 1]);
            } else {
                // 无匹配项
                allHide = true;
                groups = [list];
            }

            return {
                allHide,
                groups,
            }
        }
    },

    '@{search}<change>'(e) {
        e.stopPropagation();

        let that = this;
        let val = $.trim(e.eventTarget.value);
        that.updater.set({
            keyword: val
        });

        clearTimeout(that['@{search.delay.timer}']);
        that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(() => {
            if (val != that['@{last.value}']) {
                that['@{last.value}'] = val;
                let result = that['@{fn.search}']();
                that.updater.digest(result);
            }
        }), 250);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },

    '@{submit}<click>'(e) {
        let { min, max, selectedValues } = this.updater.get();
        if ((min > 0) && (selectedValues.length < min)) {
            this.updater.digest({
                errMsg: `至少选${min}个`
            })
            return;
        }
        if ((max > 0) && (selectedValues.length > max)) {
            this.updater.digest({
                errMsg: `至多选${max}个`
            })
            return;
        }

        let viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(selectedValues);
        }
    },


    /**
     * 多选取消
     */
    '@{cancel}<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },
});

