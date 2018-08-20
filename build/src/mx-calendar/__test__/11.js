/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/11",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../rangepicker");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryL:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryL:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryL:_" class="mb20"><div class="mb5">禁止选择开始日期或者结束日期</div><div class="mb5">1. 开始日期禁止，结束日期最小可选为开始日期；快捷操作只支持根据开始日期动态计算的；</div><div>2. 结束日期禁止，开始日期最大可选为结束日期；快捷操作都禁止；</div></div><div mxa="_zs_galleryL:b" class="mb20"><div class="w200" mx-view="mx-calendar/rangepicker?shortkeys=';
    $line = 10;
    $art = '@[\'passed10\', \'dynamicStart15\', \'forever\']';
    ;
    $p += '' + ($expr = '<%@[\'passed10\',\'dynamicStart15\',\'forever\']%>', $i(['passed10', 'dynamicStart15', 'forever'])) + '&startDisabled=true"></div></div><div mxs="_zs_galleryL:a" class="w200" mx-view="mx-calendar/rangepicker?endDisabled=true"></div></div><div mxa="_zs_galleryL:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryL:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryL:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryL:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 过滤了passed10 --&gt;\n&lt;mx-calendar.rangepicker class="w200"\n    shortkeys="&#123;&#123;@[\n        \'passed10\', \n        \'dynamicStart15\', \n        \'forever\'\n    ]&#125;&#125;"\n    start-disabled="true"/&gt;\n\n&lt;mx-calendar.rangepicker class="w200"\n    end-disabled="true"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/11.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});