/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/multi",["magix","mx-popover/index","../index"],(require,exports,module)=>{
/*Magix,Dialog*/
require("../index");
var Magix = require("magix");
var Dialog = require("mx-popover/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, height = $$.height; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybx:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div style="height:';
    $line = 4;
    $art = '=height';
    ;
    $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;"><table mxs="_zs_gallerybx:a" class="table"><thead><tr><th width="100">配置key值<i class="mc-iconfont color-9 displacement-2 ml5" mx-view="mx-popover/index?content=%E7%94%A8%20i%20%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center&placement=bottom">&#xe629;</i></th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody><tr><td>key1</td><td>text1</td><td>tip1</td></tr><tr><td>key2</td><td>text2</td><td>tip2</td></tr></tbody></table></div><div mxs="_zs_gallerybx:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/multi.html';
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