define("mx-loading/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./11","./6","./4","./8","./10","./5","./7","./9","__test__/api"],(e,i,d)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./11"),e("./6"),e("./4"),e("./8"),e("./10"),e("./5"),e("./7"),e("./9"),e("__test__/api");var _=e("magix");e("$");d.exports=_.View.extend({tmpl:function(e,i,d,_,t,n,m,s){if(d||(d=e),!t){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(a,v)}}if(!n){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return l[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(c,r)}}if(!s){var x=/[\\'"]/g;s=function(e){return t(e).replace(x,"\\$&")}}m||(m=function(e,i,d,_){for(_=e[u];--_;)if(e[d=u+_]===i)return d;return e[d=u+e[u]++]=i,d});var u="",g="",y=e.viewId,p=e.options;return g+='<div mxv mxa="_zs_gallerycx:_" class="pr pr120"><div mx-view="__test__/subs?list='+m(d,[{name:"手动加载",key:y+"_custom",subs:[{name:"非全屏自动关",key:y+"_custom1"},{name:"全屏自动关",key:y+"_custom2"},{name:"手动关闭",key:y+"_custom3"}]},{name:"loading动画",key:y+"_demo",subs:[{name:"circle-spinner",key:y+"_demo11"},{name:"three-bounce",key:y+"_demo10"},{name:"rectangle",key:y+"_demo6"},{name:"double-bounce",key:y+"_demo5"},{name:"square",key:y+"_demo4"},{name:"cubes",key:y+"_demo7"},{name:"pulse",key:y+"_demo8"},{name:"dots",key:y+"_demo9"}]},{name:"API",key:y+"_api"}])+'"></div><div id="'+_(y)+'_custom" mx-view="mx-title/second?content=%E6%89%8B%E5%8A%A8%E5%8A%A0%E8%BD%BD"></div><div mxa="_zs_gallerycx:a" class="clearfix mb20"><div mxa="_zs_gallerycx:b" class="_zs_gallerye"><div mx-view="mx-loading/__test__/1" id="'+_(y)+'_custom1"></div><div mx-view="mx-loading/__test__/2" id="'+_(y)+'_custom2"></div></div><div mxa="_zs_gallerycx:c" class="_zs_gallerye"><div mx-view="mx-loading/__test__/3" id="'+_(y)+'_custom3"></div></div></div><div id="'+_(y)+'_demo" mx-view="mx-title/second?content=loading%E5%8A%A8%E7%94%BB"></div><div mxa="_zs_gallerycx:d" class="clearfix mb20"><div mxa="_zs_gallerycx:e" class="_zs_gallerye"><div mx-view="mx-loading/__test__/11" id="'+_(y)+'_demo11"></div><div mx-view="mx-loading/__test__/6" id="'+_(y)+'_demo6"></div><div mx-view="mx-loading/__test__/4" id="'+_(y)+'_demo4"></div><div mx-view="mx-loading/__test__/8" id="'+_(y)+'_demo8"></div></div><div mxa="_zs_gallerycx:f" class="_zs_gallerye"><div mx-view="mx-loading/__test__/10" id="'+_(y)+'_demo10"></div><div mx-view="mx-loading/__test__/5" id="'+_(y)+'_demo5"></div><div mx-view="mx-loading/__test__/7" id="'+_(y)+'_demo7"></div><div mx-view="mx-loading/__test__/9" id="'+_(y)+'_demo9"></div></div></div><div id="'+_(y)+'_api" mx-view="mx-title/second?content=API&tip=mx-loading.anim%20api"></div><div mxv="options" mx-view="__test__/api?options='+m(d,p)+'"></div></div>'},render:function(){var e=[{key:"size",desc:"loading尺寸 ",type:"number",def:60},{key:"mode",desc:["可选动画类型","circle-spinner","three-bounce","rectangle","double-bounce","square","cubes","pulse","dots"].join("<br>"),type:"string",def:"circle-spinner"},{key:"type",desc:["展示类型","brand：品牌色","grey：灰色"].join("<br>"),type:"string",def:"grey"},{key:"color",desc:"自定义颜色",type:"hex格式色号",def:""}];this.updater.digest({viewId:this.id,options:e})}})});