/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/index',["magix","$","./suggest"],function(require,exports,module){
/*Magix,$*/
require("./suggest");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
Magix.applyStyle("E",".fa{height:auto;min-height:32px;padding:1px 7px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:1}.fa:hover{border-color:#ccc}.fb{cursor:not-allowed;background-color:#fbfbfb}.fb:hover{border-color:#e6e6e6}.fc{height:auto;cursor:text}.fd{position:absolute;left:9px;top:8px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fe{position:relative;display:inline-block;margin:1px;cursor:pointer;background-color:#eee;border-radius:4px}.ff{width:1px;visibility:hidden}.fg{float:left;border-right:1px solid #fff;max-width:200px;overflow:hidden}.fh,.fg{height:24px;line-height:24px;padding:0 4px}.fh{width:20px;font-weight:bolder;text-align:center;color:#999;display:inline-block}.fi{border:none;outline:none;height:24px;line-height:24px;padding:0;width:20px;position:relative;z-index:1;background:transparent}.fb .fc,.fb .fh,.fb .fg,.fb .fi{cursor:not-allowed}");
var $ = require('$');
var INPUT_MIN_WIDTH = 20;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"fc ah\" mx-click=\"\u001f\u001e_eN()\" id=\"ipt_<%=$$.viewId%>\">1\u001d</div>","subs":[{"keys":["viewId","items","placeholder","textKey"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.items.length&&$$.placeholder){%><div class=\"fd\"><%=$$.placeholder%></div><%}if($$.items.length){for(var a=0;a<$$.items.length;a++){var b=$$.items[a];%><div class=\"fe\" mx-contextmenu=\"\u001f\u001eprevent()\"><div class=\"fg aj\"><%=$$.textKey?b[$$.textKey]:b%></div><div class=\"fh\" mx-click=\"\u001f\u001e_eL({idx:<%!a%>})\">x</div></div><%}}else{%><div class=\"fe ff\" mx-click=\"\u001f\u001estop()\"><div class=\"fh\" mx-click=\"\u001f\u001e_eL({idx:<%!a%>})\">x</div></div><%}%><input mx-guid=\"g2\u001f\" mx-keydown=\"\u001f\u001e_eM()\" mx-keyup=\"\u001f\u001e_eM()\" mx-input=\"\u001f\u001e_eM()\" mx-paste=\"\u001f\u001e_eM()\" mx-pick=\"\u001f\u001e_k()\" mx-change=\"\u001f\u001e_bA()\" mx-focusin=\"\u001f\u001e_bA()\" mx-focusout=\"\u001f\u001e_bA()\" mx-showlist=\"\u001f\u001e_eO()\" mx-hidelist=\"\u001f\u001e_eO()\" <%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%> class=\"fi\" autocomplete=\"off\">","s":"1\u001d","attr":"id=\"ipt_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"3111"},{"keys":["disabled","list","valueKey","viewId","width","scrollTop"],"path":"input[mx-guid=\"g2\u001f\"]","pKeys":["items","placeholder","textKey"],"attr":"<%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-view","v":1},{"n":"disabled","b":1,"p":1}]}]},
    init: function (extra) {
        var me = this;
        me['_dz'] = extra.list || [];
        me['_h'] = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['_eF'](extra.selected);
    },
    '_eG': function () {
        var me = this;
        var updater = me.updater;
        var sMap = updater.get('sMap');
        var valueKey = updater.get('valueKey');
        var list = me['_dz'];
        var s = [];
        for (var i = 0, one = void 0, key = void 0; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (!sMap[key]) {
                s.push(one);
            }
        }
        return s;
    },
    render: function () {
        var me = this;
        var rNode = $('#' + me.id);
        var w = rNode.outerWidth();
        if (w === 0)
            w = 340;
        me.updater.digest({
            width: w,
            list: me['_eG'](),
            viewId: me.id
        });
        rNode.addClass('fa');
        me['_cV'] = rNode;
        me['_eH']();
        var data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('fb');
        }
    },
    '_eH': function () {
        var me = this;
        var rNode = me['_cV'];
        me['_eI'] = rNode.find('input');
        me['_eI'].width(INPUT_MIN_WIDTH);
        var width = $('#ipt_' + me.id).width() - me['_eI'].position().left;
        me['_eI'].width(width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH);
    },
    '_eF': function (selected) {
        var me = this;
        selected = selected || '';
        selected = (selected + '').split(',');
        var items = [];
        var sMap = {};
        var updater = me.updater;
        var valueKey = updater.get('valueKey');
        var list = me['_dz'];
        var ssMap = Magix.toMap(selected);
        for (var i = 0, one = void 0, key = void 0; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (Magix.has(ssMap, key)) {
                sMap[key] = 1;
                items.push(one);
            }
        }
        me.updater.set({
            sMap: sMap,
            items: items
        });
        me['_h'].val(selected.join(','));
    },
    val: function (selected) {
        var me = this;
        if (selected) {
            me['_eF'](selected);
            me.updater.digest({
                list: me['_eG']()
            });
            me['_eH']();
            me['_cV'].removeClass('ap');
            me['_u']();
        }
        return me.updater.get('items');
    },
    '_u': function () {
        var me = this;
        var updater = me.updater;
        var ids = [];
        var items = updater.get('items');
        var valueKey = updater.get('valueKey');
        for (var i = 0, one = void 0; i < items.length; i++) {
            one = items[i];
            ids.push(valueKey ? one[valueKey] : one);
        }
        $('#' + me.id).val(ids.join(',')).trigger({
            type: 'change',
            ids: ids,
            items: items
        });
    },
    '_eK': function () {
        var me = this;
        clearTimeout(me['_eJ']);
        me['_dm'] = true;
        me['_eI'].focus();
        me['_eJ'] = setTimeout(me.wrapAsync(function () {
            delete me['_dm'];
        }), 20);
    },
    '_eM<keydown,input,paste,keyup>': function (e) {
        e.stopPropagation();
        var me = this;
        var val = e.eventTarget.value;
        if (me['_bG'] !== val) {
            me['_bG'] = val;
            var holder = me['_cV'].find('.fd');
            if (val) {
                holder.hide();
            }
            else {
                holder.show();
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            var idx = me.updater.get('items').length - 1;
            if (idx > -1) {
                me['_eL<click>']({
                    params: {
                        idx: idx
                    }
                });
                me['_eK']();
            }
        }
    },
    '_k<pick>': function (e) {
        e.stopPropagation();
        var me = this;
        var updater = me.updater;
        var items = updater.get('items');
        var sMap = updater.get('sMap');
        var item = e.item;
        var valueKey = updater.get('valueKey');
        var id = valueKey ? item[valueKey] : item;
        if (sMap[id])
            return;
        sMap[id] = 1;
        items.push(item);
        updater.digest({
            items: items,
            scrollTop: e.scrollTop,
            list: me['_eG']()
        });
        me['_eH']();
        me['_eK']();
        me['_u']();
    },
    '_eN<click>': function () {
        var me = this;
        if (!me['_h'].hasClass('fb')) {
            me['_eI'].focus();
        }
    },
    '_eL<click>': function (e) {
        var me = this;
        if (me['_h'].hasClass('fb'))
            return;
        var updater = me.updater;
        var items = updater.get('items');
        var sMap = updater.get('sMap');
        var valueKey = updater.get('valueKey');
        var idx = e.params.idx;
        var item = items[idx];
        delete sMap[valueKey ? item[valueKey] : item];
        items.splice(e.params.idx, 1);
        updater.digest({
            items: items,
            list: me['_eG']()
        });
        me['_eH']();
        me['_u']();
        me['_eK']();
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    },
    '_bA<change,focusin,focusout>': function (e) {
        e.stopPropagation();
        var rNode = this['_cV'];
        if (e.type == 'focusin') {
            rNode.addClass('ap');
        }
    },
    '_eO<showlist,hidelist>': function (e) {
        var me = this;
        if (!me['_dm']) {
            $('#' + this.id).trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                var rNode = this['_cV'];
                rNode.removeClass('ap');
            }
        }
    }
});

});