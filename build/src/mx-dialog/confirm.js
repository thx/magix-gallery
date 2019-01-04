/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/confirm",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_galleryB","._zs_gallerydD{font-size:16px;margin-bottom:20px}");
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
} ; var $g = '', $_temp, $p = '', title = $$.title, content = $$.content, enterText = $$.enterText, cancelText = $$.cancelText; $p += '<div mxa="_zs_galleryav:_" class="dialog-body"><div mxa="_zs_galleryav:a" class="_zs_gallerydD">' + $e(title) + '</div><div mxa="_zs_galleryav:b" class="word-break">' + $n(content) + '</div></div><div mxa="_zs_galleryav:c" class="dialog-footer"><a mxa="_zs_galleryav:d" href="javascript:;" class="btn btn-small btn-brand min-width-60 mr16" mx-click="' + $viewId + '__al();">' + $e(enterText) + '</a><a mxa="_zs_galleryav:e" href="javascript:;" class="btn btn-small min-width-60" mx-click="' + $viewId + '__K()">' + $e(cancelText) + '</a></div>'; return $p; },
    init: function (extra) {
        var me = this;
        me['__af'] = extra.dialog;
        me['__ag'] = extra.content;
        me['__ah'] = extra.title || I18n['dialog.tip'];
        me['__ai'] = extra.enterText || I18n['dialog.submit'];
        me['__am'] = extra.cancelText || I18n['dialog.cancel'];
        me['__aj'] = extra.enterCallback;
        me['__an'] = extra.cancelCallback;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            content: me['__ag'],
            title: me['__ah'],
            enterText: me['__ai'],
            cancelText: me['__am']
        });
    },
    '__al<click>': function () {
        var me = this;
        me['__af'].close();
        if (me['__aj']) {
            Magix.toTry(me['__aj']);
        }
    },
    '__K<click>': function () {
        var me = this;
        me['__af'].close();
        if (me['__an']) {
            Magix.toTry(me['__an']);
        }
    }
});

});