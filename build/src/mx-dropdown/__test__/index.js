define("mx-dropdown/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./14","./5","./3","./17","./21","./1","./15","./12","./4","./6","./30","__test__/api","__test__/event"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./2"),e("./14"),e("./5"),e("./3"),e("./17"),e("./21"),e("./1"),e("./15"),e("./12"),e("./4"),e("./6"),e("./30"),e("__test__/api"),e("__test__/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,_,n,s,m){if(d||(d=e),!_){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,r=function(e){return"&"+o[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(v,r)}}if(!n){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return a[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(p,y)}}if(!m){var x=/[\\'"]/g;m=function(e){return _(e).replace(x,"\\$&")}}s||(s=function(e,t,d,i){for(i=e[c];--i;)if(e[d=c+i]===t)return d;return e[d=c+e[c]++]=t,d});var c="",l="",k=e.viewId,w=e.options,u=e.events;return l+='<div mxv mxa="_zs_gallerya;:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(d,[{name:"使用示例",key:k+"_demo",subs:[{name:"搜索框+事件处理",key:k+"_demo2"},{name:"分组",key:k+"_demo1"},{name:"hover展开",key:k+"_demo12"},{name:"前缀",key:k+"_demo15"},{name:"禁选",key:k+"_demo5"},{name:"自定义key",key:k+"_demo3"},{name:"向上展开",key:k+"_demo17"},{name:"空文案定制",key:k+"_demo14"},{name:"简单数组",key:k+"_demo4"},{name:"选项提示",key:k+"_demo21"},{name:"mx-dropdown.item",key:k+"_demo6"},{name:"小尺寸展示",key:k+"_demo30"}]},{name:"API",key:k+"_api"},{name:"Event",key:k+"_event"}])+'"></div><div id="'+i(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya;:a" class="clearfix mb20"><div mxa="_zs_gallerya;:b" class="_zs_galleryd"><div mx-view="mx-dropdown/__test__/2" id="'+i(k)+'_demo2"></div><div mx-view="mx-dropdown/__test__/14" id="'+i(k)+'_demo14"></div><div mx-view="mx-dropdown/__test__/5" id="'+i(k)+'_demo5"></div><div mx-view="mx-dropdown/__test__/3" id="'+i(k)+'_demo3"></div><div mx-view="mx-dropdown/__test__/17" id="'+i(k)+'_demo17"></div><div mx-view="mx-dropdown/__test__/21" id="'+i(k)+'_demo21"></div></div><div mxa="_zs_gallerya;:c" class="_zs_galleryd"><div mx-view="mx-dropdown/__test__/1" id="'+i(k)+'_demo1"></div><div mx-view="mx-dropdown/__test__/15" id="'+i(k)+'_demo15"></div><div mx-view="mx-dropdown/__test__/12" id="'+i(k)+'_demo12"></div><div mx-view="mx-dropdown/__test__/4" id="'+i(k)+'_demo4"></div><div mx-view="mx-dropdown/__test__/6" id="'+i(k)+'_demo6"></div><div mx-view="mx-dropdown/__test__/30" id="'+i(k)+'_demo30"></div></div></div><div id="'+i(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(d,w)+'" class="mb40"></div><div id="'+i(k)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(d,u)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n列表数组：\n1. 可为简单数组[1,2,3]\n2. 对象数组，如[{\n    value: 1,\n    text: '展示文案',\n    tip: '提示信息（可选）'\n}]\n</pre>",type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"未配置selected的时候<br/>配置了empty-text显示empty-text<br/>否则默认取list第一个显示"},{key:"trigger-type",desc:"浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"empty-text",desc:"空值",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"height",desc:"下拉框最大高度",type:"number",def:"250"},{key:"name",desc:"下拉框名称，展示位name：selected",type:"string",def:""},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"placement",desc:"可选内容展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"keyword",desc:"搜索关键词",type:"string",def:""},{key:"small",desc:"小尺寸展示",type:"boolean",def:"false"}],events:[{type:"change",desc:"选中下拉框中某个选项时触发",params:[{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"},{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"keyword",desc:"当前搜索关键词",type:"string"}]}]})}})});