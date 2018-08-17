/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/1",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../datepicker");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Moment = require("moment");
var $ = require("$");
var Formater = 'YYYY-MM-DD';
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, selected = $$.selected, min = $$.min, max = $$.max, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryG:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryG:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryG:_" class="mb20"><span class="color-9">以下示例：</span><span>限制最大最小值 + 右对齐 + 提示文案前缀 + 事件处理</span></div><div mxa="_zs_galleryG:b" class="mb20"><span mxs="_zs_galleryG:a" class="color-9">当前日期：</span><span>';
    $line = 9;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%=selected%>', $e(selected)) + '</span></div><div mxa="_zs_galleryG:c" class="clearfix"><div class="w200 fl" mx-change="' + $viewId + 'select()" mx-view="mx-calendar/datepicker?min=';
    $line = 13;
    $art = '=min';
    ;
    $p += '' + ($expr = '<%!$eu(min)%>', $eu(min)) + '&max=';
    $line = 14;
    $art = '=max';
    ;
    $p += '' + ($expr = '<%!$eu(max)%>', $eu(max)) + '&align=right&prefix=%E6%88%AA%E6%AD%A2%E8%87%B3&selected=';
    $line = 17;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"></div><a mxs="_zs_galleryG:b" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="' + $viewId + 'changeDate()">修改时间</a></div></div><div mxa="_zs_galleryG:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryG:c" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryG:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryG:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.datepicker class="w200" \n    min="&#123;&#123;=min&#125;&#125;"\n    max="&#123;&#123;=max&#125;&#125;"\n    align="right"\n    prefix="截止至"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand ml20" mx-click="changeDate()"&gt;修改时间&lt;/a&gt;</pre></div><div mxa="_zs_galleryG:f" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryG:e" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryG:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 44;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryG:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Moment = require(\'moment\');\nlet $ = require(\'$\');\nlet Formater = \'YYYY-MM-DD\';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let formater = \'YYYY-MM-DD\';\n        this.updater.digest(&#123;\n            max: Moment().add(12, \'days\').format(Formater),\n            min: Moment().subtract(12, \'days\').format(Formater),\n            selected: Moment().add(2, \'days\').format(Formater)\n        &#125;);\n    &#125;,\n\n    \'changeDate&lt;click&gt;\'(event)&#123;\n        this.updater.digest(&#123;\n            selected: Moment().format(Formater)\n        &#125;)\n    &#125;,\n    \n    \'select&lt;change&gt;\' (event) &#123;\n        // event.date 当前选择日期\n        // event.time 时分秒\n        this.updater.digest(&#123;\n            selected: event.date\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            max: Moment().add(12, 'days').format(Formater),
            min: Moment().subtract(12, 'days').format(Formater),
            selected: Moment().add(2, 'days').format(Formater)
        });
    },
    'changeDate<click>': function (event) {
        this.updater.digest({
            selected: Moment().format(Formater)
        });
    },
    'select<change>': function (event) {
        // event.date 当前选择日期
        // event.time 时分秒
        this.updater.digest({
            selected: event.date
        });
    }
});

});