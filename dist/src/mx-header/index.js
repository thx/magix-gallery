define("mx-header/index",["magix","$","mx-header/data"],(l,e,r)=>{var a=l("magix"),g=l("$"),s=l("mx-header/data");a.applyStyle("_zs_galleryZ","._zs_gallerygl{position:relative;height:88px;background-color:#09122b}._zs_gallerygl ._zs_gallerygm{opacity:.8;color:#fff}._zs_gallerygl ._zs_gallerygn:hover{opacity:1;color:var(--color-brand)}._zs_gallerygl ._zs_gallerygo{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp{position:relative}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygm{cursor:pointer}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygq{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:transform var(--duration) ease-out}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height var(--duration) ease-out;background-color:#f5f5f5;border-radius:var(--border-radius)}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr dl{padding:10px 20px}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp ._zs_gallerygr dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp:hover ._zs_gallerygm{opacity:1}._zs_gallerygl ._zs_gallerygo ._zs_gallerygp:hover ._zs_gallerygq{transform:rotate(180deg)}._zs_gallerygl ._zs_gallerygs{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color var(--duration) ease-out}._zs_gallerygl ._zs_gallerygs ._zs_gallerygt{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_gallerygl ._zs_gallerygs ._zs_gallerygt ._zs_gallerygu{float:left;height:40px;margin-right:50px}._zs_gallerygl ._zs_gallerygs ._zs_gallerygt ._zs_gallerygu img{height:100%}._zs_gallerygl ._zs_gallerygs ._zs_gallerygt ._zs_gallerygv{float:left;height:40px;line-height:40px;font-size:14px}._zs_gallerygl ._zs_gallerygs ._zs_gallerygt ._zs_gallerygv ._zs_gallerygw{color:var(--color-brand)}._zs_gallerygl ._zs_gallerygs._zs_gallerygx{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),r.exports=a.View.extend({tmpl:function(l,e,r,a,g,s,t,i){if(r||(r=l),!g){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(l){return"&"+_[l]+";"};g=function(l){return""+(null==l?"":l)},a=function(l){return g(l).replace(o,n)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return d[l]},y=/[!')(*]/g;s=function(l){return encodeURIComponent(g(l)).replace(y,p)}}if(!i){var h=/[\\'"]/g;i=function(l){return g(l).replace(h,"\\$&")}}t||(t=function(l,e,r,a){for(a=l[z];--a;)if(l[r=z+a]===e)return r;return l[r=z+l[z]++]=e,r});var z="",c="",u=l.width,f=l.list,x=l.fixed,v=l.styles,m=l.logo,w=l.navs,b=l.cur;c+='<div mxa="_zs_gallerycH:_" class="_zs_gallerygl"><div class="_zs_gallerygo clearfix" style="width: '+a(u)+'px;"><div mxs="_zs_gallerycH:_" class="fl mr35"><a class="_zs_gallerygm _zs_gallerygn" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var k=0,H=f.length;k<H;k++){var $=f[k];c+='<div class="_zs_gallerygp fl mr35" mx-mouseover="'+e+"toggle({index:"+a(k)+",height:"+a($.height)+'})" mx-mouseout="'+e+"toggle({index:"+a(k)+',height:0})"><span mxa="_zs_gallerycH:a" class="_zs_gallerygm">'+a($.title)+'</span><span mxs="_zs_gallerycH:a" class="mc-iconfont ml5 _zs_gallerygq">&#xe692;</span><div class="_zs_gallerygr ',$.showHeight>0&&(c+=" mx-shadow "),c+='" style="height: '+a($.showHeight)+'px;">';for(var T=0,j=$.seconds,q=j.length;T<q;T++){var I=j[T];c+="<dl>",I.title&&(c+="<dt>"+a(I.title)+"</dt>"),c+=" ";for(var W=0,X=I.thirds,B=X.length;W<B;W++){var E=X[W];c+='<dd><a href="'+a(E.link)+'" target="_blank" rel="noopener noreferrer">'+a(E.name)+"</a></dd>"}c+="</dl>"}c+="</div></div>"}if(c+='</div><div class="_zs_gallerygs ',x&&(c+=" _zs_gallerygx "),c+='" ',x&&(c+=' style="'+a(v)+'" '),c+='><div class="_zs_gallerygt clearfix" style="width: '+a(u)+'px;"><div mxa="_zs_gallerycH:b" class="_zs_gallerygu"><img src="'+a(m)+'"/></div>',w.length>0){c+='<div mxa="_zs_gallerycH:c" class="_zs_gallerygv">';for(var R=0,S=w.length;R<S;R++){var V=w[R];c+='<a class="mr40 ',b==V.value&&(c+=" _zs_gallerygw "),c+='" href="javascript:;" mx-click="'+e+"to({nav:'"+t(r,V)+"'})\">"+a(V.text)+"</a>"}c+="</div>"}return c+="</div></div></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this.updater.altered(),r=l.wrapper||"",a=g(r?"#"+r:window),s=l.cur||"",t=l.width||1200,i=l.navs||[],_=l.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",o=a.outerWidth();return+t>o-40&&(t=o-40),this.updater.set({wrapperId:r,width:t,navs:i,logo:_,cur:s}),this.__cu=a,e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){var l=this,e=l.updater.get(),r=s.products;r.forEach(function(l){var e=20*l.seconds.length;l.seconds.forEach(function(l){l.title&&(e+=30),e+=32*l.thirds.length}),l.height=e,l.showHeight=0}),l.updater.digest({list:r,fixed:!1});var a=l.__cu,t=a.outerWidth(),i=e.wrapperId,_=function(){g("#"+l.id+" ._zs_gallerygs");var e=g("#"+l.id+" ._zs_gallerygo"),r=a.scrollTop(),s=e.outerHeight(),_=["width:"+t+"px","left: 0"];i?_.push("position: absolute","top: "+r+"px"):_.push("position: fixed","top: 0"),r>s?l.updater.digest({fixed:!0,styles:_.join(";")}):l.updater.digest({fixed:!1})};l.$init||(l.$init=1,a.on("scroll",_),l.on("destroy",function(){a.off("scroll",_)})),_()},"toggle<mouseover,mouseout>":function(l){if(!a.inside(l.relatedTarget,l.eventTarget)){var e=l.params.index,r=l.params.height,g=this.updater.get("list");g[e].showHeight=r,this.updater.digest({list:g})}},"to<click>":function(l){var e=l.params.nav;this.updater.digest({cur:e.value}),g("#"+this.id).trigger({type:"navchange",nav:e})}})});