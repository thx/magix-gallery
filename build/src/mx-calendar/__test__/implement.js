/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/implement",["magix","$","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-calendar___test___implement_","._zs_gallery_mx-calendar___test___implement_-wrapper {\n  position: relative;\n  width: 480px;\n  height: 330px;\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n}\n._zs_gallery_mx-calendar___test___implement_-wrapper ._zs_gallery_mx-calendar___test___implement_-content {\n  position: absolute;\n  top: 0;\n  left: -10px;\n  width: 520px;\n}\n");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery}:_" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88"></div><div mxs="_zs_gallery}:a" class="lh28">目前日历组件的实现方案是日历面板在组件节点内，而没有采用追加到body的方式</div><div mxs="_zs_gallery}:b" class="lh28">1. 当前这种实现方案存在的问题：</div><div mxs="_zs_gallery}:c" class="lh28 pl15"><div>a. 日历组件的父节点设置overflow:hidden;的话，日历面板无法显示</div><div>b. 浮层中使用日历组件时，如果设置中间区域滚动，日历节点在最后的话，日历面板会增加文档内容长度</div></div><div mxs="_zs_gallery}:d" class="lh28">2. 日历面板追加到body的话会存在如下问题：</div><div mxs="_zs_gallery}:e" class="lh28 pl15 mb10"><div>a. 只要日历的父元素是可滚动的，则滚动父元素时，定位会出错，异常情况如下：</div><div class="_zs_gallery_mx-calendar___test___implement_-wrapper"><div class="_zs_gallery_mx-calendar___test___implement_-content"><img src="//img.alicdn.com/tfs/TB1gjaVIH9YBuNjy0FgXXcxcXXa-624-440.gif"></div></div></div><div mxs="_zs_gallery}:f" class="lh28">结合妈妈这边的业务场景考虑，浮层的使用场景会比较多。</div><div mxs="_zs_gallery}:g" class="lh28">方案2的问题可以通过组件内增加滚动节点配置的方式解决，但是这样就得在所有有滚动的场景下配置，开发体验会比较差。</div><div mxs="_zs_gallery}:h" class="lh28">综合考虑下来，采用方案1实现。</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/implement.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});