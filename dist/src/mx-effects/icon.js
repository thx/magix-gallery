/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/icon",["../mx-util/view","mx-popover/index"],(require,exports,module)=>{
/*View*/
require("mx-popover/index");
"use strict";
exports.__esModule = true;
var View = require("../mx-util/view");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', tip = $$.tip, styles = $$.styles, tipWidth = $$.tipWidth, content = $$.content; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if tip';
    ;
    $expr = '<%if (tip) {%>';
    if (tip) {
        ;
        $p += '<span class="mx-tag" style="';
        $line = 2;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '" mx-view="mx-popover/index?width=';
        $line = 3;
        $art = '=tipWidth';
        ;
        $p += ($expr = '<%!$eu(tipWidth)%>', $eu(tipWidth)) + '&content=';
        $line = 4;
        $art = '=tip';
        ;
        $p += ($expr = '<%!$eu(tip)%>', $eu(tip)) + '"><span mxa="_zs_galleryb/:_" class="mx-tag-name">';
        $line = 5;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + '</span></span>';
        $line = 7;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span class="mx-tag" style="';
        $line = 8;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '"><span mxa="_zs_galleryb/:a" class="mx-tag-name">';
        $line = 9;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + '</span></span>';
        $line = 11;
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
    msg += $expr + '\r\n\tat file:mx-effects/icon.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        // 优先级自定义色值color > 预置类型type
        var color = extra.color, colorText, mode = extra.mode || 'solid', type = extra.type || 'common';
        if (!color) {
            // 未自定义颜色的时候
            switch (type) {
                case 'common':
                    switch (mode) {
                        case 'solid':// 实心
                            color = '#cccccc';
                            colorText = '#ffffff';
                            break;
                        case 'hollow':// 空心
                            color = '#cccccc';
                            colorText = '#999999';
                            break;
                    }
                    break;
                case 'highlight':
                    color = 'var(--color-brand)';
                    break;
                case 'error':
                    color = 'var(--color-red)';
                    break;
                case 'warn':
                    color = 'var(--color-warn)';
                    break;
                case 'pass':
                    color = 'var(--color-green)';
                    break;
            }
        }
        var styles = [];
        switch (mode) {
            case 'solid':// 实心
                styles.push("background-color: " + color, "border: 1px solid " + color, "color: " + (colorText || extra.colorText || '#ffffff'));
                break;
            case 'hollow':// 空心
                styles.push("background-color: transparent", "border: 1px solid " + color, "color: " + (colorText || extra.colorText || color));
                break;
        }
        this.updater.set({
            content: extra.content || '打标',
            styles: styles.join(';'),
            tipWidth: extra.tipWidth || 200,
            tip: extra.tip || ''
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