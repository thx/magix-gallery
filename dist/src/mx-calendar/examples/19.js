/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/examples/19",["magix","examples/example","moment","$","../datepicker","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../datepicker");
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
} ; var $g = '', $_temp, $p = '', today = $$.today, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery%:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallery%:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallery%:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>禁止选择</div><div class="w200" mx-view="mx-calendar/datepicker?selected=';
    $line = 8;
    $art = '=today';
    ;
    $p += ($expr = '<%!$eu(today)%>', $eu(today)) + '&disabled=true"></div></div><div mxa="_zs_gallery%:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery%:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery%:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery%:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    selected="&#123;&#123;=today&#125;&#125;"\n    disabled="true"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/examples/19.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            today: Moment().format(Formater)
        });
    }
});

});