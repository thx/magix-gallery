/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/7",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryb@:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryb@:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20" mx-view="mx-effects/notice?type=highlight&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight"><span>品牌色重要信息提示（innerHTML）</span><a class="color-brand" href="https://www.taobao.com/" rel="noopener noreferrer" target="_blank">查看链接</a></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%97%A0icon%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&radius=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&textAlign=center&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%96%87%E6%A1%88%E5%B1%85%E4%B8%AD%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%B8%A6%E8%BE%B9%E6%A1%86%E9%83%BD%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%E6%97%A0icon%EF%BC%89"></div></div><div mxa="_zs_galleryb@:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryb@:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code（icon品牌色）</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb@:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb@:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    content="品牌色重要信息提示"/&gt;\n\n&lt;!-- innerHTML --&gt;\n&lt;mx-effects.notice \n    type="highlight"&gt;\n    &lt;span&gt;品牌色重要信息提示（innerHTML）&lt;/span&gt;\n    &lt;a class="color-brand" href="https://www.taobao.com/" rel="noopener noreferrer" target="_blank"&gt;查看链接&lt;/a&gt;\n&lt;/mx-effects.notice&gt;\n\n&lt;!-- 无icon --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    icon="false"\n    content="品牌色重要信息提示（无icon）"/&gt;\n\n&lt;!-- 带圆角 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    radius="true"\n    content="品牌色重要信息提示（带圆角）"/&gt;\n\n&lt;!-- 文案居中 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    text-align="center" \n    content="品牌色重要信息提示（文案居中）"class="mb20"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    content="品牌色重要信息提示（带边框，默认带边框都带圆角）"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    icon="false"\n    content="品牌色重要信息提示（带边框无icon）"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});