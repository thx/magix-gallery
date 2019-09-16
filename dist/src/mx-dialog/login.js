/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/login",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-dialog_login_","._zs_gallery_mx-dialog_login_-login {\n  padding-top: 28px;\n}\n._zs_gallery_mx-dialog_login_-inner {\n  height: 340px;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close {\n  top: -16px;\n  right: -16px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  background-color: #999;\n}\n._zs_gallery_mx-dialog_index_-dialog ._zs_gallery_mx-dialog_index_-dialog-close ._zs_gallery_mx-dialog_index_-iconfont-ext {\n  line-height: 22px;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', path = $$.path, data = $$.data; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya8:_" class="_zs_gallery_mx-dialog_login_-login"><div mxv="data" class="_zs_gallery_mx-dialog_login_-inner" mx-view="';
    $line = 2;
    $art = '=path';
    ;
    $p += ($expr = '<%=path%>', $e(path)) + '?data=';
    $line = 2;
    $art = '@data';
    ;
    $p += ($expr = '<%@data%>', $i($$ref, data)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/login.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.set({
            path: extra.loginViewPath,
            data: extra.loginViewData
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});