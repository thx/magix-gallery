/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/5",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../datepicker");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, yesterday = $$.yesterday, tomorrow = $$.tomorrow, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryS:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryS:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryS:_" class="mb20"><div class="mb5">根据可选范围对默认值进行修正</div><div class="mb5">1. 未配置默认选中项且有min时，默认取min和今天中的较大值</div><div>2. 未配置默认选中项且有max时，默认取max和今天中的较小值</div></div><div mxa="_zs_galleryS:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min=';
    $line = 10;
    $art = '=yesterday';
    ;
    $p += '' + ($expr = '<%!$eu(yesterday)%>', $eu(yesterday)) + '"></div></div><div mxa="_zs_galleryS:c" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min=';
    $line = 14;
    $art = '=tomorrow';
    ;
    $p += '' + ($expr = '<%!$eu(tomorrow)%>', $eu(tomorrow)) + '"></div></div><div mxa="_zs_galleryS:d" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?max=';
    $line = 18;
    $art = '=yesterday';
    ;
    $p += '' + ($expr = '<%!$eu(yesterday)%>', $eu(yesterday)) + '"></div></div><div class="w200" mx-view="mx-calendar/datepicker?max=';
    $line = 21;
    $art = '=tomorrow';
    ;
    $p += '' + ($expr = '<%!$eu(tomorrow)%>', $eu(tomorrow)) + '"></div></div><div mxa="_zs_galleryS:e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryS:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryS:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryS:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=tomorrow&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=tomorrow&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        var formater = 'YYYY-MM-DD';
        this.updater.digest({
            today: Moment().format(formater),
            yesterday: Moment().subtract(1, 'days').format(formater),
            tomorrow: Moment().add(1, 'days').format(formater)
        });
    }
});

});