define("mx-uploader/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,d,r,_){if(i||(i=e),!s){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+p[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(o,a)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},m=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(m,v)}}if(!_){var l=/[\\'"]/g;_=function(e){return s(e).replace(l,"\\$&")}}r||(r=function(e,t,i,n){for(n=e[y];--n;)if(e[i=y+n]===t)return i;return e[i=y+e[y]++]=t,i});var y="",u="",f=e.viewId,x=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryeT:_" class="pr pr120"><div mx-view="__test__/subs?list='+r(i,[{name:"使用示例",key:f+"_demo"},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeT:_" mx-view="mx-uploader/__test__/1" class="mb40"></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(i,x)+'" class="mb40"></div><div id="'+n(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+r(i,g)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"name",desc:"服务器端接收文件时的名称",type:"file"},{key:"action",desc:"上传接口地址",type:"string",def:""},{key:"multiple",desc:"是否允许多文件上传",type:"boolean",def:"false"},{key:"accept",desc:"选择文件时的类型，同input[type=file]的accept",type:"string",def:""},{key:"disabled",desc:"是否禁用",type:"boolean",def:"false"},{key:"type",desc:"上传方式<br>iframe：返回为页面<br>xhr：直接返回json数据",type:"string",def:"iframe"}],events:[{type:"success",desc:"上传成功时调用",params:[{key:"files",desc:"上传的文件",type:"-"},{key:"response",desc:"-",type:"-"}]},{type:"error",desc:"上传失败时调用",params:[{key:"error",desc:"错误信息",type:"-"}]},{type:"progress",desc:"上传过程中调用",params:[{key:"percent",desc:"上传进度",type:"-"}]}],viewId:this.id})}})});