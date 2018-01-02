/*
ver:2.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        Monitor['@{setup}']();
        let ownerNode = $('#' + me.id);
        let click = (e) => {
            e.preventDefault();
            me['@{show}']();
        };
        me.on('destroy', () => {
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
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{relate.node}'][0]);
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = me['@{relate.node}'],
                ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            node.show();
            let offset = ref.offset();
            let left, top;
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
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            let node = me['@{relate.node}'];
            me['@{ui.show}'] = false;
            node.hide();
            Monitor['@{remove}'](me);
        }
    }
});