define("mx-gtip/index",["magix","$"],(t,e,i)=>{var n=t("magix"),r=t("$");n.applyStyle("_zs_galleryV","._zs_gallerygP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygQ{position:fixed;top:-50px;left:0;z-index:100;width:100%;height:50px;padding:0 46px;line-height:50px;background-color:rgba(33,33,33,.72)}._zs_gallerygQ,._zs_gallerygQ ._zs_gallerygR{color:#fff;transition:all .25s;text-align:center}._zs_gallerygQ ._zs_gallerygR{opacity:.5;position:absolute;top:50%;right:20px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_gallerygQ ._zs_gallerygR:hover{opacity:1}");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,o,a,_){if(i||(i=t),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,s=function(t){return"&"+g[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(l,s)}}if(!o){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(t){return p[t]},c=/[!')(*]/g;o=function(t){return encodeURIComponent(r(t)).replace(c,u)}}if(!_){var m=/[\\'"]/g;_=function(t){return r(t).replace(m,"\\$&")}}var d="",f=t.top,x=t.msg,y=t.timeout;return d+='<div class="_zs_gallerygQ" style="top: '+n(f)+';"><span>'+r(x)+"</span>",y||(d+='<i mxs="_zs_galleryb^:_" class="mc-iconfont _zs_gallerygR" mx-click="'+e+'__ap()">&#xe603;</i>'),d+="</div>"},init:function(t){var e=this;e.extra=t,e.__j=r("#"+e.id),e.__j.on("__p",function(t){e.extra={msg:t.msg,timeout:t.timeout},e.__n()}),e.on("destroy",function(){e.owner.unmountVframe(),e.__j.remove()})},render:function(){this.updater.digest({}),this.__n()},__n:function(t){var e=this;clearTimeout(e.__cb),clearTimeout(e.__bu),clearTimeout(e.__bt);var i=e.extra,n=i.timeout;e.__bt=setTimeout(e.wrapAsync(function(){e.updater.digest({msg:i.msg,timeout:n,top:0})}),200),n&&(e.__cb=setTimeout(e.wrapAsync(function(){e["__ap<click>"]()}),n))},"__ap<click>":function(t){var e=this;clearTimeout(e.__cb),clearTimeout(e.__bu),clearTimeout(e.__bt),e.__bu=setTimeout(e.wrapAsync(function(){e.updater.digest({top:"-50px"})}),200)}},{gtip:function(t,e){var i=this.id+"_guid",n=r("#"+i);n.length?n.trigger({type:"__p",msg:t,timeout:e}):(r("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",{msg:t,timeout:e}))}})});