define("mx-status/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./2","./options","./events"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./options"),e("./events");var _=e("magix");e("$");i.exports=_.View.extend({tmpl:function(e,t,i,_,s,d,n,a){if(i||(i=e),!s){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(m,r)}}if(!d){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return o[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(l,u)}}if(!a){var x=/[\\'"]/g;a=function(e){return s(e).replace(x,"\\$&")}}n||(n=function(e,t,i,_){for(_=e[c];--_;)if(e[i=c+_]===t)return i;return e[i=c+e[c]++]=t,i});var c="",f="",p=e.viewId;return f+='<div mxa="_zs_galleryd#:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:p+"_demo",subs:[{name:"纯操作",key:p+"_demo1"},{name:"操作+提示",key:p+"_demo3"},{name:"纯提示",key:p+"_demo2"}]},{name:"API",key:p+"_api"},{name:"Event",key:p+"_event"}])+'"></div><div id="'+_(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd#:a" class="clearfix mb20"><div mxa="_zs_galleryd#:b" class="_zs_galleryd"><div mx-view="mx-status/__test__/1" id="'+_(p)+'_demo1"></div></div><div mxa="_zs_galleryd#:c" class="_zs_galleryd"><div mx-view="mx-status/__test__/3" id="'+_(p)+'_demo3"></div><div mx-view="mx-status/__test__/2" id="'+_(p)+'_demo2"></div></div></div><div mx-view="mx-status/__test__/options" id="'+_(p)+'_api" class="mb40"></div><div mx-view="mx-status/__test__/events" id="'+_(p)+'_event"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});