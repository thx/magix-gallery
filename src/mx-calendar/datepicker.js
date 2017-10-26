/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/datepicker',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var Vframe = Magix.Vframe;
var Monitor = require('../mx-monitor/index');
var Wrapper = "<div style=\"position:absolute;display:none;z-index:10\" mx-change=\"\u001f\u001e_n()\" mx-cancel=\"\u001f\u001e_a()\"></div>";
require('./index');
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['_c'] = extra;
        Monitor['_d']();
        var oNode = $('#' + me.id);
        var click = function () {
            me['_e']();
        };
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            $('#dpcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['_h'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'dpcnt_' + me.id);
    },
    update: function (options) {
        var me = this;
        var vf = Vframe.get('dpcnt_' + me.id);
        vf.invoke('update', [options]);
    },
    render: function () {
        var me = this;
        var id = 'dpcnt_' + me.id;
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['_h']);
        if (!me['_c'].selected) {
            me['_c'].selected = me['_h'].val();
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            var node = $('#dpcnt_' + me.id), ref = me['_h'];
            me['_j'] = true;
            Monitor['_k'](me);
            if (!me['_l']) {
                me['_l'] = true;
                me.owner.mountVframe('dpcnt_' + me.id, 'mx-calendar/index', me['_c']);
            }
            node.show();
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['_c'].placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['_c'].align) {
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
    '_a': function () {
        var me = this;
        if (me['_j']) {
            var node = $('#dpcnt_' + me.id);
            var vf = node.prop('vframe');
            if (vf) {
                vf.invoke('_m');
            }
            me['_j'] = false;
            node.hide();
            Monitor['_f'](me);
        }
    },
    '_n<change>': function (e) {
        var me = this;
        e.stopPropagation();
        var val = e.date;
        if (e.time) {
            val += ' ' + e.time;
        }
        me['_h'].val(val).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
        me['_a']();
    },
    '_a<cancel>': function () {
        this['_a']();
    }
});

});