/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/confirm",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dialog_alert_","._zs_gallery_mx-dialog_alert_-alert-header {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', title = $$.title, content = $$.content, enterText = $$.enterText, cancelText = $$.cancelText; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryab:_" class="dialog-body"><div mxa="_zs_galleryab:a" class="_zs_gallery_mx-dialog_alert_-alert-header">' + ($expr = '<%=title%>', $e(title)) + '</div><div mxa="_zs_galleryab:b" class="word-break">' + ($expr = '<%!content%>', $n(content)) + '</div></div><div mxa="_zs_galleryab:c" class="dialog-footer"><a mxa="_zs_galleryab:d" href="javascript:;" class="btn btn-small btn-brand min-width-50 mr10" mx-click="' + $viewId + '@{enter}();">' + ($expr = '<%=enterText%>', $e(enterText)) + '</a><a mxa="_zs_galleryab:e" href="javascript:;" class="btn btn-small min-width-50" mx-click="' + $viewId + '@{cancel}()">' + ($expr = '<%=cancelText%>', $e(cancelText)) + '</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/confirm.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{dialog}'] = extra.dialog;
        me['@{string.content}'] = extra.content;
        me['@{string.title}'] = extra.title || I18n['dialog.tip'];
        me['@{string.enter}'] = extra.enterText || I18n['dialog.submit'];
        me['@{string.cancel}'] = extra.cancelText || I18n['dialog.cancel'];
        me['@{fn.enter.callback}'] = extra.enterCallback;
        me['@{fn.calcel.callback}'] = extra.cancelCallback;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['@{string.content}'],
            title: me['@{string.title}'],
            enterText: me['@{string.enter}'],
            cancelText: me['@{string.cancel}']
        });
    },
    '@{enter}<click>': function () {
        var me = this;
        me['@{dialog}'].close();
        if (me['@{fn.enter.callback}']) {
            Magix.toTry(me['@{fn.enter.callback}']);
        }
    },
    '@{cancel}<click>': function () {
        var me = this;
        me['@{dialog}'].close();
        if (me['@{fn.calcel.callback}']) {
            Magix.toTry(me['@{fn.calcel.callback}']);
        }
    }
});

});