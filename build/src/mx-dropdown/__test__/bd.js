define("mx-dropdown/__test__/bd",["magix","$","__test__/subs","mx-title/second","./19","./23","./24","./25","./27","./28","./29","./26","__test__/api","__test__/event"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./19"),e("./23"),e("./24"),e("./25"),e("./27"),e("./28"),e("./29"),e("./26"),e("__test__/api"),e("__test__/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,n,s,_,r){if(d||(d=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,o=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(v,o)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return m[e]},l=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(l,y)}}if(!r){var p=/[\\'"]/g;r=function(e){return n(e).replace(p,"\\$&")}}_||(_=function(e,t,d,i){for(i=e[c];--i;)if(e[d=c+i]===t)return d;return e[d=c+e[c]++]=t,d});var c="",x="",u=e.viewId,k=e.options,f=e.events;return x+='<div mxv mxa="_zs_gallerya+:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(d,[{name:"使用示例",key:u+"_demo",subs:[{name:"单选搜索",key:u+"_demo1"},{name:"单选分组",key:u+"_demo2"},{name:"单选选项禁用",key:u+"_demo3"},{name:"多选搜索",key:u+"_demo6"},{name:"多选分组",key:u+"_demo7"},{name:"多选选项禁用",key:u+"_demo8"},{name:"hover展开",key:u+"_demo4"},{name:"整体禁用",key:u+"_demo5"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+i(u)+'_bd" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya+:a" class="clearfix mb20"><div mxa="_zs_gallerya+:b" class="_zs_galleryd"><div mx-view="mx-dropdown/__test__/19" id="'+i(u)+'_demo1"></div><div mx-view="mx-dropdown/__test__/23" id="'+i(u)+'_demo2"></div><div mx-view="mx-dropdown/__test__/24" id="'+i(u)+'_demo3"></div><div mx-view="mx-dropdown/__test__/25" id="'+i(u)+'_demo4"></div></div><div mxa="_zs_gallerya+:c" class="_zs_galleryd"><div mx-view="mx-dropdown/__test__/27" id="'+i(u)+'_demo6"></div><div mx-view="mx-dropdown/__test__/28" id="'+i(u)+'_demo7"></div><div mx-view="mx-dropdown/__test__/29" id="'+i(u)+'_demo8"></div><div mx-view="mx-dropdown/__test__/26" id="'+i(u)+'_demo5"></div></div></div><div id="'+i(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(d,k)+'" class="mb40"></div><div id="'+i(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+_(d,f)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>列表数组\n1. 简单数组[1,2,3]\n2. 对象数组，如[{\n    value:1,\n    text:\"a\",\n    disabled: true/false,  //该选项是否禁用\n    pValue: '', //可选个，父节点value值\n}]</pre>",type:"array"},{key:"selected",desc:"当前选中值",type:"string|array",def:"单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔"},{key:"trigger-type",desc:"浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parents",desc:"<pre>\n分组数组，格式如下：\n[{\n    text: '组文案',\n    value: '分组值，对应list的pValue'\n}]\n</pre>",type:"array",def:""},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"keyword",desc:"搜索关键词",type:"string",def:""},{key:"height",desc:"下拉框最大高度",type:"number",def:"250"},{key:"empty-text",desc:"没有选择时的提示文案",type:"string",def:""},{key:"disabled",desc:"是否禁用",type:"",def:"false"}],events:[{type:"change",desc:"",params:[{key:"values",desc:"当前选中value数组",type:"array"},{key:"texts",desc:"当前选中text数组",type:"array"},{key:"value",desc:'当前选中value值，等于values.join(",")',type:"string"},{key:"text",desc:'当前选中text值，等于texts.join(",")',type:"string"},{key:"selected",desc:"当前选中值，初始化为什么类型就保持什么类型，默认string",type:"string|array"}]}]})}})});