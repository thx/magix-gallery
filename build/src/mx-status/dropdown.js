define("mx-status/dropdown",["magix","mx-status/base"],(l,e,r)=>{var a=l("magix"),_=l("mx-status/base");a.applyStyle("_zs_galleryau",'._zs_gallerylt{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-status/dropdown"],[mx-view*="mx-status/index"]{display:inline-block}._zs_gallerylu{position:relative}._zs_gallerylu ._zs_gallerylv>*{font-size:20px;line-height:25px}._zs_gallerylu ._zs_gallerylw{position:absolute;top:-10px;left:-10px;z-index:10;background-color:#fff;border-radius:4px;text-align:left;word-wrap:break-word;overflow:hidden;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylu ._zs_gallerylw ._zs_gallerylv{float:left}._zs_gallerylu ._zs_gallerylw ._zs_gallerylx{float:left;margin-left:8px}._zs_gallerylu ._zs_gallerylw ._zs_galleryly{min-width:140px;height:45px;line-height:25px;padding:10px;cursor:pointer}._zs_gallerylu ._zs_gallerylw ._zs_galleryly ._zs_gallerylz{display:none;float:right;color:#999;font-weight:700;font-size:20px;line-height:25px}._zs_gallerylu ._zs_gallerylw ._zs_galleryly:hover{background-color:#fafafa}._zs_gallerylu ._zs_gallerylw ._zs_galleryly._zs_gallerylA{cursor:default}._zs_gallerylu ._zs_gallerylw ._zs_galleryly._zs_gallerylA ._zs_gallerylz{display:block}._zs_gallerylu ._zs_gallerylw ._zs_gallerylB{min-width:140px;height:45px;line-height:25px;padding:10px}._zs_gallerylu ._zs_gallerylw ._zs_gallerylC{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_gallerylu ._zs_gallerylw._zs_gallerylD{top:0;left:0}._zs_gallerylu ._zs_gallerylE{position:relative;width:36px;height:25px;line-height:25px}._zs_gallerylu ._zs_gallerylE ._zs_gallerylF{position:absolute;top:10.5px;left:31px;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_gallerylu ._zs_gallerylG{position:relative;width:110px}._zs_gallerylu ._zs_gallerylG ._zs_gallerylH{width:100%}._zs_gallerylu ._zs_gallerylG ._zs_gallerylH._zs_gallerylI,._zs_gallerylu ._zs_gallerylG ._zs_gallerylH._zs_gallerylI:hover{border-color:#e6e6e6}._zs_gallerylu ._zs_gallerylG ._zs_gallerylF{position:absolute;top:50%;right:0;width:28px;height:28px;margin-top:-14px;line-height:28px;text-align:center;color:#ccc;font-size:20px}._zs_gallerylu ._zs_gallerylJ{height:0;border-top:1px solid #e6e6e6}'),r.exports=_.extend({tmpl:function(l,e,r,a,_,s,t,o){if(r||(r=l),!_){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,y=function(l){return"&"+g[l]+";"};_=function(l){return""+(null==l?"":l)},a=function(l){return _(l).replace(i,y)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return n[l]},p=/[!')(*]/g;s=function(l){return encodeURIComponent(_(l)).replace(p,z)}}if(!o){var x=/[\\'"]/g;o=function(l){return _(l).replace(x,"\\$&")}}t||(t=function(l,e,r,a){for(a=l[u];--a;)if(l[r=u+a]===e)return r;return l[r=u+l[u]++]=e,r});var u="",d="",c=l.showInfo,f=l.info,h=l.cur,w=l.show,m=l.opers;if(d+='<div mxa="_zs_gallerydl:_" class="_zs_gallerylu" mx-mouseout="'+e+'out()"><div mxa="_zs_gallerydl:a" class="_zs_gallerylG" mx-mouseover="'+e+'over()">',d+=c?'<span class="input _zs_gallerylH _zs_gallerylI" style="color: '+a(f.color)+';">'+a(f.text)+"</span>":'<span class="input _zs_gallerylH" style="color: '+a(h.color)+';">'+a(h.text)+'</span><i mxs="_zs_gallerydl:_" class="mc-iconfont _zs_gallerylF">&#xe692;</i>',d+="</div>",w&&!c&&m.length>0){d+='<ul mxa="_zs_gallerydl:b" class="_zs_gallerylw _zs_gallerylD">';for(var v=0,b=m.length;v<b;v++){var k=m[v];d+='<li class="_zs_galleryly clearfix ',k.value==h.value&&(d+=" _zs_gallerylA "),d+='" mx-click="'+e+"select({item:'"+t(r,k)+'\'})"><span class="_zs_gallerylv" style="color: '+a(k.color)+';">'+_(k.icon)+'</span><span mxa="_zs_gallerydl:c" class="_zs_gallerylx">'+a(k.text)+'</span><i mxs="_zs_gallerydl:a" class="mc-iconfont _zs_gallerylz">&#xe65d;</i></li>'}d+="</ul>"}return d+="</div>"}})});