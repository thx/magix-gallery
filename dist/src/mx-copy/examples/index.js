define("mx-copy/examples/index",["magix","examples/example","$","examples/subs","mx-title/second","./1","./2","examples/api","examples/event"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("examples/api"),e("examples/event");e("magix");var n=e("examples/example");e("$");t.exports=n.extend({tmpl:function(e,i,t,n,s,a,d,m){if(t||(t=e),!s){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,x=function(e){return"&"+p[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(v,x)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},r=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(r,o)}}if(!m){var c=/[\\'"]/g;m=function(e){return s(e).replace(c,"\\$&")}}d||(d=function(e,i,t,n){for(n=e[y];--n;)if(e[t=y+n]===i)return t;return e[t=y+e[y]++]=i,t});var y="",u="",_=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryaK:_" class="pr pr120"><div mx-view="examples/subs?list='+d(t,[{name:"使用示例",key:_+"_demo",subs:[{name:"显示复制",key:_+"_demo1"},{name:"隐式复制",key:_+"_demo2"}]},{name:"API",key:_+"_api"},{name:"Event",key:_+"_event"}])+'"></div><div id="'+n(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaK:a" class="clearfix mb20"><div mxa="_zs_galleryaK:b" class="_zs_galleryd"><div mx-view="mx-copy/examples/1" id="'+n(_)+'_demo1"></div></div><div mxa="_zs_galleryaK:c" class="_zs_galleryd"><div mx-view="mx-copy/examples/2" id="'+n(_)+'_demo2"></div></div></div><div id="'+n(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+d(t,f)+'" class="mb40"></div><div id="'+n(_)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+d(t,g)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"copy-node",desc:"需要复制的节点id",type:"string",def:""},{key:"copy-text",desc:"不需要显示复制内容时可直接在 mx-copy 上配置 copy-text",type:"string",def:""}],events:[{type:"success",desc:"复制成功触发",params:[{key:"-",desc:"-",type:"-"}]},{type:"error",desc:"复制失败触发",params:[{key:"-",desc:"-",type:"-"}]}]})}})});