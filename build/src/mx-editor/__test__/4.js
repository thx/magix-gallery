/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-editor___test___4_","._zs_gallery_mx-editor___test___4_-multi-ellipsis {\n  max-width: 120px;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  /* autoprefixer: off */\n  -webkit-box-orient: vertical;\n  /* autoprefixer: on */\n}\n");
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
} ; var $g = '', $_temp, $p = '', content = $$.content, tmpl = $$.tmpl, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaM:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryaM:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryaM:f" class="mb15 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">最多显示两行，超出换行</div></div><div mxa="_zs_galleryaM:b" class="mb15"><span mxs="_zs_galleryaM:a" class="color-9">当前内容：</span><span>';
    $line = 9;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '</span></div><div mxa="_zs_galleryaM:c" class="mb20 clearfix"><div mxs="_zs_galleryaM:e" class="color-9 fl">实际显示：</div><div mxa="_zs_galleryaM:d" class="fl"><div mx-view="mx-editor/index?tmpl=';
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
    $p += ($expr = '<%@{        required: true    }%>', $i($$ref, { required: true })) + '"></div></div></div></div><div mxa="_zs_galleryaM:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaM:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaM:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaM:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>';
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
        this.updater.digest({
            tmpl: '<div class="_zs_gallery_mx-editor___test___4_-multi-ellipsis">${content}</div>',
            content: '这是一条非常长非常长非常长的需要换行的数据'
        });
    },
    'change<edit>': function (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        });
    }
});

});