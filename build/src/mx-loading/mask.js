define("mx-loading/mask",["$","magix","./base"],(i,n,a)=>{var e=i("$"),r=i("magix");r.applyStyle("_zs_galleryZ","._zs_galleryis{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryit{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:4px}._zs_galleryiu{z-index:999998;background:transparent}._zs_galleryiv,._zs_galleryiu{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryiv{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryiv ._zs_galleryiw{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var l=function(i,n,a,e,r,l,o,t){if(a||(a=i),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(i){return"&"+s[i]+";"};r=function(i){return""+(null==i?"":i)},e=function(i){return r(i).replace(d,g)}}if(!l){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(i){return p[i]},u=/[!')(*]/g;l=function(i){return encodeURIComponent(r(i)).replace(u,_)}}if(!t){var c=/[\\'"]/g;t=function(i){return r(i).replace(c,"\\$&")}}var f="";return f+='<div id="'+e(i.id)+'" class="_zs_galleryiv"><div mxs="_zs_galleryc_:_" class="loading _zs_galleryiw" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},o=i("./base");a.exports=r.mix({__ce:function(){var i=this.id+"_loading",n=e("#"+i);if(!n.length){var a=e.isFunction(l)?l({id:i},this.id):l;e(document.body).append(a),n=e("#"+i)}return n},showLoading:function(){this.__ce().show()}},o)});