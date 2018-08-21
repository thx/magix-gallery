/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/other",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryv:_" class="mb10"><span class="mr10">magix框架文档地址：</span><a class="color-brand" href="//thx.github.io/magix/" target="_blank">https://thx.github.io/magix/</a></div><div mxs="_zs_galleryv:a" class="mb10"><span class="mr10">maigx-cli文档地址：</span><a class="color-brand" href="//thx.github.io/magix-cli-book/" target="_blank">https://thx.github.io/magix-cli-book/</a></div><div mxs="_zs_galleryv:b" class="mb10"><span class="mr10">iconfont地址：</span><a class="color-brand" href="//iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=" target="_blank">https://iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=</a></div><div mxs="_zs_galleryv:c" class="mb10"><span class="mr10">脚手架图表库：</span><a class="color-brand" href="//chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><div mxs="_zs_galleryv:d" class="mb10"><span class="mr10">脚手架git仓库：</span><a class="color-brand" href="//gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a></div><div mxs="_zs_galleryv:e"><span class="mr10">组件库git仓库：</span><a class="color-brand" href="//gitlab.alibaba-inc.com/mm/zs_gallery" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_gallery.git</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/other.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});