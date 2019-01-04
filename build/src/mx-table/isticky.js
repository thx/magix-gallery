/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
            me['__dZ'] = $('#app_header').height() || 50;
        }
        else {
            inmain = $(window);
            me['__dZ'] = 0;
        }
        var watchInmainScroll = function () {
            me['__e_'](inmain);
        };
        me.on('destroy', function () {
            inmain.off('scroll', watchInmainScroll);
        });
        inmain.on('scroll', watchInmainScroll);
        me['__ea'] = inmain;
        me['__j'] = $('#' + me.id);
    },
    render: function () {
        var me = this;
        me['__eb']();
        me['__ec']();
        me['__e_'](me['__ea']);
    },
    '__ec': function () {
        var me = this;
        var thead = me['__ed'];
        var ghost = me['__ee'];
        var height = thead.height();
        if (height != me['__dV']) {
            ghost.css({
                height: height,
                display: 'none'
            });
            me['__dV'] = height;
        }
    },
    '__eb': function () {
        var me = this;
        var thead = $('#' + me.id).find('thead');
        var ghostId = 'ph_' + me.id;
        var ghost = $('#' + ghostId);
        if (!ghost.length) {
            ghost = $('<caption />').insertBefore(thead).attr('id', ghostId);
        }
        me['__ee'] = ghost;
        me['__ed'] = thead;
    },
    '__eh': function () {
        var me = this;
        var now = $.now();
        if (!me['__ef'] || me['__ef'] + 3000 < now) {
            me['__ef'] = now;
            var owner = me['__j'];
            var top1 = void 0, height = void 0;
            if (me['__dZ']) {
                top1 = owner.offset().top + me['__ea'].scrollTop() - me['__dZ'];
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
            return (me['__eg'] = {
                min: top1,
                max: top1 + height - me['__dV'] - tfh
            });
        }
        return me['__eg'];
    },
    '__e_': function (node) {
        var me = this;
        var top = node.scrollTop();
        var info = me['__eh']();
        var pi = me['__ei'];
        if (top > info.min && top < info.max) {
            me['__ei'] = 's';
            me['__ee'].css({
                display: 'block'
            });
            me['__ed'].css({
                position: 'absolute',
                top: top - info.min
            });
        }
        else if (pi != 'i') {
            me['__ei'] = 'i';
            me['__ee'].css({
                display: 'none'
            });
            me['__ed'].css({
                position: 'initial',
                top: 'auto'
            });
        }
    }
});

});