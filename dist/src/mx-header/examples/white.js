define("mx-header/examples/white",["magix","$","../index"],(e,n,r)=>{e("../index");var i=e("magix"),l=i.Router;e("$");i.applyStyle("_zs_galleryX","._zs_gallerygd{height:1200px;background-color:var(--color-bg)}._zs_gallerygd ._zs_galleryge{width:1000px;padding-top:100px;margin:auto}._zs_gallerygf{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygf ._zs_galleryge{height:800px;padding-top:100px;text-align:center;font-size:14px}._zs_gallerygg{margin-left:15px;border:1px solid var(--color-border)}"),r.exports=i.View.extend({tmpl:function(e,n,r,i,l,a,t,g){if(r||(r=e),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(u,c)}}if(!a){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return s[e]},d=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(d,v)}}if(!g){var h=/[\\'"]/g;g=function(e){return l(e).replace(h,"\\$&")}}t||(t=function(e,n,r,i){for(i=e[x];--i;)if(e[r=x+i]===n)return r;return e[r=x+e[x]++]=n,r});var x="",p="",f=e.navs,_=e.cur,w=e.login,m=e.user,y=e.rightView,b=e.rightCeilingShow,z=e.loginView,k=e.logoutUrl,V=e.links,C=e.ceiling,S=e.map;return p+='<div mxv="navs" mx-navchange="'+n+'change()" mx-view="mx-header/index?dark=false&navs='+t(r,f)+"&cur="+a(_)+"&login="+a(w)+"&user="+a(m)+"&rightView="+a(y)+"&rightCeilingShow="+a(b)+"&loginView="+a(z)+"&logoutUrl="+a(k)+"&links="+a(V)+"&ceiling="+a(C)+'"></div><div mxa="_zs_galleryc6:_" class="_zs_gallerygd"><div mxa="_zs_galleryc6:a" class="_zs_galleryge"><div mxa="_zs_galleryc6:b" class="fontsize-20 mb40">当前导航：'+i(S[_])+"（"+i(_)+'）</div><pre>\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    right-view="'+i(y)+'"\n    right-ceiling-show="'+i(b)+'"\n    links="'+i(V)+'"\n    ceiling="'+i(C)+'"\n    login="'+i(w)+'"\n    user="'+i(m)+'"\n    login-view="'+i(z)+'"\n    logout-url="'+i(k)+'"\n    mx-navchange="change()"/&gt;\n        </pre></div></div>'},render:function(){var e=[{value:1,text:"本页打开1"},{value:2,text:"支持二级",subs:[{value:21,text:"本页打开"},{value:22,text:"外链打开",link:"https://www.taobao.com/"}]},{value:3,text:"本页打开2",tag:"NEW"},{value:4,text:"外链打开",link:"https://www.taobao.com/"}],n={};e.forEach(function(e){n[e.value]=e.text,(e.subs||[]).forEach(function(r){n[r.value]=e.text+"_"+r.text})});var r=l.parse().params;this.updater.digest({navs:e,map:n,cur:r.cur||e[0].value,login:r.login||"",user:r.user||"",loginView:r.loginView||"",logoutUrl:r.logoutUrl||"",rightView:r.rightView||"",links:r.links||!0,ceiling:r.ceiling||!0,rightCeilingShow:r.rightCeilingShow||!1}),this.observeLocation(["cur"])},"change<navchange>":function(e){l.to({cur:e.nav.value})}})});