define("mx-effects/__test__/notice",["magix","$","__test__/subs","mx-title/second","./3","./4","./5","./6","./7","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./3"),e("./4"),e("./5"),e("./6"),e("./7"),e("__test__/api");var _=e("magix");e("$");i.exports=_.View.extend({tmpl:function(e,t,i,_,d,n,s,r){if(i||(i=e),!d){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(a,m)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},f=/[!')(*]/g;n=function(e){return encodeURIComponent(d(e)).replace(f,c)}}if(!r){var l=/[\\'"]/g;r=function(e){return d(e).replace(l,"\\$&")}}s||(s=function(e,t,i,_){for(_=e[x];--_;)if(e[i=x+_]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",u=e.viewId,y=e.options;return p+='<div mxv mxa="_zs_gallerya-:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"灰底",key:u+"_demo3"},{name:"警告类",key:u+"_demo5"},{name:"错误类",key:u+"_demo4"},{name:"自定义颜色",key:u+"_demo6"},{name:"灰底强调",key:u+"_demo7"}]},{name:"API",key:u+"_api"}])+'"></div><div id="'+_(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya-:a" class="clearfix mb20"><div mxa="_zs_gallerya-:b" class="_zs_gallerye"><div mx-view="mx-effects/__test__/3" id="'+_(u)+'_demo3"></div><div mx-view="mx-effects/__test__/4" id="'+_(u)+'_demo4"></div></div><div mxa="_zs_gallerya-:c" class="_zs_gallerye"><div mx-view="mx-effects/__test__/5" id="'+_(u)+'_demo5"></div><div mx-view="mx-effects/__test__/6" id="'+_(u)+'_demo6"></div><div mx-view="mx-effects/__test__/7" id="'+_(u)+'_demo7"></div></div></div><div id="'+_(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,y)+'"></div></div>'},render:function(){var e=[{key:"type",desc:["展示类型","error：红色错误类型提示","warn：黄色警告类型提示","highlight：品牌色图标强调提示"].join("<br>"),type:"string",def:"默认灰色提示"},{key:"border",desc:"是否带边框 + 圆角",type:"boolean",def:"false"},{key:"text-align",desc:"文字对齐方式，left，center，right",type:"string",def:"left"},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)均可，背景色根据自定义颜色计算透明度<br/>配置了color的时候忽略type的配置",type:"string",def:""},{key:"icon",desc:"是否有警告icon",type:"boolean",def:"true"}];this.updater.digest({viewId:this.id,options:e})}})});