/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/examples/6",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-btn_examples_index_","._zs_gallery_mx-btn_examples_index_-dark {\n  padding: 20px;\n  background-color: var(--app-bg);\n}\n._zs_gallery_mx-btn_examples_index_-cont {\n  padding: 20px 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery2:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallery2:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="_zs_gallery_mx-btn_examples_index_-cont"><div class="mb20"><button type="button" class="mx-btn btn-brand mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn btn-brand mr20 w80"><span class="mx-btn-loading-dot"></span></button><button type="button" class="mx-btn btn-small btn-brand mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn btn-small btn-brand mr20 w80"><span class="mx-btn-loading-dot"></span></button></div><div class="mb20"><button type="button" class="mx-btn mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn mr20 w80"><span class="mx-btn-loading-dot"></span></button><button type="button" class="mx-btn btn-small mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn btn-small mr20 w80"><span class="mx-btn-loading-dot"></span></button></div><div class="mb20"><button type="button" disabled="true" class="mx-btn btn-disabled mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" disabled="true" class="mx-btn btn-disabled mr20 w80"><span class="mx-btn-loading-dot"></span></button><button type="button" disabled="true" class="mx-btn btn-small btn-disabled mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" disabled="true" class="mx-btn btn-small btn-disabled mr20 w80"><span class="mx-btn-loading-dot"></span></button></div><div class="mb20"><button type="button" class="mx-btn mx-btn-custom mr20" style="--mx-btn-custom-color: #ffb400;--mx-btn-custom-color-text: #ffffff;--mx-btn-custom-color-hover: #f1ab03;--mx-btn-custom-color-hover-text: #ffffff"><span class="mx-btn-loading-circle"></span>自定义按钮</button><button type="button" class="mx-btn mx-btn-custom mx-btn-custom-loading mr20" color-loading="#ffb400" style="--mx-btn-custom-color: #333333;--mx-btn-custom-color-text: #ffb400;--mx-btn-custom-color-hover: #333333;--mx-btn-custom-color-hover-text: #f1ab03;--mx-btn-custom-color-loading: #ffb400"><span class="mx-btn-loading-circle"></span>自定义按钮</button></div><div class="_zs_gallery_mx-btn_examples_index_-dark"><button type="button" class="mx-btn btn-white mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn btn-white mr20 w80"><span class="mx-btn-loading-dot"></span></button><button type="button" class="mx-btn btn-small btn-white mr20"><span class="mx-btn-loading-circle"></span>loading</button><button type="button" class="mx-btn btn-small btn-white mr20 w80"><span class="mx-btn-loading-dot"></span></button></div></div></div><div mxa="_zs_gallery2:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery2:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery2:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 58;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery2:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 品牌色按钮 --&gt;\n&lt;div class="mb20"&gt;\n    &lt;mx-btn brand="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn brand="true" loading="dot" class="mr20 w80"/&gt;\n    &lt;mx-btn small="true" brand="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn small="true" brand="true" loading="dot" class="mr20 w80"/&gt;\n&lt;/div&gt;\n\n&lt;!-- 普通按钮 --&gt;\n&lt;div class="mb20"&gt;\n    &lt;mx-btn loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn loading="dot" class="mr20 w80"/&gt;\n    &lt;mx-btn small="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn small="true" loading="dot" class="mr20 w80"/&gt;\n&lt;/div&gt;\n\n&lt;!-- 禁用按钮 --&gt;\n&lt;div class="mb20"&gt;\n    &lt;mx-btn disabled="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn disabled="true" loading="dot" class="mr20 w80"/&gt;\n    &lt;mx-btn small="true" disabled="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn small="true" disabled="true" loading="dot" class="mr20 w80"/&gt;\n&lt;/div&gt;\n\n&lt;!-- 自定义按钮 --&gt;\n&lt;div class="mb20"&gt;\n    &lt;mx-btn class="mr20" content="自定义按钮"\n        loading="circle"\n        color="#ffb400" \n        color-hover="#f1ab03"/&gt;\n\n    &lt;mx-btn class="mr20" \n        loading="circle"\n        color-loading="#ffb400"\n        color="#333333" \n        color-text="#ffb400"\n        color-hover="#333333"\n        color-hover-text="#f1ab03"\n        content="自定义按钮" /&gt;\n&lt;/div&gt;\n\n&lt;!-- 白底按钮 --&gt;\n&lt;div class="dark"&gt;\n    &lt;mx-btn white="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn white="true" loading="dot" class="mr20 w80"/&gt;\n    &lt;mx-btn small="true" white="true" loading="circle" class="mr20"&gt;loading&lt;/mx-btn&gt;\n    &lt;mx-btn small="true" white="true" loading="dot" class="mr20 w80"/&gt;\n&lt;/div&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/examples/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});