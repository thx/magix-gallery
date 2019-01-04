/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryF","._zs_galleryeC{width:80%}");
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
} ; var $g = '', $_temp, $p = '', content = $$.content, tmpl = $$.tmpl, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerya7:_" class="_zs_galleryh"><div mxa="_zs_gallerya7:a" class="_zs_galleryk"><div mxs="_zs_gallerya7:_" class="mb10 clearfix"><div class="fl lh22 color-9">以下示例：</div><div class="fl lh22">最多显示两行，超出换行</div></div><div mxa="_zs_gallerya7:b" class="mb10 clearfix"><div mxs="_zs_gallerya7:a" class="fl lh22 color-9">当前内容：</div><div mxa="_zs_gallerya7:c" class="fl lh22 _zs_galleryeC">' + $e(content) + '</div></div><div mxa="_zs_gallerya7:d" class="mb20 clearfix"><div mxs="_zs_gallerya7:b" class="color-9 fl">实际显示：</div><div mxa="_zs_gallerya7:e" class="fl w140"><div mx-edit="' + $viewId + 'change()" mx-view="mx-editor/index?tmpl=' + $eu(tmpl) + '&content=' + $eu(content) + '&rules=' + $i($$ref, { required: true }) + '"></div></div></div></div><div mxa="_zs_gallerya7:f" class="_zs_galleryl"><div mxs="_zs_gallerya7:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya7:g" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya7:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="w140"&gt;\n    &lt;mx-editor\n        tmpl="&#123;&#123;=tmpl&#125;&#125;"\n        content="&#123;&#123;=content&#125;&#125;"\n        rules="&#123;&#123;@&#123;\n            required: true\n        &#125;&#125;&#125;"\n        mx-edit="change()"&gt;&lt;/mx-editor&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya7:h" class="_zs_galleryl"><div mxs="_zs_gallerya7:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerya7:i" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerya7:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Base = require(\'__test__/example\');\nlet $ = require(\'$\');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let content = \'这是一条非常长非常长非常长的需要换行的数据\';\n        this.setContent(content);\n    &#125;,\n    \'change&lt;edit&gt;\' (e) &#123;\n        // editText编辑后的文案\n        this.setContent(e.editText);\n    &#125;,\n    setContent(content)&#123;\n        let len = content.length,\n            max = 20;\n        this.updater.digest(&#123;\n            tmpl: (len &gt; max) ? (content.slice(0, max) + \'...\') : content,\n            content\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var content = '这是一条非常长非常长非常长的需要换行的数据';
        this.setContent(content);
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.setContent(e.editText);
    },
    setContent: function (content) {
        var len = content.length;
        var max = 20;
        this.updater.digest({
            tmpl: (len > max) ? (content.slice(0, max) + '...') : content,
            content: content
        });
    }
});

});