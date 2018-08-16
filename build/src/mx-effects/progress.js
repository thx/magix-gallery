/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/progress",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_progress_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_progress_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_progress_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-effects/progress\"],\n._zs_gallery_mx-effects_progress_-on {\n  height: 6px;\n  border-radius: 3px;\n}\n[mx-view*=\"mx-effects/progress\"] {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  background-color: #4d7fff;\n  transition: width 0.25s;\n}\n._zs_gallery_mx-effects_progress_-num {\n  position: absolute;\n  width: 60px;\n  height: 24px;\n  line-height: 24px;\n  font-family: \"Tahoma\";\n  color: #999;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-effects_progress_-num-right {\n  top: -9px;\n  left: 100%;\n  padding-left: 10px;\n  text-align: left;\n}\n._zs_gallery_mx-effects_progress_-num-left {\n  top: -9px;\n  left: -60px;\n  padding-right: 10px;\n  text-align: right;\n}\n._zs_gallery_mx-effects_progress_-num-top {\n  top: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-num-bottom {\n  bottom: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n");
var ClassNames = {
    left: '_zs_gallery_mx-effects_progress_-num-left',
    right: '_zs_gallery_mx-effects_progress_-num-right',
    top: '_zs_gallery_mx-effects_progress_-num-top',
    bottom: '_zs_gallery_mx-effects_progress_-num-bottom'
};
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, num = $$.num, color = $$.color, cName = $$.cName, placement = $$.placement; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-effects_progress_-on" style="width: ';
    $line = 1;
    $art = '=num';
    ;
    $p += '' + ($expr = '<%=num%>', $e(num)) + '; ';
    $line = 1;
    $art = 'if color';
    ;
    $p += '';
    $expr = '<%if(color){%>';
    if (color) {
        ;
        $p += ' background-color: ';
        $line = 1;
        $art = '=color';
        ;
        $p += '' + ($expr = '<%=color%>', $e(color)) + '; ';
        $line = 1;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '"></div><div class="_zs_gallery_mx-effects_progress_-num ';
    $line = 2;
    $art = '=cName';
    ;
    $p += '' + ($expr = '<%=cName%>', $e(cName)) + '" ';
    $line = 2;
    $art = 'if (placement == \'top\' || placement == \'bottom\')';
    ;
    $p += '';
    $expr = '<%if(placement==\'top\'||placement==\'bottom\'){%>';
    if (placement == 'top' || placement == 'bottom') {
        ;
        $p += ' style="left: ';
        $line = 2;
        $art = '=num';
        ;
        $p += '' + ($expr = '<%=num%>', $e(num)) + ';" ';
        $line = 2;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '>';
    $line = 2;
    $art = '=num';
    ;
    $p += '' + ($expr = '<%=num%>', $e(num)) + '</div>';
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
        that.updater.set({
            placement: placement,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color: color
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