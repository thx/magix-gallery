/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/progress",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

"use strict";
exports.__esModule = true;
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_progress_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_progress_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_progress_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-effects/progress\"] {\n  position: relative;\n  display: inline-block;\n}\n._zs_gallery_mx-effects_progress_-line,\n._zs_gallery_mx-effects_progress_-on {\n  height: 6px;\n  border-radius: 3px;\n}\n._zs_gallery_mx-effects_progress_-line {\n  position: relative;\n  width: 200px;\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  background-color: #4d7fff;\n  transition: width 0.25s;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num {\n  position: absolute;\n  width: 60px;\n  height: 24px;\n  line-height: 24px;\n  font-family: \"Tahoma\";\n  color: #999;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-right {\n  top: -9px;\n  left: 100%;\n  padding-left: 10px;\n  text-align: left;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-left {\n  top: -9px;\n  left: -60px;\n  padding-right: 10px;\n  text-align: right;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-top {\n  top: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-bottom {\n  bottom: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-degree {\n  display: inline-block;\n  width: 4px;\n  height: 14px;\n  margin-right: 3px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-effects_progress_-degree:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-effects_progress_-degree-bg ._zs_gallery_mx-effects_progress_-degree {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-degree-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n}\n._zs_gallery_mx-effects_progress_-degree-on ._zs_gallery_mx-effects_progress_-degree {\n  background-color: #4d7fff;\n}\n");
var ClassNames = {
    left: '_zs_gallery_mx-effects_progress_-num-left',
    right: '_zs_gallery_mx-effects_progress_-num-right',
    top: '_zs_gallery_mx-effects_progress_-num-top',
    bottom: '_zs_gallery_mx-effects_progress_-num-bottom'
};
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
} ; var $g = '', $_temp, $p = '', type = $$.type, num = $$.num, color = $$.color, cName = $$.cName, placement = $$.placement, degree = $$.degree; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = 'if (type == \'line\')';
    ;
    $p += '';
    $expr = '<%if (type == \'line\') {%>';
    if (type == 'line') {
        ;
        $p += '<div mxa="_zs_gallerya2:_" class="_zs_gallery_mx-effects_progress_-line"><div class="_zs_gallery_mx-effects_progress_-on" style="width: ';
        $line = 3;
        $art = '=num';
        ;
        $p += '' + ($expr = '<%=num%>', $e(num)) + '; ';
        $line = 3;
        $art = 'if color';
        ;
        $p += '';
        $expr = '<%if (color) {%>';
        if (color) {
            ;
            $p += ' background-color: ';
            $line = 3;
            $art = '=color';
            ;
            $p += '' + ($expr = '<%=color%>', $e(color)) + '; ';
            $line = 3;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '"></div><div class="_zs_gallery_mx-effects_progress_-num ';
        $line = 4;
        $art = '=cName';
        ;
        $p += '' + ($expr = '<%=cName%>', $e(cName)) + '" ';
        $line = 4;
        $art = 'if (placement == \'top\' || placement == \'bottom\')';
        ;
        $p += '';
        $expr = '<%if (placement == \'top\' || placement == \'bottom\') {%>';
        if (placement == 'top' || placement == 'bottom') {
            ;
            $p += ' style="left: ';
            $line = 4;
            $art = '=num';
            ;
            $p += '' + ($expr = '<%=num%>', $e(num)) + ';" ';
            $line = 4;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 4;
        $art = '=num';
        ;
        $p += '' + ($expr = '<%=num%>', $e(num)) + '</div></div>';
        $line = 6;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 8;
    $art = 'if (type == \'degree\')';
    ;
    $p += '';
    $expr = '<%if (type == \'degree\') {%>';
    if (type == 'degree') {
        ;
        $p += '<div mxa="_zs_gallerya2:a" class="_zs_gallery_mx-effects_progress_-degree-bg">';
        $line = 10;
        $art = 'for (let i=0;i<10;i+=1)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 10; i += 1) {%>';
        for (var i = 0; i < 10; i += 1) {
            ;
            $p += '<span mxs="_zs_gallerya2:_" class="_zs_gallery_mx-effects_progress_-degree"></span>';
            $line = 12;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_gallerya2:b" class="_zs_gallery_mx-effects_progress_-degree-on">';
        $line = 15;
        $art = 'for (let i=0;i<degree;i+=1)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < degree; i += 1) {%>';
        for (var i = 0; i < degree; i += 1) {
            ;
            $p += '<span class="_zs_gallery_mx-effects_progress_-degree" style="opacity: ';
            $line = 16;
            $art = '=(i / 10 + 0.08)';
            ;
            $p += '' + ($expr = '<%=(i / 10 + 0.08)%>', $e((i / 10 + 0.08))) + '; ';
            $line = 16;
            $art = 'if color';
            ;
            $p += '';
            $expr = '<%if (color) {%>';
            if (color) {
                ;
                $p += ' background-color: ';
                $line = 16;
                $art = '=color';
                ;
                $p += '' + ($expr = '<%=color%>', $e(color)) + '; ';
                $line = 16;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '"></span>';
            $line = 17;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 19;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/progress.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        var type = e.type || 'line';
        var placement = (e.textPlacement || 'top');
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
        // 最多保留两位小数
        if (i > 2) {
            i = 2;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 100) {
            num = 100;
        }
        var degree = 0;
        if (type == 'degree') {
            // 刻度取整
            degree = parseInt(num / 10);
        }
        that.updater.set({
            placement: placement,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color: color,
            type: type,
            degree: degree
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
    }
});

});