define("mx-status/__test__/dropdown",["magix","$","__test__/subs","mx-title/second","./4","./5","./options","./events"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./4"),e("./5"),e("./options"),e("./events");var s=e("magix");e("$");i.exports=s.View.extend({tmpl:function(e,t,i,s,_,n,d,a){if(i||(i=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},s=function(e){return _(e).replace(v,m)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return o[e]},u=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(u,l)}}if(!a){var c=/[\\'"]/g;a=function(e){return _(e).replace(c,"\\$&")}}d||(d=function(e,t,i,s){for(s=e[x];--s;)if(e[i=x+s]===t)return i;return e[i=x+e[x]++]=t,i});var x="",f="",p=e.viewId;return f+='<div mxa="_zs_galleryde:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(i,[{name:"使用示例",key:p+"_demo",subs:[{name:"纯操作",key:p+"_demo4"},{name:"纯提示",key:p+"_demo5"}]},{name:"API",key:p+"_api"},{name:"Event",key:p+"_event"}])+'"></div><div id="'+s(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryde:a" class="clearfix mb20"><div mxa="_zs_galleryde:b" class="_zs_gallerye"><div mx-view="mx-status/__test__/4" id="'+s(p)+'_demo4"></div></div><div mxa="_zs_galleryde:c" class="_zs_gallerye"><div mx-view="mx-status/__test__/5" id="'+s(p)+'_demo5"></div></div></div><div mx-view="mx-status/__test__/options" id="'+s(p)+'_api" class="mb40"></div><div mx-view="mx-status/__test__/events" id="'+s(p)+'_event"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});