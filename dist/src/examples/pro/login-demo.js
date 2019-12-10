/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/login-demo",["magix","../example","$","mx-dialog/login-iframe","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-dialog/login-iframe");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_examples_pro_login-demo_","._zs_gallery_examples_pro_login-demo_-demo {\n  padding: 40px 0;\n  background-color: var(--color-bg);\n}\n._zs_gallery_examples_pro_login-demo_-demo ._zs_gallery_examples_pro_login-demo_-login-wrapper {\n  width: 350px;\n  height: 400px;\n  margin: auto;\n  background-color: #fff;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n}\n");
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
    $p += '<div mxa="_zs_galleryx:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryx:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="_zs_gallery_examples_pro_login-demo_-demo"><div class="_zs_gallery_examples_pro_login-demo_-login-wrapper" mx-view="mx-dialog/login-iframe"></div></div></div><div mxa="_zs_galleryx:a" class="clearfix"><div mxa="_zs_galleryx:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_galleryx:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryx:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 12;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryx:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;iframe src="&#123;&#123;=src&#125;&#125;" \n    frameborder="0" \n    width="100%" \n    height="400" \n    allowtransparency="true" \n    scrolling="no" \n    marginheight="0" \n    marginwidth="0" \n    border="0"&gt;&lt;/iframe&gt;</pre></div><div mxa="_zs_galleryx:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryx:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryx:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryx:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let &#123; params: routeParams &#125; = Magix.Router.parse();\n        let params = [\n            `redirectURL=$&#123;encodeURIComponent(window.location.href)&#125;`, // 登录成功回跳页面\n            \'style=mini\',\n            \'css_style=dingxiang\', //css_style为主站那边给定的样式约定值\n            \'full_redirect=true\',\n            \'newMini2=true\',\n            \'enup=0\',\n            \'qrlogin=1\',\n            \'keyLogin=true\'\n        ]\n        // 区分日常 or 预发线上\n        let taobaoHost = !!~window.location.host.indexOf(\'daily\') ? \'login.daily.taobao.net\' : \'login.taobao.com\';\n        let src = \'https://\' + taobaoHost + \'/member/login.jhtml?\' + params.join(\'&\');\n\n        this.updater.digest(&#123;\n            src\n        &#125;);\n\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/login-demo.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});