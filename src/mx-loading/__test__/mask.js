/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/mask",["magix","../mask","__test__/hl"],(require,exports,module)=>{
/*Magix,MLoading*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var MLoading = require("../mask");
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
} ; var $g = '', $_temp, $p = '', count = $$.count; var $expr, $art, $line; try {
    $p += '<h2 mxs="_A:_">mx-loading</h2><h3 mxs="_A:a">mask mixin</h3><div mxa="_A:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><p mxs="_A:b">loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p mxs="_A:c">通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p mxs="_A:d">为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mxa="_A:a" class="__mx-style_index_-mt10 __mx-style_index_-mb10">第' + ($expr = '<%=count%>', $e(count)) + '次渲染页面</p><button mxs="_A:e" mx-click="' + $viewId + 'refresh()" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mt10">点此按钮2s后重新渲染当前view</button></div><div mxs="_A:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;p class="mt10 mb10"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click="refresh()" class="btn btn-brand mt10"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet MLoading = require(\'app/gallery/loading/mask\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@mask.html\',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    \'refresh&lt;click&gt;\' () {\n        this.render();\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/mask.html';
    throw msg;
} return $p; },
    mixins: [MLoading],
    init: function () {
        this.count = 1;
    },
    render: function () {
        var _this = this;
        var me = this;
        setTimeout(me.wrapAsync(function () {
            me.updater.digest({
                count: _this.count++
            });
        }), 2e3);
    },
    'refresh<click>': function () {
        this.render();
    }
});

});