/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', checked = $$.checked, disabled = $$.disabled, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery/:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery/:a" class="_zs_gallery___test___layout_-eg-content"><a mxs="_zs_gallery/:_" href="javascript:;" mx-click="' + $viewId + 'outerChange()" class="btn btn-brand mr20">切换状态</a><label mxv mxa="_zs_gallery/:b" class="mr20"><input name="test" value="2" mx-change="' + $viewId + 'innerChange()" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index?checked=';
    $line = 6;
    $art = '=checked';
    ;
    $p += ($expr = '<%!$eu(checked)%>', $eu(checked)) + '&disabled=';
    $line = 7;
    $art = '=disabled';
    ;
    $p += ($expr = '<%!$eu(disabled)%>', $eu(disabled)) + '"/> 动态切换状态</label></div><div mxa="_zs_gallery/:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery/:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery/:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 16;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery/:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" mx-click="outerChange()" class="btn btn-brand mr20"&gt;切换状态&lt;/a&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="test" value="2" \n        view-checked="&#123;&#123;=checked&#125;&#125;" \n        view-disabled="&#123;&#123;=disabled&#125;&#125;"\n        mx-change="innerChange()"/&gt;\n    动态切换状态\n&lt;/label&gt;\n</pre></div><div mxa="_zs_gallery/:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery/:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery/:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery/:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            disabled: true,\n            checked: true\n        &#125;);\n    &#125;,\n    \'outerChange&lt;click&gt;\'() &#123;\n        let disabled = this.updater.get(\'disabled\'),\n            checked = this.updater.get(\'checked\');\n        this.updater.digest(&#123;\n            disabled: !disabled,\n            checked: !checked\n        &#125;);\n    &#125;,\n    \'innerChange&lt;change&gt;\'(e)&#123;\n        this.updater.digest(&#123;\n            checked: e.target.checked\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            disabled: true,
            checked: true
        });
    },
    'outerChange<click>': function () {
        var disabled = this.updater.get('disabled'), checked = this.updater.get('checked');
        this.updater.digest({
            disabled: !disabled,
            checked: !checked
        });
    },
    'innerChange<change>': function (e) {
        this.updater.digest({
            checked: e.target.checked
        });
    }
});

});