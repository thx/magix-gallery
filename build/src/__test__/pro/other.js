/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/other",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
    $p += '<div mxs="_zs_galleryy:_" class="mb10"><span class="mr10">magix框架文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix/" target="_blank">https://thx.github.io/magix/</a></div><div mxs="_zs_galleryy:a" class="mb10"><span class="mr10">maigx-cli文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix-cli-book/" target="_blank">https://thx.github.io/magix-cli-book/</a></div><div mxs="_zs_galleryy:b" class="mb10"><span class="mr10">iconfont地址：</span><a class="color-brand" rel="noopener noreferrer" href="//iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=" target="_blank">https://iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=</a></div><div mxs="_zs_galleryy:c" class="mb10"><span class="mr10">脚手架图表库：</span><a class="color-brand" rel="noopener noreferrer" href="//chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><div mxs="_zs_galleryy:d" class="mb10"><span class="mr10">脚手架git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a></div><div mxs="_zs_galleryy:e" class="mb10"><span class="mr10">组件库git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_gallery" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_gallery.git</a></div><div mxs="_zs_galleryy:f" class="mb10"><span class="mr10">combine-tool-config配置：</span><a class="color-brand" rel="noopener noreferrer" href="//github.com/thx/magix-combine-tool-config/blob/master/index.js" target="_blank">https://github.com/thx/magix-combine-tool-config/blob/master/index.js</a></div>';
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