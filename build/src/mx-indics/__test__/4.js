/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryb$:_" class="_zs_galleryh"><div mxa="_zs_galleryb$:a" class="_zs_galleryk"><div mxa="_zs_galleryb$:b" class="clearfix mb20"><div mxa="_zs_galleryb$:c" class="_zs_gallerye"><div mxs="_zs_galleryb$:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 无分组</div></div><div mx-view="mx-indics/index?fields=' + $i($$ref, [{ id: 1, name: '消耗' }, { id: 2, name: '展现量' }, { id: 3, name: '点击量' }, { id: 4, name: '点击率' }, { id: 5, name: '平均点击单价' }, { id: 6, name: '点击转化率' }]) + '&valueKey=id&textKey=name&defaults=' + $i($$ref, [1, 2, 3]) + '"></div></div><div mxa="_zs_galleryb$:d" class="_zs_gallerye"><div mxs="_zs_galleryb$:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 有分组（parents的key，value跟fields保持一致）</div></div><div mx-view="mx-indics/index?parents=' + $i($$ref, [{ id: 1, name: '组1' }, { id: 2, name: '组2' }]) + '&fields=' + $i($$ref, [{ id: 1, name: '消耗', pId: 1 }, { id: 2, name: '展现量', pId: 1 }, { id: 3, name: '点击量', pId: 1 }, { id: 4, name: '点击率', pId: 1 }, { id: 5, name: '平均点击单价', pId: 2 }, { id: 6, name: '点击转化率', pId: 2 }]) + '&parentKey=pId&valueKey=id&textKey=name&defaults=' + $i($$ref, [1, 2, 3]) + '"></div></div></div></div><div mxa="_zs_galleryb$:e" class="clearfix"><div mxa="_zs_galleryb$:f" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryb$:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb$:g" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb$:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\'\n    &#125;, &#123;\n        id: 2, name: \'展现量\'\n    &#125;, &#123;\n        id: 3, name: \'点击量\'\n    &#125;, &#123;\n        id: 4, name: \'点击率\'\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\'\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_galleryb$:h" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryb$:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryb$:i" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryb$:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n&lt;mx-indics \n    parents="&#123;&#123;@[&#123;\n        id: 1, name: \'组1\'\n    &#125;, &#123;\n        id: 2, name: \'组2\'\n    &#125;]&#125;&#125;" \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\', pId: 1\n    &#125;, &#123;\n        id: 2, name: \'展现量\', pId: 1\n    &#125;, &#123;\n        id: 3, name: \'点击量\', pId: 1\n    &#125;, &#123;\n        id: 4, name: \'点击率\', pId: 1\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\', pId: 2\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\', pId: 2\n    &#125;]&#125;&#125;" \n    parent-key="pId"\n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});