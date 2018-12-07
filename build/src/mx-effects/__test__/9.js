/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/9",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../progress");
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
} ; var $g = '', $_temp, $p = '', num1 = $$.num1, num2 = $$.num2, num3 = $$.num3, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya):_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya):a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya):_" class="pl40 mb20"><a href="javascript:;" mx-click="' + $viewId + 'add()" class="btn btn-brand">进度 +10</a></div><div mxa="_zs_gallerya):b" class="ml40 mt20"><div mx-view="mx-effects/progress?num=';
    $line = 8;
    $art = '=num1';
    ;
    $p += ($expr = '<%!$eu(num1)%>', $eu(num1)) + '&color=%23ffb400"></div></div><div mxa="_zs_gallerya):c" class="ml40 mt20"><div mx-view="mx-effects/progress?num=';
    $line = 13;
    $art = '=num2';
    ;
    $p += ($expr = '<%!$eu(num2)%>', $eu(num2)) + '&textPlacement=right&color=rgb%2881%2C%20163%2C%200%29"></div></div><div mxa="_zs_gallerya):d" class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num=';
    $line = 19;
    $art = '=num3';
    ;
    $p += ($expr = '<%!$eu(num3)%>', $eu(num3)) + '&textPlacement=bottom&color=rgba%2877%2C%20127%2C%20255%2C%200.3%29"></div></div></div><div mxa="_zs_gallerya):e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya):a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya):f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya):b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.progress\n    num="&#123;&#123;=num1&#125;&#125;" \n    color="#ffb400"/&gt;\n\n&lt;mx-effects.progress\n    num="&#123;&#123;=num2&#125;&#125;" \n    text-placement="right"\n    color="rgb(81, 163, 0)"/&gt;\n\n&lt;mx-effects.progress\n    num="&#123;&#123;=num3&#125;&#125;" \n    text-placement="bottom"\n    color="rgba(77, 127, 255, 0.3)"/&gt;</pre></div><div mxa="_zs_gallerya):g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya):c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya):h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya):b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            num1: 20,\n            num2: 40.3,\n            num3: 60.89\n        &#125;);\n    &#125;,\n    \'add&lt;click&gt;\'(e)&#123;\n        let data = this.updater.get();\n        this.updater.digest(&#123;\n            num1: data.num1 + 10,\n            num2: data.num2 + 10,\n            num3: data.num3 + 10\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/9.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            num1: 20,
            num2: 40.3,
            num3: 60.89
        });
    },
    'add<click>': function (e) {
        var data = this.updater.get();
        this.updater.digest({
            num1: data.num1 + 10,
            num2: data.num2 + 10,
            num3: data.num3 + 10
        });
    }
});

});