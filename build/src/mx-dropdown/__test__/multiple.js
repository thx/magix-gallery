define("mx-dropdown/__test__/multiple",["magix","$","__test__/subs","mx-title/second","./8","./13","./16","./9","./22","./18","./7","./20","./11","./10","__test__/api","__test__/event"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./8"),e("./13"),e("./16"),e("./9"),e("./22"),e("./18"),e("./7"),e("./20"),e("./11"),e("./10"),e("__test__/api"),e("__test__/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,_,n,s,m){if(d||(d=e),!_){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(r,v)}}if(!n){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return a[e]},l=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(l,y)}}if(!m){var c=/[\\'"]/g;m=function(e){return _(e).replace(c,"\\$&")}}s||(s=function(e,t,d,i){for(i=e[p];--i;)if(e[d=p+i]===t)return d;return e[d=p+e[p]++]=t,d});var p="",x="",u=e.viewId,k=e.options,f=e.events;return x+='<div mxv mxa="_zs_galleryaW:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(d,[{name:"使用示例",key:u+"_demo",subs:[{name:"事件+双向绑定值",key:u+"_demo8"},{name:"复杂分组",key:u+"_demo7"},{name:"限制选择上限",key:u+"_demo20"},{name:"hover展开",key:u+"_demo13"},{name:"带搜索框",key:u+"_demo16"},{name:"禁选",key:u+"_demo11"},{name:"自定义key",key:u+"_demo9"},{name:"连续选择+下限",key:u+"_demo22"},{name:"向上展开",key:u+"_demo18"},{name:"简单数组",key:u+"_demo10"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+i(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaW:a" class="clearfix mb20"><div mxa="_zs_galleryaW:b" class="_zs_gallerye"><div mx-view="mx-dropdown/__test__/8" id="'+i(u)+'_demo8"></div><div mx-view="mx-dropdown/__test__/13" id="'+i(u)+'_demo13"></div><div mx-view="mx-dropdown/__test__/16" id="'+i(u)+'_demo16"></div><div mx-view="mx-dropdown/__test__/9" id="'+i(u)+'_demo9"></div><div mx-view="mx-dropdown/__test__/22" id="'+i(u)+'_demo22"></div><div mx-view="mx-dropdown/__test__/18" id="'+i(u)+'_demo18"></div></div><div mxa="_zs_galleryaW:c" class="_zs_gallerye"><div mx-view="mx-dropdown/__test__/7" id="'+i(u)+'_demo7"></div><div mx-view="mx-dropdown/__test__/20" id="'+i(u)+'_demo20"></div><div mx-view="mx-dropdown/__test__/11" id="'+i(u)+'_demo11"></div><div mx-view="mx-dropdown/__test__/10" id="'+i(u)+'_demo10"></div></div></div><div id="'+i(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(d,k)+'" class="mb40"></div><div id="'+i(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(d,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔"},{key:"trigger-type",desc:"浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"min",desc:"选择个数下限，min > 0时，点击确定时若len < min，不允许提交",type:"number",def:""},{key:"max",desc:"选择个数上限",type:"number",def:""},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"need-all",desc:"多选下拉框是否需要全选功能，默认true",type:"boolean",def:"true"},{key:"height",desc:"下拉框最大高度",type:"number",def:"400"},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;",type:"",def:""},{key:"name",desc:"全选时候的提示文案，比如“全部XX”",type:"string",def:""},{key:"empty-text",desc:"没有选择时的提示文案",type:"string",def:""},{key:"placement",desc:"可选内容展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"continuous",desc:"是否要求选择连续的数据<br/>continuous = true时，点击确定时若选择不是连续数据，不允许提交<br/>提示请选择连续的(${name} || 数据)",type:"boolean",def:"false"}],events:[{type:"change",desc:"点击下拉框中“确定”按钮时触发",params:[{key:"selected",desc:"当前选中value值，初始化selected是数组则返回数组，否则为逗号分隔",type:"array or string"},{key:"values",desc:"当前选中value",type:"array"},{key:"texts",desc:"当前选中text，顺序同values",type:"array"}]}]})}})});