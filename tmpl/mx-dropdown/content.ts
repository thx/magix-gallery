import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(extra) {
        this.assign(extra);
    },

    assign(extra) {
        this.viewOptions = extra;
        this.updater.snapshot();

        let data = $.extend(true, {}, this.viewOptions.data);
        // 防止id污染
        ['vId', 'viewId', 'inputWidth', 'iv'].forEach(k => {
            delete data[k];
        });

        // 计算选中态
        let { parents, selectedItems } = data;
        let selectedMap = {};
        selectedItems.forEach(item => {
            selectedMap[item.value] = true;
        });
        let count = 0;
        parents.forEach(parent => {
            let ps = 0;
            parent.count = 0;
            parent.disabled = true;
            parent.list.forEach(item => {
                item.selected = selectedMap[item.value] || false;
                parent.disabled = parent.disabled && item.disabled;
                parent.count++;
                if (item.selected) {
                    ps++;
                }
                count++;
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        });

        this.updater.set({
            ...data,
            count,
            parents,
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel'],
                empty: I18n['empty.text'],
            },
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        let me = this;
        let { keyword } = me.updater.get();
        me['@{fn.search}'](me['@{last.value}'] = keyword, (result) => {
            me.updater.digest(result);
        });

        let viewOptions = me.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },

    /**
     * 单选
     */
    '@{select}<click>'(e) {
        e.stopPropagation();

        let me = this;
        let viewOptions = me.viewOptions;
        if (viewOptions.submit) {
            let { item, operationType } = e.params;
            let d = {
                keyword: me.updater.get('keyword'),
                selectedItems: [item],
                operationType,
                operationItem: item,
            }
            viewOptions.submit(d);
        }
    },

    /**
     * 单选，移除
     */
    '@{delete}<click>'(e) {
        e.stopPropagation();

        let me = this;
        let { parents } = me.updater.get();
        let deleteItem = e.params.item;
        for (let i = 0; i < parents.length; i++) {
            for (let j = 0; j < parents[i].list.length; j++) {
                if (parents[i].list[j].value == deleteItem.value) {
                    parents[i].list.splice(j, 1);
                    break;
                }
            }
            if (parents[i].list.length == 0) {
                parents.splice(i, 1);
            }
        }

        // 如果删除项为当前选中项，回置到可选项第一个
        let count = 0, first = false, selectedItem = {};
        parents.forEach(parent => {
            let ps = 0;
            parent.count = 0;
            parent.disabled = true;
            parent.list.forEach(item => {
                if (deleteItem.selected && !item.disabled && !first) {
                    first = true;
                    item.selected = true;
                }
                parent.disabled = parent.disabled && item.disabled;
                parent.count++;
                if (item.selected) {
                    ps++;
                    selectedItem = item;
                }
                count++;
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        })

        me.updater.digest({
            count,
            parents
        });

        let viewOptions = me.viewOptions;
        if (viewOptions.delete) {
            viewOptions.delete({
                keyword: me.updater.get('keyword'),
                parents,
                selectedItems: [selectedItem],
                operationType: 'delete',
                operationItem: deleteItem,
            });
        }
    },

    /**
     * 多选全选
     */
    '@{checkAll}<change>'(e) {
        let checked = e.target.checked;
        let { parents, count, max, selectedItems } = this.updater.get();
        let last = max > 0 ? (max - selectedItems.length) : (count - selectedItems.length);

        let items = [], map = {};
        parents.forEach(parent => {
            let ps = 0;
            parent.list.forEach(i => {
                if (checked) {
                    // 选中
                    if (!i.disabled) {
                        if (!i.selected && last > 0) {
                            last--;
                            i.selected = true;
                            items.push(i);
                            map[i.value] = true;
                        }
                        if (i.selected) {
                            ps++;
                        }
                    }
                } else {
                    // 取消选择
                    i.selected = false;
                    items.push(i);
                    map[i.value] = true;
                }
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        });

        // 历史选中可能不在当前选项内
        for (let i = 0; i < selectedItems.length; i++) {
            if (map[selectedItems[i].value]) {
                selectedItems.splice(i--, 1);
            }
        }
        if (checked) {
            selectedItems = selectedItems.concat(items);
        }

        this.updater.digest({
            selectedItems,
            parents,
        })
    },

    /**
    * 多选分组全选
    */
    '@{checkParent}<change>'(e) {
        let checked = e.target.checked;
        let { parentIndex } = e.params;
        let { parents, count, max, selectedItems } = this.updater.get();
        let last = max > 0 ? (max - selectedItems.length) : (count - selectedItems.length);

        let items = [], map = {};
        parents.forEach((parent, pi) => {
            if (parentIndex == pi) {
                let ps = 0;
                parent.list.forEach(i => {
                    if (!i.disabled) {
                        if (checked) {
                            // 选中
                            if (!i.selected && last > 0) {
                                last--;
                                i.selected = true;
                                items.push(i);
                                map[i.value] = true;
                            }
                            if (i.selected) {
                                ps++;
                            }
                        } else {
                            // 取消选择
                            i.selected = false;
                            items.push(i);
                            map[i.value] = true;
                        }
                    }
                });
                // 1: 全不选；2：部分选中；3：全选；
                parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
            }
        });

        // 历史选中可能不在当前选项内
        for (let i = 0; i < selectedItems.length; i++) {
            if (map[selectedItems[i].value]) {
                selectedItems.splice(i--, 1);
            }
        }
        if (checked) {
            selectedItems = selectedItems.concat(items);
        }

        this.updater.digest({
            selectedItems,
            parents,
        })
    },

    /**
     * 多选单个
     */
    '@{check}<change>'(e) {
        let checked = e.target.checked;
        let { parentIndex, itemIndex } = e.params;
        let { parents, selectedItems } = this.updater.get();

        let item = {};
        parents.forEach((parent, pi) => {
            let ps = 0;
            parent.list.forEach((i, ii) => {
                if (parentIndex == pi && itemIndex == ii) {
                    i.selected = checked;
                    item = i;
                }
                if (i.selected) {
                    ps++;
                }
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        })

        // 历史选中可能不在当前选项内
        for (let i = 0; i < selectedItems.length; i++) {
            if (selectedItems[i].value + '' === item['value'] + '') {
                selectedItems.splice(i, 1);
                break;
            }
        }
        if (checked) {
            selectedItems.push(item);
        }

        this.updater.digest({
            selectedItems,
            parents,
        })
    },

    /**
     * 多选确定
     */
    '@{submit}<click>'(e) {
        let me = this;
        let viewOptions = me.viewOptions;

        let { parents, keyword, selectedItems } = me.updater.get();
        let selectedIndexes = [], index = 0; //用于判断选择是否连续
        parents.forEach(parent => {
            parent.list.forEach(item => {
                index += 1;
                if (item.selected) {
                    let len = selectedIndexes.length;
                    if (len == 0) {
                        selectedIndexes.push(index);
                    } else {
                        if (selectedIndexes[len - 1] + 1 == index) {
                            selectedIndexes[len - 1] = index;
                        } else {
                            selectedIndexes.push(index);
                        }
                    }
                }
            })
        })

        let submitFn = () => {
            let { min, max, continuous, name } = me.updater.get();
            if ((min > 0) && (selectedItems.length < min)) {
                me.updater.digest({
                    errMsg: `至少选${min}个`
                })
                return;
            }
            if ((max > 0) && (selectedItems.length > max)) {
                me.updater.digest({
                    errMsg: `至多选${max}个`
                })
                return;
            }
            if (continuous && (selectedItems.length > 0) && (selectedIndexes.length > 1)) {
                // 连续选择
                me.updater.digest({
                    errMsg: `请选择连续${name || '数据'}`
                })
                return;
            }

            if (viewOptions.submit) {
                viewOptions.submit({
                    keyword,
                    selectedItems
                });
            }
        }
        if (viewOptions.data.submitChecker) {
            // 支持自定义校验函数
            viewOptions.data.submitChecker(selectedItems).then((errMsg) => {
                if (!errMsg) {
                    submitFn();
                } else {
                    me.updater.digest({
                        errMsg
                    })
                }
            });
        } else {
            submitFn();
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

    '@{fn.search}'(val, callback) {
        let me = this;
        let { parents } = me.updater.get();

        let allHide;
        if (!val) {
            allHide = false;
            parents.forEach(parent => {
                parent.hide = false;
                parent.list.forEach(item => {
                    item.hide = false;
                })
            })
        } else {
            allHide = true;
            let lowVal = (val + '').toLocaleLowerCase();
            parents.forEach(parent => {
                let groupHide = true;
                parent.list.forEach(item => {
                    let text = item.text + '',
                        value = item.value + '';

                    // text的匹配不区分大小写
                    // value区分
                    item.hide = (text.toLocaleLowerCase().indexOf(lowVal) < 0) && (value.indexOf(val) < 0);
                    groupHide = groupHide && item.hide;
                })
                parent.hide = groupHide;
                allHide = allHide && groupHide;
            })
        }

        callback({
            parents,
            allHide
        });
    },

    '@{search}<change>'(e) {
        e.stopPropagation();

        let me = this;
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (result) => {
                    me.updater.digest(result);
                });
            }
        }), 250);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});