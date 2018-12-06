/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-popover_index_","/* @dependent: ./index.less */\n.__mx-popover_index_-popover {\n  border-radius: 4px;\n  padding: 9px 14px;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  line-height: 22px;\n}\n");
var Active;
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
} ; var $g = '', $_temp, $p = '', width = $$.width, show = $$.show, left = $$.left, top = $$.top, vId = $$.vId, content = $$.content; var $expr, $art, $line; try {
    $p += '<div class="__mx-popover_index_-popover" mx-mouseover="' + $viewId + '@{over}()" mx-mouseout="' + $viewId + '@{out}()" style="width:' + ($expr = '<%=width%>', $e(width)) + 'px;';
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += 'left:' + ($expr = '<%=left%>', $e(left)) + 'px;top:' + ($expr = '<%=top%>', $e(top)) + 'px;display:block;';
        $expr = '<%}%>';
    }
    ;
    $p += '" id="popover_' + ($expr = '<%=vId%>', $e(vId)) + '">' + ($expr = '<%!content%>', $n(content)) + '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{pos.placement}'] = extra.placement || 'right';
        me['@{pos.align}'] = extra.align;
        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width | 0;
        me.on('destroy', function () {
            me['@{owner.node}'].off('mouseenter mouseleave');
        });
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        me['@{owner.node}'] = oNode = oNode.prev();
        oNode.hover(function () {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                me['@{show}'](); //等待内容显示
            }), 100);
        }, function () {
            clearTimeout(me['@{dealy.show.timer}']);
            me['@{hide}']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            vId: me.id,
            content: me['@{content}'],
            width: me['@{width}'] || 276
        });
    },
    content: function (body) {
        var me = this;
        if (!body) {
            return me['@{content}'];
        }
        if (!me['@{relate.node}']) {
            me['@{content}'] = body;
        }
        else {
            me['@{content}'] = body;
            me.updater.digest({
                content: body
            });
        }
    },
    '@{show}': function () {
        var me = this;
        if (Active && Active != me) { //优化大量提示的显示
            Active['@{immediatelyHide}']();
        }
        Active = me;
        clearTimeout(me['@{dealy.show.timer}']);
        var rNode = me['@{relate.node}'];
        var oNode = me['@{owner.node}'];
        var offset = oNode.offset();
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        rNode.css({
            display: 'block'
        });
        var rWidth = rNode.outerWidth();
        var rHeight = rNode.outerHeight();
        var left, top;
        switch (me['@{pos.placement}']) {
            case 'top':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top - rHeight - 10;
                break;
            case 'right':
                left = offset.left + width + 10;
                top = offset.top - (rHeight - height) / 2;
                break;
            case 'bottom':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top + height + 10;
                break;
            case 'left':
                left = offset.left - rWidth - 10;
                top = offset.top - (rHeight - height) / 2;
                break;
        }
        switch (me['@{pos.align}']) {
            case 'top':
                top = offset.top;
                break;
            case 'left':
                left = offset.left;
                break;
            case 'right':
                left = offset.left - rWidth + width;
                break;
            case 'bottom':
                top = offset.top - rHeight + height;
                break;
        }
        rNode.offset({
            left: left,
            top: top
        });
    },
    '@{hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{relate.node}'].hide();
        }), 50);
    },
    '@{immediatelyHide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        me['@{relate.node}'].hide();
    },
    '@{over}<mouseover>': function () {
        clearTimeout(this['@{dealy.show.timer}']);
    },
    '@{out}<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            this['@{hide}']();
        }
    }
});

});