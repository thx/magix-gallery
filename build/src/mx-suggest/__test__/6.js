/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
var Vframe = Magix.Vframe;
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
    $p += '<div mxa="_zs_galleryc(:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryc(:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryc(:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>动态更新提示数据</div><div>请求数据有延时，加loading</div></div></div><div id="';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test" mx-show="' + $viewId + 'update()" mx-view="mx-suggest/index"></div></div><div mxa="_zs_galleryc(:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc(:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc(:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n    &lt;mx-suggest \n        id="&#123;&#123;=viewId&#125;&#125;_test"\n        mx-show="update()"/&gt;</pre></div><div mxa="_zs_galleryc(:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc(:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc(:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    let Vframe = Magix.Vframe;\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            this.updater.digest(&#123;\n                viewId: this.id\n            &#125;);\n        &#125;,\n        \'update&lt;show&gt;\'(e) &#123;\n            // 当前输入框输入的值\n            let keyword = e.keyword;\n    \n            let instance = Vframe.get(this.id + \'_test\');\n            instance.invoke(\'showLoading\');\n            setTimeout(() => &#123;\n                let list = [1, 2, 3].map(text => &#123;\n                    return Magix.guid(\'dynamic_\') + keyword;\n                &#125;)\n                instance.invoke(\'update\', [list]);\n                instance.invoke(\'hideLoading\');\n            &#125;, 2000);\n        &#125;\n    &#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'update<show>': function (e) {
        // 当前输入框输入的值
        var keyword = e.keyword;
        var instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(function () {
            var list = [1, 2, 3].map(function (text) {
                return Magix.guid('dynamic_') + keyword;
            });
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1000);
    }
});

});