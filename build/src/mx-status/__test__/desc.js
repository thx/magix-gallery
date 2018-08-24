/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/desc",["magix","$","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
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
    $p += '<div mxs="_zs_galleryb$:_" mx-view="mx-title/second?content=API"></div><div mxa="_zs_galleryb$:_" class="pr20"><table mxa="_zs_galleryb$:a" class="table _zs_gallery___test___base_-desc-table"><thead mxs="_zs_galleryb$:a"><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody><tr mxs="_zs_galleryb$:b"><td>list</td><td><div>可选状态列表：</div><pre>\n[&#123;\n    value: \'状态值\',\n    text: \'状态文案\',\n    icon: \'iconfont图标，如&lt;i class="mc-iconfont"&gt;&#38;&#35;xe67f;&lt;/i&gt;\',\n    color: \'图标显示颜色\',\n    tip: \'状态提示文案\'\n&#125;]\n                    </pre><div>当可选列表只有一个时也显示为只读状态</div></td><td>array</td><td class="word-break">[]</td></tr>';
    $line = 31;
    $art = 'each options as option';
    ;
    $p += '';
    $expr = '<%for (var $art_ihnrxvcdj$art_i = 0, $art_cjqeygwad$art_c = options.length; $art_ihnrxvcdj$art_i < $art_cjqeygwad$art_c; $art_ihnrxvcdj$art_i++) {    var option = options[$art_ihnrxvcdj$art_i]%>';
    for (var $art_ihnrxvcdj$art_i = 0, $art_cjqeygwad$art_c = options.length; $art_ihnrxvcdj$art_i < $art_cjqeygwad$art_c; $art_ihnrxvcdj$art_i++) {
        var option = options[$art_ihnrxvcdj$art_i];
        $p += '<tr><td>';
        $line = 33;
        $art = '=option.key';
        ;
        $p += '' + ($expr = '<%=option.key%>', $e(option.key)) + '</td><td>';
        $line = 34;
        $art = '!option.desc';
        ;
        $p += '' + ($expr = '<%!option.desc%>', $n(option.desc)) + '</td><td>';
        $line = 35;
        $art = '!option.type';
        ;
        $p += '' + ($expr = '<%!option.type%>', $n(option.type)) + '</td><td mxa="_zs_galleryb$:b" class="word-break">';
        $line = 36;
        $art = '!option.def';
        ;
        $p += '' + ($expr = '<%!option.def%>', $n(option.def)) + '</td></tr>';
        $line = 38;
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
    msg += $expr + '\r\n\tat file:mx-status/__test__/desc.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: 'list[0].value'
            }, {
                key: 'readonly',
                desc: '是否只读，状态显示',
                type: 'boolean',
                def: 'false'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});