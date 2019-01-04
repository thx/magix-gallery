/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/index",["magix","mx-status/base"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-status/base");
Magix.applyStyle("_zs_galleryau","._zs_gallerylt{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-status/dropdown\"],[mx-view*=\"mx-status/index\"]{display:inline-block}._zs_gallerylu{position:relative}._zs_gallerylu ._zs_gallerylv>*{font-size:20px;line-height:25px}._zs_gallerylu ._zs_gallerylw{position:absolute;top:-10px;left:-10px;z-index:10;background-color:#fff;border-radius:4px;text-align:left;word-wrap:break-word;overflow:hidden;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylu ._zs_gallerylw ._zs_gallerylv{float:left}._zs_gallerylu ._zs_gallerylw ._zs_gallerylx{float:left;margin-left:8px}._zs_gallerylu ._zs_gallerylw ._zs_galleryly{min-width:140px;height:45px;line-height:25px;padding:10px;cursor:pointer}._zs_gallerylu ._zs_gallerylw ._zs_galleryly ._zs_gallerylz{display:none;float:right;color:#999;font-weight:700;font-size:20px;line-height:25px}._zs_gallerylu ._zs_gallerylw ._zs_galleryly:hover{background-color:#fafafa}._zs_gallerylu ._zs_gallerylw ._zs_galleryly._zs_gallerylA{cursor:default}._zs_gallerylu ._zs_gallerylw ._zs_galleryly._zs_gallerylA ._zs_gallerylz{display:block}._zs_gallerylu ._zs_gallerylw ._zs_gallerylB{min-width:140px;height:45px;line-height:25px;padding:10px}._zs_gallerylu ._zs_gallerylw ._zs_gallerylC{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_gallerylu ._zs_gallerylw._zs_gallerylD{top:0;left:0}._zs_gallerylu ._zs_gallerylE{position:relative;width:36px;height:25px;line-height:25px}._zs_gallerylu ._zs_gallerylE ._zs_gallerylF{position:absolute;top:10.5px;left:31px;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_gallerylu ._zs_gallerylG{position:relative;width:110px}._zs_gallerylu ._zs_gallerylG ._zs_gallerylH{width:100%}._zs_gallerylu ._zs_gallerylG ._zs_gallerylH._zs_gallerylI,._zs_gallerylu ._zs_gallerylG ._zs_gallerylH._zs_gallerylI:hover{border-color:#e6e6e6}._zs_gallerylu ._zs_gallerylG ._zs_gallerylF{position:absolute;top:50%;right:0;width:28px;height:28px;margin-top:-14px;line-height:28px;text-align:center;color:#ccc;font-size:20px}._zs_gallerylu ._zs_gallerylJ{height:0;border-top:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', showInfo = $$.showInfo, info = $$.info, cur = $$.cur, opers = $$.opers, show = $$.show; $p += '<div mxa="_zs_gallerydg:_" class="_zs_gallerylu" mx-mouseout="' + $viewId + 'out()"><div mxa="_zs_gallerydg:a" class="_zs_gallerylE" mx-mouseover="' + $viewId + 'over()">'; if (showInfo) {
    ;
    $p += '<span class="_zs_gallerylv" style="color: ' + $e(info.color) + ';">' + $n(info.icon) + '</span>';
}
else {
    ;
    $p += '<span class="_zs_gallerylv" style="color: ' + $e(cur.color) + ';">' + $n(cur.icon) + '</span>';
} ; $p += ' '; if (opers.length > 0) {
    ;
    $p += '<i mxs="_zs_gallerydg:_" class="_zs_gallerylF"></i>';
} ; $p += '</div>'; if (show) {
    ;
    $p += '<ul mxa="_zs_gallerydg:b" class="_zs_gallerylw">';
    if (showInfo) {
        ;
        $p += '<li mxa="_zs_gallerydg:c" class="_zs_gallerylB"><span class="_zs_gallerylv" style="color: ' + $e(info.color) + ';">' + $n(info.icon) + '</span><span mxa="_zs_gallerydg:d" class="_zs_gallerylx">' + $n(info.text) + '</span></li>';
        if (info.tip) {
            ;
            $p += '<li mxa="_zs_gallerydg:e" class="_zs_gallerylC">' + $n(info.tip) + '</li>';
        }
        ;
        $p += ' ';
        if (opers.length > 0) {
            ;
            $p += '<li mxs="_zs_gallerydg:a" class="_zs_gallerylJ"></li>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += ' ';
    for (var $art_izselwhg$art_i = 0, $art_cevbxolyqrt$art_c = opers.length; $art_izselwhg$art_i < $art_cevbxolyqrt$art_c; $art_izselwhg$art_i++) {
        var item = opers[$art_izselwhg$art_i];
        $p += '<li class="_zs_galleryly clearfix ';
        if (item.value == cur.value) {
            ;
            $p += ' _zs_gallerylA ';
        }
        ;
        $p += '" mx-click="' + $viewId + 'select({item:\'' + $i($$ref, item) + '\'})"><span class="_zs_gallerylv" style="color: ' + $e(item.color) + ';">' + $n(item.icon) + '</span><span mxa="_zs_gallerydg:f" class="_zs_gallerylx">' + $n(item.text) + '</span><i mxs="_zs_gallerydg:b" class="mc-iconfont _zs_gallerylz">&#xe65d;</i></li>';
    }
    ;
    $p += '</ul>';
} ; $p += '</div>'; return $p; }
});

});