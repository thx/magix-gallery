/*
ver:2.0.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.less');
let $ = require('$');
let INPUT_MIN_WIDTH = 20;

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{data.list}'] = extra.list || [];
        me['@{owner.node}'] = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{selected.update}'](extra.selected);
    },
    '@{get.suggest.list}'() {
        let me = this;
        let updater = me.updater;
        let sMap = updater.get('sMap');
        let valueKey = updater.get('valueKey');
        let list = me['@{data.list}'];
        let s = [];
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (!sMap[key]) {
                s.push(one);
            }
        }
        return s;
    },
    render() {
        let me = this;
        let rNode = $('#' + me.id);
        let w = rNode.outerWidth();
        if (w === 0) w = 340;
        me.updater.digest({
            width: w,
            list: me['@{get.suggest.list}'](),
            viewId: me.id
        });
        rNode.addClass('@index.less:owner');
        me['@{relate.node}'] = rNode;
        me['@{trigger.update}']();
        let data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('@index.less:notallowed');
        }
    },
    '@{trigger.update}'() {
        let me = this;
        let rNode = me['@{relate.node}'];
        me['@{trigger.node}'] = rNode.find('input');
        me['@{trigger.node}'].width(INPUT_MIN_WIDTH);
        let width = $('#ipt_' + me.id).width() - me['@{trigger.node}'].position().left;
        me['@{trigger.node}'].width(
            width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH
        );
    },
    '@{selected.update}'(selected) {
        let me = this;
        selected = selected || '';
        selected = (selected + '').split(',');
        let items = [];
        let sMap = {};
        let updater = me.updater;
        let valueKey = updater.get('valueKey');
        let list = me['@{data.list}'];
        let ssMap = Magix.toMap(selected);
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (Magix.has(ssMap, key)) {
                sMap[key] = 1;
                items.push(one);
            }
        }
        me.updater.set({
            sMap,
            items
        });
        me['@{owner.node}'].val(selected.join(','));
    },
    val(selected) {
        let me = this;
        if (selected) {
            me['@{selected.update}'](selected);
            me.updater.digest({
                list: me['@{get.suggest.list}']()
            });
            me['@{trigger.update}']();
            me['@{relate.node}'].removeClass('@scoped.style:input-focus');
            me['@{fire.event}']();
        }
        return me.updater.get('items');
    },
    '@{fire.event}'() {
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
    '@{ui.focus}'() {
        let me = this;
        clearTimeout(me['@{focus.timer}']);
        me['@{temp.hold.event}'] = true;
        me['@{trigger.node}'].focus();
        me['@{focus.timer}'] = setTimeout(me.wrapAsync(() => {
            delete me['@{temp.hold.event}'];
        }), 20);
    },
    '@{check}<keydown,input,paste,keyup>'(e) {
        e.stopPropagation();
        let me = this;
        let val = e.eventTarget.value;
        if (me['@{last.value}'] !== val) {
            me['@{last.value}'] = val;
            let holder = me['@{relate.node}'].find('.@index.less:placeholder');
            if (val) {
                holder.hide();
            } else {
                holder.show();
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            let idx = me.updater.get('items').length - 1;
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
    '@{add}<pick>'(e) {
        e.stopPropagation();
        let me = this;
        let updater = me.updater;
        let items = updater.get('items');
        let sMap = updater.get('sMap');
        let item = e.item;
        let valueKey = updater.get('valueKey');
        let id = valueKey ? item[valueKey] : item;
        if (sMap[id]) return;
        sMap[id] = 1;
        items.push(item);
        updater.digest({
            items,
            scrollTop: e.scrollTop,
            list: me['@{get.suggest.list}']()
        });
        me['@{trigger.update}']();
        me['@{ui.focus}']();
        me['@{fire.event}']();
    },
    '@{focus}<click>'() {
        let me = this;
        if (!me['@{owner.node}'].hasClass('@index.less:notallowed')) {
            me['@{trigger.node}'].focus();
        }
    },
    '@{delete}<click>'(e) {
        let me = this;
        if (me['@{owner.node}'].hasClass('@index.less:notallowed')) return;
        let updater = me.updater;
        let items = updater.get('items');
        let sMap = updater.get('sMap');
        let valueKey = updater.get('valueKey');
        let idx = e.params.idx;
        let item = items[idx];
        delete sMap[valueKey ? item[valueKey] : item];
        items.splice(e.params.idx, 1);
        updater.digest({
            items,
            list: me['@{get.suggest.list}']()
        });
        me['@{trigger.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
        let rNode = this['@{relate.node}'];
        if (e.type == 'focusin') {
            rNode.addClass('@scoped.style:input-focus');
        }
    },
    '@{toggleList}<showlist,hidelist>'(e) {
        let me = this;
        if (!me['@{temp.hold.event}']) {
            $('#' + this.id).trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                let rNode = this['@{relate.node}'];
                rNode.removeClass('@scoped.style:input-focus');
            }
        }
    }
});