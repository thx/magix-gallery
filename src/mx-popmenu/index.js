/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popmenu/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
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
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['_I'] = extra.placement;
        me['_J'] = extra.align;
        Monitor['_d']();
        var ownerNode = $('#' + me.id);
        var click = function (e) {
            e.preventDefault();
            me['_e']();
        };
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me['_h'] = ownerNode;
        me['_cV'] = $(extra.related);
        me['_cV'].css({
            position: 'absolute'
        });
    },
    '_i': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['_cV'][0]);
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            var node = me['_cV'], ref = me['_h'];
            me['_j'] = true;
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
            var node = me['_cV'];
            me['_j'] = false;
            node.hide();
            Monitor['_f'](me);
        }
    }
});

});