define("mx-title/__test__/index",["magix","__test__/example","$","__test__/subs","../second","./2","./5","./4","./3","./1","__test__/api"],(e,i,t)=>{e("__test__/subs"),e("../second"),e("./2"),e("./5"),e("./4"),e("./3"),e("./1"),e("__test__/api");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,i,t,_,d,n,s,m){if(t||(t=e),!d){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(a,r)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return o[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(d(e)).replace(x,l)}}if(!m){var c=/[\\'"]/g;m=function(e){return d(e).replace(c,"\\$&")}}s||(s=function(e,i,t,_){for(_=e[p];--_;)if(e[t=p+_]===i)return t;return e[t=p+e[p]++]=i,t});var p="",u="",y=e.viewId,f=e.options;return u+='<div mxv mxa="_zs_gallerye3:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(t,[{name:"使用示例",key:y+"_demo",subs:[{name:"一级",key:y+"_demo5"},{name:"二级",key:y+"_demo1"},{name:"一级+标签",key:y+"_demo2"},{name:"二级+标签",key:y+"_demo3"},{name:"实际应用场景",key:y+"_demo4"}]},{name:"API",key:y+"_api"}])+'"></div><div id="'+_(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye3:a" class="clearfix"><div mxa="_zs_gallerye3:b" class="_zs_galleryd"><div mx-view="mx-title/__test__/2" id="'+_(y)+'_demo2"></div><div mx-view="mx-title/__test__/5" id="'+_(y)+'_demo5"></div></div><div mxa="_zs_gallerye3:c" class="_zs_galleryd"><div mx-view="mx-title/__test__/4" id="'+_(y)+'_demo4"></div><div mx-view="mx-title/__test__/3" id="'+_(y)+'_demo3"></div></div></div><div mxa="_zs_gallerye3:d" class="mb20"><div mx-view="mx-title/__test__/1" id="'+_(y)+'_demo1"></div></div><div id="'+_(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(t,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"标题内容",type:"string"},{key:"tip",desc:"提示内容",type:"string"}]})}})});