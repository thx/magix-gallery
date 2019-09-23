/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/login",["magix","$","mx-title/second","./login-email","./login-css","./login-demo"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./login-email");
require("./login-css");
require("./login-demo");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryy:_" mx-view="mx-title/second?content=%E4%B8%BB%E9%A2%98%E8%89%B2%E4%BF%AE%E6%94%B9%E7%94%B3%E8%AF%B7%E6%AD%A5%E9%AA%A4"></div><div mxs="_zs_galleryy:a" class="mb40"><div class="mb20">1. 发邮件给<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=mardcio" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>苏婳</a>，抄送<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=h02zfdj" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>水寒</a>，邮件内容如下：</div><div class="pl15" mx-view="examples/pro/login-email"></div></div><div mxs="_zs_galleryy:b" class="mb40"><div class="mb20">2. 其中 css 文件为需要覆盖的样式，将如下示例中的色值替换为本产品线对应的品牌色（#0391f4;）和品牌hover色值（#0383dc;），发布到cdn给到链接即可：</div><div class="pl15" mx-view="examples/pro/login-css"></div></div><div mxs="_zs_galleryy:c" class="mb40">3. 联系水寒配置登录框，配置完成那边会邮件回复给到对应的css_style</div><div mxs="_zs_galleryy:d" class="mb40"><div class="mb20">4. 在项目中使用</div><div class="pl15" mx-view="examples/pro/login-demo"></div></div><div mxs="_zs_galleryy:e" class="mb40">5. 绑定host 140.205.173.181 login.taobao.com 预发进行测试，测试完毕通知上线，注意只有每周二和周四可上线</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/login.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});