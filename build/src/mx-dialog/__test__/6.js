/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/6",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text3 = $$.text3, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryah:_" class="_zs_galleryh"><div mxs="_zs_galleryah:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">展示优先级：</span>外部自定义属性 > 浮层内属性 > 默认属性</div><div><a href="javascript:;" mx-click="' + $viewId + 'open1()" class="btn btn-brand mr20">使用浮层内配置的属性</a><a href="javascript:;" mx-click="' + $viewId + 'open2()" class="btn btn-brand">自定义属性</a></div></div><div mxa="_zs_galleryah:a" class="clearfix"><div mxa="_zs_galleryah:b" class="_zs_galleryl _zs_gallerye _zs_galleryg"><div mxs="_zs_galleryah:a" class="_zs_galleryj">浮层本身写法</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_3"><span mxa="_zs_galleryah:c" class="_zs_galleryo">' + $n(text3) + '</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_3">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@inner.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'cancel&lt;click&gt;\'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;, &#123;\n    dialogOptions: &#123;\n        width: 800\n    &#125;\n&#125;);\n            </pre></div><div mxa="_zs_galleryah:d" class="_zs_gallerye"><div mxa="_zs_galleryah:e" class="_zs_galleryl"><div mxs="_zs_galleryah:c" class="_zs_galleryj">使用浮层内配置的属性</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryah:f" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxDialog(\'@./inner\');\n&#125;\n                </pre></div><div mxa="_zs_galleryah:g" class="_zs_galleryl"><div mxs="_zs_galleryah:d" class="_zs_galleryj">自定义属性</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryah:h" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxDialog(\'@./inner\', &#123;&#125;, &#123;\n        width: 400\n    &#125;);\n&#125;\n                </pre></div></div></div></div>'; return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open1<click>': function (e) {
        this.mxDialog('mx-dialog/__test__/inner');
    },
    'open2<click>': function (e) {
        this.mxDialog('mx-dialog/__test__/inner', {}, {
            width: 400
        });
    }
});

});