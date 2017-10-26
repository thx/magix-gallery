/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-table/sticky',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['_e_'] = 50;
        var dialog = $('#' + me.id).parents('bP');
        var inmain = $('#inmain');
        if (!dialog.length && !inmain.length) {
            inmain = $(window);
            me['_e_'] = 0;
        }
        var dialogScroll = dialog.parent();
        var watchDialogScroll = function () {
            me['_ea'](dialogScroll);
        };
        var watchInmainScroll = function () {
            me['_ea'](inmain);
        };
        me.on('destroy', function () {
            dialogScroll.off('scroll', watchDialogScroll);
            inmain.off('scroll', watchInmainScroll);
        });
        dialogScroll.on('scroll', watchDialogScroll);
        inmain.on('scroll', watchInmainScroll);
        me['_ex'] = dialogScroll;
        me['_ey'] = dialog;
        me['_eb'] = inmain;
        me['_ez'] = extra.zIndex;
    },
    '_ee': function () {
        var me = this;
        var owner = $('#' + me.id).find('table');
        var thead = owner.find('thead');
        var field = thead.find('tr').last();
        var body = owner.find('tbody>tr').eq(0);
        var ghostId = 'ph_' + me.id;
        var ghost = $('#' + ghostId);
        var fieldTds = field.find('th');
        var bodyTds = body.find('td');
        if (bodyTds.length && bodyTds.length == fieldTds.length) {
            if (!ghost.length) {
                ghost = $('<caption />').css({
                    border: 'solid 1px ' + owner.css('border-color')
                }).insertBefore(thead).attr('id', ghostId);
            }
            thead.css({
                position: 'absolute',
                background: '#fff',
                zIndex: me['_ez'] || 1
            });
        }
        me['_eA'] = 'abs';
        me['_ec'] = ghost;
        me['_h'] = owner;
        me['_ed'] = thead;
        me['_eB'] = body;
        me['_eC'] = bodyTds;
        me['_eD'] = fieldTds;
    },
    '_ei': function () {
        var me = this;
        var now = $.now();
        if (!me['_ef'] || me['_ef'] + 3000 < now) {
            //console.log('cal');
            me['_ef'] = now;
            var owner = me['_h'];
            var top1 = void 0, height = void 0;
            if (me['_ey'].length) {
                top1 = owner.position().top + parseInt(me['_ey'].css('top'), 10);
            }
            else {
                if (me['_e_']) {
                    top1 = owner.offset().top + me['_eb'].scrollTop() - me['_e_'];
                }
                else {
                    top1 = owner.offset().top;
                }
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
        me['_eE']();
        me['_ej']();
        me['_ea'](me['_ex']);
    },
    '_ej': function () {
        var me = this;
        var thead = me['_ed'];
        var ghost = me['_ec'];
        var height = thead.height();
        if (height != me['_eh']) {
            if (me['_eA'] == 'abs') {
                thead.css({
                    marginTop: -height
                });
            }
            ghost.css('height', height);
            me['_eh'] = height;
        }
    },
    '_eE': function () {
        var me = this;
        me['_ed'].width(me['_eB'].width() - 1);
        var bodyTds = me['_eC'];
        var fieldTds = me['_eD'];
        var td;
        if (bodyTds.length > 0 && bodyTds.length == fieldTds.length) {
            bodyTds.each(function (i, item) {
                item = $(item);
                td = $(fieldTds[i]);
                var t = td.attr('width');
                if (t) {
                    td.removeAttr('width');
                    item.attr('width', t);
                }
                else {
                    t = td.attr('style');
                    if (t) {
                        td.removeAttr('style');
                        item.attr('style', t);
                    }
                }
            });
            bodyTds.each(function (i, item) {
                item = $(item);
                td = $(fieldTds[i]);
                var d = td.children('div');
                if (!d.length) {
                    td.wrapInner('<div/>');
                }
                td.children('div').width(item.width());
            });
        }
    },
    '_ea': function (node) {
        var me = this;
        if (!node)
            node = me['_eb'];
        var top = node.scrollTop();
        var info = me['_ei']();
        if (top > info.min && top < info.max) {
            if (me['_eA'] != 'fixed') {
                var ds = me['_ex'];
                me['_eA'] = 'fixed';
                me['_ed'].css({
                    position: 'fixed',
                    top: ds && ds.length ? 0 : me['_e_'],
                    marginTop: 'auto'
                });
            }
        }
        else {
            if (me['_eA'] != 'abs') {
                me['_eA'] = 'abs';
                me['_ed'].css({
                    marginTop: -me['_eh'],
                    position: 'absolute',
                    top: 'auto'
                });
            }
        }
    },
    '$win<resize>': function () {
        this['_eE']();
        this['_ej']();
    },
    '$doc<htmlchanged,navslidend>': function (e) {
        var me = this;
        if (Magix.inside(e.node, me.id) ||
            e.vId == me.owner.pId ||
            e.type == 'navslidend') {
            clearTimeout(me['_ew']);
            me['_ew'] = setTimeout(function () {
                me['_ee']();
                me['_eE']();
                me['_ej']();
                delete me['_ef']; //如果界面重新渲染，我们立即获取相应的位置信息，不走缓存
                me['_ea'](me['_ex']);
            }, 0);
        }
    }
});

});