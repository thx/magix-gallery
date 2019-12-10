/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Vframe = Magix.Vframe;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-hour_examples_index_","._zs_gallery_mx-hour_examples_index_-wrapper {\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-hour_examples_index_-wrapper1 {\n  width: 760px;\n}\n._zs_gallery_mx-hour_examples_index_-wrapper2 {\n  width: 800px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc^:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryc^:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryc^:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>自定义分组</div></div></div><div mxa="_zs_galleryc^:b" class="mb20 clearfix"><div mxs="_zs_galleryc^:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryc^:c" class="fl">';
    $line = 15;
    $art = 'each selected as s';
    ;
    $expr = '<%for (var $art_injzhre$art_i = 0, $art_cbqepfqlcl$art_c = selected.length; $art_injzhre$art_i < $art_cbqepfqlcl$art_c; $art_injzhre$art_i++) {    var s = selected[$art_injzhre$art_i]%>';
    for (var $art_injzhre$art_i = 0, $art_cbqepfqlcl$art_c = selected.length; $art_injzhre$art_i < $art_cbqepfqlcl$art_c; $art_injzhre$art_i++) {
        var s = selected[$art_injzhre$art_i];
        $p += '<div>';
        $line = 16;
        $art = '=s.name';
        ;
        $p += ($expr = '<%=s.name%>', $e(s.name)) + '：';
        $line = 16;
        $art = '=s.times';
        ;
        $p += ($expr = '<%=s.times%>', $e(s.times)) + '</div>';
        $line = 17;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="selected" class="_zs_gallery_mx-hour_examples_index_-wrapper _zs_gallery_mx-hour_examples_index_-wrapper1" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_hour" mx-view="mx-hour/index?groups=';
    $line = 21;
    $art = '@[1234567]';
    ;
    $p += ($expr = '<%@[1234567]%>', $i($$ref, [1234567])) + '&selected=';
    $line = 22;
    $art = '@selected';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '&tip=%E8%93%9D%E8%89%B2%E4%B8%BA%E5%B7%B2%E9%80%89%E6%8A%95%E6%94%BE%E6%97%B6%E6%AE%B5"></div></div><div mxa="_zs_galleryc^:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryc^:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc^:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 29;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc^:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-hour groups="&#123;&#123;@[1234567]&#125;&#125;" selected="&#123;&#123;@selected&#125;&#125;"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                    week: '1234567',
                    name: '周一至周日',
                    times: [2, 3, 4]
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