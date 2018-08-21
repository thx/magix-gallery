/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/17",["magix","__test__/example","mx-form/index","mx-form/validator","$","moment","mx-dropdown/index","mx-calendar/rangepicker","mx-switch/index","mx-slider/index"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$,Moment*/
require("mx-dropdown/index");
require("mx-calendar/rangepicker");
require("mx-switch/index");
require("mx-slider/index");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
var Moment = require("moment");
var Formater = 'YYYY-MM-DD';
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, checkboxes = $$.checkboxes, selected = $$.selected, radioes = $$.radioes; var $expr, $art, $line; try {
    $p += '<form mxv mxa="_zs_gallerya8:_" class="form mb40"><div mxv mxa="_zs_gallerya8:a" class="form-item"><div mxs="_zs_gallerya8:_" class="form-label">checkbox</div><div mxv mxa="_zs_gallerya8:b" class="form-content">';
    $line = 5;
    $art = 'each checkboxes as c';
    ;
    $p += '';
    $expr = '<%for(var $art_ictar$art_i=0;$art_ictar$art_i<checkboxes.length;$art_ictar$art_i++){var c=checkboxes[$art_ictar$art_i]%>';
    for (var $art_ictar$art_i = 0; $art_ictar$art_i < checkboxes.length; $art_ictar$art_i++) {
        var c = checkboxes[$art_ictar$art_i];
        $p += '<label mxv mxa="_zs_gallerya8:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 10;
        $art = ':selected.checkboxes{required:[true,\'必选\']}';
        ;
        $p += '{p:\'selected.checkboxes\',f:{required:[true,\'必选\']}}]" type="checkbox" class="checkbox" name="cb" value="';
        $line = 9;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '"/>';
        $line = 11;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 13;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_gallerya8:d" class="form-item"><div mxs="_zs_gallerya8:a" class="form-label">radio</div><div mxv mxa="_zs_gallerya8:e" class="form-content">';
    $line = 19;
    $art = 'each radioes as r';
    ;
    $p += '';
    $expr = '<%for(var $art_irhpwov$art_i=0;$art_irhpwov$art_i<radioes.length;$art_irhpwov$art_i++){var r=radioes[$art_irhpwov$art_i]%>';
    for (var $art_irhpwov$art_i = 0; $art_irhpwov$art_i < radioes.length; $art_irhpwov$art_i++) {
        var r = radioes[$art_irhpwov$art_i];
        $p += '<label mxv mxa="_zs_gallerya8:f" class="mr30"><input mxe="' + $viewId + '_1" mxc="[';
        $line = 24;
        $art = ':selected.radio';
        ;
        $p += '{p:\'selected.radio\'}]" type="radio" class="radio" name="magix" value="';
        $line = 23;
        $art = '=r';
        ;
        $p += '' + ($expr = '<%=r%>', $e(r)) + '"/>';
        $line = 25;
        $art = '=r';
        ;
        $p += '' + ($expr = '<%=r%>', $e(r)) + '</label>';
        $line = 27;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_gallerya8:g" class="form-item"><div mxs="_zs_gallerya8:b" class="form-label">dropdown</div><div mxv mxa="_zs_gallerya8:h" class="form-content"><div mxv="selected" mxe="' + $viewId + '_2" mxc="[';
    $line = 35;
    $art = ':selected.day{required:true}';
    ;
    $p += '{p:\'selected.day\',f:{required:true},a:\'selected\'}]" class="w220" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=';
    $line = 35;
    $art = ':selected.day{required:true}';
    ;
    $p += '' + ($expr = '<%@selected.day%>', $i(selected.day)) + '"><i mxs="_zs_gallerya8:c" value="1" class="none">1</i><i mxs="_zs_gallerya8:d" value="2" class="none">2</i></div></div></div><div mxv mxa="_zs_gallerya8:i" class="form-item"><div mxs="_zs_gallerya8:e" class="form-label">输入框</div><div mxv mxa="_zs_gallerya8:j" class="form-content"><input mxe="' + $viewId + '_3" mxc="[';
    $line = 45;
    $art = ':selected.name{required:true}';
    ;
    $p += '{p:\'selected.name\',f:{required:true}}]" class="input w220" placeholder="必填项" value="';
    $line = 45;
    $art = ':selected.name{required:true}';
    ;
    $p += '' + ($expr = '<%=selected.name%>', $e(selected.name)) + '"/><span mxs="_zs_gallerya8:f" class="color-brand ml20">跳转链接</span></div></div><div mxv mxa="_zs_gallerya8:k" class="form-item"><div mxs="_zs_gallerya8:g" class="form-label">日历</div><div mxv mxa="_zs_gallerya8:l" class="form-content"><div mxv="selected" class="w220" mx-view="mx-calendar/rangepicker?align=right&vsenable=';
    $line = 54;
    $art = '@selected.vsenable';
    ;
    $p += '' + ($expr = '<%@selected.vsenable%>', $i(selected.vsenable)) + '&vs=';
    $line = 55;
    $art = '@selected.vs';
    ;
    $p += '' + ($expr = '<%@selected.vs%>', $i(selected.vs)) + '&start=';
    $line = 56;
    $art = '=selected.start';
    ;
    $p += '' + ($expr = '<%!$eu(selected.start)%>', $eu(selected.start)) + '&end=';
    $line = 57;
    $art = '=selected.end';
    ;
    $p += '' + ($expr = '<%!$eu(selected.end)%>', $eu(selected.end)) + '"></div></div></div><div mxa="_zs_gallerya8:m" class="form-item"><div mxs="_zs_gallerya8:h" class="form-label">开关</div><div mxa="_zs_gallerya8:n" class="form-content"><span mxe="' + $viewId + '_4_' + ($expr = '<%="switch"%>', $e("switch")) + '" mxc="[';
    $line = 64;
    $art = ':selected.switch';
    ;
    $p += '{p:\'selected.' + ($expr = '<%="switch"%>', $e("switch")) + '\',a:\'state\'}]" class="mr20" style="margin-top: 7px;" mx-view="mx-switch/index?state=';
    $line = 64;
    $art = ':selected.switch';
    ;
    $p += '' + ($expr = '<%@selected["switch"]%>', $i(selected["switch"])) + '"></span></div></div><div mxs="_zs_gallerya8:i" class="form-item"><div class="form-label">滑块</div><div class="form-content"><div mx-view="mx-slider/index?width=220&max=200&min=100&step=1"></div></div></div><div mxs="_zs_gallerya8:j" class="form-item"><a href="javascript:;" class="btn w80 btn-brand mr20">确认</a><a href="javascript:;" class="btn w80">取消</a></div></form>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/17.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                "switch": true,
                radio: 'radio2',
                checkboxes: ['checkbox1'],
                vsenable: true,
                vs: true,
                start: Moment().subtract(1, 'days').format(Formater),
                end: Moment().add(1, 'days').format(Formater)
            }
        });
    }
});

});