define("mx-popmenu/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./1","./4","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./2"),e("./1"),e("./4"),e("./3"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,d,s,r){if(i||(i=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(m,o)}}if(!d){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(_(e)).replace(l,c)}}if(!r){var p=/[\\'"]/g;r=function(e){return _(e).replace(p,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",u="",y=e.viewId,g=e.options,f=e.events;return u+='<div mxv mxa="_zs_galleryc(:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"hover显示菜单",key:y+"_demo2"},{name:"点击显示菜单",key:y+"_demo1"},{name:"右键显示菜单",key:y+"_demo4"},{name:"任意trigger",key:y+"_demo3"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+n(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-popmenu/__test__/2" id="'+n(y)+'_demo2"></div><div mx-view="mx-popmenu/__test__/1" id="'+n(y)+'_demo1"></div><div mxa="_zs_galleryc(:a" class="clearfix mb20"><div mxa="_zs_galleryc(:b" class="_zs_gallerye"><div mx-view="mx-popmenu/__test__/4" id="'+n(y)+'_demo4"></div></div><div mxa="_zs_galleryc(:c" class="_zs_gallerye"><div mx-view="mx-popmenu/__test__/3" id="'+n(y)+'_demo3"></div></div></div><div id="'+n(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,g)+'" class="mb40"></div><div id="'+n(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,f)+'"></div></div>'},render:function(){var e=[{key:"list",desc:"<pre>菜单选项，格式如下：\n[{\n    text: '菜单选项文案',\n    value: '菜单选项值'\n}]\n</pre>",type:"array"},{key:"width",desc:"菜单宽度",type:"number",def:"自适应"},{key:"trigger-type",desc:"菜单唤起方式，可选点击（click），鼠标悬浮展开（hover）",type:"string",def:"hover"},{key:"place",desc:["提示框在目标的方位","lt：左上对齐 ","lc：左中对齐 ","lb：左下对齐 ","tl：上左对齐 ","tc：上中对齐 ","tr：上右对齐 ","bl：下左对齐 ","bc：下中对齐 ","br：下右对齐 ","rt：右上对齐 ","rc：右中对齐 ","rb：右下对齐 "].join("<br>"),type:"string",def:"bc"},{key:"scroll-wrapper",desc:"相对滚动父元素，支持格式#id，.class，id，$(node)",type:"string",def:""}];this.updater.digest({viewId:this.id,options:e,events:[{type:"change",desc:"选中某个菜单选项时触发",params:[{key:"selected",desc:"当前选中value值",type:"string"}]}]})}})});