define("mx-style/examples/index",["magix","$","examples/subs","mx-title/second","./3","./4","./2","./5"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./3"),e("./4"),e("./2"),e("./5");var r=e("magix");e("$");d.exports=r.View.extend({tmpl:function(e,i,d,r,m,n,t,a){if(d||(d=e),!m){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+l[e]+";"};m=function(e){return""+(null==e?"":e)},r=function(e){return m(e).replace(s,x)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return v[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(m(e)).replace(c,o)}}if(!a){var u=/[\\'"]/g;a=function(e){return m(e).replace(u,"\\$&")}}t||(t=function(e,i,d,r){for(r=e[_];--r;)if(e[d=_+r]===i)return d;return e[d=_+e[_]++]=i,d});var _="",p="",f=e.viewId;return p+='<div mxa="_zs_galleryer:_" class="pr pr120"><div mx-view="examples/subs?list='+t(d,[{name:"checkbox",key:f+"_demo3"},{name:"radio",key:f+"_demo4"},{name:"input",key:f+"_demo2"},{name:"textarea",key:f+"_demo5"}])+'"></div><div mxs="_zs_galleryer:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryer:a" class="clearfix mb20"><div mxa="_zs_galleryer:b" class="_zs_galleryd"><div mx-view="mx-style/examples/3" id="'+r(f)+'_demo3"></div><div mx-view="mx-style/examples/4" id="'+r(f)+'_demo4"></div></div><div mxa="_zs_galleryer:c" class="_zs_galleryd"><div mx-view="mx-style/examples/2" id="'+r(f)+'_demo2"></div><div mx-view="mx-style/examples/5" id="'+r(f)+'_demo5"></div></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});