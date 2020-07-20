import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
const ShowDelay = 100;
const HideDelay = 200;

export default View.extend({
    tmpl: '@bd.html',
    init(ops) {
        let me = this;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;

        // 已选中数据
        let selected = ops.selected;
        if ($.isArray(selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            me['@{bak.type}'] = 'array';
        } else {
            // 字符串
            selected = (selected + '').split(',');
        }

        let textKey = ops.textKey || 'text';
        let valueKey = ops.valueKey || 'value';
        let list = ops.list || [];
        let hasGroups,
            parents = ops.parents || [],
            parentKey = ops.parentKey || 'pValue';
        if (typeof list[0] === 'object') {
            // 本身是个对象
            // 存在分组的情况
            list = list.map(item => {
                Magix.mix(item, {
                    text: item[textKey],
                    value: item[valueKey],
                    pValue: item[parentKey]
                })
                return item;
            })
            if (parents.length == 0) {
                hasGroups = false;
                parents = [{
                    text: '组',
                    value: 'all',
                    list
                }]
            } else {
                hasGroups = true;
                let groupMap = {};
                list.forEach(item => {
                    let pValue = item.pValue;
                    groupMap[pValue] = groupMap[pValue] || [];
                    groupMap[pValue].push(item);
                })
                for (let i = 0; i < parents.length; i++) {
                    let parent = parents[i];
                    let pValue = parent.value;
                    parent.list = groupMap[pValue] || [];
                    if (parent.list.length == 0) {
                        parent.splice(i--, 1);
                    }
                }
            }
        } else {
            // 直接value列表
            // 无分组
            hasGroups = false;
            list = list.map(value => {
                return {
                    text: value,
                    value: value
                };
            })
            parents = [{
                text: '组',
                value: 'all',
                list
            }]
        }

        // 多选还是单选
        let multiple = (ops.multiple + '' === 'true');
        let map = Magix.toMap(list, valueKey);
        let selectedItems = [];
        selected.forEach(value => {
            let selectedItem = map[selected];
            //未提供选项，或提供的选项不在列表里
            if (!$.isEmptyObject(selectedItem)) {
                selectedItems.push(selectedItem);
            }
        })
        if (!multiple && (selectedItems.length == 0) && list[0]) {
            // 单选默认选中第一个
            selectedItems = [list[0]];
            for (let i = 0; i < list.length; i++) {
                if (!list[i].disabled) {
                    selectedItems = [list[i]];
                    break;
                }
            }
        }

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        // 初始化
        me['@{pos.init}'] = false;
        me.updater.set({
            tip: ops.tip,
            searchbox: (ops.searchbox + '') === 'true',
            multiple,
            emptyText: ops.emptyText || I18n['choose'],
            hasGroups,
            parents,
            selectedItems,
            expand: false,
            height: (ops.height || 250)
        });

        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#dd_bd_' + me.id).remove();

            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });

        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        switch (me['@{trigger.type}']) {
            case 'click':
                oNode.on('click', () => {
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        let expand = me.updater.get('expand');
                        if (expand) {
                            me['@{hide}']();
                        } else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    }), ShowDelay);
                })
                break;
            case 'hover':
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
    },
    render() {
        this.updater.digest({})
        this['@{val}']();
    },
    '@{val}'(fire) {
        let me = this;
        let { selectedItems, emptyText } = me.updater.get();

        let texts = [],
            values = [];
        selectedItems.forEach(item => {
            texts.push(item.text);
            values.push(item.value);
        })

        me.updater.digest({
            selectedText: texts.join(',') || emptyText
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
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                values,
                texts,
                value: values.join(','),
                text: texts.join(',')
            });
        }
    },
    '@{init}'() {
        let me = this;

        let toggleNode = $('#toggle_' + me.id);
        let posWidth = toggleNode.outerWidth(),
            vId = me.id;

        let minWidth = posWidth,
            maxWidth = posWidth * 2;

        let ddNode = `<div mx-view class="mx-output mx-output-bottom" id="dd_bd_${vId}"
                style="min-width: ${minWidth}px; max-width: ${maxWidth}px;"></div>`;
        $(document.body).append(ddNode);

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe('dd_bd_' + vId, '');
        vf.on('created', () => {
            let ddNode = me['@{setPos}']();

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
        return Magix.inside(node, this.id) || Magix.inside(node, 'dd_bd_' + this.id);
    },
    '@{show}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }

        let data = me.updater.get();
        if (data.expand) {
            return;
        }

        me['@{content.vf}'].mountView('@./content', {
            data,
            submit: (result) => {
                me['@{hide}']();

                me.updater.set(result);
                me['@{val}'](true);
            },
            cancel: () => {
                me['@{hide}']();
            }
        })

        me.updater.digest({
            expand: true
        })

        // 每次show时都重新定位
        let ddNode = me['@{setPos}']();
        ddNode.addClass('mx-output-open');
        Monitor['@{add}'](me);
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

        let expand = me.updater.get('expand');
        if (!expand) {
            return;
        }

        me.updater.digest({
            expand: false
        })

        let ddNode = $('#dd_bd_' + me.id);
        ddNode.removeClass('mx-output-open');
        Monitor['@{remove}'](me);
    },
    '@{setPos}'() {
        let me = this;
        let oNode = me['@{owner.node}'];
        let ddNode = $('#dd_bd_' + me.id);

        let winHeight = window.innerHeight,
            winScrollTop = $(window).scrollTop(),
            width = oNode.outerWidth(),
            height = oNode.outerHeight(),
            offset = oNode.offset(),
            rWidth = ddNode.outerWidth(),
            rHeight = ddNode.outerHeight();

        let top = offset.top + height,
            left = offset.left - (rWidth - width) / 2;
        // 修正到可视范围之内
        if (top + rHeight > winHeight + winScrollTop) {
            top = winHeight + winScrollTop - rHeight - 10;
        }
        ddNode.css({
            left: left,
            top: top
        });
        return ddNode;
    },
    /**
     * 页面滚动的时候，重新定位
     */
    '$win<scroll>'(e) {
        let me = this;
        let expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>'(e) {
        let me = this;
        let expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    }
});
