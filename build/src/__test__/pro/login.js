/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/login",["magix","$","mx-title/second","./login-email","./login-css","./login-demo"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./login-email");
require("./login-css");
require("./login-demo");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryh:_" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E6%96%87%E6%A1%A3"></div><div mxs="_zs_galleryh:h" class="mb40"><a rel="noopener noreferrer" href="https://lark.alipay.com/up/login-doc/xvgy82" target="_blank" class="link-brand">https://lark.alipay.com/up/login-doc/xvgy82</a></div><div mxs="_zs_galleryh:b" mx-view="mx-title/second?content=%E4%B8%BB%E9%A2%98%E8%89%B2%E4%BF%AE%E6%94%B9%E7%94%B3%E8%AF%B7%E6%AD%A5%E9%AA%A4"></div><div mxs="_zs_galleryh:c" class="mb40"><div class="fontsize-14 mb20">1. 发邮件给“苏婳”，抄送“水寒”，邮件内容如下：</div><div mx-view="__test__/pro/login-email" class="pl15"></div></div><div mxs="_zs_galleryh:d" class="mb40"><div class="fontsize-14 mb20">2. 其中 css 文件为需要覆盖的样式，将如下示例中的色值替换为本产品线对应的品牌色（#0391f4;）和品牌hover色值（#0383dc;），发布到cdn给到链接即可：</div><div mx-view="__test__/pro/login-css" class="pl15"></div></div><div mxs="_zs_galleryh:e" class="fontsize-14 mb40">3. 联系水寒配置登陆框，配置完成那边会邮件回复给到对应的css_style</div><div mxs="_zs_galleryh:f" class="mb40"><div class="fontsize-14 mb20">4. 在项目中使用</div><div mx-view="__test__/pro/login-demo" class="pl15"></div></div><div mxs="_zs_galleryh:g" class="fontsize-14 mb40">5. 绑定host 140.205.173.181 login.taobao.com 预发进行测试，测试完毕通知上线，注意只有每周二和周四可上线</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/login.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});