define("mx-effects/progress",["magix","$","mx-color/util","mx-util/css-var"],(l,e,r)=>{var a=l("magix"),s=l("$"),t=l("mx-color/util"),i=l("mx-util/css-var");a.applyStyle("_zs_galleryP",'[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryeZ,._zs_galleryf_{position:relative;background:#f0f0f0}._zs_galleryeZ ._zs_galleryfa,._zs_galleryf_ ._zs_galleryfa{position:absolute;top:0;left:0;width:0;height:100%;transition:width var(--duration)}._zs_galleryeZ ._zs_galleryfb,._zs_galleryf_ ._zs_galleryfb{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all var(--duration)}._zs_galleryeZ ._zs_galleryfc,._zs_galleryf_ ._zs_galleryfc{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryeZ ._zs_galleryfd,._zs_galleryf_ ._zs_galleryfd{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryeZ ._zs_galleryfe,._zs_galleryf_ ._zs_galleryfe{top:-24px;margin-left:-30px;text-align:center}._zs_galleryeZ ._zs_galleryff,._zs_galleryf_ ._zs_galleryff{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryf_{height:6px}._zs_galleryf_,._zs_galleryf_ ._zs_galleryfa{border-radius:3px}._zs_galleryf_ ._zs_galleryfa{background:var(--color-brand)}._zs_galleryf_._zs_galleryfg ._zs_galleryfa{border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-right-radius:0;border-bottom-right-radius:0}._zs_galleryeZ{height:12px;border-radius:6px}._zs_galleryeZ ._zs_galleryfa{border-radius:6px;background:var(--color-brand);background-size:24px 12px}._zs_galleryfh{position:relative}._zs_galleryfh ._zs_galleryfi{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryfh ._zs_galleryfi:last-child{margin-right:0}._zs_galleryfh ._zs_galleryfj ._zs_galleryfi{background-color:#f0f0f0}._zs_galleryfh ._zs_galleryfk{position:absolute;top:0;left:0}._zs_galleryfh ._zs_galleryfk ._zs_galleryfi{background-color:var(--color-brand)}._zs_galleryfm{position:relative}._zs_galleryfm ._zs_galleryfn,._zs_galleryfm ._zs_galleryfo{position:absolute;top:0;left:50%}._zs_galleryfm ._zs_galleryfo{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryfm ._zs_galleryfn{z-index:2;border-radius:50%}._zs_galleryfm ._zs_galleryfp{position:relative;z-index:3}._zs_galleryfm ._zs_galleryfp ._zs_galleryfq{border-radius:50%;position:absolute;top:0;transform:rotate(-135deg);text-indent:1px}._zs_galleryfm ._zs_galleryfp ._zs_galleryfs{position:absolute;top:0;overflow:hidden}._zs_galleryfm ._zs_galleryfp ._zs_galleryfs._zs_galleryft{left:0}._zs_galleryfm ._zs_galleryfp ._zs_galleryfs._zs_galleryfu{right:0}');var _={left:"_zs_galleryfd",right:"_zs_galleryfc",top:"_zs_galleryfe",bottom:"_zs_galleryff"};r.exports=a.View.extend({tmpl:function(l,e,r,a,s,t,i,_){if(r||(r=l),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(l){return"&"+g[l]+";"};s=function(l){return""+(null==l?"":l)},a=function(l){return s(l).replace(o,d)}}if(!t){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return f[l]},y=/[!')(*]/g;t=function(l){return encodeURIComponent(s(l)).replace(y,n)}}if(!_){var p=/[\\'"]/g;_=function(l){return s(l).replace(p,"\\$&")}}var z="",c=l.type,x=l.width,h=l.border,b=l.viewId,u=l.color,v=l.text,m=l.num,w=l.vs,k=l.colorVs,Z=l.numRemain,I=l.colorGradient,q=l.cName,M=l.placement,N=l.color1,O=l.color2,R=l.degree,V=l.baseOpacity;if("circle"==c&&(z+='<div mxa="_zs_galleryb@:_" class="_zs_galleryfm"><div class="_zs_galleryfn" style="width: '+a(x)+"px; height: "+a(x)+"px; margin-left: "+a(0-x/2)+"px; border: "+a(h)+'px solid #f0f0f0;"></div><div id="'+a(b)+'_circle" class="_zs_galleryfp" style="width: '+a(x+2*h)+"px; height: "+a(x+2*h)+'px;"><div class="_zs_galleryfs _zs_galleryft" style="width: '+a(x/2+h)+"px; height: "+a(x+2*h)+'px;"><div class="_zs_galleryfq" style="left: '+a(h)+"px; width: "+a(x)+"px; height: "+a(x)+"px; border: "+a(h)+"px solid transparent; border-bottom: "+a(h)+"px solid "+a(u)+"; border-left: "+a(h)+"px solid "+a(u)+';"></div></div><div class="_zs_galleryfs _zs_galleryfu" style="width: '+a(x/2+h)+"px; height: "+a(x+2*h)+'px;"><div class="_zs_galleryfq" style="right: '+a(h)+"px; width: "+a(x)+"px; height: "+a(x)+"px; border: "+a(h)+"px solid transparent; border-top: "+a(h)+"px solid "+a(u)+"; border-right: "+a(h)+"px solid "+a(u)+';"></div></div></div>',v&&(z+='<div class="_zs_galleryfo" style="width: '+a(x)+"px; height: "+a(x)+"px; margin-left: "+a(0-x/2)+"px; line-height: "+a(x)+'px;">'+a(m)+"</div>"),z+="</div>"),z+=" ","line"==c&&(z+=" ",w?(z+='<div class="_zs_galleryf_ _zs_galleryfg" style="width: '+a(x)+"px; ",k&&(z+=" background: "+a(k)+"; "),z+='"><div class="_zs_galleryfa" style="width: '+a(m)+"; background: "+a(u)+';"></div><div mxa="_zs_galleryb@:a" class="_zs_galleryfb _zs_galleryfd">'+a(m)+'</div><div mxa="_zs_galleryb@:b" class="_zs_galleryfb _zs_galleryfc">'+a(Z)+"</div></div>"):(z+='<div class="_zs_galleryf_" style="width: '+a(x)+'px;"><div class="_zs_galleryfa" style="width: '+a(m)+"; ",z+=I?" background: linear-gradient(to right, "+a(u)+", "+a(I)+"); ":" background: "+a(u)+"; ",z+='"></div>',v&&(z+='<div class="_zs_galleryfb '+a(q)+'" ',"top"!=M&&"bottom"!=M||(z+=' style="left: '+a(m)+';" '),z+=">"+a(m)+"</div>"),z+="</div>"),z+=" "),z+=" ","gradient"==c&&(z+='<div class="_zs_galleryeZ" style="width: '+a(x)+'px;"><div class="_zs_galleryfa" style="width: '+a(m)+"; background: linear-gradient(45deg, "+a(N)+" 33%, "+a(O)+" 34%, "+a(O)+" 59%, "+a(N)+' 60%); background-size: 24px 12px;"></div>',v&&(z+='<div class="_zs_galleryfb '+a(q)+'" ',"top"!=M&&"bottom"!=M||(z+=' style="left: '+a(m)+';" '),z+=">"+a(m)+"</div>"),z+="</div>"),z+=" ","degree"==c){z+='<div mxa="_zs_galleryb@:c" class="_zs_galleryfh"><div mxa="_zs_galleryb@:d" class="_zs_galleryfj">';for(var G=0;G<10;G+=1)z+='<span mxs="_zs_galleryb@:_" class="_zs_galleryfi"></span>';z+='</div><div mxa="_zs_galleryb@:e" class="_zs_galleryfk">';for(G=0;G<R;G+=1)z+='<span class="_zs_galleryfi" style="opacity: '+a(V+G*(1-V)/9)+"; ",u&&(z+=" background-color: "+a(u)+"; "),z+='"></span>';z+="</div></div>"}return z},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this.updater.altered(),r=+l.num||0,a=r+"",s=a.indexOf(".");(s=s>=0?a.slice(s+1).length:0)>2&&(s=2),r<0&&(r=0),r>100&&(r=100);var g,o,d,f=l.type||"line",n=l.textPlacement||"top",y=0,p=l.baseOpacity||.08,z=l.border||8,c=l.color||"",x=l.colorGradient||"",h=l.colorVs||"",b=i.get("--color-brand","#4d7fff");switch(f){case"degree":y=parseInt(r/10);break;case"circle":c||(c=b),g=l.width||120;break;case"gradient":if(c=c||b){var u=t.toRgb(c);o="rgba("+u.r+", "+u.g+", "+u.b+", 0.4)",d="rgba("+u.r+", "+u.g+", "+u.b+", 0.2)"}case"line":g=l.width||200}return this.updater.set({viewId:this.id,placement:n,originNum:r,num:r.toFixed(s)+"%",numRemain:(100-r).toFixed(s)+"%",cName:_[n],color:c,colorGradient:x,colorVs:h,color1:o,color2:d,type:f,text:l.text+""!="false",vs:l.vs+""=="true",degree:y,baseOpacity:+p,width:+g,border:+z,gradient:"gradient"==f}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var l=this.updater.get("type"),e=this.updater.get("originNum");if("circle"==l){var r,a,t=s("#"+this.id+"_circle"),i=t.find("._zs_galleryfu ._zs_galleryfq"),_=t.find("._zs_galleryft ._zs_galleryfq"),g=Math.ceil(360*e/100);g>180?a=g-(r=180):(r=g,a=0);var o=Math.ceil(1e3*e/100),d=Math.floor(o*r/g),f=Math.floor(o*a/g);i.animate({textIndent:0},{step:function(l,e){var a=(1-l)*r-135;s(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:d,done:function(){a>0&&_.animate({textIndent:0},{step:function(l,e){var r=(1-l)*a-135;s(this).css({"-webkit-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"})},duration:f},"linear")}},"linear")}}})});