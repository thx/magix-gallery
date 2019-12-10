/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/13",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
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
    $p += '<div mxa="_zs_galleryaZ:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryaZ:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">规范淘宝登录框的打开样式：</div><div class="fl"><div>mixins到view上，this.mxLoginView()</div><div>有mask，宽度350，高度400（新版mini高度必须大于=400，否则验证码，加验场景展示不全，<a href="https://yuque.antfin-inc.com/up/login-doc/rgfgka" class="color-brand" target="_blank">查看说明</a>），居中显示</div></div></div><div class="mb20 clearfix"><div class="color-9 fl">使用说明：</div><div class="fl"><div class="mb10">直接传入bizCode即可，具体逻辑已在组件中包装，目前已有的bizCode定义如下</div><table class="table _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table"><thead><tr><th>项目</th><th>bizCode</th><th>登陆框样式版本</th></tr></thead><tbody><tr><td>策略中心</td><td>adStrategy</td><td>dingxiang</td></tr><tr><td>达摩盘服务商版本</td><td>dmpIsv</td><td>mdmp</td></tr><tr><td>默认</td><td></td><td>dingxiang</td></tr></tbody></table></div></div><div><a href="javascript:;" mx-click="' + $viewId + 'show()" class="btn btn-brand">打开登录框</a></div></div><div mxa="_zs_galleryaZ:a" class="clearfix"><div mxa="_zs_galleryaZ:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryaZ:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaZ:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 52;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaZ:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="show()" \n    class="btn btn-brand"&gt;打开登录框&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryaZ:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryaZ:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaZ:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 64;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaZ:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Dialog = require(\'@../index\'); //mixins dialog\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show&lt;click&gt;\'(e) &#123;\n        // this.mxLoginView(viewOptions)\n        // viewOptions：object\n        //      bizCode：项目bizCode，包装了登陆框逻辑\n        this.mxLoginView(&#123;\n            bizCode: \'adStrategy\'\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/13.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'show<click>': function (e) {
        // this.mxLoginView(viewPath[, viewOptions])
        // viewPath：登录框view
        // viewOptions：object，带入viewPath的参数
        this.mxLoginView({
            bizCode: 'adStrategy'
        });
    }
});

});