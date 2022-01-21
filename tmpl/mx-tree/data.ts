/**
 * 数据处理版
 * 缺点：展开收起无缓动效果
 * 优点：只渲染展开的数据，性能较好
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import Util from './util';
import * as I18n from '../mx-medusa/util';
const Vframe = Magix.Vframe;
const UncheckedState = 1;
const IndeterminateState = 2;
const CheckedState = 3;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@data.html',
    init(ops) {
        // 保留历史展开收起状态
        this['@{close.map}'] = {};
        this['@{owner.node}'] = $('#' + this.id);

        this.assign(ops);
    },
    assign(ops) {
        let me = this;
        me.updater.snapshot();

        // 选择模式mode
        //      checkbox：多选（默认）
        //      radio：单选
        //      readonly：只读
        // 兼容老的只读配置read-only=true的api
        let mode = ops.mode || ((ops.readOnly + '' === 'true') ? 'readonly' : 'checkbox');
        if (['checkbox', 'radio', 'readonly'].indexOf(mode) < 0) {
            mode = 'checkbox';
        }

        // 取值key
        let valueKey = ops.valueKey || 'value';
        let textKey = ops.textKey || 'text';
        let parentKey = ops.parentKey || 'pValue';

        // 是否有连接线
        let hasLine = (ops.hasLine + '') === 'true';

        // 是否需要全选功能，默认关闭
        let needAll = (ops.needAll + '') === 'true';
        if (mode == 'radio') {
            needAll = false;
        }

        // 是否可展开收起，默认false
        let needExpand = (ops.needExpand + '') === 'true';

        // 是否支持搜索
        let searchbox = (ops.searchbox + '') === 'true';

        // 搜索框宽度
        let width = ops.width || '100%';
        if (width.indexOf('%') < 0 && width.indexOf('px') < 0) {
            width += 'px';
        }

        me['@{origin.list}'] = ops.list || [];
        me['@{origin.map}'] = {};
        me['@{origin.list}'].forEach(item => {
            me['@{origin.map}'][item[valueKey]] = item;
        });

        // 组织树状结构
        let info = Util.listToTree(ops.list, valueKey, parentKey);
        Magix.mix(info, {
            children: needAll ? $.extend(true, [], [{
                [valueKey]: me.id + '_all',
                [textKey]: I18n['select.all'],
                isAll: true,
                children: info.list
            }]) : info.list
        })

        // 叶子节点的选中结果
        let valueType = 'bottom';
        let bottomMap = {};
        (ops.bottomValues || []).forEach(val => {
            bottomMap[val] = true;
        })
        if (mode == 'checkbox' && ops.hasOwnProperty('realValues')) {
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
            info.children.forEach(item => {
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
        } else if (mode == 'radio' && ops.selected !== undefined && ops.selected !== null) {
            // 单选：结构统一
            bottomMap[ops.selected] = true;
        }

        // 递归判断每个节点的状态
        let getCheckboxState = (item) => {
            let allCount = 0,
                selectedCount = 0;
            let _lp2 = (item) => {
                if (item.children && item.children.length) {
                    item.children.forEach(sub => {
                        _lp2(sub);
                    })
                } else {
                    // 叶子节点
                    allCount++;
                    if (bottomMap[item[valueKey]]) {
                        selectedCount++;
                    }
                }
            }
            _lp2(item);

            let state = UncheckedState;
            if (selectedCount > 0) {
                state = (selectedCount == allCount) ? CheckedState : IndeterminateState;
            }
            return state;
        }

        // 展开收起状态，默认false
        // 切换数据时保留历史展开收起状态
        let close = (ops.close + '') === 'true';
        let closeMap = {};
        let _lp3 = (arr) => {
            arr.forEach(item => {
                // 获取当前节点展开状态
                if (item[valueKey] == `${me.id}_all`) {
                    // 全选节点不计入默认收起状态
                    closeMap[item[valueKey]] = false;
                } else {
                    closeMap[item[valueKey]] = close;
                }

                // 获取当前节点选中状态
                item.state = getCheckboxState(item);

                if (item.children && item.children.length > 0) {
                    _lp3(item.children);
                }
            })
        }
        _lp3(info.children);
        me['@{close.map}'] = Magix.mix(closeMap, me['@{close.map}']);

        me.updater.set({
            viewId: me.id,
            height: ops.height,
            searchbox,
            width,
            keyword: me['@{last.value}'] || '',
            mode,
            hasLine,
            needExpand,
            valueType,
            valueKey,
            textKey,
            parentKey,
            info,
            closeMap: me['@{close.map}'],
            highlightMap: {}
        });

        // altered是否有变化 true：有变化
        let altered = me.updater.altered();
        return altered;
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
        let { valueType, valueKey, mode, info } = me.updater.get();
        if (mode == 'readonly') {
            // 只读模式无需绑定
            return;
        }

        // 叶子节点
        let bottomValues = [], bottomItems = [];
        let _lp1 = (arr) => {
            arr.forEach(item => {
                if (item.children && item.children.length) {
                    _lp1(item.children);
                } else {
                    if (item.state == CheckedState) {
                        bottomValues.push(item[valueKey]);
                        bottomItems.push(item);
                    }
                }
            })
        }
        _lp1(info.children);

        // 汇总到父节点
        let realValues = [], realItems = [];
        let _lp2 = (arr) => {
            arr.forEach(item => {
                if (item.state == CheckedState) {
                    realValues.push(item[valueKey]);
                    realItems.push(item);
                } else {
                    if (item.children && item.children.length) {
                        _lp2(item.children);
                    }
                }
            })
        }
        _lp2(info.children);
        if (realValues.length == 1 && realValues[0] == `${me.id}_all`) {
            // 全选功能
            realValues = [], realItems = [];
            info.children[0].children.forEach(item => {
                realValues.push(item[valueKey]);
                realItems.push(item);
            })
        }

        if (mode == 'checkbox') {
            // 多选
            let data = {
                bottomValues,
                bottomItems,
                realValues,
                realItems
            }
            me['@{owner.node}'].val(data[`${valueType}Values`]);
            if (trigger) {
                me['@{owner.node}'].trigger($.Event('change', data));
            }
        } else if (mode == 'radio') {
            // 单选
            let value = (bottomValues[0] !== undefined && bottomValues[0] !== null) ? bottomValues[0] : '';
            me['@{owner.node}'].val(value);
            if (trigger) {
                me['@{owner.node}'].trigger($.Event('change', {
                    selected: value
                }));
            }
        }

    },

    /**
     * 展开+命中高亮
     */
    '@{fn.search}'(val) {
        let me = this;
        let { textKey, valueKey, parentKey } = me.updater.get();
        let lowVal = (val + '').toLocaleLowerCase();

        let originList = me['@{origin.list}'], originMap = {};
        originList.forEach(item => {
            // 有搜索值时：所有都收起
            // 无搜索值时：所有都展开
            me['@{close.map}'][item[valueKey]] = !!lowVal;
            originMap[item[valueKey]] = item;
        })

        // 搜索命中的匹配值
        me['@{highlight.map}'] = {};

        if (lowVal) {
            let list = [];
            for (let i = 0; i < originList.length; i++) {
                let item = originList[i];
                let it = (item[textKey] + '').toLocaleLowerCase(),
                    iv = (item[valueKey] + '').toLocaleLowerCase();
                if (it.indexOf(lowVal) > -1 || iv.indexOf(lowVal) > -1) {
                    list.push(item);
                    me['@{highlight.map}'][item[valueKey]] = true;
                }
            }
            if (list.length > 0) {
                // 命中值的父节点全部展开
                let _lp = (item) => {
                    if (item[parentKey]) {
                        me['@{close.map}'][item[parentKey]] = false;
                        _lp(originMap[item[parentKey]]);
                    }
                }
                list.forEach(item => {
                    _lp(item);
                })
            }
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
        }), 500);
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});