/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/picker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
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
require("./index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-change=\"\u001f\u001e__aJ()\" id=\"cpcnt_<%=$$.viewId%>\"></div>"},
    init: function (extra) {
        var me = this;
        me['__J'] = extra.placement;
        me['__K'] = extra.align;
        me['__av'] = extra.showAlpha;
        Monitor['__d']();
        var oNode = $('#' + me.id);
        me['__au'] = extra.color || oNode.val();
        me['__e'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['__f']();
        };
        var change = function (e) {
            if (!e.color) {
                e.stopPropagation();
            }
        };
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            oNode.off('click', click).off('change', change);
        });
        oNode.on('click', click).on('change', change);
        me['__i'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '__j': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, 'temp_' + me.id) ||
            Magix.inside(node, me['__i'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            var node = me['__e'], ref = me['__i'];
            me['__k'] = true;
            node.show();
            if (!me['__m']) {
                me['__m'] = true;
                me.owner.mountVframe('cpcnt_' + me.id, 'mx-color/index', {
                    showBtns: true,
                    showAlpha: me['__av'],
                    color: me['__au']
                });
            }
            Monitor['__l'](me);
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['__J']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['__K']) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    '__a': function () {
        var me = this;
        if (me['__k']) {
            me['__e'].hide();
            me['__k'] = false;
            Monitor['__g'](me);
        }
    },
    '__aJ<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['__a']();
        me['__i'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
    }
});

});