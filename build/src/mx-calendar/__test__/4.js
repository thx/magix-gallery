/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/4",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, today = $$.today, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryL:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryL:a" class="_zs_gallery___test___base_-eg-content"><div mxa="_zs_galleryL:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?timeType=all&selected=';
    $line = 7;
    $art = '=today';
    ;
    $p += '' + ($expr = '<%!$eu(today)%>', $eu(today)) + '%2018%3A08%3A20"></div></div><div class="w200" mx-view="mx-calendar/datepicker?timeType=hour%2Cminute%2Csecond&selected=';
    $line = 12;
    $art = '=today';
    ;
    $p += '' + ($expr = '<%!$eu(today)%>', $eu(today)) + '%2018%3A08%3A20"></div></div><div mxa="_zs_galleryL:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryL:_" class="_zs_gallery___test___base_-eg-title">可选择时分秒，"all"="hour,minute,second"</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryL:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryL:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    time-type="all"\n    selected="&#123;&#123;=today&#125;&#125; 18:08:20"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    time-type="hour,minute,second"\n    selected="&#123;&#123;=today&#125;&#125; 18:08:20"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        var formater = 'YYYY-MM-DD';
        this.updater.digest({
            today: Moment().add(2, 'days').format(formater)
        });
    }
});

});