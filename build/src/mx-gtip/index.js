define("mx-gtip/index",["magix","$"],(t,e,i)=>{var n=t("magix"),r=t("$");n.applyStyle("_zs_galleryW","._zs_gallerygc{position:fixed;top:-50px;left:0;z-index:100000;width:100%;height:50px;padding:0 46px;line-height:50px;background-color:rgba(33,33,33,.72)}._zs_gallerygc,._zs_gallerygc ._zs_gallerygd{color:#fff;transition:all var(--duration);text-align:center}._zs_gallerygc ._zs_gallerygd{opacity:.5;position:absolute;top:50%;right:20px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_gallerygc ._zs_gallerygd:hover{opacity:1}");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,o,a,_){if(i||(i=t),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,l=function(t){return"&"+c[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(g,l)}}if(!o){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(t){return u[t]},p=/[!')(*]/g;o=function(t){return encodeURIComponent(r(t)).replace(p,s)}}if(!_){var m=/[\\'"]/g;_=function(t){return r(t).replace(m,"\\$&")}}var d="",f=t.top,x=t.msg,y=t.timeout;return d+='<div class="_zs_gallerygc" style="top: '+n(f)+';"><span>'+r(x)+"</span>",y||(d+='<i mxs="_zs_gallerycw:_" class="mc-iconfont _zs_gallerygd" mx-click="'+e+'__aL()">&#xe603;</i>'),d+="</div>"},init:function(t){var e=this;e.extra=t,e.__a=r("#"+e.id),e.__a.on("__q",function(t){e.extra={msg:t.msg,timeout:t.timeout},e.__o()}),e.on("destroy",function(){e.owner.unmountVframe(),e.__a.remove()})},render:function(){this.updater.digest({}),this.__o()},__o:function(t){var e=this;clearTimeout(e.__ct),clearTimeout(e.__bO),clearTimeout(e.__bN);var i=e.extra,n=i.timeout;e.__bN=setTimeout(e.wrapAsync(function(){e.updater.digest({msg:i.msg,timeout:n,top:0})}),200),n&&(e.__ct=setTimeout(e.wrapAsync(function(){e["__aL<click>"]()}),n))},"__aL<click>":function(t){var e=this;clearTimeout(e.__ct),clearTimeout(e.__bO),clearTimeout(e.__bN),e.__bO=setTimeout(e.wrapAsync(function(){e.updater.digest({top:"-50px"})}),200)}},{gtip:function(t,e){var i=this.id+"_guid",n=r("#"+i);n.length?n.trigger({type:"__q",msg:t,timeout:e}):(r("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",{msg:t,timeout:e}))}})});