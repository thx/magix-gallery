/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
Magix.applyStyle("l",".bX{position:relative;width:340px;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;display:inline-block;vertical-align:middle;height:32px}.bX:hover{border-color:#ccc}.bY{color:#333;position:relative;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 30px 0 12px}.bZ{cursor:not-allowed;background-color:#fbfbfb}.bZ:hover{border-color:#e6e6e6}.bZ .bY{cursor:not-allowed}.c_{position:absolute;right:0;top:2px;font-size:28px;color:#ccc;-webkit-transition:top .3s,-webkit-transform .3s;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s}.ca .c_{-webkit-transform:rotate(180deg);transform:rotate(180deg);top:0}.ca,.ca:hover{border-color:#6363e6}.cb{height:30px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cc{color:#999}.cd{position:absolute;top:100%;left:-1px;right:-1px;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ca .cd{display:block}.ce{overflow:auto;max-height:196px;padding-bottom:3px;padding-top:5px}.cf{display:block;width:100%;padding:9px 9px 4px}.cg{padding:0;width:100%}.ch{color:#ccc;position:absolute;left:15px;top:16px}.ci{padding-left:28px;height:28px;line-height:28px;width:100%}.cj{padding:5px;color:#999;display:block;cursor:default}.ck{padding:0 4px;margin:2px 0}.cl{color:#666;display:block;width:100%;padding:0 12px;height:29px;line-height:29px;border-radius:4px}.cl:active,.cl:focus,.cl:hover{color:#333;background-color:#f0f0f0}.cm,.cm:active,.cm:focus,.cm:hover{color:#fff;background-color:#6363e6}");
var AssignIf = function (view, key, ops, src) {
    if (!view[key] || ops) {
        var v = ops || '';
        if (!src) {
            v += '';
        }
        view[key] = v;
    }
    return view[key];
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"bY\" mx-click=\"\u001f\u001e_bw()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"cb<%if($$.selected===''){%> cc<%}%>\">2\u001d</span><span class=\"_ c_\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"cd\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["selected","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"cb<%if($$.selected===''){%> cc<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){if($$.searchbox){%><div class=\"cf\"><label class=\"cg\"><span class=\"_ ch\">&#xe608;</span><input placeholder=\"搜索关键词\" mx-keyup=\"\u001f\u001e_by()\" mx-paste=\"\u001f\u001e_by()\" mx-change=\"\u001f\u001e_bA()\" mx-focusin=\"\u001f\u001e_bA()\" mx-focusout=\"\u001f\u001e_bA()\" class=\"an ci\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"ce\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><%}%>","s":"3\u001d"},{"keys":["list","textKey","valueKey","selected"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%var a=void 0,b=void 0;for(var c=0,d=$$.list;c<d.length;c++){var e=d[c];if($$.textKey&&$$.valueKey){a=e[$$.textKey];b=e[$$.valueKey];}else{a=e;b=e;}if(e&&e.group){%><li class=\"cj aj\" title=\"<%=e[$$.textKey]%>\"><%=e[$$.textKey]%></li><%}else{%><li title=\"<%=a%>\" class=\"ck\"><%var f=(b+'')===($$.selected+'')%><a href=\"#\" class=\"cl aj<%if(f){%> cm<%}%>\" mx-click=\"\u001f\u001e_bz({item:'<%@e%>'})\"><%=a%></a></li><%}}%>","s":"4\u001d"}]},
    init: function (extra) {
        var me = this;
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
        });
        me.updater.set({
            viewId: me.id
        });
        var node = $('#' + me.id);
        node.addClass('bX');
        me['_h'] = node;
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        AssignIf(me, '_bl', ops.list, true);
        var selected = AssignIf(me, '_bm', ops.selected);
        var textKey = AssignIf(me, '_bn', ops.textKey);
        var valueKey = AssignIf(me, '_bo', ops.valueKey);
        var emptyText = AssignIf(me, '_bp', ops.emptyText);
        me['_bq'] = (ops.searchbox + '') === 'true';
        me['_br'] = (ops.disabled + '') === 'true';
        if (!me['_bl']) {
            var node = me['_h'];
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
            textKey = me['_bn'] = 'text';
            valueKey = me['_bo'] = 'value';
            me['_bl'] = list_1;
        }
        var list = me['_bl'];
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
        me['_bm'] = selected;
        me['_bs'] = textKey && valueKey ? map[selected][textKey] : selected;
        return true;
    },
    '_i': function (node) {
        return Magix.inside(node, this.id);
    },
    render: function () {
        var me = this;
        var node = me['_h'];
        node[me['_br'] ? 'addClass' : 'removeClass']('bZ');
        me['_bt'](true);
    },
    '_a': function () {
        var me = this;
        if (me['_h'].hasClass('ca')) {
            me['_h'].removeClass('ca').trigger('focusout');
            Monitor['_f'](me);
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_h'].hasClass('ca')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['_h'].addClass('ca').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('.cm');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['_k'](me);
        }
    },
    '_bt': function (ignoreFireEvent) {
        var me = this;
        var selected = me['_bm'];
        me.updater.digest({
            textKey: me['_bn'],
            valueKey: me['_bo'],
            selected: selected,
            searchbox: me['_bq'],
            selectedText: me['_bs'],
            list: me['_bl'].slice()
        });
        me['_h'].val(selected);
        if (!ignoreFireEvent) {
            me['_u'](selected);
        }
    },
    '_bv': function (val, callback) {
        var me = this;
        clearTimeout(me['_bu']);
        var srcList = me['_bl'];
        var newList = [];
        var index = 0;
        var max = srcList.length;
        var textKey = me['_bn'];
        var valueKey = me['_bo'];
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
                me['_bu'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '_u': function (item, compare) {
        var me = this;
        var updater = me.updater;
        var valueKey = me['_bo'];
        var textKey = me['_bn'];
        var lastSelected = me['_bm'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: me['_bm'] = selected
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
            me['_h'].val(valueKey ? item[valueKey] : item).trigger(event);
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
        }
    },
    '_bw<click>': function () {
        var me = this;
        var node = me['_h'];
        if (node.hasClass('ca')) {
            me['_a']();
        }
        else if (!node.hasClass('bZ')) {
            me['_e']();
        }
    },
    '_by<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['_bx']);
        var val = $.trim(e.eventTarget.value);
        me['_bx'] = setTimeout(me.wrapAsync(function () {
            if (val != me.$lVal) {
                me['_bv'](me.$lVal = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '_bz<click>': function (e) {
        e.preventDefault();
        e.stopPropagation();
        var me = this;
        me['_u'](e.params.item, true);
        me['_a']();
    },
    '_bA<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});