define("mx-topbar/router",["magix","$"],(t,n,a)=>{var r=t("magix"),e=t("$");r.applyStyle("_zs_galleryaF","._zs_gallerykv{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:var(--color-brand);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all var(--duration)}");var o,i,d=r.guid("mx_topbar_"),l=r.Vframe,f=100,_={__o:function(){clearTimeout(o),e("#"+d).length||(e("body").append('<div class="_zs_gallerykv" id="'+d+'"></div>'),i=setInterval(_.__fg,300))},__fg:function(){var t=e("#"+d);t.length&&(f>15?f-=3+5*Math.random():f>4&&(f-=1+Math.random()),t.css({transform:"translate3d(-"+f+"%,0px,0px)"}))},__n:function(){setTimeout(function(){clearInterval(i);var t=e("#"+d);t.length&&(t.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){f=100,t.remove()},400))},0)}};a.exports=r.View.extend({init:function(t){r.Router.on("changed",function(t){t.path&&_.__o()});var n=function(t){t.off("created",_.__n),t.on("created",_.__n)};l.on("add",function(a){a.vframe.id==t.id&&n(a.vframe)});var a=l.get(t.id);a&&n(a)},render:function(){_.__o()}})});