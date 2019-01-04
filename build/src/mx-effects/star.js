/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/star",["magix","./base","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Base = require("./base");
var $ = require("$");
Magix.applyStyle("_zs_galleryL","._zs_galleryfB{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-effects/star\"]{position:relative;display:inline-block}[mx-view*=\"mx-effects/star\"] ._zs_galleryfC>*{display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;font-size:20px;color:inherit}[mx-view*=\"mx-effects/star\"] ._zs_galleryfD{color:#f0f0f0}[mx-view*=\"mx-effects/star\"] ._zs_galleryfE{position:absolute;top:0;left:0;height:24px;overflow:hidden}[mx-view*=\"mx-effects/star\"] ._zs_galleryfE ._zs_galleryfF{width:120px;height:24px}[mx-view*=\"mx-effects/star\"] ._zs_galleryfE ._zs_galleryfF._zs_galleryfG{color:#4d7fff}");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, width = $$.width, color = $$.color; $p += '<div mxa="_zs_gallerybc:_" class="_zs_galleryfD">'; for (var i = 0; i < 5; i += 1) {
    ;
    $p += '<span mxa="_zs_gallerybc:a" class="_zs_galleryfC">';
    if (icon) {
        ;
        $p += ' ' + $n(icon) + ' ';
    }
    else {
        ;
        $p += '<i mxs="_zs_gallerybc:_" class="mc-iconfont">&#xe60f;</i>';
    }
    ;
    $p += '</span>';
} ; $p += '</div><div class="_zs_galleryfE" style="width: ' + $e(width) + ';"><div class="_zs_galleryfF '; if (!color) {
    ;
    $p += ' _zs_galleryfG ';
} ; $p += '">'; for (var i = 0; i < 5; i += 1) {
    ;
    $p += '<span class="_zs_galleryfC" ';
    if (color) {
        ;
        $p += ' style="color: ' + $e(color) + ';" ';
    }
    ;
    $p += '>';
    if (icon) {
        ;
        $p += ' ' + $n(icon) + ' ';
    }
    else {
        ;
        $p += '<i mxs="_zs_gallerybc:_" class="mc-iconfont">&#xe60f;</i>';
    }
    ;
    $p += '</span>';
} ; $p += '</div></div>'; return $p; },
    init: function (e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        // num: 0, 0.5, 1 ... 4, 4.5, 5
        var color = e.color || '';
        var num = +e.num || 0;
        var s = num + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        // 取半
        if (i > 0) {
            num = Math.floor(num) + 0.5;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 5) {
            num = 5;
        }
        that.updater.set({
            width: num / 5 * 100 + '%',
            color: color,
            icon: e.icon
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    }
});

});