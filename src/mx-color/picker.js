/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/picker',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
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
var Wrapper = "<div style=\"position:absolute;display:none;z-index:10\" mx-change=\"\u001f\u001e_ad()\"></div>";
require('./index');
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['_W'] = extra.color;
        me['_I'] = extra.placement;
        me['_J'] = extra.align;
        Monitor['_d']();
        var ownerNode = $('#' + me.id);
        var click = function () {
            me['_e']();
        };
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            $('#cpcnt_' + me.id).remove();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me['_h'] = ownerNode;
        ownerNode.prop('autocomplete', 'off');
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'cpcnt_' + me.id);
    },
    render: function () {
        var me = this;
        var id = 'cpcnt_' + me.id;
        me['_W'] = me['_W'] || me['_h'].val();
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['_h']);
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            var node = $('#cpcnt_' + me.id), ref = me['_h'];
            me['_j'] = true;
            if (!me['_l']) {
                me['_l'] = true;
                me.owner.mountVframe('cpcnt_' + me.id, 'mx-color/index', {
                    color: me['_W']
                });
            }
            Monitor['_k'](me);
            node.show();
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['_I']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['_J']) {
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
            var node = $('#cpcnt_' + me.id);
            me['_j'] = false;
            node.hide();
            Monitor['_f'](me);
        }
    },
    '_ad<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['_h'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
        me['_a']();
    }
});

});