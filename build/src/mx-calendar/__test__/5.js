/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', yesterday = $$.yesterday, tomorrow = $$.tomorrow, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery4:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallery4:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery4:_" class="mb20"><div class="mb5">根据可选范围对默认值进行修正</div><div class="mb5">1. 未配置默认选中项且有min时，默认取min和今天中的较大值</div><div>2. 未配置默认选中项且有max时，默认取max和今天中的较小值</div></div><div mxa="_zs_gallery4:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min=';
    $line = 10;
    $art = '=yesterday';
    ;
    $p += '' + ($expr = '<%!$eu(yesterday)%>', $eu(yesterday)) + '"></div></div><div mxa="_zs_gallery4:c" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min=';
    $line = 14;
    $art = '=tomorrow';
    ;
    $p += '' + ($expr = '<%!$eu(tomorrow)%>', $eu(tomorrow)) + '"></div></div><div mxa="_zs_gallery4:d" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?max=';
    $line = 18;
    $art = '=yesterday';
    ;
    $p += '' + ($expr = '<%!$eu(yesterday)%>', $eu(yesterday)) + '"></div></div><div class="w200" mx-view="mx-calendar/datepicker?max=';
    $line = 21;
    $art = '=tomorrow';
    ;
    $p += '' + ($expr = '<%!$eu(tomorrow)%>', $eu(tomorrow)) + '"></div></div><div mxa="_zs_gallery4:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery4:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery4:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery4:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
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