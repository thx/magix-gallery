/**
 * 下拉框追加到body
 * 支持多选 or 单选
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
const ShowDelay = 100;
const HideDelay = 200;
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@bd.html',
    init(ops) {
        this.assign(ops);
    },
    assign(ops) {
        let me = this;
        Monitor['@{setup}']();

        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;

        // 多选还是单选
        let multiple = (ops.multiple + '' === 'true'),
            needAll = (ops.needAll + '' !== 'false'),
            needGroup = (ops.needGroup + '' === 'true');

        let textKey = ops.textKey || 'text',
            valueKey = ops.valueKey || 'value',
            parentKey = ops.parentKey || 'pValue';

        let originList = [], list = [];
        if (ops.adcList && ops.adcList.length > 0) {
            originList = ops.adcList;
            list = originList.map(item => {
                return {
                    ...item,
                    text: item.name,
                    value: item.code,
                    tip: item.description,
                    disabled: item.properties?.disabled + '' === 'true',
                    disabledTip: item.properties?.disabledTip,
                    pValue: item.properties?.parentCode,
                }
            })
        } else {
            originList = ops.list || [];
            if (typeof originList[0] === 'object') {
                // 本身是个对象
                // 存在分组的情况
                list = originList.map(item => {
                    return {
                        ...item,
                        text: item[textKey],
                        value: item[valueKey],
                        pValue: item[parentKey],
                    };
                })
            } else {
                // 直接value列表（无分组）
                list = originList.map(value => {
                    return {
                        text: value,
                        value: value,
                    };
                })
            };
        }

        // 多选上下限范围
        let min = +ops.min || 0,
            max = +ops.max || 0;
        if ((max > 0) && (min > max)) {
            min = max;
        }
        // 多选是否要求连续选择
        let continuous = (ops.continuous + '' === 'true');

        // 单选：如果有空提示文案，默认补上一个选项
        if (!multiple && ops.emptyText) {
            list.unshift({
                text: ops.emptyText,
                value: ''
            })
        }

        let hasGroups = false, parents = [];
        if ((ops.parents && ops.parents.length > 0) || (ops.adcParents && ops.adcParents.length > 0)) {
            if (ops.adcParents && ops.adcParents.length > 0) {
                // adc树结构
                parents = ops.adcParents.map(p => {
                    return {
                        ...p,
                        value: p.code,
                        text: p.name,
                    }
                })
            } else {
                parents = JSON.parse(JSON.stringify(ops.parents));
            }

            let groupMap = {};
            list.forEach(item => {
                let pValue = item.pValue || '';
                groupMap[pValue] = groupMap[pValue] || [];
                groupMap[pValue].push(item);
            });

            for (let i = 0; i < parents.length; i++) {
                let p = parents[i];
                p.list = groupMap[p.value] || [];
                delete groupMap[p.value];
                if (p.list.length == 0) {
                    parents.splice(i--, 1);
                }
            }
            hasGroups = (parents.length > 0);

            // 无匹配分组的，插入最前方，保留原始顺序
            let remainList = [];
            list.forEach(item => {
                if (groupMap[item.pValue]) {
                    remainList.push(item);
                }
            });
            if (remainList.length > 0) {
                parents.unshift({
                    list: remainList
                })
            }
        } else {
            // 包装成一个组，不显示组信息
            hasGroups = false;
            parents = [{ list }];
        }

        let selected = [];
        if (multiple) {
            // 多选：已选中数据 数组 or 字符串
            if ($.isArray(ops.selected)) {
                // 数组，保留初始数据状态，双向绑定原样返回
                me['@{bak.type}'] = 'array';
                selected = ops.selected;
            } else {
                // 字符串
                selected = (ops.selected === undefined || ops.selected === null) ? [] : (ops.selected + '').split(',');
            }
        } else {
            // 单选：字符串
            // 单选不用split(',')避免value值本身就有,分隔
            selected = (ops.selected === undefined || ops.selected === null) ? [] : [(ops.selected + '')];
        }

        let selectedItems = [];
        if (multiple || (!multiple && $.isEmptyObject(ops.item))) {
            // 多选
            // 单选 无item只有selected
            let map = Magix.toMap(list, 'value');
            selected.forEach(value => {
                let selectedItem = map[value];

                //未提供选项，或提供的选项不在列表里
                if (!$.isEmptyObject(selectedItem)) {
                    selectedItems.push(selectedItem);
                }
            });
        } else {
            selectedItems = [{
                ...ops.item,
                text: ops.item[textKey],
                value: ops.item[valueKey],
                pValue: ops.item[parentKey],
            }];
        }

        // 多选：数据量超过20个，默认一行显示4个，若手动指定over=false，一行一个
        let over = (multiple && originList.length > 20 && ops.over + '' !== 'false');

        // 多选显示模式，text文案，tag可操作标签
        let mode = ops.mode || 'text';

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        me['@{pos.init}'] = false;

        me.updater.set({
            mode,
            placement: ops.placement || 'bottom',
            tip: ops.tip,
            name: ops.name || '', // 前缀
            over,
            multiple,
            needAll,
            needGroup, // 分组全选功能
            min,
            max,
            continuous,
            emptyText: ops.emptyText || I18n['choose'], // 空状态文案
            searchbox: ops.searchbox + '' === 'true',
            dynamicSearch: ops.dynamicSearch + '' === 'true', // 动态搜索
            hasGroups,
            parents,
            originList,
            selectedItems,
            // expand: false, // assign的时候不重复初始化，防止展开的场景下数据更新
            height: (ops.height || 292),
            submitChecker: ops.submitChecker, // 提交前自定义校验函数
            size: ops.size || '',
            pagination: ops.pagination, // 单选分页
        });

        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            $('#mx_output_' + me.id).remove();
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();

            ['@{dealy.show.timer}', '@{dealy.hide.timer}', '@{anim.timer}'].forEach(timerKey => {
                if (me[timerKey]) {
                    clearTimeout(me[timerKey]);
                }
            });
        });

        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        switch (me['@{trigger.type}']) {
            case 'click':
                // 点击展开
                oNode.off('click.ddb').on('click.ddb', (e) => {
                    if (mode == 'tag' && multiple && e.target.className && e.target.className.indexOf('mx-trigger-tag-delete') > -1) {
                        return;
                    };

                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        if (me['@{ui.disabled}'] || me.updater.get('animing')) {
                            return;
                        };

                        me.updater.digest({ animing: true })
                        me['@{anim.timer}'] = setTimeout(() => {
                            me.updater.digest({ animing: false })
                        }, me['@{get.css.time.var}']('--mx-comp-expand-amin-timer'));

                        if (me.updater.get('expand')) {
                            me['@{hide}']();
                        } else {
                            me['@{show}']();
                        }
                    }), ShowDelay);
                })
                break;

            case 'hover':
                // hover展开
                oNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);

                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        if (!me['@{ui.disabled}']) {
                            me['@{show}'](); //等待内容显示
                        }
                    }), ShowDelay);
                }, () => {
                    me['@{delay.hide}']();
                });
                break;
        }

        // 固定刷新
        return true;
    },
    render() {
        this.updater.digest();
        this['@{val}']();

        // 展开的情况下外部digest，再次刷新下下拉列表，防止此时数据更新
        if (this.updater.get('expand')) {
            this['@{show}'](true);
        }
    },

    '@{val}'(fire) {
        let me = this;
        let { selectedItems, operationType, operationItem, multiple } = me.updater.get();
        let texts = [], values = [];
        selectedItems.forEach(item => {
            item.error = false;
            texts.push(item.text);
            values.push(item.value);
        })

        me.updater.digest({
            selectedText: texts.join(','),
        })

        let val;
        if (me['@{bak.type}'] == 'array') {
            // 初始化为数组
            val = values;
        } else {
            // 初始化为字符串
            val = values.join(',');
        }

        me['@{owner.node}'].val(val);
        if (fire) {
            let d = {
                type: 'change',
                selected: val,
                values,
                texts,
                value: values.join(','),
                text: texts.join(','),
            }
            if (operationType && operationItem) {
                Magix.mix(d, {
                    operationType,
                    operationItem,
                })
            }
            if (multiple) {
                // 多选
                Magix.mix(d, {
                    items: selectedItems,
                })
            } else {
                // 单选
                Magix.mix(d, {
                    item: selectedItems[0],
                })
            }
            me['@{owner.node}'].trigger(d);
        }
    },
    '@{init}'() {
        let me = this;

        let toggleNode = $('#toggle_' + me.id);
        let posWidth = toggleNode.outerWidth(),
            vId = me.id;

        // 多选大尺寸展现样式上稍有差异
        let { over, placement, size } = me.updater.get();
        let minWidth = over ? Math.max(posWidth, 600) : posWidth;
        let maxWidth = over ? minWidth : Math.max(minWidth * 2.5, 180);

        let ddId = `mx_output_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="@index.less:dropdown-output ${(placement == 'top') ? 'mx-output-top' : 'mx-output-bottom'} ${over ? '@index.less:dropdown-menu-group' : ''}" 
                id="${ddId}" data-size="${size}"
                style="min-width: ${minWidth}px; max-width: ${maxWidth}px;"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            let ddNode = me['@{set.pos}']();

            let triggerType = me['@{trigger.type}'];
            if (triggerType == 'hover') {
                ddNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, () => {
                    me['@{delay.hide}']();
                });
            }
        });
        me['@{content.vf}'] = vf;
    },

    '@{inside}'(node) {
        // 翻页 or 动态搜索场景的loading
        let sizzleId = this['@{content.vf}'].id;
        let loadingMask = $(`[data-loading-sizzle="${sizzleId}"]`);
        return Magix.inside(node, this.id)
            || Magix.inside(node, `mx_output_${this.id}`)
            || (loadingMask[0] && Magix.inside(node, loadingMask[0].id));
    },

    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    },

    '@{delete}<click>'(e) {
        e.stopPropagation && e.stopPropagation();
        if (this.updater.get('disabled')) {
            return;
        }

        let { selectedItems, min } = this.updater.get();
        let index = e.params.index;
        if (min > 0 && selectedItems.length <= min) {
            selectedItems[index].error = true;
            this.updater.digest({
                selectedItems
            });
            return;
        };

        let tag = this['@{owner.node}'].find(`[data-tag="${this.id}_${index}"]`);
        tag.animate({
            width: 0,
            opacity: 0,
        }, 200, () => {
            selectedItems.splice(index, 1);
            this.updater.digest({
                selectedItems
            });
            this['@{val}'](true);
        });
    },

    '@{show}'(force) {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }

        let data = me.updater.get();
        if (data.expand && !force) { return; };

        me['@{content.vf}'].mountView('@./content', {
            data,
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = me['@{set.pos}']();
                me['@{mx.output.show}'](ddNode);
                me['@{owner.node}'].trigger('focusin');
                Monitor['@{add}'](me);
            },
            submit: (result) => {
                // 单选 or 多选选中
                me['@{hide}']();
                me.updater.set(result);
                me['@{val}'](true);
            },
            delete: (result) => {
                // 单选移除
                me.updater.set(result);
                me['@{val}'](true);
            },
            cancel: () => {
                // 多选关闭
                me['@{hide}']();
            },
            pagechange: (d) => {
                // 动态搜索
                me['@{owner.node}'].trigger({
                    type: 'pagechange',
                    ...d,
                    sizzleId: me['@{content.vf}'].id,
                });
            },
            search: (keyword) => {
                // 动态搜索
                me['@{owner.node}'].trigger({
                    type: 'search',
                    keyword,
                    sizzleId: me['@{content.vf}'].id,
                });
            }
        })
        me.updater.digest({
            expand: true
        })
    },
    '@{delay.hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), HideDelay);
        Monitor['@{remove}'](me);
    },
    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        let { expand } = me.updater.get();
        if (expand) {
            me.updater.digest({
                expand: false
            })
            let ddNode = $('#mx_output_' + me.id);
            me['@{mx.output.hide}'](ddNode);

            // 双向绑定通知
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{set.pos}'() {
        let { placement } = this.updater.get();
        let oNode = this['@{owner.node}'];
        let ddNode = $('#mx_output_' + this.id);

        let winWidth = window.innerWidth,
            winHeight = window.innerHeight,
            winScrollTop = $(window).scrollTop(),
            height = oNode.outerHeight(),
            offset = oNode.offset(),
            rWidth = ddNode.outerWidth(),
            rHeight = ddNode.outerHeight();

        // 左侧：修正到可视范围之内
        let left = offset.left;
        if (left + rWidth > winWidth) {
            let scrollbarWidth = winWidth - document.documentElement.clientWidth;
            left = winWidth - rWidth - scrollbarWidth;
        }

        // 上方
        let top;
        if (placement == 'top') {
            // 向上展开
            top = offset.top - rHeight;
            if (top < 0) {
                top = 0;
            }
        } else {
            // 向下展开
            // 修正到可视范围之内
            top = offset.top + height;
            if (top + rHeight > winHeight + winScrollTop) {
                top = winHeight + winScrollTop - rHeight - 8;
            }
        }

        ddNode.css({
            left,
            top,
            bottom: 'auto',
        });
        return ddNode;
    },

    /**
     * 全屏右出浮层中使用
     */
    '$doc<dialogScoll>'(e) {
        let me = this;
        let expand = me.updater.get('expand');
        if (expand) {
            me['@{set.pos}']();
        }
    }
});
