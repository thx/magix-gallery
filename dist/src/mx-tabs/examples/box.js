define("mx-tabs/examples/box",["magix","$","examples/subs","mx-title/second","./3","./6","./5","./10","./9","./7","examples/api","examples/event"],(e,t,i)=>{e("examples/subs"),e("mx-title/second"),e("./3"),e("./6"),e("./5"),e("./10"),e("./9"),e("./7"),e("examples/api"),e("examples/event");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,s,n,a,m){if(i||(i=e),!s){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,x=function(e){return"&"+v[e]+";"};s=function(e){return""+(null==e?"":e)},d=function(e){return s(e).replace(l,x)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return o[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(p,r)}}if(!m){var c=/[\\'"]/g;m=function(e){return s(e).replace(c,"\\$&")}}a||(a=function(e,t,i,d){for(d=e[y];--d;)if(e[i=y+d]===t)return i;return e[i=y+e[y]++]=t,i});var y="",u="",_=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryfd:_" class="pr pr120"><div mx-view="examples/subs?list='+a(i,[{name:"使用示例",key:_+"_demo",subs:[{name:"事件处理",key:_+"_demo3"},{name:"打标",key:_+"_demo10"},{name:"双向绑定",key:_+"_demo9"},{name:"带提示",key:_+"_demo5"},{name:"禁止操作",key:_+"_demo6"},{name:"空心版",key:_+"_demo7"}]},{name:"API",key:_+"_api"},{name:"Event",key:_+"_event"}])+'"></div><div id="'+d(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryfd:a" class="clearfix mb20"><div mxa="_zs_galleryfd:b" class="_zs_galleryd"><div mx-view="mx-tabs/examples/3" id="'+d(_)+'_demo3"></div><div mx-view="mx-tabs/examples/6" id="'+d(_)+'_demo6"></div><div mx-view="mx-tabs/examples/5" id="'+d(_)+'_demo5"></div></div><div mxa="_zs_galleryfd:c" class="_zs_galleryd"><div mx-view="mx-tabs/examples/10" id="'+d(_)+'_demo10"></div><div mx-view="mx-tabs/examples/9" id="'+d(_)+'_demo9"></div><div mx-view="mx-tabs/examples/7" id="'+d(_)+'_demo7"></div></div></div><div id="'+d(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(i,f)+'" class="mb40"></div><div id="'+d(_)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+a(i,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'<pre>\n对象数组，格式如下：\n[{\n    value:1,\n    text:"选项1",\n    tag:"打标标签",\n    color: \'打标自定义颜色，默认红色，禁选时灰色\',\n    tips:"提示信息"\n}]</pre>',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"不传默认取list第一个"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"mode",desc:"样式版本，可选实心（solid），空心（hollow）",type:"string",def:"solid"},{key:"tag",desc:"打标内容",type:"string",def:""}],events:[{type:"change",desc:"切换tab时触发",params:[{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"}]}]})},"changeTab<change>":function(e){this.updater.set({selectedId:e.value}).digest()}})});