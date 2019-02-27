/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
require('./index');
module.exports = Magix.View.extend({
    tmpl: '@picker.html',
    init(extra) {
        let me = this;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        me['@{show.alpha}'] = extra.showAlpha;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        me['@{color}'] = extra.color || oNode.val();
        let click = () => {
            me['@{show}']();
        };
        let change = e => {
            if (!e.color) {
                e.stopPropagation();
            }
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            oNode.off('click', click).off('change', change);
        });
        oNode.on('click', click).on('change', change);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = me['@{relate.node}'],
                ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            node.show();
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('cpcnt_' + me.id, '@./index', {
                    showBtns: true,
                    showAlpha: me['@{show.alpha}'],
                    color: me['@{color}']
                });
            }
            Monitor['@{add}'](me);
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
            me['@{relate.node}'].hide();
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
        }
    },
    '@{color.picked}<change>'(e) {
        let me = this;
        e.stopPropagation();
        me['@{hide}']();
        me['@{owner.node}'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
    }
});