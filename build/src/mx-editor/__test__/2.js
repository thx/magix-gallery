/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', content = $$.content, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerya5:_" class="_zs_galleryh"><div mxa="_zs_gallerya5:a" class="_zs_galleryk"><div mxs="_zs_gallerya5:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_gallerya5:b" class="mb20"><span mxs="_zs_gallerya5:a" class="color-9">当前内容：</span><span>' + $e(content) + '（要求必填且不小于200）</span></div><div mxa="_zs_gallerya5:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content=' + $eu(content) + '&rules=' + $i($$ref, { required: true, min: [200, '不小于200'] }) + '"></div></div></div><div mxa="_zs_gallerya5:d" class="_zs_galleryl"><div mxs="_zs_gallerya5:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya5:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya5:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            content: 2000
        });
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        });
    }
});

});