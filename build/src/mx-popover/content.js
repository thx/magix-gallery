define("mx-popover/content",["magix"],(r,i,l)=>{var a=r("magix");a.applyStyle("_zs_galleryam","._zs_galleryiq,._zs_galleryir,._zs_galleryis,._zs_galleryit,._zs_galleryiu,._zs_galleryiv,._zs_galleryiw,._zs_galleryix,._zs_galleryiy,._zs_galleryiz,._zs_galleryiA,._zs_galleryiB{opacity:0;transition:transform .15s,opacity .15s;transform:scale(0)}._zs_galleryir,._zs_galleryiy{transform-origin:0 0}._zs_galleryis,._zs_galleryiv{transform-origin:100% 0}._zs_galleryiq{transform-origin:50% 0}._zs_galleryiw,._zs_galleryiA{transform-origin:0 100%}._zs_galleryit,._zs_galleryiB{transform-origin:100% 100%}._zs_galleryiz{transform-origin:50% 100%}._zs_galleryiu{transform-origin:100% 50%}._zs_galleryix{transform-origin:0 50%}._zs_galleryiC{opacity:1;transform:scale(1)}._zs_galleryiD{display:none}._zs_galleryiE,._zs_galleryiF{position:absolute;z-index:9999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryiE{background-color:#fff;color:#333}._zs_galleryiE ._zs_galleryiG{padding:10px;word-break:break-all}._zs_galleryiF{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryiF ._zs_galleryiG{padding:4px 10px}"),l.exports=a.View.extend({tmpl:function(r,i,l,a,e,n,_,s){if(l||(l=r),!e){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(r){return"&"+t[r]+";"};e=function(r){return""+(null==r?"":r)},function(r){return e(r).replace(o,g)}}if(!n){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(r){return y[r]},f=/[!')(*]/g;n=function(r){return encodeURIComponent(e(r)).replace(f,z)}}if(!s){var c=/[\\'"]/g;s=function(r){return e(r).replace(c,"\\$&")}}var u="",p=r.content;return u+='<div mxa="_zs_gallerydw:_" class="_zs_galleryiG">'+e(p)+"</div>"},init:function(r){var i=r.data||{};this.updater.set({content:i.content||""})},render:function(){this.updater.digest({})}})});