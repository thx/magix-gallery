/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/hor-inner",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main___test___hor-inner_","/* @dependent: ./index.less */\n._zs_gallery_mx-main___test___hor-inner_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main___test___hor-inner_-line {\n  height: 20px;\n  margin-top: 10px;\n  background-color: #e6e6e6;\n}\n");
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
} ; var $g = '', $_temp, $p = '', info = $$.info; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryca:_" class="fontsize-16">第';
    $line = 1;
    $art = '=info.index';
    ;
    $p += ($expr = '<%=info.index%>', $e(info.index)) + '步：';
    $line = 1;
    $art = '=info.label';
    ;
    $p += ($expr = '<%=info.label%>', $e(info.label)) + '</div><div mxs="_zs_galleryca:_" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 200px;"></div><div mxs="_zs_galleryca:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div><div mxs="_zs_galleryca:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div><div mxs="_zs_galleryca:a" class="_zs_gallery_mx-main___test___hor-inner_-line" style="width: 400px;"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/hor-inner.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.set({
            info: extra.info || {},
            data: $.extend(true, {}, extra.data || {})
        });
    },
    render: function () {
        this.updater.digest();
    },
    check: function () {
        var info = this.updater.get('info');
        var ok = true, remain = {};
        remain['test_' + info.index] = info.label;
        return new Promise(function (resolve) {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: ok,
                msg: info.label,
                remain: remain
            });
        });
    }
});

});