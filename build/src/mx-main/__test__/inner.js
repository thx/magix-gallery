define("mx-main/__test__/inner",["magix","$"],(e,r,l)=>{var a=e("magix"),n=e("$");a.applyStyle("_zs_galleryad","._zs_galleryhl{position:relative;height:46px;padding:0 20px;line-height:44px;background-color:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_galleryhl ._zs_galleryhm{float:left;height:44px;line-height:44px}._zs_galleryhl ._zs_galleryhm>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryhl ._zs_galleryhn{float:left;font-size:16px}._zs_galleryho{padding:20px 20px 0}"),l.exports=a.View.extend({tmpl:function(e,r,l,a,n,i,t,o){if(l||(l=e),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(e){return"&"+s[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(_,g)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(d,c)}}if(!o){var h=/[\\'"]/g;o=function(e){return n(e).replace(h,"\\$&")}}var f="",u=e.info;return f+='<div mxa="_zs_galleryc!:_" class="_zs_galleryhl clearfix">',u.icon&&(f+='<span mxa="_zs_galleryc!:a" class="_zs_galleryhm">'+n(u.icon)+"</span>"),f+='<span mxa="_zs_galleryc!:b" class="_zs_galleryhn">'+a(u.label)+'</span></div><div mxs="_zs_galleryc!:_" class="_zs_galleryho" style="min-height: 200px;">自定义内容</div>'},init:function(e){this.updater.set({info:e.info||{},data:n.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),r={};return r["test_"+e.index]=e.label,new Promise(function(l){l({ok:!0,msg:e.label,remain:r})})}})});