/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-im/__test__/dingding",["magix","__test__/example","$","mx-title/second","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerycJ:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycJ:_" class="mb40"><div mxa="_zs_gallerycJ:a" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerycJ:a" class="_zs_gallery___test___layout_-eg-content"><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"><i class="mc-iconfont color-brand">&#xe677;</i>虞佳</a></div><div mxa="_zs_gallerycJ:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycJ:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycJ:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 11;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycJ:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-im.dd uid="t5z4z8s" uname="虞佳"/&gt;\n            </pre></div><div mxa="_zs_gallerycJ:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycJ:d" class="_zs_gallery___test___layout_-eg-title">等同于</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycJ:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycJ:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"&gt;\n    &lt;i class="mc-iconfont color-brand"&gt;&#38;&#35;xe677;&lt;/i&gt;虞佳\n&lt;/a&gt;</pre></div></div></div><div mxs="_zs_gallerycJ:e" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_gallerycJ:f" class="mb10">链接格式为：dingtalk://dingtalkclient/action/sendmsg?dingtalk_id={id} ，将{id}替换为用户的钉钉号</div><div mxs="_zs_gallerycJ:g" class="mb10">关于目前如何获取钉钉号：</div><img mxs="_zs_gallerycJ:h" src="https://img.alicdn.com/tfs/TB1qp3UaNTpK1RjSZFKXXa2wXXa-942-1516.png" width="400"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-im/__test__/dingding.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});