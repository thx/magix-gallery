/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/multiple',["magix","$","../mx-monitor/index"],function(require,exports,module){
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
Magix.applyStyle("m",".cn{position:relative;width:340px;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;display:inline-block;vertical-align:middle;height:32px}.cn:hover{border-color:#ccc}.co{color:#333;position:relative;width:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 30px 0 12px;border-radius:3px}.cp{cursor:not-allowed;background-color:#fbfbfb}.cp:hover{border-color:#e6e6e6}.cp .co{cursor:not-allowed}.cq{position:absolute;right:0;top:2px;font-size:28px;color:#ccc;-webkit-transition:top .3s,-webkit-transform .3s;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s}.cr .cq{-webkit-transform:rotate(180deg);transform:rotate(180deg);top:0}.cr,.cr:hover{border-color:#6363e6}.cs{height:30px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.ct{color:#999}.cu{position:absolute;top:100%;left:-1px;width:350px;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cr .cu{display:block}.cv{overflow:auto;max-height:192px;padding-bottom:3px;padding-top:5px}.cw{display:block;width:100%;padding:9px 9px 4px}.cx{padding:0;width:100%}.cy{color:#ccc;position:absolute;left:15px;top:18px}.cz{padding-left:28px;width:100%;height:28px;line-height:28px}.cA{padding:5px;color:#999;display:block;cursor:default}.cB{padding:3px 4px}.cC{color:#666;display:block;width:100%;padding:0 6px;height:26px;line-height:26px;border-radius:4px}.cD{width:32%;float:left;margin-left:2px;margin-bottom:2px}.cE{color:#666;display:block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}.cC:active,.cC:focus,.cC:hover,.cE:active,.cE:focus,.cE:hover{color:#333;background-color:#f0f0f0}.cF,.cF:active,.cF:focus,.cF:hover{color:#fff;background-color:#6363e6}.cG{border-top:1px solid #e6e6e6;margin:0 10px;padding:10px 0}");
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
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"co\" mx-click=\"\u001f\u001e_bw()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"cs<%if($$.phLabel){%> ct<%}%>\">2\u001d</span><span class=\"_ cq\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"cu\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["phLabel","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"cs<%if($$.phLabel){%> ct<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){if($$.searchbox){%><div class=\"cw\"><label class=\"cx\"><span class=\"_ cy\">&#xe608;</span><input mx-keyup=\"\u001f\u001e_by()\" mx-paste=\"\u001f\u001e_by()\" mx-change=\"\u001f\u001e_bA()\" mx-focusin=\"\u001f\u001e_bA()\" mx-focusout=\"\u001f\u001e_bA()\" placeholder=\"搜索关键词\" class=\"an cz\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"cv\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><div class=\"cG\"><button class=\"al am\" mx-click=\"\u001f\u001e_a({enter:true})\">确定</button><button class=\"al s\" mx-click=\"\u001f\u001e_a()\">取消</button></div><%}%>","s":"3\u001d"},{"keys":["selected","list","textKey","valueKey"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%var a=$$.selected.split(','),b=void 0,c=void 0;for(var d=0;d<$$.list.length;d++){var e=$$.list[d];if(e&&e.group){%><li class=\"cA aj\" title=\"<%=e[$$.textKey]%>\"><%=e[$$.textKey]%></li><%}else{if($$.textKey&&$$.valueKey){b=e[$$.textKey];c=e[$$.valueKey];}else{b=e;c=e;}var f=$$.inArray(c+'',a)>-1;if(c===''){%><li title=\"<%=b%>\" class=\"cB\"><a href=\"#\" class=\"cC aj <%if(f){%> cF<%}%>\" mx-click=\"\u001f\u001e_bz({item:'<%@e%>'})\"><%=b%></a></li><%}else{%><li class=\"cB ag\"><ul><%for(;d<$$.list.length;d++){e=$$.list[d];if(e&&e.group){d--;break;}if($$.textKey&&$$.valueKey){b=e[$$.textKey];c=e[$$.valueKey];}else{b=e;c=e;}var g=$$.inArray(c+'',a)>-1%><li class=\"cD\"><a href=\"#\" class=\"cE aj<%if(g){%> cF<%}%>\" mx-click=\"\u001f\u001e_bz({item:'<%@e%>'})\"><%=b%></a></li><%}%></ul></li><%}}}%>","s":"4\u001d"}]},
    init: function (extra) {
        var me = this;
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
        });
        me.updater.set({
            viewId: me.id,
            inArray: $.inArray
        });
        var node = $('#' + me.id);
        me['_h'] = node;
        node.addClass('cn');
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
        me['_bB'] = (ops.disabled + '') === 'true';
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
        me['_bm'] = selected;
        me['_bC'] = map;
        return true;
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
    },
    render: function () {
        var me = this;
        var node = me['_h'];
        node[me['_bB'] ? 'addClass' : 'removeClass']('cp');
        me['_bD'](me['_bm']);
    },
    '_a': function (ignoreBak) {
        var me = this;
        if (me['_h'].hasClass('cr')) {
            var data = me.updater.get();
            if (Magix.has(me, '_bE')) {
                var fired = ignoreBak && data.selected !== me['_bE'];
                if (ignoreBak) {
                    me['_bD'](data.selected);
                }
                else {
                    me['_bD'](me['_bE']);
                }
                if (fired) {
                    me['_h'].val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
                delete me['_bE'];
            }
            me['_h'].removeClass('cr').trigger('focusout');
            Monitor['_f'](me);
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_h'].hasClass('cr')) {
            var r = me.updater.get('rList');
            if (!r) {
                me.updater.digest({
                    rList: true
                });
            }
            me['_h'].addClass('cr').trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('.cF');
            var pos = active.position();
            if (pos) {
                var height = listNode.height();
                var stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    var top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['_k'](me);
        }
    },
    '_bF': function (keys, textKey) {
        var me = this;
        var map = me['_bC'];
        var text = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            }
            else {
                text.push(entity);
            }
        }
        return text;
    },
    '_bD': function (selected) {
        var me = this;
        selected = selected || '';
        selected += '';
        var textKey = me['_bn'] || '';
        var valueKey = me['_bo'] || '';
        var parts = selected.split(',');
        var selectedText = '';
        var list = me['_bl'];
        if (parts.length) {
            selectedText = me['_bF'](parts, textKey);
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
            list: list,
            textKey: textKey,
            valueKey: valueKey,
            searchbox: me['_bq'],
            phLabel: selected === '',
            selected: me['_bm'] = selected,
            selectedText: selectedText
        });
        me['_h'].val(selected);
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
    '_bw<click>': function () {
        var me = this;
        var node = me['_h'];
        if (node.hasClass('cr')) {
            me['_a']();
        }
        else if (!node.hasClass('cp')) {
            me['_e']();
        }
    },
    '_by<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['_bx']);
        var val = $.trim(e.eventTarget.value);
        me['_bx'] = setTimeout(me.wrapAsync(function () {
            if (val != me['_bG']) {
                me['_bv'](me['_bG'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '_bz<click>': function (e) {
        e.preventDefault();
        var me = this;
        var item = e.params.item;
        var updater = me.updater;
        var data = updater.get();
        if (!Magix.has(me, '_bE')) {
            me['_bE'] = data.selected;
        }
        var valueKey = me['_bo'];
        var textKey = me['_bn'];
        var selected = item;
        var selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        var keys = [''];
        if (selectedText != me['_bp'] || selected) {
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
            selected: me['_bm'] = selected
        });
    },
    '_bA<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '_a<click>': function (e) {
        this['_a'](e.params.enter);
    }
});

});