/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popmenu___test___index_","._zs_gallery_mx-popmenu___test___index_-left,\n._zs_gallery_mx-popmenu___test___index_-right {\n  margin-right: 20px;\n  padding-top: 32px;\n}\n._zs_gallery_mx-popmenu___test___index_-center {\n  position: relative;\n  margin-right: 20px;\n}\n._zs_gallery_mx-popmenu___test___index_-center ._zs_gallery_mx-popmenu___test___index_-center-top {\n  margin-bottom: 136px;\n}\n._zs_gallery_mx-popmenu___test___index_-center ._zs_gallery_mx-popmenu___test___index_-center-tip {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 30px;\n  margin-top: -15px;\n  line-height: 30px;\n  text-align: center;\n}\n");
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
} ; var $g = '', $_temp, $p = '', menus = $$.menus, text = $$.text, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc-:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryc-:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryc-:_" class="mb20"><span class="color-9">以下示例：</span>点击显示菜单</div><div mxv mxa="_zs_galleryc-:b" class="clearfix mb20"><div mxv mxa="_zs_galleryc-:c" class="fl _zs_gallery_mx-popmenu___test___index_-left"><div mxv mxa="_zs_galleryc-:d" class="mb20"><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'左上对齐（lt）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 11;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_galleryc-:e" class="mb20"><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'左中对齐（lc）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 19;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'左下对齐（lb）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 26;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_galleryc-:f" class="fl _zs_gallery_mx-popmenu___test___index_-center"><div mxv mxa="_zs_galleryc-:g" class="_zs_gallery_mx-popmenu___test___index_-center-top"><span mxv="menus" class="btn mr20" mx-change="' + $viewId + 'select({text:\'上左对齐（tl）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 35;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn mr20" mx-change="' + $viewId + 'select({text:\'上中对齐（tc）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 41;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'上右对齐（tr）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 47;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=tr">上右对齐（tr）</span></div>';
    $line = 53;
    $art = 'if text && selected';
    ;
    $expr = '<%if (text && selected) {%>';
    if (text && selected) {
        ;
        $p += '<div mxa="_zs_galleryc-:h" class="_zs_gallery_mx-popmenu___test___index_-center-tip">';
        $line = 54;
        $art = '=text';
        ;
        $p += ($expr = '<%=text%>', $e(text)) + '：选择操作';
        $line = 54;
        $art = '=selected';
        ;
        $p += ($expr = '<%=selected%>', $e(selected)) + '</div>';
        $line = 55;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxv><span mxv="menus" class="btn mr20" mx-change="' + $viewId + 'select({text:\'下左对齐（bl）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 58;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn mr20" mx-change="' + $viewId + 'select({text:\'下中对齐（bc）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 64;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'下右对齐（br）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 70;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_galleryc-:i" class="fl _zs_gallery_mx-popmenu___test___index_-right"><div mxv mxa="_zs_galleryc-:j" class="mb20"><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'右上对齐（rt）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 80;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_galleryc-:k" class="mb20"><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'右中对齐（rc）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 88;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn" mx-change="' + $viewId + 'select({text:\'右下对齐（rb）\'})" mx-view="mx-popmenu/index?menus=';
    $line = 95;
    $art = '@menus';
    ;
    $p += ($expr = '<%@menus%>', $i($$ref, menus)) + '&width=100&triggerType=click&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_galleryc-:l" class="clearfix"><div mxa="_zs_galleryc-:m" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-left"><div mxs="_zs_galleryc-:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 106;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc-:n" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 108;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc-:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 111;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"&gt;下中对齐（bc）&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"\n    place="lc"\n    mx-change="select()"&gt;左中对齐（lc）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_galleryc-:o" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryc-:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 145;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc-:p" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 147;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc-:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 150;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@2.html\',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    \'select&lt;change&gt;\'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            menus: [{
                    value: 1,
                    text: '操作1'
                }, {
                    value: 2,
                    text: '操作2'
                }, {
                    value: 3,
                    text: '操作3'
                }]
        });
    },
    'select<change>': function (e) {
        var text = e.params.text;
        var selected = e.selected;
        this.updater.digest({
            text: text,
            selected: selected
        });
    }
});

});