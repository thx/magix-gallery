/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/init",["magix","$","mx-effects/notice","../subs","mx-title/second","./init-steps","./init-dir"],(require,exports,module)=>{
/*Magix,$*/
require("mx-effects/notice");
require("../subs");
require("mx-title/second");
require("./init-steps");
require("./init-dir");
var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', contents = $$.contents, viewId = $$.viewId; $p += '<div class="mb20 mr20" mx-view="mx-effects/notice?border=true&icon=false&type=highlight&content=' + $eu(contents) + '"></div><div mxa="_zs_galleryo:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '创建步骤', key: viewId + '_steps' }, { name: '目录结构说明', key: viewId + '_dir' }]) + '"></div><div id="' + $e(viewId) + '_steps" mx-view="mx-title/second?content=%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4&tip=magix-cli%E5%B7%A5%E5%85%B7%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Fthx.github.io%2Fmagix-cli-book%2F%23%2F%3C%2Fa%3E"></div><div mxs="_zs_galleryo:_" mx-view="__test__/pro/init-steps" class="pr20"></div><div id="' + $e(viewId) + '_dir" mx-view="mx-title/second?content=%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E&tip=%E4%BA%91%E9%9B%80%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80%3Ca%20rel%3D%27noopener%20noreferrer%27%20href%3D%27https%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%27%20target%3D%27_blank%27%20class%3D%27color-brand%27%3Ehttps%3A%2F%2Flark.alipay.com%2Fchongzhi.ldq%2Fez0zq4%2Fluqazk%3C%2Fa%3E"></div><div mxs="_zs_galleryo:a" mx-view="__test__/pro/init-dir"></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            contents: [
                '依赖 <a class="link-brand" href="https://thx.github.io/magix-cli-book/#/" target="_blank" rel="noopener noreferrer">magix-cli</a> 命令行工具快速创建magix项目，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=vuop5vn" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>崇志</a>',
            ].join('<br />')
        });
    }
});

});