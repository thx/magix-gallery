define("mx-status/dropdown",["magix","mx-status/base"],(l,e,r)=>{var a=l("magix"),s=l("mx-status/base");a.applyStyle("_zs_galleryav",'._zs_galleryjR{position:relative}._zs_galleryjR ._zs_galleryjS>*{font-size:20px;line-height:var(--input-small-height)}._zs_galleryjR ._zs_galleryjT{display:block;min-width:calc(var(--font-size)*6 + 60px);max-width:none;top:-11px;left:-11px}._zs_galleryjR ._zs_galleryjT ._zs_galleryjU,._zs_galleryjR ._zs_galleryjT ._zs_galleryjS,._zs_galleryjR ._zs_galleryjT ._zs_galleryjV{float:left;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjR ._zs_galleryjT ._zs_galleryjV{margin-left:8px}._zs_galleryjR ._zs_galleryjT ._zs_galleryjU{float:right;color:#999;font-weight:700;font-size:20px}._zs_galleryjR ._zs_galleryjT ._zs_galleryjW{height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px;cursor:pointer}._zs_galleryjR ._zs_galleryjT ._zs_galleryjW ._zs_galleryjU{display:none}._zs_galleryjR ._zs_galleryjT ._zs_galleryjW:hover{background-color:var(--color-bg-hover)}._zs_galleryjR ._zs_galleryjT ._zs_galleryjW._zs_galleryjX{cursor:default}._zs_galleryjR ._zs_galleryjT ._zs_galleryjW._zs_galleryjX ._zs_galleryjU{display:block}._zs_galleryjR ._zs_galleryjT ._zs_galleryjY{min-width:140px;height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px}._zs_galleryjR ._zs_galleryjT ._zs_galleryjZ{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_galleryjR ._zs_galleryjT._zs_galleryk_{top:0;left:0}._zs_galleryjR ._zs_galleryka{position:relative;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjR ._zs_galleryka ._zs_gallerykb{position:absolute;top:calc((var(--input-small-height) - 4px)/2);right:0;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_galleryjR ._zs_gallerykc{height:0;border-top:1px solid var(--color-border)}[mx-view*="mx-status/index"]{width:36px;height:var(--input-small-height);min-width:0}[mx-view*="mx-status/dropdown"]:hover ._zs_gallerykd{cursor:not-allowed;border-color:var(--border-highlight)}'),r.exports=s.extend({tmpl:function(l,e,r,a,s,_,t,i){if(r||(r=l),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(l){return"&"+g[l]+";"};s=function(l){return""+(null==l?"":l)},a=function(l){return s(l).replace(o,n)}}if(!_){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return y[l]},h=/[!')(*]/g;_=function(l){return encodeURIComponent(s(l)).replace(h,z)}}if(!i){var p=/[\\'"]/g;i=function(l){return s(l).replace(p,"\\$&")}}t||(t=function(l,e,r,a){for(a=l[c];--a;)if(l[r=c+a]===e)return r;return l[r=c+l[c]++]=e,r});var c="",j="",x=l.showInfo,u=l.info,d=l.cur,m=l.show,v=l.opers;if(j+='<div mxa="_zs_galleryec:_" class="_zs_galleryjR" mx-mouseout="'+e+'out()">',x)j+='<div mxa="_zs_galleryec:a" class="mx-trigger _zs_gallerykd"><span style="color: '+a(u.color)+';">'+a(u.text)+"</span></div>";else{if(j+='<div mxa="_zs_galleryec:b" class="mx-trigger" mx-mouseover="'+e+'over()"><span style="color: '+a(d.color)+';">'+a(d.text)+'</span><i mxs="_zs_galleryec:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</i></div>',m&&v.length>0){j+='<ul mxa="_zs_galleryec:c" class="mx-output _zs_galleryjT _zs_galleryk_">';for(var f=0,R=v.length;f<R;f++){var w=v[f];j+='<li class="_zs_galleryjW clearfix ',w.value==d.value&&(j+=" _zs_galleryjX "),j+='" mx-click="'+e+"select({item:'"+t(r,w)+'\'})"><span class="_zs_galleryjS" style="color: '+a(w.color)+';">'+s(w.icon)+'</span><span mxa="_zs_galleryec:d" class="_zs_galleryjV">'+a(w.text)+'</span><i mxs="_zs_galleryec:a" class="mc-iconfont _zs_galleryjU">&#xe65d;</i></li>'}j+="</ul>"}j+=" "}return j+="</div>"}})});