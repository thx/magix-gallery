/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/login",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', src = $$.src; var $expr, $art, $line; try {
    $p += '<iframe src="';
    $line = 1;
    $art = '=src';
    ;
    $p += ($expr = '<%=src%>', $e(src)) + '" frameborder="0" allowtransparency="true" scrolling="no" marginheight="0" marginwidth="0" border="0" width="100%" height="340"></iframe>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/login.html';
    throw msg;
} return $p; },
    render: function () {
        // 登陆成功回跳页面
        var forward = window.location.origin + '/indexbp.html';
        var params = [
            'redirectURL=' + encodeURIComponent(forward),
            'style=mini',
            'css_style=dingxiang',
            'full_redirect=true',
            'newMini2=true',
            'enup=0',
            'qrlogin=1',
            'keyLogin=true'
        ];
        var taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
        var src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');
        this.updater.digest({
            src: src
        });
    }
});

});