define("examples/subs",["magix","$"],(e,t,a)=>{var i=e("magix"),r=e("$"),l=i.Router;i.applyStyle("_zs_galleryl","._zs_galleryaY{position:absolute;top:0;right:0;width:120px;padding:10px 0 10px 10px;border-left:1px solid var(--color-border)}._zs_galleryaY ._zs_galleryaZ{margin-bottom:6px}._zs_galleryaY ._zs_galleryaZ:last-child{margin-bottom:0}._zs_galleryaY._zs_galleryb_{position:fixed}"),a.exports=i.View.extend({tmpl:function(e,t,a,i,r,l,s,n){if(a||(a=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(d,g)}}if(!l){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return f[e]},u=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(u,p)}}if(!n){var _=/[\\'"]/g;n=function(e){return r(e).replace(_,"\\$&")}}var c="",h=e.fixed,v=e.list;c+='<div class="_zs_galleryaY ',h&&(c+=" _zs_galleryb_ "),c+='">';for(var y=0,x=v.length;y<x;y++){var m=v[y];if(c+='<div mxa="_zs_galleryQ:_" class="_zs_galleryaZ"><a href="javascript:;" mx-click="'+t+"to({key:'"+i(n(m.key))+"'})\">"+i(m.name)+"</a></div>",m.subs&&m.subs.length){c+=" ";for(var z=0,b=m.subs,k=b.length;z<k;z++){var w=b[z];c+='<div mxa="_zs_galleryQ:a" class="_zs_galleryaZ pl10"><a href="javascript:;" mx-click="'+t+"to({key:'"+i(n(w.key))+"'})\">"+i(w.name)+"</a></div>"}c+=" "}c+=" "}return c+="</div>"},init:function(e){var t=e.list||[];this.updater.set({list:t})},render:function(){var e=this;e.updater.digest();var t=l.parse().params;!e.$init&&t.highlightId&&(setTimeout(function(){e.to(t.highlightId)},500),e.$init=1)},"to<click>":function(e){var t=e.params.key;l.to({highlightId:t}),this.to(t)},to:function(e){var t=r("#"+e),a="_zs_galleryg",i="_zs_galleryh";r("."+a).removeClass(i),t.hasClass(a)?t.addClass(i):t.find("."+a).addClass(i),r(window).scrollTop(t.offset().top)},"$win<scroll>":function(e){var t=r("#"+this.id);if(r(window).scrollTop()>=t.offset().top){if(this.updater.get("fixed"))return;this.updater.digest({fixed:!0})}else{if(!this.updater.get("fixed"))return;this.updater.digest({fixed:!1})}}})});