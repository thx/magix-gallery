define("mx-topbar/index",["magix","$"],(a,t,r)=>{var n=a("magix"),e=a("$");n.applyStyle("_zs_galleryaH","._zs_gallerykG{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:var(--color-brand);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all var(--duration)}");var o,i,l=n.guid("mx_topbar_"),d=n.Vframe,f=100,s={__o:function(){clearTimeout(o),e("#"+l).length||(e("body").append('<div class="_zs_gallerykG" id="'+l+'"></div>'),i=setInterval(s.__fh,300))},__fi:function(){var a=e("#"+l);a.length&&(f>15?f-=3+5*Math.random():f>4&&(f-=1+Math.random()),a.css({transform:"translate3d(-"+f+"%,0px,0px)"}))},__n:function(){clearInterval(i);var a=e("#"+l);a.length&&(a.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){f=100,a.remove()},400))}},_=n.config("rootId"),c=d.get(_),m=function(a){a.on("alter",s.__o),a.on("created",s.__n)};if(c)m(c);else{s.__o();var g=function(a){a.vframe.id==_&&(d.off("add",g),m(a.vframe))};d.on("add",g)}});