/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/login-demo",["magix","../example","$","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_login-demo_","/* @dependent: ./index.less */\n._zs_gallery___test___pro_login-demo_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_login-demo_-demo {\n  padding: 40px 0;\n  background-color: #fafafa;\n}\n._zs_gallery___test___pro_login-demo_-demo ._zs_gallery___test___pro_login-demo_-login-wrapper {\n  width: 350px;\n  height: 340px;\n  margin: auto;\n  background-color: #fff;\n  overflow: hidden;\n}\n");
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
} ; var $g = '', $_temp, $p = '', src = $$.src, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryr:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryr:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryr:b" class="_zs_gallery___test___pro_login-demo_-demo"><div mxa="_zs_galleryr:c" class="_zs_gallery___test___pro_login-demo_-login-wrapper"><iframe src="';
    $line = 5;
    $art = '=src';
    ;
    $p += ($expr = '<%=src%>', $e(src)) + '" frameborder="0" width="100%" height="340" allowtransparency="true" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div></div><div mxa="_zs_galleryr:d" class="clearfix"><div mxa="_zs_galleryr:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryr:_" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryr:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryr:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;iframe src="&#123;&#123;=src&#125;&#125;" \n    frameborder="0" \n    width="100%" \n    height="400" \n    allowtransparency="true" \n    scrolling="no" \n    marginheight="0" \n    marginwidth="0" \n    border="0"&gt;&lt;/iframe&gt;</pre></div><div mxa="_zs_galleryr:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryr:b" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryr:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 40;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryr:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        // 登陆成功回跳页面\n        let forward = window.location.origin + \'/indexbp.html\';\n        let params = [\n            \'redirectURL=\' + encodeURIComponent(forward),\n            \'style=mini\',\n            \'css_style=dingxiang\', //css_style为主站那边给定的样式约定值\n            \'full_redirect=true\',\n            \'newMini2=true\',\n            \'enup=0\',\n            \'qrlogin=1\',\n            \'keyLogin=true\'\n        ]\n        let taobaoHost = !!~window.location.host.indexOf(\'daily\') ? \'login.daily.taobao.net\' : \'login.taobao.com\';\n        let src = \'https://\' + taobaoHost + \'/member/login.jhtml?\' + params.join(\'&\');\n\n        this.updater.digest(&#123;\n            src\n        &#125;);\n\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/login-demo.html';
    throw msg;
} return $p; },
    render: function () {
        // 登陆成功回跳页面
        var forward = window.location.origin + '/indexbp.html';
        var params = [
            'redirectURL=' + encodeURIComponent(forward),
            'style=mini',
            'css_style=dingxiang',
            'full_redirect=true',
            'newMini2=true',
            'enup=0',
            'qrlogin=1',
            'keyLogin=true'
        ];
        var taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
        var src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');
        this.updater.digest({
            src: src
        });
    }
});

});