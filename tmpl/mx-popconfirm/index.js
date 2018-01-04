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
    tmpl: '@index.html:updateby[]',
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
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'popcfm_' + me.id);
    },
    render() {
        let me = this;
        me.endUpdate();
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.on('click', e => {
            e.preventDefault();
            me['@{prepare}']();
            me['@{show}']();
        });
    },
    '@{prepare}'() {
        let me = this;
        if (!me['@{relate.node}']) {
            let id = 'popcfm_' + me.id;
            me['@{owner.node}'].after('<div class="@index.less:popover" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me['@{content}'],
                enterText: me['@{text.enter}'],
                cancelText: me['@{text.cancel}']
            });
            me['@{relate.node}'] = $('#' + id);
        }
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
            me['@{relate.node}'].css({
                display: 'none'
            });
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