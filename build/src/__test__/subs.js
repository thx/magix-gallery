/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/subs",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___subs_","/* @dependent: ./index.less */\n._zs_gallery___test___subs_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery___test___subs_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___subs_-fixed-links {\n  position: fixed;\n  top: 20px;\n  right: 30px;\n  z-index: 100;\n  padding: 10px;\n  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.08);\n  background-color: #fff;\n}\n._zs_gallery___test___subs_-fixed-links ._zs_gallery___test___subs_-fixed-link {\n  margin-bottom: 10px;\n}\n._zs_gallery___test___subs_-fixed-links ._zs_gallery___test___subs_-fixed-link:last-child {\n  margin-bottom: 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryD:_" class="_zs_gallery___test___subs_-fixed-links">';
    $line = 2;
    $art = 'each list as item';
    ;
    $p += '';
    $expr = '<%for(var $art_iaovaq$art_i=0;$art_iaovaq$art_i<list.length;$art_iaovaq$art_i++){var item=list[$art_iaovaq$art_i]%>';
    for (var $art_iaovaq$art_i = 0; $art_iaovaq$art_i < list.length; $art_iaovaq$art_i++) {
        var item = list[$art_iaovaq$art_i];
        $p += '<div mxa="_zs_galleryD:a" class="_zs_gallery___test___subs_-fixed-link"><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'to({key:\'';
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