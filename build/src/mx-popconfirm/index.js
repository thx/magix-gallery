define("mx-popconfirm/index",["magix","mx-popover/base","../mx-monitor/index","$"],(r,_,e)=>{var o=r("magix"),i=(o.Vframe,r("mx-popover/base")),n=r("../mx-monitor/index"),a=r("$");o.applyStyle("_zs_galleryam","._zs_galleryjR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjS,._zs_galleryjT,._zs_galleryjU,._zs_galleryjV,._zs_galleryjW,._zs_galleryjX,._zs_galleryjY,._zs_galleryjZ,._zs_galleryk_,._zs_galleryka,._zs_gallerykb,._zs_gallerykc{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryjT,._zs_galleryk_{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryjU,._zs_galleryjX{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryjS{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryjY,._zs_gallerykb{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryjV,._zs_gallerykc{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryka{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryjW{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryjZ{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_gallerykd{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryke{display:none}._zs_gallerykf,._zs_gallerykg{position:absolute;z-index:9999;height:auto;border-radius:4px;font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerykf{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6;background-color:#fff;color:#333}._zs_gallerykf ._zs_gallerykh{padding:10px;word-break:break-all}._zs_gallerykg{background-color:rgba(33,33,33,.72);color:#fff}._zs_gallerykg ._zs_gallerykh{padding:4px 10px}"),e.exports=i.extend({tmpl:function(r,_,e,o,i,n,a,t){if(e||(e=r),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,g=function(r){return"&"+s[r]+";"};i=function(r){return""+(null==r?"":r)},function(r){return i(r).replace(l,g)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(r){return c[r]},p=/[!')(*]/g;n=function(r){return encodeURIComponent(i(r)).replace(p,f)}}if(!t){var m=/[\\'"]/g;t=function(r){return i(r).replace(m,"\\$&")}}var y="",d=r.trigger;return y+=i(d)+""},init:function(r){var _=this;n.__f();var e={t:"top",l:"left",r:"right",b:"bottom",c:"center"},o=(r.place||"bc").split(""),i=e[o[0]],t=e[o[1]];_.__cy=i,_.__cz=t,_.__cA=_.constants.classNames[[i,t].join("-")]+" _zs_gallerykf",_.__bH=!1,_.__cB=!1,_.__cC=!1,_.__bG=r.scrollWrapper,_.__cD=r.content||"",_.__cE=r.width||200,_.__cF=r.alignText||"left",_.on("destroy",function(){_.__k.off("mouseenter mouseleave"),_.__bI&&clearTimeout(_.__bI),a("#popover_"+_.id).remove(),n.__g(_),n.__h()});var s=a("#"+_.id);_.__cG=s.html(),_.__k=s,s.on("click",function(){_.__bI=setTimeout(_.wrapAsync(function(){_.__o()}),_.constants.showDelay)}),_.bindScroll()},render:function(){this.updater.digest({trigger:this.__cG})},__bP:function(){var r=this,_=r.__cA,e=r.__cE,o=r.id,i={content:r.__cD},n='<div class="_zs_galleryke '+_+'" id="popover_'+o+'"\n                style="width: '+e+'px;"></div>';a(document.body).append(n);var t=r.owner.mountVframe("popover_"+o,"");t.on("created",function(){r.__bN().removeClass("_zs_galleryke")}),t.mountView("mx-popconfirm/content",{data:i,submit:function(){r.__n(),r.__k.trigger({type:"popconfirm"})},cancel:function(){r.__n()}})},__l:function(r){return o.inside(r,this.id)||o.inside(r,"popover_"+this.id)},__o:function(){var r=this;(clearTimeout(r.__bI),r.__bH||(r.__bH=!0,r.__bP()),r.__cC)||(r.__cC=!0,r.__bN().addClass("_zs_gallerykd"),n.__q(r))},__n:function(){this.__cC&&(this.__cC=!1,a("#popover_"+this.id).removeClass("_zs_gallerykd"),n.__g(this))}})});