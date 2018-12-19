/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/api",["magix","$"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallery_:_" class="pr20"><table mxa="_zs_gallery_:a" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_gallery_:_"><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody>';
    $line = 12;
    $art = 'each options as option';
    ;
    $expr = '<%for (var $art_ijpvfvg$art_i = 0, $art_ciyxlvufi$art_c = options.length; $art_ijpvfvg$art_i < $art_ciyxlvufi$art_c; $art_ijpvfvg$art_i++) {    var option = options[$art_ijpvfvg$art_i]%>';
    for (var $art_ijpvfvg$art_i = 0, $art_ciyxlvufi$art_c = options.length; $art_ijpvfvg$art_i < $art_ciyxlvufi$art_c; $art_ijpvfvg$art_i++) {
        var option = options[$art_ijpvfvg$art_i];
        $p += '<tr><td>';
        $line = 14;
        $art = '=option.key';
        ;
        $p += ($expr = '<%=option.key%>', $e(option.key)) + '</td><td>';
        $line = 15;
        $art = '!option.desc';
        ;
        $p += ($expr = '<%!option.desc%>', $n(option.desc)) + '</td><td>';
        $line = 16;
        $art = '!option.type';
        ;
        $p += ($expr = '<%!option.type%>', $n(option.type)) + '</td><td mxa="_zs_gallery_:b" class="word-break">';
        $line = 17;
        $art = '!option.def';
        ;
        $p += ($expr = '<%!option.def%>', $n(option.def)) + '</td></tr>';
        $line = 19;
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
    msg += $expr + '\r\n\tat file:__test__/api.html';
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