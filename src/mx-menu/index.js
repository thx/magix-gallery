/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
var Vframe = Magix.Vframe;
Magix.applyStyle("_B","._ee{-webkit-transition:margin-left .25s;transition:margin-left .25s}._ef{background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:default;padding:4px 0}._eg{height:29px;line-height:29px;cursor:default;border-radius:4px;padding:0 12px;margin:0 4px}._eh{color:#fff;background-color:#f96447}._ei{margin-left:10px}._ej{margin-left:-10px}._ek{font-size:12px;-webkit-transform:scaleX(-1);transform:scaleX(-1);top:25%;color:#e6e6e6}");
var ActiveInstance = null;
var CSSNames = {
    left: '_ej',
    right: '_ei'
};
var ListToTree = function (list, id, pId) {
    var map = {}, listMap = {}, rootList = [];
    for (var i = 0, max = list.length; i < max; i++) {
        var one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                var c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            }
            else {
                if (!listMap[one[pId]])
                    listMap[one[pId]] = [one];
                else
                    listMap[one[pId]].push(one);
            }
        }
        else {
            rootList.push(one);
        }
    }
    return { list: rootList, map: map };
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div style=\"width:<%=$$.width%>px;<%if($$.isChild||$$.contextMenu){%>position:absolute;left:-10000px;top:-10000px<%}%>\" mx-mouseover=\"\u001f\u001e__dH();\" class=\"_ee\" mx-contextmenu=\"\u001f\u001e__E()\"><ul class=\"_ef _aj\"><%for(var _=0,a;_<$$.list.length;_++){a=$$.list[_]%><li class=\"_al _eg\" mx-mouseover=\"\u001f\u001e__dG({id:'<%=$eq(a[$$.valueKey])%>'})\" mx-mouseout=\"\u001f\u001e__dG({id:'<%=$eq(a[$$.valueKey])%>'});\n            \" <%if(!a.children){%> mx-click=\"\u001f\u001e__cu({id:'<%=$eq(a[$$.valueKey])%>'})\" <%}%> title=\"<%=a[$$.textKey]%>\" id=\"<%=$$.viewId%>_<%=a[$$.valueKey]%>\"><%=a[$$.textKey]%> <%if(a.children){%><span class=\"_ab __ _ek\">&#xe61e;</span><%}%></li><%}%></ul></div>"},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        me['__dp'] = extra['__dp'];
        me['__dq'] = extra['__dq'];
        me['__dr'] = extra.picked;
        if (!me['__ds']) {
            Monitor['__d']();
            me.on('destroy', function () {
                Monitor['__g'](me);
                Monitor['__h']();
                if (me['__dp']) {
                    $('#' + me.id).remove();
                }
            });
        }
        else {
            me.on('destroy', function () {
                $('#' + me.id).remove();
            });
        }
    },
    assign: function (ops) {
        var me = this;
        var width = ops.width || 340;
        var valueKey = ops.valueKey || 'id';
        var parentKey = ops.parentKey || 'pId';
        var textKey = ops.textKey || 'text';
        var parentNode = ops['__ds'];
        if (!parentNode) {
            var temp = ListToTree(ops.list, valueKey, parentKey);
            me['__cw'] = temp.map;
            me['__ch'] = temp.list;
        }
        else {
            me['__cw'] = ops['__cw'];
            me['__ch'] = ops.list;
        }
        me['__ds'] = parentNode;
        me['__dt'] = width;
        me['__du'] = valueKey;
        me['__dv'] = parentKey;
        me['__dw'] = textKey;
        me['__dx'] = ops.pId;
        me['__dy'] = ops['__dy'];
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            contextMenu: me['__dp'],
            isChild: me['__ds'],
            list: me['__ch'],
            width: me['__dt'],
            valueKey: me['__du'],
            textKey: me['__dw']
        });
        if (me['__dp']) {
            me['__f'](me['__dq']);
        }
    },
    '__j': function (node) {
        var me = this;
        var inside = Magix.inside(node, me.id);
        if (!inside) {
            var children = me.owner.children();
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var child = Vframe.get(c);
                if (child) {
                    inside = child.invoke('__j', [node]);
                    if (inside)
                        break;
                }
            }
        }
        return inside;
    },
    '__f': function (e, refNode) {
        var me = this;
        if (!me['__k']) {
            me['__k'] = 1;
            var node = $('#' + me.id + ' div');
            var doc = $(document);
            var left = -1, top = -1, dock = 'right';
            var width = node.outerWidth();
            var height = node.outerHeight(), refWidth = 0, refHeight = 0;
            if (refNode) {
                var offset = refNode.offset();
                refWidth = refNode.outerWidth();
                refHeight = refNode.outerHeight();
                left = offset.left + refWidth;
                top = offset.top;
            }
            else {
                left = e.pageX;
                top = e.pageY;
            }
            if ((left + width) > doc.width()) {
                left = left - width - refWidth;
                dock = 'left';
                if (left < 0)
                    left = 0;
            }
            if ((top + height) > doc.height()) {
                top -= height;
                top += refHeight;
                if (top < 0)
                    top = 0;
            }
            if (refNode) {
                if (dock == 'right') {
                    left -= 10;
                }
                else {
                    left += 10;
                }
            }
            var root = me['__dy'] || me;
            if (ActiveInstance != root)
                ActiveInstance = root;
            if (me['__ds']) {
                node.css({
                    left: left,
                    top: top
                }).addClass(CSSNames[dock]);
            }
            else {
                node.css({
                    left: left,
                    top: top
                });
            }
            if (!root['__dz']) {
                root['__dz'] = 1;
                Monitor['__l'](root);
            }
        }
    },
    '__a': function () {
        var me = this;
        var children = me.owner.children();
        for (var i = children.length - 1; i >= 0; i--) {
            var child = Vframe.get(children[i]);
            if (child)
                child.invoke('__a');
        }
        if (me['__k']) {
            me['__k'] = false;
            var node = $('#' + me.id + ' div');
            if (me['__ds']) {
                node.removeClass(CSSNames.left).removeClass(CSSNames.right);
                node.css({
                    left: -100000
                });
                me['__ds'].removeClass('_eh');
            }
            else {
                if (me['__dp']) {
                    node.css({
                        left: -10000
                    });
                }
                delete me['__dz'];
                Monitor['__g'](me);
            }
        }
    },
    '__dB': function (id) {
        clearTimeout(this['__dA' + id]);
    },
    '__dD': function (node, id, children) {
        var me = this;
        me['__dC' + id] = setTimeout(me.wrapAsync(function () {
            var nid = me.id + '_menu_' + id;
            var vf = Vframe.get(nid);
            if (!vf) {
                $('body').append('<div id="' + nid + '" />');
                vf = me.owner.mountVframe(nid, 'mx-menu/index', {
                    '__ds': $('#' + me.id + '_' + id),
                    width: me['__dt'],
                    valueKey: me['__du'],
                    textKey: me['__dw'],
                    parentKey: me['__dv'],
                    list: children,
                    pId: id,
                    '__dy': me['__dy'] || me,
                    '__cw': me['__cw']
                });
            }
            vf.invoke('__f', [null, node], true);
        }), 250);
    },
    '__dE': function (id) {
        var me = this;
        var nid = me.id + '_menu_' + id;
        var vf = Vframe.get(nid);
        if (vf) {
            me['__dA' + id] = setTimeout(me.wrapAsync(function () {
                vf.invoke('__a');
            }), 50);
        }
    },
    '__dG<mouseover,mouseout>': function (e) {
        var me = this;
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var node = $(e.eventTarget);
            node[e.type == 'mouseout' ? 'removeClass' : 'addClass']('_eh');
            var id = e.params.id;
            me['__dE'](me['__dF']);
            if (e.type == 'mouseover') {
                var map = me['__cw'];
                var children = map[id].children;
                if (children) {
                    me['__dB'](id);
                    me['__dD'](node, id, children);
                    me['__dF'] = id;
                }
            }
            else {
                clearTimeout(me['__dC' + id]);
            }
        }
    },
    '__dH<mouseover>': function (e) {
        var me = this;
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            if (!me['__ds'] && ActiveInstance != me) {
                if (ActiveInstance) {
                    ActiveInstance['__a']();
                }
            }
            if (me['__ds']) {
                $(me['__ds']).addClass('_eh');
                me.owner.parent().invoke('__dB', [me['__dx']]);
            }
        }
    },
    '__cu<click>': function (e) {
        var me = this;
        var root = me['__dy'] || me;
        var node = $('#' + root.id);
        var data = {
            type: 'pick',
            item: me['__cw'][e.params.id]
        };
        node.trigger(data);
        root['__a']();
        var fn = me['__dr'];
        if (fn) {
            fn(data.item);
        }
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
}, {
    show: function (view, e, ops) {
        var node = e.eventTarget;
        if (!node.id) {
            node.id = Magix.guid();
        }
        var id = 'ctx_' + node.id;
        var vf = Magix.Vframe.get(id);
        if (vf) {
            vf.invoke('__f', [e]);
        }
        else {
            $('body').append('<div id="' + id + '" />');
            ops = ops || {};
            Magix.mix(ops, {
                '__dp': 1,
                '__dq': e
            });
            vf = view.owner.mountVframe(id, 'mx-menu/index', ops);
        }
    }
});

});