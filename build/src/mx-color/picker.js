/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/picker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
require("./index");
Magix.applyStyle("_zs_gallery_mx-color_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-color_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-color/picker\"] {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-color/picker\"] ._zs_gallery_mx-color_index_-color-wrapper {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  width: 246px;\n}\n[mx-view*=\"mx-color/picker\"] ._zs_gallery_mx-color_index_-color-wrapper._zs_gallery_mx-color_index_-open {\n  display: block;\n  -webkit-animation: fade-in-down 0.25s ease-out;\n          animation: fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n[mx-view*=\"mx-color/picker\"] ._zs_gallery_mx-color_index_-color-input {\n  width: 100%;\n  min-width: 246px;\n}\n[mx-view*=\"mx-color/index\"] {\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-color_index_-shortcuts,\n._zs_gallery_mx-color_index_-body,\n._zs_gallery_mx-color_index_-foot {\n  width: 224px;\n}\n._zs_gallery_mx-color_index_-body {\n  margin: 10px 0;\n}\n._zs_gallery_mx-color_index_-shortcut {\n  position: relative;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: -1px 0 0 -1px;\n  border: 1px solid #333;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:before,\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:after {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:before {\n  z-index: 2;\n  border: solid 1px #fff;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:after {\n  z-index: 1;\n  border: solid 2px #333;\n}\n._zs_gallery_mx-color_index_-cpicker {\n  float: left;\n  position: relative;\n  width: 196px;\n  height: 196px;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-cpicker ._zs_gallery_mx-color_index_-cpicker-indicator {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n}\n._zs_gallery_mx-color_index_-slide {\n  float: right;\n  position: relative;\n  width: 18px;\n  height: 196px;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-slide ._zs_gallery_mx-color_index_-slide-indicator {\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  width: 0;\n  height: 0;\n  background-color: none;\n  border-right: 6px solid #333;\n  border-left: none;\n  border-bottom: 6px solid transparent;\n  border-top: 6px solid transparent;\n}\n._zs_gallery_mx-color_index_-color-value {\n  width: 104px;\n}\n._zs_gallery_mx-color_index_-bg-color {\n  height: 32px;\n  width: 50px;\n  margin-right: 10px;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-color_index_-alpha {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  width: 224px;\n  height: 12px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-color_index_-alpha-tracker {\n  height: 100%;\n}\n._zs_gallery_mx-color_index_-alpha-indicator {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  height: 8px;\n  width: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  background: #fff;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, info = $$.info, show = $$.show, left = $$.left, top = $$.top; var $expr, $art, $line; try {
    $p += '<div class="input _zs_gallery_mx-color_index_-color-input" id="input_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-click="' + $viewId + '@{toggle}()" mx-change="' + $viewId + '@{stop}()">';
    $line = 3;
    $art = '=info.color';
    ;
    $p += ($expr = '<%=info.color%>', $e(info.color)) + '</div><div mxv="info" class="_zs_gallery_mx-color_index_-color-wrapper ';
    $line = 4;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '_zs_gallery_mx-color_index_-open';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" id="cpcnt_';
    $line = 4;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" style="left:';
    $line = 5;
    $art = '=left';
    ;
    $p += ($expr = '<%=left%>', $e(left)) + 'px;top:';
    $line = 5;
    $art = '=top';
    ;
    $p += ($expr = '<%=top%>', $e(top)) + 'px;" mx-view="mx-color/index?data=';
    $line = 6;
    $art = '@info';
    ;
    $p += ($expr = '<%@info%>', $i($$ref, info)) + '" mx-change="' + $viewId + '@{color.picked}()"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-color/picker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        that.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var color = extra.color || '';
        that.updater.set({
            viewId: that.id,
            align: extra.align,
            info: {
                showBtns: true,
                showAlpha: extra.showAlpha,
                color: color
            }
        });
        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(color);
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest({});
    },
    '@{stop}<change>': function (e) {
        e.stopPropagation();
    },
    '@{toggle}<click>': function (e) {
        e.preventDefault();
        var show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        }
        else {
            this['@{show}']();
        }
    },
    '@{show}': function () {
        var that = this;
        var updater = that.updater;
        var show = updater.get('show');
        if (!show) {
            updater.digest({
                show: true
            });
            var inputNode = $('#input_' + that.id), calNode = $('#cpcnt_' + that.id);
            var gap = 10;
            var left = 0, top = inputNode.outerHeight() + gap;
            var align = updater.get('align');
            if (align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }
            updater.digest({
                top: top,
                left: left
            });
            Monitor['@{add}'](that);
        }
    },
    '@{hide}': function () {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            var info = that.updater.get('info');
            var color = that['@{owner.node}'].val();
            info.color = color;
            that.updater.digest({
                show: false,
                info: info
            });
            Monitor['@{remove}'](that);
        }
    },
    '@{inside}': function (node) {
        var that = this;
        var inView = Magix.inside(node, that.id) ||
            Magix.inside(node, that['@{owner.node}'][0]);
        if (!inView) {
            var children = that.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    '@{color.picked}<change>': function (e) {
        e.stopPropagation();
        var that = this;
        that['@{owner.node}'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
        that['@{hide}']();
    }
});

});