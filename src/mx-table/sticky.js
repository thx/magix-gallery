/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sticky",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__fx'] = $('#header').height() || 50;
        var dialog = $('#' + me.id).parents('_cp');
        var inmain = $('#inmain');
        if (!dialog.length && !inmain.length) {
            inmain = $(window);
            me['__fx'] = 0;
        }
        var dialogScroll = dialog.parent();
        var watchDialogScroll = function () {
            me['__fy'](dialogScroll);
        };
        var watchInmainScroll = function () {
            me['__fy'](inmain);
        };
        me.on('destroy', function () {
            dialogScroll.off('scroll', watchDialogScroll);
            inmain.off('scroll', watchInmainScroll);
        });
        dialogScroll.on('scroll', watchDialogScroll);
        inmain.on('scroll', watchInmainScroll);
        me['__fW'] = dialogScroll;
        me['__fX'] = dialog;
        me['__fz'] = inmain;
        me['__fY'] = extra.zIndex;
    },
    '__fC': function () {
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
                ghost = $('<caption />').insertBefore(thead).attr('id', ghostId);
            }
            thead.css({
                marginLeft: -1,
                border: '1px solid ' + owner.css('border-top-color'),
                position: 'absolute',
                background: '#fff',
                zIndex: me['__fY'] || 1
            });
        }
        me['__fZ'] = 'abs';
        me['__fA'] = ghost;
        me['__i'] = owner;
        me['__fB'] = thead;
        me['__g_'] = body;
        me['__ga'] = bodyTds;
        me['__gb'] = fieldTds;
    },
    '__fG': function () {
        var me = this;
        var now = $.now();
        if (!me['__fD'] || me['__fD'] + 3000 < now) {
            //console.log('cal');
            me['__fD'] = now;
            var owner = me['__i'];
            var top1 = void 0, height = void 0;
            if (me['__fX'].length) {
                top1 = owner.position().top + parseInt(me['__fX'].css('top'), 10);
            }
            else {
                if (me['__fx']) {
                    top1 = owner.offset().top + me['__fz'].scrollTop() - me['__fx'];
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
            console.log(top1, height, tfh, me['__fF']);
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
        me['__gc']();
        me['__fH']();
        me['__fy'](me['__fW']);
    },
    '__fH': function () {
        var me = this;
        var thead = me['__fB'];
        var ghost = me['__fA'];
        var height = thead.height();
        if (height != me['__fF']) {
            if (me['__fZ'] == 'abs') {
                thead.css({
                    marginTop: -height
                });
            }
            ghost.css('height', height);
            me['__fF'] = height;
        }
    },
    '__gc': function () {
        var me = this;
        me['__fB'].width(me['__g_'].width() - 1);
        var bodyTds = me['__ga'];
        var fieldTds = me['__gb'];
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
    '__fy': function (node) {
        var me = this;
        if (!node)
            node = me['__fz'];
        var top = node.scrollTop();
        var info = me['__fG']();
        if (top > info.min && top < info.max) {
            if (me['__fZ'] != 'fixed') {
                var ds = me['__fW'];
                me['__fZ'] = 'fixed';
                me['__fB'].css({
                    position: 'fixed',
                    top: ds && ds.length ? 0 : me['__fx'],
                    marginTop: 'auto'
                });
            }
        }
        else {
            if (me['__fZ'] != 'abs') {
                me['__fZ'] = 'abs';
                me['__fB'].css({
                    marginTop: -me['__fF'],
                    position: 'absolute',
                    top: 'auto'
                });
            }
        }
    },
    '$win<resize>': function () {
        this['__gc']();
        this['__fH']();
    },
    '$doc<htmlchanged,navslidend>': function (e) {
        var me = this;
        if (Magix.inside(e.node, me.id) ||
            e.vId == me.owner.pId ||
            e.type == 'navslidend') {
            clearTimeout(me['__fV']);
            me['__fV'] = setTimeout(function () {
                me['__fC']();
                me['__gc']();
                me['__fH']();
                delete me['__fD']; //如果界面重新渲染，我们立即获取相应的位置信息，不走缓存
                me['__fy'](me['__fW']);
            }, 0);
        }
    }
});

});