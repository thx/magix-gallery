/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/examples/pannel",["magix","../range"],(require,exports,module)=>{
/*Magix*/
require("../range");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', inlayConfig = $$.inlayConfig; var $expr, $art, $line; try {
    $p += '<div mxv="inlayConfig" mx-change="' + $viewId + 'submit()" mx-cancel="' + $viewId + 'hide()" mx-view="mx-calendar/range?configs=';
    $line = 2;
    $art = '@inlayConfig';
    ;
    $p += ($expr = '<%@inlayConfig%>', $i($$ref, inlayConfig)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/examples/pannel.html';
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