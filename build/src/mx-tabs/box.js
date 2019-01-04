/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base*/
require("mx-popover/index");
/**
 * 盒状分组
 */
var Magix = require("magix");
var Base = require("mx-tabs/base");
Magix.applyStyle("_zs_galleryaC","._zs_galleryms{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymt,[mx-view*=\"mx-tabs/box\"]{display:inline-block}._zs_gallerymt{height:18px;padding-left:4px;padding-right:4px;line-height:16px;border-radius:4px;background-color:#4d7fff;color:#fff;font-size:12px;font-weight:700;white-space:nowrap}._zs_gallerymu{position:relative;border-bottom:1px solid #e6e6e6}._zs_gallerymu ._zs_gallerymv{position:relative;float:left;font-size:16px;padding:16px 24px;transition:color .25s ease-out;color:#666}._zs_gallerymu ._zs_gallerymv:hover{color:#333}._zs_gallerymu ._zs_gallerymv._zs_gallerymw{color:#4d7fff}._zs_gallerymu ._zs_gallerymv ._zs_gallerymt{position:absolute;top:-4px;left:100%;margin-left:-26px}._zs_gallerymu ._zs_gallerymv ._zs_gallerymt ._zs_gallerymx{display:inline-block;-webkit-transform:scale(.92);transform:scale(.92)}._zs_gallerymu ._zs_gallerymv ._zs_gallerymt ._zs_gallerymy{position:absolute;left:4px;top:18px;width:0;height:0;border-color:#4d7fff #fff #fff #4d7fff;border-style:solid;border-width:3px}._zs_gallerymu ._zs_gallerymz{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid #4d7fff;transition:width .25s cubic-bezier(.645,.045,.355,1),left .25s cubic-bezier(.645,.045,.355,1)}._zs_gallerymA ._zs_gallerymB{position:relative;top:1px;font-size:14px}._zs_gallerymA ._zs_gallerymC{cursor:pointer;text-align:center;padding:0 12px;transition:all .25s ease-out}._zs_gallerymA ._zs_gallerymC:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}._zs_gallerymA ._zs_gallerymC:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}._zs_gallerymA ._zs_gallerymC ._zs_gallerymt{-webkit-transform:scale(.9);transform:scale(.9)}._zs_gallerymA._zs_gallerymD ._zs_gallerymC{color:#999;cursor:not-allowed}._zs_gallerymA._zs_gallerymD ._zs_gallerymC:hover{color:#999}._zs_gallerymA._zs_gallerymD ._zs_gallerymC._zs_gallerymw{color:#999;background-color:#eee;border-color:#e6e6e6}._zs_gallerymA._zs_gallerymD ._zs_gallerymC ._zs_gallerymt{background-color:#ccc}._zs_gallerymE,._zs_gallerymE ._zs_gallerymC{position:relative;display:inline-block}._zs_gallerymE ._zs_gallerymC{z-index:2;height:32px;line-height:30px;border-radius:4px;color:#666;border:1px solid transparent}._zs_gallerymE ._zs_gallerymC:hover{color:#333}._zs_gallerymE ._zs_gallerymC._zs_gallerymw{color:#333;background-color:#f6f9ff;border:1px solid #4d7fff}._zs_gallerymE:after{content:\" \";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerymE:after,._zs_gallerymF{border-radius:4px;border:1px solid #e6e6e6}._zs_gallerymF{display:inline-block;height:32px}._zs_gallerymF ._zs_gallerymC{display:inline-block;height:30px;line-height:30px;color:#999;background-color:#fff}._zs_gallerymF ._zs_gallerymC:hover{color:#333}._zs_gallerymF ._zs_gallerymC._zs_gallerymw{color:#4d7fff;background-color:#f6f9ff}");
var ClassNames = {
    solid: '_zs_gallerymF',
    hollow: '_zs_gallerymE'
};
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
} ; var $g = '', $_temp, $p = '', boxClass = $$.boxClass, disabled = $$.disabled, list = $$.list, selected = $$.selected, spm = $$.spm; $p += '<div class="_zs_gallerymA ' + $e(boxClass) + ' ' + $e(disabled ? '_zs_gallerymD' : '') + '">'; for (var index = 0, $art_cjabvlat$art_c = list.length; index < $art_cjabvlat$art_c; index++) {
    var item = list[index];
    $p += '<a href="javascript:;" ';
    if (!disabled) {
        ;
        $p += ' mx-click="' + $viewId + '__aa({item:\'' + $i($$ref, item) + '\'})" ';
    }
    ;
    $p += ' class="_zs_gallerymC ' + $e((item.value == selected) ? '_zs_gallerymw' : '') + '" ';
    if (spm) {
        ;
        $p += ' data-spm-click="' + $e(spm) + '' + $e(index) + '" ';
    }
    ;
    $p += '>' + $e(item.text) + ' ';
    if (item.tag) {
        ;
        $p += '<span mxa="_zs_galleryd*:_" class="_zs_gallerymt">' + $e(item.tag) + '</span>';
    }
    ;
    $p += ' ';
    if (item.tips) {
        ;
        $p += '<i class="mc-iconfont color-9 _zs_gallerymB" mx-view="mx-popover/index?content=' + $eu(item.tips) + '">&#xe629;</i>';
    }
    ;
    $p += '</a>';
} ; $p += '</div>'; return $p; },
    render: function () {
        var mode = this.updater.get('mode');
        this.updater.digest({
            boxClass: ClassNames[mode]
        });
    }
});

});