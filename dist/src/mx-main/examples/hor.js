define("mx-main/examples/hor",["magix","$","examples/subs","mx-title/second","./hor-demo1","./hor-demo2","./steps"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./hor-demo1"),e("./hor-demo2"),e("./steps");var m=e("magix");e("$");n.exports=m.View.extend({tmpl:function(e,i,n,m,t,r,s,d){if(n||(n=e),!t){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,p=function(e){return"&"+a[e]+";"};t=function(e){return""+(null==e?"":e)},m=function(e){return t(e).replace(o,p)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},l=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(l,x)}}if(!d){var u=/[\\'"]/g;d=function(e){return t(e).replace(u,"\\$&")}}s||(s=function(e,i,n,m){for(m=e[c];--m;)if(e[n=c+m]===i)return n;return e[n=c+e[c]++]=i,n});var c="",f="",_=e.viewId;return f+='<div mxa="_zs_galleryc+:_" class="pr pr120"><div mx-view="examples/subs?list='+s(n,[{name:"使用示例",key:_+"_demo",subs:[{name:"初态示例",key:_+"_demo1"},{name:"中间态+单步禁止",key:_+"_demo2"}]},{name:"API",key:_+"_api"},{name:"step-infos配置",key:_+"_step",subs:[{name:"可配参数",key:_+"_step1"},{name:"check",key:_+"_step2"}]}])+'"></div><div id="'+m(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc+:a" class="clearfix"><div mx-view="mx-main/examples/hor-demo1" id="'+m(_)+'_demo1"></div><div mx-view="mx-main/examples/hor-demo2" id="'+m(_)+'_demo2"></div></div><div mx-view="mx-main/examples/steps" id="'+m(_)+'_step"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});