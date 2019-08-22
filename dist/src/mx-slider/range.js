define("mx-slider/range",["magix","$","../mx-dragdrop/index"],(_,e,l)=>{var a=_("magix"),r=_("$"),s=_("../mx-dragdrop/index");a.applyStyle("_zs_galleryav",'[mx-view*="mx-slider/index"],[mx-view*="mx-slider/range"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*="mx-slider/index"] ._zs_galleryjx,[mx-view*="mx-slider/range"] ._zs_galleryjx{position:absolute;top:0;right:-74px;width:64px}[mx-view*="mx-slider/index"][mx-disabled],[mx-view*="mx-slider/index"][mx-view*="disabled=true"],[mx-view*="mx-slider/range"][mx-disabled],[mx-view*="mx-slider/range"][mx-view*="disabled=true"]{cursor:not-allowed}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjB,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjB,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjB,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjy ._zs_galleryjz ._zs_galleryjB{background-color:#ccc}._zs_galleryjy{line-height:28px}._zs_galleryjy ._zs_galleryjz{display:inline-block;position:relative;border-radius:2px;background:#f0f0f0}._zs_galleryjy ._zs_galleryjz ._zs_galleryjB{position:absolute;border-radius:2px;left:0;background-color:var(--color-brand-light)}._zs_galleryjy ._zs_galleryjz ._zs_galleryjB._zs_galleryjC{height:4px;top:0}._zs_galleryjy ._zs_galleryjz ._zs_galleryjB._zs_galleryjD{width:4px;bottom:0}._zs_galleryjy ._zs_galleryjz ._zs_galleryjA{width:8px;height:8px;outline:0}._zs_galleryjy ._zs_galleryjz ._zs_galleryjA,._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before{position:absolute;border-radius:50%;background-color:var(--color-brand)}._zs_galleryjy ._zs_galleryjz ._zs_galleryjA:before{content:" ";top:-4px;left:-4px;width:16px;height:16px;opacity:.3}._zs_galleryjy ._zs_galleryjz ._zs_galleryjA._zs_galleryjE{top:-2px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjA._zs_galleryjF{left:-2px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjG{position:absolute;font-size:var(--font-size);pointer-events:none;line-height:normal}._zs_galleryjy ._zs_galleryjz ._zs_galleryjG._zs_galleryjH{top:-23px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjG._zs_galleryjI{right:12px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjJ,._zs_galleryjy ._zs_galleryjz ._zs_galleryjK,._zs_galleryjy ._zs_galleryjz ._zs_galleryjL,._zs_galleryjy ._zs_galleryjz ._zs_galleryjM{position:absolute;font-size:var(--font-size);pointer-events:none;line-height:normal}._zs_galleryjy ._zs_galleryjz ._zs_galleryjJ{left:0;top:9px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjK{right:0;top:9px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjL{bottom:0;left:12px}._zs_galleryjy ._zs_galleryjz ._zs_galleryjM{top:0;left:12px}._zs_galleryjy ._zs_galleryjz._zs_galleryjN{height:4px;top:-2px}._zs_galleryjy ._zs_galleryjz._zs_galleryjO{width:4px;left:8px}._zs_galleryjy ._zs_galleryjP{margin-left:3px;color:#999}');l.exports=a.View.extend({tmpl:function(_,e,l,a,r,s,t,i){if(l||(l=_),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(_){return"&"+d[_]+";"};r=function(_){return""+(null==_?"":_)},a=function(_){return r(_).replace(g,n)}}if(!s){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(_){return y[_]},o=/[!')(*]/g;s=function(_){return encodeURIComponent(r(_)).replace(o,z)}}if(!i){var j=/[\\'"]/g;i=function(_){return r(_).replace(j,"\\$&")}}var x="",p=_.vertical,m=_.height,f=_.width,h=_.viewId,c=_.min,u=_.max;return x+='<div mxa="_zs_galleryd]:_" class="_zs_galleryjy"><span class="_zs_galleryjz',x+=p?" _zs_galleryjO":" _zs_galleryjN",x+='" mx-contextmenu="'+e+'__J()" style="',x+=p?"height:"+a(m):"width:"+a(f),x+='px"><span class="_zs_galleryjB',x+=p?" _zs_galleryjD":" _zs_galleryjC",x+='"></span><span tabindex="0" mx-keydown="'+e+'__dt({start:true})" class="_zs_galleryjA',x+=p?" _zs_galleryjF":" _zs_galleryjE",x+='" mx-mousedown="'+e+'__dn({start:true})" id="left_'+a(h)+'"></span><span class="_zs_galleryjG',x+=p?" _zs_galleryjI":" _zs_galleryjH",x+='" id="leftl_'+a(h)+'"></span><span tabindex="0" mx-keydown="'+e+'__dt()" class="_zs_galleryjA',x+=p?" _zs_galleryjF":" _zs_galleryjE",x+='" mx-mousedown="'+e+'__dn({end:true})" id="right_'+a(h)+'"></span><span class="_zs_galleryjG',x+=p?" _zs_galleryjI":" _zs_galleryjH",x+='" id="rightl_'+a(h)+'"></span><span class="',x+=p?"_zs_galleryjL":"_zs_galleryjJ",x+='">'+a(c)+'</span><span class="',x+=p?"_zs_galleryjM":"_zs_galleryjK",x+='">'+a(u)+"</span></span></div>"},mixins:[s],init:function(_){var e=this,l=r("#"+e.id);e.assign(_);var s=function(_){if(!e.__dj&&!e.__k){var r=l.offset(),s=e.__dk(),t=((e.__de?s.rMax-_.pageY+r.top:_.pageX-r.left)-s.half)/s.max,i=e.__dl(t),d=+e.__aa,g=+e.__dp;Math.abs(d-i)<Math.abs(g-i)?(e.__dq(i),e.__aa=i,e.__A(),a.node("left_"+e.id).focus()):(e.__dr(i),e.__dp=i,e.__A(),a.node("right_"+e.id).focus())}};l.on("click",s),e.on("destroy",function(){l.off("click",s)}),e.__a=l},assign:function(_){var e=this;e.__cG=+_.width||280,e.__d_=+_.height||280,e.__da=+_.min||0,e.__db=+_.max||100,e.__dc=+_.step||1,e.__k=_.disabled+""=="true"||r("#"+e.id)[0].hasAttribute("mx-disabled"),e.__de=_.vertical+""=="true";var l=e.__dc+"",a=l.indexOf(".");a=a>=0?l.slice(a+1).length:0,e.__dg=a;var s=_.value;return s?(s=(s+"").split(","),e.__aa=+s[0]||0,e.__dp=+s[1]||0):(e.__aa=e.__da,e.__dp=(e.__da+e.__db)/2),!0},render:function(){var _=this;_.updater.digest({min:_.__da.toFixed(_.__dg),max:_.__db.toFixed(_.__dg),viewId:_.id,height:_.__d_,width:_.__cG,vertical:_.__de}),_.val([_.__aa,_.__dp])},__dk:function(){var _=this,e=_.__a.find("._zs_galleryjz"),l=_.__a.find("._zs_galleryjB"),a=r("#left_"+_.id),s=r("#right_"+_.id),t=_.__de?e.height():e.width(),i=a.outerWidth()/2,d=t-2*i;return{rail:e,iLeftL:r("#leftl_"+_.id),iRightL:r("#rightl_"+_.id),tracker:l,iLeft:a,iRight:s,left:parseInt(a.css(_.__de?"bottom":"left"),10),right:parseInt(s.css(_.__de?"bottom":"left"),10),rMax:t,max:d,half:i}},__dq:function(_){var e=this;_=+_;var l=e.__db,a=e.__da;_>l?_=l:_<a&&(_=a);var r=(_-a)/(l-a),s=e.__dk(),t=r*s.max;e.__de?s.iLeft.css({bottom:t}):s.iLeft.css({left:t}),_=e.__dl(r);var i=s.iLeftL;i.html(_);var d,g=t+s.half;e.__de?(g-(d=i.height()/2)<0?g=0:g+d>s.rMax?g=s.rMax-2*d:g-=d,i.css({bottom:g}),s.tracker.css({bottom:t+s.half}).height(s.right-t)):(g<(d=i.width()/2)?g=0:g+d>s.rMax?g=s.rMax-2*d:g-=d,i.css({left:g}),s.tracker.css({left:t+s.half}).width(s.right-t));return _},__dr:function(_){var e=this;_=+_;var l=e.__db,a=e.__da;_>l?_=l:_<a&&(_=a);var r=(_-a)/(l-a),s=e.__dk(),t=r*s.max;e.__de?s.iRight.css({bottom:t}):s.iRight.css({left:t}),_=e.__dl(r);var i=s.iRightL;i.html(_);var d,g=t+s.half;e.__de?(g-(d=i.height()/2)<0?g=0:g+d>s.rMax?g=s.rMax-2*d:g-=d,i.css({bottom:g}),s.tracker.height(t-s.left)):(g<(d=i.width()/2)?g=0:g+d>s.rMax?g=s.rMax-2*d:g-=d,i.css({left:g}),s.tracker.width(t-s.left));return _},val:function(_){var e,l=this;if(_){var a=(_+"").split(","),r=+a[0]||0,s=+a[1]||0;r>s&&(r=(e=[s,r])[0],s=e[1]),l.__a.prop("value",[r,s]),r=l.__dq(r),s=l.__dr(s),l.__aa==r&&l.__dp==s||(l.__aa=r,l.__dp=s,l.__A())}return[+l.__aa,+l.__dp]},__dl:function(_){var e,l=this.__db,a=this.__da,r=this.__dc;return 0===_?e=a:1===_?e=l:(e=a+(l-a)*_,e=Math.round(e/r)*r),e=e.toFixed(this.__dg)},__A:function(){var _=[+this.__aa,+this.__dp];this.__a.prop("value",_).trigger({type:"change",value:_,start:+this.__aa,end:+this.__dp})},__ds:function(_,e){var l=this;_==l.__aa&&e==l.__dp||(l.__aa=_,l.__dp=e,l.__A())},"__dn<mousedown>":function(_){var e=this;if(!e.__k){var l=r(_.eventTarget),t=l.outerWidth(),i=-1;i=e.__de?l.parent().height()-t:l.parent().width()-t;var d=parseInt(l.css(e.__de?"bottom":"left"),10),g=e.__aa,n=e.__dp;e.__dm=1,e.dragdrop(_.eventTarget,function(l){s.clear();var r=-1;(r=e.__de?d+_.pageY-l.pageY:d+l.pageX-_.pageX)<0?r=0:r>i&&(r=i);var t=r/i,y=e.__dl(t),z=+y;if(_.params.end){var o=+e.__aa;z>=o?(e.__aa!=g&&(g=e.__dq(o)),n=e.__dr(y),a.node("right_"+e.id).focus()):(e.__aa!=n&&(n=e.__dr(o)),g=e.__dq(y),a.node("left_"+e.id).focus())}else{var j=+e.__dp;z<=j?(e.__dp!=n&&(n=e.__dr(j)),g=e.__dq(y),a.node("left_"+e.id).focus()):(e.__dp!=g&&(g=e.__dq(j)),n=e.__dr(y),a.node("right_"+e.id).focus())}},function(){e.__ds(g,n),e.__dj=!0,setTimeout(e.wrapAsync(function(){delete e.__dj}),20),delete e.__dm})}},"__dt<keydown>":function(_){var e,l=this,r=l.__dc;if(!l.__dm&&(37==_.keyCode||40==_.keyCode?(_.preventDefault(),r=-r,e=!0):39!=_.keyCode&&38!=_.keyCode||(_.preventDefault(),e=!0),e)){var s=l.__aa,t=+s,i=l.__dp,d=+i,g=_.params.start;g?t+=r:d+=r,t>d?(g?a.node("right_"+l.id).focus():a.node("left_"+l.id).focus(),d!=+s&&(s=l.__dq(d)),t!=+i&&(i=l.__dr(t))):g?s=l.__dq(t):i=l.__dr(d),l.__ds(s,i)}},"__J<contextmenu>":function(_){_.preventDefault()}})});