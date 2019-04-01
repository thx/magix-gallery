/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/progress",["magix","$","mx-util/color"],(require,exports,module)=>{
/*Magix,$,Util*/

var Magix = require("magix");
var $ = require("$");
var Util = require("mx-util/color");
Magix.applyStyle("_zs_gallery_mx-effects_progress_","[mx-view*=\"mx-effects/progress\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-effects_progress_-type--line,\n._zs_gallery_mx-effects_progress_-type--gradient {\n  position: relative;\n  background: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-on,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  transition: width var(--duration);\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-num,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-num {\n  position: absolute;\n  width: 60px;\n  height: 24px;\n  line-height: 24px;\n  font-family: \"Tahoma\";\n  color: #999;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-num-right,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-num-right {\n  top: -9px;\n  left: 100%;\n  padding-left: 10px;\n  text-align: left;\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-num-left,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-num-left {\n  top: -9px;\n  left: -60px;\n  padding-right: 10px;\n  text-align: right;\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-num-top,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-num-top {\n  top: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-num-bottom,\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-num-bottom {\n  bottom: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-type--line {\n  height: 6px;\n  border-radius: 3px;\n}\n._zs_gallery_mx-effects_progress_-type--line ._zs_gallery_mx-effects_progress_-on {\n  border-radius: 3px;\n  background: var(--color-brand);\n}\n._zs_gallery_mx-effects_progress_-type--gradient {\n  height: 12px;\n  border-radius: 6px;\n}\n._zs_gallery_mx-effects_progress_-type--gradient ._zs_gallery_mx-effects_progress_-on {\n  border-radius: 6px;\n  background: var(--color-brand);\n  background-size: 24px 12px;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree {\n  display: inline-block;\n  width: 4px;\n  height: 14px;\n  margin-right: 3px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-bg ._zs_gallery_mx-effects_progress_-degree {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-on ._zs_gallery_mx-effects_progress_-degree {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-text,\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-bg {\n  position: absolute;\n  top: 0;\n  left: 50%;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-text {\n  z-index: 4;\n  text-align: center;\n  font-family: \"Tahoma\";\n  font-size: 14px;\n  color: #666;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-bg {\n  z-index: 2;\n  border-radius: 50%;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-progress {\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  text-indent: 1px;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half._zs_gallery_mx-effects_progress_-half-left {\n  left: 0;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half._zs_gallery_mx-effects_progress_-half-right {\n  right: 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', type = $$.type, width = $$.width, border = $$.border, viewId = $$.viewId, color = $$.color, text = $$.text, num = $$.num, color1 = $$.color1, color2 = $$.color2, colorGradient = $$.colorGradient, cName = $$.cName, placement = $$.placement, degree = $$.degree; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if (type == \'circle\')';
    ;
    $expr = '<%if (type == \'circle\') {%>';
    if (type == 'circle') {
        ;
        $p += '<div mxa="_zs_gallerybO:_" class="_zs_gallery_mx-effects_progress_-circle-wrapper"><div class="_zs_gallery_mx-effects_progress_-circle-bg" style="width: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; margin-left: ';
        $line = 3;
        $art = '=(0 - width / 2)';
        ;
        $p += ($expr = '<%=(0 - width / 2)%>', $e((0 - width / 2))) + 'px; border: ';
        $line = 3;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid #f0f0f0;"></div><div id="';
        $line = 4;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_circle" class="_zs_gallery_mx-effects_progress_-circle" style="width: ';
        $line = 4;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px; height: ';
        $line = 4;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-half _zs_gallery_mx-effects_progress_-half-left" style="width: ';
        $line = 5;
        $art = '=(width / 2) + border';
        ;
        $p += ($expr = '<%=(width / 2) + border%>', $e((width / 2) + border)) + 'px; height: ';
        $line = 5;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-progress" style="left: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px; width: ';
        $line = 6;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 6;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; border: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid transparent; border-bottom: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 6;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + '; border-left: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 6;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + ';"></div></div><div class="_zs_gallery_mx-effects_progress_-half _zs_gallery_mx-effects_progress_-half-right" style="width: ';
        $line = 8;
        $art = '=(width / 2) + border';
        ;
        $p += ($expr = '<%=(width / 2) + border%>', $e((width / 2) + border)) + 'px; height: ';
        $line = 8;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-progress" style="right: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px; width: ';
        $line = 9;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 9;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; border: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid transparent; border-top: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 9;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + '; border-right: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 9;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + ';"></div></div></div>';
        $line = 12;
        $art = 'if text';
        ;
        $expr = '<%if (text) {%>';
        if (text) {
            ;
            $p += '<div class="_zs_gallery_mx-effects_progress_-circle-text" style="width: ';
            $line = 13;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
            $line = 13;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + 'px; margin-left: ';
            $line = 13;
            $art = '=(0 - width / 2)';
            ;
            $p += ($expr = '<%=(0 - width / 2)%>', $e((0 - width / 2))) + 'px; line-height: ';
            $line = 13;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + 'px;">';
            $line = 13;
            $art = '=num';
            ;
            $p += ($expr = '<%=num%>', $e(num)) + '</div>';
            $line = 14;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 16;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 18;
    $art = 'if (type == \'line\' || type == \'gradient\')';
    ;
    $expr = '<%if (type == \'line\' || type == \'gradient\') {%>';
    if (type == 'line' || type == 'gradient') {
        ;
        $p += '<div class="_zs_gallery_mx-effects_progress_-type--';
        $line = 19;
        $art = '=type';
        ;
        $p += ($expr = '<%=type%>', $e(type)) + '" style="width: ';
        $line = 19;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div class="_zs_gallery_mx-effects_progress_-on" style="width: ';
        $line = 20;
        $art = '=num';
        ;
        $p += ($expr = '<%=num%>', $e(num)) + '; ';
        $line = 20;
        $art = 'if color1 && color2';
        ;
        $expr = '<%if (color1 && color2) {%>';
        if (color1 && color2) {
            ;
            $p += ' background: linear-gradient(45deg, ';
            $line = 20;
            $art = '=color1';
            ;
            $p += ($expr = '<%=color1%>', $e(color1)) + ' 33%, ';
            $line = 20;
            $art = '=color2';
            ;
            $p += ($expr = '<%=color2%>', $e(color2)) + ' 34%, ';
            $line = 20;
            $art = '=color2';
            ;
            $p += ($expr = '<%=color2%>', $e(color2)) + ' 59%, ';
            $line = 20;
            $art = '=color1';
            ;
            $p += ($expr = '<%=color1%>', $e(color1)) + ' 60%); background-size: 24px 12px; ';
            $line = 20;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 20;
            $art = 'if colorGradient';
            ;
            $expr = '<%if (colorGradient) {%>';
            if (colorGradient) {
                ;
                $p += ' background: linear-gradient(to right, ';
                $line = 20;
                $art = '=color';
                ;
                $p += ($expr = '<%=color%>', $e(color)) + ', ';
                $line = 20;
                $art = '=colorGradient';
                ;
                $p += ($expr = '<%=colorGradient%>', $e(colorGradient)) + '); ';
                $line = 20;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' background: ';
                $line = 20;
                $art = '=color';
                ;
                $p += ($expr = '<%=color%>', $e(color)) + '; ';
                $line = 20;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '  ';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"></div>';
        $line = 21;
        $art = 'if text';
        ;
        $expr = '<%if (text) {%>';
        if (text) {
            ;
            $p += '<div class="_zs_gallery_mx-effects_progress_-num ';
            $line = 22;
            $art = '=cName';
            ;
            $p += ($expr = '<%=cName%>', $e(cName)) + '" ';
            $line = 22;
            $art = 'if (placement == \'top\' || placement == \'bottom\')';
            ;
            $expr = '<%if (placement == \'top\' || placement == \'bottom\') {%>';
            if (placement == 'top' || placement == 'bottom') {
                ;
                $p += ' style="left: ';
                $line = 22;
                $art = '=num';
                ;
                $p += ($expr = '<%=num%>', $e(num)) + ';" ';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>';
            $line = 22;
            $art = '=num';
            ;
            $p += ($expr = '<%=num%>', $e(num)) + '</div>';
            $line = 23;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 25;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 27;
    $art = 'if (type == \'degree\')';
    ;
    $expr = '<%if (type == \'degree\') {%>';
    if (type == 'degree') {
        ;
        $p += '<div mxa="_zs_gallerybO:a" class="_zs_gallery_mx-effects_progress_-degree-wrapper"><div mxa="_zs_gallerybO:b" class="_zs_gallery_mx-effects_progress_-degree-bg">';
        $line = 30;
        $art = 'for (let i=0;i<10;i+=1)';
        ;
        $expr = '<%for (var i = 0; i < 10; i += 1) {%>';
        for (var i = 0; i < 10; i += 1) {
            ;
            $p += '<span mxs="_zs_gallerybO:_" class="_zs_gallery_mx-effects_progress_-degree"></span>';
            $line = 32;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_gallerybO:c" class="_zs_gallery_mx-effects_progress_-degree-on">';
        $line = 35;
        $art = 'for (let i=0;i<degree;i+=1)';
        ;
        $expr = '<%for (var i = 0; i < degree; i += 1) {%>';
        for (var i = 0; i < degree; i += 1) {
            ;
            $p += '<span class="_zs_gallery_mx-effects_progress_-degree" style="opacity: ';
            $line = 36;
            $art = '=(i / 10 + 0.08)';
            ;
            $p += ($expr = '<%=(i / 10 + 0.08)%>', $e((i / 10 + 0.08))) + '; ';
            $line = 36;
            $art = 'if color';
            ;
            $expr = '<%if (color) {%>';
            if (color) {
                ;
                $p += ' background-color: ';
                $line = 36;
                $art = '=color';
                ;
                $p += ($expr = '<%=color%>', $e(color)) + '; ';
                $line = 36;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"></span>';
            $line = 37;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 40;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
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
        var type = e.type || 'line';
        var placement = (e.textPlacement || 'top');
        var width;
        var degree = 0, border = e.border || 8, color = e.color || '', colorGradient = e.colorGradient || '', color1, color2;
        switch (type) {
            case 'degree':
                // 刻度型，刻度取整
                degree = parseInt(num / 10);
                break;
            case 'circle':
                // 圆形
                if (!color) {
                    color = '#4d7fff';
                }
                width = e.width || 120;
                break;
            case 'gradient':
                // 渐变，未自定义颜色时适用品牌色
                var root = getComputedStyle(document.documentElement);
                color = color || root.getPropertyValue('--color-brand').trim();
                if (color) {
                    var result = Util.toRgb(color);
                    color1 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.4)";
                    color2 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.2)";
                }
            case 'line':
                width = e.width || 200;
                break;
        }
        that.updater.set({
            viewId: that.id,
            placement: placement,
            originNum: num,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color: color,
            colorGradient: colorGradient,
            color1: color1,
            color2: color2,
            type: type,
            text: (e.text + '' !== 'false'),
            degree: degree,
            width: +width,
            border: +border,
            gradient: (type == 'gradient')
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
        var that = this;
        that.updater.digest();
        var type = that.updater.get('type'), originNum = that.updater.get('originNum');
        if (type == 'circle') {
            var circleNode = $('#' + that.id + '_circle');
            var right = circleNode.find('._zs_gallery_mx-effects_progress_-half-right ._zs_gallery_mx-effects_progress_-progress'), left_1 = circleNode.find('._zs_gallery_mx-effects_progress_-half-left ._zs_gallery_mx-effects_progress_-progress');
            var deg = Math.ceil(360 * originNum / 100);
            var rightDeg_1, leftDeg_1;
            if (deg > 180) {
                rightDeg_1 = 180;
                leftDeg_1 = deg - rightDeg_1;
            }
            else {
                rightDeg_1 = deg;
                leftDeg_1 = 0;
            }
            var duration = Math.ceil(1000 * originNum / 100), easing_1 = 'linear';
            var rightDuration = Math.floor(duration * rightDeg_1 / deg), leftDuration_1 = Math.floor(duration * leftDeg_1 / deg);
            right.animate({
                textIndent: 0
            }, {
                step: function (rNow, fx) {
                    var rt = (1 - rNow) * rightDeg_1 - 135;
                    $(this).css({
                        '-webkit-transform': 'rotate(' + rt + 'deg)',
                        'transform': 'rotate(' + rt + 'deg)'
                    });
                },
                duration: rightDuration,
                done: function () {
                    if (leftDeg_1 > 0) {
                        left_1.animate({
                            textIndent: 0
                        }, {
                            step: function (lNow, fx) {
                                var lt = (1 - lNow) * leftDeg_1 - 135;
                                $(this).css({
                                    '-webkit-transform': 'rotate(' + lt + 'deg)',
                                    'transform': 'rotate(' + lt + 'deg)'
                                });
                            },
                            duration: leftDuration_1
                        }, easing_1);
                    }
                }
            }, easing_1);
        }
    }
});

});