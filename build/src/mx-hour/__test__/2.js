/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_galleryb5:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb5:a" class="_zs_galleryk"><div mxs="_zs_galleryb5:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>每日单独选择</div><div>提供快捷操作</div></div></div><div mxa="_zs_galleryb5:b" class="mb20 clearfix"><div mxs="_zs_galleryb5:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryb5:c" class="fl">'; for (var $art_iyuuqgqrd$art_i = 0, $art_ctnsuolq$art_c = selected.length; $art_iyuuqgqrd$art_i < $art_ctnsuolq$art_c; $art_iyuuqgqrd$art_i++) {
    var s = selected[$art_iyuuqgqrd$art_i];
    $p += '<div>' + $e(s.name) + '：' + $e(s.times) + '</div>';
} ; $p += '</div></div><div mxv="selected" class="_zs_gallerygW _zs_gallerygY" id="' + $e(viewId) + '_hour" mx-view="mx-hour/index?simple=false&selected=' + $i($$ref, selected) + '"></div></div><div mxa="_zs_galleryb5:d" class="_zs_galleryl"><div mxs="_zs_galleryb5:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb5:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb5:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-hour style="width: 760px;"\n    simple="false"\n    selected="&#123;&#123;@[&#123;\n        week: 1,\n        times: [2,3,4,21,22,23]\n    &#125;, &#123;\n        week: 3,\n        times: [0,1,2,3,4,10,11,12]\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                    week: 1,
                    name: '周一',
                    times: [2, 3, 4, 21, 22, 23]
                }, {
                    week: 3,
                    name: '周三',
                    times: [0, 1, 2, 3, 4, 10, 11, 12]
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