define("mx-popover/__test__/index",["magix","$","__test__/subs","mx-title/second","./4","./9","./2","./7","./6","./3","./10","./1","./5","./8","__test__/api","./11","./12","./13"],(e,i,d)=>{e("__test__/subs"),e("mx-title/second"),e("./4"),e("./9"),e("./2"),e("./7"),e("./6"),e("./3"),e("./10"),e("./1"),e("./5"),e("./8"),e("__test__/api"),e("./11"),e("./12"),e("./13");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,_,o,m,v){if(d||(d=e),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,r=function(e){return"&"+s[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(n,r)}}if(!o){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return a[e]},c=/[!')(*]/g;o=function(e){return encodeURIComponent(_(e)).replace(c,p)}}if(!v){var l=/[\\'"]/g;v=function(e){return _(e).replace(l,"\\$&")}}m||(m=function(e,i,d,t){for(t=e[x];--t;)if(e[d=x+t]===i)return d;return e[d=x+e[x]++]=i,d});var x="",y="",g=e.viewId,f=e.options;return y+='<div mxv mxa="_zs_galleryc-:_" class="pr pr120"><div mx-view="__test__/subs?list='+m(d,[{name:"使用示例",key:g+"_demo",subs:[{name:"自定义tag",key:g+"_demo4"},{name:"自定义view",key:g+"_demo3"},{name:"黑底白字",key:g+"_demo9"},{name:"默认展开",key:g+"_demo10"},{name:"上方",key:g+"_demo2"},{name:"下方",key:g+"_demo1"},{name:"左边",key:g+"_demo7"},{name:"内容缩略显示",key:g+"_demo5"},{name:"内容包含html",key:g+"_demo6"},{name:"右边",key:g+"_demo8"}]},{name:"API",key:g+"_api"},{name:"异常情况说明",key:g+"_error",subs:[{name:"滚动定位",key:g+"_demo11"},{name:"tag=a & dark",key:g+"_demo13"},{name:"影响CSSOM",key:g+"_demo12"}]}])+'"></div><div id="'+t(g)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc-:a" class="clearfix mb20"><div mxa="_zs_galleryc-:b" class="_zs_gallerye"><div mx-view="mx-popover/__test__/4" id="'+t(g)+'_demo4"></div><div mx-view="mx-popover/__test__/9" id="'+t(g)+'_demo9"></div><div mx-view="mx-popover/__test__/2" id="'+t(g)+'_demo2"></div><div mx-view="mx-popover/__test__/7" id="'+t(g)+'_demo7"></div><div mx-view="mx-popover/__test__/6" id="'+t(g)+'_demo6"></div></div><div mxa="_zs_galleryc-:c" class="_zs_gallerye"><div mx-view="mx-popover/__test__/3" id="'+t(g)+'_demo3"></div><div mx-view="mx-popover/__test__/10" id="'+t(g)+'_demo10"></div><div mx-view="mx-popover/__test__/1" id="'+t(g)+'_demo1"></div><div mx-view="mx-popover/__test__/5" id="'+t(g)+'_demo5"></div><div mx-view="mx-popover/__test__/8" id="'+t(g)+'_demo8"></div></div></div><div id="'+t(g)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+m(d,f)+'" class="mb40"></div><div id="'+t(g)+'_error" mx-view="mx-title/second?content=%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_galleryc-:d" class="clearfix mb20"><div mxa="_zs_galleryc-:e" class="_zs_gallerye"><div mx-view="mx-popover/__test__/11" id="'+t(g)+'_demo11"></div></div><div mxa="_zs_galleryc-:f" class="_zs_gallerye"><div mx-view="mx-popover/__test__/12" id="'+t(g)+'_demo12"></div><div mx-view="mx-popover/__test__/13" id="'+t(g)+'_demo13"></div></div></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"提示内容 ",type:"string"},{key:"width",desc:"提示框宽度",type:"number",def:200},{key:"placement",desc:"提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px",type:"string",def:"bottom"},{key:"align",desc:"提示框与目标的对齐方式，top，bottom，left，right，center",type:"string",def:"center"},{key:"auto",desc:"默认自动展开提示框",type:"boolean",def:"false"},{key:"view",desc:"自定义提示内容view，配置的view以view为准，绝对路径",type:"string"},{key:"data",desc:"自定义提示内容view需要传入的数据",type:"object&nbsp;&nbsp;|&nbsp;&nbsp;array",def:""},{key:"type",desc:'\n<div>展现样式，默认白底，需要黑底时配置type="dark"</div>\n<div class="color-brand">异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div>\n<div class="color-brand">可以使用view-type与原生属性type区分来解决该问题</div>\n            ',type:"string",def:""},{key:"align-text",desc:"文字对齐方式，left，right，center",type:"string",def:"left"},{key:"scroll-wrapper",desc:"相对滚动父元素，支持格式#id，.class，id，$(node)",type:"string",def:""},{key:"z-index",desc:"自定义z-index",type:"number",def:"9999"}]})}})});