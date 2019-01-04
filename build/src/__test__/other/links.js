/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/other/links",["magix","$"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = ''; $p += '<div mxs="_zs_galleryf:_" class="mb10"><span class="mr10">Magix框架文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix/" target="_blank">https://thx.github.io/magix/</a></div><div mxs="_zs_galleryf:a" class="mb10"><span class="mr10">Magix模版语法：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine/issues/27" target="_blank">https://github.com/thx/magix-combine/issues/27</a></div><div mxs="_zs_galleryf:b" class="mb10"><span class="mr10">Magix Router：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix/#!/guide?s=router" target="_blank">https://thx.github.io/magix/#!/guide?s=router</a></div><div mxs="_zs_galleryf:c" class="mb10"><span class="mr10">Maigx Cli文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix-cli-book/" target="_blank">https://thx.github.io/magix-cli-book/</a></div><div mxs="_zs_galleryf:d" class="mb10"><span class="mr10">Maigx Combine：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine" target="_blank">https://github.com/thx/magix-combine</a></div><div mxs="_zs_galleryf:e" class="mb10"><span class="mr10">项目接入云构建：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/cloudBuild" target="_blank">https://thx.github.io/magix-cli-book/#/cloudBuild</a></div><div mxs="_zs_galleryf:f" class="mb10"><span class="mr10">iconfont地址：</span><a class="color-brand" rel="noopener noreferrer" href="//iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=" target="_blank">https://iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=</a></div><div mxs="_zs_galleryf:g" class="mb10"><span class="mr10">RAP接口模拟平台：</span><a class="color-brand" rel="noopener noreferrer" href="https://rap2.alibaba-inc.com/repository/editor?id=2743" target="_blank">https://rap2.alibaba-inc.com/repository/editor?id=2743</a></div><div mxs="_zs_galleryf:h" class="mb10"><span class="mr10">Chartx：</span><a class="color-brand" rel="noopener noreferrer" href="https://chartpark.alibaba-inc.com/" target="_blank">https://chartpark.alibaba-inc.com/</a></div><div mxs="_zs_galleryf:i" class="mb10"><span class="mr10">脚手架图表库：</span><a class="color-brand" rel="noopener noreferrer" href="//chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><div mxs="_zs_galleryf:j" class="mb10"><span class="mr10">脚手架git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a></div><div mxs="_zs_galleryf:k" class="mb10"><span class="mr10">组件库git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_gallery" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_gallery.git</a></div><div mxs="_zs_galleryf:l" class="mb10"><span class="mr10">combine-tool-config配置：</span><a class="color-brand" rel="noopener noreferrer" href="//github.com/thx/magix-combine-tool-config/blob/master/index.js" target="_blank">https://github.com/thx/magix-combine-tool-config/blob/master/index.js</a></div><div mxs="_zs_galleryf:m" class="mb10"><span class="mr10">前后端接口约定：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/apiRules" target="_blank">https://thx.github.io/magix-cli-book/#/apiRules</a></div><div mxs="_zs_galleryf:n" class="mb10"><span class="mr10">新老项目iframe加载view：</span><a class="color-brand" rel="noopener noreferrer" href="https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov" target="_blank">https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov</a></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});