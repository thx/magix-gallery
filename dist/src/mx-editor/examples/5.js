/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/examples/5",["magix","examples/example","mx-form/index","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Form = require("mx-form/index");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', content = $$.content, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybu:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerybu:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxa="_zs_gallerybu:b" class="mb20"><span mxs="_zs_gallerybu:_" class="color-9">双向绑定，当前内容：</span><span>';
    $line = 5;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '（要求必填且不小于200）</span></div><div mxv mxa="_zs_gallerybu:c" class="mb20"><div mxv="content" mxe="' + $viewId + '_0" mxc="[';
    $line = 9;
    $art = ':content{refresh:true}';
    ;
    $p += '{p:\'content\',f:{refresh:true},a:\'content\'}]" mx-view="mx-editor/index?content=';
    $line = 9;
    $art = ':content{refresh:true}';
    ;
    $p += ($expr = '<%@content%>', $i($$ref, content)) + '&rules=';
    $line = 10;
    $art = '@{\n                        required: true,\n                        min: [200, \'不小于200\']\n                    }';
    ;
    $p += ($expr = '<%@{        required: true,        min: [200, \'不小于200\']    }%>', $i($$ref, { required: true, min: [200, '不小于200'] })) + '"></div></div></div><div mxa="_zs_gallerybu:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybu:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">双向绑定</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybu:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybu:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-editor\n    content="&#123;&#123;:content&#123;refresh:true&#125;&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;" /&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/examples/5.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        this.updater.digest({
            content: 2000
        });
    }
});

});