/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/examples/2",["magix","examples/example","mx-gtip/index","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,GTip,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var GTip = require("mx-gtip/index");
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
    $p += '<div mxa="_zs_gallerycN:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerycN:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20"><span class="color-9">以下示例：</span>gtip(msg [, options])，singleton = false</div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show1()" class="link-brand">error提示，手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show2()" class="link-brand">warn提示，手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show3()" class="link-brand">highlight提示，手动关闭</a></div></div><div mxa="_zs_gallerycN:a" class="clearfix"><div mxa="_zs_gallerycN:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_gallerycN:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycN:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycN:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="show1()" class="link-brand"&gt;error提示，手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show2()" class="link-brand"&gt;warn提示，手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show3()" class="link-brand"&gt;highlight提示，手动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_gallerycN:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerycN:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycN:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycN:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet GTip = require(\'@../../mx-gtip/index\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show1&lt;click&gt;\'()&#123;\n        this.gtip(\'error提示，手动关闭\', &#123;\n            type: \'error\',\n            singleton: false,\n            styles: &#123;\n                width: \'auto\',\n                top: \'80px\',\n                right: \'40px\',\n                left: \'auto\',\n                borderRadius: \'8px\'\n            &#125;\n        &#125;);\n    &#125;,\n    \'show2&lt;click&gt;\'()&#123;\n        this.gtip(\'warn提示，手动关闭\', &#123;\n            type: \'warn\',\n            singleton: false,\n            styles: &#123;\n                width: \'auto\',\n                top: \'160px\',\n                right: \'40px\',\n                left: \'auto\',\n                borderRadius: \'8px\'\n            &#125;\n        &#125;);\n    &#125;,\n    \'show3&lt;click&gt;\'()&#123;\n        this.gtip(\'highlight提示，手动关闭\', &#123;\n            type: \'highlight\',\n            singleton: false,\n            styles: &#123;\n                width: \'auto\',\n                top: \'240px\',\n                right: \'40px\',\n                left: \'auto\'\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/examples/2.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        this.updater.digest();
    },
    'show1<click>': function () {
        this.gtip('error提示，手动关闭', {
            type: 'error',
            singleton: false,
            styles: {
                width: 'auto',
                top: '80px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show2<click>': function () {
        this.gtip('warn提示，手动关闭', {
            type: 'warn',
            singleton: false,
            styles: {
                width: 'auto',
                top: '160px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show3<click>': function () {
        this.gtip('highlight提示，手动关闭', {
            type: 'highlight',
            singleton: false,
            styles: {
                width: 'auto',
                top: '240px',
                right: '40px',
                left: 'auto'
            }
        });
    }
});

});