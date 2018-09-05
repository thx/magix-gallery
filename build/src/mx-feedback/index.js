/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-feedback/index",["magix"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, content = $$.content; var $expr, $art, $line; try {
    $p += '<a href="javascript:;" id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '" class="color-brand"><i mxs="_zs_gallerya9:_" class="mc-iconfont ml20">&#xe7ff;</i>';
    $line = 2;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%=content%>', $e(content)) + '</a>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-feedback/index.html';
    throw msg;
} return $p; },
    init: function (options) {
        var that = this;
        that.options = options;
        that.fb = window.Feedback;
        if (that.fb) {
            that.fb.config({
                nickname: window.UserInfo.loginUser.nickname,
                forms: [{
                        id: 15
                    }, {
                        hook: that.id,
                        id: that.options.feedId
                    }]
            });
        }
        that.on('destroy', function () {
            if (that.fb) {
                that.fb.config({
                    nickname: window.UserInfo.loginUser.nickname,
                    forms: [{
                            id: 15
                        }]
                });
            }
        });
    },
    render: function () {
        var that = this;
        that.updater.digest({
            viewId: that.id,
            content: that.options.content
        });
    }
});

});