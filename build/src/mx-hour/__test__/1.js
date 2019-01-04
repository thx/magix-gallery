/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Vframe = Magix.Vframe;
var $ = require("$");
Magix.applyStyle("_zs_galleryV","._zs_gallerygV{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygW{padding:10px;border-radius:4px;border:1px solid #e6e6e6}._zs_gallerygX{width:760px}._zs_gallerygY{width:800px}");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxv mxa="_zs_galleryb4:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb4:a" class="_zs_galleryk"><div mxs="_zs_galleryb4:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>极简模式（只区分工作日和双休日）</div><div>时间段btn快捷全选或反选</div><div>拖动连续选择</div><div>宽度随容器自适应，可配置提示信息</div></div></div><div mxa="_zs_galleryb4:b" class="mb20 clearfix"><div mxs="_zs_galleryb4:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryb4:c" class="fl">'; for (var $art_ivluffzsshg$art_i = 0, $art_cgusue$art_c = selected.length; $art_ivluffzsshg$art_i < $art_cgusue$art_c; $art_ivluffzsshg$art_i++) {
    var s = selected[$art_ivluffzsshg$art_i];
    $p += '<div>' + $e(s.name) + '：' + $e(s.times) + '</div>';
} ; $p += '</div></div><div mxv="selected" class="_zs_gallerygW _zs_gallerygX" id="' + $e(viewId) + '_hour" mx-view="mx-hour/index?selected=' + $i($$ref, selected) + '&tip=%E8%93%9D%E8%89%B2%E4%B8%BA%E5%B7%B2%E9%80%89%E6%8A%95%E6%94%BE%E6%97%B6%E6%AE%B5"></div></div><div mxa="_zs_galleryb4:d" class="clearfix"><div mxa="_zs_galleryb4:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryb4:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb4:f" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb4:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div&gt;\n    &lt;a href="javascript:;" class="btn btn-brand"\n        mx-click="get()"&gt;获取选中值&lt;/a&gt;\n&lt;/div&gt;\n\n&lt;mx-hour id="&#123;&#123;=viewId&#125;&#125;_hour"\n    selected="&#123;&#123;@selected&#125;&#125;" \n    tip="蓝色为已选投放时段"/&gt;</pre></div><div mxa="_zs_galleryb4:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryb4:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryb4:h" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryb4:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [&#123;\n                week: \'12345\',\n                times: [2, 3, 4]\n            &#125;, &#123;\n                week: \'67\',\n                times: [10, 11, 12]\n            &#125;]\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'() &#123;\n        let vf = Vframe.get(this.id + \'_hour\');\n        let selected = vf.invoke(\'val\');\n        this.updater.digest(&#123;\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                    week: '12345',
                    name: '周一至周五',
                    times: [2, 3, 4]
                }, {
                    week: '67',
                    name: '周六至周日',
                    times: [10, 11, 12]
                }]
        });
    },
    'get<click>': function () {
        var vf = Vframe.get(this.id + '_hour');
        var selected = vf.invoke('val');
        this.updater.digest({
            selected: selected
        });
    }
});

});