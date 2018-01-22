/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
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
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__J'] = extra.placement;
        me['__K'] = extra.align;
        Monitor['__d']();
        var ownerNode = $('#' + me.id);
        var click = function (e) {
            e.preventDefault();
            me['__f']();
        };
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me['__i'] = ownerNode;
        me['__e'] = $(extra.related);
        me['__e'].css({
            position: 'absolute'
        });
    },
    '__j': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['__e'][0]);
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            var node = me['__e'], ref = me['__i'];
            me['__k'] = true;
            Monitor['__l'](me);
            node.show();
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
            var node = me['__e'];
            me['__k'] = false;
            node.hide();
            Monitor['__g'](me);
        }
    }
});

});