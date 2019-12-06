/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_examples_1_","._zs_gallery_mx-carousel_examples_1_-bg {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  line-height: 100px;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n._zs_gallery_mx-carousel_examples_1_-bg1 {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-carousel_examples_1_-bg2 {\n  background-color: var(--color-brand-vs);\n}\n._zs_gallery_mx-carousel_examples_1_-bg3 {\n  background-color: var(--color-warn);\n}\n._zs_gallery_mx-carousel_examples_1_-wrapper ._zs_gallery_mx-carousel_examples_1_-dot {\n  --mx-carousel-trigger-color: red;\n  --mx-carousel-trigger-gap: 12px;\n  --mx-carousel-line-width: 20px;\n  --mx-carousel-line-height: 5px;\n  --mx-carousel-line-gap: 2px;\n  --mx-carousel-dot-size: 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', verticals = $$.verticals, viewId = $$.viewId, curVer = $$.curVer, list = $$.list, cur = $$.cur, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaf:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryaf:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryaf:_" class="mb10">轮播方向：</div><div mxv mxa="_zs_galleryaf:b" class="clearfix mb20">';
    $line = 5;
    $art = 'each verticals as item';
    ;
    $expr = '<%for (var $art_iamhrurnf$art_i = 0, $art_cnwoyikrbs$art_c = verticals.length; $art_iamhrurnf$art_i < $art_cnwoyikrbs$art_c; $art_iamhrurnf$art_i++) {    var item = verticals[$art_iamhrurnf$art_i]%>';
    for (var $art_iamhrurnf$art_i = 0, $art_cnwoyikrbs$art_c = verticals.length; $art_iamhrurnf$art_i < $art_cnwoyikrbs$art_c; $art_iamhrurnf$art_i++) {
        var item = verticals[$art_iamhrurnf$art_i];
        $p += '<label mxv mxa="_zs_galleryaf:c" class="w150 mb5"><input type="radio" value="';
        $line = 7;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" name="';
        $line = 7;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_dot-vertical" ';
        $line = 8;
        $art = 'if curVer.value == item.value';
        ;
        $expr = '<%if (curVer.value == item.value) {%>';
        if (curVer.value == item.value) {
            ;
            $p += ' checked="true" ';
            $line = 8;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-change="' + $viewId + 'changeVer({item:\'';
        $line = 9;
        $art = '@item';
        ;
        $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})"/>';
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
    $p += '</div><div mxs="_zs_galleryaf:a" class="mb10">dot-type可选项：</div><div mxv mxa="_zs_galleryaf:d" class="clearfix mb10">';
    $line = 17;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_izhv$art_i = 0, $art_chvoekdtdp$art_c = list.length; $art_izhv$art_i < $art_chvoekdtdp$art_c; $art_izhv$art_i++) {    var item = list[$art_izhv$art_i]%>';
    for (var $art_izhv$art_i = 0, $art_chvoekdtdp$art_c = list.length; $art_izhv$art_i < $art_chvoekdtdp$art_c; $art_izhv$art_i++) {
        var item = list[$art_izhv$art_i];
        $p += '<label mxv mxa="_zs_galleryaf:e" class="w150 mb5"><input type="radio" value="';
        $line = 19;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" name="';
        $line = 19;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_dot-types" ';
        $line = 20;
        $art = 'if cur.value == item.value';
        ;
        $expr = '<%if (cur.value == item.value) {%>';
        if (cur.value == item.value) {
            ;
            $p += ' checked="true" ';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' mx-change="' + $viewId + 'change({item:\'';
        $line = 21;
        $art = '@item';
        ;
        $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})"/>';
        $line = 22;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label>';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryaf:f" class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&vertical=';
    $line = 28;
    $art = '=curVer.value';
    ;
    $p += ($expr = '<%!$eu(curVer.value)%>', $eu(curVer.value)) + '&dotType=';
    $line = 29;
    $art = '=cur.value';
    ;
    $p += ($expr = '<%!$eu(cur.value)%>', $eu(cur.value)) + '"><div mxs="_zs_galleryaf:b" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_1_-bg _zs_gallery_mx-carousel_examples_1_-bg1">1</div></div><div mxs="_zs_galleryaf:c" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_1_-bg _zs_gallery_mx-carousel_examples_1_-bg2">2</div></div><div mxs="_zs_galleryaf:d" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_1_-bg _zs_gallery_mx-carousel_examples_1_-bg3">3</div></div></div></div></div><div mxa="_zs_galleryaf:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryaf:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaf:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaf:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-carousel height="100" dot-type="';
    $line = 50;
    $art = '=cur.value';
    ;
    $p += ($expr = '<%=cur.value%>', $e(cur.value)) + '"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/examples/5.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                value: 'dot-in-center',
                text: 'dot-in-center(默认)'
            }, {
                value: 'dot-in-left',
                text: 'dot-in-left'
            }, {
                value: 'dot-in-right',
                text: 'dot-in-right'
            }, {
                value: 'dot-out-center',
                text: 'dot-out-center'
            }, {
                value: 'line-in-center',
                text: 'line-in-center'
            }, {
                value: 'line-in-left',
                text: 'line-in-left'
            }, {
                value: 'line-in-right',
                text: 'line-in-right'
            }, {
                value: 'line-out-center',
                text: 'line-out-center'
            }];
        var verticals = [{
                value: 'false',
                text: '水平(默认)'
            }, {
                value: 'true',
                text: '垂直'
            }];
        this.updater.digest({
            viewId: this.id,
            cur: list[0],
            list: list,
            curVer: verticals[0],
            verticals: verticals
        });
    },
    'change<change>': function (e) {
        this.updater.digest({
            cur: e.params.item
        });
    },
    'changeVer<change>': function (e) {
        this.updater.digest({
            curVer: e.params.item
        });
    }
});

});