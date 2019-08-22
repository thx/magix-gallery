define("mx-preview/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./4","./2","./9","./8","./7","examples/api","./6"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./4"),e("./2"),e("./9"),e("./8"),e("./7"),e("examples/api"),e("./6");var n=e("magix");e("$");d.exports=n.View.extend({tmpl:function(e,i,d,n,m,a,r,s){if(d||(d=e),!m){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,v=function(e){return"&"+t[e]+";"};m=function(e){return""+(null==e?"":e)},n=function(e){return m(e).replace(l,v)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(m(e)).replace(x,o)}}if(!s){var c=/[\\'"]/g;s=function(e){return m(e).replace(c,"\\$&")}}r||(r=function(e,i,d,n){for(n=e[E];--n;)if(e[d=E+n]===i)return d;return e[d=E+e[E]++]=i,d});var E="",y="",_=e.viewId,B=e.options;return y+='<div mxv mxa="_zs_gallerydW:_" class="pr pr120"><div mx-view="examples/subs?list='+r(d,[{name:"使用示例",key:_+"_demo",subs:[{name:"图片",key:_+"_demo1"},{name:"视频",key:_+"_demo2"},{name:"html(iframe展示)",key:_+"_demo3"},{name:"文字",key:_+"_demo4"},{name:"缩略图≠预览",key:_+"_demo9"},{name:"纯缩略图(无预览)",key:_+"_demo7"},{name:"左对齐",key:_+"_demo8"}]},{name:"API",key:_+"_api"},{name:"关于懒加载",key:_+"_lazyload"}])+'"></div><div id="'+n(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B&tip=%E6%A0%B9%E6%8D%AE%E5%AE%9E%E9%99%85%E5%B0%BA%E5%AF%B8%E5%B1%95%E7%A4%BA%EF%BC%8C%E7%AD%89%E6%AF%94%E4%BE%8B%E7%BC%A9%E6%94%BE%EF%BC%8C%E4%B8%8D%E8%B6%85%E8%BF%87%E5%B1%8F%E5%B9%95%E5%8F%AF%E8%A7%86%E8%8C%83%E5%9B%B4%EF%BC%9B%3Cspan%20class%3D%27color-brand%27%3E%E5%AE%9E%E7%8E%B0%E7%B4%A0%E6%9D%90%E6%87%92%E5%8A%A0%E8%BD%BD%3C%2Fspan%3E"></div><div mxa="_zs_gallerydW:a" class="clearfix mb20"><div mxa="_zs_gallerydW:b" class="_zs_galleryd"><div mx-view="mx-preview/examples/1" id="'+n(_)+'_demo1"></div><div mx-view="mx-preview/examples/3" id="'+n(_)+'_demo3"></div><div mx-view="mx-preview/examples/4" id="'+n(_)+'_demo4"></div></div><div mxa="_zs_gallerydW:c" class="_zs_galleryd"><div mx-view="mx-preview/examples/2" id="'+n(_)+'_demo2"></div><div mx-view="mx-preview/examples/9" id="'+n(_)+'_demo9"></div><div mx-view="mx-preview/examples/8" id="'+n(_)+'_demo8"></div><div mx-view="mx-preview/examples/7" id="'+n(_)+'_demo7"></div></div></div><div id="'+n(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+r(d,B)+'" class="mb40"></div><div id="'+n(_)+'_lazyload" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E6%87%92%E5%8A%A0%E8%BD%BD"></div><div mxs="_zs_gallerydW:_" class="lh22">使用IntersectionObserver实现，滚动容器内依然支持懒加载；</div><div mxs="_zs_gallerydW:a" class="lh22 mb20">注意点：<span class="color-brand">需要提前给包裹容器设定一个高度，不然可能在素材未加载的时候，所有的元素都在可视区，会导致所有元素都被加载</span></div><div mxs="_zs_gallerydW:b" mx-view="mx-preview/examples/6"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"type",desc:"<pre>展示类型，不配置类型默认展示为纯文本\nimage：图片\nvideo：视频\ntext：文字链\niframe：直接iframe嵌入页面展示\n</pre>",type:"number",def:"text"},{key:"url",desc:"<pre>展示内容\nimage：图片链接\nvideo：视频链接\ntext：文本内容\niframe：html链接\n</pre>",type:"string",def:""},{key:"width",desc:'<pre>预览实际宽度\n缩略图根据width和height等比例缩放\n预览时根据当前屏幕的可视范围进行等比例修正\n<div class="color-brand">除图片和文本类型外，其余情况下必填</div>\n</pre>',type:"number",def:""},{key:"height",desc:'<pre>预览实际高度\n缩略图根据width和height等比例缩放\n预览时根据当前屏幕的可视范围进行等比例修正\n<div class="color-brand">除图片和文本类型外，其余情况下必填</div>\n</pre>',type:"number",def:""},{key:"max-width",desc:"缩略图最大宽度",type:"number",def:100},{key:"max-height",desc:"缩略图最大高度",type:"number",def:"100"},{key:"click-url",desc:"点击预览内容的跳转外链",type:"string",def:""},{key:"preview",desc:"是否需要预览，preview=false的时候只有缩略图没有预览",type:"boolean",def:"true"},{key:"preview-data",desc:"预览数据，当预览内容是缩略内容不一样时可配置，可配内容如下：<pre>{\n    type,\n    url,\n    width,\n    height,\n    scale: '缩放比例，默认1'\n}</pre>",type:"object",def:"{}"},{key:"placement",desc:"相对目标的展示位置，可选left、right",type:"string",def:"right"}]})}})});