define("mx-header/examples/all",["magix","$","../index"],(e,r,a)=>{e("../index");var n=e("magix");e("$");n.applyStyle("_zs_galleryX","._zs_gallerygd{height:1200px;background-color:var(--color-bg)}._zs_gallerygd ._zs_galleryge{width:1000px;padding-top:100px;margin:auto}._zs_gallerygf{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygf ._zs_galleryge{height:800px;padding-top:100px;text-align:center;font-size:14px}._zs_gallerygg{margin-left:15px;border:1px solid var(--color-border)}"),a.exports=n.View.extend({tmpl:function(e,r,a,n,t,l,g,i){if(a||(a=e),!t){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(u,c)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},s=/[!')(*]/g;l=function(e){return encodeURIComponent(t(e)).replace(s,x)}}if(!i){var v=/[\\'"]/g;i=function(e){return t(e).replace(v,"\\$&")}}g||(g=function(e,r,a,n){for(n=e[p];--n;)if(e[a=p+n]===r)return a;return e[a=p+e[p]++]=r,a});var p="",_="",f=e.navs,h=e.cur,m=e.curText;return _+='<div mxv="navs" mx-navchange="'+r+'change()" mx-view="mx-header/index?navs='+g(a,f)+"&cur="+l(h)+'"></div><div mxa="_zs_gallerycW:_" class="_zs_gallerygd"><div mxa="_zs_gallerycW:a" class="_zs_galleryge">',_+=h?" 当前导航："+n(m)+"（"+n(h)+"） ":" 点击导航切换区块内容 ",_+="</div></div>"},render:function(){this.updater.digest({navs:[{value:1,text:"营销中台",subs:[{value:21,text:"标准推广"},{value:22,text:"智能推广"}]},{value:2,text:"创意中台"}],cur:"",curText:""})},"change<navchange>":function(e){var r=e.nav;this.updater.digest({cur:r.value,curText:r.text})}})});