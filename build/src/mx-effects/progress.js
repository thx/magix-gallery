define("mx-effects/progress",["magix","$","mx-effects/util"],(r,t,a)=>{var s=r("magix"),e=r("$"),l=r("mx-effects/util");s.applyStyle("_zs_galleryM",'._zs_galleryft{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryo{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryp{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryq{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryr{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerys{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryfu,._zs_galleryfv{position:relative;width:200px;background:#f0f0f0}._zs_galleryfu ._zs_galleryfw,._zs_galleryfv ._zs_galleryfw{position:absolute;top:0;left:0;width:0;height:100%;transition:width .25s}._zs_galleryfu ._zs_galleryfx,._zs_galleryfv ._zs_galleryfx{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all .25s}._zs_galleryfu ._zs_galleryfy,._zs_galleryfv ._zs_galleryfy{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryfu ._zs_galleryfz,._zs_galleryfv ._zs_galleryfz{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryfu ._zs_galleryfA,._zs_galleryfv ._zs_galleryfA{top:-24px;margin-left:-30px;text-align:center}._zs_galleryfu ._zs_galleryfB,._zs_galleryfv ._zs_galleryfB{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryfv{height:6px}._zs_galleryfv,._zs_galleryfv ._zs_galleryfw{border-radius:3px}._zs_galleryfv ._zs_galleryfw{background:#4d7fff}._zs_galleryfu{height:12px;border-radius:6px}._zs_galleryfu ._zs_galleryfw{border-radius:6px;background:#4d7fff;background:linear-gradient(45deg,#b8ccff 33%,#dbe5ff 34%,#dbe5ff 59%,#b8ccff 60%);background-size:24px 12px}._zs_galleryfC{position:relative}._zs_galleryfC ._zs_galleryfD{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfC ._zs_galleryfD:last-child{margin-right:0}._zs_galleryfC ._zs_galleryfE ._zs_galleryfD{background-color:#f0f0f0}._zs_galleryfC ._zs_galleryfF{position:absolute;top:0;left:0}._zs_galleryfC ._zs_galleryfF ._zs_galleryfD{background-color:#4d7fff}._zs_galleryfG{position:relative}._zs_galleryfG ._zs_galleryfH,._zs_galleryfG ._zs_galleryfI{position:absolute;top:0;left:50%}._zs_galleryfG ._zs_galleryfI{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryfG ._zs_galleryfH{z-index:2;border-radius:50%}._zs_galleryfG ._zs_galleryfJ{position:relative;z-index:3}._zs_galleryfG ._zs_galleryfJ ._zs_galleryfK{border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);text-indent:1px}._zs_galleryfG ._zs_galleryfJ ._zs_galleryfL{position:absolute;top:0;overflow:hidden}._zs_galleryfG ._zs_galleryfJ ._zs_galleryfL._zs_galleryfM{left:0}._zs_galleryfG ._zs_galleryfJ ._zs_galleryfL._zs_galleryfN{right:0}');var n={left:"_zs_galleryfz",right:"_zs_galleryfy",top:"_zs_galleryfA",bottom:"_zs_galleryfB"};a.exports=s.View.extend({tmpl:function(r,t,a,s,e,l,n,o){if(a||(a=r),!e){var f={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,i=function(r){return"&"+f[r]+";"};e=function(r){return""+(null==r?"":r)},s=function(r){return e(r).replace(m,i)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(r){return _[r]},p=/[!')(*]/g;l=function(r){return encodeURIComponent(e(r)).replace(p,g)}}if(!o){var z=/[\\'"]/g;o=function(r){return e(r).replace(z,"\\$&")}}var y="",d=r.type,x=r.width,c=r.border,b=r.viewId,Y=r.color,h=r.num,w=r.color1,u=r.color2,k=r.cName,v=r.placement,G=r.degree;if("circle"==d&&(y+='<div mxa="_zs_gallerybm:_" class="_zs_galleryfG"><div class="_zs_galleryfH" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; border: "+s(c)+'px solid #f0f0f0;"></div><div id="'+s(b)+'_circle" class="_zs_galleryfJ" style="width: '+s(x+2*c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfL _zs_galleryfM" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfK" style="left: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-bottom: "+s(c)+"px solid "+s(Y)+"; border-left: "+s(c)+"px solid "+s(Y)+';"></div></div><div class="_zs_galleryfL _zs_galleryfN" style="width: '+s(x/2+c)+"px; height: "+s(x+2*c)+'px;"><div class="_zs_galleryfK" style="right: '+s(c)+"px; width: "+s(x)+"px; height: "+s(x)+"px; border: "+s(c)+"px solid transparent; border-top: "+s(c)+"px solid "+s(Y)+"; border-right: "+s(c)+"px solid "+s(Y)+';"></div></div></div><div class="_zs_galleryfI" style="width: '+s(x)+"px; height: "+s(x)+"px; margin-left: "+s(0-x/2)+"px; line-height: "+s(x)+'px;">'+s(h)+"</div></div>"),y+=" ","line"!=d&&"gradient"!=d||(y+="<div ",y+="gradient"==d?' class="_zs_galleryfu" ':' class="_zs_galleryfv" ',y+='><div class="_zs_galleryfw" style="width: '+s(h)+"; ",Y&&(y+=" background: "+s(Y)+"; "),y+=" ",w&&u&&(y+=" background: linear-gradient(45deg, "+s(w)+" 33%, "+s(u)+" 34%, "+s(u)+" 59%, "+s(w)+" 60%); background-size: 24px 12px; "),y+='"></div><div class="_zs_galleryfx '+s(k)+'" ',"top"!=v&&"bottom"!=v||(y+=' style="left: '+s(h)+';" '),y+=">"+s(h)+"</div></div>"),y+=" ","degree"==d){y+='<div mxa="_zs_gallerybm:a" class="_zs_galleryfC"><div mxa="_zs_gallerybm:b" class="_zs_galleryfE">';for(var I=0;I<10;I+=1)y+='<span mxs="_zs_gallerybm:_" class="_zs_galleryfD"></span>';y+='</div><div mxa="_zs_gallerybm:c" class="_zs_galleryfF">';for(I=0;I<G;I+=1)y+='<span class="_zs_galleryfD" style="opacity: '+s(I/10+.08)+"; ",Y&&(y+=" background-color: "+s(Y)+"; "),y+='"></span>';y+="</div></div>"}return y},init:function(r){this.updater.snapshot(),this.assign(r)},assign:function(r){var t=this.updater.altered(),a=r.type||"line",s=r.textPlacement||"top",e=r.color||"",o=+r.num||0,f=o+"",m=f.indexOf(".");(m=m>=0?f.slice(m+1).length:0)>2&&(m=2),o<0&&(o=0),o>100&&(o=100);var i,_,g=0,p=r.width||120,z=r.border||8;switch(a){case"degree":g=parseInt(o/10);break;case"circle":e||(e="#4d7fff");break;case"gradient":if(e){var y=l.toRgb(e);i="rgba("+y.r+", "+y.g+", "+y.b+", 0.4)",_="rgba("+y.r+", "+y.g+", "+y.b+", 0.2)"}}return this.updater.set({viewId:this.id,placement:s,originNum:o,num:o.toFixed(m)+"%",cName:n[s],color:e,color1:i,color2:_,type:a,degree:g,width:+p,border:+z,gradient:"gradient"==a}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var r=this.updater.get("type"),t=this.updater.get("originNum");if("circle"==r){var a,s,l=e("#"+this.id+"_circle"),n=l.find("._zs_galleryfN ._zs_galleryfK"),o=l.find("._zs_galleryfM ._zs_galleryfK"),f=Math.ceil(360*t/100);f>180?s=f-(a=180):(a=f,s=0);var m=Math.ceil(1e3*t/100),i=Math.floor(m*a/f),_=Math.floor(m*s/f);n.animate({textIndent:0},{step:function(r,t){var s=(1-r)*a-135;e(this).css({"-webkit-transform":"rotate("+s+"deg)",transform:"rotate("+s+"deg)"})},duration:i,done:function(){s>0&&o.animate({textIndent:0},{step:function(r,t){var a=(1-r)*s-135;e(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:_},"linear")}},"linear")}}})});