define("mx-editor/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./4","./3","./2","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./3"),e("./2"),e("__test__/api"),e("__test__/event");var _=e("magix");e("$");i.exports=_.View.extend({tmpl:function(e,t,i,_,d,n,s,v){if(i||(i=e),!d){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,r=function(e){return"&"+m[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(o,r)}}if(!n){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},l=/[!')(*]/g;n=function(e){return encodeURIComponent(d(e)).replace(l,c)}}if(!v){var x=/[\\'"]/g;v=function(e){return d(e).replace(x,"\\$&")}}s||(s=function(e,t,i,_){for(_=e[p];--_;)if(e[i=p+_]===t)return i;return e[i=p+e[p]++]=t,i});var p="",u="",y=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_gallerybh:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"自定义模板",key:y+"_demo1"},{name:"表格中",key:y+"_demo3"},{name:"小号输入框",key:y+"_demo2"},{name:"多行缩略",key:y+"_demo4"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+_(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybh:a" class="clearfix mb20"><div mxa="_zs_gallerybh:b" class="_zs_galleryd"><div mx-view="mx-editor/__test__/1" id="'+_(y)+'_demo1"></div><div mx-view="mx-editor/__test__/4" id="'+_(y)+'_demo4"></div></div><div mxa="_zs_gallerybh:c" class="_zs_galleryd"><div mx-view="mx-editor/__test__/3" id="'+_(y)+'_demo3"></div><div mx-view="mx-editor/__test__/2" id="'+_(y)+'_demo2"></div></div></div><div id="'+_(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,f)+'" class="mb40"></div><div id="'+_(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"需要编辑的文案",type:"string",def:""},{key:"tmpl",desc:"编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容",type:"string",def:"${content}"},{key:"rules",desc:"校验规则",type:"object",def:"支持form所支持的所有类型校验"},{key:"small",desc:"是否是缩小尺寸的input",type:"boolean",def:"false"},{key:"width",desc:"input的宽度",type:"number",def:140}],events:[{type:"edit",desc:"回车或者失去焦点触发，只调用一次",params:[{key:"editText",desc:"编辑完成的内容",type:"string"}]}]})}})});