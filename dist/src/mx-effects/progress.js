define("mx-effects/progress",["magix","$","mx-color/util","mx-util/css-var"],(e,l,r)=>{var a=e("magix"),t=e("$"),s=e("mx-color/util"),i=e("mx-util/css-var");a.applyStyle("_zs_galleryO",'[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryeV,._zs_galleryeW{position:relative;background:#f0f0f0}._zs_galleryeV ._zs_galleryeX,._zs_galleryeW ._zs_galleryeX{position:absolute;top:0;left:0;width:0;height:100%;transition:width var(--duration)}._zs_galleryeV ._zs_galleryeY,._zs_galleryeW ._zs_galleryeY{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all var(--duration)}._zs_galleryeV ._zs_galleryeZ,._zs_galleryeW ._zs_galleryeZ{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryeV ._zs_galleryf_,._zs_galleryeW ._zs_galleryf_{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryeV ._zs_galleryfa,._zs_galleryeW ._zs_galleryfa{top:-24px;margin-left:-30px;text-align:center}._zs_galleryeV ._zs_galleryfb,._zs_galleryeW ._zs_galleryfb{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryeW{height:6px}._zs_galleryeW,._zs_galleryeW ._zs_galleryeX{border-radius:3px}._zs_galleryeW ._zs_galleryeX{background:var(--color-brand)}._zs_galleryeW._zs_galleryfc ._zs_galleryeX{border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-right-radius:0;border-bottom-right-radius:0}._zs_galleryeV{height:12px;border-radius:6px}._zs_galleryeV ._zs_galleryeX{border-radius:6px;background:var(--color-brand);background-size:24px 12px}._zs_galleryfd{position:relative}._zs_galleryfd ._zs_galleryfe{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfd ._zs_galleryfe:last-child{margin-right:0}._zs_galleryfd ._zs_galleryff ._zs_galleryfe{background-color:#f0f0f0}._zs_galleryfd ._zs_galleryfg{position:absolute;top:0;left:0}._zs_galleryfd ._zs_galleryfg ._zs_galleryfe{background-color:var(--color-brand)}._zs_galleryfh{position:relative}._zs_galleryfh ._zs_galleryfi,._zs_galleryfh ._zs_galleryfj{position:absolute;top:0;left:50%}._zs_galleryfh ._zs_galleryfj{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryfh ._zs_galleryfi{z-index:2;border-radius:50%}._zs_galleryfh ._zs_galleryfk{position:relative;z-index:3}._zs_galleryfh ._zs_galleryfk ._zs_galleryfm{border-radius:50%;position:absolute;top:0;transform:rotate(-135deg);text-indent:1px}._zs_galleryfh ._zs_galleryfk ._zs_galleryfn{position:absolute;top:0;overflow:hidden}._zs_galleryfh ._zs_galleryfk ._zs_galleryfn._zs_galleryfo{left:0}._zs_galleryfh ._zs_galleryfk ._zs_galleryfn._zs_galleryfp{right:0}');var _={left:"_zs_galleryf_",right:"_zs_galleryeZ",top:"_zs_galleryfa",bottom:"_zs_galleryfb"};r.exports=a.View.extend({tmpl:function(e,l,r,a,t,s,i,_){if(r||(r=e),!t){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+g[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(o,d)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return n[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(f,y)}}if(!_){var p=/[\\'"]/g;_=function(e){return t(e).replace(p,"\\$&")}}var z="",c=e.type,h=e.width,x=e.border,b=e.viewId,u=e.color,v=e.text,m=e.num,w=e.vs,k=e.colorVs,V=e.numRemain,W=e.colorGradient,X=e.cName,I=e.placement,Y=e.color1,O=e.color2,M=e.degree,N=e.baseOpacity;if("circle"==c&&(z+='<div mxa="_zs_galleryb}:_" class="_zs_galleryfh"><div class="_zs_galleryfi" style="width: '+a(h)+"px; height: "+a(h)+"px; margin-left: "+a(0-h/2)+"px; border: "+a(x)+'px solid #f0f0f0;"></div><div id="'+a(b)+'_circle" class="_zs_galleryfk" style="width: '+a(h+2*x)+"px; height: "+a(h+2*x)+'px;"><div class="_zs_galleryfn _zs_galleryfo" style="width: '+a(h/2+x)+"px; height: "+a(h+2*x)+'px;"><div class="_zs_galleryfm" style="left: '+a(x)+"px; width: "+a(h)+"px; height: "+a(h)+"px; border: "+a(x)+"px solid transparent; border-bottom: "+a(x)+"px solid "+a(u)+"; border-left: "+a(x)+"px solid "+a(u)+';"></div></div><div class="_zs_galleryfn _zs_galleryfp" style="width: '+a(h/2+x)+"px; height: "+a(h+2*x)+'px;"><div class="_zs_galleryfm" style="right: '+a(x)+"px; width: "+a(h)+"px; height: "+a(h)+"px; border: "+a(x)+"px solid transparent; border-top: "+a(x)+"px solid "+a(u)+"; border-right: "+a(x)+"px solid "+a(u)+';"></div></div></div>',v&&(z+='<div class="_zs_galleryfj" style="width: '+a(h)+"px; height: "+a(h)+"px; margin-left: "+a(0-h/2)+"px; line-height: "+a(h)+'px;">'+a(m)+"</div>"),z+="</div>"),z+=" ","line"==c&&(z+=" ",w?(z+='<div class="_zs_galleryeW _zs_galleryfc" style="width: '+a(h)+"px; ",k&&(z+=" background: "+a(k)+"; "),z+='"><div class="_zs_galleryeX" style="width: '+a(m)+"; background: "+a(u)+';"></div><div mxa="_zs_galleryb}:a" class="_zs_galleryeY _zs_galleryf_">'+a(m)+'</div><div mxa="_zs_galleryb}:b" class="_zs_galleryeY _zs_galleryeZ">'+a(V)+"</div></div>"):(z+='<div class="_zs_galleryeW" style="width: '+a(h)+'px;"><div class="_zs_galleryeX" style="width: '+a(m)+"; ",z+=W?" background: linear-gradient(to right, "+a(u)+", "+a(W)+"); ":" background: "+a(u)+"; ",z+='"></div>',v&&(z+='<div class="_zs_galleryeY '+a(X)+'" ',"top"!=I&&"bottom"!=I||(z+=' style="left: '+a(m)+';" '),z+=">"+a(m)+"</div>"),z+="</div>"),z+=" "),z+=" ","gradient"==c&&(z+='<div class="_zs_galleryeV" style="width: '+a(h)+'px;"><div class="_zs_galleryeX" style="width: '+a(m)+"; background: linear-gradient(45deg, "+a(Y)+" 33%, "+a(O)+" 34%, "+a(O)+" 59%, "+a(Y)+' 60%); background-size: 24px 12px;"></div>',v&&(z+='<div class="_zs_galleryeY '+a(X)+'" ',"top"!=I&&"bottom"!=I||(z+=' style="left: '+a(m)+';" '),z+=">"+a(m)+"</div>"),z+="</div>"),z+=" ","degree"==c){z+='<div mxa="_zs_galleryb}:c" class="_zs_galleryfd"><div mxa="_zs_galleryb}:d" class="_zs_galleryff">';for(var R=0;R<10;R+=1)z+='<span mxs="_zs_galleryb}:_" class="_zs_galleryfe"></span>';z+='</div><div mxa="_zs_galleryb}:e" class="_zs_galleryfg">';for(R=0;R<M;R+=1)z+='<span class="_zs_galleryfe" style="opacity: '+a(N+R*(1-N)/9)+"; ",u&&(z+=" background-color: "+a(u)+"; "),z+='"></span>';z+="</div></div>"}return z},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=+e.num||0,a=r+"",t=a.indexOf(".");(t=t>=0?a.slice(t+1).length:0)>2&&(t=2),r<0&&(r=0),r>100&&(r=100);var g,o,d,n=e.type||"line",y=e.textPlacement||"top",f=0,p=e.baseOpacity||.08,z=e.border||8,c=e.color||"",h=e.colorGradient||"",x=e.colorVs||"",b=i.get("--color-brand","#4d7fff");switch(n){case"degree":f=parseInt(r/10);break;case"circle":c||(c=b),g=e.width||120;break;case"gradient":if(c=c||b){var u=s.toRgb(c);o="rgba("+u.r+", "+u.g+", "+u.b+", 0.4)",d="rgba("+u.r+", "+u.g+", "+u.b+", 0.2)"}case"line":g=e.width||200}return this.updater.set({viewId:this.id,placement:y,originNum:r,num:r.toFixed(t)+"%",numRemain:(100-r).toFixed(t)+"%",cName:_[y],color:c,colorGradient:h,colorVs:x,color1:o,color2:d,type:n,text:e.text+""!="false",vs:e.vs+""=="true",degree:f,baseOpacity:+p,width:+g,border:+z,gradient:"gradient"==n}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("type"),l=this.updater.get("originNum");if("circle"==e){var r,a,s=t("#"+this.id+"_circle"),i=s.find("._zs_galleryfp ._zs_galleryfm"),_=s.find("._zs_galleryfo ._zs_galleryfm"),g=Math.ceil(360*l/100);g>180?a=g-(r=180):(r=g,a=0);var o=Math.ceil(1e3*l/100),d=Math.floor(o*r/g),n=Math.floor(o*a/g);i.animate({textIndent:0},{step:function(e,l){var a=(1-e)*r-135;t(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:d,done:function(){a>0&&_.animate({textIndent:0},{step:function(e,l){var r=(1-e)*a-135;t(this).css({"-webkit-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"})},duration:n},"linear")}},"linear")}}})});