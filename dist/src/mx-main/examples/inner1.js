define("mx-main/examples/inner1",["magix","$"],(n,i,e)=>{var t=n("magix"),d=n("$");e.exports=t.View.extend({tmpl:function(n,i,e,t,d,a,s,l){if(e||(e=n),!d){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,v=function(n){return"&"+c[n]+";"};d=function(n){return""+(null==n?"":n)},function(n){return d(n).replace(r,v)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(n){return m[n]},o=/[!')(*]/g;a=function(n){return encodeURIComponent(d(n)).replace(o,p)}}if(!l){var x=/[\\'"]/g;l=function(n){return d(n).replace(x,"\\$&")}}return'<div mxs="_zs_gallerydc:_" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_gallerydc:a" class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，侧边导航不显示子步骤</div><div>2. 右侧边是个自定义view，配置sideView</div><div>3. 自定义返回上一步按钮文案（prevTip），下一步按钮文案（nextTip）</div><div>4. 当前步骤提交的时候保留参数campaignId，初始化的时候判断是否有campaignId，有的话则表示第一步、第二步已完成，直接展开（nextFn）</div></div><div mxs="_zs_gallerydc:b" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_gallerydc:c" class="tip-content">\n&#123;\n    label: \'设置计划\',\n    sideView: \'@./tip\',\n    subs: [&#123;\n        label: \'基本信息\',\n        icon: \'&lt;i class="mc-iconfont fontsize-22"&gt;&#xe612;&lt;/i&gt;\',\n        view: \'@./inner1\'\n    &#125;],\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            campaignId: 1\n        &#125;)\n    &#125;\n&#125;\n</pre>','<div mxs="_zs_gallerydc:_" class="lh22 mb10"><div>页面功能说明：</div></div><div mxs="_zs_gallerydc:a" class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，侧边导航不显示子步骤</div><div>2. 右侧边是个自定义view，配置sideView</div><div>3. 自定义返回上一步按钮文案（prevTip），下一步按钮文案（nextTip）</div><div>4. 当前步骤提交的时候保留参数campaignId，初始化的时候判断是否有campaignId，有的话则表示第一步、第二步已完成，直接展开（nextFn）</div></div><div mxs="_zs_gallerydc:b" class="lh22 mb10"><div>当前页面配置信息：</div></div><pre mxs="_zs_gallerydc:c" class="tip-content">\n&#123;\n    label: \'设置计划\',\n    sideView: \'@./tip\',\n    subs: [&#123;\n        label: \'基本信息\',\n        icon: \'&lt;i class="mc-iconfont fontsize-22"&gt;&#xe612;&lt;/i&gt;\',\n        view: \'@./inner1\'\n    &#125;],\n    nextTip: \'下一步，设置计划\',\n    nextFn: (remains, next) =&gt; &#123;\n        // remains 当前步骤保留的信息，提交处理\n        next(&#123;\n            campaignId: 1\n        &#125;)\n    &#125;\n&#125;\n</pre>'},init:function(n){this.updater.set({info:n.info||{},data:d.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),i={};return i["test_"+n.index]=n.label,new Promise(function(e){e({ok:!0,msg:n.label,remain:i})})}})});