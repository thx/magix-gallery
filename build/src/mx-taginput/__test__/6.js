/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', selected = $$.selected, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryd|:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd|:a" class="_zs_galleryk"><div mxs="_zs_galleryd|:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">实时获取当前选择数据</div></div><div mxa="_zs_galleryd|:b" class="mb20"><span mxs="_zs_galleryd|:a" class="color-9">当前选择：</span><span>' + $e(selected) + '</span></div><div mxv mxa="_zs_galleryd|:c" class="mb20"><div mxv="list" class="w280" mx-change="' + $viewId + 'select()" mx-view="mx-taginput/index?list=' + $i($$ref, list) + '"></div></div></div><div mxa="_zs_galleryd|:d" class="_zs_galleryl"><div mxs="_zs_galleryd|:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryd|:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryd|:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-taginput class="w280"\n    id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_galleryd|:f" class="_zs_galleryl"><div mxs="_zs_galleryd|:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryd|:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryd|:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 5; index++) &#123;\n            list.push(&#123;\n                text: \'test\' + index,\n                value: index\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list\n        &#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(e) &#123;\n        // e.selected：string，逗号分隔，选中value\n        // e.items：array，选中完成对象\n        this.updater.digest(&#123;\n            selected: e.selected\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            });
        }
        this.updater.digest({
            viewId: this.id,
            list: list
        });
    },
    'select<change>': function (e) {
        // e.selected：string，逗号分隔，选中value
        // e.items：array，选中完成对象
        this.updater.digest({
            selected: e.selected
        });
    }
});

});