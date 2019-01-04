/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/3",["magix","__test__/example","mx-loading/mask","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Loading,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Loading = require("mx-loading/mask");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryb[:_" class="_zs_galleryh"><div mxs="_zs_galleryb[:_" class="_zs_galleryk"><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'show()">全屏遮罩，2秒后自动关闭</a></div><div mxa="_zs_galleryb[:a" class="_zs_galleryl"><div mxs="_zs_galleryb[:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb[:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb[:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show()"&gt;全屏遮罩，2秒后自动关闭&lt;/a&gt;</pre></div><div mxa="_zs_galleryb[:c" class="_zs_galleryl"><div mxs="_zs_galleryb[:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryb[:d" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryb[:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Loading = require(\'@../../mx-loading/mask\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show&lt;click&gt;\'(e)&#123;\n        let that = this;\n        that.showLoading();\n\n        setTimeout(() =&gt; &#123;\n            that.hideLoading();\n        &#125;, 2000);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    mixins: [Loading],
    render: function () {
        this.updater.digest();
    },
    'show<click>': function (e) {
        var that = this;
        that.showLoading();
        setTimeout(function () {
            that.hideLoading();
        }, 2000);
    }
});

});