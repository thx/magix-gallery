/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("examples/example");
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
    $p += '<div mxv mxa="_zs_gallerycP:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerycP:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerycP:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>每日单独选择</div><div>提供快捷操作</div></div></div><div mxa="_zs_gallerycP:b" class="mb20 clearfix"><div mxs="_zs_gallerycP:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_gallerycP:c" class="fl">';
    $line = 16;
    $art = 'each selected as s';
    ;
    $expr = '<%for (var $art_ipmpdpnp$art_i = 0, $art_cnlexljs$art_c = selected.length; $art_ipmpdpnp$art_i < $art_cnlexljs$art_c; $art_ipmpdpnp$art_i++) {    var s = selected[$art_ipmpdpnp$art_i]%>';
    for (var $art_ipmpdpnp$art_i = 0, $art_cnlexljs$art_c = selected.length; $art_ipmpdpnp$art_i < $art_cnlexljs$art_c; $art_ipmpdpnp$art_i++) {
        var s = selected[$art_ipmpdpnp$art_i];
        $p += '<div>';
        $line = 17;
        $art = '=s.name';
        ;
        $p += ($expr = '<%=s.name%>', $e(s.name)) + '：';
        $line = 17;
        $art = '=s.times';
        ;
        $p += ($expr = '<%=s.times%>', $e(s.times)) + '</div>';
        $line = 18;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="selected" class="_zs_gallery_mx-hour_examples_index_-wrapper _zs_gallery_mx-hour_examples_index_-wrapper2" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_hour" mx-view="mx-hour/index?simple=false&selected=';
    $line = 23;
    $art = '@selected';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div></div><div mxa="_zs_gallerycP:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycP:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycP:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 29;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycP:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-hour style="width: 760px;"\n    simple="false"\n    selected="&#123;&#123;@[&#123;\n        week: 1,\n        times: [2,3,4,21,22,23]\n    &#125;, &#123;\n        week: 3,\n        times: [0,1,2,3,4,10,11,12]\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/examples/2.html';
    throw msg;
} return $p; },
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