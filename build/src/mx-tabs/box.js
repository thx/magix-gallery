/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(require,exports,module)=>{
/*Magix,Base*/
require("mx-popover/index");
/**
 * 盒状分组
 */
var Magix = require("magix");
var Base = require("mx-tabs/base");
Magix.applyStyle("_zs_gallery_mx-tabs_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tabs_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-tabs_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-tag {\n  display: inline-block;\n  height: 18px;\n  padding-left: 4px;\n  padding-right: 4px;\n  line-height: 16px;\n  border-radius: 4px;\n  background-color: #4d7fff;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  font-size: 16px;\n  padding: 10px 25px 20px 25px;\n  transition: color 0.25s ease-out;\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  position: absolute;\n  top: -4px;\n  left: 100%;\n  margin-left: -26px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-name {\n  display: inline-block;\n  -webkit-transform: scale(0.92);\n          transform: scale(0.92);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag ._zs_gallery_mx-tabs_index_-tag-arrow {\n  position: absolute;\n  left: 4px;\n  top: 18px;\n  width: 0;\n  height: 0;\n  border-width: 3px;\n  border-style: solid;\n  border-color: #4d7fff #ffffff #ffffff #4d7fff;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  border-bottom: 1px solid #4d7fff;\n  transition: width 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  display: inline-block;\n  height: 32px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  cursor: pointer;\n  text-align: center;\n  padding: 0 12px;\n  transition: color 0.25s ease-out, background-color 0.25s ease-out;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: #eee;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-disabled ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  background-color: #ccc;\n}\n");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', disabled = $$.disabled, list = $$.list, selected = $$.selected; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-tabs_index_-box ';
    $line = 1;
    $art = '= _zs_gallery_mx-tabs_index_-disabled ? \'disabled\' : \'\'';
    ;
    $p += ($expr = '<%=disabled ? \'_zs_gallery_mx-tabs_index_-disabled\' : \'\'%>', $e(disabled ? '_zs_gallery_mx-tabs_index_-disabled' : '')) + '">';
    $line = 2;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ijvlfut$art_i = 0, $art_ciltkjzqy$art_c = list.length; $art_ijvlfut$art_i < $art_ciltkjzqy$art_c; $art_ijvlfut$art_i++) {    var item = list[$art_ijvlfut$art_i]%>';
    for (var $art_ijvlfut$art_i = 0, $art_ciltkjzqy$art_c = list.length; $art_ijvlfut$art_i < $art_ciltkjzqy$art_c; $art_ijvlfut$art_i++) {
        var item = list[$art_ijvlfut$art_i];
        $p += '<a href="javascript:;" ';
        $line = 3;
        $art = 'if !disabled';
        ;
        $expr = '<%if (!disabled) {%>';
        if (!disabled) {
            ;
            $p += ' mx-click="' + $viewId + '@{select}({item:\'';
            $line = 3;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' class="_zs_gallery_mx-tabs_index_-box-item ';
        $line = 3;
        $art = '= (item.value == selected) ? \'selected\' : \'\'';
        ;
        $p += ($expr = '<%=(item.value == selected) ? \'_zs_gallery_mx-tabs_index_-selected\' : \'\'%>', $e((item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : '')) + '">';
        $line = 4;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + ' ';
        $line = 5;
        $art = 'if item.tag';
        ;
        $expr = '<%if (item.tag) {%>';
        if (item.tag) {
            ;
            $p += '<span mxa="_zs_galleryc*:_" class="_zs_gallery_mx-tabs_index_-tag">';
            $line = 6;
            $art = '=item.tag';
            ;
            $p += ($expr = '<%=item.tag%>', $e(item.tag)) + '</span>';
            $line = 7;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 8;
        $art = 'if item.tips';
        ;
        $expr = '<%if (item.tips) {%>';
        if (item.tips) {
            ;
            $p += '<i class="mc-iconfont color-9 _zs_gallery_mx-tabs_index_-box-tip" mx-view="mx-popover/index?content=';
            $line = 11;
            $art = '=item.tips';
            ;
            $p += ($expr = '<%!$eu(item.tips)%>', $eu(item.tips)) + '">&#xe629;</i>';
            $line = 12;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</a>';
        $line = 14;
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
    msg += $expr + '\r\n\tat file:mx-tabs/box.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});