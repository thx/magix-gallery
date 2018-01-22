/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_D","._et{border-radius:4px;padding:10px;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);border:1px solid rgba(0,0,0,.1);max-width:276px;min-width:200px;background-color:#fff;position:relative;z-index:10}._eu{line-height:22px;padding:9px 14px}._ev{border-top:1px solid #e6e6e6;margin-left:10px;padding-top:10px;width:92%;text-align:right}");
var Monitor = require("../mx-monitor/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_et\"><div class=\"_eu\"><%!$$.content%></div><div class=\"_ev\"><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001e__aI()\"><%=$$.enterText%></button><button type=\"button\" class=\"_an _s\" mx-click=\"\u001f\u001e__a()\"><%=$$.cancelText%></button></div></div>"},
    init: function (extra) {
        var me = this;
        me['__J'] = extra.placement || 'left';
        me['__K'] = extra.align;
        me['__eb'] = extra.content || '确认执行该操作？';
        me['__ec'] = extra.enterText || '确定';
        me['__ed'] = extra.cancelText || '取消';
        Monitor['__d']();
        me.on('destroy', function () {
            me['__i'].off('click');
            Monitor['__g'](me);
            Monitor['__h']();
        });
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        me['__i'] = oNode = oNode.prev();
        me['__i'].on('click', function (e) {
            e.preventDefault();
            me['__f']();
        });
    },
    '__j': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['__i'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['__eb'],
            enterText: me['__ec'],
            cancelText: me['__ed']
        });
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            me['__k'] = true;
            Monitor['__l'](me);
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
            var left = void 0, top = void 0;
            switch (me['__J']) {
                case 'top':
                    left = offset.left - (rWidth - width) / 2;
                    top = offset.top - rHeight - 5;
                    break;
                case 'right':
                    left = offset.left + width + 5;
                    top = offset.top - (rHeight - height) / 2;
                    break;
                case 'bottom':
                    left = offset.left - (rWidth - width) / 2;
                    top = offset.top + height + 5;
                    break;
                case 'left':
                    left = offset.left - rWidth - 5;
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
        }
    },
    '__a': function () {
        var me = this;
        if (me['__k']) {
            delete me['__k'];
            Monitor['__g'](me);
            me['__e'].hide();
        }
    },
    '__aI<click>': function () {
        var me = this;
        me['__a']();
        me['__i'].trigger('enter');
    },
    '__a<click>': function () {
        this['__a']();
    }
});

});