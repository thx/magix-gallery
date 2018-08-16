/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/pannel",["magix","../range"],(require,exports,module)=>{
/*Magix*/
require("../range");
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, inlayConfig = $$.inlayConfig; var $expr, $art, $line; try {
    $p += '<div mxv="inlayConfig" mx-change="' + $viewId + 'submit()" mx-cancel="' + $viewId + 'hide()" mx-view="mx-calendar/range?configs=';
    $line = 2;
    $art = '@inlayConfig';
    ;
    $p += '' + ($expr = '<%@inlayConfig%>', $i(inlayConfig)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/pannel.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        this.updater.set({
            inlayConfig: $.extend(true, {}, e.inlay)
        });
    },
    render: function () {
        this.updater.digest();
    },
    'submit<change>': function (e) {
        // e.dates
        // e.vs
        var inlayConfig = this.updater.get('inlayConfig');
        inlayConfig.dates = e.dates;
        inlayConfig.vs = e.vs;
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(inlayConfig);
        }
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    },
    'hide<cancel>': function (e) {
        e.stopPropagation();
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});

});