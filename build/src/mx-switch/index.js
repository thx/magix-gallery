/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-switch/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-switch_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-switch_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-switch_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-switch/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-switch_index_-switch {\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: #e6e6e6;\n  cursor: pointer;\n}\n._zs_gallery_mx-switch_index_-switch ._zs_gallery_mx-switch_index_-switch-icon {\n  opacity: .95;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background-color: #ccc;\n  transition: left 0.25s;\n  -moz-transition: left 0.25s;\n  -webkit-transition: left 0.25s;\n  -o-transition: left 0.25s;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on {\n  background-color: #d8e3ff;\n}\n._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  left: 22px;\n  background-color: #4d7fff;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, on = $$.on; var $expr, $art, $line; try {
    $p += '<span class="_zs_gallery_mx-switch_index_-switch ';
    $line = 1;
    $art = '= _zs_gallery_mx-switch_index_-on ? \'on\' : \'\'';
    ;
    $p += '' + ($expr = '<%=on?\'_zs_gallery_mx-switch_index_-on\':\'\'%>', $e(on ? '_zs_gallery_mx-switch_index_-on' : '')) + '" mx-click="' + $viewId + '@{toggle}()"><span mxs="_zs_galleryb{:_" class="_zs_gallery_mx-switch_index_-switch-icon"></span></span>';
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
        that['@{node.state}'] = (/^true$/i).test(extra.state) || false;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            on: that['@{node.state}']
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
        var state = !that['@{node.state}'];
        that.updater.set({
            on: state
        }).digest();
        that['@{node.state}'] = state;
        var event = $.Event('change', {
            state: state
        });
        that['@{owner.node}'].trigger(event);
    }
});

});