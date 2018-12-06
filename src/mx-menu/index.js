/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Vframe = Magix.Vframe;
Magix.applyStyle("__mx-menu_index_","/* @dependent: ./index.less */\n.__mx-menu_index_-container {\n  transition: margin-left 0.25s;\n}\n.__mx-menu_index_-items {\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  cursor: default;\n  padding: 4px 0;\n}\n.__mx-menu_index_-items-li {\n  height: 29px;\n  line-height: 29px;\n  cursor: default;\n  border-radius: 4px;\n  padding: 0 12px;\n  margin: 0 4px;\n}\n.__mx-menu_index_-over {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-menu_index_-toright {\n  margin-left: 10px;\n}\n.__mx-menu_index_-toleft {\n  margin-left: -10px;\n}\n.__mx-menu_index_-more {\n  font-size: 12px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n  top: 25%;\n  color: #e6e6e6;\n}\n");
var ActiveInstance = null;
var CSSNames = {
    left: '__mx-menu_index_-toleft',
    right: '__mx-menu_index_-toright'
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
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', width = $$.width, isChild = $$.isChild, contextMenu = $$.contextMenu, list = $$.list, valueKey = $$.valueKey, textKey = $$.textKey, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div style="width:' + ($expr = '<%=width%>', $e(width)) + 'px;';
    $expr = '<%if (isChild || contextMenu) {%>';
    if (isChild || contextMenu) {
        ;
        $p += 'position:absolute;left:-10000px;top:-10000px';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-mouseover="' + $viewId + '@{over}();" class="__mx-menu_index_-container" mx-contextmenu="' + $viewId + '@{prevent}()"><ul mxa="_(:_" class="__mx-menu_index_-items __mx-style_index_-unselectable">';
    $expr = '<%for (var i = 0, one; i < list.length; i++) {%>';
    for (var i = 0, one; i < list.length; i++) {
        ;
        $p += ' ';
        $expr = '<%one = list[i]%>';
        one = list[i];
        $p += '<li class="__mx-style_index_-ellipsis __mx-menu_index_-items-li" mx-mouseover="' + $viewId + '@{hover}({id:\'' + ($expr = '<%=$eq(one[valueKey])%>', $e($eq(one[valueKey]))) + '\'})" mx-mouseout="' + $viewId + '@{hover}({id:\'' + ($expr = '<%=$eq(one[valueKey])%>', $e($eq(one[valueKey]))) + '\'});\n            " ';
        $expr = '<%if (!one.children) {%>';
        if (!one.children) {
            ;
            $p += ' mx-click="' + $viewId + '@{select}({id:\'' + ($expr = '<%=$eq(one[valueKey])%>', $e($eq(one[valueKey]))) + '\'})" ';
            $expr = '<%}%>';
        }
        ;
        $p += ' title="' + ($expr = '<%=one[textKey]%>', $e(one[textKey])) + '" id="' + ($expr = '<%=viewId%>', $e(viewId)) + '_' + ($expr = '<%=one[valueKey]%>', $e(one[valueKey])) + '">' + ($expr = '<%=one[textKey]%>', $e(one[textKey])) + ' ';
        $expr = '<%if (one.children) {%>';
        if (one.children) {
            ;
            $p += '<span mxs="_(:_" class="__mx-style_index_-fr __mx-style_index_-mc-iconfont __mx-menu_index_-more">&#xe61e;</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</li>';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-menu/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me.assign(extra);
        me['@{context.menu}'] = extra['@{context.menu}'];
        me['@{context.event}'] = extra['@{context.event}'];
        me['@{fn.picked}'] = extra.picked;
        if (!me['@{parent.node}']) {
            Monitor['@{setup}']();
            me.on('destroy', function () {
                Monitor['@{remove}'](me);
                Monitor['@{teardown}']();
                if (me['@{context.menu}']) {
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
        var parentNode = ops['@{parent.node}'];
        if (!parentNode) {
            var temp = ListToTree(ops.list, valueKey, parentKey);
            me['@{list.map}'] = temp.map;
            me['@{list}'] = temp.list;
        }
        else {
            me['@{list.map}'] = ops['@{list.map}'];
            me['@{list}'] = ops.list;
        }
        me['@{parent.node}'] = parentNode;
        me['@{width}'] = width;
        me['@{value.key}'] = valueKey;
        me['@{parent.key}'] = parentKey;
        me['@{text.key}'] = textKey;
        me['@{parent.id}'] = ops.pId;
        me['@{root.panel}'] = ops['@{root.panel}'];
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            contextMenu: me['@{context.menu}'],
            isChild: me['@{parent.node}'],
            list: me['@{list}'],
            width: me['@{width}'],
            valueKey: me['@{value.key}'],
            textKey: me['@{text.key}']
        });
        if (me['@{context.menu}']) {
            me['@{show}'](me['@{context.event}']);
        }
    },
    '@{inside}': function (node) {
        var me = this;
        var inside = Magix.inside(node, me.id);
        if (!inside) {
            var children = me.owner.children();
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var child = Vframe.get(c);
                if (child) {
                    inside = child.invoke('@{inside}', [node]);
                    if (inside)
                        break;
                }
            }
        }
        return inside;
    },
    '@{show}': function (e, refNode) {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = 1;
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
            var root = me['@{root.panel}'] || me;
            if (ActiveInstance != root)
                ActiveInstance = root;
            if (me['@{parent.node}']) {
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
            if (!root['@{monitor.added}']) {
                root['@{monitor.added}'] = 1;
                Monitor['@{add}'](root);
            }
        }
    },
    '@{hide}': function () {
        var me = this;
        var children = me.owner.children();
        for (var i = children.length - 1; i >= 0; i--) {
            var child = Vframe.get(children[i]);
            if (child)
                child.invoke('@{hide}');
        }
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            var node = $('#' + me.id + ' div');
            if (me['@{parent.node}']) {
                node.removeClass(CSSNames.left).removeClass(CSSNames.right);
                node.css({
                    left: -100000
                });
                me['@{parent.node}'].removeClass('__mx-menu_index_-over');
            }
            else {
                if (me['@{context.menu}']) {
                    node.css({
                        left: -10000
                    });
                }
                delete me['@{monitor.added}'];
                Monitor['@{remove}'](me);
            }
        }
    },
    '@{stop.hide.child}': function (id) {
        clearTimeout(this['@{timer.}' + id]);
    },
    '@{show.child}': function (node, id, children) {
        var me = this;
        me['@{stimer.}' + id] = setTimeout(me.wrapAsync(function () {
            var nid = me.id + '_menu_' + id;
            var vf = Vframe.get(nid);
            if (!vf) {
                $('body').append('<div id="' + nid + '" />');
                vf = me.owner.mountVframe(nid, 'mx-menu/index', {
                    '@{parent.node}': $('#' + me.id + '_' + id),
                    width: me['@{width}'],
                    valueKey: me['@{value.key}'],
                    textKey: me['@{text.key}'],
                    parentKey: me['@{parent.key}'],
                    list: children,
                    pId: id,
                    '@{root.panel}': me['@{root.panel}'] || me,
                    '@{list.map}': me['@{list.map}']
                });
            }
            vf.invoke('@{show}', [null, node], true);
        }), 250);
    },
    '@{hide.child}': function (id) {
        var me = this;
        var nid = me.id + '_menu_' + id;
        var vf = Vframe.get(nid);
        if (vf) {
            me['@{timer.}' + id] = setTimeout(me.wrapAsync(function () {
                vf.invoke('@{hide}');
            }), 50);
        }
    },
    '@{hover}<mouseover,mouseout>': function (e) {
        var me = this;
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            var node = $(e.eventTarget);
            node[e.type == 'mouseout' ? 'removeClass' : 'addClass']('__mx-menu_index_-over');
            var id = e.params.id;
            me['@{hide.child}'](me['@{last.id}']);
            if (e.type == 'mouseover') {
                var map = me['@{list.map}'];
                var children = map[id].children;
                if (children) {
                    me['@{stop.hide.child}'](id);
                    me['@{show.child}'](node, id, children);
                    me['@{last.id}'] = id;
                }
            }
            else {
                clearTimeout(me['@{stimer.}' + id]);
            }
        }
    },
    '@{over}<mouseover>': function (e) {
        var me = this;
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            if (!me['@{parent.node}'] && ActiveInstance != me) {
                if (ActiveInstance && ActiveInstance.owner) {
                    ActiveInstance['@{hide}']();
                }
            }
            if (me['@{parent.node}']) {
                $(me['@{parent.node}']).addClass('__mx-menu_index_-over');
                me.owner.parent().invoke('@{stop.hide.child}', [me['@{parent.id}']]);
            }
        }
    },
    '@{select}<click>': function (e) {
        var me = this;
        var root = me['@{root.panel}'] || me;
        var node = $('#' + root.id);
        var data = {
            type: 'pick',
            item: me['@{list.map}'][e.params.id]
        };
        node.trigger(data);
        root['@{hide}']();
        var fn = root['@{fn.picked}'];
        if (fn) {
            fn(data.item);
        }
    },
    '@{prevent}<contextmenu>': function (e) {
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
            vf.invoke('@{show}', [e]);
        }
        else {
            $('body').append('<div id="' + id + '" />');
            ops = ops || {};
            Magix.mix(ops, {
                '@{context.menu}': 1,
                '@{context.event}': e
            });
            vf = view.owner.mountVframe(id, 'mx-menu/index', ops);
        }
    }
});

});