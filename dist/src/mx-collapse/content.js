define("mx-collapse/content",["magix"],(r,l,e)=>{var a=r("magix");a.applyStyle("_zs_galleryz","._zs_gallerydj{border-radius:var(--border-radius);border:1px solid var(--color-border);overflow:hidden}._zs_gallerydj ._zs_gallerydk{border-bottom:1px solid var(--color-border)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl{cursor:pointer;position:relative;padding:10px 24px;background-color:var(--color-bg)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl ._zs_gallerydm>*{position:absolute;top:50%;left:20px;width:20px;height:20px;text-align:center;line-height:20px;margin-top:-10px;transition:all var(--duration);color:#999}._zs_gallerydj ._zs_gallerydk ._zs_gallerydl ._zs_gallerydn{margin-left:20px}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo{display:none;border-top:1px solid var(--color-border);overflow:hidden;transition:height var(--duration),opacity var(--duration)}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo ._zs_gallerydp{padding:10px 24px}._zs_gallerydj ._zs_gallerydk ._zs_gallerydo ._zs_gallerydn{line-height:22px}._zs_gallerydj ._zs_gallerydk:last-child{border-bottom:0}._zs_gallerydj ._zs_gallerydk._zs_gallerydq ._zs_gallerydl{opacity:.5;cursor:not-allowed}._zs_gallerydj ._zs_gallerydk._zs_gallerydr ._zs_gallerydl ._zs_gallerydm>*{transform:rotate(90deg)}"),e.exports=a.View.extend({tmpl:function(r,l,e,a,_,d,o,t){if(e||(e=r),!_){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,i=function(r){return"&"+n[r]+";"};_=function(r){return""+(null==r?"":r)},function(r){return _(r).replace(s,i)}}if(!d){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(r){return g[r]},z=/[!')(*]/g;d=function(r){return encodeURIComponent(_(r)).replace(z,y)}}if(!t){var p=/[\\'"]/g;t=function(r){return _(r).replace(p,"\\$&")}}var c="",u=r.content;return c+='<div mxa="_zs_galleryav:_" class="_zs_gallerydn">'+_(u)+"</div>"},init:function(r){var l=r.data||{};this.updater.set({content:l.content||""})},render:function(){this.updater.digest({})}})});