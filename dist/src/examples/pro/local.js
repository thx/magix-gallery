/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/local",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
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
    $p += '<div mxs="_zs_galleryv:_" class="pr20"><div class="mb20 lh22"><div>项目中&nbsp;<span class="color-brand">gallery-local</span>&nbsp;为当前项目提供的本地组件所在的目录，以下情况可在该目录下添加自己需要的组件进行处理：</div><div>1. 当前项目中通用的模块</div><div class="mb20">2. 通用组件不能满足项目需求时（不建议直接修改mx-gallery中的组件，否则下次更新时修改内容会被覆盖）</div><div>其他注意点：</div><div>1. 组件的本质也是magix view，跟其他页面开发没有区别</div><div>2. 该目录里面下文件夹统一以&nbsp;<span class="color-brand">lg-</span>&nbsp;为前缀，例如&nbsp;gallery-local&nbsp;中有&nbsp;lg-chart&nbsp;，使用时直接为<span class="color-brand">&lt;lg-chart/&gt;</span></div></div><pre class="tip-content mb20">\n- gallery-local\n    - lg-chart\n        index.ts\n        index.html\n        index.less\n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/local.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});