define("mx-effects/progress",["magix","$","mx-effects/util"],(r,t,a)=>{var s=r("magix"),e=r("$"),l=r("mx-effects/util");s.applyStyle("_zs_galleryO",'._zs_galleryfP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryp{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryp{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryq{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryq{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryt{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryt{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryfQ-gradient,._zs_galleryfQ-line{position:relative;background:#f0f0f0}._zs_galleryfQ-gradient ._zs_galleryfR,._zs_galleryfQ-line ._zs_galleryfR{position:absolute;top:0;left:0;width:0;height:100%;transition:width .25s}._zs_galleryfQ-gradient ._zs_galleryfS,._zs_galleryfQ-line ._zs_galleryfS{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all .25s}._zs_galleryfQ-gradient ._zs_galleryfT,._zs_galleryfQ-line ._zs_galleryfT{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryfQ-gradient ._zs_galleryfU,._zs_galleryfQ-line ._zs_galleryfU{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryfQ-gradient ._zs_galleryfV,._zs_galleryfQ-line ._zs_galleryfV{top:-24px;margin-left:-30px;text-align:center}._zs_galleryfQ-gradient ._zs_galleryfW,._zs_galleryfQ-line ._zs_galleryfW{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryfQ-line{height:6px;border-radius:3px}._zs_galleryfQ-line ._zs_galleryfR{border-radius:3px;background:#4d7fff}._zs_galleryfQ-gradient{height:12px;border-radius:6px}._zs_galleryfQ-gradient ._zs_galleryfR{border-radius:6px;background:#4d7fff;background:linear-gradient(45deg,#b8ccff 33%,#dbe5ff 34%,#dbe5ff 59%,#b8ccff 60%);background-size:24px 12px}._zs_galleryfX{position:relative}._zs_galleryfX ._zs_galleryfY{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfX ._zs_galleryfY:last-child{margin-right:0}._zs_galleryfX ._zs_galleryfZ ._zs_galleryfY{background-color:#f0f0f0}._zs_galleryfX ._zs_galleryg_{position:absolute;top:0;left:0}._zs_galleryfX ._zs_galleryg_ ._zs_galleryfY{background-color:#4d7fff}._zs_galleryga{position:relative}._zs_galleryga ._zs_gallerygb,._zs_galleryga ._zs_gallerygc{position:absolute;top:0;left:50%}._zs_galleryga ._zs_gallerygc{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryga ._zs_gallerygb{z-index:2;border-radius:50%}._zs_galleryga ._zs_gallerygd{position:relative;z-index:3}._zs_galleryga ._zs_gallerygd ._zs_galleryge{border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);text-indent:1px}._zs_galleryga ._zs_gallerygd ._zs_gallerygf{position:absolute;top:0;overflow:hidden}._zs_galleryga ._zs_gallerygd ._zs_gallerygf._zs_gallerygg{left:0}._zs_galleryga ._zs_gallerygd ._zs_gallerygf._zs_gallerygh{right:0}');var n={left:"_zs_galleryfU",right:"_zs_galleryfT",top:"_zs_galleryfV",bottom:"_zs_galleryfW"};a.exports=s.View.extend({tmpl:function(r,t,a,s,e,l,n,o){if(a||(a=r),!e){var f={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,i=function(r){return"&"+f[r]+";"};e=function(r){return""+(null==r?"":r)},s=function(r){return e(r).replace(m,i)}}if(!l){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(r){return g[r]},d=/[!')(*]/g;l=function(r){return encodeURIComponent(e(r)).replace(d,_)}}if(!o){var p=/[\\'"]/g;o=function(r){return e(r).replace(p,"\\$&")}}var z="",y=r.type,x=r.width,c=r.border,b=r.viewId,Y=r.color,h=r.text,k=r.num,w=r.color1,u=r.color2,v=r.colorGradient,Q=r.cName,P=r.placement,R=r.degree;if("circle"==y&&(z+='<div mxa="_zs_gallerybP:_" class="_zs_galleryga"><div class="_zs_gallerygb" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; border: "+s(c)+'px solid #f0f0f0;"></div><div id="'+s(b)+'_circle" class="_zs_gallerygd" style="width: '+s(x+2*c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_gallerygf _zs_gallerygg" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryge" style="left: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-bottom: "+s(c)+"px solid "+s(Y)+"; border-left: "+s(c)+"px solid "+s(Y)+';"></div></div><div class="_zs_gallerygf _zs_gallerygh" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryge" style="right: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-top: "+s(c)+"px solid "+s(Y)+"; border-right: "+s(c)+"px solid "+s(Y)+';"></div></div></div>',h&&(z+='<div class="_zs_gallerygc" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; line-height: "+s(x)+'px;">'+s(k)+"</div>"),z+="</div>"),z+=" ","line"!=y&&"gradient"!=y||(z+='<div class="_zs_galleryfQ-'+s(y)+'" style="width: '+s(x)+'px;"><div class="_zs_galleryfR" style="width: '+s(k)+"; ",w&&u?z+=" background: linear-gradient(45deg, "+s(w)+" 33%, "+s(u)+" 34%, "+s(u)+" 59%, "+s(w)+" 60%); background-size: 24px 12px; ":(z+=" ",z+=v?" background: linear-gradient(to right, "+s(Y)+", "+s(v)+"); ":" background: "+s(Y)+"; ",z+="  "),z+='"></div>',h&&(z+='<div class="_zs_galleryfS '+s(Q)+'" ',"top"!=P&&"bottom"!=P||(z+=' style="left: '+s(k)+';" '),z+=">"+s(k)+"</div>"),z+="</div>"),z+=" ","degree"==y){z+='<div mxa="_zs_gallerybP:a" class="_zs_galleryfX"><div mxa="_zs_gallerybP:b" class="_zs_galleryfZ">';for(var X=0;X<10;X+=1)z+='<span mxs="_zs_gallerybP:_" class="_zs_galleryfY"></span>';z+='</div><div mxa="_zs_gallerybP:c" class="_zs_galleryg_">';for(X=0;X<R;X+=1)z+='<span class="_zs_galleryfY" style="opacity: '+s(X/10+.08)+"; ",Y&&(z+=" background-color: "+s(Y)+"; "),z+='"></span>';z+="</div></div>"}return z},init:function(r){this.updater.snapshot(),this.assign(r)},assign:function(r){var t=this.updater.altered(),a=+r.num||0,s=a+"",e=s.indexOf(".");(e=e>=0?s.slice(e+1).length:0)>2&&(e=2),a<0&&(a=0),a>100&&(a=100);var o,f,m,i=r.type||"line",g=r.textPlacement||"top",_=0,d=r.border||8,p=r.color||"",z=r.colorGradient||"";switch(i){case"degree":_=parseInt(a/10);break;case"circle":p||(p="#4d7fff"),o=r.width||120;break;case"gradient":if(p){var y=l.toRgb(p);f="rgba("+y.r+", "+y.g+", "+y.b+", 0.4)",m="rgba("+y.r+", "+y.g+", "+y.b+", 0.2)"}case"line":o=r.width||200}return this.updater.set({viewId:this.id,placement:g,originNum:a,num:a.toFixed(e)+"%",cName:n[g],color:p,colorGradient:z,color1:f,color2:m,type:i,text:r.text+""!="false",degree:_,width:+o,border:+d,gradient:"gradient"==i}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var r=this.updater.get("type"),t=this.updater.get("originNum");if("circle"==r){var a,s,l=e("#"+this.id+"_circle"),n=l.find("._zs_gallerygh ._zs_galleryge"),o=l.find("._zs_gallerygg ._zs_galleryge"),f=Math.ceil(360*t/100);f>180?s=f-(a=180):(a=f,s=0);var m=Math.ceil(1e3*t/100),i=Math.floor(m*a/f),g=Math.floor(m*s/f);n.animate({textIndent:0},{step:function(r,t){var s=(1-r)*a-135;e(this).css({"-webkit-transform":"rotate("+s+"deg)",transform:"rotate("+s+"deg)"})},duration:i,done:function(){s>0&&o.animate({textIndent:0},{step:function(r,t){var a=(1-r)*s-135;e(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:g},"linear")}},"linear")}}})});