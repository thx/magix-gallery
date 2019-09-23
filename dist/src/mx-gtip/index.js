/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/index",["magix","$","mx-color/util","mx-util/css-var"],(require,exports,module)=>{
/*Magix,$,ColorUtil,CSSVarUtil*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-gtip_index_","._zs_gallery_mx-gtip_index_-gtip {\n  opacity: 0;\n  position: fixed;\n  left: 0;\n  z-index: 100000;\n  width: 100%;\n  height: 0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n  padding-right: 50px;\n  line-height: 1.5;\n  text-align: center;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-gtip_index_-gtip ._zs_gallery_mx-gtip_index_-close {\n  opacity: 0.5;\n  position: absolute;\n  top: 50%;\n  right: 14px;\n  width: 26px;\n  height: 26px;\n  margin-top: -13px;\n  line-height: 26px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 50%;\n  transition: all var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-gtip_index_-gtip ._zs_gallery_mx-gtip_index_-close:hover {\n  opacity: 1;\n}\n._zs_gallery_mx-gtip_index_-gtip-show {\n  opacity: 1;\n  height: auto;\n}\n");
var ColorUtil = require("mx-color/util");
var CSSVarUtil = require("mx-util/css-var");
var Duration = 200;
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
} ; var $g = '', $_temp, $p = '', show = $$.show, styleShow = $$.styleShow, styleHide = $$.styleHide, msg = $$.msg, timeout = $$.timeout, styles = $$.styles; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-gtip_index_-gtip ';
    $line = 1;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += ' _zs_gallery_mx-gtip_index_-gtip-show ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="';
    $line = 2;
    $art = '=(show ? styleShow : styleHide)';
    ;
    $p += ($expr = '<%=(show ? styleShow : styleHide)%>', $e((show ? styleShow : styleHide))) + '">';
    $line = 3;
    $art = 'if msg';
    ;
    $expr = '<%if (msg) {%>';
    if (msg) {
        ;
        $p += '<span>';
        $line = 4;
        $art = '!msg';
        ;
        $p += ($expr = '<%!msg%>', $n(msg)) + '</span>';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 6;
    $art = 'if !timeout';
    ;
    $expr = '<%if (!timeout) {%>';
    if (!timeout) {
        ;
        $p += '<i style="color: ';
        $line = 7;
        $art = '=styles.color';
        ;
        $p += ($expr = '<%=styles.color%>', $e(styles.color)) + ';" class="mc-iconfont _zs_gallery_mx-gtip_index_-close" mx-click="' + $viewId + '@{close}()">&#xe603;</i>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg_1 = 'render view error:' + (ex.message || ex);
    if ($art)
        msg_1 += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg_1 += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg_1 += $expr + '\r\n\tat file:mx-gtip/index.html';
    throw msg_1;
} return $p; },
    init: function (extra) {
        var that = this;
        that.viewOptions = extra;
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].on('@{add}', function (e) {
            that.viewOptions = e;
            that['@{show}']();
        });
        that.on('destroy', function () {
            that['@{clear.timer}']();
            that.owner.unmountVframe(that.id);
            that['@{owner.node}'].remove();
        });
    },
    render: function () {
        var that = this;
        that.updater.digest({
            show: false,
            styleShow: '',
            styleHide: '',
            styles: {}
        });
        that['@{show}']();
    },
    '@{show}': function (e) {
        var that = this;
        that['@{clear.timer}']();
        // timeout, 
        // type: 'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示',
        // singleton: 单实例，多实例，默认true
        // styles: {} //驼峰，直接覆盖样式
        var viewOptions = that.viewOptions;
        var displayType = viewOptions.displayType || 'common';
        var colorKey, colorBg, colorText;
        switch (displayType) {
            case 'common':
                colorBg = 'rgba(33, 33, 33, .72)';
                colorText = '#ffffff';
                break;
            case 'highlight':
                colorKey = '--color-brand';
                colorText = '#666666';
                break;
            case 'error':
                colorKey = '--color-red';
                colorText = '#666666';
                break;
            case 'warn':
                colorKey = '--color-warn';
                colorText = '#666666';
                break;
        }
        if (colorKey) {
            var color = CSSVarUtil.get(colorKey, '#4d7fff');
            var result = ColorUtil.toRgb(color);
            colorBg = ColorUtil.toHex({
                r: result.r,
                g: result.g,
                b: result.b,
                alpha: 0.1
            });
        }
        var styles = viewOptions.styles || {};
        styles.backgroundColor = styles.backgroundColor || colorBg;
        styles.color = styles.color || colorText;
        styles.top = styles.top || '0px';
        var msg = viewOptions.msg, timeout = viewOptions.timeout;
        that.updater.digest(Magix.mix({
            msg: msg,
            timeout: timeout,
            displayType: displayType,
            styles: styles
        }, that['@{to.line}'](styles)));
        that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(function () {
            that.updater.digest({
                show: true
            });
        }), Duration);
        if (timeout) {
            that['@{custom.hide.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{close}<click>']();
            }), timeout);
        }
    },
    /**
     * 驼峰转换连接线
     */
    '@{to.line}': function (styles) {
        var arrShow = [], arrHide = [];
        for (var key in styles) {
            var val = styles[key] + '';
            var name = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            arrShow.push(name + ':' + val);
            arrHide.push(name + ':' + (key == 'top' ? ((+val.replace('px', '') - 32) + 'px') : val));
        }
        return {
            styleShow: arrShow.join(';') + ';',
            styleHide: arrHide.join(';') + ';'
        };
    },
    '@{close}<click>': function (e) {
        var that = this;
        that['@{clear.timer}']();
        that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(function () {
            that.updater.digest({
                show: false
            });
        }), Duration);
    },
    '@{clear.timer}': function () {
        var that = this;
        if (that['@{custom.hide.timer}']) {
            clearTimeout(that['@{custom.hide.timer}']);
        }
        if (that['@{dealy.hide.timer}']) {
            clearTimeout(that['@{dealy.hide.timer}']);
        }
        if (that['@{dealy.show.timer}']) {
            clearTimeout(that['@{dealy.show.timer}']);
        }
    }
}, {
    /**
     * gtip(msg, timeout)
     * gtip(msg, options: {
     *      timeout,
     *      type: 'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示',
     *      style: {} //驼峰，直接覆盖样式
     *      singleton: 单实例，多实例，默认true
     * })
     */
    gtip: function (msg, options) {
        var cfg = {
            msg: msg
        };
        if ($.isPlainObject(options)) {
            // gtip(msg, options)
            cfg.displayType = options.type;
            delete options.type;
            Magix.mix(cfg, options);
            cfg.singleton = (cfg.singleton + '' !== 'false');
        }
        else {
            // gtip(msg, timeout)
            Magix.mix(cfg, {
                timeout: options,
                singleton: true
            });
        }
        var id;
        if (cfg.singleton) {
            // 只保留一个实例
            id = this.id + "_guid";
        }
        else {
            id = this.id + "_" + Magix.guid('guid_');
        }
        var node = $('#' + id);
        if (!node.length) {
            $('body').append("<div id=\"" + id + "\" />");
            this.owner.mountVframe(id, 'mx-gtip/index', cfg);
        }
        else {
            node.trigger(Magix.mix({
                type: '@{add}'
            }, cfg));
        }
    }
});

});