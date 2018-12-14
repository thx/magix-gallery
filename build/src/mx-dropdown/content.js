/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","/*md5:e33322d43826cc01fd5079540ab09358*/\n/* @dependent: ./index.less */\n._zs_gallery_mx-dropdown_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  position: relative;\n  width: 100%;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label._zs_gallery_mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #ccc;\n  transition: top 0.25s, -webkit-transform 0.25s;\n  transition: transform 0.25s, top 0.25s;\n  transition: transform 0.25s, top 0.25s, -webkit-transform 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle._zs_gallery_mx-dropdown_index_-open ._zs_gallery_mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-dropdown_index_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-header-item ._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: none;\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  min-width: 100%;\n  max-width: 200%;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  padding: 10px 10px 0 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 100%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-header {\n  padding-left: 2px;\n  padding-right: 2px;\n  color: #999;\n  cursor: default;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom {\n  top: 100%;\n  margin-top: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top {\n  bottom: 100%;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 200px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/bd\"],\n[mx-view*=\"mx-dropdown/multiple\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  height: 32px;\n  line-height: 30px;\n  vertical-align: middle;\n  background-color: #fff;\n  outline: 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"] ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #ccc;\n  color: #666;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n._zs_gallery_mx-dropdown_index_-footer-wrapper {\n  padding: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected; var $expr, $art, $line; try {
    $p += '<ul mxa="_zs_galleryaO:_" class="_zs_gallery_mx-dropdown_index_-dropdown-menu">';
    $line = 2;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iraukhysiaf$art_i = 0, $art_comfbziqj$art_c = list.length; $art_iraukhysiaf$art_i < $art_comfbziqj$art_c; $art_iraukhysiaf$art_i++) {    var item = list[$art_iraukhysiaf$art_i]%>';
    for (var $art_iraukhysiaf$art_i = 0, $art_comfbziqj$art_c = list.length; $art_iraukhysiaf$art_i < $art_comfbziqj$art_c; $art_iraukhysiaf$art_i++) {
        var item = list[$art_iraukhysiaf$art_i];
        $p += '<li title="';
        $line = 3;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item"><span class="_zs_gallery_mx-dropdown_index_-item-link ellipsis ';
        $line = 4;
        $art = 'if ((item.value+\'\')===(selected+\'\'))';
        ;
        $expr = '<%if ((item.value + \'\') === (selected + \'\')) {%>';
        if ((item.value + '') === (selected + '')) {
            ;
            $p += ' _zs_gallery_mx-dropdown_index_-active ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-click="' + $viewId + '@{select}({item:\'';
        $line = 5;
        $art = '@item';
        ;
        $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})">';
        $line = 6;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span></li>';
        $line = 9;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</ul>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        this.updater.set(e.data);
    },
    render: function () {
        this.updater.digest({});
    },
    '@{select}<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(e.params.item);
        }
    }
});

});