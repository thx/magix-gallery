define("mx-cascade/examples/card",["magix","$","examples/subs","mx-title/second","./6","examples/api","examples/event"],(e,t,i)=>{e("examples/subs"),e("mx-title/second"),e("./6"),e("examples/api"),e("examples/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,d,a,p){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(v,m)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return c[e]},y=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(y,l)}}if(!p){var x=/[\\'"]/g;p=function(e){return s(e).replace(x,"\\$&")}}a||(a=function(e,t,i,n){for(n=e[o];--n;)if(e[i=o+n]===t)return i;return e[i=o+e[o]++]=t,i});var o="",u="",f=e.viewId,g=e.options,k=e.events;return u+='<div mxv mxa="_zs_galleryas:_" class="pr pr120"><div mx-view="examples/subs?list='+a(i,[{name:"使用示例",key:f+"_demo"},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryas:a" class="clearfix mb20"><div mx-view="mx-cascade/examples/6" id="'+n(f)+'_demo6"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(i,g)+'" class="mb40"></div><div id="'+n(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+a(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1',\n    text: '直通车',\n    img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',\n    tip: '关键词搜索推广营销工具'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"已选中的最底层value值",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"tip-key",desc:"渲染tip时读取的key",type:"string",def:"tip"},{key:"img-key",desc:"渲染img时读取的key",type:"string",def:"img"},{key:"width",desc:"单个卡片宽度",type:"number",def:"280"},{key:"height",desc:"单个卡片高度",type:"number",def:"360"},{key:"header-title",desc:"卡片标题",type:"string",def:""},{key:"header-tip",desc:"标题旁提示",type:"string",def:""}],events:[{type:"change",desc:"选中某个叶子节点时触发",params:[{key:"item",desc:"当前选中完整对象",type:"object"},{key:"selected",desc:"当前选中value值",type:"string"}]}]})}})});