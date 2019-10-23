/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/examples/10",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', url = $$.url, english = $$.english, chinese = $$.chinese, mobile = $$.mobile, currency = $$.currency, email = $$.email, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc_:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryc_:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_galleryc_:b" class="clearfix"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':url{url:true}';
    ;
    $p += '{p:\'url\',f:{url:true}}]" class="input w200 mr20 mb20" placeholder="url链接" value="';
    $line = 4;
    $art = ':url{url:true}';
    ;
    $p += ($expr = '<%=url%>', $e(url)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':english{english:true}';
    ;
    $p += '{p:\'english\',f:{english:true}}]" class="input w200 mr20 mb20" placeholder="只英文" value="';
    $line = 5;
    $art = ':english{english:true}';
    ;
    $p += ($expr = '<%=english%>', $e(english)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 6;
    $art = ':chinese{chinese:true}';
    ;
    $p += '{p:\'chinese\',f:{chinese:true}}]" class="input w200 mr20 mb20" placeholder="只中文" value="';
    $line = 6;
    $art = ':chinese{chinese:true}';
    ;
    $p += ($expr = '<%=chinese%>', $e(chinese)) + '"/> <input mxe="' + $viewId + '_3" mxc="[';
    $line = 7;
    $art = ':mobile{mobile:true}';
    ;
    $p += '{p:\'mobile\',f:{mobile:true}}]" class="input w200 mr20 mb20" placeholder="电话号码" value="';
    $line = 7;
    $art = ':mobile{mobile:true}';
    ;
    $p += ($expr = '<%=mobile%>', $e(mobile)) + '"/> <input mxe="' + $viewId + '_4" mxc="[';
    $line = 8;
    $art = ':currency{currency:true}';
    ;
    $p += '{p:\'currency\',f:{currency:true}}]" class="input w200 mr20 mb20" placeholder="金额" value="';
    $line = 8;
    $art = ':currency{currency:true}';
    ;
    $p += ($expr = '<%=currency%>', $e(currency)) + '"/> <input mxe="' + $viewId + '_5" mxc="[';
    $line = 9;
    $art = ':email{email:true}';
    ;
    $p += '{p:\'email\',f:{email:true}}]" class="input w200 mr20 mb20" placeholder="邮箱" value="';
    $line = 9;
    $art = ':email{email:true}';
    ;
    $p += ($expr = '<%=email%>', $e(email)) + '"/> <input mxe="' + $viewId + '_6" mxc="[';
    $line = 10;
    $art = ':email{email:[true, \'只支持qq邮箱\', [\'qq.com\']]}';
    ;
    $p += '{p:\'email\',f:{email:[true, \'只支持qq邮箱\', [\'qq.com\']]}}]" class="input w200 mr20 mb20" placeholder="指定邮箱校验" value="';
    $line = 10;
    $art = ':email{email:[true, \'只支持qq邮箱\', [\'qq.com\']]}';
    ;
    $p += ($expr = '<%=email%>', $e(email)) + '"/></div></div><div mxa="_zs_galleryc_:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryc_:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">常用校验</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc_:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc_:a" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="url链接" value="&#123;&#123;:url&#123;url:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只英文" value="&#123;&#123;:english&#123;english:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只中文" value="&#123;&#123;:chinese&#123;chinese:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="电话号码" value="&#123;&#123;:mobile&#123;mobile:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="金额" value="&#123;&#123;:currency&#123;currency:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="邮箱" value="&#123;&#123;:email&#123;email:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="指定邮箱校验" value="&#123;&#123;:email&#123;email:[true, \'只支持qq邮箱\', [\'qq.com\']]&#125;&#125;&#125;"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/examples/10.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});