/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, current = $$.current, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb`:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryb`:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_galleryb`:b" class="mb40"><span mxs="_zs_galleryb`:_" class="color-9 mr10">对齐方式：</span>';
    $line = 5;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iieyohcxv$art_i = 0, $art_cxmlszlixe$art_c = list.length; $art_iieyohcxv$art_i < $art_cxmlszlixe$art_c; $art_iieyohcxv$art_i++) {    var item = list[$art_iieyohcxv$art_i]%>';
    for (var $art_iieyohcxv$art_i = 0, $art_cxmlszlixe$art_c = list.length; $art_iieyohcxv$art_i < $art_cxmlszlixe$art_c; $art_iieyohcxv$art_i++) {
        var item = list[$art_iieyohcxv$art_i];
        $p += '<label mxv mxa="_zs_galleryb`:c" class="mr20"><input type="radio" value="';
        $line = 7;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" name="align" ';
        $line = 8;
        $art = 'if item.value == current';
        ;
        $expr = '<%if (item.value == current) {%>';
        if (item.value == current) {
            ;
            $p += 'checked="true" ';
            $line = 8;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-change="' + $viewId + 'change({value:\'';
        $line = 9;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})"/>';
        $line = 10;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label>';
        $line = 12;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mx-view="mx-footer/index?textAlign=';
    $line = 14;
    $art = '=current';
    ;
    $p += ($expr = '<%!$eu(current)%>', $eu(current)) + '"></div></div><div mxa="_zs_galleryb`:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryb`:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb`:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb`:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-footer text-align="';
    $line = 24;
    $art = '=current';
    ;
    $p += ($expr = '<%=current%>', $e(current)) + '"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-footer/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            list: [{
                    text: '居中对齐（默认）',
                    value: 'center'
                }, {
                    text: '左对齐',
                    value: 'left'
                }, {
                    text: '右对齐',
                    value: 'right'
                }],
            current: 'center'
        });
    },
    'change<change>': function (e) {
        this.updater.digest({
            current: e.params.value
        });
    }
});

});