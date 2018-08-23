/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/subs",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___subs_","/* @dependent: ./index.less */\n._zs_gallery___test___subs_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery___test___subs_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___subs_-fixed-links {\n  position: fixed;\n  top: 20px;\n  right: 30px;\n  z-index: 100;\n  padding: 10px;\n  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.08);\n  background-color: #fff;\n}\n._zs_gallery___test___subs_-fixed-links ._zs_gallery___test___subs_-fixed-link {\n  margin-bottom: 10px;\n}\n._zs_gallery___test___subs_-fixed-links ._zs_gallery___test___subs_-fixed-link:last-child {\n  margin-bottom: 0;\n}\n");
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
    $p += '<div mxa="_zs_galleryC:_" class="_zs_gallery___test___subs_-fixed-links">';
    $line = 2;
    $art = 'each list as item';
    ;
    $p += '';
    $expr = '<%for (var $art_iogpkhodtv$art_i = 0, $art_cqvwynyk$art_c = list.length; $art_iogpkhodtv$art_i < $art_cqvwynyk$art_c; $art_iogpkhodtv$art_i++) {    var item = list[$art_iogpkhodtv$art_i]%>';
    for (var $art_iogpkhodtv$art_i = 0, $art_cqvwynyk$art_c = list.length; $art_iogpkhodtv$art_i < $art_cqvwynyk$art_c; $art_iogpkhodtv$art_i++) {
        var item = list[$art_iogpkhodtv$art_i];
        $p += '<div mxa="_zs_galleryC:a" class="_zs_gallery___test___subs_-fixed-link"><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'to({key:\'';
        $line = 4;
        $art = '=item.key';
        ;
        $p += '' + ($expr = '<%=$eq(item.key)%>', $e($eq(item.key))) + '\'})">';
        $line = 4;
        $art = '=item.name';
        ;
        $p += '' + ($expr = '<%=item.name%>', $e(item.name)) + '</a></div>';
        $line = 6;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:__test__/subs.html';
    throw msg;
} return $p; },
    init: function (e) {
        var list = e.list || [];
        this.updater.set({
            list: list
        });
    },
    render: function () {
        this.updater.digest();
    },
    'to<click>': function (e) {
        var key = e.params.key;
        var node = $('#' + key);
        $(window).scrollTop(node.offset().top);
    }
});

});