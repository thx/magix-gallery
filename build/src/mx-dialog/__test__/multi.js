/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/multi",["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

var Magix = require("magix");
var Dialog = require("mx-dialog/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, height = $$.height, number = $$.number; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery}:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div class="dialog-body" style="height:';
    $line = 4;
    $art = '=height';
    ;
    $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;"><span mxa="_zs_gallery}:_" class="mr40">浮层';
    $line = 5;
    $art = '=number';
    ;
    $p += '' + ($expr = '<%=number%>', $e(number)) + '</span><a mxs="_zs_gallery}:a" href="javascript:;" mx-click="' + $viewId + 'modal()" class="btn btn-brand">再开一个</a></div><div mxs="_zs_gallery}:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="' + $viewId + 'cancel()">取消</a></div>';
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
            height: 100 + (number * 40)
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
    }
});

});