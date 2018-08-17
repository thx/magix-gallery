/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/custom",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popconfirm___test___custom_","/* @dependent: ./index.less */\n._zs_gallery_mx-popconfirm___test___custom_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-popconfirm___test___custom_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popconfirm___test___custom_-custom {\n  border-radius: 4px;\n}\n._zs_gallery_mx-popconfirm___test___custom_-custom ._zs_gallery_mx-popconfirm___test___custom_-custom-title {\n  padding: 10px;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-popconfirm___test___custom_-custom ._zs_gallery_mx-popconfirm___test___custom_-custom-item {\n  float: left;\n  width: 33.3%;\n  padding: 10px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybj:_" class="_zs_gallery_mx-popconfirm___test___custom_-custom"><div mxs="_zs_gallerybj:_" class="_zs_gallery_mx-popconfirm___test___custom_-custom-title">标题标题</div><div mxa="_zs_gallerybj:a" class="clearfix">';
    $line = 5;
    $art = 'each list as item';
    ;
    $p += '';
    $expr = '<%for(var $art_iptweix$art_i=0;$art_iptweix$art_i<list.length;$art_iptweix$art_i++){var item=list[$art_iptweix$art_i]%>';
    for (var $art_iptweix$art_i = 0; $art_iptweix$art_i < list.length; $art_iptweix$art_i++) {
        var item = list[$art_iptweix$art_i];
        $p += '<div mxa="_zs_gallerybj:b" class="_zs_gallery_mx-popconfirm___test___custom_-custom-item"><div mxa="_zs_gallerybj:c" class="mb5 color-9">';
        $line = 7;
        $art = '=item.name';
        ;
        $p += '' + ($expr = '<%=item.name%>', $e(item.name)) + '</div><div mxs="_zs_gallerybj:a">-</div></div>';
        $line = 10;
        $art = '/each';
        ;
        $p += '';
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
    msg += $expr + '\r\n\tat file:mx-popconfirm/__test__/custom.html';
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