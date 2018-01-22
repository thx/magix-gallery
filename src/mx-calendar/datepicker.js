/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/datepicker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
var Monitor = require("../mx-monitor/index");
require("./index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-change=\"\u001f\u001e__o()\" mx-cancel=\"\u001f\u001e__a()\" id=\"dpcnt_<%=$$.viewId%>\"></div>"},
    init: function (extra) {
        var me = this;
        extra.hasBtn = 1;
        me['__c'] = extra;
        Monitor['__d']();
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['__f']();
        };
        var change = function (e) {
            if (!e.date) {
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
            Magix.inside(node, me['__i'][0]);
    },
    update: function (options) {
        var me = this;
        var vf = Vframe.get('dpcnt_' + me.id);
        vf.invoke('update', [options]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (!me['__c'].selected) {
            me['__c'].selected = me['__i'].val();
        }
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            var node = me['__e'], ref = me['__i'];
            me['__k'] = true;
            node.show();
            Monitor['__l'](me);
            if (!me['__m']) {
                me['__m'] = true;
                me.owner.mountVframe('dpcnt_' + me.id, 'mx-calendar/index', me['__c']);
            }
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['__c'].placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['__c'].align) {
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
            var node = $('#dpcnt_' + me.id);
            var vf = node.prop('vframe');
            if (vf) {
                vf.invoke('__n');
            }
            me['__k'] = false;
            me['__e'].hide();
            Monitor['__g'](me);
        }
    },
    '__o<change>': function (e) {
        var me = this;
        e.stopPropagation();
        var val = e.date;
        if (e.time) {
            val += ' ' + e.time;
        }
        me['__i'].val(val).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
        me['__a']();
    },
    '__a<cancel>': function () {
        this['__a']();
    }
});

});