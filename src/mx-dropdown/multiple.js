/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/multiple",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_r","._cO{outline:0;position:relative;width:340px;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;display:inline-block;vertical-align:middle;height:32px}._cO:hover{border-color:#ccc}._cP{color:#333;position:relative;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 30px 0 12px;border-radius:3px}._cQ{cursor:not-allowed;background-color:#fbfbfb}._cQ:hover{border-color:#e6e6e6}._cQ ._cP{cursor:not-allowed}._cR{position:absolute;right:0;top:2px;font-size:28px;color:#ccc;-webkit-transition:top .3s,-webkit-transform .3s;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s}._cS ._cR{-webkit-transform:rotate(180deg);transform:rotate(180deg);top:0}._cO[tabindex=\"0\"]:focus,._cS,._cS:hover{border-color:#f96447}._cT{height:30px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}._cU{color:#999}._cV{position:absolute;top:100%;left:-1px;width:350px;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._cS ._cV{display:block}._cW{overflow:auto;max-height:192px;padding:4px 0}._cX{display:block;width:100%;padding:9px 9px 4px}._cY{padding:0;width:100%}._cZ{color:#ccc;position:absolute;left:15px;top:18px}._d_{padding-left:28px;width:100%;height:28px;line-height:28px}._da{padding:5px;color:#999;display:block;cursor:default}._db{padding:3px 4px}._dc{cursor:pointer;color:#666;display:block;width:100%;padding:0 6px;height:26px;line-height:26px;border-radius:4px}._dd{width:32%;float:left;margin-left:2px;margin-bottom:2px}._de{cursor:pointer;color:#666;display:block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._dc:hover,._de:hover{color:#333;background-color:#f0f0f0}._df,._df:active,._df:focus,._df:hover{color:#fff;background-color:#f96447}._dg{border-top:1px solid #e6e6e6;margin:0 10px;padding:10px 0}._dh{border-left:1px solid #e6e6e6}");
var AssignIf = function (view, key, ops, cfg, src) {
    if (!view[key] || Magix.has(ops, cfg)) {
        var v = ops[cfg] || '';
        if (!src) {
            v += '';
        }
        view[key] = v;
    }
    return view[key];
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_cP\" mx-click=\"\u001f\u001e__aW()\" title=\"<%=$$.selectedText%>\"><span class=\"_cT<%if($$.phLabel){%> _cU<%}%>\"><%=$$.selectedText%></span><span class=\"__ _cR\">&#xe692;</span></div><div class=\"_cV\"><%if($$.rList){if($$.searchbox){%><div class=\"_cX\"><label class=\"_cY\"><span class=\"__ _cZ\">&#xe608;</span><input mx-keyup=\"\u001f\u001e__ct()\" mx-paste=\"\u001f\u001e__ct()\" mx-change=\"\u001f\u001e__as()\" mx-focusin=\"\u001f\u001e__as()\" mx-focusout=\"\u001f\u001e__as()\" placeholder=\"搜索关键词\" class=\"_ap _d_\" value=\"<%=$$.keyword%>\"></label></div><%}%><ul class=\"_cW\" id=\"list_<%=$$.viewId%>\"><%var _=$$.selected.split(','),a=void 0,b=void 0;for(var c=0;c<$$.list.length;c++){var d=$$.list[c];if(d&&d.group){%><li class=\"_da _al\" title=\"<%=d[$$.textKey]%>\"><%=d[$$.textKey]%></li><%}else{if($$.textKey&&$$.valueKey){a=d[$$.textKey];b=d[$$.valueKey];}else{a=d;b=d;}if($$.emptyText===b&&c===0){b='';d='';}var e=$$.inArray(b+'',_)>-1;if(b===''){%><li title=\"<%=a%>\" class=\"_db\"><span class=\"_dc _al <%if(e){%> _df<%}%>\" mx-click=\"\u001f\u001e__cu({item:'<%@d%>'})\"><%=a%></span></li><%}else{%><li class=\"_db _ai\"><ul><%for(;c<$$.list.length;c++){d=$$.list[c];if(d&&d.group){c--;break;}if($$.textKey&&$$.valueKey){a=d[$$.textKey];b=d[$$.valueKey];}else{a=d;b=d;}var f=$$.inArray(b+'',_)>-1%><li class=\"_dd\"><span class=\"_de _al<%if(f){%> _df<%}%>\" mx-click=\"\u001f\u001e__cu({item:'<%@d%>'})\"><%=a%></span></li><%}%></ul></li><%}}}%></ul><div class=\"_dg _ai\"><div class=\"_aa\"><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001e__a({enter:true})\">确定</button><button type=\"button\" class=\"_an _s\" mx-click=\"\u001f\u001e__a()\">取消</button></div><div class=\"_aa _t _dh _R\"><button type=\"button\" class=\"_an\" mx-click=\"\u001f\u001e__cB()\">全选/不选</button><button type=\"button\" class=\"_an _s\" mx-click=\"\u001f\u001e__cC()\">反选</button></div></div><%}%></div>"},
    init: function (extra) {
        var me = this;
        Monitor['__d']();
        var node = $('#' + me.id);
        me['__i'] = node;
        node.addClass('_cO');
        node.on('keydown', function (e) {
            if (e.keyCode == 13) {
                me['__aW<click>']();
            }
        });
        me.on('destroy', function () {
            node.off('keydown');
            Monitor['__g'](me);
            Monitor['__h']();
        });
        me.updater.set({
            viewId: me.id,
            inArray: $.inArray
        });
        me['__cg'] = !extra.list;
        me.assign(extra, { node: node });
    },
    assign: function (ops, _a) {
        var node = _a.node;
        var me = this;
        AssignIf(me, '__ch', ops, 'list', 1);
        var selected = AssignIf(me, '__b_', ops, 'selected');
        var textKey = AssignIf(me, '__ci', ops, 'textKey');
        var valueKey = AssignIf(me, '__cj', ops, 'valueKey');
        var emptyText = AssignIf(me, '__ck', ops, 'emptyText');
        me['__cl'] = (ops.searchbox + '') === 'true';
        me['__cv'] = (ops.disabled + '') === 'true';
        if (me['__cg']) {
            node = $(node);
            var list_1 = [];
            var group_1;
            node.children().each(function (idx, item) {
                item = $(item);
                group_1 = item.attr('group') == 'true';
                list_1.push({
                    group: group_1,
                    text: item.text(),
                    value: group_1 ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['__ci'] = 'text';
            valueKey = me['__cj'] = 'value';
            me['__ch'] = list_1;
        }
        var list = me['__ch'];
        var map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (textKey && valueKey) {
                if (!map['']) {
                    var temp = {};
                    temp[textKey] = emptyText;
                    temp[valueKey] = '';
                    list.unshift(temp);
                    map[''] = temp;
                }
            }
            else {
                if (!map[emptyText]) {
                    list.unshift(emptyText);
                    map[''] = emptyText;
                }
            }
        }
        me['__b_'] = selected;
        me['__cw'] = map;
        me.updater.set({ list: list });
        return true;
    },
    '__j': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
    },
    render: function () {
        var me = this;
        var node = me['__i'];
        node[me['__cv'] ? 'addClass' : 'removeClass']('_cQ').prop('tabindex', me['__cm'] ? -1 : 0);
        me['__cx'](me['__b_']);
    },
    '__a': function (ignoreBak) {
        var me = this;
        if (me['__i'].hasClass('_cS')) {
            var data = me.updater.get();
            me['__i'].removeClass('_cS').trigger('focusout');
            Monitor['__g'](me);
            if (Magix.has(me, '__cy')) {
                var fired = ignoreBak && data.selected !== me['__cy'];
                if (ignoreBak) {
                    me['__cx'](data.selected);
                }
                else {
                    me['__cx'](me['__cy']);
                }
                delete me['__cy'];
                if (fired) {
                    me['__i'].val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
            }
        }
    },
    '__f': function () {
        var me = this;
        if (!me['__i'].hasClass('_cS')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['__i'].addClass('_cS').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._df');
            var pos = active.position();
            if (pos) {
                var height = listNode.height();
                var stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    var top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['__l'](me);
        }
    },
    '__cz': function (keys, textKey) {
        var me = this;
        var map = me['__cw'];
        var text = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            }
            else {
                text.push(key || entity);
            }
        }
        return text;
    },
    '__cx': function (selected) {
        var me = this;
        selected = selected || '';
        selected += '';
        var textKey = me['__ci'] || '';
        var valueKey = me['__cj'] || '';
        var parts = selected.split(',');
        var selectedText = '';
        var list = me['__ch'];
        if (parts.length) {
            selectedText = me['__cz'](parts, textKey);
        }
        else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        me.updater.digest({
            textKey: textKey,
            valueKey: valueKey,
            emptyText: me['__ck'],
            searchbox: me['__cl'],
            phLabel: selected === '',
            selected: me['__b_'] = selected,
            selectedText: selectedText
        });
        me['__i'].val(selected);
    },
    '__cq': function (val, callback) {
        var me = this;
        clearTimeout(me['__cp']);
        var srcList = me['__ch'];
        var newList = [];
        var index = 0;
        var max = srcList.length;
        var textKey = me['__ci'];
        var valueKey = me['__cj'];
        if (!val) {
            callback(srcList);
            return;
        }
        var go = function () {
            if (index < max) {
                var end = Math.min(index + 400, max);
                for (var i = index, li = void 0, text = void 0, value = void 0; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['__cp'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '__aW<click>': function () {
        var me = this;
        var node = me['__i'];
        if (node.hasClass('_cS')) {
            me['__a']();
        }
        else if (!node.hasClass('_cQ')) {
            me['__f']();
        }
    },
    '__ct<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['__cr']);
        var val = $.trim(e.eventTarget.value);
        me['__cr'] = setTimeout(me.wrapAsync(function () {
            if (val != me['__cA']) {
                me['__cq'](me['__cA'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '__cu<click>': function (e) {
        var me = this;
        var item = e.params.item;
        var updater = me.updater;
        var data = updater.get();
        if (!Magix.has(me, '__cy')) {
            me['__cy'] = data.selected;
        }
        var valueKey = me['__cj'];
        var textKey = me['__ci'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        var keys = [''];
        if (selected) {
            keys = data.selected.split(',');
        }
        var idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        }
        else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.emptyText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected: me['__b_'] = selected
        });
    },
    '__as<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '__a<click>': function (e) {
        this['__a'](e.params.enter);
    },
    '__cB<click>': function () {
        var me = this;
        var selected = me['__b_'];
        var list = me['__ch'];
        var valueKey = me['__cj'];
        var updater = me.updater;
        if (!Magix.has(me, '__cy')) {
            me['__cy'] = selected;
        }
        if (selected) {
            selected = '';
        }
        else {
            selected = '';
            for (var i = me['__ck'] ? 1 : 0, e = void 0; i < list.length; i++) {
                e = list[i];
                if (valueKey) {
                    if (!e.group) {
                        selected += e[valueKey] + ',';
                    }
                }
                else {
                    selected += e + ',';
                }
            }
            selected = selected.slice(0, -1);
        }
        updater.digest({
            selected: me['__b_'] = selected
        });
    },
    '__cC<click>': function () {
        var me = this;
        var selected = me['__b_'];
        var list = me['__ch'];
        var valueKey = me['__cj'];
        var updater = me.updater;
        if (!Magix.has(me, '__cy')) {
            me['__cy'] = selected;
        }
        var oldSelected = selected.split(',');
        selected = '';
        for (var i = me['__ck'] ? 1 : 0, e = void 0; i < list.length; i++) {
            e = list[i];
            if (valueKey) {
                if (!e.group && $.inArray(e[valueKey] + '', oldSelected) == -1) {
                    selected += e[valueKey] + ',';
                }
            }
            else if ($.inArray(e + '', oldSelected) == -1) {
                selected += e + ',';
            }
        }
        selected = selected.slice(0, -1);
        updater.digest({
            selected: me['__b_'] = selected
        });
    }
});

});