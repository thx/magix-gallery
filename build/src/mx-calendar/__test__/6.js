/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/6",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', vs = $$.vs, start = $$.start, end = $$.end, vsenable = $$.vsenable, keys = $$.keys, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery9:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery9:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery9:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>日历面板右对齐（结束日期）</div><div>自定义快捷日期，快捷日期会根据可选范围进行修正</div><div>可对比，关闭对比选择时间段</div><div>事件处理</div></div></div><div mxa="_zs_gallery9:b" class="mb20"><span mxs="_zs_gallery9:a" class="color-9">当前结果：</span>';
    $line = 14;
    $art = 'if vs';
    ;
    $p += '';
    $expr = '<%if (vs) {%>';
    if (vs) {
        ;
        $p += '<span mxa="_zs_gallery9:c" class="color-brand mr5">';
        $line = 15;
        $art = '=start';
        ;
        $p += '' + ($expr = '<%=start%>', $e(start)) + '</span><span mxs="_zs_gallery9:b" class="mr5">对比</span><span mxa="_zs_gallery9:d" class="color-brand-vs">';
        $line = 17;
        $art = '=end';
        ;
        $p += '' + ($expr = '<%=end%>', $e(end)) + '</span>';
        $line = 18;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span mxa="_zs_gallery9:e" class="mr5">';
        $line = 19;
        $art = '=start';
        ;
        $p += '' + ($expr = '<%=start%>', $e(start)) + '</span><span mxs="_zs_gallery9:c" class="mr5">至</span><span>';
        $line = 21;
        $art = '=end';
        ;
        $p += '' + ($expr = '<%=end%>', $e(end)) + '</span>';
        $line = 22;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallery9:f" class="clearfix"><div mxv mxa="_zs_gallery9:g" class="fl mr10"><div mxv="keys" class="w220" mx-change="' + $viewId + 'changeInfo()" mx-view="mx-calendar/rangepicker?align=right&vsenable=';
    $line = 28;
    $art = '=vsenable';
    ;
    $p += '' + ($expr = '<%!$eu(vsenable)%>', $eu(vsenable)) + '&vs=';
    $line = 29;
    $art = '=vs';
    ;
    $p += '' + ($expr = '<%!$eu(vs)%>', $eu(vs)) + '&start=';
    $line = 30;
    $art = '=start';
    ;
    $p += '' + ($expr = '<%!$eu(start)%>', $eu(start)) + '&end=';
    $line = 31;
    $art = '=end';
    ;
    $p += '' + ($expr = '<%!$eu(end)%>', $eu(end)) + '&shortkeys=';
    $line = 32;
    $art = '@keys';
    ;
    $p += '' + ($expr = '<%@keys%>', $i($$ref, keys)) + '"></div></div><div mxs="_zs_gallery9:d" class="fl"><a href="javascript:;" class="btn btn-brand" mx-click="' + $viewId + 'changeShortkeys()">改变快捷方式</a></div></div></div><div mxa="_zs_gallery9:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery9:e" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery9:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery9:f" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    align="right"\n    vsenable="&#123;&#123;=vsenable&#125;&#125;"\n    vs="&#123;&#123;=vs&#125;&#125;"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    shortkeys="&#123;&#123;@keys&#125;&#125;"\n    mx-change="changeInfo()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeShortkeys()"&gt;改变快捷方式&lt;/a&gt;</pre></div><div mxa="_zs_gallery9:j" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery9:g" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 62;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery9:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 64;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery9:f" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            vsenable: true,\n            vs: true,\n            start: Moment().subtract(1, \'days\').format(Formater),\n            end: Moment().add(1, \'days\').format(Formater),\n            keys: [\n                \'today\',\n                \'yesterday\',\n                \'preWeekMon\',\n                \'passed12\',\n                \'forever\'\n            ]\n        &#125;);\n    &#125;,\n    \'changeInfo&lt;change&gt;\'(event) &#123;\n        let data = this.updater.get();\n        // event.dates.startStr：开始日期\n        // event.dates.endStr：结束日期，不限时未文案不限\n        // event.vs：是否对比\n        let dates = event.dates,\n            vs = event.vs;\n        this.updater.digest(&#123;\n            vs: vs,\n            start: dates.startStr,\n            end: dates.endStr\n        &#125;);\n    &#125;,\n    \'changeShortkeys&lt;click&gt;\' (event) &#123;\n        this.updater.digest(&#123;\n            keys: [\n                \'today\',\n                \'yesterday\',\n                \'passed7\'\n            ]\n        &#125;);\n    &#125;,\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            vsenable: true,
            vs: true,
            start: Moment().subtract(1, 'days').format(Formater),
            end: Moment().add(1, 'days').format(Formater),
            keys: [
                'today',
                'yesterday',
                'preWeekMon',
                'passed12',
                'forever'
            ]
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
    },
    'changeShortkeys<click>': function (event) {
        this.updater.digest({
            keys: [
                'today',
                'yesterday',
                'passed7'
            ]
        });
    }
});

});