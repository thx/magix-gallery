/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-switch/index",["magix","mx-popover/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-switch_index_","[mx-view*=\"mx-switch/index\"] {\n  position: relative;\n  display: inline-block;\n}\n[mx-view*=\"mx-switch/index\"] ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-switch-disabled,\n[mx-view*=\"mx-switch/index\"] ._zs_gallery_mx-switch_index_-switch-text._zs_gallery_mx-switch_index_-switch-disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n._zs_gallery_mx-switch_index_-switch {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 18px;\n  cursor: pointer;\n  vertical-align: middle;\n}\n._zs_gallery_mx-switch_index_-switch ._zs_gallery_mx-switch_index_-switch-icon {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 2;\n  width: 18px;\n  height: 18px;\n  margin-top: -9px;\n  border-radius: 50%;\n  transition: left var(--duration);\n  background-color: #ccc;\n}\n._zs_gallery_mx-switch_index_-switch::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  border-radius: 9px;\n  opacity: 0.4;\n  background-color: #ccc;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  left: 22px;\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on::after {\n  opacity: 0.2;\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-switch_index_-reason {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: not-allowed;\n}\n");
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
} ; var $g = '', $_temp, $p = '', on = $$.on, disabled = $$.disabled, tip = $$.tip; var $expr, $art, $line; try {
    $p += '<span class="_zs_gallery_mx-switch_index_-switch ';
    $line = 1;
    $art = '= _zs_gallery_mx-switch_index_-on ? \'on\' : \'\'';
    ;
    $p += ($expr = '<%=on ? \'_zs_gallery_mx-switch_index_-on\' : \'\'%>', $e(on ? '_zs_gallery_mx-switch_index_-on' : '')) + ' ';
    $line = 1;
    $art = '= disabled ? \'switch-disabled\' : \'\'';
    ;
    $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-switch_index_-switch-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-switch_index_-switch-disabled' : '')) + '" mx-click="' + $viewId + '@{toggle}()"><span mxs="_zs_galleryd::_" class="_zs_gallery_mx-switch_index_-switch-icon"></span></span>';
    $line = 4;
    $art = 'if (disabled && tip)';
    ;
    $expr = '<%if (disabled && tip) {%>';
    if (disabled && tip) {
        ;
        $p += '<span class="_zs_gallery_mx-switch_index_-reason" mx-view="mx-popover/index?width=240&content=';
        $line = 8;
        $art = '=tip';
        ;
        $p += ($expr = '<%!$eu(tip)%>', $eu(tip)) + '"></span>';
        $line = 9;
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
        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        var disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');
        that.updater.set({
            on: (extra.state + '' === 'true'),
            disabled: disabled,
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