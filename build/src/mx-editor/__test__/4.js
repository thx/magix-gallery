/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-editor___test___4_","._zs_gallery_mx-editor___test___4_-con {\n  width: 80%;\n}\n");
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
} ; var $g = '', $_temp, $p = '', content = $$.content, tmpl = $$.tmpl, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya::_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya::a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya::_" class="mb10 clearfix"><div class="fl lh22 color-9">以下示例：</div><div class="fl lh22">最多显示两行，超出换行</div></div><div mxa="_zs_gallerya::b" class="mb10 clearfix"><div mxs="_zs_gallerya::a" class="fl lh22 color-9">当前内容：</div><div mxa="_zs_gallerya::c" class="fl lh22 _zs_gallery_mx-editor___test___4_-con">';
    $line = 9;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '</div></div><div mxa="_zs_gallerya::d" class="mb20 clearfix"><div mxs="_zs_gallerya::b" class="color-9 fl">实际显示：</div><div mxa="_zs_gallerya::e" class="fl w140"><div mx-edit="' + $viewId + 'change()" mx-view="mx-editor/index?tmpl=';
    $line = 15;
    $art = '=tmpl';
    ;
    $p += ($expr = '<%!$eu(tmpl)%>', $eu(tmpl)) + '&content=';
    $line = 16;
    $art = '=content';
    ;
    $p += ($expr = '<%!$eu(content)%>', $eu(content)) + '&rules=';
    $line = 17;
    $art = '@{\n                        required: true\n                    }';
    ;
    $p += ($expr = '<%@{        required: true    }%>', $i($$ref, { required: true })) + '"></div></div></div></div><div mxa="_zs_gallerya::f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya::c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya::g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya::d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="w140"&gt;\n    &lt;mx-editor\n        tmpl="&#123;&#123;=tmpl&#125;&#125;"\n        content="&#123;&#123;=content&#125;&#125;"\n        rules="&#123;&#123;@&#123;\n            required: true\n        &#125;&#125;&#125;"\n        mx-edit="change()"&gt;&lt;/mx-editor&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya::h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya::e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya::i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya::d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Base = require(\'__test__/example\');\nlet $ = require(\'$\');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let content = \'这是一条非常长非常长非常长的需要换行的数据\';\n        this.setContent(content);\n    &#125;,\n    \'change&lt;edit&gt;\' (e) &#123;\n        // editText编辑后的文案\n        this.setContent(e.editText);\n    &#125;,\n    setContent(content)&#123;\n        let len = content.length,\n            max = 20;\n        this.updater.digest(&#123;\n            tmpl: (len &gt; max) ? (content.slice(0, max) + \'...\') : content,\n            content\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        var content = '这是一条非常长非常长非常长的需要换行的数据';
        this.setContent(content);
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.setContent(e.editText);
    },
    setContent: function (content) {
        var len = content.length;
        var max = 20;
        this.updater.digest({
            tmpl: (len > max) ? (content.slice(0, max) + '...') : content,
            content: content
        });
    }
});

});