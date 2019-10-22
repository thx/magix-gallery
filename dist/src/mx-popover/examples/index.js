define("mx-popover/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./7","./8","./6","./5","./3","./4","./9","./14","./10","./15","examples/api","./11","./12"],(e,d,i)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./7"),e("./8"),e("./6"),e("./5"),e("./3"),e("./4"),e("./9"),e("./14"),e("./10"),e("./15"),e("examples/api"),e("./11"),e("./12");var m=e("magix");e("$");i.exports=m.View.extend({tmpl:function(e,d,i,m,t,o,p,a){if(i||(i=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,v=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},m=function(e){return t(e).replace(s,v)}}if(!o){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return r[e]},x=/[!')(*]/g;o=function(e){return encodeURIComponent(t(e)).replace(x,l)}}if(!a){var c=/[\\'"]/g;a=function(e){return t(e).replace(c,"\\$&")}}p||(p=function(e,d,i,m){for(m=e[y];--m;)if(e[i=y+m]===d)return i;return e[i=y+e[y]++]=d,i});var y="",_="",f=e.viewId,g=e.options;return _+='<div mxv mxa="_zs_galleryd2:_" class="pr pr120"><div mx-view="examples/subs?list='+p(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"下方",key:f+"_demo1"},{name:"上方",key:f+"_demo2"},{name:"左边",key:f+"_demo7"},{name:"右边",key:f+"_demo8"},{name:"自定义view",key:f+"_demo3"},{name:"自定义tag",key:f+"_demo4"},{name:"黑底白字",key:f+"_demo9"},{name:"偏移量offset",key:f+"_demo14"},{name:"默认展开",key:f+"_demo10"},{name:"top + left",key:f+"_demo15"},{name:"内容缩略显示",key:f+"_demo5"},{name:"内容包含html",key:f+"_demo6"}]},{name:"API",key:f+"_api"},{name:"异常情况说明",key:f+"_error",subs:[{name:"滚动定位",key:f+"_demo11"},{name:"影响CSSOM",key:f+"_demo12"}]}])+'"></div><div id="'+m(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd2:a" class="clearfix mb20"><div mxa="_zs_galleryd2:b" class="_zs_galleryd"><div mx-view="mx-popover/examples/1" id="'+m(f)+'_demo1"></div><div mx-view="mx-popover/examples/2" id="'+m(f)+'_demo2"></div><div mx-view="mx-popover/examples/7" id="'+m(f)+'_demo7"></div><div mx-view="mx-popover/examples/8" id="'+m(f)+'_demo8"></div><div mx-view="mx-popover/examples/6" id="'+m(f)+'_demo6"></div><div mx-view="mx-popover/examples/5" id="'+m(f)+'_demo5"></div></div><div mxa="_zs_galleryd2:c" class="_zs_galleryd"><div mx-view="mx-popover/examples/3" id="'+m(f)+'_demo3"></div><div mx-view="mx-popover/examples/4" id="'+m(f)+'_demo4"></div><div mx-view="mx-popover/examples/9" id="'+m(f)+'_demo9"></div><div mx-view="mx-popover/examples/14" id="'+m(f)+'_demo14"></div><div mx-view="mx-popover/examples/10" id="'+m(f)+'_demo10"></div><div mx-view="mx-popover/examples/15" id="'+m(f)+'_demo15"></div></div></div><div id="'+m(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+p(i,g)+'" class="mb40"></div><div id="'+m(f)+'_error" mx-view="mx-title/second?content=%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_galleryd2:d" class="clearfix mb20"><div mxa="_zs_galleryd2:e" class="_zs_galleryd"><div mx-view="mx-popover/examples/11" id="'+m(f)+'_demo11"></div></div><div mxa="_zs_galleryd2:f" class="_zs_galleryd"><div mx-view="mx-popover/examples/12" id="'+m(f)+'_demo12"></div></div></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"提示内容 ",type:"string"},{key:"width",desc:"提示框宽度",type:"number",def:200},{key:"placement",desc:"提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px",type:"string",def:"bottom"},{key:"align",desc:"提示框与目标的对齐方式，top，bottom，left，right，center",type:"string",def:"center"},{key:"left",desc:"最终定位相对于屏幕左侧，配置 left + top 时忽略 placement + align",type:"number",def:""},{key:"top",desc:"最终定位相对于屏幕高侧，配置 left + top 时忽略 placement + align",type:"number",def:""},{key:"offset",desc:"<pre>在placement + align / left + top 基础上微量偏移\noffset: {\n    left: -10,\n    top: 10\n}</pre>",type:"object",def:""},{key:"auto",desc:"默认自动展开提示框",type:"boolean",def:"false"},{key:"view",desc:"自定义提示内容view，配置的view以view为准，绝对路径",type:"string"},{key:"data",desc:"自定义提示内容view需要传入的数据",type:"object&nbsp;&nbsp;|&nbsp;&nbsp;array",def:""},{key:"mode",desc:'展现样式，默认白底，需要黑底时配置type="dark"',type:"string",def:""},{key:"align-text",desc:"文字对齐方式，left，right，center",type:"string",def:"left"},{key:"scroll-wrapper",desc:"相对滚动父元素，支持格式#id，.class，id，$(node)",type:"string",def:""},{key:"z-index",desc:"自定义z-index",type:"number",def:"999999"}]})}})});