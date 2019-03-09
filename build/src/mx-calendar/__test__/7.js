/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/7",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../rangepicker");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
var Formater = 'YYYY-MM-DD';
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
} ; var $g = '', $_temp, $p = '', vs = $$.vs, start = $$.start, end = $$.end, max = $$.max, min = $$.min, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery$:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallery$:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery$:_" class="mb20"><span class="color-9">以下示例：</span><span>可对比，关闭对比选择单天</span></div><div mxa="_zs_gallery$:b" class="mb20"><span mxs="_zs_gallery$:a" class="color-9">当前结果：</span>';
    $line = 9;
    $art = 'if vs';
    ;
    $expr = '<%if (vs) {%>';
    if (vs) {
        ;
        $p += '<span mxa="_zs_gallery$:c" class="color-brand mr5">';
        $line = 10;
        $art = '=start';
        ;
        $p += ($expr = '<%=start%>', $e(start)) + '</span><span mxs="_zs_gallery$:b" class="mr5">对比</span><span mxa="_zs_gallery$:d" class="color-brand-vs">';
        $line = 12;
        $art = '=end';
        ;
        $p += ($expr = '<%=end%>', $e(end)) + '</span>';
        $line = 13;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span mxa="_zs_gallery$:e" class="mr5">';
        $line = 14;
        $art = '=start';
        ;
        $p += ($expr = '<%=start%>', $e(start)) + '</span>';
        $line = 15;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="w220" mx-change="' + $viewId + 'changeInfo()" mx-view="mx-calendar/rangepicker?vsenable=true&vs=';
    $line = 19;
    $art = '=vs';
    ;
    $p += ($expr = '<%!$eu(vs)%>', $eu(vs)) + '&single=true&start=';
    $line = 21;
    $art = '=start';
    ;
    $p += ($expr = '<%!$eu(start)%>', $eu(start)) + '&end=';
    $line = 22;
    $art = '=end';
    ;
    $p += ($expr = '<%!$eu(end)%>', $eu(end)) + '&max=';
    $line = 23;
    $art = '=max';
    ;
    $p += ($expr = '<%!$eu(max)%>', $eu(max)) + '&min=';
    $line = 24;
    $art = '=min';
    ;
    $p += ($expr = '<%!$eu(min)%>', $eu(min)) + '"></div></div><div mxa="_zs_gallery$:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery$:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery$:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery$:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    vsenable="true"\n    vs="&#123;&#123;=vs&#125;&#125;"\n    single="true"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    max="&#123;&#123;=max&#125;&#125;"\n    min="&#123;&#123;=min&#125;&#125;"\n    mx-change="changeInfo()"/&gt;</pre></div><div mxa="_zs_gallery$:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery$:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery$:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 49;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery$:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            vsenable: true,\n            vs: true,\n            start: Moment().subtract(1, \'days\').format(Formater),\n            end: Moment().add(1, \'days\').format(Formater),\n            min: Moment().subtract(12, \'days\').format(Formater),\n            max: Moment().add(12, \'days\').format(Formater)\n        &#125;);\n    &#125;,\n    \'changeInfo&lt;change&gt;\'(event) &#123;\n        let data = this.updater.get();\n        // event.dates.startStr：开始日期\n        // event.dates.endStr：结束日期，不限时未文案不限\n        // event.vs：是否对比\n        let dates = event.dates,\n            vs = event.vs;\n        this.updater.digest(&#123;\n            vs: vs,\n            start: dates.startStr,\n            end: dates.endStr\n        &#125;);\n    &#125;,\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            vsenable: true,
            vs: true,
            start: Moment().subtract(1, 'days').format(Formater),
            end: Moment().add(1, 'days').format(Formater),
            min: Moment().subtract(12, 'days').format(Formater),
            max: Moment().add(12, 'days').format(Formater)
        });
    },
    'changeInfo<change>': function (event) {
        var data = this.updater.get();
        // event.dates.startStr：开始日期
        // event.dates.endStr：结束日期，不限时未文案不限
        // event.vs：是否对比
        var dates = event.dates, vs = event.vs;
        this.updater.digest({
            vs: vs,
            start: dates.startStr,
            end: dates.endStr
        });
    }
});

});