define("mx-main/__test__/ver",["magix","$","__test__/subs","mx-title/second","./ver-demo","./steps"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./ver-demo"),e("./steps");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,r,_,d){if(i||(i=e),!s){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,v=function(e){return"&"+m[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(a,v)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(u,o)}}if(!d){var p=/[\\'"]/g;d=function(e){return s(e).replace(p,"\\$&")}}_||(_=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",l="",f=e.viewId;return l+='<div mxa="_zs_gallerycx:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:f+"_demo"},{name:"API",key:f+"_api"},{name:"step-infos配置",key:f+"_step",subs:[{name:"可配参数",key:f+"_step1"},{name:"check",key:f+"_step2"}]}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycx:_" class="clearfix"><div mx-view="mx-main/__test__/ver-demo"></div></div><div mx-view="mx-main/__test__/steps" id="'+n(f)+'_step"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});