define("mx-effects/icon",["../mx-util/view","mx-popover/index"],(e,t,r)=>{e("mx-popover/index"),t.__esModule=!0;var a=e("../mx-util/view");t.default=a.extend({tmpl:function(e,t,r,a,n,o,s,c){if(r||(r=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,p=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(l,p)}}if(!o){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return d[e]},f=/[!')(*]/g;o=function(e){return encodeURIComponent(n(e)).replace(f,u)}}if(!c){var h=/[\\'"]/g;c=function(e){return n(e).replace(h,"\\$&")}}var m="",x=e.tip,g=e.styles,v=e.tipWidth,b=e.content;return m+=x?'<span class="mx-tag" style="'+a(g)+'" mx-view="mx-popover/index?width='+o(v)+"&content="+o(x)+'"><span mxa="_zs_galleryb\\:_" class="mx-tag-name">'+n(b)+"</span></span>":'<span class="mx-tag" style="'+a(g)+'"><span mxa="_zs_galleryb\\:a" class="mx-tag-name">'+n(b)+"</span></span>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t,r=this.updater.altered(),a=e.color,n=e.mode||"solid",o=e.type||"common";if(!a)switch(o){case"common":switch(n){case"solid":a="#cccccc",t="#ffffff";break;case"hollow":a="#cccccc",t="#999999"}break;case"highlight":a="var(--color-brand)";break;case"error":a="var(--color-red)";break;case"warn":a="var(--color-warn)";break;case"pass":a="var(--color-green)"}var s=[];switch(n){case"solid":s.push("background-color: "+a,"border: 1px solid "+a,"color: "+(t||e.colorText||"#ffffff"));break;case"hollow":s.push("background-color: transparent","border: 1px solid "+a,"color: "+(t||e.colorText||a))}return this.updater.set({content:e.content||"打标",styles:s.join(";"),tipWidth:e.tipWidth||200,tip:e.tip||""}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()}})});