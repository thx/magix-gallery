/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/custom",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popover___test___custom_","/* @dependent: ./index.less */\n._zs_gallery_mx-popover___test___custom_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popover___test___custom_-custom {\n  border-radius: 4px;\n}\n._zs_gallery_mx-popover___test___custom_-custom ._zs_gallery_mx-popover___test___custom_-custom-title {\n  padding: 10px;\n  background-color: #fafafa;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n._zs_gallery_mx-popover___test___custom_-custom ._zs_gallery_mx-popover___test___custom_-custom-item {\n  float: left;\n  width: 33.3%;\n  padding: 10px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycr:_" class="_zs_gallery_mx-popover___test___custom_-custom"><div mxs="_zs_gallerycr:_" class="_zs_gallery_mx-popover___test___custom_-custom-title">标题标题</div><div mxa="_zs_gallerycr:a" class="clearfix">';
    $line = 5;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ivbfucczss$art_i = 0, $art_cttnwuv$art_c = list.length; $art_ivbfucczss$art_i < $art_cttnwuv$art_c; $art_ivbfucczss$art_i++) {    var item = list[$art_ivbfucczss$art_i]%>';
    for (var $art_ivbfucczss$art_i = 0, $art_cttnwuv$art_c = list.length; $art_ivbfucczss$art_i < $art_cttnwuv$art_c; $art_ivbfucczss$art_i++) {
        var item = list[$art_ivbfucczss$art_i];
        $p += '<div mxa="_zs_gallerycr:b" class="_zs_gallery_mx-popover___test___custom_-custom-item"><div mxa="_zs_gallerycr:c" class="mb5 color-9">';
        $line = 7;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</div><div mxs="_zs_gallerycr:a">-</div></div>';
        $line = 10;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/custom.html';
    throw msg;
} return $p; },
    init: function (e) {
        var that = this;
        this.updater.set(e.data);
    },
    render: function () {
        var that = this;
        var loc = Magix.Router.parse();
        that.updater.digest({});
    }
});

});