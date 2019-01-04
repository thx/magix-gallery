/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/notice",["magix","./base","$","mx-effects/util"],(require,exports,module)=>{
/*Magix,Base,$,Util*/

var Magix = require("magix");
var Base = require("./base");
var $ = require("$");
var Util = require("mx-effects/util");
Magix.applyStyle("_zs_galleryJ","._zs_galleryeW{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeX{padding:10px;line-height:18px;border-radius:inherit}._zs_galleryeX ._zs_galleryeY{display:inline-block;position:relative;padding-left:18px;word-break:break-all}._zs_galleryeX ._zs_galleryeY ._zs_galleryeZ{position:absolute;top:0;left:0;height:18px;line-height:18px}._zs_galleryeX._zs_galleryf_{border-width:1px;border-style:solid;border-radius:4px}._zs_galleryeX._zs_galleryfa{color:#999;background-color:#fafafa}._zs_galleryeX._zs_galleryfa ._zs_galleryeZ{color:#ccc}._zs_galleryeX._zs_galleryfa._zs_galleryf_{border-color:#e6e6e6}._zs_galleryeX._zs_galleryfb{color:#a40100;background-color:#f1d9d9}._zs_galleryeX._zs_galleryfb ._zs_galleryeZ{color:#a40100}._zs_galleryeX._zs_galleryfb._zs_galleryf_{border-color:#a40100}._zs_galleryeX._zs_galleryfc{background-color:#fff8e6}._zs_galleryeX._zs_galleryfc,._zs_galleryeX._zs_galleryfc ._zs_galleryeZ{color:#ffb400}._zs_galleryeX._zs_galleryfc._zs_galleryf_{border-color:#ffb400}._zs_galleryeX._zs_galleryfd{color:#333;background-color:#fafafa}._zs_galleryeX._zs_galleryfd ._zs_galleryeZ{color:#4d7fff}._zs_galleryeX._zs_galleryfd._zs_galleryf_{border-color:#e6e6e6}");
var ClassNames = {
    common: '_zs_galleryfa',
    error: '_zs_galleryfb',
    warn: '_zs_galleryfc',
    highlight: '_zs_galleryfd',
    border: '_zs_galleryf_',
    notice: '_zs_galleryeX'
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
} ; var $g = '', $_temp, $p = '', classNames = $$.classNames, textAlign = $$.textAlign, styles = $$.styles, icon = $$.icon, content = $$.content; $p += '<div class="' + $e(classNames) + ' clearfix" style="text-align:' + $e(textAlign) + '; ' + $e(styles) + '">'; if (icon) {
    ;
    $p += '<div mxa="_zs_galleryba:_" class="_zs_galleryeY"><i mxs="_zs_galleryba:_" class="mc-iconfont _zs_galleryeZ">&#xe6ad;</i>' + $n(content) + '</div>';
}
else {
    ;
    $p += ' ' + $n(content) + ' ';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        // 默认左对齐
        var textAlign = extra.textAlign || 'left';
        var classNames = [ClassNames.notice];
        // 如果用户自定义了色值以自定义色值为准
        var color = extra.color, rgba, styles = [], border = (extra.border + '' === 'true'), icon = !(extra.icon + '' === 'false'), type = extra.type || 'common';
        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            if (type && ClassNames[type]) {
                classNames.push(ClassNames[type]);
            }
        }
        else {
            var result = Util.toRgb(color);
            rgba = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.2)";
            styles.push('color:' + color, 'background-color:' + rgba);
            if (border) {
                styles.push('border-color:' + color);
            }
        }
        this.updater.set({
            content: extra.content || '提示内容',
            classNames: classNames.join(' '),
            textAlign: textAlign,
            color: color,
            styles: styles.join(';'),
            icon: icon
        });
    }
});

});