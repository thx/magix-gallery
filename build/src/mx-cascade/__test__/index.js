define("mx-cascade/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,d,_,s,a){if(i||(i=e),!d){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+v[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(r,c)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return m[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(d(e)).replace(o,l)}}if(!a){var u=/[\\'"]/g;a=function(e){return d(e).replace(u,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",y=e.viewId,f=e.options,g=e.events;return p+='<div mxv mxa="_zs_galleryad:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"完整示例",key:y+"_demo1"},{name:"默认选中",key:y+"_demo2"},{name:"禁止选择",key:y+"_demo3"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+n(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryad:a" class="clearfix mb20"><div mxa="_zs_galleryad:b" class="_zs_galleryd"><div mx-view="mx-cascade/__test__/1" id="'+n(y)+'_demo1"></div></div><div mxa="_zs_galleryad:c" class="_zs_galleryd"><div mx-view="mx-cascade/__test__/2" id="'+n(y)+'_demo2"></div><div mx-view="mx-cascade/__test__/3" id="'+n(y)+'_demo3"></div></div></div><div id="'+n(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,f)+'" class="mb40"></div><div id="'+n(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"已选中的最底层value值",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"}],events:[{type:"change",desc:"选中某个叶子节点时触发",params:[{key:"item",desc:"当前选中完整对象",type:"object"},{key:"selected",desc:"当前选中value值",type:"string"}]}]})}})});