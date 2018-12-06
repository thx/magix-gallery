/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-popconfirm_index_","/* @dependent: ./index.less */\n.__mx-popconfirm_index_-popover {\n  border-radius: 4px;\n  padding: 10px;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  max-width: 276px;\n  min-width: 200px;\n  background-color: #fff;\n  position: relative;\n  z-index: 10;\n}\n.__mx-popconfirm_index_-content {\n  line-height: 22px;\n  padding: 9px 14px;\n}\n.__mx-popconfirm_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin-left: 10px;\n  padding-top: 10px;\n  width: 92%;\n  text-align: right;\n}\n");
var Monitor = require("../mx-monitor/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', content = $$.content, enterText = $$.enterText, cancelText = $$.cancelText; var $expr, $art, $line; try {
    $p += '<div mxa="_}:_" class="__mx-popconfirm_index_-popover"><div mxa="_}:a" class="__mx-popconfirm_index_-content">' + ($expr = '<%!content%>', $n(content)) + '</div><div mxa="_}:b" class="__mx-popconfirm_index_-footer"><button mxa="_}:c" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + '@{enter}()">' + ($expr = '<%=enterText%>', $e(enterText)) + '</button><button mxa="_}:d" type="button" class="__mx-style_index_-btn __mx-style_index_-ml5" mx-click="' + $viewId + '@{hide}()">' + ($expr = '<%=cancelText%>', $e(cancelText)) + '</button></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{pos.placement}'] = extra.placement || 'left';
        me['@{pos.align}'] = extra.align;
        me['@{content}'] = extra.content || '确认执行该操作？';
        me['@{text.enter}'] = extra.enterText || '确定';
        me['@{text.cancel}'] = extra.cancelText || '取消';
        Monitor['@{setup}']();
        me.on('destroy', function () {
            me['@{owner.node}'].off('click');
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        me['@{owner.node}'] = oNode = oNode.prev();
        me['@{owner.node}'].on('click', function (e) {
            e.preventDefault();
            me['@{show}']();
        });
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['@{content}'],
            enterText: me['@{text.enter}'],
            cancelText: me['@{text.cancel}']
        });
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            var rNode = me['@{relate.node}'];
            var oNode = me['@{owner.node}'];
            var offset = oNode.offset();
            var width = oNode.outerWidth();
            var height = oNode.outerHeight();
            rNode.css({
                display: 'block'
            });
            var rWidth = rNode.outerWidth();
            var rHeight = rNode.outerHeight();
            var left = void 0, top = void 0;
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
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            delete me['@{ui.show}'];
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
        }
    },
    '@{enter}<click>': function () {
        var me = this;
        me['@{hide}']();
        me['@{owner.node}'].trigger('enter');
    },
    '@{hide}<click>': function () {
        this['@{hide}']();
    }
});

});