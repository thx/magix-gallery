/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/login-iframe",["magix","../mx-util/view"],(require,exports,module)=>{
/*magix_1,View*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var View = require("../mx-util/view");
exports["default"] = View.extend({
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
    $p += ($expr = '<%=src%>', $e(src)) + '" frameborder="0" allowtransparency="true" scrolling="no" marginheight="0" marginwidth="0" border="0" width="100%" height="400"></iframe>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/login-iframe.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var data = extra.data || {};
        var routeParams = magix_1["default"].Router.parse().params;
        var map = {
            def: {
                css_style: 'dingxiang',
                redirectURL: window.location.href //默认跳回当前页面
            },
            adStrategy: {
                css_style: 'dingxiang',
                redirectURL: magix_1["default"].toUrl(window.location.origin + '/indexbp.html', routeParams)
            },
            dmpIsv: {
                css_style: 'mdmp',
                redirectURL: magix_1["default"].toUrl(window.location.origin + '/login_isv.html', routeParams)
            }
        };
        var info = map[data.bizCode || 'def'];
        var params = [
            "redirectURL=" + encodeURIComponent(info.redirectURL),
            'style=mini',
            "css_style=" + info.css_style,
            'full_redirect=true',
            'newMini2=true',
            'enup=0',
            'qrlogin=1',
            'keyLogin=true'
        ];
        var taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
        var src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');
        that.updater.set({
            src: src
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    }
});

});