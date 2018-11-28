/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/alert",["magix","../mx-medusa/util"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', title = $$.title, content = $$.content, hasBtns = $$.hasBtns, enterText = $$.enterText; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryah:_" class="dialog-body"><div mxa="_zs_galleryah:a" class="_zs_gallery_mx-dialog_alert_-alert-header">' + ($expr = '<%=title%>', $e(title)) + '</div><div mxa="_zs_galleryah:b" class="word-break">' + ($expr = '<%!content%>', $n(content)) + '</div></div>';
    $line = 5;
    $art = 'if hasBtns';
    ;
    $expr = '<%if (hasBtns) {%>';
    if (hasBtns) {
        ;
        $p += '<div mxa="_zs_galleryah:c" class="dialog-footer"><a mxa="_zs_galleryah:d" href="javascript:;" class="btn btn-small btn-brand min-width-50" mx-click="' + $viewId + '@{enter}();">' + ($expr = '<%=enterText%>', $e(enterText)) + '</a></div>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
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
        me['@{ui.btns}'] = extra.hasBtns;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['@{string.content}'],
            title: me['@{string.title}'],
            enterText: me['@{string.enter}'],
            hasBtns: me['@{ui.btns}']
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