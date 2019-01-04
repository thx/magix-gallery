/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/progress",["magix","$","mx-effects/util"],(require,exports,module)=>{
/*Magix,$,Util*/

var Magix = require("magix");
var $ = require("$");
var Util = require("mx-effects/util");
Magix.applyStyle("_zs_galleryK","._zs_galleryfe{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*=\"mx-effects/progress\"]{display:inline-block}._zs_galleryff,._zs_galleryfg{position:relative;width:200px;background:#f0f0f0}._zs_galleryff ._zs_galleryfh,._zs_galleryfg ._zs_galleryfh{position:absolute;top:0;left:0;width:0;height:100%;transition:width .25s}._zs_galleryff ._zs_galleryfi,._zs_galleryfg ._zs_galleryfi{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all .25s}._zs_galleryff ._zs_galleryfj,._zs_galleryfg ._zs_galleryfj{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryff ._zs_galleryfk,._zs_galleryfg ._zs_galleryfk{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryff ._zs_galleryfm,._zs_galleryfg ._zs_galleryfm{top:-24px;margin-left:-30px;text-align:center}._zs_galleryff ._zs_galleryfn,._zs_galleryfg ._zs_galleryfn{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryfg{height:6px}._zs_galleryfg,._zs_galleryfg ._zs_galleryfh{border-radius:3px}._zs_galleryfg ._zs_galleryfh{background:#4d7fff}._zs_galleryff{height:12px;border-radius:6px}._zs_galleryff ._zs_galleryfh{border-radius:6px;background:#4d7fff;background:linear-gradient(45deg,#b8ccff 33%,#dbe5ff 34%,#dbe5ff 59%,#b8ccff 60%);background-size:24px 12px}._zs_galleryfo{position:relative}._zs_galleryfo ._zs_galleryfp{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfo ._zs_galleryfp:last-child{margin-right:0}._zs_galleryfo ._zs_galleryfq ._zs_galleryfp{background-color:#f0f0f0}._zs_galleryfo ._zs_galleryfs{position:absolute;top:0;left:0}._zs_galleryfo ._zs_galleryfs ._zs_galleryfp{background-color:#4d7fff}._zs_galleryft{position:relative}._zs_galleryft ._zs_galleryfu,._zs_galleryft ._zs_galleryfv{position:absolute;top:0;left:50%}._zs_galleryft ._zs_galleryfv{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryft ._zs_galleryfu{z-index:2;border-radius:50%}._zs_galleryft ._zs_galleryfw{position:relative;z-index:3}._zs_galleryft ._zs_galleryfw ._zs_galleryfx{border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);text-indent:1px}._zs_galleryft ._zs_galleryfw ._zs_galleryfy{position:absolute;top:0;overflow:hidden}._zs_galleryft ._zs_galleryfw ._zs_galleryfy._zs_galleryfz{left:0}._zs_galleryft ._zs_galleryfw ._zs_galleryfy._zs_galleryfA{right:0}");
var ClassNames = {
    left: '_zs_galleryfk',
    right: '_zs_galleryfj',
    top: '_zs_galleryfm',
    bottom: '_zs_galleryfn'
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
} ; var $g = '', $_temp, $p = '', type = $$.type, width = $$.width, border = $$.border, viewId = $$.viewId, color = $$.color, num = $$.num, color1 = $$.color1, color2 = $$.color2, cName = $$.cName, placement = $$.placement, degree = $$.degree; if (type == 'circle') {
    ;
    $p += '<div mxa="_zs_gallerybb:_" class="_zs_galleryft"><div class="_zs_galleryfu" style="width: ' + $e(width) + 'px; height: ' + $e(width) + 'px; margin-left: ' + $e((0 - width / 2)) + 'px; border: ' + $e(border) + 'px solid #f0f0f0;"></div><div id="' + $e(viewId) + '_circle" class="_zs_galleryfw" style="width: ' + $e((width + 2 * border)) + 'px; height: ' + $e((width + 2 * border)) + 'px;"><div class="_zs_galleryfy _zs_galleryfz" style="width: ' + $e((width / 2) + border) + 'px; height: ' + $e((width + 2 * border)) + 'px;"><div class="_zs_galleryfx" style="left: ' + $e(border) + 'px; width: ' + $e(width) + 'px; height: ' + $e(width) + 'px; border: ' + $e(border) + 'px solid transparent; border-bottom: ' + $e(border) + 'px solid ' + $e(color) + '; border-left: ' + $e(border) + 'px solid ' + $e(color) + ';"></div></div><div class="_zs_galleryfy _zs_galleryfA" style="width: ' + $e((width / 2) + border) + 'px; height: ' + $e((width + 2 * border)) + 'px;"><div class="_zs_galleryfx" style="right: ' + $e(border) + 'px; width: ' + $e(width) + 'px; height: ' + $e(width) + 'px; border: ' + $e(border) + 'px solid transparent; border-top: ' + $e(border) + 'px solid ' + $e(color) + '; border-right: ' + $e(border) + 'px solid ' + $e(color) + ';"></div></div></div><div class="_zs_galleryfv" style="width: ' + $e(width) + 'px; height: ' + $e(width) + 'px; margin-left: ' + $e((0 - width / 2)) + 'px; line-height: ' + $e(width) + 'px;">' + $e(num) + '</div></div>';
} ; $p += ' '; if (type == 'line' || type == 'gradient') {
    ;
    $p += '<div ';
    if (type == 'gradient') {
        ;
        $p += ' class="_zs_galleryff" ';
    }
    else {
        ;
        $p += ' class="_zs_galleryfg" ';
    }
    ;
    $p += '><div class="_zs_galleryfh" style="width: ' + $e(num) + '; ';
    if (color) {
        ;
        $p += ' background: ' + $e(color) + '; ';
    }
    ;
    $p += ' ';
    if (color1 && color2) {
        ;
        $p += ' background: linear-gradient(45deg, ' + $e(color1) + ' 33%, ' + $e(color2) + ' 34%, ' + $e(color2) + ' 59%, ' + $e(color1) + ' 60%); background-size: 24px 12px; ';
    }
    ;
    $p += '"></div><div class="_zs_galleryfi ' + $e(cName) + '" ';
    if (placement == 'top' || placement == 'bottom') {
        ;
        $p += ' style="left: ' + $e(num) + ';" ';
    }
    ;
    $p += '>' + $e(num) + '</div></div>';
} ; $p += ' '; if (type == 'degree') {
    ;
    $p += '<div mxa="_zs_gallerybb:a" class="_zs_galleryfo"><div mxa="_zs_gallerybb:b" class="_zs_galleryfq">';
    for (var i = 0; i < 10; i += 1) {
        ;
        $p += '<span mxs="_zs_gallerybb:_" class="_zs_galleryfp"></span>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybb:c" class="_zs_galleryfs">';
    for (var i = 0; i < degree; i += 1) {
        ;
        $p += '<span class="_zs_galleryfp" style="opacity: ' + $e((i / 10 + 0.08)) + '; ';
        if (color) {
            ;
            $p += ' background-color: ' + $e(color) + '; ';
        }
        ;
        $p += '"></span>';
    }
    ;
    $p += '</div></div>';
} ; return $p; },
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
        var degree = 0, width = e.width || 120, border = e.border || 8, color1, color2;
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
                break;
            case 'gradient':
                // 渐变
                if (color) {
                    var result = Util.toRgb(color);
                    color1 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.4)";
                    color2 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.2)";
                }
                break;
        }
        that.updater.set({
            viewId: that.id,
            placement: placement,
            originNum: num,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color: color,
            color1: color1,
            color2: color2,
            type: type,
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
            var right = circleNode.find('._zs_galleryfA ._zs_galleryfx'), left_1 = circleNode.find('._zs_galleryfz ._zs_galleryfx');
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