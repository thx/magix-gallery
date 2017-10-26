/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popconfirm/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("x",".ej{border-radius:4px;padding:10px;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);position:absolute;border:1px solid rgba(0,0,0,.1);display:none;max-width:276px;min-width:200px;background-color:#fff}.ek{line-height:22px;padding:9px 14px}.el{border-top:1px solid #e6e6e6;margin-left:10px;padding-top:10px;width:92%;text-align:right}");
var Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"ek\"><%!$$.content%></div><div class=\"el\"><button type=\"button\" class=\"al am\" mx-click=\"\u001f\u001e_ac()\"><%=$$.enterText%></button><button type=\"button\" class=\"al s\" mx-click=\"\u001f\u001e_a()\"><%=$$.cancelText%></button></div>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_I'] = extra.placement || 'left';
        me['_J'] = extra.align;
        me['_cR'] = extra.content || '确认执行该操作？';
        me['_cS'] = extra.enterText || '确定';
        me['_cT'] = extra.cancelText || '取消';
        Monitor['_d']();
        me.on('destroy', function () {
            me['_h'].off('click');
            Monitor['_f'](me);
            Monitor['_g']();
        });
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'popcfm_' + me.id);
    },
    render: function () {
        var me = this;
        me.endUpdate();
        var node = $('#' + me.id);
        me['_h'] = node;
        node.on('click', function (e) {
            e.preventDefault();
            me['_cU']();
            me['_e']();
        });
    },
    '_cU': function () {
        var me = this;
        if (!me['_cV']) {
            var id = 'popcfm_' + me.id;
            me['_h'].after('<div class="ej" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me['_cR'],
                enterText: me['_cS'],
                cancelText: me['_cT']
            });
            me['_cV'] = $('#' + id);
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            me['_j'] = true;
            Monitor['_k'](me);
            var rNode = me['_cV'];
            var oNode = me['_h'];
            var offset = oNode.offset();
            var width = oNode.outerWidth();
            var height = oNode.outerHeight();
            rNode.css({
                display: 'block'
            });
            var rWidth = rNode.outerWidth();
            var rHeight = rNode.outerHeight();
            var left = void 0, top = void 0;
            switch (me['_I']) {
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
            switch (me['_J']) {
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
    '_a': function () {
        var me = this;
        if (me['_j']) {
            delete me['_j'];
            Monitor['_f'](me);
            me['_cV'].css({
                display: 'none'
            });
        }
    },
    '_ac<click>': function () {
        var me = this;
        me['_a']();
        me['_h'].trigger('enter');
    },
    '_a<click>': function () {
        this['_a']();
    }
});

});