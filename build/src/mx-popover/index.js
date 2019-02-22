define("mx-popover/index",["magix","mx-popover/base","$"],(r,_,e)=>{var a=r("magix"),o=(a.Vframe,r("mx-popover/base")),t=r("$");a.applyStyle("_zs_galleryam","._zs_galleryke{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykf,._zs_gallerykg,._zs_gallerykh,._zs_galleryki,._zs_gallerykj,._zs_gallerykk,._zs_gallerykl,._zs_gallerykm,._zs_gallerykn,._zs_galleryko,._zs_gallerykp,._zs_gallerykq{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_gallerykg,._zs_gallerykn{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_gallerykh,._zs_gallerykk{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_gallerykf{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_gallerykl,._zs_gallerykp{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryki,._zs_gallerykq{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryko{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_gallerykj{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_gallerykm{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_gallerykr{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryks{display:none}._zs_gallerykt,._zs_galleryku{position:absolute;z-index:9999;height:auto;border-radius:4px;font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerykt{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6;background-color:#fff;color:#333}._zs_gallerykt ._zs_gallerykv{padding:10px;word-break:break-all}._zs_galleryku{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryku ._zs_gallerykv{padding:4px 10px}"),e.exports=o.extend({tmpl:function(r,_,e,a,o,t,n,i){if(e||(e=r),!o){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(r){return"&"+s[r]+";"};o=function(r){return""+(null==r?"":r)},function(r){return o(r).replace(l,c)}}if(!t){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(r){return g[r]},p=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(p,f)}}if(!i){var m=/[\\'"]/g;i=function(r){return o(r).replace(m,"\\$&")}}var u="",y=r.trigger;return u+=o(y)+""},init:function(r){var _=this,e=r.placement||"bottom",a=r.align||"center";_.__cl=e,_.__cm=a,_.__cn=_.constants.classNames[e+a[0].toUpperCase()+a.slice(1)],"dark"==r.type?_.__cn+=" _zs_galleryku":_.__cn+=" _zs_gallerykt",_.__bp=!1,_.__bq=!1,_.__br=!1,_.__bs=r.scrollWrapper,_.__co=r.content||"",_.__cp=r.width||200,_.__cu=/^true$/i.test(r.auto)||!1,_.__cv=r.view||"",_.__cw=r.data||{},_.__cq=r.alignText||"left",_.on("destroy",function(){_.__j.off("mouseenter mouseleave"),_.__bt&&clearTimeout(_.__bt),_.__bu&&clearTimeout(_.__bu),t("#popover_"+_.id).remove()});var o=t("#"+_.id);_.__cr=o.html(),_.__j=o,o.hover(function(){clearTimeout(_.__bu),_.__bt=setTimeout(_.wrapAsync(function(){_.__n()}),_.constants.showDelay)},function(){_.__m()})},render:function(){var r=this;r.updater.digest({trigger:r.__cr}),r.__cu&&(r.__bt=setTimeout(r.wrapAsync(function(){r.__n()}),r.constants.showDelay)),r.bindScroll()},__bz:function(){var r=this,_=r.__cn,e=r.__cp,a=r.__cv,o=r.__cw,n=r.id;a||(a="mx-popover/content",o={content:r.__co});var i='<div class="_zs_galleryks '+_+'" id="popover_'+n+'"\n                style="width: '+e+'px;"></div>';t(document.body).append(i);var s=r.owner.mountVframe("popover_"+n,"");s.on("created",function(){var _=r.__bx();_.removeClass("_zs_galleryks"),_.hover(function(){clearTimeout(r.__bu)},function(){r.__m()})}),s.mountView(a,{data:o})},__n:function(){var r=this;(clearTimeout(r.__bt),r.__bp||(r.__bp=!0,r.__bz()),r.__br)||(r.__br=!0,r.__bx().addClass("_zs_gallerykr"))},__m:function(){var r=this;clearTimeout(r.__bt),clearTimeout(r.__bu),r.__bu=setTimeout(r.wrapAsync(function(){r.__br&&(r.__br=!1,t("#popover_"+r.id).removeClass("_zs_gallerykr"))}),r.constants.hideDelay)}})});