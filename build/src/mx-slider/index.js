define("mx-slider/index",["magix","$","../mx-dragdrop/index"],(_,l,a)=>{var e=_("magix"),r=_("$"),s=_("../mx-dragdrop/index");e.applyStyle("_zs_galleryl",'._zs_galleryle{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-slider/index"],[mx-view*="mx-slider/range"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*="mx-slider/index"] ._zs_gallerylf,[mx-view*="mx-slider/range"] ._zs_gallerylf{position:absolute;top:0;right:-74px;width:64px}[mx-view*="mx-slider/index"][mx-disabled],[mx-view*="mx-slider/range"][mx-disabled]{cursor:not-allowed}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{background-color:#ccc}._zs_galleryaK{line-height:28px}._zs_galleryaK ._zs_galleryaL{display:inline-block;position:relative;border-radius:2px;background:#f0f0f0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{position:absolute;border-radius:2px;left:0;background-color:#cddbff}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylg{height:4px;top:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylh{width:4px;bottom:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN{position:absolute;width:8px;height:8px;border-radius:50%;background-color:#4d7fff;outline:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before{content:" ";position:absolute;top:-4px;left:-4px;width:16px;height:16px;border-radius:50%;background-color:#4d7fff;opacity:.3}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_galleryli{top:-2px}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_gallerylj{left:-2px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylk{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_gallerylk._zs_galleryll{top:-23px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylk._zs_gallerylm{right:12px}._zs_galleryaK ._zs_galleryaL ._zs_galleryln,._zs_galleryaK ._zs_galleryaL ._zs_gallerylo,._zs_galleryaK ._zs_galleryaL ._zs_gallerylp,._zs_galleryaK ._zs_galleryaL ._zs_gallerylq{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_galleryln{left:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylo{right:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylp{bottom:0;left:12px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylq{top:0;left:12px}._zs_galleryaK ._zs_galleryaL._zs_gallerylr{height:4px;top:-2px}._zs_galleryaK ._zs_galleryaL._zs_galleryls{width:4px;left:8px}._zs_galleryaK ._zs_gallerylt{margin-left:3px;color:#999}');a.exports=e.View.extend({tmpl:function(_,l,a,e,r,s,i,t){if(a||(a=_),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(_){return"&"+n[_]+";"};r=function(_){return""+(null==_?"":_)},e=function(_){return r(_).replace(d,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(_){return o[_]},p=/[!')(*]/g;s=function(_){return encodeURIComponent(r(_)).replace(p,y)}}if(!t){var z=/[\\'"]/g;t=function(_){return r(_).replace(z,"\\$&")}}var c="",x=_.vertical,u=_.height,f=_.width,h=_.min,m=_.max,v=_.needInput,b=_.viewId,w=_.disabled;return c+='<div mxa="_zs_galleryc-:_" class="_zs_galleryaK"><span class="_zs_galleryaL ',c+=x?" _zs_galleryls ":" _zs_gallerylr ",c+='" mx-contextmenu="'+l+'__H()" style="',c+=x?"height:"+e(u):"width:"+e(f),c+='px"><span class="_zs_galleryaM ',c+=x?" _zs_gallerylh ":" _zs_gallerylg ",c+='"></span><span class="_zs_galleryaN ',c+=x?" _zs_gallerylj ":" _zs_galleryli ",c+='" mx-mousedown="'+l+'__dj()"></span><span class="_zs_gallerylk ',c+=x?" _zs_gallerylm ":" _zs_galleryll ",c+='"></span><span class="',c+=x?" _zs_gallerylp ":" _zs_galleryln ",c+='">'+e(h)+'</span><span class="',c+=x?" _zs_gallerylq ":" _zs_gallerylo",c+='">'+e(m)+"</span></span></div>",v&&(c+='<input class="input input-small _zs_gallerylf" id="'+e(b)+'_input" ',w&&(c+=' disabled="true" '),c+=' mx-keyup="'+l+'__al()" mx-focusout="'+l+'__bV()"/>'),c},mixins:[s],init:function(_){this.assign(_),this.__j=r("#"+this.id)},assign:function(_){var l=this;l.__cp=+_.width||280,l.__cV=+_.height||280,l.__cW=+_.min||0,l.__cX=+_.max||100,l.__cY=+_.step||1,l.__cZ=_.tip||"";var a=r("#"+l.id+"[mx-disabled]");l.__d_=a&&a.length>0,l.__da=_.vertical+""=="true",l.__db=_.needInput+""=="true"&&!l.__da;var e,s=l.__cY+"",i=s.indexOf(".");return i=i>=0?s.slice(i+1).length:0,l.__dc=i,e=_.value?+_.value:(l.__cX+l.__cW)/2,l.__dd=e,!0},render:function(){var _=this;_.updater.digest({viewId:_.id,min:_.__cW.toFixed(_.__dc),max:_.__cX.toFixed(_.__dc),width:_.__cp,height:_.__cV,vertical:_.__da,needInput:_.__db,disabled:_.__d_}),_.val(_.__dd);var l=_.__j.find("._zs_galleryaK");_.__de=l;var a=function(a){if(!_.__df&&!_.__d_){var e=l.offset(),r=_.__dg(),s=((_.__da?r.rMax-a.pageY+e.top:a.pageX-e.left)-r.half)/r.max,i=_.__dh(s);_.val(i)}},e=function(l){if(!_.__di)if(37==l.keyCode||40==l.keyCode){l.preventDefault();var a=+_.__dd;a-=_.__cY,_.val(a)}else if(39==l.keyCode||38==l.keyCode){l.preventDefault();a=+_.__dd;a+=_.__cY,_.val(a)}};l.on("click",a),l.on("keydown",e),_.on("destroy",function(){l.off("click",a),l.off("keydown",e)})},__dg:function(){var _=this,l=_.__j.find("._zs_galleryaL"),a=_.__j.find("._zs_galleryaM"),e=_.__j.find("._zs_galleryaN"),r=_.__j.find("._zs_gallerylk"),s=_.__j.find("._zs_gallerylf"),i=e.outerWidth()/2,t=_.__da?l.height():l.width();return{rail:l,pLabel:r,inputArea:s,tracker:a,indicator:e,rMax:t,max:t-2*i,half:i}},val:function(_,l){var a=this,e=+_;if(e||0===e){a.__j.prop("value",e);var r=a.__cX,s=a.__cW;e>r?e=r:e<s&&(e=s);var i=(e-s)/(r-s),t=a.__dg(),n=i*t.max;a.__da?t.indicator.css({bottom:n}):t.indicator.css({left:n}),_=a.__dh(i);var d=t.pLabel;d.html(_+(a.__cZ?'<span class="_zs_gallerylt">'+a.__cZ+"</span>":"")),t.inputArea&&t.inputArea.length&&t.inputArea.val(_);var g,o=n+t.half;if(a.__da)o-(g=d.height()/2)<0?o=0:o+g>t.rMax?o=t.rMax-2*g:o-=g,d.css({bottom:o});else o<(g=d.width()/2)?o=0:o+g>t.rMax?o=t.rMax-2*g:o-=g,d.css({left:o});a.__da?t.tracker.height(n+t.half):t.tracker.width(n+t.half),l||(a.__dd!=_&&a.__y(_),a.__dd=_)}return+a.__dd},__dh:function(_){var l,a=this.__cX,e=this.__cW,r=this.__cY;return 0===_?l=e:1===_?l=a:(l=e+(a-e)*_,l=Math.round(l/r)*r),l=l.toFixed(this.__dc)},__y:function(_){this.__j.prop("value",+_).trigger({type:"change",value:+_})},"__dj<mousedown>":function(_){var l=this;if(!l.__d_){var a=r(_.eventTarget),e=a.outerWidth(),i=-1;i=l.__da?a.parent().height()-e:a.parent().width()-e;var t=parseInt(a.css(l.__da?"bottom":"left"),10),n=l.__dd;l.__di=1,l.dragdrop(_.eventTarget,function(a){s.clear();var e=-1;(e=l.__da?t+_.pageY-a.pageY:t+a.pageX-_.pageX)<0?e=0:e>i&&(e=i);var r=e/i;l.val(n=l.__dh(r),!0)},function(){l.__dd!=n&&(l.__dd=n,l.__y(n)),l.__df=!0,setTimeout(l.wrapAsync(function(){delete l.__df}),20),delete l.__di})}},"__al<keyup>":function(_){var l=this;_.stopPropagation(),clearTimeout(l.__dk);var a=r.trim(_.eventTarget.value);l.__dk=setTimeout(l.wrapAsync(function(){r.isNumeric(a)&&l.val(a)}),400)},"__bV<focusout>":function(_){_.stopPropagation();var l=r.trim(_.eventTarget.value);r.isNumeric(l)&&this.val(l)},"__H<contextmenu>":function(_){_.preventDefault()}})});