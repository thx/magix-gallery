/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/demo2",["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerya4:_" class="dialog-header"><div class="fontsize-16">标题</div></div><div mxs="_zs_gallerya4:a" class="dialog-body">浮层内容</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/demo2.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (e) {
        var that = this;
        that.viewOptions = e;
        var dlg = that.viewOptions.dialog;
        dlg.beforeClose(function () {
            // do something
            // resolve 组件自动支持dlg.close
            return new Promise(function (resolve) {
                that.confirm({
                    title: '二次确认',
                    content: '确认要关闭吗',
                    enterCallback: resolve
                });
            });
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});