define("mx-editor/examples/index",["magix","$","examples/subs","mx-title/second","./1","./4","./5","./3","./2","examples/api","examples/event"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./5"),e("./3"),e("./2"),e("examples/api"),e("examples/event");var d=e("magix");e("$");t.exports=d.View.extend({tmpl:function(e,i,t,d,n,m,s,a){if(t||(t=e),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+v[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(o,l)}}if(!m){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return r[e]},p=/[!')(*]/g;m=function(e){return encodeURIComponent(n(e)).replace(p,x)}}if(!a){var c=/[\\'"]/g;a=function(e){return n(e).replace(c,"\\$&")}}s||(s=function(e,i,t,d){for(d=e[_];--d;)if(e[t=_+d]===i)return t;return e[t=_+e[_]++]=i,t});var _="",u="",y=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_gallerybB:_" class="pr pr120"><div mx-view="examples/subs?list='+s(t,[{name:"使用示例",key:y+"_demo",subs:[{name:"自定义模板",key:y+"_demo1"},{name:"双向绑定",key:y+"_demo5"},{name:"表格中",key:y+"_demo3"},{name:"小号输入框",key:y+"_demo2"},{name:"多行缩略",key:y+"_demo4"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+d(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybB:a" class="clearfix mb20"><div mxa="_zs_gallerybB:b" class="_zs_galleryd"><div mx-view="mx-editor/examples/1" id="'+d(y)+'_demo1"></div><div mx-view="mx-editor/examples/4" id="'+d(y)+'_demo4"></div></div><div mxa="_zs_gallerybB:c" class="_zs_galleryd"><div mx-view="mx-editor/examples/5" id="'+d(y)+'_demo5"></div><div mx-view="mx-editor/examples/3" id="'+d(y)+'_demo3"></div><div mx-view="mx-editor/examples/2" id="'+d(y)+'_demo2"></div></div></div><div id="'+d(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(t,f)+'" class="mb40"></div><div id="'+d(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(t,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"需要编辑的文案",type:"string",def:""},{key:"tmpl",desc:"编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容",type:"string",def:"${content}"},{key:"rules",desc:"校验规则",type:"object",def:"支持form所支持的所有类型校验"},{key:"small",desc:"是否是缩小尺寸的input",type:"boolean",def:"false"},{key:"width",desc:"input的宽度",type:"number",def:140}],events:[{type:"change",desc:"回车或者失去焦点触发，只调用一次",params:[{key:"editText",desc:"编辑完成的内容",type:"string"}]}]})}})});