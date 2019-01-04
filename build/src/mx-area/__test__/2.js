/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryr","._zs_gallerybw{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybx,._zs_galleryby{padding:20px 20px 0;border:1px solid #e6e6e6;border-radius:4px}._zs_gallerybx{width:740px}._zs_galleryby{width:600px}._zs_gallerybz{width:740px;border:1px solid #e6e6e6;border-radius:4px;padding:20px 0}");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, selected = $$.selected, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryR:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryR:a" class="_zs_galleryk"><div mxs="_zs_galleryR:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>只能选择到省份</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryR:b" class="clearfix mb20"><div mxv mxa="_zs_galleryR:c" class="_zs_galleryby fl mr20"><div mxv="selected" id="' + $e(viewId) + '_area" mx-view="mx-area/index?selected=' + $i($$ref, selected) + '"></div></div><div mxa="_zs_galleryR:d" class="fl"><div mxs="_zs_galleryR:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryR:e" class="clearfix lh22"><div mxs="_zs_galleryR:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryR:f" class="fl">'; for (var $art_igmcozhjc$art_i = 0, $art_ccvtytpuv$art_c = selected.length; $art_igmcozhjc$art_i < $art_ccvtytpuv$art_c; $art_igmcozhjc$art_i++) {
    var item = selected[$art_igmcozhjc$art_i];
    $p += '<div>' + $e(item) + '</div>';
} ; $p += '</div></div></div></div></div><div mxa="_zs_galleryR:g" class="clearfix"><div mxa="_zs_galleryR:h" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryR:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryR:i" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryR:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryR:j" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryR:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryR:k" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryR:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [1]\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\' (event) &#123;\n        let id = this.id + \'_area\'\n        let selected = Magix.Vframe.get(id).invoke(\'val\');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: [1]
        });
    },
    'get<click>': function (event) {
        var id = this.id + '_area';
        var selected = Magix.Vframe.get(id).invoke('val');
        this.updater.digest({
            selected: selected
        });
    }
});

});