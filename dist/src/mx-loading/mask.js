define("mx-loading/mask",["$","magix","./base"],(n,a,i)=>{var r=n("$"),e=n("magix");e.applyStyle("_zs_galleryac","._zs_galleryhI{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:var(--border-radius)}._zs_galleryhJ{z-index:999998;background:transparent}._zs_galleryhK,._zs_galleryhJ{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryhK{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryhK ._zs_galleryhL{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var l=function(n,a,i,r,e,l,t,o){if(i||(i=n),!e){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(n){return"&"+s[n]+";"};e=function(n){return""+(null==n?"":n)},r=function(n){return e(n).replace(d,g)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(n){return _[n]},c=/[!')(*]/g;l=function(n){return encodeURIComponent(e(n)).replace(c,p)}}if(!o){var u=/[\\'"]/g;o=function(n){return e(n).replace(u,"\\$&")}}var h="";return h+='<div id="'+r(n.id)+'" class="_zs_galleryhK"><div mxs="_zs_galleryda:_" class="loading _zs_galleryhL" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},t=n("./base");i.exports=e.mix({__cy:function(){var n=this.id+"_loading",a=r("#"+n);if(!a.length){var i=r.isFunction(l)?l({id:n},this.id):l;r(document.body).append(i),a=r("#"+n)}return a},showLoading:function(){this.__cy().show()}},t)});