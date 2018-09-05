/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', today = $$.today, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery3:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallery3:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery3:_" class="mb20"><span class="color-9">以下示例：</span>可选择时分秒，"all"="hour,minute,second"</div><div mxa="_zs_gallery3:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?timeType=all&selected=';
    $line = 12;
    $art = '=today';
    ;
    $p += '' + ($expr = '<%!$eu(today)%>', $eu(today)) + '%2018%3A08%3A20"></div></div><div class="w200" mx-view="mx-calendar/datepicker?timeType=hour%2Cminute%2Csecond&selected=';
    $line = 17;
    $art = '=today';
    ;
    $p += '' + ($expr = '<%!$eu(today)%>', $eu(today)) + '%2018%3A08%3A20"></div></div><div mxa="_zs_gallery3:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery3:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery3:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery3:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
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