/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/leave-dlg",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', title = $$.title, content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryk:_" class="dialog-header"><span mxa="_zs_galleryk:a" class="fontsize-16">';
    $line = 2;
    $art = '=title';
    ;
    $p += ($expr = '<%=title%>', $e(title)) + '</span></div><div mxa="_zs_galleryk:b" class="dialog-body"><div mxa="_zs_galleryk:c" class="pt20 pb20">';
    $line = 6;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '</div></div><div mxs="_zs_galleryk:_" class="dialog-footer"><a href="javascript:;" class="btn btn-brand btn-small mr10" mx-click="' + $viewId + 'submit({save:true})">保存并离开</a><a href="javascript:;" class="btn btn-small mr10" mx-click="' + $viewId + 'submit()">离开不保存</a><a href="javascript:;" class="btn btn-small mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/leave-dlg.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        this.updater.set(e);
    },
    render: function () {
        this.updater.digest();
    },
    'submit<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.enterCallback) {
            viewOptions.enterCallback(event.params.save);
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'cancel<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.cancelCallback) {
            viewOptions.cancelCallback();
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});

});