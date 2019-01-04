/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', options = $$.options; $p += '<div mxa="_zs_gallerye:_" class="pr20"><table mxa="_zs_gallerye:a" class="table _zs_galleryr"><thead mxs="_zs_gallerye:_"><tr><th width="70">事件</th><th width="120">事件说明</th><th width="90">返回参数</th><th width="200">参数说明</th><th width="80">参数类型</th></tr></thead><tbody>'; for (var $art_idqpfydrha$art_i = 0, $art_ckmujfns$art_c = options.length; $art_idqpfydrha$art_i < $art_ckmujfns$art_c; $art_idqpfydrha$art_i++) {
    var option = options[$art_idqpfydrha$art_i];
    $p += ' ';
    for (var index = 0, $art_objvbxksraum$art_obj = option.params, $art_cmskuntg$art_c = $art_objvbxksraum$art_obj.length; index < $art_cmskuntg$art_c; index++) {
        var param = $art_objvbxksraum$art_obj[index];
        $p += '<tr>';
        if (index == 0) {
            ;
            $p += '<td rowspan="' + $e(option.params.length) + '">' + $e(option.type) + '</td><td rowspan="' + $e(option.params.length) + '">' + $n(option.desc) + '</td>';
        }
        ;
        $p += '<td>' + $e(param.key) + '</td><td>' + $n(param.desc) + '</td><td>' + $n(param.type) + '</td></tr>';
    }
    ;
    $p += ' ';
} ; $p += '</tbody></table></div>'; return $p; },
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