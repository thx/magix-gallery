/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfa:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryfa:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="btn btn-brand mr10" mx-error="' + $viewId + 'uploadError()" mx-success="' + $viewId + 'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2Fupload.action&method=POST&name=images&multiple=true&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">多个上传</div><div class="btn btn-brand mr10" mx-error="' + $viewId + 'uploadError()" mx-success="' + $viewId + 'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2FuploadImages.action&method=POST&name=images&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">单个上传</div><div class="btn btn-disabled" mx-error="' + $viewId + 'uploadError()" mx-success="' + $viewId + 'uploadSuccess()" mx-view="mx-uploader/index?action=%2Fcreative%2FuploadImages.action&method=POST&name=images&disabled=true&accept=image%2Fjpeg%2Cimage%2Fpng%2Cimage%2Fjpg">禁用上传</div></div><div mxa="_zs_galleryfa:a" class="clearfix"><div mxa="_zs_galleryfa:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-left"><div mxs="_zs_galleryfa:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfa:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfa:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-uploader class="btn btn-brand mr10"\n    action="/creative/upload.action" \n    method="POST"\n    name="images"\n    multiple="true"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    多个上传&lt;/mx-uploader&gt;\n\n&lt;mx-uploader class="btn btn-brand mr10"\n    action="/creative/uploadImages.action" \n    method="POST"\n    name="images"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    单个上传&lt;/mx-uploader&gt;\n\n&lt;mx-uploader class="btn btn-disabled"\n    action="/creative/uploadImages.action" \n    method="POST"\n    name="images"\n    disabled="true"\n    accept="image/jpeg,image/png,image/jpg"\n    mx-error="uploadError()"\n    mx-success="uploadSuccess()"&gt;\n    禁用上传&lt;/mx-uploader&gt;</pre></div><div mxa="_zs_galleryfa:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryfa:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryfa:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 75;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryfa:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'uploadSuccess&lt;success&gt;\'(e) &#123;\n        // e.response\n    &#125;,\n    \'uploadError&lt;error&gt;\'(e) &#123;\n        // e.error\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-uploader/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            text: '123132'
        });
    },
    'uploadSuccess<success>': function (e) {
        // e.response
    },
    'uploadError<error>': function (e) {
        // e.error
    },
    'test<click>': function (event) {
        this.updater.digest({
            text: '123'
        });
    }
});

});