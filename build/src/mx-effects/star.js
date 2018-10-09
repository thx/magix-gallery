/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/star",["magix","./base","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Base = require("./base");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_star_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_star_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_star_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-effects/star\"] {\n  position: relative;\n  display: inline-block;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star > * {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  font-size: 20px;\n  color: inherit;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-bg {\n  color: #f0f0f0;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 24px;\n  overflow: hidden;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-on ._zs_gallery_mx-effects_star_-star-inner {\n  width: 120px;\n  height: 24px;\n}\n[mx-view*=\"mx-effects/star\"] ._zs_gallery_mx-effects_star_-star-on ._zs_gallery_mx-effects_star_-star-inner._zs_gallery_mx-effects_star_-star-brand {\n  color: #4d7fff;\n}\n");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, width = $$.width, color = $$.color; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya%:_" class="_zs_gallery_mx-effects_star_-star-bg">';
    $line = 2;
    $art = 'for (let i=0;i<5;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < 5; i += 1) {%>';
    for (var i = 0; i < 5; i += 1) {
        ;
        $p += '<span mxa="_zs_gallerya%:a" class="_zs_gallery_mx-effects_star_-star">';
        $line = 4;
        $art = 'if icon';
        ;
        $expr = '<%if (icon) {%>';
        if (icon) {
            ;
            $p += ' ';
            $line = 5;
            $art = '!icon';
            ;
            $p += ($expr = '<%!icon%>', $n(icon)) + ' ';
            $line = 6;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<i mxs="_zs_gallerya%:_" class="mc-iconfont">&#xe60f;</i>';
            $line = 8;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</span>';
        $line = 10;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="_zs_gallery_mx-effects_star_-star-on" style="width: ';
    $line = 12;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + ';"><div class="_zs_gallery_mx-effects_star_-star-inner ';
    $line = 13;
    $art = 'if !color';
    ;
    $expr = '<%if (!color) {%>';
    if (!color) {
        ;
        $p += ' _zs_gallery_mx-effects_star_-star-brand ';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 14;
    $art = 'for (let i=0;i<5;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < 5; i += 1) {%>';
    for (var i = 0; i < 5; i += 1) {
        ;
        $p += '<span class="_zs_gallery_mx-effects_star_-star" ';
        $line = 15;
        $art = 'if color';
        ;
        $expr = '<%if (color) {%>';
        if (color) {
            ;
            $p += ' style="color: ';
            $line = 15;
            $art = '=color';
            ;
            $p += ($expr = '<%=color%>', $e(color)) + ';" ';
            $line = 15;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 16;
        $art = 'if icon';
        ;
        $expr = '<%if (icon) {%>';
        if (icon) {
            ;
            $p += ' ';
            $line = 17;
            $art = '!icon';
            ;
            $p += ($expr = '<%!icon%>', $n(icon)) + ' ';
            $line = 18;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<i mxs="_zs_gallerya%:_" class="mc-iconfont">&#xe60f;</i>';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</span>';
        $line = 22;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/star.html';
    throw msg;
} return $p; },
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