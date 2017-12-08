/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Wrapper = '@picker.html';
require('./index');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{color}'] = extra.color;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        me['@{show.alpha}'] = extra.showAlpha;
        Monitor['@{setup}']();
        let ownerNode = $('#' + me.id);
        let click = () => {
            me['@{show}']();
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            $('#cpcnt_' + me.id).remove();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me['@{owner.node}'] = ownerNode;
        ownerNode.prop('autocomplete', 'off');
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'cpcnt_' + me.id);
    },
    render() {
        let me = this;
        let id = 'cpcnt_' + me.id;
        me['@{color}'] = me['@{color}'] || me['@{owner.node}'].val();
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['@{owner.node}']);
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = $('#cpcnt_' + me.id),
                ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('cpcnt_' + me.id, '@./index', {
                    showBtns: true,
                    showAlpha: me['@{show.alpha}'],
                    color: me['@{color}']
                });
            }
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
            let node = $('#cpcnt_' + me.id);
            me['@{ui.show}'] = false;
            node.hide();
            Monitor['@{remove}'](me);
        }
    },
    '@{color.picked}<change>'(e) {
        let me = this;
        e.stopPropagation();
        me['@{owner.node}'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
        me['@{hide}']();
    }
});