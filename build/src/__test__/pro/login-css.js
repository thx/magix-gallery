/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/login-css",["magix","../example","$","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryq:_" class="_zs_galleryh"><div mxa="_zs_galleryq:a" class="_zs_galleryl _zs_galleryq"><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryq:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryq:_" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n.login-switch .iconfont {\n    color: #0391f4;\n}\n.login-switch .iconfont:hover {\n    color: #0383dc;\n}\n.login-box a {\n    color: #ccc;\n}\n.login-box a:hover {\n    color: #0383dc;\n}\n.login-box a.light-link {\n    color: #0383dc;\n}\n.login-box .submit button {\n    background-color: #0391f4;\n}\n.login-box .submit button:hover {\n    background-color: #0383dc;\n}\n.qrcode-desc {\n    margin-top: 25px;\n}\n.qrcode-desc .iconfont {\n    color: #0391f4;\n}\n.qrcode-help {\n    background-image: url(//gtms02.alicdn.com/tps/i2/TB16efXKVXXXXbOXXXX.C3E4VXX-120-182.png) no-repeat;\n}\n.qrcode-login .msg-err .refresh {\n    background-color: #0391f4;\n}</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});