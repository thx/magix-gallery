import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        let data = $.extend(true, {}, e.data);
        // 防止id污染
        ['vId', 'viewId'].forEach(k => {
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
                empty: I18n['empty.text']
            }
        })
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
        let me = this;
        let viewOptions = me.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: [e.params.item]
            });
        }
    },

    /**
     * 多选全选
     */
    '@{checkAll}<click>'(e) {
        let checked = e.params.checked;
        let { parents, count, max, selectedItems: oldSelectedItems } = this.updater.get();
        let last = max > 0 ? (max - oldSelectedItems.length) : (count - oldSelectedItems.length);

        let selectedItems = [];
        parents.forEach(parent => {
            let ps = 0;
            parent.list.forEach(item => {
                if (checked) {
                    // 选中
                    if (!item.disabled) {
                        if (!item.selected && last > 0) {
                            last--;
                            item.selected = true;
                        }
                        if (item.selected) {
                            selectedItems.push(item);
                            ps++;
                        }
                    }
                } else {
                    // 取消选择
                    item.selected = false;
                }
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        })
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
        let { parents, count, max, selectedItems: oldSelectedItems } = this.updater.get();
        let last = max > 0 ? (max - oldSelectedItems.length) : (count - oldSelectedItems.length);
        let selectedItems = [];

        parents.forEach((parent, pi) => {
            if (parentIndex == pi) {
                let ps = 0;
                parent.list.forEach(item => {
                    if (checked) {
                        // 选中
                        if (!item.disabled) {
                            if (!item.selected && last > 0) {
                                last--;
                                item.selected = true;
                            }
                            if (item.selected) {
                                selectedItems.push(item);
                                ps++;
                            }
                        }
                    } else {
                        // 取消选择
                        item.selected = false;
                    }
                });
                // 1: 全不选；2：部分选中；3：全选；
                parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
            }
        })
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
        let { parents } = this.updater.get();
        let selectedItems = [];

        parents.forEach((parent, pi) => {
            let ps = 0;
            parent.list.forEach((item, ii) => {
                if (parentIndex == pi && itemIndex == ii) {
                    item.selected = checked;
                }
                if (item.selected) {
                    selectedItems.push(item);
                    ps++;
                }
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = (ps > 0 && ps == parent.count) ? 3 : (ps == 0 ? 1 : 2);
        })
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

        let { parents, keyword } = me.updater.get();
        let selectedItems = [];
        let selectedIndexes = [], index = 0; //用于判断选择是否连续
        parents.forEach(parent => {
            parent.list.forEach(item => {
                index += 1;
                if (item.selected) {
                    selectedItems.push(item);

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
                    errMsg: `请选择连续的${name || '数据'}`
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

    '@{search}<keyup,paste>'(e) {
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