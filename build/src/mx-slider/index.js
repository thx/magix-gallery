define("mx-slider/index",["magix","$","../mx-dragdrop/index"],(_,l,e)=>{var a=_("magix"),r=_("$"),s=_("../mx-dragdrop/index");a.applyStyle("_zs_galleryk",'._zs_galleryle{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-slider/index"],[mx-view*="mx-slider/range"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*="mx-slider/index"] ._zs_gallerylf,[mx-view*="mx-slider/range"] ._zs_gallerylf{position:absolute;top:0;right:-74px;width:64px}[mx-view*="mx-slider/index"][mx-disabled],[mx-view*="mx-slider/range"][mx-disabled]{cursor:not-allowed}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaF,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaF:before,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaE,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaF,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaF:before,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaC ._zs_galleryaD ._zs_galleryaE{background-color:#ccc}._zs_galleryaC{line-height:28px}._zs_galleryaC ._zs_galleryaD{display:inline-block;position:relative;border-radius:2px;background:#f0f0f0}._zs_galleryaC ._zs_galleryaD ._zs_galleryaE{position:absolute;border-radius:2px;left:0;background-color:#cddbff}._zs_galleryaC ._zs_galleryaD ._zs_galleryaE._zs_gallerylg{height:4px;top:0}._zs_galleryaC ._zs_galleryaD ._zs_galleryaE._zs_gallerylh{width:4px;bottom:0}._zs_galleryaC ._zs_galleryaD ._zs_galleryaF{position:absolute;width:8px;height:8px;border-radius:50%;background-color:#4d7fff;outline:0}._zs_galleryaC ._zs_galleryaD ._zs_galleryaF:before{content:" ";position:absolute;top:-4px;left:-4px;width:16px;height:16px;border-radius:50%;background-color:#4d7fff;opacity:.3}._zs_galleryaC ._zs_galleryaD ._zs_galleryaF._zs_galleryli{top:-2px}._zs_galleryaC ._zs_galleryaD ._zs_galleryaF._zs_gallerylj{left:-2px}._zs_galleryaC ._zs_galleryaD ._zs_gallerylk{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaC ._zs_galleryaD ._zs_gallerylk._zs_galleryll{top:-23px}._zs_galleryaC ._zs_galleryaD ._zs_gallerylk._zs_gallerylm{right:12px}._zs_galleryaC ._zs_galleryaD ._zs_galleryln,._zs_galleryaC ._zs_galleryaD ._zs_gallerylo,._zs_galleryaC ._zs_galleryaD ._zs_gallerylp,._zs_galleryaC ._zs_galleryaD ._zs_gallerylq{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaC ._zs_galleryaD ._zs_galleryln{left:0;top:9px}._zs_galleryaC ._zs_galleryaD ._zs_gallerylo{right:0;top:9px}._zs_galleryaC ._zs_galleryaD ._zs_gallerylp{bottom:0;left:12px}._zs_galleryaC ._zs_galleryaD ._zs_gallerylq{top:0;left:12px}._zs_galleryaC ._zs_galleryaD._zs_gallerylr{height:4px;top:-2px}._zs_galleryaC ._zs_galleryaD._zs_galleryls{width:4px;left:8px}._zs_galleryaC ._zs_gallerylt{margin-left:3px;color:#999}');e.exports=a.View.extend({tmpl:function(_,l,e,a,r,s,i,t){if(e||(e=_),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(_){return"&"+n[_]+";"};r=function(_){return""+(null==_?"":_)},a=function(_){return r(_).replace(d,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(_){return o[_]},p=/[!')(*]/g;s=function(_){return encodeURIComponent(r(_)).replace(p,y)}}if(!t){var z=/[\\'"]/g;t=function(_){return r(_).replace(z,"\\$&")}}var x="",u=_.vertical,f=_.height,c=_.width,m=_.min,h=_.max,v=_.needInput,b=_.viewId,w=_.disabled;return x+='<div mxa="_zs_gallerydB:_" class="_zs_galleryaC"><span class="_zs_galleryaD ',x+=u?" _zs_galleryls ":" _zs_gallerylr ",x+='" mx-contextmenu="'+l+'__H()" style="',x+=u?"height:"+a(f):"width:"+a(c),x+='px"><span class="_zs_galleryaE ',x+=u?" _zs_gallerylh ":" _zs_gallerylg ",x+='"></span><span class="_zs_galleryaF ',x+=u?" _zs_gallerylj ":" _zs_galleryli ",x+='" mx-mousedown="'+l+'__dy()"></span><span class="_zs_gallerylk ',x+=u?" _zs_gallerylm ":" _zs_galleryll ",x+='"></span><span class="',x+=u?" _zs_gallerylp ":" _zs_galleryln ",x+='">'+a(m)+'</span><span class="',x+=u?" _zs_gallerylq ":" _zs_gallerylo",x+='">'+a(h)+"</span></span></div>",v&&(x+='<input class="input input-small _zs_gallerylf" id="'+a(b)+'_input" ',w&&(x+=' disabled="true" '),x+=' mx-keyup="'+l+'__ar()" mx-focusout="'+l+'__ci()"/>'),x},mixins:[s],init:function(_){this.assign(_),this.__j=r("#"+this.id)},assign:function(_){var l=this;l.__cE=+_.width||280,l.__dj=+_.height||280,l.__dk=+_.min||0,l.__dl=+_.max||100,l.__dm=+_.step||1,l.__dn=_.tip||"";var e=r("#"+l.id+"[mx-disabled]");l.__do=e&&e.length>0,l.__dp=_.vertical+""=="true",l.__dq=_.needInput+""=="true"&&!l.__dp;var a,s=l.__dm+"",i=s.indexOf(".");return i=i>=0?s.slice(i+1).length:0,l.__dr=i,a=_.value?+_.value:(l.__dl+l.__dk)/2,l.__ds=a,!0},render:function(){var _=this;_.updater.digest({viewId:_.id,min:_.__dk.toFixed(_.__dr),max:_.__dl.toFixed(_.__dr),width:_.__cE,height:_.__dj,vertical:_.__dp,needInput:_.__dq,disabled:_.__do}),_.val(_.__ds);var l=_.__j.find("._zs_galleryaC");_.__dt=l;var e=function(e){if(!_.__du&&!_.__do){var a=l.offset(),r=_.__dv(),s=((_.__dp?r.rMax-e.pageY+a.top:e.pageX-a.left)-r.half)/r.max,i=_.__dw(s);_.val(i)}},a=function(l){if(!_.__dx)if(37==l.keyCode||40==l.keyCode){l.preventDefault();var e=+_.__ds;e-=_.__dm,_.val(e)}else if(39==l.keyCode||38==l.keyCode){l.preventDefault();e=+_.__ds;e+=_.__dm,_.val(e)}};l.on("click",e),l.on("keydown",a),_.on("destroy",function(){l.off("click",e),l.off("keydown",a)})},__dv:function(){var _=this,l=_.__j.find("._zs_galleryaD"),e=_.__j.find("._zs_galleryaE"),a=_.__j.find("._zs_galleryaF"),r=_.__j.find("._zs_gallerylk"),s=_.__j.find("._zs_gallerylf"),i=a.outerWidth()/2,t=_.__dp?l.height():l.width();return{rail:l,pLabel:r,inputArea:s,tracker:e,indicator:a,rMax:t,max:t-2*i,half:i}},val:function(_,l){var e=this,a=+_;if(a||0===a){e.__j.prop("value",a);var r=e.__dl,s=e.__dk;a>r?a=r:a<s&&(a=s);var i=(a-s)/(r-s),t=e.__dv(),n=i*t.max;e.__dp?t.indicator.css({bottom:n}):t.indicator.css({left:n}),_=e.__dw(i);var d=t.pLabel;d.html(_+(e.__dn?'<span class="_zs_gallerylt">'+e.__dn+"</span>":"")),t.inputArea&&t.inputArea.length&&t.inputArea.val(_);var g,o=n+t.half;if(e.__dp)o-(g=d.height()/2)<0?o=0:o+g>t.rMax?o=t.rMax-2*g:o-=g,d.css({bottom:o});else o<(g=d.width()/2)?o=0:o+g>t.rMax?o=t.rMax-2*g:o-=g,d.css({left:o});e.__dp?t.tracker.height(n+t.half):t.tracker.width(n+t.half),l||(e.__ds!=_&&e.__y(_),e.__ds=_)}return+e.__ds},__dw:function(_){var l,e=this.__dl,a=this.__dk,r=this.__dm;return 0===_?l=a:1===_?l=e:(l=a+(e-a)*_,l=Math.round(l/r)*r),l=l.toFixed(this.__dr)},__y:function(_){this.__j.prop("value",+_).trigger({type:"change",value:+_})},"__dy<mousedown>":function(_){var l=this;if(!l.__do){var e=r(_.eventTarget),a=e.outerWidth(),i=-1;i=l.__dp?e.parent().height()-a:e.parent().width()-a;var t=parseInt(e.css(l.__dp?"bottom":"left"),10),n=l.__ds;l.__dx=1,l.dragdrop(_.eventTarget,function(e){s.clear();var a=-1;(a=l.__dp?t+_.pageY-e.pageY:t+e.pageX-_.pageX)<0?a=0:a>i&&(a=i);var r=a/i;l.val(n=l.__dw(r),!0)},function(){l.__ds!=n&&(l.__ds=n,l.__y(n)),l.__du=!0,setTimeout(l.wrapAsync(function(){delete l.__du}),20),delete l.__dx})}},"__ar<keyup>":function(_){var l=this;_.stopPropagation(),clearTimeout(l.__dz);var e=r.trim(_.eventTarget.value);l.__dz=setTimeout(l.wrapAsync(function(){r.isNumeric(e)&&l.val(e)}),400)},"__ci<focusout>":function(_){_.stopPropagation();var l=r.trim(_.eventTarget.value);r.isNumeric(l)&&this.val(l)},"__H<contextmenu>":function(_){_.preventDefault()}})});