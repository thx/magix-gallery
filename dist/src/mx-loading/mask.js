define("mx-loading/mask",["$","magix","./base"],(n,i,a)=>{var r=n("$"),e=n("magix");e.applyStyle("_zs_galleryac","._zs_galleryhJ{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:var(--border-radius)}._zs_galleryhK{z-index:999998;background:transparent}._zs_galleryhL,._zs_galleryhK{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryhL{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryhL ._zs_galleryhM{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var l=function(n,i,a,r,e,l,t,o){if(a||(a=n),!e){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(n){return"&"+s[n]+";"};e=function(n){return""+(null==n?"":n)},r=function(n){return e(n).replace(d,g)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(n){return _[n]},p=/[!')(*]/g;l=function(n){return encodeURIComponent(e(n)).replace(p,c)}}if(!o){var u=/[\\'"]/g;o=function(n){return e(n).replace(u,"\\$&")}}var h="";return h+='<div id="'+r(n.id)+'" class="_zs_galleryhL"><div mxs="_zs_galleryc~:_" class="loading _zs_galleryhM" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},t=n("./base");a.exports=e.mix({__cy:function(){var n=this.id+"_loading",i=r("#"+n);if(!i.length){var a=r.isFunction(l)?l({id:n},this.id):l;r(document.body).append(a),i=r("#"+n)}return i},showLoading:function(){this.__cy().show()}},t)});