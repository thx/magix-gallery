define("mx-popover/examples/custom",["magix"],(r,a,e)=>{var l=r("magix");l.applyStyle("_zs_galleryao","._zs_galleryjc{border-radius:var(--border-radius)}._zs_galleryjc ._zs_galleryjd{padding:10px;background-color:var(--color-bg);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}._zs_galleryjc ._zs_galleryje{float:left;width:33.3%;padding:10px}"),e.exports=l.View.extend({tmpl:function(r,a,e,l,d,i,s,t){if(e||(e=r),!d){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(r){return"&"+n[r]+";"};d=function(r){return""+(null==r?"":r)},l=function(r){return d(r).replace(o,_)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(r){return c[r]},u=/[!')(*]/g;i=function(r){return encodeURIComponent(d(r)).replace(u,g)}}if(!t){var v=/[\\'"]/g;t=function(r){return d(r).replace(v,"\\$&")}}var p="",f=r.list;p+='<div mxa="_zs_galleryd1:_" class="_zs_galleryjc"><div mxs="_zs_galleryd1:_" class="_zs_galleryjd">标题标题</div><div mxa="_zs_galleryd1:a" class="clearfix">';for(var y=0,m=f.length;y<m;y++){p+='<div mxa="_zs_galleryd1:b" class="_zs_galleryje"><div mxa="_zs_galleryd1:c" class="mb5 color-9">'+l(f[y].name)+'</div><div mxs="_zs_galleryd1:a">-</div></div>'}return p+="</div></div>"},init:function(r){this.updater.set(r.data)},render:function(){l.Router.parse();this.updater.digest({})}})});