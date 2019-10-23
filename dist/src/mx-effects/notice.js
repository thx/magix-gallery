/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/notice",["magix","../mx-util/view"],(require,exports,module)=>{
/*magix_1,View*/

"use strict";
exports.__esModule = true;
/**
 * 提示公告组件
 */
var magix_1 = require("magix");
var View = require("../mx-util/view");
magix_1["default"].applyStyle("_zs_gallery_mx-effects_notice_","._zs_gallery_mx-effects_notice_-notice {\n  position: relative;\n  padding: 8px 24px;\n  line-height: 20px;\n  border-radius: inherit;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner {\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  word-break: break-all;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner ._zs_gallery_mx-effects_notice_-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  line-height: 20px;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-close {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  cursor: pointer;\n  color: #999;\n  font-weight: bold;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-close:hover {\n  color: #666;\n}\n");
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
} ; var $g = '', $_temp, $p = '', show = $$.show, styles = $$.styles, icon = $$.icon, colorIcon = $$.colorIcon, content = $$.content, closable = $$.closable, spm = $$.spm; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '<div class="_zs_gallery_mx-effects_notice_-notice" style="';
        $line = 2;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '">';
        $line = 3;
        $art = 'if icon';
        ;
        $expr = '<%if (icon) {%>';
        if (icon) {
            ;
            $p += '<div mxa="_zs_galleryb}:_" class="_zs_gallery_mx-effects_notice_-inner"><i class="mc-iconfont _zs_gallery_mx-effects_notice_-icon" style="color: ';
            $line = 5;
            $art = '=colorIcon';
            ;
            $p += ($expr = '<%=colorIcon%>', $e(colorIcon)) + ';">&#xe6ad;</i>';
            $line = 6;
            $art = '!content';
            ;
            $p += ($expr = '<%!content%>', $n(content)) + '</div>';
            $line = 8;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 9;
            $art = '!content';
            ;
            $p += ($expr = '<%!content%>', $n(content)) + ' ';
            $line = 10;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 12;
        $art = 'if closable';
        ;
        $expr = '<%if (closable) {%>';
        if (closable) {
            ;
            $p += '<i class="mc-iconfont _zs_gallery_mx-effects_notice_-close" mx-click="' + $viewId + 'close()" ';
            $line = 12;
            $art = 'if spm';
            ;
            $expr = '<%if (spm) {%>';
            if (spm) {
                ;
                $p += ' data-spm-click="';
                $line = 12;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + '" ';
                $line = 12;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '>&#xe603;</i>';
            $line = 12;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 14;
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
    msg += $expr + '\r\n\tat file:mx-effects/notice.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var color = extra.color, border = (extra.border + '' === 'true'), // 默认无边框 false
        radius = (extra.radius + '' === 'true'), // 默认无圆角 false
        icon = !(extra.icon + '' === 'false'), // 默认有提示icon true
        closable = (extra.closable + '' === 'true'), // 默认无关闭按钮 false
        type = extra.type || 'common', textAlign = extra.textAlign || 'left'; // 默认左对齐
        var styles = [];
        if (border) {
            // 有边框的情况下一定有圆角
            radius = true;
            styles.push('border-width: 1px', 'border-style: solid');
        }
        if (radius) {
            styles.push('border-radius: var(--border-radius)');
        }
        // 优先级自定义色值color > 预置类型type
        var colorBg, colorBorder, colorIcon, colorText;
        if (!color) {
            // 未自定义颜色的时候
            var key = void 0;
            switch (type) {
                case 'common':
                    colorBg = this['@{get.css.var}']('--color-bg', '#fafafa');
                    colorBorder = this['@{get.css.var}']('--color-border', '#e6e6e6');
                    colorIcon = '#cccccc';
                    break;
                case 'highlight':
                    key = '--color-brand';
                    break;
                case 'error':
                    key = '--color-red';
                    break;
                case 'warn':
                    key = '--color-warn';
                    break;
                case 'pass':
                    key = '--color-green';
                    break;
            }
            if (key) {
                color = this['@{get.css.var}'](key, '#4d7fff');
            }
        }
        if (color) {
            // 主体颜色，背景加透明度
            var result = this['@{color.to.rgb}'](color);
            colorBg = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.1)";
            colorBorder = color;
            colorIcon = color;
        }
        colorBg = extra.colorBg || colorBg;
        colorBorder = extra.colorBorder || colorBorder;
        colorIcon = extra.colorIcon || colorIcon;
        colorText = extra.colorText || '#666';
        styles.push('background-color:' + colorBg, 'border-color:' + colorBorder, 'color:' + colorText, 'text-align:' + textAlign);
        this.updater.set({
            show: true,
            content: extra.content || document.getElementById(this.id).innerHTML || '提示内容',
            styles: styles.join(';'),
            colorIcon: colorIcon,
            icon: icon,
            closable: closable
        });
    },
    render: function () {
        this.updater.digest();
    },
    'close<click>': function (event) {
        this.updater.digest({
            show: false
        });
    }
});

});