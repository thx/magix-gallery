/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/index",["magix","$","mx-title/second","./1"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
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
    $p += '<div mxs="_zs_gallery@:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallery@:a" mx-view="mx-checkbox/__test__/1"></div><div mxs="_zs_gallery@:b" mx-view="mx-title/second?content=API"></div><div mxa="_zs_gallery@:_" class="pr20"><table mxa="_zs_gallery@:a" class="table _zs_gallery___test___base_-desc-table"><thead mxs="_zs_gallery@:c"><tr><th width="100">可配参数</th><th width="200">说明</th></tr></thead><tbody>';
    $line = 14;
    $art = 'each options as option';
    ;
    $p += '';
    $expr = '<%for (var $art_iucnaipw$art_i = 0, $art_cwidhzh$art_c = options.length; $art_iucnaipw$art_i < $art_cwidhzh$art_c; $art_iucnaipw$art_i++) {    var option = options[$art_iucnaipw$art_i]%>';
    for (var $art_iucnaipw$art_i = 0, $art_cwidhzh$art_c = options.length; $art_iucnaipw$art_i < $art_cwidhzh$art_c; $art_iucnaipw$art_i++) {
        var option = options[$art_iucnaipw$art_i];
        $p += '<tr><td>';
        $line = 16;
        $art = '=option.key';
        ;
        $p += '' + ($expr = '<%=option.key%>', $e(option.key)) + '</td><td>';
        $line = 17;
        $art = '!option.desc';
        ;
        $p += '' + ($expr = '<%!option.desc%>', $n(option.desc)) + '</td></tr>';
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
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            options: [{
                    key: 'mx-checked',
                    desc: '是否选中，&lt;mx-checkbox mx-checked/&gt;'
                }, {
                    key: 'mx-disabled',
                    desc: '是否禁用，&lt;mx-checkbox mx-disabled/&gt;'
                }, {
                    key: 'mx-indeterminate',
                    desc: '是否部分选中，&lt;mx-checkbox mx-indeterminate/&gt;'
                }]
        });
    }
});

});