/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-switch/index",["magix","mx-popover/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-switch_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-switch_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-switch/index\"] {\n  position: relative;\n  display: inline-block;\n}\n._zs_gallery_mx-switch_index_-switch {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: #e6e6e6;\n  cursor: pointer;\n}\n._zs_gallery_mx-switch_index_-switch ._zs_gallery_mx-switch_index_-switch-icon {\n  opacity: 0.95;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  margin-top: -9px;\n  border-radius: 50%;\n  background-color: #ccc;\n  transition: left 0.25s;\n  -moz-transition: left 0.25s;\n  -webkit-transition: left 0.25s;\n  -o-transition: left 0.25s;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on {\n  background-color: #d8e3ff;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  left: 22px;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n._zs_gallery_mx-switch_index_-switch-text {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n._zs_gallery_mx-switch_index_-switch-text::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-open,\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-close {\n  transition: color 0.25s;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-open {\n  color: #999;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-close {\n  color: #fff;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-text,\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-switch-icon {\n  display: inline-block;\n  width: 24px;\n  height: 18px;\n  text-align: center;\n  line-height: 18px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-text {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-switch_index_-switch-text ._zs_gallery_mx-switch_index_-switch-icon {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 2;\n  background-image: linear-gradient(to right, #4d7fff, #4d7fff);\n  background-image: -moz-linear-gradient(right, #4d7fff, #4d7fff);\n  transition: left 0.25s;\n  -moz-transition: left 0.25s;\n  -webkit-transition: left 0.25s;\n  -o-transition: left 0.25s;\n}\n._zs_gallery_mx-switch_index_-switch-text._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-open {\n  color: #fff;\n}\n._zs_gallery_mx-switch_index_-switch-text._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-close {\n  color: #999;\n}\n._zs_gallery_mx-switch_index_-switch-text._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  left: 0;\n}\n._zs_gallery_mx-switch_index_-switch-text._zs_gallery_mx-switch_index_-disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n._zs_gallery_mx-switch_index_-reason {\n  cursor: not-allowed;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n");
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
} ; var $g = '', $_temp, $p = '', text = $$.text, on = $$.on, disabled = $$.disabled, tip = $$.tip; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if text';
    ;
    $expr = '<%if (text) {%>';
    if (text) {
        ;
        $p += '<span class="_zs_gallery_mx-switch_index_-switch-text ';
        $line = 2;
        $art = '= _zs_gallery_mx-switch_index_-on ? \'on\' : \'\'';
        ;
        $p += ($expr = '<%=on ? \'_zs_gallery_mx-switch_index_-on\' : \'\'%>', $e(on ? '_zs_gallery_mx-switch_index_-on' : '')) + ' ';
        $line = 2;
        $art = '= _zs_gallery_mx-switch_index_-disabled ? \'disabled\' : \'\'';
        ;
        $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-switch_index_-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-switch_index_-disabled' : '')) + '" mx-click="' + $viewId + '@{toggle}()"><span mxs="_zs_gallerydD:_" class="_zs_gallery_mx-switch_index_-text _zs_gallery_mx-switch_index_-open">开</span><span mxs="_zs_gallerydD:a" class="_zs_gallery_mx-switch_index_-text _zs_gallery_mx-switch_index_-close">关</span><span mxs="_zs_gallerydD:b" class="_zs_gallery_mx-switch_index_-switch-icon"></span></span>';
        $line = 8;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span class="_zs_gallery_mx-switch_index_-switch ';
        $line = 9;
        $art = '= _zs_gallery_mx-switch_index_-on ? \'on\' : \'\'';
        ;
        $p += ($expr = '<%=on ? \'_zs_gallery_mx-switch_index_-on\' : \'\'%>', $e(on ? '_zs_gallery_mx-switch_index_-on' : '')) + ' ';
        $line = 9;
        $art = '= _zs_gallery_mx-switch_index_-disabled ? \'disabled\' : \'\'';
        ;
        $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-switch_index_-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-switch_index_-disabled' : '')) + '" mx-click="' + $viewId + '@{toggle}()"><span mxs="_zs_gallerydD:b" class="_zs_gallery_mx-switch_index_-switch-icon"></span></span>';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 14;
    $art = 'if (disabled && tip)';
    ;
    $expr = '<%if (disabled && tip) {%>';
    if (disabled && tip) {
        ;
        $p += '<span class="_zs_gallery_mx-switch_index_-reason" mx-view="mx-popover/index?content=';
        $line = 17;
        $art = '=tip';
        ;
        $p += ($expr = '<%!$eu(tip)%>', $eu(tip)) + '"></span>';
        $line = 18;
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
    msg += $expr + '\r\n\tat file:mx-switch/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            on: (extra.state + '' === 'true'),
            disabled: (extra.disabled + '' === 'true'),
            tip: extra.tip || '',
            text: (extra.mode == 'text')
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
    },
    '@{toggle}<click>': function (e) {
        var that = this;
        var updater = that.updater;
        if (updater.get('disabled')) {
            return;
        }
        var state = !updater.get('on');
        that.updater.set({
            on: state
        }).digest();
        var event = $.Event('change', {
            state: state
        });
        that['@{owner.node}'].val(state).trigger(event);
    }
});

});