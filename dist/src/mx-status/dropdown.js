define("mx-status/dropdown",["magix","mx-status/base"],(l,e,r)=>{var a=l("magix"),s=l("mx-status/base");a.applyStyle("_zs_galleryaw",'._zs_galleryjJ{position:relative}._zs_galleryjJ ._zs_galleryjK>*{font-size:20px;line-height:var(--input-small-height)}._zs_galleryjJ ._zs_galleryjL{display:block;min-width:calc(var(--font-size)*6 + 60px);max-width:none;top:-11px;left:-11px}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjM,._zs_galleryjJ ._zs_galleryjL ._zs_galleryjK,._zs_galleryjJ ._zs_galleryjL ._zs_galleryjN{float:left;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjN{margin-left:8px}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjM{float:right;color:#999;font-weight:700;font-size:20px}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjO{height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px;cursor:pointer}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjO ._zs_galleryjM{display:none}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjO:hover{background-color:var(--color-bg-hover)}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjO._zs_galleryjP{cursor:default}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjO._zs_galleryjP ._zs_galleryjM{display:block}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjQ{min-width:140px;height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px}._zs_galleryjJ ._zs_galleryjL ._zs_galleryjR{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_galleryjJ ._zs_galleryjL._zs_galleryjS{top:0;left:0}._zs_galleryjJ ._zs_galleryjT{position:relative;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjJ ._zs_galleryjT ._zs_galleryjU{position:absolute;top:calc((var(--input-small-height) - 4px)/2);right:0;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_galleryjJ ._zs_galleryjV{height:0;border-top:1px solid var(--color-border)}[mx-view*="mx-status/index"]{width:36px;height:var(--input-small-height);min-width:0}[mx-view*="mx-status/dropdown"]:hover ._zs_galleryjW{cursor:not-allowed;border-color:var(--border-highlight)}'),r.exports=s.extend({tmpl:function(l,e,r,a,s,_,t,i){if(r||(r=l),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(l){return"&"+g[l]+";"};s=function(l){return""+(null==l?"":l)},a=function(l){return s(l).replace(o,n)}}if(!_){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return y[l]},h=/[!')(*]/g;_=function(l){return encodeURIComponent(s(l)).replace(h,z)}}if(!i){var p=/[\\'"]/g;i=function(l){return s(l).replace(p,"\\$&")}}t||(t=function(l,e,r,a){for(a=l[j];--a;)if(l[r=j+a]===e)return r;return l[r=j+l[j]++]=e,r});var j="",c="",d=l.showInfo,x=l.info,u=l.cur,m=l.show,v=l.opers;if(c+='<div mxa="_zs_galleryd*:_" class="_zs_galleryjJ" mx-mouseout="'+e+'out()">',d)c+='<div mxa="_zs_galleryd*:a" class="mx-trigger _zs_galleryjW"><span style="color: '+a(x.color)+';">'+a(x.text)+"</span></div>";else{if(c+='<div mxa="_zs_galleryd*:b" class="mx-trigger" mx-mouseover="'+e+'over()"><span style="color: '+a(u.color)+';">'+a(u.text)+'</span><i mxs="_zs_galleryd*:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</i></div>',m&&v.length>0){c+='<ul mxa="_zs_galleryd*:c" class="mx-output _zs_galleryjL _zs_galleryjS">';for(var f=0,J=v.length;f<J;f++){var w=v[f];c+='<li class="_zs_galleryjO clearfix ',w.value==u.value&&(c+=" _zs_galleryjP "),c+='" mx-click="'+e+"select({item:'"+t(r,w)+'\'})"><span class="_zs_galleryjK" style="color: '+a(w.color)+';">'+s(w.icon)+'</span><span mxa="_zs_galleryd*:d" class="_zs_galleryjN">'+a(w.text)+'</span><i mxs="_zs_galleryd*:a" class="mc-iconfont _zs_galleryjM">&#xe65d;</i></li>'}c+="</ul>"}c+=" "}return c+="</div>"}})});