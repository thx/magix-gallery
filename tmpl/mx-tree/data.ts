import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from './util';
import * as I18n from '../mx-medusa/util';
const Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@data.html',
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

        // 是否支持搜索
        let searchbox = (ops.searchbox + '') === 'true';
        let width = ops.width;

        me['@{origin.list}'] = ops.list || [];
        me['@{origin.map}'] = {};
        me['@{origin.list}'].forEach(item => {
            me['@{origin.map}'][item[valueKey]] = item;
        });

        // 组织树状结构
        let info = Util.listToTree(ops.list, valueKey, parentKey);
        if (needAll) {
            info.children = $.extend(true, [], [{
                [valueKey]: me.id + '_all',
                [textKey]: I18n['select.all'],
                isAll: true,
                children: info.list
            }])
        } else {
            info.children = info.list;
        }

        // 叶子节点的选中结果
        let valueType = 'bottom';
        let bottomMap = {};
        (ops.bottomValues || []).forEach(val => {
            bottomMap[val] = true;
        })
        if (ops.hasOwnProperty('realValues')) {
            // 汇总到父节点的选中值，realValues
            // 转成叶子节点选中值
            valueType = 'real';
            bottomMap = {};
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
                            bottomMap[val] = true;
                        }
                    }
                })
            }
            info.list.forEach(item => {
                let val = item[valueKey] + '';
                let match = (realValues.indexOf(val) > -1);
                if (item.children && item.children.length) {
                    _lp1(item.children, match);
                } else {
                    if (match) {
                        bottomMap[val] = true;
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
        _lp2(info.list);
        me['@{close.map}'] = Magix.mix(map, me['@{close.map}']);

        me.updater.set({
            viewId: me.id,
            searchbox,
            width,
            keyword: me['@{last.value}'] || '',
            readOnly,
            hasLine,
            needExpand,
            valueType,
            valueKey,
            textKey,
            parentKey,
            info,
            closeMap: me['@{close.map}'],
            highlightMap: {},
            bottomMap
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

        // 双向绑定
        this['@{trigger}']();
    },

    '@{change}<change>'(e) {
        e.stopPropagation();
        this['@{trigger}'](true);
    },

    '@{trigger}'(trigger) {
        let me = this;
        let { valueType, readOnly, info } = me.updater.get();
        if (readOnly) {
            // 只读模式无需绑定
            return;
        }

        let { parentKey, valueKey, bottomMap } = me.updater.get();
        let map = me['@{origin.map}'];

        // 叶子节点
        let bottomValues = [], bottomItems = [];
        for (let v in bottomMap) {
            if (bottomMap[v]) {
                bottomValues.push(v);
                bottomItems.push(map[v]);
            }
        }

        // 汇总到父节点
        let allValues = [], realValues = [], realItems = [];
        let _lp = (item) => {
            if (item.children && item.children.length) {
                item.children.forEach(cc => {
                    _lp(cc);
                })
            }
            if (item.selected) {
                allValues.push(item[valueKey] + '');
            }
        }
        info.children.forEach(item => {
            _lp(item);
        })

        for (let i = 0; i < allValues.length; i++) {
            let item = map[allValues[i]];
            let pValue = item[parentKey];
            if (!pValue || (allValues.indexOf(pValue + '') < 0)) {
                // 只保留父节点
                // 1. 无父节点
                // 2. 父节点不在选中集合里
                realValues.push(allValues[i]);
                realItems.push(item);
            }
        }
        let d = {
            bottomValues,
            bottomItems,
            realValues,
            realItems
        }

        me['@{owner.node}'].val(d[`${valueType}Values`]);
        if (trigger) {
            me['@{owner.node}'].trigger($.Event('change', d));
        }
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

        me.updater.digest({
            closeMap: me['@{close.map}'],
            highlightMap: me['@{highlight.map}']
        })
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