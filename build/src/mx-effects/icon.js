/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/icon",["magix","./base","$","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-popover/index");
var Magix = require("magix");
var Base = require("./base");
var $ = require("$");
Magix.applyStyle("_zs_galleryI","._zs_galleryeO{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeP{font-size:12px;font-weight:700;-webkit-transform:scale(.9);transform:scale(.9)}._zs_galleryeQ,._zs_galleryeP{display:inline-block}._zs_galleryeQ{height:16px;padding:0 4px;border-radius:4px;color:#fff;text-align:center;line-height:16px}._zs_galleryeQ._zs_galleryeR{background-color:#ccc}._zs_galleryeQ._zs_galleryeS{background-color:#a40100}._zs_galleryeQ._zs_galleryeT{background-color:#ffb400}._zs_galleryeQ._zs_galleryeU{background-color:#4d7fff}._zs_galleryeV{display:inline-block;height:16px;padding:0 4px;border-radius:8px;text-align:center;line-height:14px}._zs_galleryeV._zs_galleryeR{border:1px solid #ccc;color:#999}._zs_galleryeV._zs_galleryeS{border:1px solid #a40100;color:#a40100}._zs_galleryeV._zs_galleryeT{border:1px solid #ffb400;color:#ffb400}._zs_galleryeV._zs_galleryeU{border:1px solid #4d7fff;color:#4d7fff}");
var ClassNames = {
    solid: '_zs_galleryeQ',
    hollow: '_zs_galleryeV',
    common: '_zs_galleryeR',
    error: '_zs_galleryeS',
    warn: '_zs_galleryeT',
    highlight: '_zs_galleryeU'
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
} ; var $g = '', $_temp, $p = '', tip = $$.tip, classNames = $$.classNames, styles = $$.styles, content = $$.content; if (tip) {
    ;
    $p += '<span class="' + $e(classNames) + '" style="' + $e(styles) + '" mx-view="mx-popover/index?content=' + $eu(tip) + '"><span mxa="_zs_galleryb_:_" class="_zs_galleryeP">' + $e(content) + '</span></span>';
}
else {
    ;
    $p += '<span class="' + $e(classNames) + '" style="' + $e(styles) + '"><span mxa="_zs_galleryb_:a" class="_zs_galleryeP">' + $e(content) + '</span></span>';
} ; return $p; },
    init: function (extra) {
        // 如果用户自定义了色值以自定义色值为准
        var color = extra.color, styles = [], mode = extra.mode || 'solid', type = extra.type || 'common';
        var classNames = [];
        if (ClassNames[mode]) {
            classNames.push(ClassNames[mode]);
        }
        if (ClassNames[type]) {
            classNames.push(ClassNames[type]);
        }
        // 自定义颜色
        if (color) {
            switch (mode) {
                case 'solid':
                    styles.push('background-color:' + color);
                    break;
                case 'hollow':
                    styles.push('color:' + color, 'border: 1px solid ' + color);
                    break;
            }
        }
        this.updater.set({
            content: extra.content || 'icon',
            classNames: classNames.join(' '),
            styles: styles.join(';'),
            tip: extra.tip || ''
        });
    }
});

});