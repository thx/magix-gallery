define("mx-header/index",["magix","$","mx-header/data","mx-dialog/index"],(l,g,r)=>{var a=l("magix"),e=l("$"),s=l("mx-header/data"),_=l("mx-dialog/index");a.applyStyle("_zs_galleryY","._zs_gallerygh{height:50px;margin:0 auto;line-height:50px}._zs_gallerygh ._zs_gallerygi,._zs_gallerygh ._zs_gallerygj{opacity:.5;color:#333;cursor:pointer}._zs_gallerygh ._zs_gallerygi:hover{opacity:1;color:#333}._zs_gallerygh ._zs_gallerygk{opacity:.5;display:inline-block;position:relative;top:4px;right:0;font-size:20px;transition:transform var(--duration) ease-out;color:#333}._zs_gallerygh ._zs_gallerygl{top:38px;left:50%;width:160px;margin-left:-80px}._zs_gallerygh ._zs_gallerygl dl{padding:10px 20px}._zs_gallerygh ._zs_gallerygl dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygh ._zs_gallerygl dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygh ._zs_gallerygm{float:left;position:relative;margin-right:35px}._zs_gallerygh ._zs_gallerygm:hover ._zs_gallerygi{opacity:1}._zs_gallerygh ._zs_gallerygm:hover ._zs_gallerygk{opacity:1;transform:rotate(180deg)}._zs_gallerygh ._zs_gallerygm:hover ._zs_gallerygl{opacity:1;transform:scale(1)}._zs_gallerygh ._zs_gallerygm:last-child{margin-right:0}._zs_gallerygn{position:absolute;z-index:10;width:100%;top:50px;left:0}._zs_gallerygn ._zs_gallerygo img{display:inline-block;height:40px}._zs_gallerygn ._zs_gallerygp{margin:0 auto;background-color:#fff}._zs_gallerygn ._zs_gallerygp ._zs_gallerygq{float:left;height:50px;line-height:50px}._zs_gallerygn ._zs_gallerygp ._zs_gallerygr{display:table;float:right;height:50px}._zs_gallerygn ._zs_gallerygp ._zs_gallerygr ._zs_gallerygs{display:table-cell;vertical-align:middle}._zs_gallerygn ._zs_gallerygt{position:relative;padding:0 10px;margin:0 10px;font-size:14px;border-bottom:2px solid transparent}._zs_gallerygn ._zs_gallerygt ._zs_gallerygu{opacity:.5;position:absolute;top:15px;right:-6px;width:20px;height:20px;text-align:center;line-height:20px;font-size:20px;transition:transform var(--duration) ease-out;color:#666}._zs_gallerygn ._zs_gallerygt ._zs_gallerygv{top:40px;left:50%;width:100px;margin-left:-50px;text-align:center}._zs_gallerygn ._zs_gallerygt ._zs_gallerygw{display:block;padding:8px 0;color:#999}._zs_gallerygn ._zs_gallerygt ._zs_gallerygw:hover{color:#333}._zs_gallerygn ._zs_gallerygt ._zs_gallerygw._zs_gallerygx{color:#333;background-color:var(--color-brand-opacity);color:var(--color-brand)}._zs_gallerygn ._zs_gallerygt:hover ._zs_gallerygu{opacity:1;transform:rotate(180deg)}._zs_gallerygn ._zs_gallerygt:hover ._zs_gallerygv{opacity:1;transform:scale(1)}._zs_gallerygn._zs_gallerygy{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}._zs_gallerygz{position:relative}._zs_gallerygA{background-color:#09122b}._zs_gallerygA ._zs_gallerygh{padding-left:40px;padding-right:40px}._zs_gallerygA ._zs_gallerygh ._zs_gallerygB{float:left}._zs_gallerygA ._zs_gallerygh ._zs_gallerygk,._zs_gallerygA ._zs_gallerygh ._zs_gallerygi,._zs_gallerygA ._zs_gallerygh ._zs_gallerygj{opacity:.7;color:#fff}._zs_gallerygA ._zs_gallerygn{transition:background-color var(--duration) ease-out}._zs_gallerygA ._zs_gallerygn ._zs_gallerygp{padding:15px 40px;border-radius:60px}._zs_gallerygA ._zs_gallerygn ._zs_gallerygt{padding:0 16px}._zs_gallerygA ._zs_gallerygn ._zs_gallerygt ._zs_gallerygu{right:-2px}._zs_gallerygA ._zs_gallerygn ._zs_gallerygt._zs_gallerygC ._zs_gallerygD{color:var(--color-brand)}._zs_gallerygE{background-color:#fff}._zs_gallerygE ._zs_gallerygh ._zs_gallerygB{float:right}._zs_gallerygE ._zs_gallerygn{box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}._zs_gallerygE ._zs_gallerygn ._zs_gallerygt ._zs_gallerygD{opacity:.5}._zs_gallerygE ._zs_gallerygn ._zs_gallerygt:hover ._zs_gallerygD{opacity:1;color:#333}._zs_gallerygE ._zs_gallerygn ._zs_gallerygt._zs_gallerygC{border-bottom:2px solid var(--color-brand)}._zs_gallerygE ._zs_gallerygn ._zs_gallerygt._zs_gallerygC ._zs_gallerygD{opacity:1;color:#333;font-weight:700}"),a.applyStyle("_zs_galleryZ","._zs_gallerygF,._zs_gallerygG,._zs_gallerygH,._zs_gallerygI,._zs_gallerygJ,._zs_gallerygK,._zs_gallerygL,._zs_gallerygM,._zs_gallerygN,._zs_gallerygO,._zs_gallerygP,._zs_gallerygQ{opacity:0;transition:transform .15s,opacity .15s;transform:scale(0)}._zs_gallerygG,._zs_gallerygN{transform-origin:0 0}._zs_gallerygH,._zs_gallerygK{transform-origin:100% 0}._zs_gallerygF{transform-origin:50% 0}._zs_gallerygL,._zs_gallerygP{transform-origin:0 100%}._zs_gallerygI,._zs_gallerygQ{transform-origin:100% 100%}._zs_gallerygO{transform-origin:50% 100%}._zs_gallerygJ{transform-origin:100% 50%}._zs_gallerygM{transform-origin:0 50%}._zs_gallerygR{opacity:1;transform:scale(1)}._zs_gallerygS{display:none}._zs_gallerygT,._zs_gallerygU{position:absolute;z-index:999999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerygT{background-color:#fff;color:#333}._zs_gallerygT ._zs_gallerygV{padding:10px;word-break:break-all}._zs_gallerygU{background-color:rgba(33,33,33,.72);color:#fff}._zs_gallerygU ._zs_gallerygV{padding:4px 10px}"),r.exports=a.View.extend({tmpl:function(l,g,r,a,e,s,_,i){if(r||(r=l),!e){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(l){return"&"+t[l]+";"};e=function(l){return""+(null==l?"":l)},a=function(l){return e(l).replace(o,n)}}if(!s){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return y[l]},p=/[!')(*]/g;s=function(l){return encodeURIComponent(e(l)).replace(p,z)}}if(!i){var d=/[\\'"]/g;i=function(l){return e(l).replace(d,"\\$&")}}_||(_=function(l,g,r,a){for(a=l[c];--a;)if(l[r=c+a]===g)return r;return l[r=c+l[c]++]=g,r});var c="",h="",f=l.dark,x=l.height,u=l.links,v=l.width,m=l.login,b=l.user,w=l.logoutUrl,k=l.list,A=l.fixed,K=l.styles,E=l.logo,j=l.navs,V=l.parent,H=l.valueKey,T=l.linkKey,U=l.textKey,C=l.child,S=l.rightView;if(h+='<div class="_zs_gallerygz ',h+=f?" _zs_gallerygA ":" _zs_gallerygE ",h+='" style="height: '+a(x)+'px;">',u){h+='<div class="_zs_gallerygh" style="width: '+a(v)+'px;"><div mxa="_zs_galleryc1:_" class="_zs_gallerygB clearfix">',m&&(h+='<div mxa="_zs_galleryc1:a" class="_zs_gallerygm">',h+=b?'<span mxa="_zs_galleryc1:b" class="_zs_gallerygj">你好，'+a(b)+'，</span><a class="color-brand" href="'+a(w)+'">退出</a>':'<span mxs="_zs_galleryc1:_" class="_zs_gallerygj">亲，请</span><a mxs="_zs_galleryc1:a" class="color-brand" href="javascript:;" mx-click="'+g+'showLogin()">登陆</a>',h+="</div>"),h+='<div mxs="_zs_galleryc1:b" class="_zs_gallerygm"><a class="_zs_gallerygi" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var B=0,D=k.length;B<D;B++){var F=k[B];h+='<div mxa="_zs_galleryc1:c" class="_zs_gallerygm"><span mxa="_zs_galleryc1:d" class="_zs_gallerygi">'+a(F.title)+'</span><i mxs="_zs_galleryc1:c" class="_zs_gallerygk mc-iconfont">&#xe692;</i><div mxa="_zs_galleryc1:e" class="_zs_gallerygT _zs_gallerygF mx-shadow _zs_gallerygl">';for(var I=0,L=F.seconds,M=L.length;I<M;I++){var $=L[I];h+="<dl>",$.title&&(h+="<dt>"+a($.title)+"</dt>"),h+=" ";for(var X=0,Y=$.thirds,q=Y.length;X<q;X++){var G=Y[X];h+='<dd><a href="'+a(G.link)+'" target="_blank" rel="noopener noreferrer">'+a(G.name)+"</a></dd>"}h+="</dl>"}h+="</div></div>"}h+="</div></div>"}if(h+='<div class="_zs_gallerygn ',A&&(h+=" _zs_gallerygy "),h+='" style="'+a(K)+'"><div class="_zs_gallerygp clearfix" style="width: '+a(v)+'px;"><div mxa="_zs_galleryc1:f" class="_zs_gallerygq _zs_gallerygo"><img src="'+a(E)+'"/></div>',j.length>0){h+=" ";for(var O=0,Q=j.length;O<Q;O++){var W=j[O];if(h+='<div class="_zs_gallerygq _zs_gallerygt ',V==W[H]&&(h+=" _zs_gallerygC "),h+='"><a data-nav="'+a(W[H])+'" class="_zs_gallerygD" ',W[T]?h+=' href="'+a(W[T])+'" target="_blank" rel="noopener noreferrer" ':(h+=' href="javascript:;" ',W.subs&&W.subs.length||(h+=' mx-click="'+g+"to({nav:'"+_(r,W)+"'})\" "),h+=" "),h+=">"+a(W[U])+"</a>",W.subs&&W.subs.length){h+='<i mxs="_zs_galleryc1:d" class="_zs_gallerygu mc-iconfont">&#xe692;</i><div mxa="_zs_galleryc1:g" class="_zs_gallerygT _zs_gallerygF mx-shadow _zs_gallerygv">';for(var J=0,N=W.subs,P=N.length;J<P;J++){var R=N[J];h+='<a data-nav="'+a(R[H])+'" class="_zs_gallerygw ',C==R[H]&&(h+=" _zs_gallerygx "),h+='" ',R[T]?h+=' href="'+a(R[T])+'" target="_blank" rel="noopener noreferrer" ':h+=' mx-click="'+g+"to({nav:'"+_(r,W)+"',sub:'"+_(r,R)+'\'})" href="javascript:;" ',h+=">"+a(R[U])+"</a>"}h+="</div>"}h+="</div>"}h+=" "}return h+=" ",S&&(h+='<div mxa="_zs_galleryc1:h" class="_zs_gallerygr"><div class="_zs_gallerygs" mx-view="'+a(S)+'"></div></div>'),h+="</div></div></div>"},mixins:[_],init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var g,r=this.updater.altered(),a=l.wrapper||"",s=e(a?"#"+a:window),_=l.width||1200,i=l.navs||[],t=l.dark+""!="false",o=l.links+""!="false",n=l.login+""!="false";t?(o=!0,n=!1,g=88):g=100,o||(g-=50);var y=s.outerWidth();+_>y-40&&(_=y-40);var z=l.valueKey||"value",p=l.textKey||"text",d=l.linkKey||"link",c=l.cur||"",h="",f="";return i.forEach(function(l){l[z]==c&&(h=l[z],f=""),l.subs&&l.subs.length&&l.subs.forEach(function(g){g[z]==c&&(h=l[z],f=g[z])})}),this.updater.set({wrapperId:a,width:_,height:g,navs:i,valueKey:z,textKey:p,linkKey:d,parent:h,child:f,dark:t,login:n,loginView:l.loginView||"",user:l.user||"",logoutUrl:l.logoutUrl||"",links:o,styles:"top: "+(o?50:0)+"px;",logo:l.logo||"//img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png",ceiling:l.ceiling+""!="false",rightView:l.rightView||""}),this.__cx=s,r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var l=this;l.updater.digest({list:s.products,fixed:!1});var g=l.updater.get(),r=g.wrapperId,a=g.links,_=g.ceiling,i=l.__cx,t=i.outerWidth(),o=function(){var g=e("#"+l.id+" ._zs_gallerygh"),s=0;g.length>0&&(s=g.outerHeight());var _=i.scrollTop(),o=["width:"+t+"px","left: 0"];r?o.push("position: absolute","top: "+_+"px"):o.push("position: fixed","top: 0"),_>s?l.updater.digest({fixed:!0,styles:o.join(";")}):l.updater.digest({fixed:!1,styles:"top: "+(a?50:0)+"px;"})};!l.$init&&_&&(l.$init=1,i.on("scroll",o),l.on("destroy",function(){i.off("scroll",o)})),o()},"to<click>":function(l){var g=l.params.nav||{},r=l.params.sub||{},a=this.updater.get().valueKey;this.updater.digest({parent:g[a]||"",child:r[a]||""});var s={};s=e.isEmptyObject(r)?g:r,e("#"+this.id).trigger({type:"navchange",nav:s})},"showLogin<click>":function(l){var g=this.updater.get().loginView;this.mxLoginView(g)}})});