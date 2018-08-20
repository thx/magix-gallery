/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/9",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryW:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryW:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryW:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>不对比</div><div>快捷方式包含不限和动态计算的</div></div></div><div class="w200" mx-view="mx-calendar/rangepicker?start=2018-04-03&end=%E4%B8%8D%E9%99%90&shortkeys=';
    $line = 13;
    $art = '@[\n                \'dynamicStart15\',\n                \'dynamicStart30\',\n                \'dynamicStart60\',\n                \'dynamicStart90\',\n                \'dynamicEndThisMonth\',\n                \'dynamicEndNextMonth\',\n                \'forever\'\n            ]';
    ;
    $p += '' + ($expr = '<%@[\'dynamicStart15\',\'dynamicStart30\',\'dynamicStart60\',\'dynamicStart90\',\'dynamicEndThisMonth\',\'dynamicEndNextMonth\',\'forever\']%>', $i(['dynamicStart15', 'dynamicStart30', 'dynamicStart60', 'dynamicStart90', 'dynamicEndThisMonth', 'dynamicEndNextMonth', 'forever'])) + '"></div></div><div mxa="_zs_galleryW:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryW:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryW:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryW:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.rangepicker class="w200"\n    start="2018-04-03"\n    end="不限"\n    shortkeys="&#123;&#123;@[\n        \'dynamicStart15\',\n        \'dynamicStart30\',\n        \'dynamicStart60\',\n        \'dynamicStart90\',\n        \'dynamicEndThisMonth\',\n        \'dynamicEndNextMonth\',\n        \'forever\'\n    ]&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/9.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});