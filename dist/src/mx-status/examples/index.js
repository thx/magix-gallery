define("mx-status/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./2","./options","./events"],(e,i,s)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./options"),e("./events");var t=e("magix");e("$");s.exports=t.View.extend({tmpl:function(e,i,s,t,n,a,d,m){if(s||(s=e),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,l=function(e){return"&"+v[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(r,l)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(u,o)}}if(!m){var _=/[\\'"]/g;m=function(e){return n(e).replace(_,"\\$&")}}d||(d=function(e,i,s,t){for(t=e[c];--t;)if(e[s=c+t]===i)return s;return e[s=c+e[c]++]=i,s});var c="",p="",f=e.viewId;return p+='<div mxa="_zs_galleryeF:_" class="pr pr120"><div mx-view="examples/subs?list='+d(s,[{name:"使用示例",key:f+"_demo",subs:[{name:"纯操作",key:f+"_demo1"},{name:"操作+提示",key:f+"_demo3"},{name:"纯提示",key:f+"_demo2"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+t(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeF:a" class="clearfix mb20"><div mxa="_zs_galleryeF:b" class="_zs_galleryd"><div mx-view="mx-status/examples/1" id="'+t(f)+'_demo1"></div></div><div mxa="_zs_galleryeF:c" class="_zs_galleryd"><div mx-view="mx-status/examples/3" id="'+t(f)+'_demo3"></div><div mx-view="mx-status/examples/2" id="'+t(f)+'_demo2"></div></div></div><div mx-view="mx-status/examples/options" id="'+t(f)+'_api" class="mb40"></div><div mx-view="mx-status/examples/events" id="'+t(f)+'_event"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});