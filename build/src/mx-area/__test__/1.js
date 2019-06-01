/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-area/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-area___test___index_","._zs_gallery_mx-area___test___index_-area-wrapper1,\n._zs_gallery_mx-area___test___index_-area-wrapper2 {\n  padding: 20px 20px 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-area___test___index_-area-wrapper1 {\n  width: 740px;\n}\n._zs_gallery_mx-area___test___index_-area-wrapper2 {\n  width: 600px;\n}\n._zs_gallery_mx-area___test___index_-area-wrapper3 {\n  width: 740px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  padding: 20px 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, selected = $$.selected, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryP:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryP:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>可以选择城市</div><div>每个省份和城市都有各自的id，若选择了省份，则获取选中值时只有省份的id（不包含该省份下所有城市id）</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryP:b" class="clearfix mb20"><div mxv mxa="_zs_galleryP:c" class="_zs_gallery_mx-area___test___index_-area-wrapper1 fl mr20"><div mxv="selected" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_area" mx-view="mx-area/index?city=true&selected=';
    $line = 15;
    $art = '@selected';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '"></div></div><div mxa="_zs_galleryP:d" class="fl"><div mxs="_zs_galleryP:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'get()">获取选中值</a></div><div mxa="_zs_galleryP:e" class="clearfix lh22"><div mxs="_zs_galleryP:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryP:f" class="fl">';
    $line = 22;
    $art = 'each selected as item';
    ;
    $expr = '<%for (var $art_iehjcimbwlw$art_i = 0, $art_cntfumdci$art_c = selected.length; $art_iehjcimbwlw$art_i < $art_cntfumdci$art_c; $art_iehjcimbwlw$art_i++) {    var item = selected[$art_iehjcimbwlw$art_i]%>';
    for (var $art_iehjcimbwlw$art_i = 0, $art_cntfumdci$art_c = selected.length; $art_iehjcimbwlw$art_i < $art_cntfumdci$art_c; $art_iehjcimbwlw$art_i++) {
        var item = selected[$art_iehjcimbwlw$art_i];
        $p += '<div>';
        $line = 23;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '</div>';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div></div><div mxa="_zs_galleryP:g" class="clearfix"><div mxa="_zs_galleryP:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryP:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryP:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryP:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    city="true"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryP:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryP:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryP:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 47;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryP:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [1]\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\' (event) &#123;\n        let id = this.id + \'_area\'\n        let selected = Magix.Vframe.get(id).invoke(\'val\');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-area/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            selected: [1]
        });
    },
    'get<click>': function (event) {
        var id = this.id + '_area';
        var selected = Magix.Vframe.get(id).invoke('val');
        this.updater.digest({
            selected: selected
        });
    }
});

});