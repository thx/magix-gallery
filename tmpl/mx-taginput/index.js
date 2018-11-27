let Magix = require('magix');
Magix.applyStyle('@index.less');
let I18n = require('@../../mx-medusa/util');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;

        let textKey = extra.textKey || 'text',
            valueKey =  extra.valueKey || 'value';

        let list = extra.list || [];
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


        let selected = extra.selected || '';
        selected = (selected + '').split(',');

        let map = Magix.toMap(list, 'value');
        let items = [];
        selected.forEach(v => {
            if(map[v]){
                items.push(map[v]);
            }
        })

        me['@{data.list}'] = list;
        me['@{owner.node}'] = $('#' + me.id);
        let disabledNode = $('#' + me.id + '[mx-disabled]')
        me.updater.set({
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: extra.placeholder || I18n['choose'],
            textKey,
            valueKey,
            map,
            items
        });
    },

    render() {
        let me = this;
        let node = me['@{owner.node}'];
        let w = node.outerWidth();
        if (w === 0) {
            w = 320;
        }

        let items = me.updater.get('items');
        me.updater.digest({
            suggest: me['@{get.suggest.list}'](items),
            width: w,
            viewId: me.id
        });
        
        me['@{val}']();
        me['@{trigger.update}']();
    },

    '@{val}'(){
        let me =this;
        let items = me.updater.get('items');
        let selected = items.map(item => {
            return item.value;
        })

        me['@{owner.node}'].val(selected.join(','));
    },

    '@{trigger.update}' () {
        let me = this;
        let minWidth = 20;
        let node = me['@{owner.node}'];
        me['@{trigger.node}'] = node.find('input');
        me['@{trigger.node}'].width(minWidth);
        let width = $('#ipt_' + me.id).width() - me['@{trigger.node}'].position().left;
        me['@{trigger.node}'].width(
            width >= minWidth ? width : minWidth
        );
    },

    '@{get.suggest.list}' (items) {
        let me = this;
        let list = me['@{data.list}'];
        let data = me.updater.get();

        let map = data.map;
        let selected = items.map(item => {
            return item.value + '';
        })

        let s = [];
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            if (selected.indexOf(one.value + '') < 0) {
                s.push(one);
            }
        }
        return s;
    },

    /**
     * 输入框获取焦点
     */
    '@{focus}<click>' () {
        let me = this;
        let disabled = me.updater.get('disabled')
        if (!disabled) {
            me['@{trigger.node}'].focus();
        }
    },

    '@{ui.focus}' () {
        let me = this;
        clearTimeout(me['@{focus.timer}']);
        me['@{temp.hold.event}'] = true;
        me['@{trigger.node}'].focus();
        me['@{focus.timer}'] = setTimeout(me.wrapAsync(() => {
            delete me['@{temp.hold.event}'];
        }), 20);
    },

    '@{check}<keydown,input,paste,keyup>' (e) {
        e.stopPropagation();
        let me = this;
        let val = e.eventTarget.value;
        if (me['@{last.value}'] !== val) {
            me['@{last.value}'] = val;
            let holder = me['@{owner.node}'].find('.@index.less:placeholder');
            if (val) {
                holder.hide();
            } else {
                holder.show();
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            // 删除
            let items = me.updater.get('items');
            let idx = items.length - 1;
            if (idx > -1) {
                me['@{delete}<click>']({
                    params: {
                        idx
                    }
                });
                me['@{ui.focus}']();
            }
        }
    },

    '@{fire.event}' () {
        let me = this;
        let updater = me.updater;
        let ids = [];
        let items = updater.get('items');
        let valueKey = updater.get('valueKey');
        for (let i = 0, one; i < items.length; i++) {
            one = items[i];
            ids.push(valueKey ? one[valueKey] : one);
        }
        $('#' + me.id).val(ids.join(',')).trigger({
            type: 'change',
            ids,
            items
        });
    },
   
    '@{add}<pick>' (e) {
        e.stopPropagation();
        let me = this;
        let updater = me.updater;
        let items = updater.get('items');

        let item = e.item;
        items.push(item);
        updater.digest({
            items,
            scrollTop: e.scrollTop,
            suggest: me['@{get.suggest.list}'](items)
        });

        me['@{val}']();
        me['@{trigger.update}']();
        me['@{ui.focus}']();
        me['@{fire.event}']();
    },
    
    '@{delete}<click>' (event) {
        let me = this;
        let data = me.updater.get();
        if(data.disabled){
            return;
        }

        let items = data.items;
        let idx = event.params.idx;
        items.splice(idx, 1);
        
        me.updater.digest({
            items,
            suggest: me['@{get.suggest.list}'](items)
        });

        me['@{val}']();
        me['@{trigger.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },

    '@{prevent}<contextmenu>' (e) {
        e.preventDefault();
    },

    '@{stop}<change,focusin,focusout>' (e) {
        e.stopPropagation();
        let rNode = this['@{owner.node}'];
        if (e.type == 'focusin') {
            rNode.addClass('input-focus');
        }
    },

    '@{toggleList}<showlist,hidelist>' (e) {
        let me = this;
        let node = me['@{owner.node}'];
        if (!me['@{temp.hold.event}']) {
            node.trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                node.removeClass('input-focus');
            }
        }
    }
});