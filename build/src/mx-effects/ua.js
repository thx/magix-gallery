/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/ua",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_ua_","._zs_gallery_mx-effects_ua_-chrome-wrapper {\n  width: 280px;\n  background-color: var(--color-brand);\n  background-image: linear-gradient(to right, var(--color-brand), var(--btn-brand-gradient));\n  padding: 20px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-effects_ua_-chrome-wrapper ._zs_gallery_mx-effects_ua_-chrome-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', show = $$.show, title = $$.title, tip = $$.tip; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '<div mxa="_zs_gallerybR:_" class="_zs_gallery_mx-effects_ua_-chrome-wrapper"><div mxa="_zs_gallerybR:a" class="color-f mb10"><i mxs="_zs_gallerybR:_" class="mc-iconfont _zs_gallery_mx-effects_ua_-chrome-icon">&#xe631;</i><span mxa="_zs_gallerybR:b" class="fontsize-18">';
        $line = 5;
        $art = '=title';
        ;
        $p += ($expr = '<%=title%>', $e(title)) + '</span></div><div mxa="_zs_gallerybR:c" class="mb20 color-f">';
        $line = 7;
        $art = '=tip';
        ;
        $p += ($expr = '<%=tip%>', $e(tip)) + '</div><div mxs="_zs_gallerybR:a" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="' + $viewId + 'close()">关闭</a></div></div>';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/ua.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var explorer = navigator.userAgent.toLocaleLowerCase();
        var isChrome = (explorer.indexOf('chrome') > -1);
        var config = {};
        if (isChrome) {
            var expr = /(chrome)\/([\w.]+)/;
            var matches = expr.exec(explorer);
            var ver = matches[2].slice(0, 2);
            if (+ver < 73) {
                config = {
                    show: true,
                    title: 'Chrome升级提示',
                    tip: '系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。'
                };
            }
            else {
                config = {
                    show: false
                };
            }
        }
        else {
            config = {
                show: true,
                title: '浏览器检测提示',
                tip: '系统检测到您当前使用的是非Chrome浏览器，如果该浏览器在产品性能和体验上存在问题，请下载chrome高级版。'
            };
        }
        that.updater.digest(config);
    },
    'close<click>': function () {
        this.updater.digest({
            show: false
        });
    }
});

});