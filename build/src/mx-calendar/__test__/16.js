/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/16",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallery3:_" class="_zs_galleryh"><div mxa="_zs_gallery3:a" class="_zs_galleryk"><div mxs="_zs_gallery3:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>限制只可选择到月份</div><div class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-calendar/datepicker?min=2018-02&max=2018-10&dateType=year%2Cmonth&selected=' + $eu(selected) + '"></div></div><div mxa="_zs_gallery3:b" class="_zs_galleryl"><div mxs="_zs_gallery3:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery3:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery3:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    min="2018-02"\n    max="2018-10"\n    date-type="year,month"\n    selected="2018-05"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            selected: '2018-05'
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