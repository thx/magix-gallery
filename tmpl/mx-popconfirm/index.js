/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{pos.placement}'] = extra.placement || 'left';
        me['@{pos.align}'] = extra.align;
        me['@{content}'] = extra.content || '确认执行该操作？';
        me['@{text.enter}'] = extra.enterText || '确定';
        me['@{text.cancel}'] = extra.cancelText || '取消';
        Monitor['@{setup}']();
        me.on('destroy', () => {
            me['@{owner.node}'].off('click');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        me['@{owner.node}'] = oNode = oNode.prev();
        me['@{owner.node}'].on('click', e => {
            e.preventDefault();
            me['@{show}']();
        });
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
    },
    render() {
        let me = this;
        me.updater.digest({
            content: me['@{content}'],
            enterText: me['@{text.enter}'],
            cancelText: me['@{text.cancel}']
        });
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            let rNode = me['@{relate.node}'];
            let oNode = me['@{owner.node}'];
            let offset = oNode.offset();
            let width = oNode.outerWidth();
            let height = oNode.outerHeight();
            rNode.css({
                display: 'block'
            });
            let rWidth = rNode.outerWidth();
            let rHeight = rNode.outerHeight();
            let left, top;
            switch (me['@{pos.placement}']) {
                case 'top':
                    left = offset.left - (rWidth - width) / 2;
                    top = offset.top - rHeight - 5;
                    break;
                case 'right':
                    left = offset.left + width + 5;
                    top = offset.top - (rHeight - height) / 2;
                    break;
                case 'bottom':
                    left = offset.left - (rWidth - width) / 2;
                    top = offset.top + height + 5;
                    break;
                case 'left':
                    left = offset.left - rWidth - 5;
                    top = offset.top - (rHeight - height) / 2;
                    break;
            }
            switch (me['@{pos.align}']) {
                case 'top':
                    top = offset.top;
                    break;
                case 'left':
                    left = offset.left;
                    break;
                case 'right':
                    left = offset.left - rWidth + width;
                    break;
                case 'bottom':
                    top = offset.top - rHeight + height;
                    break;
            }
            rNode.offset({
                left: left,
                top: top
            });
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            delete me['@{ui.show}'];
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
        }
    },
    '@{enter}<click>'() {
        let me = this;
        me['@{hide}']();
        me['@{owner.node}'].trigger('enter');
    },
    '@{hide}<click>'() {
        this['@{hide}']();
    }
});