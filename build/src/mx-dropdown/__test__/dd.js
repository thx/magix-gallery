define("mx-dropdown/__test__/dd",["magix","$","__test__/subs","mx-title/second","./19","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./19"),e("__test__/api"),e("__test__/event");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,s,n,r,_){if(i||(i=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,v=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},d=function(e){return s(e).replace(c,v)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return o[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(m,y)}}if(!_){var l=/[\\'"]/g;_=function(e){return s(e).replace(l,"\\$&")}}r||(r=function(e,t,i,d){for(d=e[p];--d;)if(e[i=p+d]===t)return i;return e[i=p+e[p]++]=t,i});var p="",x="",u=e.viewId,g=e.options,k=e.events;return x+='<div mxv mxa="_zs_galleryaW:_" class="pr pr120"><div mx-view="__test__/subs?list='+r(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"搜索框+事件处理",key:u+"_demo1"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"},{name:"问题小计",key:u+"_bug"}])+'"></div><div id="'+d(u)+'_bd" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaW:a" class="clearfix mb20"><div mxa="_zs_galleryaW:b" class="_zs_gallerye"><div mx-view="mx-dropdown/__test__/19" id="'+d(u)+'_demo1"></div></div></div><div id="'+d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(i,g)+'" class="mb40"></div><div id="'+d(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+r(i,k)+'" class="mb40"></div><div id="'+d(u)+'_bug" mx-view="mx-title/second?content=%E9%97%AE%E9%A2%98%E5%B0%8F%E8%AE%A1"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'列表数组<br/>可为简单数组[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"未配置selected的时候<br/>配置了empty-text显示empty-text<br/>否则默认取list第一个显示"},{key:"trigger-type",desc:"浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"empty-text",desc:"空值",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"height",desc:"下拉框最大高度",type:"number",def:"250"},{key:"name",desc:"下拉框名称，展示位name：selected",type:"string",def:""},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;",type:"",def:""},{key:"placement",desc:"可选内容展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"keyword",desc:"搜索关键词",type:"string",def:""}],events:[{type:"change",desc:"",params:[{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"},{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"keyword",desc:"当前搜索关键词",type:"string"}]}]})}})});