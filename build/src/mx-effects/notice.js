/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/notice",["magix","$","mx-color/util"],(require,exports,module)=>{
/*Magix,$,Util*/

var Magix = require("magix");
var $ = require("$");
var Util = require("mx-color/util");
Magix.applyStyle("_zs_gallery_mx-effects_notice_","._zs_gallery_mx-effects_notice_-notice {\n  padding: 10px;\n  line-height: 18px;\n  border-radius: inherit;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner {\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  word-break: break-all;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner ._zs_gallery_mx-effects_notice_-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  line-height: 18px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common {\n  color: #999;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common ._zs_gallery_mx-effects_notice_-icon {\n  color: #ccc;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-common._zs_gallery_mx-effects_notice_-border {\n  border-color: var(--color-border);\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight {\n  color: #333;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight ._zs_gallery_mx-effects_notice_-icon {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight._zs_gallery_mx-effects_notice_-border {\n  border-color: var(--color-border);\n}\n");
var ClassNames = {
    common: '_zs_gallery_mx-effects_notice_-common',
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
    $p += '<div class="_zs_gallery_mx-effects_notice_-notice ';
    $line = 1;
    $art = '=classNames';
    ;
    $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="text-align:';
    $line = 1;
    $art = '=textAlign';
    ;
    $p += ($expr = '<%=textAlign%>', $e(textAlign)) + '; ';
    $line = 1;
    $art = '=styles';
    ;
    $p += ($expr = '<%=styles%>', $e(styles)) + '">';
    $line = 2;
    $art = 'if icon';
    ;
    $expr = '<%if (icon) {%>';
    if (icon) {
        ;
        $p += '<div mxa="_zs_gallerybM:_" class="_zs_gallery_mx-effects_notice_-inner"><i mxs="_zs_gallerybM:_" class="mc-iconfont _zs_gallery_mx-effects_notice_-icon">&#xe6ad;</i>';
        $line = 5;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + '</div>';
        $line = 7;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 8;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + ' ';
        $line = 9;
        $art = '/if';
        ;
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
        var classNames = [];
        // 如果用户自定义了色值以自定义色值为准
        var color = extra.color, rgba, styles = [], border = (extra.border + '' === 'true'), icon = !(extra.icon + '' === 'false'), type = extra.type || 'common';
        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            // 未自定义颜色的时候
            if (type == 'common' || type == 'highlight') {
                classNames.push(ClassNames[type]);
            }
            if (type == 'error' || type == 'warn') {
                var root = getComputedStyle(document.documentElement);
                var key = (type == 'error') ? '--color-red' : '--color-warn';
                color = document.body.style.getPropertyValue(key) || root.getPropertyValue(key);
                color = color.trim();
            }
        }
        if (color) {
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
    },
    render: function () {
        this.updater.digest();
    }
});

});