define("mx-header/index",["magix","$","mx-header/data"],(e,l,r)=>{var a=e("magix"),t=e("$"),s=e("mx-header/data");a.applyStyle("_zs_galleryY","._zs_galleryhp{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryhq{position:relative;height:88px;background-color:#09122b}._zs_galleryhq ._zs_galleryhr{opacity:.8;color:#fff}._zs_galleryhq ._zs_galleryhs:hover{opacity:1;color:#4d7fff}._zs_galleryhq ._zs_galleryht{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_galleryhq ._zs_galleryht ._zs_galleryhu{position:relative}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhr{cursor:pointer}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhv{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhw{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height .25s ease-out;background-color:#f7f7f7;border-radius:4px}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhw dl{padding:10px 20px}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhw dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_galleryhq ._zs_galleryht ._zs_galleryhu ._zs_galleryhw dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_galleryhq ._zs_galleryht ._zs_galleryhu:hover ._zs_galleryhr{opacity:1}._zs_galleryhq ._zs_galleryht ._zs_galleryhu:hover ._zs_galleryhv{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryhq ._zs_galleryht ._zs_galleryhu:hover ._zs_galleryhw{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryhq ._zs_galleryhx{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color .25s ease-out}._zs_galleryhq ._zs_galleryhx ._zs_galleryhy{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_galleryhq ._zs_galleryhx ._zs_galleryhy ._zs_galleryhz{float:left;height:40px;margin-right:50px}._zs_galleryhq ._zs_galleryhx ._zs_galleryhy ._zs_galleryhz img{height:100%}._zs_galleryhq ._zs_galleryhx ._zs_galleryhy ._zs_galleryhA{float:left;height:40px;line-height:40px;font-size:14px}._zs_galleryhq ._zs_galleryhx ._zs_galleryhy ._zs_galleryhA ._zs_galleryhB{color:#4d7fff}._zs_galleryhq ._zs_galleryhx._zs_galleryhC{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),r.exports=a.View.extend({tmpl:function(e,l,r,a,t,s,i,_){if(r||(r=e),!t){var h={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+h[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(g,o)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return n[e]},y=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(y,d)}}if(!_){var p=/[\\'"]/g;_=function(e){return t(e).replace(p,"\\$&")}}i||(i=function(e,l,r,a){for(a=e[z];--a;)if(e[r=z+a]===l)return r;return e[r=z+e[z]++]=l,r});var z="",f="",u=e.width,x=e.list,c=e.fixed,v=e.styles,m=e.logo,w=e.navs,b=e.cur;f+='<div mxa="_zs_galleryb-:_" class="_zs_galleryhq"><div class="_zs_galleryht clearfix" style="width: '+a(u)+'px;"><div mxs="_zs_galleryb-:_" class="fl mr35"><a class="_zs_galleryhr _zs_galleryhs" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var q=0,k=x.length;q<k;q++){var $=x[q];f+='<div class="_zs_galleryhu fl mr35" mx-mouseover="'+l+"toggle({index:"+a(q)+",height:"+a($.height)+'})" mx-mouseout="'+l+"toggle({index:"+a(q)+',height:0})"><span mxa="_zs_galleryb-:a" class="_zs_galleryhr">'+a($.title)+'</span><span mxs="_zs_galleryb-:a" class="mc-iconfont ml5 _zs_galleryhv">&#xe692;</span><div class="_zs_galleryhw" style="height: '+a($.showHeight)+'px;">';for(var A=0,B=$.seconds,H=B.length;A<H;A++){var T=B[A];f+="<dl>",T.title&&(f+="<dt>"+a(T.title)+"</dt>"),f+=" ";for(var j=0,C=T.thirds,I=C.length;j<I;j++){var W=C[j];f+='<dd><a href="'+a(W.link)+'" target="_blank" rel="noopener noreferrer">'+a(W.name)+"</a></dd>"}f+="</dl>"}f+="</div></div>"}if(f+='</div><div class="_zs_galleryhx ',c&&(f+=" _zs_galleryhC "),f+='" ',c&&(f+=' style="'+a(v)+'" '),f+='><div class="_zs_galleryhy clearfix" style="width: '+a(u)+'px;"><div mxa="_zs_galleryb-:b" class="_zs_galleryhz"><img src="'+a(m)+'"/></div>',w.length>0){f+='<div mxa="_zs_galleryb-:c" class="_zs_galleryhA">';for(var X=0,E=w.length;X<E;X++){var R=w[X];f+='<a class="mr40 ',b==R.value&&(f+=" _zs_galleryhB "),f+='" href="javascript:;" mx-click="'+l+"to({nav:'"+i(r,R)+"'})\">"+a(R.text)+"</a>"}f+="</div>"}return f+="</div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=e.wrapper||"",a=t(r?"#"+r:window),s=e.cur||"",i=e.width||1200,_=e.navs||[],h=e.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",g=a.outerWidth();return+i>g-40&&(i=g-40),this.updater.set({wrapperId:r,width:i,navs:_,logo:h,cur:s}),this.__cp=a,l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){var e=this,l=e.updater.get(),r=s.products;r.forEach(function(e){var l=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(l+=30),l+=32*e.thirds.length}),e.height=l,e.showHeight=0}),e.updater.digest({list:r,fixed:!1});var a=e.__cp,i=a.outerWidth(),_=l.wrapperId,h=function(){t("#"+e.id+" ._zs_galleryhx");var l=t("#"+e.id+" ._zs_galleryht"),r=a.scrollTop(),s=l.outerHeight(),h=["width:"+i+"px","left: 0"];_?h.push("position: absolute","top: "+r+"px"):h.push("position: fixed","top: 0"),r>s?e.updater.digest({fixed:!0,styles:h.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",h),e.on("destroy",function(){a.off("scroll",h)})),h()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var l=e.params.index,r=e.params.height,t=this.updater.get("list");t[l].showHeight=r,this.updater.digest({list:t})}},"to<click>":function(e){var l=e.params.nav;this.updater.digest({cur:l.value}),t("#"+this.id).trigger({type:"navchange",nav:l})}})});