define("mx-status/index",["magix","mx-status/base"],(l,e,a)=>{var r=l("magix"),s=l("mx-status/base");r.applyStyle("_zs_galleryav",'._zs_galleryjZ{position:relative}._zs_galleryjZ ._zs_galleryk_>*{font-size:20px;line-height:var(--input-small-height)}._zs_galleryjZ ._zs_galleryka{display:block;min-width:calc(var(--font-size)*6 + 60px);max-width:none;top:-11px;left:-11px}._zs_galleryjZ ._zs_galleryka ._zs_gallerykb,._zs_galleryjZ ._zs_galleryka ._zs_galleryk_,._zs_galleryjZ ._zs_galleryka ._zs_gallerykc{float:left;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjZ ._zs_galleryka ._zs_gallerykc{margin-left:8px}._zs_galleryjZ ._zs_galleryka ._zs_gallerykb{float:right;color:#999;font-weight:700;font-size:20px}._zs_galleryjZ ._zs_galleryka ._zs_gallerykd{height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px;cursor:pointer}._zs_galleryjZ ._zs_galleryka ._zs_gallerykd ._zs_gallerykb{display:none}._zs_galleryjZ ._zs_galleryka ._zs_gallerykd:hover{background-color:var(--color-bg-hover)}._zs_galleryjZ ._zs_galleryka ._zs_gallerykd._zs_galleryke{cursor:default}._zs_galleryjZ ._zs_galleryka ._zs_gallerykd._zs_galleryke ._zs_gallerykb{display:block}._zs_galleryjZ ._zs_galleryka ._zs_gallerykf{min-width:140px;height:calc(var(--input-small-height) + 20px);line-height:var(--input-small-height);padding:10px}._zs_galleryjZ ._zs_galleryka ._zs_gallerykg{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_galleryjZ ._zs_galleryka._zs_gallerykh{top:0;left:0}._zs_galleryjZ ._zs_galleryki{position:relative;height:var(--input-small-height);line-height:var(--input-small-height)}._zs_galleryjZ ._zs_galleryki ._zs_gallerykj{position:absolute;top:calc((var(--input-small-height) - 4px)/2);right:0;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_galleryjZ ._zs_gallerykk{height:0;border-top:1px solid var(--color-border)}[mx-view*="mx-status/index"]{width:36px;height:var(--input-small-height);min-width:0}[mx-view*="mx-status/dropdown"]:hover ._zs_gallerykl{cursor:not-allowed;border-color:var(--border-highlight)}'),a.exports=s.extend({tmpl:function(l,e,a,r,s,_,i,t){if(a||(a=l),!s){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(l){return"&"+g[l]+";"};s=function(l){return""+(null==l?"":l)},r=function(l){return s(l).replace(o,n)}}if(!_){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(l){return y[l]},h=/[!')(*]/g;_=function(l){return encodeURIComponent(s(l)).replace(h,z)}}if(!t){var p=/[\\'"]/g;t=function(l){return s(l).replace(p,"\\$&")}}i||(i=function(l,e,a,r){for(r=l[c];--r;)if(l[a=c+r]===e)return a;return l[a=c+l[c]++]=e,a});var c="",k="",x=l.showInfo,u=l.info,d=l.cur,m=l.opers,v=l.show;if(k+='<div mxa="_zs_galleryeH:_" class="_zs_galleryjZ" mx-mouseout="'+e+'out()"><div mxa="_zs_galleryeH:a" class="_zs_galleryki" mx-mouseover="'+e+'over()">',k+=x?'<span class="_zs_galleryk_" style="color: '+r(u.color)+';">'+s(u.icon)+"</span>":'<span class="_zs_galleryk_" style="color: '+r(d.color)+';">'+s(d.icon)+"</span>",k+=" ",m.length>0&&(k+='<i mxs="_zs_galleryeH:_" class="_zs_gallerykj"></i>'),k+="</div>",v){k+='<ul mxa="_zs_galleryeH:b" class="mx-output _zs_galleryka">',x&&(k+='<li mxa="_zs_galleryeH:c" class="_zs_gallerykf clearfix"><span class="_zs_galleryk_" style="color: '+r(u.color)+';">'+s(u.icon)+'</span><span mxa="_zs_galleryeH:d" class="_zs_gallerykc">'+s(u.text)+"</span></li>",u.tip&&(k+='<li mxa="_zs_galleryeH:e" class="_zs_gallerykg">'+s(u.tip)+"</li>"),k+=" ",m.length>0&&(k+='<li mxs="_zs_galleryeH:a" class="_zs_gallerykk"></li>'),k+=" "),k+=" ";for(var f=0,j=m.length;f<j;f++){var b=m[f];k+='<li class="_zs_gallerykd clearfix ',b.value==d.value&&(k+=" _zs_galleryke "),k+='" mx-click="'+e+"select({item:'"+i(a,b)+'\'})"><span class="_zs_galleryk_" style="color: '+r(b.color)+';">'+s(b.icon)+'</span><span mxa="_zs_galleryeH:f" class="_zs_gallerykc">'+s(b.text)+'</span><i mxs="_zs_galleryeH:b" class="mc-iconfont _zs_gallerykb">&#xe65d;</i></li>'}k+="</ul>"}return k+="</div>"}})});