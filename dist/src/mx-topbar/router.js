define("mx-topbar/router",["magix","$"],(n,t,a)=>{var r=n("magix"),e=n("$");r.applyStyle("_zs_galleryaE","._zs_gallerykR{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:var(--color-brand);transform:translate3d(-100%,0,0);transition:all var(--duration)}");var o,i,d=r.guid("mx_topbar_"),l=r.Vframe,_=100,f={__o:function(){clearTimeout(o),e("#"+d).length||(e("body").append('<div class="_zs_gallerykR" id="'+d+'"></div>'),i=setInterval(f.__fl,300))},__fl:function(){var n=e("#"+d);n.length&&(_>15?_-=3+5*Math.random():_>4&&(_-=1+Math.random()),n.css({transform:"translate3d(-"+_+"%,0px,0px)"}))},__n:function(){setTimeout(function(){clearInterval(i);var n=e("#"+d);n.length&&(n.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){_=100,n.remove()},400))},0)}};a.exports=r.View.extend({init:function(n){r.Router.on("changed",function(n){n.path&&f.__o()});var t=function(n){n.off("created",f.__n),n.on("created",f.__n)};l.on("add",function(a){a.vframe.id==n.id&&t(a.vframe)});var a=l.get(n.id);a&&t(a)},render:function(){f.__o()}})});