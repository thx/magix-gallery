/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/event",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye:_" class="pr20"><table mxa="_zs_gallerye:a" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_gallerye:_"><tr><th width="70">事件</th><th width="120">事件说明</th><th width="90">返回参数</th><th width="200">参数说明</th><th width="80">参数类型</th></tr></thead><tbody>';
    $line = 13;
    $art = 'each options as option';
    ;
    $expr = '<%for (var $art_iewqufbhqv$art_i = 0, $art_ccmguemb$art_c = options.length; $art_iewqufbhqv$art_i < $art_ccmguemb$art_c; $art_iewqufbhqv$art_i++) {    var option = options[$art_iewqufbhqv$art_i]%>';
    for (var $art_iewqufbhqv$art_i = 0, $art_ccmguemb$art_c = options.length; $art_iewqufbhqv$art_i < $art_ccmguemb$art_c; $art_iewqufbhqv$art_i++) {
        var option = options[$art_iewqufbhqv$art_i];
        $p += ' ';
        $line = 14;
        $art = 'each option.params as param index';
        ;
        $expr = '<%for (var index = 0, $art_objjoxfkwi$art_obj = option.params, $art_crljmmfe$art_c = $art_objjoxfkwi$art_obj.length; index < $art_crljmmfe$art_c; index++) {        var param = $art_objjoxfkwi$art_obj[index]%>';
        for (var index = 0, $art_objjoxfkwi$art_obj = option.params, $art_crljmmfe$art_c = $art_objjoxfkwi$art_obj.length; index < $art_crljmmfe$art_c; index++) {
            var param = $art_objjoxfkwi$art_obj[index];
            $p += '<tr>';
            $line = 16;
            $art = 'if (index == 0)';
            ;
            $expr = '<%if (index == 0) {%>';
            if (index == 0) {
                ;
                $p += '<td rowspan="';
                $line = 17;
                $art = '=option.params.length';
                ;
                $p += ($expr = '<%=option.params.length%>', $e(option.params.length)) + '">';
                $line = 17;
                $art = '=option.type';
                ;
                $p += ($expr = '<%=option.type%>', $e(option.type)) + '</td><td rowspan="';
                $line = 18;
                $art = '=option.params.length';
                ;
                $p += ($expr = '<%=option.params.length%>', $e(option.params.length)) + '">';
                $line = 18;
                $art = '!option.desc';
                ;
                $p += ($expr = '<%!option.desc%>', $n(option.desc)) + '</td>';
                $line = 19;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '<td>';
            $line = 21;
            $art = '=param.key';
            ;
            $p += ($expr = '<%=param.key%>', $e(param.key)) + '</td><td>';
            $line = 22;
            $art = '!param.desc';
            ;
            $p += ($expr = '<%!param.desc%>', $n(param.desc)) + '</td><td>';
            $line = 23;
            $art = '!param.type';
            ;
            $p += ($expr = '<%!param.type%>', $n(param.type)) + '</td></tr>';
            $line = 25;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 26;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/event.html';
    throw msg;
} return $p; },
    init: function (options) {
        this.updater.digest(options);
    },
    render: function () {
        this.updater.digest();
    },
    'to<click>': function (e) {
        var node = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});

});