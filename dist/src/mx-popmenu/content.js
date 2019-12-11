/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popmenu_content_","._zs_gallery_mx-popmenu_content_-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  -webkit-transition: all var(--duration);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link:hover {\n  background-color: var(--color-bg-hover);\n}\n");
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
} ; var $g = '', $_temp, $p = '', menus = $$.menus; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydT:_" class="_zs_gallery_mx-popmenu_content_-menu">';
    $line = 2;
    $art = 'each menus as item';
    ;
    $expr = '<%for (var $art_ihmndzcwioa$art_i = 0, $art_cexhlh$art_c = menus.length; $art_ihmndzcwioa$art_i < $art_cexhlh$art_c; $art_ihmndzcwioa$art_i++) {    var item = menus[$art_ihmndzcwioa$art_i]%>';
    for (var $art_ihmndzcwioa$art_i = 0, $art_cexhlh$art_c = menus.length; $art_ihmndzcwioa$art_i < $art_cexhlh$art_c; $art_ihmndzcwioa$art_i++) {
        var item = menus[$art_ihmndzcwioa$art_i];
        $p += '<div mxa="_zs_gallerydT:a" class="_zs_gallery_mx-popmenu_content_-item"><span class="_zs_gallery_mx-popmenu_content_-item-link ellipsis" mx-click="' + $viewId + 'submit({value:\'';
        $line = 5;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})">';
        $line = 6;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span></div>';
        $line = 9;
        $art = '/each';
        ;
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
    msg += $expr + '\r\n\tat file:mx-popmenu/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        var data = e.data || {};
        this.updater.set({
            menus: data.menus
        });
    },
    render: function () {
        this.updater.digest({});
    },
    'submit<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(e.params.value);
        }
    }
});

});