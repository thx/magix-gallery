/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/27",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_ua_","._zs_gallery_mx-effects_ua_-chrome-wrapper {\n  width: 280px;\n  background-color: var(--color-brand);\n  background-image: linear-gradient(to right, var(--color-brand), var(--btn-brand-gradient));\n  padding: 20px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-effects_ua_-chrome-wrapper ._zs_gallery_mx-effects_ua_-chrome-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', show2 = $$.show2, title2 = $$.title2, tip2 = $$.tip2, show1 = $$.show1, title1 = $$.title1, tip1 = $$.tip1, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybN:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerybN:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerybN:_" class="mb20 clearfix"><div class="fl color-9">说明：</div><div class="fl"><div>组件没有做兼容性测试，仅在chrome下开发测试，提供内置的浏览器升级提示组件</div><div>自动判断当前浏览器 + 版本，非chrome内核73以上版本出现以下提示框</div></div></div><div mxa="_zs_gallerybN:b" class="clearfix">';
    $line = 11;
    $art = 'if show2';
    ;
    $expr = '<%if (show2) {%>';
    if (show2) {
        ;
        $p += '<div mxa="_zs_gallerybN:c" class="_zs_gallery_mx-effects_ua_-chrome-wrapper fl mr40"><div mxa="_zs_gallerybN:d" class="color-f mb10"><i mxs="_zs_gallerybN:a" class="mc-iconfont _zs_gallery_mx-effects_ua_-chrome-icon">&#xe631;</i><span mxa="_zs_gallerybN:e" class="fontsize-18">';
        $line = 15;
        $art = '=title2';
        ;
        $p += ($expr = '<%=title2%>', $e(title2)) + '</span></div><div mxa="_zs_gallerybN:f" class="mb20 color-f">';
        $line = 17;
        $art = '=tip2';
        ;
        $p += ($expr = '<%=tip2%>', $e(tip2)) + '</div><div mxs="_zs_gallerybN:b" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="' + $viewId + 'close({id:2})">关闭</a></div></div>';
        $line = 23;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 24;
    $art = 'if show1';
    ;
    $expr = '<%if (show1) {%>';
    if (show1) {
        ;
        $p += '<div mxa="_zs_gallerybN:g" class="_zs_gallery_mx-effects_ua_-chrome-wrapper fl"><div mxa="_zs_gallerybN:h" class="color-f mb10"><i mxs="_zs_gallerybN:a" class="mc-iconfont _zs_gallery_mx-effects_ua_-chrome-icon">&#xe631;</i><span mxa="_zs_gallerybN:i" class="fontsize-18">';
        $line = 28;
        $art = '=title1';
        ;
        $p += ($expr = '<%=title1%>', $e(title1)) + '</span></div><div mxa="_zs_gallerybN:j" class="mb20 color-f">';
        $line = 30;
        $art = '=tip1';
        ;
        $p += ($expr = '<%=tip1%>', $e(tip1)) + '</div><div mxs="_zs_gallerybN:c" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="' + $viewId + 'close({id:1})">关闭</a></div></div>';
        $line = 36;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerybN:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybN:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybN:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybN:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.ua /&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/27.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            show1: true,
            title1: 'Chrome升级提示',
            tip1: '系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。',
            show2: true,
            title2: '浏览器检测提示',
            tip2: '系统检测到您当前使用的是非Chrome浏览器，如果该浏览器在产品性能和体验上存在问题，请下载chrome高级版。'
        });
    },
    'close<click>': function (event) {
        var id = event.params.id;
        this.updater.digest((_a = {},
            _a["show" + id] = false,
            _a));
        var _a;
    }
});

});