define("mx-cascade/examples/index",["magix","$","examples/subs","mx-title/second","./1","./5","./4","./2","./3","examples/api","examples/event"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./5"),e("./4"),e("./2"),e("./3"),e("examples/api"),e("examples/event");var d=e("magix");e("$");t.exports=d.View.extend({tmpl:function(e,i,t,d,a,n,s,v){if(t||(t=e),!a){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};a=function(e){return""+(null==e?"":e)},d=function(e){return a(e).replace(l,c)}}if(!n){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return r[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(p,x)}}if(!v){var o=/[\\'"]/g;v=function(e){return a(e).replace(o,"\\$&")}}s||(s=function(e,i,t,d){for(d=e[y];--d;)if(e[t=y+d]===i)return t;return e[t=y+e[y]++]=i,t});var y="",u="",_=e.viewId,k=e.options,f=e.events;return u+='<div mxv mxa="_zs_galleryat:_" class="pr pr120"><div mx-view="examples/subs?list='+s(t,[{name:"使用示例",key:_+"_demo",subs:[{name:"完整示例",key:_+"_demo1"},{name:"hover展开子项",key:_+"_demo5"},{name:"双向绑定",key:_+"_demo4"},{name:"默认选中",key:_+"_demo2"},{name:"禁止选择",key:_+"_demo3"}]},{name:"API",key:_+"_api"},{name:"Event",key:_+"_event"}])+'"></div><div id="'+d(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryat:a" class="clearfix mb20"><div mxa="_zs_galleryat:b" class="_zs_galleryd"><div mx-view="mx-cascade/examples/1" id="'+d(_)+'_demo1"></div></div><div mxa="_zs_galleryat:c" class="_zs_galleryd"><div mx-view="mx-cascade/examples/5" id="'+d(_)+'_demo5"></div><div mx-view="mx-cascade/examples/4" id="'+d(_)+'_demo4"></div><div mx-view="mx-cascade/examples/2" id="'+d(_)+'_demo2"></div><div mx-view="mx-cascade/examples/3" id="'+d(_)+'_demo3"></div></div></div><div id="'+d(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(t,k)+'" class="mb40"></div><div id="'+d(_)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(t,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"已选中的最底层value值",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"trigger-type",desc:"<div>展现子列表的方式</div>\n<div>1. click</div>\n<div>2. hover</div>",type:"string",def:"click"}],events:[{type:"change",desc:"选中某个叶子节点时触发",params:[{key:"item",desc:"当前选中叶子节点完整对象",type:"object"},{key:"items",desc:"当前选中项完整的父子关系，数组顺序为父子关系",type:"array"},{key:"selected",desc:"当前选中value值",type:"string"}]}]})}})});