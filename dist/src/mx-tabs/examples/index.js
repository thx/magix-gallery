define("mx-tabs/examples/index",["magix","$","examples/subs","mx-title/second","./1","./8","./11","./2","./4","examples/api","examples/event"],(e,t,i)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./8"),e("./11"),e("./2"),e("./4"),e("examples/api"),e("examples/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,a,d,m){if(i||(i=e),!s){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,x=function(e){return"&"+v[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(l,x)}}if(!a){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return r[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(p,o)}}if(!m){var c=/[\\'"]/g;m=function(e){return s(e).replace(c,"\\$&")}}d||(d=function(e,t,i,n){for(n=e[y];--n;)if(e[i=y+n]===t)return i;return e[i=y+e[y]++]=t,i});var y="",u="",_=e.viewId,g=e.options,k=e.events;return u+='<div mxv mxa="_zs_gallerye;:_" class="pr pr120"><div mx-view="examples/subs?list='+d(i,[{name:"使用示例",key:_+"_demo",subs:[{name:"打标 + 事件处理",key:_+"_demo1"},{name:"双向绑定",key:_+"_demo8"},{name:"带icon",key:_+"_demo11"},{name:"自定义key",key:_+"_demo2"},{name:"带提示",key:_+"_demo4"}]},{name:"API",key:_+"_api"},{name:"Event",key:_+"_event"}])+'"></div><div id="'+n(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-tabs/examples/1" id="'+n(_)+'_demo1"></div><div mxa="_zs_gallerye;:a" class="clearfix mb20"><div mxa="_zs_gallerye;:b" class="_zs_galleryd"><div mx-view="mx-tabs/examples/8" id="'+n(_)+'_demo8"></div><div mx-view="mx-tabs/examples/11" id="'+n(_)+'_demo11"></div></div><div mxa="_zs_gallerye;:c" class="_zs_galleryd"><div mx-view="mx-tabs/examples/2" id="'+n(_)+'_demo2"></div><div mx-view="mx-tabs/examples/4" id="'+n(_)+'_demo4"></div></div></div><div id="'+n(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+d(i,g)+'" class="mb40"></div><div id="'+n(_)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+d(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'<pre>\n对象数组，格式如下：\n[{\n    value:1,\n    text:"选项1",\n    tagContent:"自定义打标内容，优先级tagContent > tag",\n    tag:"打标标签",\n    color: \'打标自定义颜色，默认品牌色，只对tag生效\',\n    tips:"提示信息"\n}]</pre>',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"不传默认取list第一个"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"}],events:[{type:"change",desc:"切换tab时触发",params:[{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"}]}]})},"changeTab<change>":function(e){this.updater.set({selectedId:e.value}).digest()}})});