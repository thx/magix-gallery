define("mx-effects/__test__/icon",["magix","$","__test__/subs","mx-title/second","./14","./15","./17","./16","__test__/api"],(e,i,t)=>{e("__test__/subs"),e("mx-title/second"),e("./14"),e("./15"),e("./17"),e("./16"),e("__test__/api");var _=e("magix");e("$");t.exports=_.View.extend({tmpl:function(e,i,t,_,d,s,n,r){if(t||(t=e),!d){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(m,v)}}if(!s){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},l=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(l,c)}}if(!r){var f=/[\\'"]/g;r=function(e){return d(e).replace(f,"\\$&")}}n||(n=function(e,i,t,_){for(_=e[x];--_;)if(e[t=x+_]===i)return t;return e[t=x+e[x]++]=i,t});var x="",p="",u=e.viewId,g=e.options;return p+='<div mxv mxa="_zs_gallerybg:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(t,[{name:"使用示例",key:u+"_demo",subs:[{name:"实心默认",key:u+"_demo14"},{name:"带提示信息",key:u+"_demo17"},{name:"空心默认",key:u+"_demo15"},{name:"自定义颜色",key:u+"_demo16"}]},{name:"API",key:u+"_api"}])+'"></div><div id="'+_(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybg:a" class="clearfix mb20"><div mxa="_zs_gallerybg:b" class="_zs_gallerye"><div mx-view="mx-effects/__test__/14" id="'+_(u)+'_demo14"></div><div mx-view="mx-effects/__test__/15" id="'+_(u)+'_demo15"></div></div><div mxa="_zs_gallerybg:c" class="_zs_gallerye"><div mx-view="mx-effects/__test__/17" id="'+_(u)+'_demo17"></div><div mx-view="mx-effects/__test__/16" id="'+_(u)+'_demo16"></div></div></div><div id="'+_(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(t,g)+'"></div></div>'},render:function(){var e=[{key:"mode",desc:"icon类型，可选实心打标（solid），空心打标（hollow）",type:"string",def:"solid"},{key:"type",desc:["展示类型","error：红色错误类型提示","warn：黄色警告类型提示","highlight：品牌色图标强调提示"].join("<br>"),type:"string",def:"默认灰色提示"},{key:"color",desc:"自定义颜色",type:"hex格式色号",def:""},{key:"tip",desc:"hover提示信息",type:"string",def:""}];this.updater.digest({viewId:this.id,options:e})}})});