define("mx-loading/mask",["$","magix","./base"],(i,n,a)=>{var e=i("$"),r=i("magix");r.applyStyle("_zs_galleryab","._zs_galleryiG{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiH{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:4px}._zs_galleryiI{z-index:999998;background:transparent}._zs_galleryiJ,._zs_galleryiI{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryiJ{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryiJ ._zs_galleryiK{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var l=function(i,n,a,e,r,l,o,t){if(a||(a=i),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(i){return"&"+s[i]+";"};r=function(i){return""+(null==i?"":i)},e=function(i){return r(i).replace(d,g)}}if(!l){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(i){return p[i]},c=/[!')(*]/g;l=function(i){return encodeURIComponent(r(i)).replace(c,_)}}if(!t){var u=/[\\'"]/g;t=function(i){return r(i).replace(u,"\\$&")}}var f="";return f+='<div id="'+e(i.id)+'" class="_zs_galleryiJ"><div mxs="_zs_gallerycm:_" class="loading _zs_galleryiK" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},o=i("./base");a.exports=r.mix({__ce:function(){var i=this.id+"_loading",n=e("#"+i);if(!n.length){var a=e.isFunction(l)?l({id:i},this.id):l;e(document.body).append(a),n=e("#"+i)}return n},showLoading:function(){this.__ce().show()}},o)});