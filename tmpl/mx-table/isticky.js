/*
ver:1.3.5
*/
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    init() {
        let me = this;
        me['@{layout.header.height}'] = $('#header').height() || 50;
        let inmain = $('#inmain');
        if (!inmain.length) {
            inmain = $(window);
            me['@{layout.header.height}'] = 0;
        }
        let watchInmainScroll = () => {
            me['@{sync.pos}'](inmain);
        };
        me.on('destroy', () => {
            inmain.off('scroll', watchInmainScroll);
        });
        inmain.on('scroll', watchInmainScroll);
        me['@{layout.inmain}'] = inmain;
    },
    '@{sync.vars}'() {
        let me = this;
        let owner = $('#' + me.id);
        let thead = owner.find('thead');
        let ghostId = 'ph_' + me.id;
        let ghost = $('#' + ghostId);
        if (!ghost.length) {
            ghost = $('<caption />').insertBefore(thead).attr('id', ghostId);
        }
        thead.css({
            position: 'absolute',
            zIndex: 1
        });
        me['@{ghost.node}'] = ghost;
        me['@{owner.node}'] = owner;
        me['@{thead.node}'] = thead;
    },
    '@{get.pos.info}'() {
        let me = this;
        let now = $.now();
        if (!me['@{ctrl.last.info}'] || me['@{ctrl.last.info}'] + 3000 < now) {
            me['@{ctrl.last.info}'] = now;
            let owner = me['@{owner.node}'];
            let top1, height;
            if (me['@{layout.header.height}']) {
                top1 = owner.offset().top + me['@{layout.inmain}'].scrollTop() - me['@{layout.header.height}'];
            } else {
                top1 = owner.offset().top;
            }
            height = owner.height();
            let tfoot = owner.find('tfoot');
            let tfh = 0;
            if (tfoot.length) {
                tfh = tfoot.height();
            }
            return (me['@{temp.info}'] = {
                min: top1,
                max: top1 + height - me['@{thead.height}'] - tfh
            });
        }
        return me['@{temp.info}'];
    },
    render() {
        let me = this;
        me['@{sync.vars}']();
        me['@{sync.height}']();
        setTimeout(me.wrapAsync(() => {
            me['@{sync.pos}'](me['@{layout.inmain}']);
        }), 0);
    },
    '@{sync.height}'() {
        let me = this;
        let thead = me['@{thead.node}'];
        let ghost = me['@{ghost.node}'];
        let height = thead.height();
        if (height != me['@{thead.height}']) {
            thead.css({
                marginTop: -height
            });
            ghost.css('height', height);
            me['@{thead.height}'] = height;
        }
    },
    '@{sync.pos}'(node) {
        let me = this;
        let top = node.scrollTop();
        let info = me['@{get.pos.info}']();
        if (top > info.min && top < info.max) {
            me['@{thead.node}'].css({
                top: top - info.min,
                marginTop: 'auto'
            });
        } else {
            me['@{thead.node}'].css({
                marginTop: -me['@{thead.height}'],
                position: 'absolute',
                top: 'auto'
            });
        }
    }
});