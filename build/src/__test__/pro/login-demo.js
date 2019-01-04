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
Magix.applyStyle("_zs_galleryf","._zs_galleryaj{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryak{padding:40px 0;background-color:#fafafa}._zs_galleryak ._zs_galleryal{width:350px;height:340px;margin:auto;background-color:#fff;overflow:hidden}");
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
} ; var $g = '', $_temp, $p = '', src = $$.src, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryr:_" class="_zs_galleryh"><div mxa="_zs_galleryr:a" class="_zs_galleryk"><div mxa="_zs_galleryr:b" class="_zs_galleryak"><div mxa="_zs_galleryr:c" class="_zs_galleryal"><iframe src="' + $e(src) + '" frameborder="0" width="100%" height="340" allowtransparency="true" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div></div><div mxa="_zs_galleryr:d" class="clearfix"><div mxa="_zs_galleryr:e" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryr:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryr:f" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryr:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;iframe src="&#123;&#123;=src&#125;&#125;" \n    frameborder="0" \n    width="100%" \n    height="400" \n    allowtransparency="true" \n    scrolling="no" \n    marginheight="0" \n    marginwidth="0" \n    border="0"&gt;&lt;/iframe&gt;</pre></div><div mxa="_zs_galleryr:g" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryr:b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryr:h" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryr:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        // 登陆成功回跳页面\n        let forward = window.location.origin + \'/indexbp.html\';\n        let params = [\n            \'redirectURL=\' + encodeURIComponent(forward),\n            \'style=mini\',\n            \'css_style=dingxiang\', //css_style为主站那边给定的样式约定值\n            \'full_redirect=true\',\n            \'newMini2=true\',\n            \'enup=0\',\n            \'qrlogin=1\',\n            \'keyLogin=true\'\n        ]\n        let taobaoHost = !!~window.location.host.indexOf(\'daily\') ? \'login.daily.taobao.net\' : \'login.taobao.com\';\n        let src = \'https://\' + taobaoHost + \'/member/login.jhtml?\' + params.join(\'&\');\n\n        this.updater.digest(&#123;\n            src\n        &#125;);\n\n    &#125;\n&#125;);</pre></div></div></div>'; return $p; },
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