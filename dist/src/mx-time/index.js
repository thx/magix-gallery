define("mx-time/index",["magix","$","../mx-util/monitor","./content"],(t,e,i)=>{t("./content");var n=t("magix"),a=t("$"),r=t("../mx-util/monitor"),s=function(t){return t<10?"0"+t:t};i.exports=n.View.extend({tmpl:function(t,e,i,n,a,r,s,c){if(i||(i=t),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,d=function(t){return"&"+o[t]+";"};a=function(t){return""+(null==t?"":t)},n=function(t){return a(t).replace(u,d)}}if(!r){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return l[t]},_=/[!')(*]/g;r=function(t){return encodeURIComponent(a(t)).replace(_,m)}}if(!c){var p=/[\\'"]/g;c=function(t){return a(t).replace(p,"\\$&")}}var f="",g=t.expand,x=t.disabled,v=t.name,h=t.time,b=t.rList,y=t.viewId,k=t.types;return f+='<div class="mx-trigger ',g&&(f+=" mx-trigger "),f+='" ',x||(f+=' mx-click="'+e+'__r()" '),f+='><span mxa="_zs_galleryfH:_" class="mx-trigger-label">',v&&(f+='<span mxa="_zs_galleryfH:a" class="color-9">'+n(v)+"：</span>"),f+=" "+n(h)+'</span><span mxs="_zs_galleryfH:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div class="mx-output mx-output-bottom ',g&&(f+=" mx-output-open "),f+='">',b&&(f+='<div mx-view="mx-time/content?time='+r(h)+"&types="+r(k)+'" id="'+n(y)+'_content" mx-change="'+e+'__p()"></div><div mxs="_zs_galleryfH:a" class="mx-output-footer clearfix"><a href="javascript:;" class="fl btn btn-small btn-brand" mx-click="'+e+'__q({enter:true})">确定</a><a href="javascript:;" class="fl btn btn-small ml10" mx-click="'+e+'__q()">取消</a></div>'),f+="</div>"},init:function(t){var e=this;e.__a=a("#"+e.id);var i=t.disabled+""=="true"||a("#"+e.id)[0].hasAttribute("mx-disabled");r.__k(),e.on("destroy",function(){r.__l(e),r.__m()});var n=t.time;if(!n){var c=new Date;n=s(c.getHours())+":"+s(c.getMinutes())+":"+s(c.getSeconds())}e.updater.set({viewId:e.id,disabled:i,time:n,types:t.types,expand:!1}),e.__a.val(n)},render:function(){this.updater.digest({})},__q:function(){this.updater.get("expand")&&(this.updater.digest({expand:!1}),r.__l(this))},"__r<click>":function(t){if(!this.updater.get("expand")){var e={expand:!0};this.updater.get("rList")||(e.rList=!0),this.updater.digest(e),r.__t(this)}},__o:function(t){return n.inside(t,this.id)},"__q<click>":function(t){var e=this,i=e.updater.get("time"),a=i;t.params.enter&&(a=n.Vframe.get(e.id+"_content").invoke("val"));e.__q(),t.params.enter&&i!=a&&(e.updater.digest({time:a}),e.__a.val(a).trigger({type:"change",time:a}))},"__p<change,focusin,focusout>":function(t){t.stopPropagation()}})});