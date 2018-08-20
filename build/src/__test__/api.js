/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/api",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery_:_" class="pr20"><table mxa="_zs_gallery_:a" class="table _zs_gallery___test___base_-desc-table"><thead mxs="_zs_gallery_:_"><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody>';
    $line = 12;
    $art = 'each options as option';
    ;
    $p += '';
    $expr = '<%for(var $art_imccof$art_i=0;$art_imccof$art_i<options.length;$art_imccof$art_i++){var option=options[$art_imccof$art_i]%>';
    for (var $art_imccof$art_i = 0; $art_imccof$art_i < options.length; $art_imccof$art_i++) {
        var option = options[$art_imccof$art_i];
        $p += '<tr><td>';
        $line = 14;
        $art = '=option.key';
        ;
        $p += '' + ($expr = '<%=option.key%>', $e(option.key)) + '</td><td>';
        $line = 15;
        $art = '!option.desc';
        ;
        $p += '' + ($expr = '<%!option.desc%>', $n(option.desc)) + '</td><td>';
        $line = 16;
        $art = '!option.type';
        ;
        $p += '' + ($expr = '<%!option.type%>', $n(option.type)) + '</td><td mxa="_zs_gallery_:b" class="word-break">';
        $line = 17;
        $art = '!option.def';
        ;
        $p += '' + ($expr = '<%!option.def%>', $n(option.def)) + '</td></tr>';
        $line = 19;
        $art = '/each';
        ;
        $p += '';
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
        $(window).scrollTop(node.offset().top - 52);
    }
});

});