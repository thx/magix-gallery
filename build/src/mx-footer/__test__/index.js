define("mx-footer/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./4","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./4"),e("__test__/api");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,_,n,o,s){if(i||(i=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,v=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},d=function(e){return _(e).replace(m,v)}}if(!n){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},u=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(u,c)}}if(!s){var f=/[\\'"]/g;s=function(e){return _(e).replace(f,"\\$&")}}o||(o=function(e,t,i,d){for(d=e[x];--d;)if(e[i=x+d]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",l=e.viewId,y=e.options;return p+='<div mxv mxa="_zs_gallerybX:_" class="pr pr120"><div mx-view="__test__/subs?list='+o(i,[{name:"使用示例",key:l+"_demo",subs:[{name:"常规版",key:l+"_demo1"},{name:"极简版",key:l+"_demo2"},{name:"包含营销平台",key:l+"_demo3"},{name:"深底色",key:l+"_demo4"}]},{name:"API",key:l+"_api"}])+'"></div><div id="'+d(l)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybX:a" class="clearfix mb20"><div mx-view="mx-footer/__test__/1" id="'+d(l)+'_demo1"></div><div mx-view="mx-footer/__test__/2" id="'+d(l)+'_demo2"></div><div mx-view="mx-footer/__test__/3" id="'+d(l)+'_demo3"></div><div mx-view="mx-footer/__test__/4" id="'+d(l)+'_demo4"></div></div><div id="'+d(l)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+o(i,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"mode",desc:"页脚类型，简单版（simple）还是复杂版本",type:"string",def:""},{key:"products",desc:"是否需要妈妈产品线信息",type:"boolean",def:"false"},{key:"width",desc:"产品线信息宽度，products = true时生效",type:"number",def:"1200"},{key:"dark",desc:"产品线信息深底色白字",type:"boolean",def:"false"}]})}})});