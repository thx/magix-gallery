define("mx-header/examples/all",["magix","$","../index"],(e,r,a)=>{e("../index");var n=e("magix");e("$");n.applyStyle("_zs_galleryY","._zs_gallerygi{height:1200px;background-color:var(--color-bg)}._zs_gallerygi ._zs_gallerygj{width:1000px;padding-top:220px;margin:auto;font-size:20px;text-align:center}._zs_gallerygk{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygk ._zs_gallerygj{height:800px}"),a.exports=n.View.extend({tmpl:function(e,r,a,n,t,l,g,i){if(a||(a=e),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+c[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(o,u)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},s=/[!')(*]/g;l=function(e){return encodeURIComponent(t(e)).replace(s,d)}}if(!i){var v=/[\\'"]/g;i=function(e){return t(e).replace(v,"\\$&")}}g||(g=function(e,r,a,n){for(n=e[p];--n;)if(e[a=p+n]===r)return a;return e[a=p+e[p]++]=r,a});var p="",_="",f=e.navs,m=e.cur,h=e.curText;return _+='<div mxv="navs" mx-navchange="'+r+'change()" mx-view="mx-header/index?navs='+g(a,f)+"&cur="+l(m)+'&logo=%2F%2Fimg.alicdn.com%2Ftfs%2FTB1Z0ggLPTpK1RjSZKPXXa3UpXa-534-98.png"></div><div mxa="_zs_gallerycG:_" class="_zs_gallerygi"><div mxa="_zs_gallerycG:a" class="_zs_gallerygj">',_+=m?" 当前导航："+n(h)+"（"+n(m)+"） ":" 点击导航切换区块内容 ",_+="</div></div>"},render:function(){this.updater.digest({navs:[{value:1,text:"营销中台"},{value:2,text:"创意中台"}],cur:"",curText:""})},"change<navchange>":function(e){var r=e.nav;this.updater.digest({cur:r.value,curText:r.text})}})});