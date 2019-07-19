/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/examples/multi",["magix","mx-popover/index"],(require,exports,module)=>{
/*Magix,Dialog*/

var Magix = require("magix");
var Dialog = require("mx-popover/index");
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
} ; var $g = '', $_temp, $p = '', height = $$.height; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerydE:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div style="height:';
    $line = 4;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;"><table mxs="_zs_gallerydE:a" class="table"><thead><tr><th width="100">配置key值<i class="mc-iconfont color-9 displacement-2 ml5" mx-view="mx-popover/index?content=%E7%94%A8%20i%20%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center&placement=bottom">&#xe7aa;</i></th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody><tr><td>key1</td><td>text1</td><td>tip1</td></tr><tr><td>key2</td><td>text2</td><td>tip2</td></tr></tbody></table></div><div mxs="_zs_gallerydE:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/examples/multi.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (e) {
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest({
            height: $(window).height()
        });
    },
    'cancel<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});

});