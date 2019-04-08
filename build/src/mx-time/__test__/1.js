/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', time = $$.time, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryeH:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryeH:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryeH:_" class="mb15 lh22"><div class="color-9">下列三种写法等价，时分秒均可选：</div><div class="pl10">types=""</div><div class="pl10">types="all"</div><div class="pl10">types="hour,minute,second"</div></div><div mxa="_zs_galleryeH:b" class="mb20"><span mxs="_zs_galleryeH:a" class="color-9">当前时间：</span>';
    $line = 11;
    $art = '=time';
    ;
    $p += ($expr = '<%=time%>', $e(time)) + '</div><div class="w120" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_time" mx-change="' + $viewId + 'change()" mx-view="mx-time/index?time=';
    $line = 15;
    $art = '=time';
    ;
    $p += ($expr = '<%!$eu(time)%>', $eu(time)) + '"></div></div><div mxa="_zs_galleryeH:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeH:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryeH:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryeH:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="all"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="hour,minute,second"\n    mx-change="change()" /&gt;\n        </pre></div><div mxa="_zs_galleryeH:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeH:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryeH:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryeH:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@1.html\',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    \'change&lt;change&gt;\'(e)&#123;\n        // e.time：当前时间\n    &#125;\n&#125;);\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            time: '10:10:10'
        });
    },
    'change<change>': function (e) {
        // e.time：当前时间
        this.updater.digest({
            time: e.time
        });
    }
});

});