define("mx-topbar/router",["magix","$"],(e,n,t)=>{var a=e("magix"),r=e("$");a.applyStyle("_zs_galleryaG","._zs_gallerynd{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryne{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#4d7fff;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all .25s ease}");var o,i,d=a.guid("mx_topbar_"),f=a.Vframe,s=100,l={__n:function(){clearTimeout(o),r("#"+d).length||(r("body").append('<div class="_zs_galleryne" id="'+d+'"></div>'),i=setInterval(l.__fe,300))},__fe:function(){var e=r("#"+d);e.length&&(s>15?s-=3+5*Math.random():s>4&&(s-=1+Math.random()),e.css({transform:"translate3d(-"+s+"%,0px,0px)"}))},__m:function(){setTimeout(function(){clearInterval(i);var e=r("#"+d);e.length&&(e.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){s=100,e.remove()},400))},0)}};t.exports=a.View.extend({init:function(e){a.Router.on("changed",function(e){e.path&&l.__n()});var n=function(e){e.off("created",l.__m),e.on("created",l.__m)};f.on("add",function(t){t.vframe.id==e.id&&n(t.vframe)});var t=f.get(e.id);t&&n(t)},render:function(){l.__n()}})});