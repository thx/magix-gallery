/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-feedback/index",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, content = $$.content; var $expr, $art, $line; try {
    $p += '<a href="javascript:;" id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '" class="color-brand"><i mxs="_zs_galleryaP:_" class="mc-iconfont ml20">&#xe7ff;</i>';
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