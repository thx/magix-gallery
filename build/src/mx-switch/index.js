/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-switch/index",["magix","mx-popover/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
var Magix = require("magix");
Magix.applyStyle("_zs_galleryj","._zs_gallerylV{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryaF,[mx-view*=\"mx-switch/index\"]{position:relative;display:inline-block}._zs_galleryaF{width:40px;height:18px;border-radius:9px;background-color:#e6e6e6;cursor:pointer}._zs_galleryaF ._zs_galleryaH{opacity:.95;position:absolute;top:50%;left:0;width:18px;height:18px;margin-top:-9px;border-radius:50%;background-color:#ccc;transition:left .25s;-moz-transition:left .25s;-webkit-transition:left .25s;-o-transition:left .25s}._zs_galleryaF._zs_galleryaG{background-color:#d8e3ff}._zs_galleryaF._zs_galleryaG ._zs_galleryaH{left:22px;background-color:#4d7fff}._zs_galleryaF._zs_gallerylW{cursor:not-allowed;opacity:.6}._zs_gallerylX{display:inline-block;position:relative;cursor:pointer}._zs_gallerylX:after{content:\" \";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;border-radius:4px;border:1px solid #e6e6e6}._zs_gallerylX ._zs_gallerylY,._zs_gallerylX ._zs_gallerylZ{transition:color .25s}._zs_gallerylX ._zs_gallerylZ{color:#999}._zs_gallerylX ._zs_gallerylY{color:#fff}._zs_gallerylX ._zs_galleryaH,._zs_gallerylX ._zs_gallerym_{display:inline-block;width:24px;height:18px;text-align:center;line-height:18px;border-radius:4px}._zs_gallerylX ._zs_gallerym_{position:relative;z-index:3}._zs_gallerylX ._zs_galleryaH{position:absolute;top:0;left:50%;z-index:2;background-image:linear-gradient(90deg,#4d7fff,#4d7fff);background-image:-moz-linear-gradient(right,#4d7fff,#4d7fff);transition:left .25s;-moz-transition:left .25s;-webkit-transition:left .25s;-o-transition:left .25s}._zs_gallerylX._zs_galleryaG ._zs_gallerylZ{color:#fff}._zs_gallerylX._zs_galleryaG ._zs_gallerylY{color:#999}._zs_gallerylX._zs_galleryaG ._zs_galleryaH{left:0}._zs_gallerylX._zs_gallerylW{cursor:not-allowed;opacity:.6}._zs_galleryma{cursor:not-allowed;position:absolute;top:0;left:0;width:100%;height:100%}");
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
} ; var $g = '', $_temp, $p = '', text = $$.text, on = $$.on, disabled = $$.disabled, tip = $$.tip; if (text) {
    ;
    $p += '<span class="_zs_gallerylX ' + $e(on ? '_zs_galleryaG' : '') + ' ' + $e(disabled ? '_zs_gallerylW' : '') + '" mx-click="' + $viewId + '__o()"><span mxs="_zs_gallerydB:_" class="_zs_gallerym_ _zs_gallerylZ">开</span><span mxs="_zs_gallerydB:a" class="_zs_gallerym_ _zs_gallerylY">关</span><span mxs="_zs_gallerydB:b" class="_zs_galleryaH"></span></span>';
}
else {
    ;
    $p += '<span class="_zs_galleryaF ' + $e(on ? '_zs_galleryaG' : '') + ' ' + $e(disabled ? '_zs_gallerylW' : '') + '" mx-click="' + $viewId + '__o()"><span mxs="_zs_gallerydB:b" class="_zs_galleryaH"></span></span>';
} ; $p += ' '; if (disabled && tip) {
    ;
    $p += '<span class="_zs_galleryma" mx-view="mx-popover/index?content=' + $eu(tip) + '"></span>';
} ; return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        that['__j'] = $('#' + that.id);
        that.updater.set({
            on: (extra.state + '' === 'true'),
            disabled: (extra.disabled + '' === 'true'),
            tip: extra.tip || '',
            text: (extra.mode == 'text')
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    '__o<click>': function (e) {
        var that = this;
        var updater = that.updater;
        if (updater.get('disabled')) {
            return;
        }
        var state = !updater.get('on');
        that.updater.set({
            on: state
        }).digest();
        var event = $.Event('change', {
            state: state
        });
        that['__j'].val(state).trigger(event);
    }
});

});