/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/index",["magix","mx-status/base"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-status/base");
Magix.applyStyle("_zs_gallery_mx-status_base_","._zs_gallery_mx-status_base_-status {\n  position: relative;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-icon > * {\n  font-size: 20px;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info {\n  display: block;\n  min-width: calc(var(--font-size) * 6 + 60px);\n  max-width: none;\n  top: -11px;\n  left: -11px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-icon,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: left;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name {\n  margin-left: 8px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: right;\n  color: #999;\n  font-weight: bold;\n  font-size: 20px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper {\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n  cursor: pointer;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper ._zs_gallery_mx-status_base_-oper-icon {\n  display: none;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur {\n  cursor: default;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur ._zs_gallery_mx-status_base_-oper-icon {\n  display: block;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-desc {\n  min-width: 140px;\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-tip {\n  width: 200px;\n  font-size: 12px;\n  padding: 0 10px 10px 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info._zs_gallery_mx-status_base_-status-info-dd {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon {\n  position: relative;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: calc((var(--input-small-height) - 4px) / 2);\n  right: 0;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  overflow: hidden;\n  border-style: solid;\n  border-width: 3px 3px 0 3px;\n  border-color: #999 transparent transparent transparent;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-line {\n  height: 0;\n  border-top: 1px solid var(--color-border);\n}\n[mx-view*=\"mx-status/index\"] {\n  width: 36px;\n  height: var(--input-small-height);\n  min-width: 0;\n}\n[mx-view*=\"mx-status/dropdown\"]:hover ._zs_gallery_mx-status_base_-readonly {\n  cursor: not-allowed;\n  border-color: var(--border-highlight);\n}\n");
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
} ; var $g = '', $_temp, $p = '', showInfo = $$.showInfo, info = $$.info, cur = $$.cur, opers = $$.opers, show = $$.show; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryeC:_" class="_zs_gallery_mx-status_base_-status" mx-mouseout="' + $viewId + 'out()"><div mxa="_zs_galleryeC:a" class="_zs_gallery_mx-status_base_-status-handle-icon" mx-mouseover="' + $viewId + 'over()">';
    $line = 5;
    $art = 'if showInfo';
    ;
    $expr = '<%if (showInfo) {%>';
    if (showInfo) {
        ;
        $p += '<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
        $line = 6;
        $art = '=info.color';
        ;
        $p += ($expr = '<%=info.color%>', $e(info.color)) + ';">';
        $line = 6;
        $art = '!info.icon';
        ;
        $p += ($expr = '<%!info.icon%>', $n(info.icon)) + '</span>';
        $line = 7;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
        $line = 8;
        $art = '=cur.color';
        ;
        $p += ($expr = '<%=cur.color%>', $e(cur.color)) + ';">';
        $line = 8;
        $art = '!cur.icon';
        ;
        $p += ($expr = '<%!cur.icon%>', $n(cur.icon)) + '</span>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 11;
    $art = 'if (opers.length > 0)';
    ;
    $expr = '<%if (opers.length > 0) {%>';
    if (opers.length > 0) {
        ;
        $p += '<i mxs="_zs_galleryeC:_" class="_zs_gallery_mx-status_base_-status-arrow"></i>';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 16;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '<ul mxa="_zs_galleryeC:b" class="mx-output _zs_gallery_mx-status_base_-status-info">';
        $line = 18;
        $art = 'if showInfo';
        ;
        $expr = '<%if (showInfo) {%>';
        if (showInfo) {
            ;
            $p += '<li mxa="_zs_galleryeC:c" class="_zs_gallery_mx-status_base_-status-desc clearfix"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
            $line = 20;
            $art = '=info.color';
            ;
            $p += ($expr = '<%=info.color%>', $e(info.color)) + ';">';
            $line = 20;
            $art = '!info.icon';
            ;
            $p += ($expr = '<%!info.icon%>', $n(info.icon)) + '</span><span mxa="_zs_galleryeC:d" class="_zs_gallery_mx-status_base_-status-name">';
            $line = 21;
            $art = '!info.text';
            ;
            $p += ($expr = '<%!info.text%>', $n(info.text)) + '</span></li>';
            $line = 23;
            $art = 'if info.tip';
            ;
            $expr = '<%if (info.tip) {%>';
            if (info.tip) {
                ;
                $p += '<li mxa="_zs_galleryeC:e" class="_zs_gallery_mx-status_base_-status-tip">';
                $line = 24;
                $art = '!info.tip';
                ;
                $p += ($expr = '<%!info.tip%>', $n(info.tip)) + '</li>';
                $line = 25;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 26;
            $art = 'if (opers.length > 0)';
            ;
            $expr = '<%if (opers.length > 0) {%>';
            if (opers.length > 0) {
                ;
                $p += '<li mxs="_zs_galleryeC:a" class="_zs_gallery_mx-status_base_-status-line"></li>';
                $line = 28;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 29;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 31;
        $art = 'each opers as item';
        ;
        $expr = '<%for (var $art_ihtrpkej$art_i = 0, $art_cbxuvadlqym$art_c = opers.length; $art_ihtrpkej$art_i < $art_cbxuvadlqym$art_c; $art_ihtrpkej$art_i++) {        var item = opers[$art_ihtrpkej$art_i]%>';
        for (var $art_ihtrpkej$art_i = 0, $art_cbxuvadlqym$art_c = opers.length; $art_ihtrpkej$art_i < $art_cbxuvadlqym$art_c; $art_ihtrpkej$art_i++) {
            var item = opers[$art_ihtrpkej$art_i];
            $p += '<li class="_zs_gallery_mx-status_base_-status-oper clearfix ';
            $line = 32;
            $art = 'if (item.value == cur.value)';
            ;
            $expr = '<%if (item.value == cur.value) {%>';
            if (item.value == cur.value) {
                ;
                $p += ' _zs_gallery_mx-status_base_-status-oper-cur ';
                $line = 32;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + 'select({item:\'';
            $line = 32;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
            $line = 33;
            $art = '=item.color';
            ;
            $p += ($expr = '<%=item.color%>', $e(item.color)) + ';">';
            $line = 33;
            $art = '!item.icon';
            ;
            $p += ($expr = '<%!item.icon%>', $n(item.icon)) + '</span><span mxa="_zs_galleryeC:f" class="_zs_gallery_mx-status_base_-status-name">';
            $line = 34;
            $art = '!item.text';
            ;
            $p += ($expr = '<%!item.text%>', $n(item.text)) + '</span><i mxs="_zs_galleryeC:b" class="mc-iconfont _zs_gallery_mx-status_base_-oper-icon">&#xe65d;</i></li>';
            $line = 37;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 39;
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
    msg += $expr + '\r\n\tat file:mx-status/index.html';
    throw msg;
} return $p; }
});

});