define("mx-style/__test__/index",["magix","$","__test__/subs","mx-title/second","./3","./4","./6","./5","./1","./2"],(e,i,_)=>{e("__test__/subs"),e("mx-title/second"),e("./3"),e("./4"),e("./6"),e("./5"),e("./1"),e("./2");var t=e("magix");e("$");_.exports=t.View.extend({tmpl:function(e,i,_,t,d,m,n,s){if(_||(_=e),!d){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,a=function(e){return"&"+r[e]+";"};d=function(e){return""+(null==e?"":e)},t=function(e){return d(e).replace(v,a)}}if(!m){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},x=/[!')(*]/g;m=function(e){return encodeURIComponent(d(e)).replace(x,o)}}if(!s){var c=/[\\'"]/g;s=function(e){return d(e).replace(c,"\\$&")}}n||(n=function(e,i,_,t){for(t=e[u];--t;)if(e[_=u+t]===i)return _;return e[_=u+e[u]++]=i,_});var u="",y="",f=e.viewId;return y+='<div mxa="_zs_gallerydq:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(_,[{name:"checkbox",key:f+"_demo3"},{name:"radio",key:f+"_demo4"},{name:"按钮",key:f+"_demo1"},{name:"input",key:f+"_demo2"},{name:"打标",key:f+"_demo6"},{name:"textarea",key:f+"_demo5"}])+'"></div><div mxs="_zs_gallerydq:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydq:a" class="clearfix mb20"><div mxa="_zs_gallerydq:b" class="_zs_gallerye"><div mx-view="mx-style/__test__/3" id="'+t(f)+'_demo3"></div><div mx-view="mx-style/__test__/4" id="'+t(f)+'_demo4"></div><div mx-view="mx-style/__test__/6" id="'+t(f)+'_demo6"></div><div mx-view="mx-style/__test__/5" id="'+t(f)+'_demo5"></div></div><div mxa="_zs_gallerydq:c" class="_zs_gallerye"><div mx-view="mx-style/__test__/1" id="'+t(f)+'_demo1"></div><div mx-view="mx-style/__test__/2" id="'+t(f)+'_demo2"></div></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});