/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/13",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Moment,$*/
require("../rangepicker");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallery0:_" class="_zs_galleryh"><div mxs="_zs_gallery0:_" class="_zs_galleryk"><div class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>历史选中结果不在可选范围内</div><div>重新选择时只能在新范围内选择</div></div></div><div class="w200" mx-view="mx-calendar/rangepicker?min=2018-08-17&start=2018-08-06&end=2018-08-10&shortcuts=false"></div></div><div mxa="_zs_gallery0:a" class="_zs_galleryl"><div mxs="_zs_gallery0:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery0:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-calendar.rangepicker class="w200"   \n    min="2018-08-17"\n    start="2018-08-06"\n    end="2018-08-10"\n    shortcuts="false"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});