/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
Magix.applyStyle("_q","._cx{outline:0;position:relative;width:340px;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;display:inline-block;vertical-align:middle;height:32px}._cx:hover{border-color:#ccc}._cy{color:#333;position:relative;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 30px 0 12px}._cz{cursor:not-allowed;background-color:#fbfbfb}._cz:hover{border-color:#e6e6e6}._cz ._cy{cursor:not-allowed}._cA{position:absolute;right:0;top:2px;font-size:28px;color:#ccc;-webkit-transition:top .3s,-webkit-transform .3s;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s}._cB ._cA{-webkit-transform:rotate(180deg);transform:rotate(180deg);top:0}._cx[tabindex=\"0\"]:focus,._cB,._cB:hover{border-color:#f96447}._cC{height:30px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}._cD{color:#999}._cE{position:absolute;top:100%;left:-1px;right:-1px;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._cB ._cE{display:block}._cF{overflow:auto;max-height:196px;padding:4px 0}._cG{display:block;width:100%;padding:9px 9px 4px}._cH{padding:0;width:100%}._cI{color:#ccc;position:absolute;left:15px;top:16px}._cJ{padding-left:28px;height:28px;line-height:28px;width:100%}._cK{padding:5px;color:#999;display:block;cursor:default}._cL{padding:0 4px;margin:2px 0}._cM{cursor:pointer;color:#666;display:block;width:100%;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._cM:hover{color:#333;background-color:#f0f0f0}._cN,._cN:active,._cN:focus,._cN:hover{color:#fff;background-color:#f96447}");
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
    tmpl: {"html":"<div class=\"_cy\" mx-click=\"\u001f\u001e__aW()\" title=\"<%=$$.selectedText%>\"><span class=\"_cC<%if($$.selected===''){%> _cD<%}%>\"><%=$$.selectedText%></span><span class=\"__ _cA\">&#xe692;</span></div><div class=\"_cE\"><%if($$.rList){if($$.searchbox){%><div class=\"_cG\"><label class=\"_cH\"><span class=\"__ _cI\">&#xe608;</span><input placeholder=\"搜索关键词\" mx-keyup=\"\u001f\u001e__ct()\" mx-paste=\"\u001f\u001e__ct()\" mx-change=\"\u001f\u001e__as()\" mx-focusin=\"\u001f\u001e__as()\" mx-focusout=\"\u001f\u001e__as()\" class=\"_ap _cJ\" value=\"<%=$$.keyword%>\"></label></div><%}%><ul class=\"_cF\" id=\"list_<%=$$.viewId%>\"><%var _=void 0,a=void 0;for(var b=0,c=$$.list;b<c.length;b++){var d=c[b];if($$.textKey&&$$.valueKey){_=d[$$.textKey];a=d[$$.valueKey];}else{_=d;a=d;}if(d&&d.group){%><li class=\"_cK _al\" title=\"<%=d[$$.textKey]%>\"><%=d[$$.textKey]%></li><%}else{%><li title=\"<%=_%>\" class=\"_cL\"><%var e=(a+'')===($$.selected+'')%><span class=\"_cM _al<%if(e){%> _cN<%}%>\" mx-click=\"\u001f\u001e__cu({item:'<%@d%>'})\"><%=_%></span></li><%}}%></ul><%}%></div>"},
    init: function (extra) {
        var me = this;
        Monitor['__d']();
        var node = $('#' + me.id);
        node.addClass('_cx');
        node.on('keydown', function (e) {
            if (e.keyCode == 13) {
                me['__aW<click>']();
            } /*else if (e.keyCode == 40) {//down arrow
                e.preventDefault();
            } else if (e.keyCode == 38) {//up arrow
                e.preventDefault();
            }*/
        });
        me.on('destroy', function () {
            node.off('keydown');
            Monitor['__g'](me);
            Monitor['__h']();
        });
        me.updater.set({
            viewId: me.id
        });
        me['__i'] = node;
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
        me['__cm'] = (ops.disabled + '') === 'true';
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
                    map[emptyText] = emptyText;
                }
            }
        }
        if (!selected && emptyText && !(textKey || valueKey)) {
            selected = emptyText;
        }
        if (!selected || !map[selected]) {
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me['__b_'] = selected;
        me['__cn'] = textKey && valueKey ? map[selected][textKey] : selected;
        return true;
    },
    '__j': function (node) {
        return Magix.inside(node, this.id);
    },
    render: function () {
        var me = this;
        var node = me['__i'];
        node[me['__cm'] ? 'addClass' : 'removeClass']('_cz').prop('tabindex', me['__cm'] ? -1 : 0);
        me['__co'](true);
    },
    '__a': function () {
        var me = this;
        if (me['__i'].hasClass('_cB')) {
            me['__i'].removeClass('_cB').trigger('focusout');
            Monitor['__g'](me);
        }
    },
    '__f': function () {
        var me = this;
        if (!me['__i'].hasClass('_cB')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['__i'].addClass('_cB').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._cN');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['__l'](me);
        }
    },
    '__co': function (ignoreFireEvent) {
        var me = this;
        var selected = me['__b_'];
        me.updater.digest({
            textKey: me['__ci'],
            valueKey: me['__cj'],
            selected: selected,
            searchbox: me['__cl'],
            selectedText: me['__cn'],
            list: me['__ch'].slice()
        });
        me['__i'].val(selected);
        if (!ignoreFireEvent) {
            me['__v'](selected);
        }
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
    '__v': function (item, compare) {
        var me = this;
        var updater = me.updater;
        var valueKey = me['__cj'];
        var textKey = me['__ci'];
        var lastSelected = me['__b_'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['__b_'] = selected
            });
            var event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            }
            else {
                updater.set({
                    selected: lastSelected
                });
            }
            me['__i'].val(valueKey ? item[valueKey] : item).trigger(event);
        }
    },
    '__aW<click>': function () {
        var me = this;
        var node = me['__i'];
        if (node.hasClass('_cB')) {
            me['__a']();
        }
        else if (!node.hasClass('_cz')) {
            me['__f']();
        }
    },
    '__ct<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['__cr']);
        var val = $.trim(e.eventTarget.value);
        me['__cr'] = setTimeout(me.wrapAsync(function () {
            if (val != me['__cs']) {
                me['__cq'](me['__cs'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '__cu<click>': function (e) {
        var me = this;
        me['__v'](e.params.item, true);
        me['__a']();
    },
    '__as<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});