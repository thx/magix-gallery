define("mx-switch/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","./1","./4","./2","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./2"),e("./3"),e("__test__/api"),e("__test__/event");e("magix");var _=e("__test__/example");e("$");i.exports=_.extend({tmpl:function(e,t,i,_,d,s,n,v){if(i||(i=e),!d){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+m[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(a,o)}}if(!s){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return l[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(c,r)}}if(!v){var x=/[\\'"]/g;v=function(e){return d(e).replace(x,"\\$&")}}n||(n=function(e,t,i,_){for(_=e[p];--_;)if(e[i=p+_]===t)return i;return e[i=p+e[p]++]=t,i});var p="",u="",y=e.viewId,f=e.options,w=e.events;return u+='<div mxv mxa="_zs_gallerydQ:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"可用切换",key:y+"_demo1"},{name:"文字说明版",key:y+"_demo4"},{name:"已开禁用",key:y+"_demo2"},{name:"禁用原因",key:y+"_demo3"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+_(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydQ:a" class="mb20 clearfix"><div mxa="_zs_gallerydQ:b" class="_zs_gallerye"><div mx-view="mx-switch/__test__/1" id="'+_(y)+'_demo1"></div></div><div mxa="_zs_gallerydQ:c" class="_zs_gallerye"><div mx-view="mx-switch/__test__/4" id="'+_(y)+'_demo4"></div><div mx-view="mx-switch/__test__/2" id="'+_(y)+'_demo2"></div><div mx-view="mx-switch/__test__/3" id="'+_(y)+'_demo3"></div></div></div><div id="'+_(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(i,f)+'" class="mb40"></div><div id="'+_(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(i,w)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"state",desc:"当前状态是开还是关，默认关闭",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁止操作",type:"boolean",def:"false"},{key:"tip",desc:"禁止操作时的补充说明",type:"string",def:""},{key:"mode",desc:"样式版本，可选带文字版（text），空心（hollow）",type:"string",def:"hollow"}],events:[{type:"change",desc:"切换开关时触发",params:[{key:"state",desc:"当前是开或者关",type:"boolean"}]}],viewId:this.id})}})});