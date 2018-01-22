/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
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
        me['__fx'] = $('#header').height() || 50;
        var inmain = $('#inmain');
        if (!inmain.length) {
            inmain = $(window);
            me['__fx'] = 0;
        }
        var watchInmainScroll = function () {
            me['__fy'](inmain);
        };
        me.on('destroy', function () {
            inmain.off('scroll', watchInmainScroll);
        });
        inmain.on('scroll', watchInmainScroll);
        me['__fz'] = inmain;
    },
    '__fC': function () {
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
        me['__fA'] = ghost;
        me['__i'] = owner;
        me['__fB'] = thead;
    },
    '__fG': function () {
        var me = this;
        var now = $.now();
        if (!me['__fD'] || me['__fD'] + 3000 < now) {
            me['__fD'] = now;
            var owner = me['__i'];
            var top1 = void 0, height = void 0;
            if (me['__fx']) {
                top1 = owner.offset().top + me['__fz'].scrollTop() - me['__fx'];
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
            return (me['__fE'] = {
                min: top1,
                max: top1 + height - me['__fF'] - tfh
            });
        }
        return me['__fE'];
    },
    render: function () {
        var me = this;
        me['__fC']();
        me['__fH']();
        setTimeout(me.wrapAsync(function () {
            me['__fy'](me['__fz']);
        }), 0);
    },
    '__fH': function () {
        var me = this;
        var thead = me['__fB'];
        var ghost = me['__fA'];
        var height = thead.height();
        if (height != me['__fF']) {
            thead.css({
                marginTop: -height
            });
            ghost.css('height', height);
            me['__fF'] = height;
        }
    },
    '__fy': function (node) {
        var me = this;
        var top = node.scrollTop();
        var info = me['__fG']();
        var pi = me['__fI'];
        if (top > info.min && top < info.max) {
            me['__fI'] = 's';
            me['__fB'].css({
                top: top - info.min,
                marginTop: 'auto'
            });
        }
        else if (pi != 'i') {
            me['__fI'] = 'i';
            me['__fB'].css({
                marginTop: -me['__fF'],
                position: 'absolute',
                top: 'auto'
            });
        }
    }
});

});