import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as I18n from '../mx-medusa/util';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    mixins: [Dialog],
    init(extra) {
        this.assign(extra);
    },

    type(selected, all, max) {
        // 1: 全不选；2：部分选中；3：全选；
        return ((!max && selected > 0 && selected == all) || (max > 0 && selected > 0 && selected == max)) ? 3 : (selected == 0 ? 1 : 2);
    },

    assign(extra) {
        let me = this;
        me.viewOptions = extra;
        me.updater.snapshot();

        // 防止id污染
        let data = $.extend(true, {}, me.viewOptions.data);
        ['vId', 'viewId', 'inputWidth', 'iv'].forEach(k => {
            delete data[k];
        });

        // 计算选中态
        let { parents, selectedItems, max } = data;
        let selectedMap = {};
        selectedItems.forEach(item => {
            selectedMap[item.value] = true;
        });

        let cs = 0, cc = 0;
        parents.forEach(parent => {
            parent.disabled = true;
            let ps = 0, pc = 0;
            parent.list.forEach(i => {
                parent.disabled = parent.disabled && i.disabled;
                i.selected = selectedMap[i.value] || false;
                i.hide = false;

                if (!i.disabled) {
                    // 计算非隐藏项的选中态
                    cc++;
                    pc++;

                    if (i.selected) {
                        cs++;
                        ps++;
                    }
                }
            });
            parent.type = me.type(ps, pc, max);
            parent.hide = false;
        });

        me.updater.set({
            ...data,
            type: me.type(cs, cc, max),
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
        let altered = me.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        if (this.viewOptions.prepare) {
            this.viewOptions.prepare();
        }

        let { keyword, dynamicSearch } = this.updater.get();
        if (keyword) {
            // 保留搜索关键词
            this['@{last.value}'] = keyword;
            if (!dynamicSearch) {
                // 非动态搜素时本地匹配一次
                this['@{fn.search}'](this['@{last.value}'], (result) => {
                    this.updater.digest(result);
                });
            }
        }

    },

    /**
     * 防止重复点击
     */
    '@{click.throttle}'() {
        let msc = 250;
        if (this['@{throttle.old}'] === undefined || this['@{throttle.old}'] === null) {
            this['@{throttle.old}'] = (new Date()).getTime();
            return true;
        } else {
            let newTime = (new Date()).getTime();
            if (newTime - this['@{throttle.old}'] > msc) {
                this['@{throttle.old}'] = (new Date()).getTime();
                return true;
            } else {
                return false;
            }
        }
    },

    /**
     * 单选
     */
    '@{select}<click>'(e) {
        e.stopPropagation();

        // 防止重复点击
        if (!this['@{click.throttle}']()) {
            return;
        }

        let viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            let { item, operationType } = e.params;
            viewOptions.submit({
                keyword: this.updater.get('keyword'),
                selectedItems: [item],
                operationType,
                operationItem: item,
            });
        };
    },

    /**
     * 单选，移除
     */
    async '@{delete}<click>'(e) {
        e.stopPropagation();

        // 防止重复点击
        if (!this['@{click.throttle}']()) {
            return;
        }

        let { parents, max } = this.updater.get();
        let { item: deleteItem, oper } = e.params;

        // 防止重复二次确认
        if (this['@{confirming}']) {
            return;
        }

        // 二次确认
        let confirmed = true;
        this['@{confirming}'] = true;
        if (oper && oper.confirmTitle && oper.confirmContent) {
            confirmed = await this.confirm({
                title: oper.confirmTitle,
                content: oper.confirmContent,
            }, {
                target: e.eventTarget,
                offset: {
                    left: 200,
                },
                asyncCallback: true // 已异步回调的方式响应
            });
        }
        this['@{confirming}'] = false;
        if (!confirmed) {
            return;
        }

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
        let cs = 0, cc = 0, // 用于计算全选状态（包含搜索结果）
            first = false, selectedItem = {};
        parents.forEach(parent => {
            let ps = 0, pc = 0;
            parent.list.forEach(i => {
                if (!i.hide) {
                    cc++;
                    pc++;

                    if (!i.disabled) {
                        if (deleteItem.selected && !first) {
                            first = true;
                            i.selected = true;
                        }
                        if (i.selected) {
                            cs++;
                            ps++;
                            selectedItem = i;
                        }
                    }
                }
            });
            // 1: 全不选；2：部分选中；3：全选；
            parent.type = this.type(ps, pc, max);
        })

        this.updater.digest({
            type: this.type(cs, cc, max),
            parents,
        });

        let viewOptions = this.viewOptions;
        if (viewOptions.delete) {
            viewOptions.delete({
                keyword: this.updater.get('keyword'),
                parents,
                selectedItems: [selectedItem],
                operationType: 'delete',
                operationItem: deleteItem,
            });
        }
    },

    /**
    * 多选分组全选
    * 全选，或者某一个组全选
    * 只计算非隐藏项
    */
    '@{checkParent}<change>'(e) {
        let me = this;
        let checked = e.target.checked;
        let { parentIndex } = e.params;
        let { parents, max, selectedItems } = me.updater.get();
        let last = max > 0 ? (max - selectedItems.length) : 0;

        let cs = 0, cc = 0,
            items = [], map = {};
        parents.forEach((parent, pi) => {
            let ps = 0, pc = 0;
            parent.list.forEach(i => {
                if (!i.hide && !i.disabled) {
                    cc++;
                    pc++;

                    if (parentIndex == 'all' || parentIndex == pi) {
                        if (checked) {
                            // 选中
                            if (!i.selected && ((max > 0 && last > 0) || !max)) {
                                if (max > 0) {
                                    last--;
                                }
                                i.selected = true;
                                items.push(i);
                                map[i.value] = true;
                            }
                            if (i.selected) {
                                cs++;
                                ps++;
                            }
                        } else {
                            // 取消选择
                            i.selected = false;
                            items.push(i);
                            map[i.value] = true;
                        }
                    } else {
                        if (i.selected) {
                            cs++;
                            ps++;
                        }
                    }
                }
            });
            parent.type = me.type(ps, pc, max);
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

        me.updater.digest({
            type: me.type(cs, cc, max),
            selectedItems,
            parents,
        })
    },

    /**
     * 多选单个
     */
    '@{check}<change>'(e) {
        let me = this;
        let checked = e.target.checked;
        let { parentIndex, itemIndex } = e.params;
        let { parents, max, selectedItems } = me.updater.get();
        let last = (max > 0) ? (max - selectedItems.length) : 0;

        let cs = 0, cc = 0,
            item = {};
        parents.forEach((parent, pi) => {
            let ps = 0, pc = 0;
            parent.list.forEach((i, ii) => {
                if (!i.hide && !i.disabled) {
                    cc++;
                    pc++;

                    if (parentIndex == pi && itemIndex == ii) {
                        if (checked) {
                            if ((max > 0 && last > 0) || !max) {
                                i.selected = true;
                                item = i;
                            }
                        } else {
                            i.selected = false;
                            item = i;
                        }
                    }
                    if (i.selected) {
                        cs++;
                        ps++;
                    }
                }
            });

            parent.type = me.type(ps, pc, max);
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

        me.updater.digest({
            type: me.type(cs, cc, max),
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
            viewOptions.cancel(e);
        }
    },

    '@{change.pager}<change>'(e) {
        e.stopPropagation();
        let viewOptions = this.viewOptions;
        if (viewOptions.pagechange) {
            viewOptions.pagechange({
                page: e.page,
                size: e.size,
                offset: e.offset,
            });
        }
    },

    '@{fn.search}'(val, callback) {
        let me = this;
        let { parents, max, dynamicSearch } = me.updater.get();

        if (dynamicSearch) {
            // 外抛事件动态搜索
            if (this.viewOptions.search) {
                this.viewOptions.search(val);
            }
        } else {
            if (!val) {
                let cs = 0, cc = 0;
                parents.forEach(parent => {
                    let ps = 0, pc = 0;
                    parent.list.forEach(i => {
                        i.hide = false;

                        if (!i.disabled) {
                            // 计算非隐藏项的选中态
                            cc++;
                            pc++;

                            if (i.selected) {
                                cs++;
                                ps++;
                            }
                        }
                    });
                    parent.type = me.type(ps, pc, max);
                    parent.hide = false;
                })

                callback({
                    type: me.type(cs, cc, max),
                    parents,
                    allHide: false,
                });
            } else {
                let cs = 0, cc = 0,
                    allHide = true;
                let lowVal = (val + '').toLocaleLowerCase();

                parents.forEach(parent => {
                    let ps = 0, pc = 0;

                    let groupHide = true;
                    parent.list.forEach(i => {
                        let text = i.text + '', value = i.value + '';

                        // text的匹配不区分大小写
                        // value区分
                        i.hide = (text.toLocaleLowerCase().indexOf(lowVal) < 0) && (value.indexOf(val) < 0);
                        groupHide = groupHide && i.hide;

                        if (!i.hide && !i.disabled) {
                            // 计算非隐藏项的选中态
                            cc++;
                            pc++;

                            if (i.selected) {
                                cs++;
                                ps++;
                            }
                        }
                    });

                    parent.type = me.type(ps, pc, max);
                    parent.hide = groupHide;
                    allHide = allHide && groupHide;
                })

                callback({
                    type: me.type(cs, cc, max),
                    parents,
                    allHide,
                });
            }
        }
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