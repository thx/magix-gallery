define("mx-main/examples/inner4",["magix","$"],(i,n,e)=>{var t=i("magix"),d=i("$");e.exports=t.View.extend({tmpl:function(i,n,e,t,d,s,l,r){if(e||(e=i),!d){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,c=function(i){return"&"+v[i]+";"};d=function(i){return""+(null==i?"":i)},function(i){return d(i).replace(a,c)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(i){return o[i]},u=/[!')(*]/g;s=function(i){return encodeURIComponent(d(i)).replace(u,m)}}if(!r){var f=/[\\'"]/g;r=function(i){return d(i).replace(f,"\\$&")}}return'<div mxs="_zs_galleryds:_" class="box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，左侧边导航不显示子步骤</div><div>2. 没有右侧边提示区域</div><div>3. 最后一步只有返回上一步的按钮</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'完成创建\',\n    subs: [&#123;\n        label: \'完成标题\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#xe7be;&lt;/i&gt;\',\n        view: \'@./inner4\'\n    &#125;]\n&#125;\n    </pre></div>','<div mxs="_zs_galleryds:_" class="box-inner" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，左侧边导航不显示子步骤</div><div>2. 没有右侧边提示区域</div><div>3. 最后一步只有返回上一步的按钮</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'完成创建\',\n    subs: [&#123;\n        label: \'完成标题\',\n        icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#xe7be;&lt;/i&gt;\',\n        view: \'@./inner4\'\n    &#125;]\n&#125;\n    </pre></div>'},init:function(i){this.updater.set({info:i.info||{},data:d.extend(!0,{},i.data||{})})},render:function(){this.updater.digest()},check:function(){var i=this.updater.get("info"),n={};return n["test_"+i.index]=i.label,new Promise(function(e){e({ok:!0,msg:i.label,remain:n})})}})});