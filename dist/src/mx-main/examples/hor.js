define("mx-main/examples/hor",["magix","$","examples/example","examples/subs","mx-title/second","./hor-demo1","examples/api","./steps"],(e,i,s)=>{e("examples/subs"),e("mx-title/second"),e("./hor-demo1"),e("examples/api"),e("./steps");e("magix"),e("$");var t=e("examples/example");s.exports=t.extend({tmpl:function(e,i,s,t,n,a,m,d){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(p,o)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return l[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(v,x)}}if(!d){var c=/[\\'"]/g;d=function(e){return n(e).replace(c,"\\$&")}}m||(m=function(e,i,s,t){for(t=e[u];--t;)if(e[s=u+t]===i)return s;return e[s=u+e[u]++]=i,s});var u="",f="",_=e.viewId,y=e.options;return f+='<div mxv mxa="_zs_gallerydk:_" class="pr pr120"><div mx-view="examples/subs?list='+m(s,[{name:"使用示例",key:_+"_demo",subs:[{name:"初态示例",key:_+"_demo1"},{name:"中间态+单步禁止",key:_+"_demo2"}]},{name:"API",key:_+"_api"},{name:"step-infos配置",key:_+"_step",subs:[{name:"可配参数",key:_+"_step"},{name:"check",key:_+"_step"}]}])+'"></div><div id="'+t(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydk:a" class="clearfix"><div mx-view="mx-main/examples/hor-demo1" id="'+t(_)+'_demo1"></div></div><div id="'+t(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+m(s,y)+'" class="mb40"></div><div id="'+t(_)+'_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_gallerydk:_" mx-view="mx-main/examples/steps"></div></div>'},render:function(){var e=this.id,i=[{key:"step-infos",desc:'步骤信息，<a href="javascript:;" mx-click="to({id:\''+e+'_step\'})" class="color-brand">查看详细说明</a>',type:"array",def:"[]"},{key:"already-step",desc:"当前已经到达第几步，从1开始",type:"number",def:"取路由地址上stepIndex，1 和 alreadyStep的最大值"}];this.updater.digest({viewId:e,options:i})}})});