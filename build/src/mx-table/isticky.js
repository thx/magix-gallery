/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/isticky",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var inmain;
        if (extra.stickyWrapper) {
            inmain = $('#' + extra.stickyWrapper);
            me['@{layout.header.height}'] = $('#app_header').height() || 50;
        }
        else {
            inmain = $(window);
            me['@{layout.header.height}'] = 0;
        }
        var watchInmainScroll = function () {
            me['@{sync.pos}'](inmain);
        };
        me.on('destroy', function () {
            inmain.off('scroll', watchInmainScroll);
        });
        inmain.on('scroll', watchInmainScroll);
        me['@{layout.inmain}'] = inmain;
        me['@{owner.node}'] = $('#' + me.id);
    },
    render: function () {
        var me = this;
        me['@{sync.vars}']();
        me['@{sync.height}']();
        me['@{sync.pos}'](me['@{layout.inmain}']);
    },
    '@{sync.height}': function () {
        var me = this;
        var thead = me['@{thead.node}'];
        var ghost = me['@{ghost.node}'];
        var height = thead.height();
        if (height != me['@{thead.height}']) {
            ghost.css({
                height: height,
                display: 'none'
            });
            me['@{thead.height}'] = height;
        }
    },
    '@{sync.vars}': function () {
        var me = this;
        var thead = $('#' + me.id).find('thead');
        var ghostId = 'ph_' + me.id;
        var ghost = $('#' + ghostId);
        if (!ghost.length) {
            ghost = $('<caption />').insertBefore(thead).attr('id', ghostId);
        }
        me['@{ghost.node}'] = ghost;
        me['@{thead.node}'] = thead;
    },
    '@{get.pos.info}': function () {
        var me = this;
        var now = $.now();
        if (!me['@{ctrl.last.info}'] || me['@{ctrl.last.info}'] + 3000 < now) {
            me['@{ctrl.last.info}'] = now;
            var owner = me['@{owner.node}'];
            var top1 = void 0, height = void 0;
            if (me['@{layout.header.height}']) {
                top1 = owner.offset().top + me['@{layout.inmain}'].scrollTop() - me['@{layout.header.height}'];
            }
            else {
                top1 = owner.offset().top;
            }
            height = owner.height();
            var tfoot = owner.find('tfoot');
            var tfh = 0;
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
    '@{sync.pos}': function (node) {
        var me = this;
        var top = node.scrollTop();
        var info = me['@{get.pos.info}']();
        var pi = me['@{pos.info}'];
        if (top > info.min && top < info.max) {
            me['@{pos.info}'] = 's';
            me['@{ghost.node}'].css({
                display: 'block'
            });
            me['@{thead.node}'].css({
                position: 'absolute',
                top: top - info.min
            });
        }
        else if (pi != 'i') {
            me['@{pos.info}'] = 'i';
            me['@{ghost.node}'].css({
                display: 'none'
            });
            me['@{thead.node}'].css({
                position: 'initial',
                top: 'auto'
            });
        }
    }
});

});