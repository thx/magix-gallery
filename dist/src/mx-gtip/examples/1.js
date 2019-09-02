/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/examples/1",["magix","examples/example","mx-gtip/index","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallerycE:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerycE:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20"><div class="mb10"><span class="color-9">以下示例：</span>使用gtip(msg [, options])，<span class="color-brand">只保留一个实例</span></div><pre>\n{\n    msg: \'提示内容\',\n    options: {\n        timeout: \'延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭\', \n        type: \'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示；common：默认黑底透明度提示\',\n        styles: { //驼峰，直接覆盖样式，默认内容如下：\n            position: \'fixed\',\n            top: \'0px\',\n            left: \'0px\',\n            width: \'100%\'  \n        },\n        singleton: 是否为单实例，默认true，singleton=false的可与其他gtip共存，否则当前view只有一个gtip\n    }\n}\n            </pre></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show1()" class="link-brand">默认顶通，手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show2()" class="link-brand">error顶通（错误提示），手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show3()" class="link-brand">warn顶通（警告），1s自动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show4()" class="link-brand">highlight顶通（品牌色强调），手动关闭</a></div></div><div mxa="_zs_gallerycE:a" class="clearfix"><div mxa="_zs_gallerycE:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxs="_zs_gallerycE:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycE:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 40;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="show1()" class="link-brand"&gt;默认顶通，手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show2()" class="link-brand"&gt;error顶通（错误提示），手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show3()" class="link-brand"&gt;warn顶通（警告），1s自动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show4()" class="link-brand"&gt;highlight顶通（品牌色强调），手动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_gallerycE:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2"><div mxs="_zs_gallerycE:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycE:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 57;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet GTip = require(\'@../../mx-gtip/index\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show1&lt;click&gt;\'()&#123;\n        this.gtip(\'默认顶通，手动关闭\');\n    &#125;,\n    \'show2&lt;click&gt;\'()&#123;\n        this.gtip(\'error顶通（错误提示），手动关闭\', &#123;\n            type: \'error\'\n        &#125;);\n    &#125;,\n    \'show3&lt;click&gt;\'()&#123;\n        this.gtip(\'warn顶通（警告），1s自动关闭\', &#123;\n            type: \'warn\',\n            timeout: 1000,\n            styles: &#123;\n                width: \'auto\',\n                top: \'80px\',\n                right: \'40px\',\n                left: \'auto\',\n                borderRadius: \'8px\'\n            &#125;\n        &#125;);\n    &#125;,\n    \'show4&lt;click&gt;\'()&#123;\n        this.gtip(\'highlight顶通（品牌色强调），手动关闭\', &#123;\n            type: \'highlight\'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/examples/1.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        this.updater.digest();
    },
    'show1<click>': function () {
        this.gtip('默认顶通，手动关闭');
    },
    'show2<click>': function () {
        this.gtip('error顶通（错误提示），手动关闭', {
            type: 'error'
        });
    },
    'show3<click>': function () {
        this.gtip('warn顶通（警告），1s自动关闭', {
            type: 'warn',
            timeout: 1000,
            styles: {
                width: 'auto',
                top: '80px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show4<click>': function () {
        this.gtip('highlight顶通（品牌色强调），手动关闭', {
            type: 'highlight'
        });
    }
});

});