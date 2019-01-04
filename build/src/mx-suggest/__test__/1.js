/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerydo:_" class="_zs_galleryh"><div mxa="_zs_gallerydo:a" class="_zs_galleryk"><div mxs="_zs_gallerydo:_" class="mb20"><span class="color-9">以下示例：</span>动态更新提示数据</div><div id="' + $e(viewId) + '_test" mx-show="' + $viewId + 'update()" mx-view="mx-suggest/index"></div></div><div mxa="_zs_gallerydo:b" class="_zs_galleryl"><div mxs="_zs_gallerydo:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydo:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydo:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-suggest \n    id="&#123;&#123;=viewId&#125;&#125;_test"\n    mx-show="update()"/&gt;</pre></div><div mxa="_zs_gallerydo:d" class="_zs_galleryl"><div mxs="_zs_gallerydo:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerydo:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerydo:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Vframe = Magix.Vframe;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    \'update&lt;show&gt;\'(e) &#123;\n        let id = this.id + \'_test\';\n\n        // 当前输入框输入的值\n        let keyword = e.keyword;\n\n        // 传入的list格式请保持和初始化格式保持一致\n        // 即假设原来传入[&#123;id:\'\',name:\'\'&#125;]\n        // 此处传入格式依然为[&#123;id:\'\',name:\'\'&#125;]\n        let list = [1, 2, 3].map(text => &#123;\n            return Magix.guid(\'dynamic_\');\n        &#125;)\n\n        Vframe.get(id).invoke(\'update\', [list]);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    },
    'update<show>': function (e) {
        var id = this.id + '_test';
        // 当前输入框输入的值
        var keyword = e.keyword;
        // 传入的list格式请保持和初始化格式保持一致
        // 即假设原来传入[{id:'',name:''}]
        // 此处传入格式依然为[{id:'',name:''}]
        var list = [1, 2, 3].map(function (text) {
            return Magix.guid('dynamic_');
        });
        Vframe.get(id).invoke('update', [list]);
    }
});

});