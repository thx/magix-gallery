define("mx-collapse/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./4","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./4"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,d,s,a){if(i||(i=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(o,r)}}if(!d){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return m[e]},c=/[!')(*]/g;d=function(e){return encodeURIComponent(_(e)).replace(c,l)}}if(!a){var p=/[\\'"]/g;a=function(e){return _(e).replace(p,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",u="",f=e.viewId,w=e.options,y=e.events;return u+='<div mxv mxa="_zs_galleryai:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"展开单个+事件",key:f+"_demo1"},{name:"展开多个+禁用",key:f+"_demo2"},{name:"内容自定义view",key:f+"_demo3"},{name:"自定义icon",key:f+"_demo4"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryai:a" class="clearfix mb20"><div mx-view="mx-collapse/__test__/1" id="'+n(f)+'_demo1"></div><div mx-view="mx-collapse/__test__/2" id="'+n(f)+'_demo2"></div><div mx-view="mx-collapse/__test__/3" id="'+n(f)+'_demo3"></div><div mx-view="mx-collapse/__test__/4" id="'+n(f)+'_demo4"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,w)+'" class="mb40"></div><div id="'+n(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"面板数据<pre>\nlist: [{\n    disabled: true / false, //是否禁用\n    expand: true / false, //是否展开，disabled=true是expand=true也不展开，所有都不配置默认展开非禁用第一个\n    title: '面板标题',\n    content: '面板内容',\n    view: '面板自定义view，优先级view > content',\n    arrow: '自定义展开箭头，默认为 &gt;'\n}]\n</pre>",type:"array",def:""},{key:"only-one",desc:"是否只展开一个",type:"boolean",def:"true"}],events:[{type:"change",desc:"选中下拉框中某个选项时触发",params:[{key:"expands",desc:"[true, false, ...]，当前每个实体对象的展开收起状态",type:"array"}]}]})}})});