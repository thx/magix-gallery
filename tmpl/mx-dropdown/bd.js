let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@bd.html',
    init(ops) {
        let me = this;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;

        let selected = ops.selected;
        let textKey = ops.textKey || 'text';
        let valueKey = ops.valueKey || 'value';
        let emptyText = ops.emptyText || '';
        let list = [];
        if (!ops.list) {
            let node = me['@{owner.node}'].children();
            let group;
            node.each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group: group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
        } else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            } catch (e) {
                list = ops.list
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
                list = list.map(item => {
                    return {
                        text: item[textKey],
                        value: item[valueKey]
                    };
                })
            } else {
                // 直接value列表
                list = list.map(value => {
                    return {
                        text: value,
                        value: value
                    };
                })
            }
        }

        let map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (!map['']) {
                let temp = {};
                temp[textKey] = emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
                map[''] = temp;
            }
        }
        let selectedItem = map[selected];
        if (!selected || !selectedItem) { //未提供选项，或提供的选项不在列表里，则默认第一个
            let firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selectedItem = map[selected] || firstItem;
        }

        // 是否禁用
        let disabledNode = $('#' + me.id + '[mx-disabled]')
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);

        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = ops.scrollWrapper;

        me.updater.set({
            viewId: me.id,
            list,
            selected: selectedItem.value,
            selectedText: selectedItem.text,
            expand: me['@{pos.show}'],
            name: ops.name || ''
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
                        if (me['@{pos.show}']) {
                            me['@{hide}']();
                        } else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    }), me.constants.showDelay);
                })
                break;
            case 'hover':
                oNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);

                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        if(!me['@{ui.disabled}']){
                            me['@{show}'](); //等待内容显示
                        }
                    }), me.constants.showDelay);
                }, () => {
                    me['@{delay.hide}']();
                });
                break;
        }

        me.bindScroll();
        me['@{owner.node}'].val(selected);
    },
    render() {
        this.updater.digest({})
    },
    '@{init}'() {
        let me = this;

        let toggleNode = $('#' + me.id + ' .@index.less:dropdown-toggle');
        let posWidth = toggleNode.outerWidth(),
            vId = me.id;

        let minWidth = posWidth,
            maxWidth = posWidth * 2;

        let ddNode = `<div class="@index.less:dropdown-menu-wrapper @index.less:bottom" id="dd_bd_${vId}"
                style="min-width: ${minWidth}px; max-width: ${maxWidth}px;"></div>`;
        
        $(document.body).append(ddNode);

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe('dd_bd_' + vId, '');
        vf.on('created', () => {
            let ddNode = me['@{setPos}']();
            
            let triggerType = me['@{trigger.type}'];
            if(triggerType == 'hover'){
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
        if (me['@{pos.show}']) {
            return;
        }

        let data = me.updater.get();
        me['@{content.vf}'].mountView('@./content', {
            data: {
                list: data.list,
                selected: data.selected
            },
            submit: (selectedItem) => {
                me['@{hide}']();

                let selected = selectedItem.value,
                    selectedText = selectedItem.text;
                me.updater.digest({
                    selected,
                    selectedText,
                })
                me['@{owner.node}'].val(selected).trigger({
                    type: 'change',
                    selected,
                    value: selected,
                    text: selectedText
                });
            }
        })

        me.updater.digest({
            expand: me['@{pos.show}'] = true
        })
        
        // 每次show时都重新定位
        let ddNode = me['@{setPos}']();
        ddNode.addClass('@index.less:open');
        Monitor['@{add}'](me);
    },
    '@{delay.hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), me.constants.hideDelay);
        Monitor['@{remove}'](me);
    },
    '@{hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.hide.timer}']);
        if (!me['@{pos.show}']) {
            return;
        }

        me.updater.digest({
            expand: me['@{pos.show}'] = false
        })

        let ddNode = $('#dd_bd_' + me.id);
        ddNode.removeClass('@index.less:open');
        Monitor['@{remove}'](me);
    },
    bindScroll() {
        let me = this;
        let scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }

        let wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        } else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(() => {
            if (me['@{pos.show}']) {
                me['@{setPos}']();
            }
        });
    },
    '@{setPos}'() {
        let me = this;
        let oNode = me['@{owner.node}'];
        let ddNode = $('#dd_bd_' + me.id);

        if (!ddNode || !ddNode.length) {
            return;
        }

        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        let offset = oNode.offset();
        let rWidth = ddNode.outerWidth();
        let rHeight = ddNode.outerHeight();

        let top = offset.top + height;
            left = offset.left - (rWidth - width) / 2;

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
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>'(e) {
        let me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    constants: {
        showDelay: 100,
        hideDelay: 200
    }
});