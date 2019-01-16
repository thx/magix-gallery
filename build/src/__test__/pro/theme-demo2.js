/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/theme-demo2",["magix","../example","mx-form/index","mx-form/validator","$","moment","mx-dropdown/index","mx-calendar/datepicker","mx-switch/index","mx-slider/index"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$,Moment*/
require("mx-dropdown/index");
require("mx-calendar/datepicker");
require("mx-switch/index");
require("mx-slider/index");
var Magix = require("magix");
var Base = require("../example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
var Moment = require("moment");
var Formater = 'YYYY-MM-DD';
Magix.applyStyle("_zs_gallery___test___pro_theme-demo2_","/* @dependent: ./index.less */\n._zs_gallery___test___pro_theme-demo2_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on {\n  background-color: #ffddc7;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #ff6600;\n  background-color: #fff7f2;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-slider_style_-rail-wrapper ._zs_gallery_mx-slider_style_-rail ._zs_gallery_mx-slider_style_-tracker {\n  background-color: #ffb380;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-slider_style_-rail-wrapper ._zs_gallery_mx-slider_style_-rail ._zs_gallery_mx-slider_style_-indicator {\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-slider_style_-rail-wrapper ._zs_gallery_mx-slider_style_-rail ._zs_gallery_mx-slider_style_-indicator:before {\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  color: #ffb400;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus:hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus:hover {\n  color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today:hover {\n  background-color: #fff7f2;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected:hover {\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs1 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-range ._zs_gallery_mx-calendar_range_-range-input ._zs_gallery_mx-calendar_range_-vs2 ._zs_gallery_mx-calendar_rangepicker_-result {\n  color: #ffb400;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery_mx-calendar_range_-wrapper ._zs_gallery_mx-calendar_range_-shortcuts ._zs_gallery_mx-calendar_range_-st._zs_gallery_mx-calendar_range_-selected:hover {\n  background: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-checkbox:hover {\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-checkbox:checked {\n  border-color: #ff6600;\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-checkbox:indeterminate {\n  background-color: #ff6600;\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-radio:hover {\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-radio:checked {\n  background-color: #ff6600;\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-radio:checked:hover {\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn {\n  border-radius: 16px;\n  border-color: #ff6600;\n  background-color: #fff7f2;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn:hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn._zs_gallery___test___pro_theme-demo2_-hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn:active {\n  color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn._zs_gallery___test___pro_theme-demo2_-demo-btn-brand {\n  color: #fff;\n  border-color: #ff6600;\n  background-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn._zs_gallery___test___pro_theme-demo2_-demo-btn-brand:hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn._zs_gallery___test___pro_theme-demo2_-demo-btn-brand._zs_gallery___test___pro_theme-demo2_-hover,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-btn._zs_gallery___test___pro_theme-demo2_-demo-btn-brand:active {\n  color: #fff;\n  border-color: #eb5e00;\n  background-color: #eb5e00;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-input:focus {\n  border-color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-link,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-link:visited,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-link:focus,\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-link:active {\n  color: #ff6600;\n}\n._zs_gallery___test___pro_theme-demo2_-demo2 ._zs_gallery___test___pro_theme-demo2_-demo-link:hover {\n  color: #eb5e00;\n}\n");
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, radioes = $$.radioes; var $expr, $art, $line; try {
    $p += '<form mxv mxa="_zs_galleryJ:_" class="form _zs_gallery___test___pro_theme-demo2_-demo2"><div mxv mxa="_zs_galleryJ:a" class="form-item"><div mxs="_zs_galleryJ:_" class="form-label">checkbox</div><div mxv mxa="_zs_galleryJ:b" class="form-content">';
    $line = 5;
    $art = 'each checkboxes as c';
    ;
    $expr = '<%for (var $art_ikarhlacle$art_i = 0, $art_crikuxwd$art_c = checkboxes.length; $art_ikarhlacle$art_i < $art_crikuxwd$art_c; $art_ikarhlacle$art_i++) {    var c = checkboxes[$art_ikarhlacle$art_i]%>';
    for (var $art_ikarhlacle$art_i = 0, $art_crikuxwd$art_c = checkboxes.length; $art_ikarhlacle$art_i < $art_crikuxwd$art_c; $art_ikarhlacle$art_i++) {
        var c = checkboxes[$art_ikarhlacle$art_i];
        $p += '<label mxv mxa="_zs_galleryJ:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 10;
        $art = ':selected.checkboxes';
        ;
        $p += '{p:\'selected.checkboxes\'}]" type="checkbox" class="_zs_gallery___test___pro_theme-demo2_-demo-checkbox checkbox" name="cb" value="';
        $line = 9;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '"/>';
        $line = 11;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 13;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_galleryJ:d" class="form-item"><div mxs="_zs_galleryJ:a" class="form-label">radio</div><div mxv mxa="_zs_galleryJ:e" class="form-content">';
    $line = 19;
    $art = 'each radioes as r';
    ;
    $expr = '<%for (var $art_ictgvbzmpn$art_i = 0, $art_crqgiqws$art_c = radioes.length; $art_ictgvbzmpn$art_i < $art_crqgiqws$art_c; $art_ictgvbzmpn$art_i++) {    var r = radioes[$art_ictgvbzmpn$art_i]%>';
    for (var $art_ictgvbzmpn$art_i = 0, $art_crqgiqws$art_c = radioes.length; $art_ictgvbzmpn$art_i < $art_crqgiqws$art_c; $art_ictgvbzmpn$art_i++) {
        var r = radioes[$art_ictgvbzmpn$art_i];
        $p += '<label mxv mxa="_zs_galleryJ:f" class="mr30"><input mxe="' + $viewId + '_1" mxc="[';
        $line = 24;
        $art = ':selected.radio';
        ;
        $p += '{p:\'selected.radio\'}]" type="radio" class="_zs_gallery___test___pro_theme-demo2_-demo-radio radio" name="magix" value="';
        $line = 23;
        $art = '=r';
        ;
        $p += ($expr = '<%=r%>', $e(r)) + '"/>';
        $line = 25;
        $art = '=r';
        ;
        $p += ($expr = '<%=r%>', $e(r)) + '</label>';
        $line = 27;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_galleryJ:g" class="form-item"><div mxs="_zs_galleryJ:b" class="form-label">dropdown</div><div mxv mxa="_zs_galleryJ:h" class="form-content"><div mxv="selected" mxe="' + $viewId + '_2" mxc="[';
    $line = 35;
    $art = ':selected.day';
    ;
    $p += '{p:\'selected.day\',a:\'selected\'}]" class="w220" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=';
    $line = 35;
    $art = ':selected.day';
    ;
    $p += ($expr = '<%@selected.day%>', $i($$ref, selected.day)) + '"><i mxs="_zs_galleryJ:c" value="1" class="none">1</i><i mxs="_zs_galleryJ:d" value="2" class="none">2</i></div></div></div><div mxv mxa="_zs_galleryJ:i" class="form-item"><div mxs="_zs_galleryJ:e" class="form-label">输入框</div><div mxv mxa="_zs_galleryJ:j" class="form-content"><input mxe="' + $viewId + '_3" mxc="[';
    $line = 45;
    $art = ':selected.name';
    ;
    $p += '{p:\'selected.name\'}]" class="input w220 _zs_gallery___test___pro_theme-demo2_-demo-input" placeholder="必填项" value="';
    $line = 45;
    $art = ':selected.name';
    ;
    $p += ($expr = '<%=selected.name%>', $e(selected.name)) + '"/><a mxs="_zs_galleryJ:f" rel="noopener noreferrer" href="https://thx.github.io/magix/" target="_blank" class="ml20 _zs_gallery___test___pro_theme-demo2_-demo-link">跳转链接</a></div></div><div mxa="_zs_galleryJ:k" class="form-item"><div mxs="_zs_galleryJ:g" class="form-label">日历</div><div mxa="_zs_galleryJ:l" class="form-content"><div class="w220" mx-view="mx-calendar/datepicker?prefix=%E6%88%AA%E6%AD%A2%E8%87%B3&selected=';
    $line = 54;
    $art = '=selected.time';
    ;
    $p += ($expr = '<%!$eu(selected.time)%>', $eu(selected.time)) + '"></div></div></div><div mxa="_zs_galleryJ:m" class="form-item"><div mxs="_zs_galleryJ:h" class="form-label">开关</div><div mxa="_zs_galleryJ:n" class="form-content"><span mxe="' + $viewId + '_4_' + ($expr = '<%="switch"%>', $e("switch")) + '" mxc="[';
    $line = 61;
    $art = ':selected.switch';
    ;
    $p += '{p:\'selected.' + ($expr = '<%="switch"%>', $e("switch")) + '\',a:\'state\'}]" class="mr20" style="margin-top: 7px;" mx-view="mx-switch/index?state=';
    $line = 61;
    $art = ':selected.switch';
    ;
    $p += ($expr = '<%@selected["switch"]%>', $i($$ref, selected["switch"])) + '"></span></div></div><div mxs="_zs_galleryJ:i" class="form-item"><div class="form-label">滑块</div><div class="form-content"><div mx-view="mx-slider/index?width=220&max=200&min=100&step=1"></div></div></div><div mxs="_zs_galleryJ:j" class="form-item"><a href="javascript:;" class="btn btn-brand w80 _zs_gallery___test___pro_theme-demo2_-demo-btn _zs_gallery___test___pro_theme-demo2_-demo-btn-brand mr20">确认</a><a href="javascript:;" class="btn w80 _zs_gallery___test___pro_theme-demo2_-demo-btn">取消</a></div></form>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/theme-demo2.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                "switch": true,
                radio: 'radio2',
                checkboxes: ['checkbox1'],
                time: Moment().subtract(1, 'days').format(Formater)
            }
        });
    }
});

});