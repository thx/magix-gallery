/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/examples/22",["magix","examples/example","moment","$","../rangepicker","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../rangepicker");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', start = $$.start, end = $$.end, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery(:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallery(:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallery(:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22">至少选择3天，至多选择10天</div></div><div class="w240" , mx-view="mx-calendar/rangepicker?minGap=3&maxGap=10&start=';
    $line = 10;
    $art = '=start';
    ;
    $p += ($expr = '<%!$eu(start)%>', $eu(start)) + '&end=';
    $line = 11;
    $art = '=end';
    ;
    $p += ($expr = '<%!$eu(end)%>', $eu(end)) + '&shortkeys=';
    $line = 12;
    $art = '@[\n                \'dynamicStart15\',\n                \'dynamicStart30\',\n                \'dynamicStart60\',\n                \'dynamicStart90\',\n                \'dynamicEndThisMonth\',\n                \'dynamicEndNextMonth\'\n            ]';
    ;
    $p += ($expr = '<%@[        \'dynamicStart15\',        \'dynamicStart30\',        \'dynamicStart60\',        \'dynamicStart90\',        \'dynamicEndThisMonth\',        \'dynamicEndNextMonth\'    ]%>', $i($$ref, ['dynamicStart15', 'dynamicStart30', 'dynamicStart60', 'dynamicStart90', 'dynamicEndThisMonth', 'dynamicEndNextMonth'])) + '"></div></div><div mxa="_zs_gallery(:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery(:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery(:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 25;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery(:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.rangepicker class="w240"\n    min-gap="3",\n    max-gap="10"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    shortkeys="&#123;&#123;@[\n        \'dynamicStart15\',\n        \'dynamicStart30\',\n        \'dynamicStart60\',\n        \'dynamicStart90\',\n        \'dynamicEndThisMonth\',\n        \'dynamicEndNextMonth\'\n    ]&#125;&#125;"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/examples/22.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            start: Moment().format(Formater),
            end: Moment().add(5, 'days').format(Formater)
        });
    }
});

});