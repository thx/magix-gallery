/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/index",["magix","$","./suggest"],(require,exports,module)=>{
/*Magix,$*/
require("./suggest");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("_L","._fl{height:auto;min-height:32px;padding:1px 7px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:1}._fl:hover{border-color:#ccc}._fm{cursor:not-allowed;background-color:#fbfbfb}._fm:hover{border-color:#e6e6e6}._fn{height:auto;cursor:text}._fo{position:absolute;left:9px;top:8px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._fp{position:relative;display:inline-block;margin:1px;cursor:pointer;background-color:#eee;border-radius:4px}._fq{width:1px;visibility:hidden}._fr{float:left;border-right:1px solid #fff;max-width:200px;overflow:hidden}._fs,._fr{height:24px;line-height:24px;padding:0 4px}._fs{width:20px;font-weight:bolder;text-align:center;color:#999;display:inline-block}._ft{border:none;outline:none;height:24px;line-height:24px;padding:0;width:20px;position:relative;z-index:1;background:transparent}._fm ._fn,._fm ._fs,._fm ._fr,._fm ._ft{cursor:not-allowed}");
var $ = require("$");
var INPUT_MIN_WIDTH = 20;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_fn _aj\" mx-click=\"\u001f\u001e__gl()\" id=\"ipt_<%=$$.viewId%>\"><%if(!$$.items.length&&$$.placeholder){%><div class=\"_fo\"><%=$$.placeholder%></div><%}if($$.items.length){for(var _=0;_<$$.items.length;_++){var a=$$.items[_];%><div class=\"_fp\" mx-contextmenu=\"\u001f\u001eprevent()\"><div class=\"_fr _al\"><%=$$.textKey?a[$$.textKey]:a%></div><div class=\"_fs\" mx-click=\"\u001f\u001e__gj({idx:<%!_%>})\">x</div></div><%}}else{%><div class=\"_fp _fq\" mx-click=\"\u001f\u001estop()\"><div class=\"_fs\" mx-click=\"\u001f\u001e__gj({idx:<%!_%>})\">x</div></div><%}%><input mx-keydown=\"\u001f\u001e__gk()\" mx-keyup=\"\u001f\u001e__gk()\" mx-input=\"\u001f\u001e__gk()\" mx-paste=\"\u001f\u001e__gk()\" mx-pick=\"\u001f\u001e__l()\" mx-change=\"\u001f\u001e__as()\" mx-focusin=\"\u001f\u001e__as()\" mx-focusout=\"\u001f\u001e__as()\" mx-showlist=\"\u001f\u001e__gm()\" mx-hidelist=\"\u001f\u001e__gm()\" <%if($$.disabled){%> disabled=\"disabled\" <%}%> class=\"_ft\" autocomplete=\"off\"><%if(!$$.disabled){%><div mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&width=<%!$eu($$.width)%>&scrollTop=<%@$$.scrollTop%>\" class=\"_af _ah\"></div><%}%></div>"},
    init: function (extra) {
        var me = this;
        me['__eQ'] = extra.list || [];
        me['__i'] = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['__gd'](extra.selected);
    },
    '__ge': function () {
        var me = this;
        var updater = me.updater;
        var sMap = updater.get('sMap');
        var valueKey = updater.get('valueKey');
        var list = me['__eQ'];
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
            list: me['__ge'](),
            viewId: me.id
        });
        rNode.addClass('_fl');
        me['__e'] = rNode;
        me['__gf']();
        var data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('_fm');
        }
    },
    '__gf': function () {
        var me = this;
        var rNode = me['__e'];
        me['__gg'] = rNode.find('input');
        me['__gg'].width(INPUT_MIN_WIDTH);
        var width = $('#ipt_' + me.id).width() - me['__gg'].position().left;
        me['__gg'].width(width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH);
    },
    '__gd': function (selected) {
        var me = this;
        selected = selected || '';
        selected = (selected + '').split(',');
        var items = [];
        var sMap = {};
        var updater = me.updater;
        var valueKey = updater.get('valueKey');
        var list = me['__eQ'];
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
        me['__i'].val(selected.join(','));
    },
    val: function (selected) {
        var me = this;
        if (selected) {
            me['__gd'](selected);
            me.updater.digest({
                list: me['__ge']()
            });
            me['__gf']();
            me['__e'].removeClass('_ar');
            me['__v']();
        }
        return me.updater.get('items');
    },
    '__v': function () {
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
    '__gi': function () {
        var me = this;
        clearTimeout(me['__gh']);
        me['__ez'] = true;
        me['__gg'].focus();
        me['__gh'] = setTimeout(me.wrapAsync(function () {
            delete me['__ez'];
        }), 20);
    },
    '__gk<keydown,input,paste,keyup>': function (e) {
        e.stopPropagation();
        var me = this;
        var val = e.eventTarget.value;
        if (me['__cA'] !== val) {
            me['__cA'] = val;
            var holder = me['__e'].find('._fo');
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
                me['__gj<click>']({
                    params: {
                        idx: idx
                    }
                });
                me['__gi']();
            }
        }
    },
    '__l<pick>': function (e) {
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
            list: me['__ge']()
        });
        me['__gf']();
        me['__gi']();
        me['__v']();
    },
    '__gl<click>': function () {
        var me = this;
        if (!me['__i'].hasClass('_fm')) {
            me['__gg'].focus();
        }
    },
    '__gj<click>': function (e) {
        var me = this;
        if (me['__i'].hasClass('_fm'))
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
            list: me['__ge']()
        });
        me['__gf']();
        me['__v']();
        me['__gi']();
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    },
    '__as<change,focusin,focusout>': function (e) {
        e.stopPropagation();
        var rNode = this['__e'];
        if (e.type == 'focusin') {
            rNode.addClass('_ar');
        }
    },
    '__gm<showlist,hidelist>': function (e) {
        var me = this;
        if (!me['__ez']) {
            $('#' + this.id).trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                var rNode = this['__e'];
                rNode.removeClass('_ar');
            }
        }
    }
});

});