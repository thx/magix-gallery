/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/isticky",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

"use strict";
exports.__esModule = true;
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function () {
        var me = this;
        me['@{layout.header.height}'] = $('#header').height() || 50;
        var inmain = $('#inmain');
        if (!inmain.length) {
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
    },
    '@{sync.vars}': function () {
        var me = this;
        var owner = $('#' + me.id);
        var thead = owner.find('thead');
        var ghostId = 'ph_' + me.id;
        var ghost = $('#' + ghostId);
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
    render: function () {
        var me = this;
        me['@{sync.vars}']();
        me['@{sync.height}']();
        setTimeout(me.wrapAsync(function () {
            me['@{sync.pos}'](me['@{layout.inmain}']);
        }), 0);
    },
    '@{sync.height}': function () {
        var me = this;
        var thead = me['@{thead.node}'];
        var ghost = me['@{ghost.node}'];
        var height = thead.height();
        if (height != me['@{thead.height}']) {
            thead.css({
                marginTop: -height
            });
            ghost.css('height', height);
            me['@{thead.height}'] = height;
        }
    },
    '@{sync.pos}': function (node) {
        var me = this;
        var top = node.scrollTop();
        var info = me['@{get.pos.info}']();
        var pi = me['@{pos.info}'];
        if (top > info.min && top < info.max) {
            me['@{pos.info}'] = 's';
            me['@{thead.node}'].css({
                top: top - info.min,
                marginTop: 'auto'
            });
        }
        else if (pi != 'i') {
            me['@{pos.info}'] = 'i';
            me['@{thead.node}'].css({
                marginTop: -me['@{thead.height}'],
                position: 'absolute',
                top: 'auto'
            });
        }
    }
});

});