/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sticky",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['@{layout.header.height}'] = $('#header').height() || 50;
        var dialog = $('#' + me.id).parents('__mx-dialog_index_-scroll-cnt');
        var inmain = $('#inmain');
        if (!dialog.length && !inmain.length) { //不存在
            inmain = $(window);
            me['@{layout.header.height}'] = 0;
        }
        var dialogScroll = dialog.parent();
        var watchDialogScroll = function () {
            me['@{sync.pos}'](dialogScroll);
        };
        var watchInmainScroll = function () {
            me['@{sync.pos}'](inmain);
        };
        me.on('destroy', function () {
            dialogScroll.off('scroll', watchDialogScroll);
            inmain.off('scroll', watchInmainScroll);
        });
        dialogScroll.on('scroll', watchDialogScroll);
        inmain.on('scroll', watchInmainScroll);
        me['@{dialog.scroll.container}'] = dialogScroll;
        me['@{dialog.node}'] = dialog;
        me['@{layout.inmain}'] = inmain;
        me['@{ui.zIndex}'] = extra.zIndex;
    },
    '@{sync.vars}': function () {
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
                zIndex: me['@{ui.zIndex}'] || 1
            });
        }
        me['@{ui.pos}'] = 'abs';
        me['@{ghost.node}'] = ghost;
        me['@{owner.node}'] = owner;
        me['@{thead.node}'] = thead;
        me['@{tbody.node}'] = body;
        me['@{tbody.node.tds}'] = bodyTds;
        me['@{thead.node.tds}'] = fieldTds;
    },
    '@{get.pos.info}': function () {
        var me = this;
        var now = $.now();
        if (!me['@{ctrl.last.info}'] || me['@{ctrl.last.info}'] + 3000 < now) {
            //console.log('cal');
            me['@{ctrl.last.info}'] = now;
            var owner = me['@{owner.node}'];
            var top1 = void 0, height = void 0;
            if (me['@{dialog.node}'].length) {
                top1 = owner.position().top + parseInt(me['@{dialog.node}'].css('top'), 10);
            }
            else {
                if (me['@{layout.header.height}']) {
                    top1 = owner.offset().top + me['@{layout.inmain}'].scrollTop() - me['@{layout.header.height}'];
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
            console.log(top1, height, tfh, me['@{thead.height}']);
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
        me['@{sync.width}']();
        me['@{sync.height}']();
        me['@{sync.pos}'](me['@{dialog.scroll.container}']);
    },
    '@{sync.height}': function () {
        var me = this;
        var thead = me['@{thead.node}'];
        var ghost = me['@{ghost.node}'];
        var height = thead.height();
        if (height != me['@{thead.height}']) {
            if (me['@{ui.pos}'] == 'abs') {
                thead.css({
                    marginTop: -height
                });
            }
            ghost.css('height', height);
            me['@{thead.height}'] = height;
        }
    },
    '@{sync.width}': function () {
        var me = this;
        me['@{thead.node}'].width(me['@{tbody.node}'].width() - 1);
        var bodyTds = me['@{tbody.node.tds}'];
        var fieldTds = me['@{thead.node.tds}'];
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
    '@{sync.pos}': function (node) {
        var me = this;
        if (!node)
            node = me['@{layout.inmain}'];
        var top = node.scrollTop();
        var info = me['@{get.pos.info}']();
        if (top > info.min && top < info.max) {
            if (me['@{ui.pos}'] != 'fixed') {
                var ds = me['@{dialog.scroll.container}'];
                me['@{ui.pos}'] = 'fixed';
                me['@{thead.node}'].css({
                    position: 'fixed',
                    top: ds && ds.length ? 0 : me['@{layout.header.height}'],
                    marginTop: 'auto'
                });
            }
        }
        else {
            if (me['@{ui.pos}'] != 'abs') {
                me['@{ui.pos}'] = 'abs';
                me['@{thead.node}'].css({
                    marginTop: -me['@{thead.height}'],
                    position: 'absolute',
                    top: 'auto'
                });
            }
        }
    },
    '$win<resize>': function () {
        this['@{sync.width}']();
        this['@{sync.height}']();
    },
    '$doc<htmlchanged,navslidend>': function (e) {
        var me = this;
        if (Magix.inside(e.node, me.id) ||
            e.vId == me.owner.pId ||
            e.type == 'navslidend') {
            clearTimeout(me['@{ctrl.timer}']);
            me['@{ctrl.timer}'] = setTimeout(function () {
                me['@{sync.vars}']();
                me['@{sync.width}']();
                me['@{sync.height}']();
                delete me['@{ctrl.last.info}']; //如果界面重新渲染，我们立即获取相应的位置信息，不走缓存
                me['@{sync.pos}'](me['@{dialog.scroll.container}']);
            }, 0);
        }
    }
});

});