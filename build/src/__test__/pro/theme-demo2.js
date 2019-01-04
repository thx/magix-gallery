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
Magix.applyStyle("_zs_galleryi","._zs_gallerybh{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerybi ._zs_galleryaF._zs_galleryaG{background-color:#ffddc7}._zs_gallerybi ._zs_galleryaF._zs_galleryaG ._zs_galleryaH{background-color:#f60}._zs_gallerybi ._zs_galleryaI._zs_galleryaJ,._zs_gallerybi ._zs_galleryaI._zs_galleryaJ:active,._zs_gallerybi ._zs_galleryaI._zs_galleryaJ:focus,._zs_gallerybi ._zs_galleryaI._zs_galleryaJ:hover{color:#f60;background-color:#fff7f2}._zs_gallerybi ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{background-color:#ffb380}._zs_gallerybi ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,._zs_gallerybi ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before{background-color:#f60}._zs_gallerybi ._zs_galleryaO._zs_galleryaP ._zs_galleryaQ{color:#f60}._zs_gallerybi ._zs_galleryaO._zs_galleryaP ._zs_galleryaR{color:#ffb400}._zs_gallerybi ._zs_galleryaS ._zs_galleryaT ._zs_galleryaU:hover,._zs_gallerybi ._zs_galleryaS ._zs_galleryaT ._zs_galleryaV:hover{color:#f60}._zs_gallerybi ._zs_galleryaS ._zs_galleryaW ._zs_galleryaX,._zs_gallerybi ._zs_galleryaS ._zs_galleryaW ._zs_galleryaX:hover{background-color:#fff7f2}._zs_gallerybi ._zs_galleryaS ._zs_galleryaW ._zs_galleryaY,._zs_gallerybi ._zs_galleryaS ._zs_galleryaW ._zs_galleryaY:hover{background-color:#f60}._zs_gallerybi ._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerybb ._zs_galleryaO{color:#f60}._zs_gallerybi ._zs_galleryaZ ._zs_galleryb_ ._zs_galleryba ._zs_gallerybc ._zs_galleryaO{color:#ffb400}._zs_gallerybi ._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe._zs_gallerybf,._zs_gallerybi ._zs_galleryaZ ._zs_gallerybd ._zs_gallerybe._zs_gallerybf:hover{background:#f60}._zs_gallerybi ._zs_gallerybj:hover{border-color:#f60}._zs_gallerybi ._zs_gallerybj:checked{border-color:#f60;background-color:#f60}._zs_gallerybi ._zs_gallerybj:indeterminate{background-color:#f60;border-color:#f60}._zs_gallerybi ._zs_gallerybk:hover{border-color:#f60}._zs_gallerybi ._zs_gallerybk:checked{background-color:#f60;border-color:#f60}._zs_gallerybi ._zs_gallerybl,._zs_gallerybi ._zs_gallerybk:checked:hover{border-color:#f60}._zs_gallerybi ._zs_gallerybl{border-radius:16px;background-color:#fff7f2}._zs_gallerybi ._zs_gallerybl._zs_gallerybm,._zs_gallerybi ._zs_gallerybl:active,._zs_gallerybi ._zs_gallerybl:hover{color:#f60}._zs_gallerybi ._zs_gallerybl._zs_gallerybn{color:#fff;border-color:#f60;background-color:#f60}._zs_gallerybi ._zs_gallerybl._zs_gallerybn._zs_gallerybm,._zs_gallerybi ._zs_gallerybl._zs_gallerybn:active,._zs_gallerybi ._zs_gallerybl._zs_gallerybn:hover{color:#fff;border-color:#eb5e00;background-color:#eb5e00}._zs_gallerybi ._zs_gallerybo:focus{border-color:#f60}._zs_gallerybi ._zs_gallerybp,._zs_gallerybi ._zs_gallerybp:active,._zs_gallerybi ._zs_gallerybp:focus,._zs_gallerybi ._zs_gallerybp:visited{color:#f60}._zs_gallerybi ._zs_gallerybp:hover{color:#eb5e00}");
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, radioes = $$.radioes; $p += '<form mxv mxa="_zs_galleryJ:_" class="form _zs_gallerybi"><div mxv mxa="_zs_galleryJ:a" class="form-item"><div mxs="_zs_galleryJ:_" class="form-label">checkbox</div><div mxv mxa="_zs_galleryJ:b" class="form-content">'; for (var $art_ichnbpxwp$art_i = 0, $art_cqkscbdaucf$art_c = checkboxes.length; $art_ichnbpxwp$art_i < $art_cqkscbdaucf$art_c; $art_ichnbpxwp$art_i++) {
    var c = checkboxes[$art_ichnbpxwp$art_i];
    $p += '<label mxv mxa="_zs_galleryJ:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[{p:\'selected.checkboxes\'}]" type="checkbox" class="_zs_gallerybj checkbox" name="cb" value="' + $e(c) + '"/>' + $e(c) + '</label>';
} ; $p += '</div></div><div mxv mxa="_zs_galleryJ:d" class="form-item"><div mxs="_zs_galleryJ:a" class="form-label">radio</div><div mxv mxa="_zs_galleryJ:e" class="form-content">'; for (var $art_ibxepwgnxm$art_i = 0, $art_cccofbenf$art_c = radioes.length; $art_ibxepwgnxm$art_i < $art_cccofbenf$art_c; $art_ibxepwgnxm$art_i++) {
    var r = radioes[$art_ibxepwgnxm$art_i];
    $p += '<label mxv mxa="_zs_galleryJ:f" class="mr30"><input mxe="' + $viewId + '_1" mxc="[{p:\'selected.radio\'}]" type="radio" class="_zs_gallerybk radio" name="magix" value="' + $e(r) + '"/>' + $e(r) + '</label>';
} ; $p += '</div></div><div mxv mxa="_zs_galleryJ:g" class="form-item"><div mxs="_zs_galleryJ:b" class="form-label">dropdown</div><div mxv mxa="_zs_galleryJ:h" class="form-content"><div mxv="selected" mxe="' + $viewId + '_2" mxc="[{p:\'selected.day\',a:\'selected\'}]" class="w220" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=' + $i($$ref, selected.day) + '"><i mxs="_zs_galleryJ:c" value="1" class="none">1</i><i mxs="_zs_galleryJ:d" value="2" class="none">2</i></div></div></div><div mxv mxa="_zs_galleryJ:i" class="form-item"><div mxs="_zs_galleryJ:e" class="form-label">输入框</div><div mxv mxa="_zs_galleryJ:j" class="form-content"><input mxe="' + $viewId + '_3" mxc="[{p:\'selected.name\'}]" class="input w220 _zs_gallerybo" placeholder="必填项" value="' + $e(selected.name) + '"/><a mxs="_zs_galleryJ:f" rel="noopener noreferrer" href="https://thx.github.io/magix/" target="_blank" class="ml20 _zs_gallerybp">跳转链接</a></div></div><div mxa="_zs_galleryJ:k" class="form-item"><div mxs="_zs_galleryJ:g" class="form-label">日历</div><div mxa="_zs_galleryJ:l" class="form-content"><div class="w220" mx-view="mx-calendar/datepicker?prefix=%E6%88%AA%E6%AD%A2%E8%87%B3&selected=' + $eu(selected.time) + '"></div></div></div><div mxa="_zs_galleryJ:m" class="form-item"><div mxs="_zs_galleryJ:h" class="form-label">开关</div><div mxa="_zs_galleryJ:n" class="form-content"><span mxe="' + $viewId + '_4_' + $e("switch") + '" mxc="[{p:\'selected.' + $e("switch") + '\',a:\'state\'}]" class="mr20" style="margin-top: 7px;" mx-view="mx-switch/index?state=' + $i($$ref, selected["switch"]) + '"></span></div></div><div mxs="_zs_galleryJ:i" class="form-item"><div class="form-label">滑块</div><div class="form-content"><div mx-view="mx-slider/index?width=220&max=200&min=100&step=1"></div></div></div><div mxs="_zs_galleryJ:j" class="form-item"><a href="javascript:;" class="btn btn-brand w80 _zs_gallerybl _zs_gallerybn mr20">确认</a><a href="javascript:;" class="btn w80 _zs_gallerybl">取消</a></div></form>'; return $p; },
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