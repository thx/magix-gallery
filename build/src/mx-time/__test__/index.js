define("mx-time/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,s,d,m){if(i||(i=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,a=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(r,a)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},l=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(l,c)}}if(!m){var x=/[\\'"]/g;m=function(e){return _(e).replace(x,"\\$&")}}d||(d=function(e,t,i,n){for(n=e[p];--n;)if(e[i=p+n]===t)return i;return e[i=p+e[p]++]=t,i});var p="",u="",y=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryed:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"时分秒全可选",key:y+"_demo1"},{name:"时分秒部分可选",key:y+"_demo2"},{name:"禁用",key:y+"_demo3"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+n(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryed:a" class="clearfix mb20"><div mxa="_zs_galleryed:b" class="_zs_gallerye"><div mx-view="mx-time/__test__/1" id="'+n(y)+'_demo1"></div></div><div mxa="_zs_galleryed:c" class="_zs_gallerye"><div mx-view="mx-time/__test__/2" id="'+n(y)+'_demo2"></div><div mx-view="mx-time/__test__/3" id="'+n(y)+'_demo3"></div></div></div><div id="'+n(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+d(i,f)+'" class="mb40"></div><div id="'+n(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+d(i,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"time",desc:"格式：hh:mm:ss，默认为当前时间",type:"string"},{key:"types",desc:'<pre>\n时分秒选择类型：\n可选择"hour,minute,second"中的一个或者多个\n此外"all" = "hour,minute,second" = ""，不设置的时候默认时分秒都显示\n            </pre>',type:"string",def:""}],events:[{type:"change",desc:"切换日期时会触发",params:[{key:"time",desc:"当前时分秒，格式：hh:mm:ss",type:"string"}]}]})}})});