/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/dingding",["magix","./example","$","mx-title/second","mx-copy/index","./hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
require("mx-copy/index");
require("./hl");
var Magix = require("magix");
var Base = require("./example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb:_" class="mb40"><div mxa="_zs_galleryb:a" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryb:a" class="_zs_gallery___test___layout_-eg-content"><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"><i class="mc-iconfont color-brand displacement-2 fontsize-18">&#xe677;</i>虞佳</a></div><div mxa="_zs_galleryb:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 14;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"&gt;\n    &lt;i class="mc-iconfont color-brand"&gt;&#38;&#35;xe677;&lt;/i&gt;虞佳\n&lt;/a&gt;</pre></div></div></div><div mxs="_zs_galleryb:d" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_galleryb:e" class="mb10">链接格式为：dingtalk://dingtalkclient/action/sendmsg?dingtalk_id={id} ，将{id}替换为用户的钉钉号</div><div mxs="_zs_galleryb:f" class="mb10">关于目前如何获取钉钉号：</div><img mxs="_zs_galleryb:g" src="https://img.alicdn.com/tfs/TB1qp3UaNTpK1RjSZFKXXa2wXXa-942-1516.png" width="400"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/dingding.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});