define("mx-dialog/examples/modal",["magix","$","examples/subs","mx-title/second","./9","./10","./11","./options"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./9"),e("./10"),e("./11"),e("./options");var d=e("magix");e("$");t.exports=d.View.extend({tmpl:function(e,i,t,d,a,l,s,o){if(t||(t=e),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+n[e]+";"};a=function(e){return""+(null==e?"":e)},d=function(e){return a(e).replace(m,r)}}if(!l){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},_=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(_,x)}}if(!o){var c=/[\\'"]/g;o=function(e){return a(e).replace(c,"\\$&")}}s||(s=function(e,i,t,d){for(d=e[p];--d;)if(e[t=p+d]===i)return t;return e[t=p+e[p]++]=i,t});var p="",g="",u=e.viewId;return g+='<div mxa="_zs_gallerya7:_" class="pr pr120"><div mx-view="examples/subs?list='+s(t,[{name:"使用示例",key:u+"_demo",subs:[{name:"头部 + 底部",key:u+"_demo9"},{name:"只头部",key:u+"_demo10"},{name:"只底部",key:u+"_demo11"}]},{name:"View Methods",key:u+"_method"},{name:"dialogOptions",key:u+"_options"}])+'"></div><div id="'+d(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-dialog/examples/9" id="'+d(u)+'_demo9"></div><div mxa="_zs_gallerya7:a" class="clearfix mb20"><div mxa="_zs_gallerya7:b" class="_zs_galleryd"><div mx-view="mx-dialog/examples/10" id="'+d(u)+'_demo10"></div></div><div mxa="_zs_gallerya7:c" class="_zs_galleryd"><div mx-view="mx-dialog/examples/11" id="'+d(u)+'_demo11"></div></div></div><div id="'+d(u)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerya7:_" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxModal(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="'+d(u)+'_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_gallerya7:a" class="mb40" mx-view="mx-dialog/examples/options"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});