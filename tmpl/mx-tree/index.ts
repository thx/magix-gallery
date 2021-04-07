/**
 * 包含dom操作
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from './util';
import * as I18n from '../mx-medusa/util';
const Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(ops) {
        let me = this;
        // 保留历史展开收起状态
        me['@{close.map}'] = {};
        me['@{owner.node}'] = $('#' + me.id);

        me.updater.snapshot();
        me.assign(ops);
    },
    assign(ops) {
        let me = this;
        let altered = me.updater.altered();

        let readOnly = (ops.readOnly + '') === 'true';
        let hasLine = (ops.hasLine + '') === 'true';
        let valueKey = ops.valueKey || 'value';
        let textKey = ops.textKey || 'text';
        let parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        let needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        let needExpand = (ops.needExpand + '') === 'true';
        me['@{origin.list}'] = ops.list || [];
        // 是否支持搜索
        let searchbox = (ops.searchbox + '') === 'true';
        // 搜索框宽度
        let width = ops.width || '100%';
        if (width.indexOf('%') < 0 && width.indexOf('px') < 0) {
            width += 'px';
        }

        // 组织树状结构
        let info = Util.listToTree(ops.list, valueKey, parentKey);
        let list;
        if (needAll) {
            let all = {};
            all[valueKey] = me.id + '_all';
            all[textKey] = I18n['select.all'];
            all.isAll = true;
            all.children = info.list;
            list = [all];
        } else {
            list = info.list
        }

        // 叶子节点的选中结果
        let valueType = 'bottom';
        let bottomValues = (ops.bottomValues || []).map(val => {
            return val + '';
        })
        if (ops.hasOwnProperty('realValues')) {
            // 汇总到父节点的选中值，realValues
            // 转成叶子节点选中值
            valueType = 'real';
            bottomValues = [];
            let realValues = (ops.realValues || []).map(val => {
                return val + '';
            })
            let _lp1 = (arr, match) => {
                arr.forEach(item => {
                    let val = item[valueKey] + '';
                    if (item.children && item.children.length > 0) {
                        _lp1(item.children, (match || (realValues.indexOf(val) > -1)));
                    } else {
                        // 叶子节点
                        if (match || (realValues.indexOf(val) > -1)) {
                            bottomValues.push(val);
                        }
                    }
                })
            }
            list.forEach(item => {
                let val = item[valueKey] + '';
                let match = (realValues.indexOf(val) > -1);
                if (item.children && item.children.length) {
                    _lp1(item.children, match);
                } else {
                    if (match) {
                        bottomValues.push(val);
                    }
                }
            })
        }

        // 展开收起状态，默认false
        // 切换数据时保留历史展开收起状态
        let close = (ops.close + '') === 'true';
        let map = {};
        let _lp2 = (arr) => {
            arr.forEach(item => {
                map[item[valueKey]] = close;
                if (item.children && item.children.length > 0) {
                    _lp2(item.children);
                }
            })
        }
        _lp2(list);
        me['@{close.map}'] = Magix.mix(map, me['@{close.map}']);

        me.updater.set({
            viewId: me.id,
            searchbox,
            width,
            keyword: me['@{last.value}'] = '',
            readOnly,
            hasLine,
            needExpand,
            valueType,
            valueKey,
            textKey,
            parentKey,
            list,
            closeMap: me['@{close.map}'],
            highlightMap: {},
            bottomValues
        });

        if (!altered) {
            altered = me.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            me.updater.snapshot();
            return true;
        }
        return false;
    },

    render() {
        this.updater.digest();

        // 恢复选中值
        let { bottomValues } = this.updater.get();
        if (bottomValues.length > 0) {
            this.loop((vf) => {
                vf.invoke('setValues', [bottomValues]);
            });
        }

        // 双向绑定
        this['@{trigger}']();
    },

    '@{change}<change>'(e) {
        e.stopPropagation();
        this['@{trigger}'](true);
    },

    '@{trigger}'(trigger) {
        let me = this;
        let { valueType, readOnly } = me.updater.get();
        if (readOnly) {
            // 只读模式无需绑定
            return;
        }

        let { values, items } = me[`get${valueType.slice(0, 1).toUpperCase() + valueType.slice(1)}`]();
        me['@{owner.node}'].val(values);
        if (trigger) {
            me['@{owner.node}'].trigger($.Event('change', {
                [`${valueType}Values`]: values,
                [`${valueType}Items`]: items
            }));
        }
    },

    /**
     * 向上汇总的节点，即子节点全选时，获取值为父节点value
     */
    getReal() {
        let me = this;
        let allValues = [], allItems = [];
        me.loop((vf) => {
            let result = vf.invoke('getRealInfos');
            allValues = allValues.concat(result.values);
            allItems = allItems.concat(result.items);
        })

        let pMap = {};
        let { parentKey, valueKey } = me.updater.get();
        me['@{origin.list}'].forEach(item => {
            pMap[item[valueKey]] = item[parentKey];
        });

        let realValues = [], realItems = [];
        for (let i = 0; i < allValues.length; i++) {
            let pValue = pMap[allValues[i]];
            if (!pValue || (allValues.indexOf(pValue + '') < 0)) {
                // 只保留父节点
                // 1. 无父节点
                // 2. 父节点不在选中集合里
                realValues.push(allValues[i]);
                realItems.push(allItems[i]);
            }
        }
        return {
            values: realValues,
            items: realItems
        };
    },

    getBottom() {
        let bottomValues = [], bottomItems = [];
        this.loop((vf) => {
            let { values, items } = vf.invoke('getBottomInfos', ['all']);
            bottomValues = bottomValues.concat(values);
            bottomItems = bottomItems.concat(items);
        })
        return {
            values: bottomValues,
            items: bottomItems
        };
    },

    getBottomValues() {
        let bottomValues = [];
        this.loop((vf) => {
            let { values } = vf.invoke('getBottomInfos', ['value']);
            bottomValues = bottomValues.concat(values);
        })
        return bottomValues;
    },

    getBottomItems() {
        let bottomItems = [];
        this.loop((vf) => {
            let { items } = vf.invoke('getBottomInfos', ['item']);
            bottomItems = bottomItems.concat(items);
        })
        return bottomItems;
    },

    loop(fn) {
        let me = this;
        let children = me.owner.children();
        let _loop = (children) => {
            for (let c of children) {
                if (c.startsWith('tree_')) {
                    // 每一个view只获取当前view的input选中态：不获取其子view的选中
                    let vf = Vframe.get(c);
                    fn(vf);

                    let cc = vf.children();
                    if (cc && (cc.length > 0)) {
                        _loop(cc);
                    }
                }

            }
        }
        _loop(children);
    },

    /**
     * 展开+命中高亮
     */
    '@{fn.search}'(val) {
        let me = this;
        let { textKey, valueKey, parentKey } = me.updater.get();
        let originList = me['@{origin.list}'];
        let originMap = {};
        // 所有都收起
        originList.forEach(item => {
            me['@{close.map}'][item[valueKey]] = true;
            originMap[item[valueKey]] = item;
        })

        // 搜索命中的匹配值
        me['@{highlight.map}'] = {};

        let list = [];
        let lowVal = (val + '').toLocaleLowerCase();
        for (let i = 0; i < originList.length; i++) {
            let item = originList[i];
            let it = (item[textKey] + '').toLocaleLowerCase();
            if (lowVal && (it.indexOf(lowVal) > -1)) {
                list.push(item);
                me['@{highlight.map}'][item[valueKey]] = true;
            }
        }
        if (list.length > 0) {
            // 命中值的父节点全部展开
            let lp = (item) => {
                if (item[parentKey]) {
                    me['@{close.map}'][item[parentKey]] = false;
                    lp(originMap[item[parentKey]]);
                }
            }
            list.forEach(item => {
                lp(item);
            })
        }

        let bottomValues = me.getBottomValues();
        me.updater.digest({
            closeMap: me['@{close.map}'],
            highlightMap: me['@{highlight.map}'],
            bottomValues
        })
        // 恢复选中值
        if (bottomValues.length > 0) {
            me.loop((vf) => {
                vf.invoke('setValues', [bottomValues]);
            });
        }
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
                me['@{fn.search}'](me['@{last.value}'] = val);
            }
        }), 250);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});