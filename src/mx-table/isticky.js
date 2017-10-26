/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-table/isticky',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
var Magix = require('magix');
var $ = require('$');
var WidthReg = /width\s*:\s*(\d+)px/;
module.exports = Magix.View.extend({
    init: function () {
        var me = this;
        me['_e_'] = 50;
        var inmain = $('#inmain');
        if (!inmain.length) {
            inmain = $(window);
            me['_e_'] = 0;
        }
        var watchInmainScroll = function () {
            me['_ea'](inmain);
        };
        me.on('destroy', function () {
            inmain.off('scroll', watchInmainScroll);
        });
        inmain.on('scroll', watchInmainScroll);
        me['_eb'] = inmain;
    },
    '_ee': function () {
        var me = this;
        var owner = $('#' + me.id);
        var thead = owner.find('thead');
        var body = owner.find('tbody>tr').eq(0);
        var ghostId = 'ph_' + me.id;
        var ghost = $('#' + ghostId);
        var bodyTds = body.find('td');
        if (bodyTds.length) {
            if (!ghost.length) {
                ghost = $('<caption />').insertBefore(thead).attr('id', ghostId);
            }
            thead.css({
                position: 'absolute',
                zIndex: 1
            });
        }
        me['_ec'] = ghost;
        me['_h'] = owner;
        me['_ed'] = thead;
    },
    '_ei': function () {
        var me = this;
        var now = $.now();
        if (!me['_ef'] || me['_ef'] + 3000 < now) {
            //console.log('cal');
            me['_ef'] = now;
            var owner = me['_h'];
            var top1 = void 0, height = void 0;
            if (me['_e_']) {
                top1 = owner.offset().top + me['_eb'].scrollTop() - me['_e_'];
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
            return (me['_eg'] = {
                min: top1,
                max: top1 + height - me['_eh'] - tfh
            });
        }
        return me['_eg'];
    },
    render: function () {
        var me = this;
        me['_ee']();
        me['_ej']();
        setTimeout(me.wrapAsync(function () {
            me['_ea'](me['_eb']);
        }), 0);
    },
    '_ej': function () {
        var me = this;
        var thead = me['_ed'];
        var ghost = me['_ec'];
        var height = thead.height();
        if (height != me['_eh']) {
            thead.css({
                marginTop: -height
            });
            ghost.css('height', height);
            me['_eh'] = height;
        }
    },
    '_ea': function (node) {
        var me = this;
        var top = node.scrollTop();
        var info = me['_ei']();
        if (top > info.min && top < info.max) {
            me['_ed'].css({
                top: top - info.min,
                marginTop: 'auto'
            });
        }
        else {
            me['_ed'].css({
                marginTop: -me['_eh'],
                position: 'absolute',
                top: 'auto'
            });
        }
    }
});

});