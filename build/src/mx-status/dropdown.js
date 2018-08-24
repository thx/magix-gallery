/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/dropdown",["magix","mx-status/base"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-status/base");
Magix.applyStyle("_zs_gallery_mx-status_base_","/* @dependent: ./index.less */\n._zs_gallery_mx-status_base_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-status_base_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-status/index\"],\n[mx-view*=\"mx-status/dropdown\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-status_base_-status {\n  position: relative;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-icon > * {\n  font-size: 20px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  z-index: 10;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  background-color: #fff;\n  border: 0 none;\n  border-radius: 4px;\n  text-align: left;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-icon {\n  float: left;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name {\n  float: left;\n  margin-left: 8px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper {\n  width: 140px;\n  height: 45px;\n  line-height: 25px;\n  padding: 10px;\n  cursor: pointer;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper ._zs_gallery_mx-status_base_-oper-icon {\n  display: none;\n  float: right;\n  color: #999;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper:hover {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur {\n  cursor: default;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur ._zs_gallery_mx-status_base_-oper-icon {\n  display: block;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-desc {\n  width: 140px;\n  height: 45px;\n  line-height: 25px;\n  padding: 10px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-tip {\n  width: 200px;\n  font-size: 12px;\n  padding: 0 10px 10px 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info._zs_gallery_mx-status_base_-status-info-dd {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon {\n  position: relative;\n  width: 36px;\n  height: 25px;\n  line-height: 25px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: 10.5px;\n  left: 31px;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  overflow: hidden;\n  border-style: solid;\n  border-width: 3px 3px 0 3px;\n  border-color: #999 transparent transparent transparent;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd {\n  position: relative;\n  width: 110px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-input {\n  width: 100%;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-dd ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 28px;\n  height: 28px;\n  margin-top: -14px;\n  line-height: 28px;\n  text-align: center;\n  color: #ccc;\n  font-size: 20px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', readonly = $$.readonly, cur = $$.cur, show = $$.show, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb&:_" class="_zs_gallery_mx-status_base_-status" mx-mouseout="' + $viewId + 'out()"><div mxa="_zs_galleryb&:a" class="_zs_gallery_mx-status_base_-status-handle-dd" mx-mouseover="' + $viewId + 'over()"><span class="input _zs_gallery_mx-status_base_-status-input ';
    $line = 5;
    $art = 'if readonly';
    ;
    $p += '';
    $expr = '<%if (readonly) {%>';
    if (readonly) {
        ;
        $p += ' cursor-not-allow ';
        $line = 5;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '" style="color: ';
    $line = 5;
    $art = '=cur.color';
    ;
    $p += '' + ($expr = '<%=cur.color%>', $e(cur.color)) + ';">';
    $line = 5;
    $art = '=cur.text';
    ;
    $p += '' + ($expr = '<%=cur.text%>', $e(cur.text)) + '</span><i mxs="_zs_galleryb&:_" class="mc-iconfont _zs_gallery_mx-status_base_-status-arrow">&#xe692;</i></div>';
    $line = 10;
    $art = 'if show && !readonly';
    ;
    $p += '';
    $expr = '<%if (show && !readonly) {%>';
    if (show && !readonly) {
        ;
        $p += '<ul mxa="_zs_galleryb&:b" class="_zs_gallery_mx-status_base_-status-info _zs_gallery_mx-status_base_-status-info-dd">';
        $line = 12;
        $art = 'each list as item';
        ;
        $p += '';
        $expr = '<%for (var $art_ipxvqpbj$art_i = 0, $art_cfjfqikkv$art_c = list.length; $art_ipxvqpbj$art_i < $art_cfjfqikkv$art_c; $art_ipxvqpbj$art_i++) {        var item = list[$art_ipxvqpbj$art_i]%>';
        for (var $art_ipxvqpbj$art_i = 0, $art_cfjfqikkv$art_c = list.length; $art_ipxvqpbj$art_i < $art_cfjfqikkv$art_c; $art_ipxvqpbj$art_i++) {
            var item = list[$art_ipxvqpbj$art_i];
            $p += '<li class="_zs_gallery_mx-status_base_-status-oper clearfix ';
            $line = 13;
            $art = 'if (item.value == cur.value)';
            ;
            $p += '';
            $expr = '<%if (item.value == cur.value) {%>';
            if (item.value == cur.value) {
                ;
                $p += ' _zs_gallery_mx-status_base_-status-oper-cur ';
                $line = 13;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + 'select({item:\'';
            $line = 13;
            $art = '@item';
            ;
            $p += '' + ($expr = '<%@item%>', $i($$ref, item)) + '\'})"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ';
            $line = 14;
            $art = '=item.color';
            ;
            $p += '' + ($expr = '<%=item.color%>', $e(item.color)) + ';">';
            $line = 14;
            $art = '!item.icon';
            ;
            $p += '' + ($expr = '<%!item.icon%>', $n(item.icon)) + '</span><span mxa="_zs_galleryb&:c" class="_zs_gallery_mx-status_base_-status-name">';
            $line = 15;
            $art = '=item.text';
            ;
            $p += '' + ($expr = '<%=item.text%>', $e(item.text)) + '</span><i mxs="_zs_galleryb&:a" class="mc-iconfont _zs_gallery_mx-status_base_-oper-icon">&#xe65d;</i></li>';
            $line = 18;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 20;
        $art = '/if';
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
    msg += $expr + '\r\n\tat file:mx-status/dropdown.html';
    throw msg;
} return $p; }
});

});