/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popconfirm/index',["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-popconfirm_index_",".__mx-popconfirm_index_-popover {\n  border-radius: 4px;\n  padding: 10px;\n  -webkit-box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n          box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  position: absolute;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: none;\n  max-width: 276px;\n  min-width: 200px;\n  background-color: #fff;\n}\n.__mx-popconfirm_index_-content {\n  line-height: 22px;\n  padding: 9px 14px;\n}\n.__mx-popconfirm_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin-left: 10px;\n  padding-top: 10px;\n  width: 92%;\n  text-align: right;\n}\n");
let Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-popconfirm_index_-content\"><%!$$.content%></div><div class=\"__mx-popconfirm_index_-footer\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001e@{enter}()\"><%=$$.enterText%></button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\" mx-click=\"\u001f\u001e@{hide}()\"><%=$$.cancelText%></button></div>","subs":[],"file":"mx-popconfirm/index.html"},
    init(extra) {
        let me = this;
        me['@{pos.placement}'] = extra.placement || 'left';
        me['@{pos.align}'] = extra.align;
        me['@{content}'] = extra.content || '确认执行该操作？';
        me['@{text.enter}'] = extra.enterText || '确定';
        me['@{text.cancel}'] = extra.cancelText || '取消';
        Monitor['@{setup}']();
        me.on('destroy', () => {
            me['@{owner.node}'].off('click');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'popcfm_' + me.id);
    },
    render() {
        let me = this;
        me.endUpdate();
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.on('click', e => {
            e.preventDefault();
            me['@{prepare}']();
            me['@{show}']();
        });
    },
    '@{prepare}'() {
        let me = this;
        if (!me['@{relate.node}']) {
            let id = 'popcfm_' + me.id;
            me['@{owner.node}'].after('<div class="__mx-popconfirm_index_-popover" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me['@{content}'],
                enterText: me['@{text.enter}'],
                cancelText: me['@{text.cancel}']
            });
            me['@{relate.node}'] = $('#' + id);
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
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
                    top = offset.top - rHeight - 5;
                    break;
                case 'right':
                    left = offset.left + width + 5;
                    top = offset.top - (rHeight - height) / 2;
                    break;
                case 'bottom':
                    left = offset.left - (rWidth - width) / 2;
                    top = offset.top + height + 5;
                    break;
                case 'left':
                    left = offset.left - rWidth - 5;
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
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            delete me['@{ui.show}'];
            Monitor['@{remove}'](me);
            me['@{relate.node}'].css({
                display: 'none'
            });
        }
    },
    '@{enter}<click>'() {
        let me = this;
        me['@{hide}']();
        me['@{owner.node}'].trigger('enter');
    },
    '@{hide}<click>'() {
        this['@{hide}']();
    }
});

});