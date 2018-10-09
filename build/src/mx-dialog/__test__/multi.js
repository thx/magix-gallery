/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/multi",["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

var Magix = require("magix");
var Dialog = require("mx-dialog/index");
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
} ; var $g = '', $_temp, $p = '', height = $$.height, number = $$.number; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryad:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div class="dialog-body" style="height:';
    $line = 4;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;"><div mxa="_zs_galleryad:_" class="mb20">浮层';
    $line = 5;
    $art = '=number';
    ;
    $p += ($expr = '<%=number%>', $e(number)) + '</div><div mxs="_zs_galleryad:c" class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'modal()" class="btn btn-brand">再开一个</a></div><div mxs="_zs_galleryad:e"><a href="javascript:;" mx-click="' + $viewId + 'closeAll()" class="btn btn-brand">关闭所有展开浮层</a></div></div><div mxs="_zs_galleryad:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/multi.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (e) {
        this.viewOptions = e;
    },
    render: function () {
        var number = +this.viewOptions.number;
        this.updater.digest({
            number: number,
            width: 800 - (number * 100),
            height: 140 + (number * 40)
        });
    },
    'cancel<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'modal<click>': function (e) {
        var width = +this.updater.get('width');
        var height = +this.updater.get('height');
        var number = +this.updater.get('number');
        this.mxDialog('mx-dialog/__test__/multi', {
            number: number + 1
        }, {
            width: width - 100,
            height: height + 170,
            modal: true
        });
    },
    'closeAll<click>': function (e) {
        this.mxCloseAllDialogs();
    }
});

});