/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-taginput/index',["magix","$","./suggest"],(require,exports,module)=>{
/*Magix,$*/
require("./suggest");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("__mx-taginput_index_",".__mx-taginput_index_-owner {\n  height: auto;\n  min-height: 32px;\n  padding: 1px 7px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 1;\n}\n.__mx-taginput_index_-owner:hover {\n  border-color: #ccc;\n}\n.__mx-taginput_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.__mx-taginput_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.__mx-taginput_index_-ipt {\n  height: auto;\n  cursor: text;\n}\n.__mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 9px;\n  top: 8px;\n  color: #999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-taginput_index_-item {\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n  background-color: #eee;\n  border-radius: 4px;\n}\n.__mx-taginput_index_-ghost {\n  width: 1px;\n  visibility: hidden;\n}\n.__mx-taginput_index_-item-name {\n  float: left;\n  border-right: 1px solid #fff;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n  max-width: 200px;\n  overflow: hidden;\n}\n.__mx-taginput_index_-item-delete {\n  width: 20px;\n  font-weight: bolder;\n  text-align: center;\n  color: #999;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n}\n.__mx-taginput_index_-trigger {\n  border: none;\n  outline: none;\n  height: 24px;\n  line-height: 24px;\n  padding: 0;\n  width: 20px;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-ipt,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-trigger,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-item-name,\n.__mx-taginput_index_-notallowed .__mx-taginput_index_-item-delete {\n  cursor: not-allowed;\n}\n");
let $ = require('$');
let INPUT_MIN_WIDTH = 20;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-taginput_index_-ipt __mx-style_index_-unselectable\" mx-click=\"\u001f\u001e@{focus}()\" id=\"ipt_<%=$$.viewId%>\">1\u001d</div>","subs":[{"keys":["viewId","items","placeholder","textKey"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.items.length&&$$.placeholder){%><div class=\"__mx-taginput_index_-placeholder\"><%=$$.placeholder%></div><%}%> <%if($$.items.length){%> <%for(var i=0;i<$$.items.length;i++){%> <%var one=$$.items[i];%><div class=\"__mx-taginput_index_-item\" mx-contextmenu=\"\u001f\u001eprevent()\"><div class=\"__mx-taginput_index_-item-name __mx-style_index_-ellipsis\"><%=$$.textKey?one[$$.textKey]:one%></div><div class=\"__mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001e@{delete}({idx:<%!i%>})\">x</div></div><%}%> <%}else{%><div class=\"__mx-taginput_index_-item __mx-taginput_index_-ghost\" mx-click=\"\u001f\u001estop()\"><div class=\"__mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001e@{delete}({idx:<%!i%>})\">x</div></div><%}%><input mx-guid=\"g2\u001f\" mx-keydown=\"\u001f\u001e@{check}()\" mx-keyup=\"\u001f\u001e@{check}()\" mx-input=\"\u001f\u001e@{check}()\" mx-paste=\"\u001f\u001e@{check}()\" mx-pick=\"\u001f\u001e@{add}()\" mx-change=\"\u001f\u001e@{stop}()\" mx-focusin=\"\u001f\u001e@{stop}()\" mx-focusout=\"\u001f\u001e@{stop}()\" mx-showlist=\"\u001f\u001e@{toggleList}()\" mx-hidelist=\"\u001f\u001e@{toggleList}()\" <%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%> class=\"__mx-taginput_index_-trigger\" autocomplete=\"off\">","s":"1\u001d","attr":"id=\"ipt_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"3111"},{"keys":["disabled","list","valueKey","viewId","width","scrollTop"],"path":"input[mx-guid=\"g2\u001f\"]","pKeys":["items","placeholder","textKey"],"attr":"<%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-view","v":1},{"n":"disabled","b":1,"p":1}]}],"file":"mx-taginput/index.html"},
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
        if (w === 0)
            w = 340;
        me.updater.digest({
            width: w,
            list: me['@{get.suggest.list}'](),
            viewId: me.id
        });
        rNode.addClass('__mx-taginput_index_-owner');
        me['@{relate.node}'] = rNode;
        me['@{trigger.update}']();
        let data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('__mx-taginput_index_-notallowed');
        }
    },
    '@{trigger.update}'() {
        let me = this;
        let rNode = me['@{relate.node}'];
        me['@{trigger.node}'] = rNode.find('input');
        me['@{trigger.node}'].width(INPUT_MIN_WIDTH);
        let width = $('#ipt_' + me.id).width() - me['@{trigger.node}'].position().left;
        me['@{trigger.node}'].width(width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH);
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
            me['@{relate.node}'].removeClass('__mx-style_index_-input-focus');
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
            let holder = me['@{relate.node}'].find('.__mx-taginput_index_-placeholder');
            if (val) {
                holder.hide();
            }
            else {
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
        if (sMap[id])
            return;
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
        if (!me['@{owner.node}'].hasClass('__mx-taginput_index_-notallowed')) {
            me['@{trigger.node}'].focus();
        }
    },
    '@{delete}<click>'(e) {
        let me = this;
        if (me['@{owner.node}'].hasClass('__mx-taginput_index_-notallowed'))
            return;
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
            rNode.addClass('__mx-style_index_-input-focus');
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
                rNode.removeClass('__mx-style_index_-input-focus');
            }
        }
    }
});

});