/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
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
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        Monitor['@{setup}']();
        var ownerNode = $('#' + me.id);
        var click = function (e) {
            e.preventDefault();
            me['@{show}']();
        };
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me['@{owner.node}'] = ownerNode;
        me['@{relate.node}'] = $(extra.related);
        me['@{relate.node}'].css({
            position: 'absolute'
        });
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{relate.node}'][0]);
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            var node = me['@{relate.node}'], ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            node.show();
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['@{pos.placement}']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['@{pos.align}']) {
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
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            var node = me['@{relate.node}'];
            me['@{ui.show}'] = false;
            node.hide();
            Monitor['@{remove}'](me);
        }
    }
});

});