/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/notice",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_notice_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_notice_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_notice_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-effects_notice_-notice {\n  padding: 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner {\n  position: relative;\n  padding-left: 20px;\n  word-break: break-all;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner ._zs_gallery_mx-effects_notice_-icon {\n  position: absolute;\n  top: -2px;\n  left: 0;\n  height: 18px;\n  line-height: 18px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common {\n  color: #999;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common ._zs_gallery_mx-effects_notice_-icon {\n  color: #ccc;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common._zs_gallery_mx-effects_notice_-border {\n  border-color: #e6e6e6;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error {\n  color: #a40100;\n  background-color: #f1d9d9;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error ._zs_gallery_mx-effects_notice_-icon {\n  color: #a40100;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error._zs_gallery_mx-effects_notice_-border {\n  border-color: #a40100;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn {\n  color: #ffb400;\n  background-color: #fff8e6;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn ._zs_gallery_mx-effects_notice_-icon {\n  color: #ffb400;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn._zs_gallery_mx-effects_notice_-border {\n  border-color: #ffb400;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight {\n  color: #333;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight ._zs_gallery_mx-effects_notice_-icon {\n  color: #4d7fff;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight._zs_gallery_mx-effects_notice_-border {\n  border-color: #e6e6e6;\n}\n");
var ClassNames = {
    common: '_zs_gallery_mx-effects_notice_-common',
    error: '_zs_gallery_mx-effects_notice_-error',
    warn: '_zs_gallery_mx-effects_notice_-warn',
    highlight: '_zs_gallery_mx-effects_notice_-highlight',
    border: '_zs_gallery_mx-effects_notice_-border',
    notice: '_zs_gallery_mx-effects_notice_-notice'
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
} ; var $g = '', $_temp, $p = '', classNames = $$.classNames, textAlign = $$.textAlign, styles = $$.styles, icon = $$.icon, content = $$.content; var $expr, $art, $line; try {
    $p += '<div class="';
    $line = 1;
    $art = '=classNames';
    ;
    $p += '' + ($expr = '<%=classNames%>', $e(classNames)) + '" style="text-align:';
    $line = 1;
    $art = '=textAlign';
    ;
    $p += '' + ($expr = '<%=textAlign%>', $e(textAlign)) + '; ';
    $line = 1;
    $art = '=styles';
    ;
    $p += '' + ($expr = '<%=styles%>', $e(styles)) + '">';
    $line = 2;
    $art = 'if icon';
    ;
    $p += '';
    $expr = '<%if (icon) {%>';
    if (icon) {
        ;
        $p += '<span mxa="_zs_gallerya1:_" class="_zs_gallery_mx-effects_notice_-inner"><i mxs="_zs_gallerya1:_" class="mc-iconfont _zs_gallery_mx-effects_notice_-icon">&#xe6ad;</i>';
        $line = 5;
        $art = '!content';
        ;
        $p += '' + ($expr = '<%!content%>', $n(content)) + '</span>';
        $line = 7;
        $art = 'else';
        ;
        $p += '';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 8;
        $art = '!content';
        ;
        $p += '' + ($expr = '<%!content%>', $n(content)) + ' ';
        $line = 9;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/notice.html';
    throw msg;
} return $p; },
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
            var result = this.hexToRgb(color);
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
    },
    render: function () {
        this.updater.digest();
    },
    hexToRgb: function (hex) {
        if (!hex) {
            return null;
        }
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});

});