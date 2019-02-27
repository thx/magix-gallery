/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/dropdown",["magix","mx-status/base"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-status/base");
Magix.applyStyle("_zs_gallery_mx-status_base_","/* @dependent: ./index.less */\n._zs_gallery_mx-status_base_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-status/index\"],\n[mx-view*=\"mx-status/dropdown\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-status_base_-status {\n  position: relative;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-icon > * {\n  font-size: 20px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  z-index: 10;\n  background-color: #fff;\n  border: 0 none;\n  border-radius: 4px;\n  text-align: left;\n  word-wrap: break-word;\n  overflow: hidden;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-icon {\n  float: left;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name {\n  float: left;\n  margin-left: 8px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper {\n  min-width: 140px;\n  height: 45px;\n  line-height: 25px;\n  padding: 10px;\n  cursor: pointer;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper ._zs_gallery_mx-status_base_-oper-icon {\n  display: none;\n  float: right;\n  color: #999;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper:hover {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur {\n  cursor: default;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur ._zs_gallery_mx-status_base_-oper-icon {\n  display: block;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-desc {\n  min-width: 140px;\n  height: 45px;\n  line-height: 25px;\n  padding: 10px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-tip {\n  width: 200px;\n  font-size: 12px;\n  padding: 0 10px 10px 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info._zs_gallery_mx-status_base_-status-info-dd {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon {\n  position: relative;\n  width: 36px;\n  height: 25px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: 10.5px;\n  left: 31px;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  overflow: hidden;\n  border-style: solid;\n  border-width: 3px 3px 0 3px;\n  border-color: #999 transparent transparent transparent;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd {\n  position: relative;\n  width: 110px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-input {\n  width: 100%;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-input._zs_gallery_mx-status_base_-readonly,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-input._zs_gallery_mx-status_base_-readonly:hover {\n  border-color: #e6e6e6;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 28px;\n  height: 28px;\n  margin-top: -14px;\n  line-height: 28px;\n  text-align: center;\n  color: #ccc;\n  font-size: 20px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-line {\n  height: 0;\n  border-top: 1px solid #e6e6e6;\n}\n");
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
} ; var $g = '', $_temp, $p = '', showInfo = $$.showInfo, info = $$.info, cur = $$.cur, show = $$.show, opers = $$.opers; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydF:_" class="_zs_gallery_mx-status_base_-status" mx-mouseout="' + $viewId + 'out()"><div mxa="_zs_gallerydF:a" class="_zs_gallery_mx-status_base_-status-handle-dd" mx-mouseover="' + $viewId + 'over()">';
    $line = 5;
    $art = 'if showInfo';
    ;
    $expr = '<%if (showInfo) {%>';
    if (showInfo) {
        ;
        $p += '<span class="input _zs_gallery_mx-status_base_-status-input _zs_gallery_mx-status_base_-readonly" style="color: ';
        $line = 6;
        $art = '=info.color';
        ;
        $p += ($expr = '<%=info.color%>', $e(info.color)) + ';">';
        $line = 6;
        $art = '=info.text';
        ;
        $p += ($expr = '<%=info.text%>', $e(info.text)) + '</span>';
        $line = 7;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span class="input _zs_gallery_mx-status_base_-status-input" style="color: ';
        $line = 8;
        $art = '=cur.color';
        ;
        $p += ($expr = '<%=cur.color%>', $e(cur.color)) + ';">';
        $line = 8;
        $art = '=cur.text';
        ;
        $p += ($expr = '<%=cur.text%>', $e(cur.text)) + '</span><i mxs="_zs_gallerydF:_" class="mc-iconfont _zs_gallery_mx-status_base_-status-arrow">&#xe692;</i>';
        $line = 10;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 14;
    $art = 'if show && !showInfo && (opers.length > 0)';
    ;
    $expr = '<%if (show && !showInfo && (opers.length > 0)) {%>';
    if (show && !showInfo && (opers.length > 0)) {
        ;
        $p += '<ul mxa="_zs_gallerydF:b" class="_zs_gallery_mx-status_base_-status-info _zs_gallery_mx-status_base_-status-info-dd">';
        $line = 16;
        $art = 'each opers as item';
        ;
        $expr = '<%for (var $art_icjnzcxjepd$art_i = 0, $art_ctcmfjdvxh$art_c = opers.length; $art_icjnzcxjepd$art_i < $art_ctcmfjdvxh$art_c; $art_icjnzcxjepd$art_i++) {        var item = opers[$art_icjnzcxjepd$art_i]%>';
        for (var $art_icjnzcxjepd$art_i = 0, $art_ctcmfjdvxh$art_c = opers.length; $art_icjnzcxjepd$art_i < $art_ctcmfjdvxh$art_c; $art_icjnzcxjepd$art_i++) {
            var item = opers[$art_icjnzcxjepd$art_i];
            $p += '<li class="_zs_gallery_mx-status_base_-status-oper clearfix ';
            $line = 17;
            $art = 'if (item.value == cur.value)';
            ;
            $expr = '<%if (item.value == cur.value) {%>';
            if (item.value == cur.value) {
                ;
                $p += ' _zs_gallery_mx-status_base_-status-oper-cur ';
                $line = 17;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + 'select({item:\'';
            $line = 17;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
            $line = 18;
            $art = '=item.color';
            ;
            $p += ($expr = '<%=item.color%>', $e(item.color)) + ';">';
            $line = 18;
            $art = '!item.icon';
            ;
            $p += ($expr = '<%!item.icon%>', $n(item.icon)) + '</span><span mxa="_zs_gallerydF:c" class="_zs_gallery_mx-status_base_-status-name">';
            $line = 19;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span><i mxs="_zs_gallerydF:a" class="mc-iconfont _zs_gallery_mx-status_base_-oper-icon">&#xe65d;</i></li>';
            $line = 22;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 24;
        $art = '/if';
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
    msg += $expr + '\r\n\tat file:mx-status/dropdown.html';
    throw msg;
} return $p; }
});

});