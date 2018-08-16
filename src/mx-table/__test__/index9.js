/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index9",["magix","$","mx-title/second","../index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("../index");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb-:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb-:a" class="_zs_gallery___test___base_-example"><div class="_zs_gallery___test___base_-eg-content"><div class="mb20"><span class="color-9">该示例：</span>吸顶 + 表头分组 + 任意colspan</div><div mx-view="mx-table/index?sticky=true"><div><table class="table" left="true" width="400"><thead><tr><th></th><th>固定1</th><th>固定2</th><th>固定3</th><th>固定4</th></tr></thead><tbody><tr><td><span class="displacement-2" sub-toggle="toggle_1"></span></td><td>一格</td><td>一格</td><td colspan="2">跨两格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask"></td><td>一格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td class="sub-mask sub-mask-last"></td><td colspan="2">跨两格</td><td>一格</td><td>一格</td></tr><tr><td></td><td>一格</td><td colspan="2">跨两格</td><td>一格</td></tr><tr><td></td><td colspan="4">跨四格</td></tr><tr><td></td><td colspan="3">跨三格</td><td>一格</td></tr></tbody></table></div><div><table class="table" center="true" width="1100"><thead><tr><th class="field-group" colspan="2"><div class="group-name">组1</div></th><th class="field-group" colspan="2"><div class="group-name">组2</div></th><th class="field-group" colspan="2"><div class="group-name">组3</div></th><th class="field-group" colspan="2"><div class="group-name">组4</div></th></tr><tr><th class="field-item">固定5</th><th class="field-item">固定6</th><th class="field-item">固定7</th><th class="field-item">固定8</th><th class="field-item">固定9</th><th class="field-item">固定10</th><th class="field-item">固定11</th><th class="field-item">固定12</th></tr></thead><tbody><tr><td>一格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td>一格</td><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr class="hide" sub-toggle-parent="toggle_1"><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td>一格</td><td colspan="2">跨两格</td><td>一格</td><td colspan="3">跨三格</td><td>一格</td></tr><tr><td colspan="3">跨三格</td><td colspan="3">跨三格</td><td>一格</td><td>一格</td></tr><tr><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td><td colspan="2">跨两格</td></tr></tbody></table></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index9.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});