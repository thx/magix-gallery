/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
var Vframe = Magix.Vframe;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerydt:_" class="_zs_galleryh"><div mxa="_zs_gallerydt:a" class="_zs_galleryk"><div mxs="_zs_gallerydt:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>动态更新提示数据</div><div>请求数据有延时，加loading</div></div></div><div id="' + $e(viewId) + '_test" mx-show="' + $viewId + 'update()" mx-view="mx-suggest/index"></div></div><div mxa="_zs_gallerydt:b" class="_zs_galleryl"><div mxs="_zs_gallerydt:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydt:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydt:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n    &lt;mx-suggest \n        id="&#123;&#123;=viewId&#125;&#125;_test"\n        mx-show="update()"/&gt;</pre></div><div mxa="_zs_gallerydt:d" class="_zs_galleryl"><div mxs="_zs_gallerydt:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydt:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydt:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    let Vframe = Magix.Vframe;\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            this.updater.digest(&#123;\n                viewId: this.id\n            &#125;);\n        &#125;,\n        \'update&lt;show&gt;\'(e) &#123;\n            // 当前输入框输入的值\n            let keyword = e.keyword;\n    \n            let instance = Vframe.get(this.id + \'_test\');\n            instance.invoke(\'showLoading\');\n            setTimeout(() => &#123;\n                let list = [1, 2, 3].map(text => &#123;\n                    return Magix.guid(\'dynamic_\') + keyword;\n                &#125;)\n                instance.invoke(\'update\', [list]);\n                instance.invoke(\'hideLoading\');\n            &#125;, 2000);\n        &#125;\n    &#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    },
    'update<show>': function (e) {
        // 当前输入框输入的值
        var keyword = e.keyword;
        var instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(function () {
            var list = [1, 2, 3].map(function (text) {
                return Magix.guid('dynamic_') + keyword;
            });
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1000);
    }
});

});