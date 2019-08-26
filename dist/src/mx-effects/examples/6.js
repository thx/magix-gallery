/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/6",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../notice");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybY:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerybY:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E8%A6%81%E9%A2%9C%E8%89%B2%EF%BC%8C%E5%85%B6%E4%BB%96%E5%9F%BA%E4%BA%8E%E6%AD%A4%E8%AE%A1%E7%AE%97"></div><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&colorText=%2351a300&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E6%A1%88%E9%A2%9C%E8%89%B2"></div><div class="mb20" mx-view="mx-effects/notice?colorBg=%23ffb400&colorBorder=%23ffb400&colorText=%23fff&colorIcon=%23fff&border=true&content=%E6%89%80%E6%9C%89%E6%94%AF%E6%8C%81%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E9%A2%9C%E8%89%B2"></div></div><div mxa="_zs_gallerybY:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybY:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybY:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybY:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.notice \n    color="#51a300" \n    content="自定义主要颜色，其他基于此计算"/&gt;\n\n&lt;mx-effects.notice \n    color="#51a300" \n    color-text="#51a300"\n    content="自定义文案颜色"/&gt;\n\n&lt;mx-effects.notice \n    color-bg="#ffb400"\n    color-border="#ffb400" \n    color-text="#fff"\n    color-icon="#fff"\n    border="true"\n    content="所有支持自定义的颜色"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});