define("mx-slider/range",["magix","$","../mx-util/view","../mx-dragdrop/index"],(e,r,l)=>{"use strict";r.__esModule=!0;var _=e("magix"),i=e("$"),a=e("../mx-util/view"),t=e("../mx-dragdrop/index");_.default.applyStyle("_zs_galleryau",':root{--slider-size:6px;--slider-input-width:64px;--slider-line-height:18px;--slider-margin:calc(var(--input-small-height)/2 - var(--slider-size))}[mx-view*="mx-slider/index"],[mx-view*="mx-slider/range"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*="mx-slider/index"] ._zs_galleryjP,[mx-view*="mx-slider/range"] ._zs_galleryjP{position:absolute;top:50%;right:calc(-10px - var(--slider-input-width));width:var(--slider-input-width);margin-top:calc(1px - var(--input-small-height)/2)}[mx-view*="mx-slider/index"][mx-disabled],[mx-view*="mx-slider/index"][mx-view*="disabled=true"],[mx-view*="mx-slider/range"][mx-disabled],[mx-view*="mx-slider/range"][mx-view*="disabled=true"]{cursor:not-allowed}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjQ ._zs_galleryjR,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjR,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjQ ._zs_galleryjR,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjR{background-color:#ccc;opacity:.8}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjQ ._zs_galleryjS,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryjQ ._zs_galleryjS:before,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjS,[mx-view*="mx-slider/index"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjS:before,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjQ ._zs_galleryjS,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryjQ ._zs_galleryjS:before,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjS,[mx-view*="mx-slider/range"][mx-view*="disabled=true"] ._zs_galleryjQ ._zs_galleryjS:before{background-color:#ccc}._zs_galleryjQ{display:inline-block;height:var(--slider-size);position:relative;border-radius:calc(var(--slider-size)/2);background:#f0f0f0}._zs_galleryjQ ._zs_galleryjT{width:var(--slider-size);border-radius:50%;background-color:#ccc;margin-left:calc(var(--slider-size)/-2)}._zs_galleryjQ ._zs_galleryjT,._zs_galleryjQ ._zs_galleryjR{position:absolute;top:0;left:0;height:var(--slider-size)}._zs_galleryjQ ._zs_galleryjR{background-color:var(--color-brand);opacity:.3;border-radius:calc(var(--slider-size)/2)}._zs_galleryjQ ._zs_galleryjS{top:-1px;width:calc(var(--slider-size) + 2px);height:calc(var(--slider-size) + 2px);margin-left:calc((var(--slider-size) + -2px)/-2);outline:0}._zs_galleryjQ ._zs_galleryjS,._zs_galleryjQ ._zs_galleryjS:before{position:absolute;border-radius:50%;background-color:var(--color-brand)}._zs_galleryjQ ._zs_galleryjS:before{content:" ";top:-4px;left:-4px;width:calc(var(--slider-size) + 10px);height:calc(var(--slider-size) + 10px);opacity:.3}._zs_galleryjQ ._zs_galleryjU,._zs_galleryjQ ._zs_galleryjV,._zs_galleryjQ ._zs_galleryjW,._zs_galleryjQ ._zs_galleryjX{position:absolute;font-size:var(--font-size);pointer-events:none;line-height:var(--slider-line-height);white-space:nowrap}._zs_galleryjQ ._zs_galleryjV{top:calc(0px - var(--slider-line-height) - var(--slider-margin))}._zs_galleryjQ ._zs_galleryjU{top:calc(var(--slider-size) + var(--slider-margin));left:0;padding:0 2px}._zs_galleryjQ ._zs_galleryjW,._zs_galleryjQ ._zs_galleryjX{width:50%;top:calc(var(--slider-size) + var(--slider-margin));text-align:center}._zs_galleryjQ ._zs_galleryjX{left:-25%}._zs_galleryjQ ._zs_galleryjW{left:75%}._zs_galleryjY{margin-left:3px;color:#999}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ{width:var(--slider-size);left:calc(var(--slider-size)*2)}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjT,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjT{top:auto;margin-left:0;margin-top:calc(var(--slider-size)/-2)}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjR,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjR{top:auto;width:var(--slider-size);height:auto;bottom:0}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjS,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjS{top:auto;left:-1px;margin-left:0;margin-bottom:calc((var(--slider-size) + -2px)/-2)}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjV,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjV{top:auto;right:calc(var(--slider-size) + var(--slider-size))}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjU,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjU{top:auto;left:calc(var(--slider-size) + var(--slider-size));margin-top:calc(var(--slider-line-height)/-2)}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjX,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjX{top:auto;right:auto;bottom:0;left:calc(var(--slider-size) + var(--slider-size));width:auto;margin-bottom:calc(var(--slider-line-height)/-2)}[mx-view*="mx-slider/index"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjW,[mx-view*="mx-slider/range"][mx-view*="vertical=true"] ._zs_galleryjQ ._zs_galleryjW{top:0;right:auto;bottom:auto;left:calc(var(--slider-size) + var(--slider-size));width:auto;margin-top:calc(var(--slider-line-height)/-2)}');r.default=a.extend({tmpl:function(e,r,l,_,i,a,t,s){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},_=function(e){return i(e).replace(n,g)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(c,m)}}if(!s){var x=/[\\'"]/g;s=function(e){return i(e).replace(x,"\\$&")}}var v="",z=e.vertical,u=e.height,y=e.width,p=e.dots,h=e.viewId,f=e.min,j=e.max;v+='<span class="_zs_galleryjQ" mx-contextmenu="'+r+'__M()" style="',v+=z?" height: "+_(u)+"px; ":" width: "+_(y)+"px; ",v+='">';for(var w=0,b=p.length;w<b;w++){var Q=p[w];v+='<span class="_zs_galleryjT" style="',v+=z?" top: "+_(100-Q.percent)+"%;   ":" left: "+_(Q.percent)+"%; ",v+='"></span><span class="_zs_galleryjU" style="',v+=z?" top: "+_(100-Q.percent)+"%;   ":" left: "+_(Q.percent)+"%; ",v+='">'+_(Q.value)+"</span>"}return v+='<span mxs="_zs_galleryew:_" class="_zs_galleryjR"></span><span tabindex="0" mx-keydown="'+r+'__dr({start:true})" class="_zs_galleryjS" mx-mousedown="'+r+'__dw({start:true})" id="left_'+_(h)+'"></span><span class="_zs_galleryjV" id="leftl_'+_(h)+'"></span><span tabindex="0" mx-keydown="'+r+'__dr()" class="_zs_galleryjS" mx-mousedown="'+r+'__dw({end:true})" id="right_'+_(h)+'"></span><span class="_zs_galleryjV" id="rightl_'+_(h)+'"></span><span mxa="_zs_galleryew:_" class="_zs_galleryjX">'+_(f)+'</span><span mxa="_zs_galleryew:a" class="_zs_galleryjW">'+_(j)+"</span></span>"},mixins:[t],init:function(e){var r=this,l=i("#"+r.id);r.assign(e);var a=function(e){if(!r.__ds&&!r.__n){var i=l.offset(),a=r.__dt(),t=((r.__dm?a.rMax-e.pageY+i.top:e.pageX-i.left)-a.half)/a.max,s=r.__du(t),d=+r.__dy,n=+r.__dz;Math.abs(d-s)<Math.abs(n-s)?(r.__dA(s),r.__dy=s,r.__D(),_.default.node("left_"+r.id).focus()):(r.__dB(s),r.__dz=s,r.__D(),_.default.node("right_"+r.id).focus())}};l.on("click",a),r.on("destroy",function(){l.off("click",a)}),r.__a=l},assign:function(e){var r=this;r.__cN=+e.width||280,r.__dg=+e.height||280,r.__dh=+e.min||0,r.__di=+e.max||100,r.__dj=+e.step||1,r.__n=e.disabled+""=="true"||i("#"+r.id)[0].hasAttribute("mx-disabled"),r.__dl=e.showDot+""=="true",r.__dm=e.vertical+""=="true";var l=(e.step||1)+"",_=l.indexOf(".");_=_>=0?l.slice(_+1).length:0,r.__do=_;var a=e.value;return a?(a=(a+"").split(","),r.__dy=+a[0]||0,r.__dz=+a[1]||0):(r.__dy=r.__dh,r.__dz=(r.__dh+r.__di)/2),!0},render:function(){var e=this,r=e.__dh,l=e.__di,_=e.__do,a=e.__cN,t=[];if(e.__dl)for(var s=e.__dj,d=l-r,n=1;r+s*n<l;)t.push({value:(r+s*n).toFixed(_),percent:s*n/d*100}),n++;e.updater.digest({dots:t,min:r.toFixed(_),max:l.toFixed(_),height:e.__dg,width:a,vertical:e.__dm});var g=t.length;if(g>0){var o=i("#"+e.id+" ._zs_galleryjU");if(!e.__dm){var m=g>0?a/g:a,c=o.outerWidth(),x=0-c/2,v=Math.ceil(c/m);for(n=0;n<o.length;n++){var z=i(o[n]),u=(n+1)%v==0?"inline-block":"none";n+1==o.length&&t[n].percent/100*a+c>=a&&(u="none"),z.css({marginLeft:x,display:u})}}}e.val([e.__dy,e.__dz])},__dt:function(){var e=this,r=e.__a.find("._zs_galleryjQ"),l=e.__a.find("._zs_galleryjR"),_=i("#left_"+e.id),a=i("#right_"+e.id),t=e.__dm?r.height():r.width(),s=_.outerWidth()/2,d=t-2*s;return{rail:r,iLeftL:i("#leftl_"+e.id),iRightL:i("#rightl_"+e.id),tracker:l,iLeft:_,iRight:a,left:parseInt(_.css(e.__dm?"bottom":"left"),10),right:parseInt(a.css(e.__dm?"bottom":"left"),10),rMax:t,max:d,half:s}},__dA:function(e){var r=this;e=+e;var l=r.__di,_=r.__dh;e>l?e=l:e<_&&(e=_);var i=(e-_)/(l-_);i=((e=r.__du(i))-_)/(l-_);var a=r.__dt(),t=a.iLeftL;if(t.html(e),r.__dm){var s=t.height()/2;t.css({bottom:100*i+"%","margin-bottom":0-s+"px"}),a.iLeft.css("bottom",100*i+"%"),a.tracker.css("bottom",100*i+"%")}else{s=t.width()/2;t.css({left:100*i+"%","margin-left":0-s+"px"}),a.iLeft.css("left",100*i+"%"),a.tracker.css("left",100*i+"%")}return e},__dB:function(e){var r=this;e=+e;var l=r.__di,_=r.__dh;e>l?e=l:e<_&&(e=_);var i=(e-_)/(l-_);i=((e=r.__du(i))-_)/(l-_);var a=r.__dt(),t=a.iRightL;if(t.html(e),r.__dm){var s=t.height()/2;t.css({bottom:100*i+"%","margin-bottom":0-s+"px"}),a.iRight.css("bottom",100*i+"%"),a.tracker.css("top",100-100*i+"%")}else{s=t.width()/2;t.css({left:100*i+"%","margin-left":0-s+"px"}),a.iRight.css("left",100*i+"%"),a.tracker.css("right",100-100*i+"%")}return e},val:function(e){var r,l=this;if(e){var _=(e+"").split(","),i=+_[0]||0,a=+_[1]||0;i>a&&(i=(r=[a,i])[0],a=r[1]),l.__a.prop("value",[i,a]),i=l.__dA(i),a=l.__dB(a),l.__dy==i&&l.__dz==a||(l.__dy=i,l.__dz=a,l.__D())}return[+l.__dy,+l.__dz]},__du:function(e){var r=this.__di,l=this.__dh,_=this.__dj;return(0===e?l:1===e?r:Math.round((r-l)*e/_)*_+l).toFixed(this.__do)},__D:function(){var e=(+this.__dy).toFixed(this.__do),r=(+this.__dz).toFixed(this.__do),l=[e,r];this.__a.prop("value",l).trigger({type:"change",value:l,start:e,end:r})},__dC:function(e,r){var l=this;e==l.__dy&&r==l.__dz||(l.__dy=e,l.__dz=r,l.__D())},"__dw<mousedown>":function(e){var r=this;if(!r.__n){var l=i(e.eventTarget),a=l.outerWidth(),s=-1;s=r.__dm?l.parent().height()-a:l.parent().width()-a;var d=parseInt(l.css(r.__dm?"bottom":"left"),10),n=r.__dy,g=r.__dz;r.__dq=1,r.dragdrop(e.eventTarget,function(l){t.clear();var i=-1;(i=r.__dm?d+e.pageY-l.pageY:d+l.pageX-e.pageX)<0?i=0:i>s&&(i=s);var a=i/s,o=r.__du(a),m=+o;if(e.params.end){var c=+r.__dy;m>=c?(r.__dy!=n&&(n=r.__dA(c)),g=r.__dB(o),_.default.node("right_"+r.id).focus()):(r.__dy!=g&&(g=r.__dB(c)),n=r.__dA(o),_.default.node("left_"+r.id).focus())}else{var x=+r.__dz;m<=x?(r.__dz!=g&&(g=r.__dB(x)),n=r.__dA(o),_.default.node("left_"+r.id).focus()):(r.__dz!=n&&(n=r.__dA(x)),g=r.__dB(o),_.default.node("right_"+r.id).focus())}},function(){r.__dC(n,g),r.__ds=!0,setTimeout(r.wrapAsync(function(){delete r.__ds}),20),delete r.__dq})}},"__dr<keydown>":function(e){var r,l=this,i=l.__dj;if(!l.__dq&&(37==e.keyCode||40==e.keyCode?(e.preventDefault(),i=-i,r=!0):39!=e.keyCode&&38!=e.keyCode||(e.preventDefault(),r=!0),r)){var a=l.__dy,t=+a,s=l.__dz,d=+s,n=e.params.start;n?t+=i:d+=i,t>d?(n?_.default.node("right_"+l.id).focus():_.default.node("left_"+l.id).focus(),d!=+a&&(a=l.__dA(d)),t!=+s&&(s=l.__dB(t))):n?a=l.__dA(t):s=l.__dB(d),l.__dC(a,s)}},"__M<contextmenu>":function(e){e.preventDefault()}})});