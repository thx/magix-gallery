define("mx-header/index",["magix","$","mx-header/data"],(e,l,r)=>{var a=e("magix"),g=e("$"),t=e("mx-header/data");a.applyStyle("_zs_galleryY","._zs_gallerygh{position:relative;height:88px;background-color:#09122b}._zs_gallerygh ._zs_gallerygi{opacity:.8;color:#fff}._zs_gallerygh ._zs_gallerygj:hover{opacity:1;color:var(--color-brand)}._zs_gallerygh ._zs_gallerygk{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl{position:relative}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygi{cursor:pointer}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygm{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform var(--duration) ease-out;transition:transform var(--duration) ease-out;transition:transform var(--duration) ease-out,-webkit-transform var(--duration) ease-out}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygn{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height var(--duration) ease-out;background-color:#f5f5f5;border-radius:var(--border-radius)}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygn dl{padding:10px 20px}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygn dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl ._zs_gallerygn dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl:hover ._zs_gallerygi{opacity:1}._zs_gallerygh ._zs_gallerygk ._zs_gallerygl:hover ._zs_gallerygm{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerygh ._zs_gallerygo{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color var(--duration) ease-out}._zs_gallerygh ._zs_gallerygo ._zs_gallerygp{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_gallerygh ._zs_gallerygo ._zs_gallerygp ._zs_gallerygq{float:left;height:40px;margin-right:50px}._zs_gallerygh ._zs_gallerygo ._zs_gallerygp ._zs_gallerygq img{height:100%}._zs_gallerygh ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr{float:left;height:40px;line-height:40px;font-size:14px}._zs_gallerygh ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr ._zs_gallerygs{color:var(--color-brand)}._zs_gallerygh ._zs_gallerygo._zs_gallerygt{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),r.exports=a.View.extend({tmpl:function(e,l,r,a,g,t,s,i){if(r||(r=e),!g){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,n=function(e){return"&"+o[e]+";"};g=function(e){return""+(null==e?"":e)},a=function(e){return g(e).replace(_,n)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(e){return d[e]},p=/[!')(*]/g;t=function(e){return encodeURIComponent(g(e)).replace(p,h)}}if(!i){var y=/[\\'"]/g;i=function(e){return g(e).replace(y,"\\$&")}}s||(s=function(e,l,r,a){for(a=e[z];--a;)if(e[r=z+a]===l)return r;return e[r=z+e[z]++]=l,r});var z="",c="",u=e.width,f=e.list,v=e.fixed,x=e.styles,m=e.logo,w=e.navs,k=e.cur;c+='<div mxa="_zs_gallerycv:_" class="_zs_gallerygh"><div class="_zs_gallerygk clearfix" style="width: '+a(u)+'px;"><div mxs="_zs_gallerycv:_" class="fl mr35"><a class="_zs_gallerygi _zs_gallerygj" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var b=0,j=f.length;b<j;b++){var H=f[b];c+='<div class="_zs_gallerygl fl mr35" mx-mouseover="'+l+"toggle({index:"+a(b)+",height:"+a(H.height)+'})" mx-mouseout="'+l+"toggle({index:"+a(b)+',height:0})"><span mxa="_zs_gallerycv:a" class="_zs_gallerygi">'+a(H.title)+'</span><span mxs="_zs_gallerycv:a" class="mc-iconfont ml5 _zs_gallerygm">&#xe692;</span><div class="_zs_gallerygn ',H.showHeight>0&&(c+=" mx-shadow "),c+='" style="height: '+a(H.showHeight)+'px;">';for(var $=0,T=H.seconds,q=T.length;$<q;$++){var I=T[$];c+="<dl>",I.title&&(c+="<dt>"+a(I.title)+"</dt>"),c+=" ";for(var W=0,X=I.thirds,B=X.length;W<B;W++){var E=X[W];c+='<dd><a href="'+a(E.link)+'" target="_blank" rel="noopener noreferrer">'+a(E.name)+"</a></dd>"}c+="</dl>"}c+="</div></div>"}if(c+='</div><div class="_zs_gallerygo ',v&&(c+=" _zs_gallerygt "),c+='" ',v&&(c+=' style="'+a(x)+'" '),c+='><div class="_zs_gallerygp clearfix" style="width: '+a(u)+'px;"><div mxa="_zs_gallerycv:b" class="_zs_gallerygq"><img src="'+a(m)+'"/></div>',w.length>0){c+='<div mxa="_zs_gallerycv:c" class="_zs_gallerygr">';for(var R=0,S=w.length;R<S;R++){var V=w[R];c+='<a class="mr40 ',k==V.value&&(c+=" _zs_gallerygs "),c+='" href="javascript:;" mx-click="'+l+"to({nav:'"+s(r,V)+"'})\">"+a(V.text)+"</a>"}c+="</div>"}return c+="</div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=e.wrapper||"",a=g(r?"#"+r:window),t=e.cur||"",s=e.width||1200,i=e.navs||[],o=e.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",_=a.outerWidth();return+s>_-40&&(s=_-40),this.updater.set({wrapperId:r,width:s,navs:i,logo:o,cur:t}),this.__cu=a,l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){var e=this,l=e.updater.get(),r=t.products;r.forEach(function(e){var l=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(l+=30),l+=32*e.thirds.length}),e.height=l,e.showHeight=0}),e.updater.digest({list:r,fixed:!1});var a=e.__cu,s=a.outerWidth(),i=l.wrapperId,o=function(){g("#"+e.id+" ._zs_gallerygo");var l=g("#"+e.id+" ._zs_gallerygk"),r=a.scrollTop(),t=l.outerHeight(),o=["width:"+s+"px","left: 0"];i?o.push("position: absolute","top: "+r+"px"):o.push("position: fixed","top: 0"),r>t?e.updater.digest({fixed:!0,styles:o.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",o),e.on("destroy",function(){a.off("scroll",o)})),o()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var l=e.params.index,r=e.params.height,g=this.updater.get("list");g[l].showHeight=r,this.updater.digest({list:g})}},"to<click>":function(e){var l=e.params.nav;this.updater.digest({cur:l.value}),g("#"+this.id).trigger({type:"navchange",nav:l})}})});