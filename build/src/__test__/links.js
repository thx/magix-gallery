define("__test__/links",["magix","$"],(a,r,e)=>{var s=a("magix");a("$");e.exports=s.View.extend({tmpl:function(a,r,e,s,l,n,o,i){if(e||(e=a),!l){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(a){return"&"+t[a]+";"};l=function(a){return""+(null==a?"":a)},function(a){return l(a).replace(c,m)}}if(!n){var b={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(a){return b[a]},p=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(p,g)}}if(!i){var h=/[\\'"]/g;i=function(a){return l(a).replace(h,"\\$&")}}return'<div mxs="_zs_galleryl:_" class="mb10"><span class="mr10">Magix框架文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix/" target="_blank">https://thx.github.io/magix/</a></div><div mxs="_zs_galleryl:a" class="mb10"><span class="mr10">Magix模版语法：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine/issues/27" target="_blank">https://github.com/thx/magix-combine/issues/27</a></div><div mxs="_zs_galleryl:b" class="mb10"><span class="mr10">Magix Router：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix/#!/guide?s=router" target="_blank">https://thx.github.io/magix/#!/guide?s=router</a></div><div mxs="_zs_galleryl:c" class="mb10"><span class="mr10">Maigx Cli文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix-cli-book/" target="_blank">https://thx.github.io/magix-cli-book/</a></div><div mxs="_zs_galleryl:d" class="mb10"><span class="mr10">Maigx Combine：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine" target="_blank">https://github.com/thx/magix-combine</a></div><div mxs="_zs_galleryl:e" class="mb10"><span class="mr10">项目接入云构建：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/cloudBuild" target="_blank">https://thx.github.io/magix-cli-book/#/cloudBuild</a></div><div mxs="_zs_galleryl:f" class="mb10"><span class="mr10">iconfont地址：</span><a class="color-brand" rel="noopener noreferrer" href="//iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=" target="_blank">https://iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=</a></div><div mxs="_zs_galleryl:g" class="mb10"><span class="mr10">RAP接口模拟平台：</span><a class="color-brand" rel="noopener noreferrer" href="https://rap2.alibaba-inc.com/repository/editor?id=2743" target="_blank">https://rap2.alibaba-inc.com/repository/editor?id=2743</a></div><div mxs="_zs_galleryl:h" class="mb10"><span class="mr10">Chartx：</span><a class="color-brand" rel="noopener noreferrer" href="https://chartpark.alibaba-inc.com/" target="_blank">https://chartpark.alibaba-inc.com/</a></div><div mxs="_zs_galleryl:i" class="mb10"><span class="mr10">脚手架图表库：</span><a class="color-brand" rel="noopener noreferrer" href="//chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><div mxs="_zs_galleryl:j" class="mb10"><span class="mr10">脚手架git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a></div><div mxs="_zs_galleryl:k" class="mb10"><span class="mr10">组件库git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_gallery" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_gallery.git</a></div><div mxs="_zs_galleryl:l" class="mb10"><span class="mr10">combine-tool-config配置：</span><a class="color-brand" rel="noopener noreferrer" href="//github.com/thx/magix-combine-tool-config/blob/master/index.js" target="_blank">https://github.com/thx/magix-combine-tool-config/blob/master/index.js</a></div><div mxs="_zs_galleryl:m" class="mb10"><span class="mr10">前后端接口约定：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/apiRules" target="_blank">https://thx.github.io/magix-cli-book/#/apiRules</a></div><div mxs="_zs_galleryl:n" class="mb10"><span class="mr10">新老项目iframe加载view：</span><a class="color-brand" rel="noopener noreferrer" href="https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov" target="_blank">https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov</a></div>','<div mxs="_zs_galleryl:_" class="mb10"><span class="mr10">Magix框架文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix/" target="_blank">https://thx.github.io/magix/</a></div><div mxs="_zs_galleryl:a" class="mb10"><span class="mr10">Magix模版语法：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine/issues/27" target="_blank">https://github.com/thx/magix-combine/issues/27</a></div><div mxs="_zs_galleryl:b" class="mb10"><span class="mr10">Magix Router：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix/#!/guide?s=router" target="_blank">https://thx.github.io/magix/#!/guide?s=router</a></div><div mxs="_zs_galleryl:c" class="mb10"><span class="mr10">Maigx Cli文档地址：</span><a class="color-brand" rel="noopener noreferrer" href="//thx.github.io/magix-cli-book/" target="_blank">https://thx.github.io/magix-cli-book/</a></div><div mxs="_zs_galleryl:d" class="mb10"><span class="mr10">Maigx Combine：</span><a class="color-brand" rel="noopener noreferrer" href="https://github.com/thx/magix-combine" target="_blank">https://github.com/thx/magix-combine</a></div><div mxs="_zs_galleryl:e" class="mb10"><span class="mr10">项目接入云构建：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/cloudBuild" target="_blank">https://thx.github.io/magix-cli-book/#/cloudBuild</a></div><div mxs="_zs_galleryl:f" class="mb10"><span class="mr10">iconfont地址：</span><a class="color-brand" rel="noopener noreferrer" href="//iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=" target="_blank">https://iconfont.cn/manage/index?manage_type=myprojects&projectId=386526&keyword=</a></div><div mxs="_zs_galleryl:g" class="mb10"><span class="mr10">RAP接口模拟平台：</span><a class="color-brand" rel="noopener noreferrer" href="https://rap2.alibaba-inc.com/repository/editor?id=2743" target="_blank">https://rap2.alibaba-inc.com/repository/editor?id=2743</a></div><div mxs="_zs_galleryl:h" class="mb10"><span class="mr10">Chartx：</span><a class="color-brand" rel="noopener noreferrer" href="https://chartpark.alibaba-inc.com/" target="_blank">https://chartpark.alibaba-inc.com/</a></div><div mxs="_zs_galleryl:i" class="mb10"><span class="mr10">脚手架图表库：</span><a class="color-brand" rel="noopener noreferrer" href="//chartpark.alibaba-inc.com/#!/manage/index?projectId=13" target="_blank">https://chartpark.alibaba-inc.com/#!/manage/index?projectId=13</a></div><div mxs="_zs_galleryl:j" class="mb10"><span class="mr10">脚手架git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_scaffold" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a></div><div mxs="_zs_galleryl:k" class="mb10"><span class="mr10">组件库git仓库：</span><a class="color-brand" rel="noopener noreferrer" href="//gitlab.alibaba-inc.com/mm/zs_gallery" target="_blank">git@gitlab.alibaba-inc.com:mm/zs_gallery.git</a></div><div mxs="_zs_galleryl:l" class="mb10"><span class="mr10">combine-tool-config配置：</span><a class="color-brand" rel="noopener noreferrer" href="//github.com/thx/magix-combine-tool-config/blob/master/index.js" target="_blank">https://github.com/thx/magix-combine-tool-config/blob/master/index.js</a></div><div mxs="_zs_galleryl:m" class="mb10"><span class="mr10">前后端接口约定：</span><a class="color-brand" rel="noopener noreferrer" href="https://thx.github.io/magix-cli-book/#/apiRules" target="_blank">https://thx.github.io/magix-cli-book/#/apiRules</a></div><div mxs="_zs_galleryl:n" class="mb10"><span class="mr10">新老项目iframe加载view：</span><a class="color-brand" rel="noopener noreferrer" href="https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov" target="_blank">https://yuque.antfin-inc.com/fe-three/rwznx0/yevuov</a></div>'},render:function(){this.updater.digest()}})});