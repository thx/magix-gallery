define("mx-main/examples/inner2",["magix","$"],(n,i,e)=>{var t=n("magix"),l=n("$");e.exports=t.View.extend({tmpl:function(n,i,e,t,l,d,s,r){if(e||(e=n),!l){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(n){return"&"+v[n]+";"};l=function(n){return""+(null==n?"":n)},function(n){return l(n).replace(a,o)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(n){return c[n]},m=/[!')(*]/g;d=function(n){return encodeURIComponent(l(n)).replace(m,g)}}if(!r){var p=/[\\'"]/g;r=function(n){return l(n).replace(p,"\\$&")}}return'<div mxs="_zs_galleryc\\:_" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_galleryc\\:a" class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip + sideTitle使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div mxs="_zs_galleryc\\:b" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_galleryc\\:c" class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    sideTitle: \'单元说明\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n&lt;div&gt;1、条件1&lt;/div&gt;\n&lt;div&gt;2、条件2&lt;/div&gt;\n&lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;],\n    prevTip: \'返回计划设置\',\n    nextTip: \'下一步，添加创意\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n&#125;\n</pre><div mxs="_zs_galleryc\\:d" class="lh22 mb10"><div>JS Code：</div></div><pre mxs="_zs_galleryc\\:e" class="tip-content">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n</pre>','<div mxs="_zs_galleryc\\:_" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_galleryc\\:a" class="tip-content mb40"><div>1. 测导航子标题有几个对应当前页面有几个子view，以该页面为例，子标题有推广宝贝 + 出价方式，则对应有两个子view</div><div>2. 所有子模块共用一个侧标提示区域，配置sideTip + sideTitle使用组件默认样式</div><div>3. 子view实现check方法完成当前模块的校验</div><div>4. 自定义下一步按钮文案（nextTip）</div><div>5. 当前步骤提交的时候保留参数adgroupId，初始化的时候判断是否有dgroupId，有的话则表示第一步已完成，直接展开（nextFn）</div></div><div mxs="_zs_galleryc\\:b" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_galleryc\\:c" class="tip-content mb40">\n&#123;\n    label: \'设置单元\',\n    sideTitle: \'单元说明\',\n    sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n&lt;div&gt;1、条件1&lt;/div&gt;\n&lt;div&gt;2、条件2&lt;/div&gt;\n&lt;div&gt;3、条件3&lt;/div&gt;`,\n    subs: [&#123;\n        label: \'推广宝贝\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n        view: \'@./inner2\'\n    &#125;, &#123;\n        label: \'出价方式\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n        view: \'@./inner\'\n    &#125;],\n    prevTip: \'返回计划设置\',\n    nextTip: \'下一步，添加创意\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            adgroupId: 1\n        &#125;)\n    &#125;\n&#125;\n</pre><div mxs="_zs_galleryc\\:d" class="lh22 mb10"><div>JS Code：</div></div><pre mxs="_zs_galleryc\\:e" class="tip-content">\ninit(extra)&#123;\n    // extra.info（stepInfos[index]）：当前步骤信息\n    this.updater.set(&#123;\n        info: extra.info || &#123;&#125;\n    &#125;)\n&#125;\n/**\n* 子view实现该方法\n*/\ncheck() &#123;\n    let info = this.updater.get(\'info\');\n    let ok = true,\n        remain = &#123;&#125;;\n\n    return new Promise((resolve) =&gt; &#123;\n        // 此处返回promise，防止有接口提交校验等\n        resolve(&#123;\n            ok,\n            msg: info.label,\n            remain\n        &#125;)\n    &#125;)\n&#125;\n</pre>'},init:function(n){this.updater.set({info:n.info||{},data:l.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),i={};return i["test_"+n.index]=n.label,new Promise(function(e){e({ok:!0,msg:n.label,remain:i})})}})});