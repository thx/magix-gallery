define("mx-effects/progress",["magix","$","mx-effects/util"],(r,t,a)=>{var s=r("magix"),e=r("$"),l=r("mx-effects/util");s.applyStyle("_zs_galleryN",'._zs_galleryfv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryfw,._zs_galleryfx{position:relative;width:200px;background:#f0f0f0}._zs_galleryfw ._zs_galleryfy,._zs_galleryfx ._zs_galleryfy{position:absolute;top:0;left:0;width:0;height:100%;transition:width .25s}._zs_galleryfw ._zs_galleryfz,._zs_galleryfx ._zs_galleryfz{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all .25s}._zs_galleryfw ._zs_galleryfA,._zs_galleryfx ._zs_galleryfA{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryfw ._zs_galleryfB,._zs_galleryfx ._zs_galleryfB{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryfw ._zs_galleryfC,._zs_galleryfx ._zs_galleryfC{top:-24px;margin-left:-30px;text-align:center}._zs_galleryfw ._zs_galleryfD,._zs_galleryfx ._zs_galleryfD{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryfx{height:6px}._zs_galleryfx,._zs_galleryfx ._zs_galleryfy{border-radius:3px}._zs_galleryfx ._zs_galleryfy{background:#4d7fff}._zs_galleryfw{height:12px;border-radius:6px}._zs_galleryfw ._zs_galleryfy{border-radius:6px;background:#4d7fff;background:linear-gradient(45deg,#b8ccff 33%,#dbe5ff 34%,#dbe5ff 59%,#b8ccff 60%);background-size:24px 12px}._zs_galleryfE{position:relative}._zs_galleryfE ._zs_galleryfF{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfE ._zs_galleryfF:last-child{margin-right:0}._zs_galleryfE ._zs_galleryfG ._zs_galleryfF{background-color:#f0f0f0}._zs_galleryfE ._zs_galleryfH{position:absolute;top:0;left:0}._zs_galleryfE ._zs_galleryfH ._zs_galleryfF{background-color:#4d7fff}._zs_galleryfI{position:relative}._zs_galleryfI ._zs_galleryfJ,._zs_galleryfI ._zs_galleryfK{position:absolute;top:0;left:50%}._zs_galleryfI ._zs_galleryfK{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryfI ._zs_galleryfJ{z-index:2;border-radius:50%}._zs_galleryfI ._zs_galleryfL{position:relative;z-index:3}._zs_galleryfI ._zs_galleryfL ._zs_galleryfM{border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);text-indent:1px}._zs_galleryfI ._zs_galleryfL ._zs_galleryfN{position:absolute;top:0;overflow:hidden}._zs_galleryfI ._zs_galleryfL ._zs_galleryfN._zs_galleryfO{left:0}._zs_galleryfI ._zs_galleryfL ._zs_galleryfN._zs_galleryfP{right:0}');var n={left:"_zs_galleryfB",right:"_zs_galleryfA",top:"_zs_galleryfC",bottom:"_zs_galleryfD"};a.exports=s.View.extend({tmpl:function(r,t,a,s,e,l,n,o){if(a||(a=r),!e){var f={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,i=function(r){return"&"+f[r]+";"};e=function(r){return""+(null==r?"":r)},s=function(r){return e(r).replace(m,i)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(r){return _[r]},p=/[!')(*]/g;l=function(r){return encodeURIComponent(e(r)).replace(p,g)}}if(!o){var y=/[\\'"]/g;o=function(r){return e(r).replace(y,"\\$&")}}var z="",d=r.type,x=r.width,c=r.border,b=r.viewId,Y=r.color,h=r.num,w=r.color1,k=r.color2,u=r.cName,v=r.placement,I=r.degree;if("circle"==d&&(z+='<div mxa="_zs_gallerybq:_" class="_zs_galleryfI"><div class="_zs_galleryfJ" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; border: "+s(c)+'px solid #f0f0f0;"></div><div id="'+s(b)+'_circle" class="_zs_galleryfL" style="width: '+s(x+2*c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfN _zs_galleryfO" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfM" style="left: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-bottom: "+s(c)+"px solid "+s(Y)+"; border-left: "+s(c)+"px solid "+s(Y)+';"></div></div><div class="_zs_galleryfN _zs_galleryfP" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfM" style="right: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-top: "+s(c)+"px solid "+s(Y)+"; border-right: "+s(c)+"px solid "+s(Y)+';"></div></div></div><div class="_zs_galleryfK" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; line-height: "+s(x)+'px;">'+s(h)+"</div></div>"),z+=" ","line"!=d&&"gradient"!=d||(z+="<div ",z+="gradient"==d?' class="_zs_galleryfw" ':' class="_zs_galleryfx" ',z+='><div class="_zs_galleryfy" style="width: '+s(h)+"; ",Y&&(z+=" background: "+s(Y)+"; "),z+=" ",w&&k&&(z+=" background: linear-gradient(45deg, "+s(w)+" 33%, "+s(k)+" 34%, "+s(k)+" 59%, "+s(w)+" 60%); background-size: 24px 12px; "),z+='"></div><div class="_zs_galleryfz '+s(u)+'" ',"top"!=v&&"bottom"!=v||(z+=' style="left: '+s(h)+';" '),z+=">"+s(h)+"</div></div>"),z+=" ","degree"==d){z+='<div mxa="_zs_gallerybq:a" class="_zs_galleryfE"><div mxa="_zs_gallerybq:b" class="_zs_galleryfG">';for(var N=0;N<10;N+=1)z+='<span mxs="_zs_gallerybq:_" class="_zs_galleryfF"></span>';z+='</div><div mxa="_zs_gallerybq:c" class="_zs_galleryfH">';for(N=0;N<I;N+=1)z+='<span class="_zs_galleryfF" style="opacity: '+s(N/10+.08)+"; ",Y&&(z+=" background-color: "+s(Y)+"; "),z+='"></span>';z+="</div></div>"}return z},init:function(r){this.updater.snapshot(),this.assign(r)},assign:function(r){var t=this.updater.altered(),a=r.type||"line",s=r.textPlacement||"top",e=r.color||"",o=+r.num||0,f=o+"",m=f.indexOf(".");(m=m>=0?f.slice(m+1).length:0)>2&&(m=2),o<0&&(o=0),o>100&&(o=100);var i,_,g=0,p=r.width||120,y=r.border||8;switch(a){case"degree":g=parseInt(o/10);break;case"circle":e||(e="#4d7fff");break;case"gradient":if(e){var z=l.toRgb(e);i="rgba("+z.r+", "+z.g+", "+z.b+", 0.4)",_="rgba("+z.r+", "+z.g+", "+z.b+", 0.2)"}}return this.updater.set({viewId:this.id,placement:s,originNum:o,num:o.toFixed(m)+"%",cName:n[s],color:e,color1:i,color2:_,type:a,degree:g,width:+p,border:+y,gradient:"gradient"==a}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var r=this.updater.get("type"),t=this.updater.get("originNum");if("circle"==r){var a,s,l=e("#"+this.id+"_circle"),n=l.find("._zs_galleryfP ._zs_galleryfM"),o=l.find("._zs_galleryfO ._zs_galleryfM"),f=Math.ceil(360*t/100);f>180?s=f-(a=180):(a=f,s=0);var m=Math.ceil(1e3*t/100),i=Math.floor(m*a/f),_=Math.floor(m*s/f);n.animate({textIndent:0},{step:function(r,t){var s=(1-r)*a-135;e(this).css({"-webkit-transform":"rotate("+s+"deg)",transform:"rotate("+s+"deg)"})},duration:i,done:function(){s>0&&o.animate({textIndent:0},{step:function(r,t){var a=(1-r)*s-135;e(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:_},"linear")}},"linear")}}})});