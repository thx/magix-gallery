/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popover/index',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-popover_index_",".__mx-popover_index_-popover {\n  border-radius: 4px;\n  padding: 0;\n  -webkit-box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n          box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  position: absolute;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: none;\n  max-width: 276px;\n  background-color: #fff;\n}\n.__mx-popover_index_-popover-content {\n  line-height: 22px;\n  padding: 9px 14px;\n}\n");
let Active;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-popover_index_-popover-content\"><%!$$.content%></div>","subs":[],"file":"mx-popover/index.html"},
    init(extra) {
        let me = this;
        me['@{pos.placement}'] = extra.placement || 'right';
        me['@{pos.align}'] = extra.align;
        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width | 0;
        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{relate.node}']) {
                me['@{relate.node}'].off('mouseenter mouseleave').remove();
            }
        });
    },
    render() {
        let me = this;
        me.endUpdate();
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.hover(() => {
            me['@{parepare}']();
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), 100);
        }, () => {
            clearTimeout(me['@{dealy.show.timer}']);
            me['@{hide}']();
        });
    },
    '@{parepare}'() {
        let me = this;
        if (!me['@{relate.node}']) {
            let id = 'popover_' + me.id;
            me['@{owner.node}'].after('<div class="__mx-popover_index_-popover" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me['@{content}']
            });
            me['@{relate.node}'] = $('#' + id);
            if (me['@{width}']) {
                me['@{relate.node}'].css({
                    'max-width': me['@{width}'],
                    width: me['@{width}']
                });
            }
            me['@{relate.node}'].hover(() => {
                clearTimeout(me['@{dealy.show.timer}']);
            }, () => {
                me['@{hide}']();
            });
        }
    },
    content(body) {
        let me = this;
        if (!body) {
            return me['@{content}'];
        }
        if (!me['@{relate.node}']) {
            me['@{content}'] = body;
        }
        else {
            me['@{content}'] = body;
            me.updater.digest({
                content: body
            });
        }
    },
    '@{show}'() {
        let me = this;
        if (Active && Active != me) {
            Active['@{immediatelyHide}']();
        }
        Active = me;
        clearTimeout(me['@{dealy.show.timer}']);
        let rNode = me['@{relate.node}'];
        let oNode = me['@{owner.node}'];
        let offset = oNode.offset();
        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        rNode.css({
            display: 'block'
        });
        let rWidth = rNode.outerWidth();
        let rHeight = rNode.outerHeight();
        let left, top;
        switch (me['@{pos.placement}']) {
            case 'top':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top - rHeight - 10;
                break;
            case 'right':
                left = offset.left + width + 10;
                top = offset.top - (rHeight - height) / 2;
                break;
            case 'bottom':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top + height + 10;
                break;
            case 'left':
                left = offset.left - rWidth - 10;
                top = offset.top - (rHeight - height) / 2;
                break;
        }
        switch (me['@{pos.align}']) {
            case 'top':
                top = offset.top;
                break;
            case 'left':
                left = offset.left;
                break;
            case 'right':
                left = offset.left - rWidth + width;
                break;
            case 'bottom':
                top = offset.top - rHeight + height;
                break;
        }
        rNode.offset({
            left: left,
            top: top
        });
    },
    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{relate.node}'].css({
                display: 'none'
            });
        }), 50);
    },
    '@{immediatelyHide}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        me['@{relate.node}'].css({
            display: 'none'
        });
    }
});

});