define("mx-effects/star",["magix","./base","$"],(e,l,s)=>{var t=e("magix"),r=e("./base");e("$");t.applyStyle("_zs_galleryP",'._zs_gallerygj{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-effects/star"]{position:relative;display:inline-block}[mx-view*="mx-effects/star"] ._zs_gallerygk>*{display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;font-size:20px;color:inherit}[mx-view*="mx-effects/star"] ._zs_gallerygl{color:#f0f0f0}[mx-view*="mx-effects/star"] ._zs_gallerygm{position:absolute;top:0;left:0;height:24px;overflow:hidden}[mx-view*="mx-effects/star"] ._zs_gallerygm ._zs_gallerygn{width:120px;height:24px}[mx-view*="mx-effects/star"] ._zs_gallerygm ._zs_gallerygn._zs_gallerygo{color:#4d7fff}'),s.exports=r.extend({tmpl:function(e,l,s,t,r,a,i,n){if(s||(s=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,f=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(g,f)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(x,_)}}if(!n){var p=/[\\'"]/g;n=function(e){return r(e).replace(p,"\\$&")}}var d="",m=e.icon,h=e.width,y=e.color;d+='<div mxa="_zs_gallerybF:_" class="_zs_gallerygl">';for(var u=0;u<5;u+=1)d+='<span mxa="_zs_gallerybF:a" class="_zs_gallerygk">',d+=m?" "+r(m)+" ":'<i mxs="_zs_gallerybF:_" class="mc-iconfont">&#xe60f;</i>',d+="</span>";d+='</div><div class="_zs_gallerygm" style="width: '+t(h)+';"><div class="_zs_gallerygn ',y||(d+=" _zs_gallerygo "),d+='">';for(u=0;u<5;u+=1)d+='<span class="_zs_gallerygk" ',y&&(d+=' style="color: '+t(y)+';" '),d+=">",d+=m?" "+r(m)+" ":'<i mxs="_zs_gallerybF:_" class="mc-iconfont">&#xe60f;</i>',d+="</span>";return d+="</div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),s=e.color||"",t=+e.num||0,r=t+"",a=r.indexOf(".");return(a=a>=0?r.slice(a+1).length:0)>0&&(t=Math.floor(t)+.5),t<0&&(t=0),t>5&&(t=5),this.updater.set({width:t/5*100+"%",color:s,icon:e.icon}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)}})});