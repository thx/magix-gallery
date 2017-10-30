/*
ver:1.3.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{layout.header.height}'] = 50;
        let dialog = $('#' + me.id).parents('@../mx-dialog/index.less:scroll-cnt');
        let inmain = $('#inmain');
        if (!dialog.length && !inmain.length) {//不存在
            inmain = $(window);
            me['@{layout.header.height}'] = 0;
        }
        let dialogScroll = dialog.parent();

        let watchDialogScroll = () => {
            me['@{sync.pos}'](dialogScroll);
        };
        let watchInmainScroll = () => {
            me['@{sync.pos}'](inmain);
        };
        me.on('destroy', () => {
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
    '@{sync.vars}'() {
        let me = this;
        let owner = $('#' + me.id).find('table');
        let thead = owner.find('thead');
        let field = thead.find('tr').last();
        let body = owner.find('tbody>tr').eq(0);
        let ghostId = 'ph_' + me.id;
        let ghost = $('#' + ghostId);
        let fieldTds = field.find('th');
        let bodyTds = body.find('td');
        if (bodyTds.length && bodyTds.length == fieldTds.length) {
            if (!ghost.length) {
                ghost = $('<caption />').css({
                    border: 'solid 1px ' + owner.css('border-color')
                }).insertBefore(thead).attr('id', ghostId);
            }
            thead.css({
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
    '@{get.pos.info}'() {
        let me = this;
        let now = $.now();
        if (!me['@{ctrl.last.info}'] || me['@{ctrl.last.info}'] + 3000 < now) {
            //console.log('cal');
            me['@{ctrl.last.info}'] = now;
            let owner = me['@{owner.node}'];
            let top1, height;
            if (me['@{dialog.node}'].length) {
                top1 = owner.position().top + parseInt(me['@{dialog.node}'].css('top'), 10);
            } else {
                if (me['@{layout.header.height}']) {
                    top1 = owner.offset().top + me['@{layout.inmain}'].scrollTop() - me['@{layout.header.height}'];
                } else {
                    top1 = owner.offset().top;
                }
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
        me['@{sync.width}']();
        me['@{sync.height}']();
        me['@{sync.pos}'](me['@{dialog.scroll.container}']);
    },
    '@{sync.height}'() {
        let me = this;
        let thead = me['@{thead.node}'];
        let ghost = me['@{ghost.node}'];
        let height = thead.height();
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
    '@{sync.width}'() {
        let me = this;
        me['@{thead.node}'].width(me['@{tbody.node}'].width() - 1);
        let bodyTds = me['@{tbody.node.tds}'];
        let fieldTds = me['@{thead.node.tds}'];
        let td;
        if (bodyTds.length > 0 && bodyTds.length == fieldTds.length) {
            bodyTds.each((i, item) => {
                item = $(item);
                td = $(fieldTds[i]);
                let t = td.attr('width');
                if (t) {
                    td.removeAttr('width');
                    item.attr('width', t);
                } else {
                    t = td.attr('style');
                    if (t) {
                        td.removeAttr('style');
                        item.attr('style', t);
                    }
                }
            });
            bodyTds.each((i, item) => {
                item = $(item);
                td = $(fieldTds[i]);
                let d = td.children('div');
                if (!d.length) {
                    td.wrapInner('<div/>');
                }
                td.children('div').width(item.width());
            });
        }
    },
    '@{sync.pos}'(node) {
        let me = this;
        if (!node) node = me['@{layout.inmain}'];
        let top = node.scrollTop();
        let info = me['@{get.pos.info}']();
        if (top > info.min && top < info.max) {
            if (me['@{ui.pos}'] != 'fixed') {
                let ds = me['@{dialog.scroll.container}'];
                me['@{ui.pos}'] = 'fixed';
                me['@{thead.node}'].css({
                    position: 'fixed',
                    top: ds && ds.length ? 0 : me['@{layout.header.height}'],
                    marginTop: 'auto'
                });
            }
        } else {
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
    '$win<resize>'() {
        this['@{sync.width}']();
        this['@{sync.height}']();
    },
    '$doc<htmlchanged,navslidend>'(e) {
        let me = this;
        if (Magix.inside(e.node, me.id) ||
            e.vId == me.owner.pId ||
            e.type == 'navslidend') {
            clearTimeout(me['@{ctrl.timer}']);
            me['@{ctrl.timer}'] = setTimeout(() => {
                me['@{sync.vars}']();
                me['@{sync.width}']();
                me['@{sync.height}']();
                delete me['@{ctrl.last.info}']; //如果界面重新渲染，我们立即获取相应的位置信息，不走缓存
                me['@{sync.pos}'](me['@{dialog.scroll.container}']);
            }, 0);
        }
    }
});