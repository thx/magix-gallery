/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_E","._ew{border-radius:4px;padding:9px 14px;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);border:1px solid rgba(0,0,0,.1);background-color:#fff;line-height:22px}");
var Active;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_ew\" mx-mouseover=\"\u001f\u001e__dH()\" mx-mouseout=\"\u001f\u001e__eg()\" style=\"width:<%=$$.width%>px;<%if($$.show){%>left:<%=$$.left%>px;top:<%=$$.top%>px;display:block;<%}%>\" id=\"popover_<%=$$.vId%>\"><%!$$.content%></div>"},
    init: function (extra) {
        var me = this;
        me['__J'] = extra.placement || 'right';
        me['__K'] = extra.align;
        me['__eb'] = extra.content || '';
        me['__dt'] = extra.width | 0;
        me.on('destroy', function () {
            me['__i'].off('mouseenter mouseleave');
        });
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        me['__i'] = oNode = oNode.prev();
        oNode.hover(function () {
            me['__ee'] = setTimeout(me.wrapAsync(function () {
                me['__f'](); //等待内容显示
            }), 100);
        }, function () {
            clearTimeout(me['__ee']);
            me['__a']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            vId: me.id,
            content: me['__eb'],
            width: me['__dt'] || 276
        });
    },
    content: function (body) {
        var me = this;
        if (!body) {
            return me['__eb'];
        }
        if (!me['__e']) {
            me['__eb'] = body;
        }
        else {
            me['__eb'] = body;
            me.updater.digest({
                content: body
            });
        }
    },
    '__f': function () {
        var me = this;
        if (Active && Active != me) {
            Active['__ef']();
        }
        Active = me;
        clearTimeout(me['__ee']);
        var rNode = me['__e'];
        var oNode = me['__i'];
        var offset = oNode.offset();
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        rNode.css({
            display: 'block'
        });
        var rWidth = rNode.outerWidth();
        var rHeight = rNode.outerHeight();
        var left, top;
        switch (me['__J']) {
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
        switch (me['__K']) {
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
    '__a': function () {
        var me = this;
        clearTimeout(me['__ee']);
        me['__ee'] = setTimeout(me.wrapAsync(function () {
            me['__e'].hide();
        }), 50);
    },
    '__ef': function () {
        var me = this;
        clearTimeout(me['__ee']);
        me['__e'].hide();
    },
    '__dH<mouseover>': function () {
        clearTimeout(this['__ee']);
    },
    '__eg<mouseout>': function (e) {
        var flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            this['__a']();
        }
    }
});

});