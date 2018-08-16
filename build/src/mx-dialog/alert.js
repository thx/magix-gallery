/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/alert",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dialog_alert_","._zs_gallery_mx-dialog_alert_-alert-header {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, title = $$.title, content = $$.content, enterText = $$.enterText; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery*:_" class="dialog-body"><div mxa="_zs_gallery*:a" class="_zs_gallery_mx-dialog_alert_-alert-header">' + ($expr = '<%=title%>', $e(title)) + '</div><div mxa="_zs_gallery*:b" class="word-break">' + ($expr = '<%!content%>', $n(content)) + '</div></div><div mxa="_zs_gallery*:c" class="dialog-footer"><a mxa="_zs_gallery*:d" href="javascript:;" class="btn btn-brand min-width-60" mx-click="' + $viewId + '@{enter}();">' + ($expr = '<%=enterText%>', $e(enterText)) + '</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/alert.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.content}'] = extra.content;
        me['@{string.title}'] = extra.title || I18n['dialog.tip'];
        me['@{string.enter}'] = I18n['dialog.submit'];
        me['@{fn.enter.callback}'] = extra.enterCallback;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['@{string.content}'],
            title: me['@{string.title}'],
            enterText: me['@{string.enter}']
        });
    },
    '@{enter}<click>': function () {
        var me = this;
        me['@{dialog}'].close();
        if (me['@{fn.enter.callback}']) {
            Magix.toTry(me['@{fn.enter.callback}']);
        }
    }
});

});