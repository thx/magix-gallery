define("mx-dialog/examples/index",["magix","$","examples/subs","mx-title/second","./3","./12","./5","./2","./13","./1","./6","./7","./8","./options"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./3"),e("./12"),e("./5"),e("./2"),e("./13"),e("./1"),e("./6"),e("./7"),e("./8"),e("./options");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,m,o,a,l){if(d||(d=e),!m){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,r=function(e){return"&"+n[e]+";"};m=function(e){return""+(null==e?"":e)},t=function(e){return m(e).replace(s,r)}}if(!o){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},p=/[!')(*]/g;o=function(e){return encodeURIComponent(m(e)).replace(p,x)}}if(!l){var _=/[\\'"]/g;l=function(e){return m(e).replace(_,"\\$&")}}a||(a=function(e,i,d,t){for(t=e[g];--t;)if(e[d=g+t]===i)return d;return e[d=g+e[g]++]=i,d});var g="",c="",w=e.viewId;return c+='<div mxa="_zs_gallerya3:_" class="pr pr120"><div mx-view="examples/subs?list='+a(d,[{name:"使用示例",key:w+"_demo",subs:[{name:"mxDialog",key:w+"_demo3"},{name:"指定target+offset",key:w+"_demo12"},{name:"获取dialog实例",key:w+"_demo5"},{name:"alert警告",key:w+"_demo1"},{name:"confirm二次确认",key:w+"_demo2"},{name:"mxLoginView",key:w+"_demo13"},{name:"dialog内配置属性",key:w+"_demo6"},{name:"afterClose",key:w+"_demo7"},{name:"beforeClose",key:w+"_demo8"}]},{name:"View Methods",key:w+"_method"},{name:"dialogOptions",key:w+"_options"}])+'"></div><div id="'+t(w)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya3:a" class="clearfix mb20"><div mx-view="mx-dialog/examples/3" id="'+t(w)+'_demo3"></div><div mx-view="mx-dialog/examples/12" id="'+t(w)+'_demo12"></div><div mx-view="mx-dialog/examples/5" id="'+t(w)+'_demo5"></div><div mx-view="mx-dialog/examples/2" id="'+t(w)+'_demo2"></div><div mx-view="mx-dialog/examples/13" id="'+t(w)+'_demo13"></div><div mx-view="mx-dialog/examples/1" id="'+t(w)+'_demo1"></div><div mx-view="mx-dialog/examples/6" id="'+t(w)+'_demo6"></div><div mx-view="mx-dialog/examples/7" id="'+t(w)+'_demo7"></div><div mx-view="mx-dialog/examples/8" id="'+t(w)+'_demo8"></div></div><div id="'+t(w)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerya3:_" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxDialog(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>alert(title, content, [enterCallback], [dialogOptions])</td><td>警告小浮层</td><td></td></tr><tr><td>confirm(viewOptions, [dialogOptions])</td><td>二次确认浮层</td><td></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="'+t(w)+'_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_gallerya3:a" class="mb40" mx-view="mx-dialog/examples/options"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});