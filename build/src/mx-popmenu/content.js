/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_galleryam","._zs_gallerykq{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykr{padding:8px 10px;overflow:auto}._zs_gallerykr ._zs_galleryks{padding:2px 0}._zs_gallerykr ._zs_galleryks ._zs_gallerykt{display:block;width:100%;padding:0 8px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;transition:all .25s}._zs_gallerykr ._zs_galleryks ._zs_gallerykt:hover{background-color:#f0f0f0}._zs_gallerykr ._zs_galleryks ._zs_gallerykt._zs_galleryku,._zs_gallerykr ._zs_galleryks ._zs_gallerykt._zs_galleryku:active,._zs_gallerykr ._zs_galleryks ._zs_gallerykt._zs_galleryku:focus,._zs_gallerykr ._zs_galleryks ._zs_gallerykt._zs_galleryku:hover{color:#4d7fff;background-color:#f6f9ff}");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', menus = $$.menus; $p += '<div mxa="_zs_gallerycG:_" class="_zs_gallerykr">'; for (var $art_ilqivalki$art_i = 0, $art_cervumsuspf$art_c = menus.length; $art_ilqivalki$art_i < $art_cervumsuspf$art_c; $art_ilqivalki$art_i++) {
    var item = menus[$art_ilqivalki$art_i];
    $p += '<div mxa="_zs_gallerycG:a" class="_zs_galleryks"><span class="_zs_gallerykt ellipsis" mx-click="' + $viewId + 'submit({value:' + $e(item.value) + '})">' + $e(item.text) + '</span></div>';
} ; $p += '</div>'; return $p; },
    init: function (e) {
        this.viewOptions = e;
        var data = e.data || {};
        this.updater.set({
            menus: data.menus
        });
    },
    render: function () {
        this.updater.digest({});
    },
    'submit<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(e.params.value);
        }
    }
});

});