define("mx-title/examples/index",["magix","examples/example","$","examples/subs","../second","./2","./5","./4","./3","./1","examples/api"],(e,i,d)=>{e("examples/subs"),e("../second"),e("./2"),e("./5"),e("./4"),e("./3"),e("./1"),e("examples/api");e("magix");var m=e("examples/example");e("$");d.exports=m.extend({tmpl:function(e,i,d,m,t,a,n,s){if(d||(d=e),!t){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,x=function(e){return"&"+l[e]+";"};t=function(e){return""+(null==e?"":e)},m=function(e){return t(e).replace(v,x)}}if(!a){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return r[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(p,o)}}if(!s){var c=/[\\'"]/g;s=function(e){return t(e).replace(c,"\\$&")}}n||(n=function(e,i,d,m){for(m=e[_];--m;)if(e[d=_+m]===i)return d;return e[d=_+e[_]++]=i,d});var _="",u="",f=e.viewId,y=e.options;return u+='<div mxv mxa="_zs_galleryfC:_" class="pr pr120"><div mx-view="examples/subs?list='+n(d,[{name:"使用示例",key:f+"_demo",subs:[{name:"一级",key:f+"_demo5"},{name:"二级",key:f+"_demo1"},{name:"一级+标签",key:f+"_demo2"},{name:"二级+标签",key:f+"_demo3"},{name:"实际应用场景",key:f+"_demo4"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+m(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryfC:a" class="clearfix"><div mxa="_zs_galleryfC:b" class="_zs_galleryd"><div mx-view="mx-title/examples/2" id="'+m(f)+'_demo2"></div><div mx-view="mx-title/examples/5" id="'+m(f)+'_demo5"></div></div><div mxa="_zs_galleryfC:c" class="_zs_galleryd"><div mx-view="mx-title/examples/4" id="'+m(f)+'_demo4"></div><div mx-view="mx-title/examples/3" id="'+m(f)+'_demo3"></div></div></div><div mxa="_zs_galleryfC:d" class="mb20"><div mx-view="mx-title/examples/1" id="'+m(f)+'_demo1"></div></div><div id="'+m(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+n(d,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"标题内容",type:"string"},{key:"tip",desc:"提示内容",type:"string"}]})}})});