define("mx-time/index",["magix","$","../mx-util/monitor","./content"],(t,e,i)=>{t("./content");var n=t("magix"),a=t("$"),r=t("../mx-util/monitor"),s=function(t){return t<10?"0"+t:t};i.exports=n.View.extend({tmpl:function(t,e,i,n,a,r,s,o){if(i||(i=t),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,d=function(t){return"&"+c[t]+";"};a=function(t){return""+(null==t?"":t)},n=function(t){return a(t).replace(u,d)}}if(!r){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return l[t]},_=/[!')(*]/g;r=function(t){return encodeURIComponent(a(t)).replace(_,m)}}if(!o){var p=/[\\'"]/g;o=function(t){return a(t).replace(p,"\\$&")}}var g="",x=t.expand,f=t.disabled,v=t.name,h=t.time,b=t.rList,y=t.viewId,k=t.types;return g+='<div class="mx-trigger ',x&&(g+=" mx-trigger "),g+='" ',f||(g+=' mx-click="'+e+'__o()" '),g+='><span mxa="_zs_gallerye*:_" class="mx-trigger-label">',v&&(g+='<span mxa="_zs_gallerye*:a" class="color-9">'+n(v)+"：</span>"),g+=" "+n(h)+'</span><span mxs="_zs_gallerye*:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div class="mx-output mx-output-bottom ',x&&(g+=" mx-output-open "),g+='">',b&&(g+='<div mx-view="mx-time/content?time='+r(h)+"&types="+r(k)+'" id="'+n(y)+'_content" mx-change="'+e+'__m()"></div><div mxs="_zs_gallerye*:a" class="mx-output-footer clearfix"><a href="javascript:;" class="fl btn btn-small btn-brand" mx-click="'+e+'__n({enter:true})">确定</a><a href="javascript:;" class="fl btn btn-small ml10" mx-click="'+e+'__n()">取消</a></div>'),g+="</div>"},init:function(t){var e=this;e.__a=a("#"+e.id);var i=t.disabled+""=="true"||a("#"+e.id)[0].hasAttribute("mx-disabled");r.__h(),e.on("destroy",function(){r.__i(e),r.__j()});var n=t.time;if(!n){var o=new Date;n=s(o.getHours())+":"+s(o.getMinutes())+":"+s(o.getSeconds())}e.updater.set({viewId:e.id,disabled:i,time:n,types:t.types,expand:!1}),e.__a.val(n)},render:function(){this.updater.digest({})},__n:function(){this.updater.get("expand")&&(this.updater.digest({expand:!1}),r.__i(this))},"__o<click>":function(t){if(!this.updater.get("expand")){var e={expand:!0};this.updater.get("rList")||(e.rList=!0),this.updater.digest(e),r.__q(this)}},__l:function(t){return n.inside(t,this.id)},"__n<click>":function(t){var e=this,i=e.updater.get("time"),a=i;t.params.enter&&(a=n.Vframe.get(e.id+"_content").invoke("val"));e.__n(),t.params.enter&&i!=a&&(e.updater.digest({time:a}),e.__a.val(a).trigger({type:"change",time:a}))},"__m<change,focusin,focusout>":function(t){t.stopPropagation()}})});