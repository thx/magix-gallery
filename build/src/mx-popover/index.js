define("mx-popover/index",["magix","mx-popover/base","$"],(r,_,i)=>{var e=r("magix"),a=(e.Vframe,r("mx-popover/base")),o=r("$");e.applyStyle("_zs_galleryaj","._zs_galleryhZ,._zs_galleryi_,._zs_galleryia,._zs_galleryic,._zs_galleryid,._zs_galleryie,._zs_galleryif,._zs_galleryig,._zs_galleryih,._zs_galleryii,._zs_galleryij,._zs_galleryik{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryi_,._zs_galleryih{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryia,._zs_galleryie{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryhZ{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryif,._zs_galleryij{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryic,._zs_galleryik{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryii{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryid{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryig{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_galleryil{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryim{display:none}._zs_galleryin,._zs_galleryio{position:absolute;z-index:9999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryin{background-color:#fff;color:#333}._zs_galleryin ._zs_galleryip{padding:10px;word-break:break-all}._zs_galleryio{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryio ._zs_galleryip{padding:4px 10px}"),i.exports=a.extend({tmpl:function(r,_,i,e,a,o,n,t){if(i||(i=r),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(r){return"&"+l[r]+";"};a=function(r){return""+(null==r?"":r)},function(r){return a(r).replace(s,c)}}if(!o){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(r){return g[r]},m=/[!')(*]/g;o=function(r){return encodeURIComponent(a(r)).replace(m,f)}}if(!t){var y=/[\\'"]/g;t=function(r){return a(r).replace(y,"\\$&")}}var p="",u=r.trigger;return p+=a(u)+""},init:function(r){var _=this,i=r.placement||"bottom",e=r.align||"center";_.__cz=i,_.__cA=e,_.__cB=_.constants.classNames[[i,e].join("-")],"dark"==r.type?_.__cB+=" _zs_galleryio":_.__cB+=" _zs_galleryin mx-shadow",_.__cL=r.left,_.__cK=r.top,_.__cI=r.offset,_.__bK=!1,_.__cC=!1,_.__cD=!1,_.__bJ=r.scrollWrapper,_.__cE=r.content||"",_.__cF=r.width||200,_.__cM=r.zIndex||9999,_.__cN=/^true$/i.test(r.auto)||!1,_.__cO=r.view||"",_.__cP=r.data||{},_.__cG=r.alignText||"left",_.on("destroy",function(){_.__a.off("mouseenter mouseleave"),_.__bL&&clearTimeout(_.__bL),_.__bM&&clearTimeout(_.__bM),o("#popover_"+_.id).remove()});var a=o("#"+_.id);_.__cH=a.html(),_.__a=a,a.hover(function(){clearTimeout(_.__bM),_.__bL=setTimeout(_.wrapAsync(function(){_.__o()}),_.constants.showDelay)},function(){_.__n()})},render:function(){var r=this;r.updater.digest({trigger:r.__cH}),r.__cN&&(r.__bL=setTimeout(r.wrapAsync(function(){r.__o()}),r.constants.showDelay)),r.bindScroll()},__bS:function(){var r=this,_=r.__cB,i=r.__cF,e=r.__cM,a=r.__cO,n=r.__cP,t=r.id;a||(a="mx-popover/content",n={content:r.__cE});var l='<div class="_zs_galleryim '+_+'" id="popover_'+t+'"\n                style="width: '+i+"px; z-index: "+e+';"></div>';o(document.body).append(l);var s=r.owner.mountVframe("popover_"+t,"");s.on("created",function(){var _=r.__bQ();_.removeClass("_zs_galleryim"),_.hover(function(){clearTimeout(r.__bM)},function(){r.__n()})}),s.mountView(a,{data:n})},__o:function(){var r=this;(clearTimeout(r.__bL),r.__bK||(r.__bK=!0,r.__bS()),r.__cD)||(r.__cD=!0,r.__bQ().addClass("_zs_galleryil"))},__n:function(){var r=this;clearTimeout(r.__bL),clearTimeout(r.__bM),r.__bM=setTimeout(r.wrapAsync(function(){r.__cD&&(r.__cD=!1,o("#popover_"+r.id).removeClass("_zs_galleryil"))}),r.constants.hideDelay)}})});