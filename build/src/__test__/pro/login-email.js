/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/login-email",["magix","../example","$","mx-copy/index","../hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerys:_" class="_zs_galleryh"><div mxa="_zs_gallerys:a" class="_zs_galleryl _zs_galleryq"><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerys:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerys:_" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n应用说明：\n1. 产品名：\n2. 域名：\n3. 产品介绍：\n\n参数说明：\ncss_style：申请完成对方会邮件回复\nredirectURL：encodeURIComponent(需要跳转的地址)\nstyle：mini\nfull_redirect：true\nnewMini2：true\nenup：0\nqrlogin：1\nkeyLogin：true\n\ncss 文件链接：\nhttps://g.alicdn.com/mm/ziyuan/0.1.29/item_login.css?_blank</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});