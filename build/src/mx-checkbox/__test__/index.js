define("mx-checkbox/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(e,i,t)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var n=e("magix");e("$");t.exports=n.View.extend({tmpl:function(e,i,t,n,d,s,_,a){if(t||(t=e),!d){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,r=function(e){return"&"+c[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(o,r)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return v[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(m,l)}}if(!a){var x=/[\\'"]/g;a=function(e){return d(e).replace(x,"\\$&")}}_||(_=function(e,i,t,n){for(n=e[u];--n;)if(e[t=u+n]===i)return t;return e[t=u+e[u]++]=i,t});var u="",f="",p=e.viewId,y=e.options;return f+='<div mxv mxa="_zs_galleryad:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(t,[{name:"使用示例",key:p+"_demo"},{name:"API",key:p+"_api"}])+'"></div><div id="'+n(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryad:_" class="clearfix mb20"><div class="_zs_gallerye"><div mx-view="mx-checkbox/__test__/1"></div></div><div class="_zs_gallerye"><div mx-view="mx-checkbox/__test__/2"></div></div></div><div id="'+n(p)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(t,y)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"checked",desc:"是否选中",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁用",type:"boolean",def:"false"},{key:"indeterminate",desc:"是否部分选中，只控制样式，不控制属性",type:"boolean",def:"false"},{key:"name",desc:"checkbox 的名称",type:"string",def:""},{key:"value",desc:"checkbox 的 value 属性的值",type:"string",def:""}]})}})});