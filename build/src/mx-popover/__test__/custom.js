define("mx-popover/__test__/custom",["magix"],(r,a,e)=>{var l=r("magix");l.applyStyle("_zs_galleryar","._zs_gallerykz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykA{border-radius:4px}._zs_gallerykA ._zs_gallerykB{padding:10px;background-color:#fafafa;border-top-left-radius:4px;border-top-right-radius:4px}._zs_gallerykA ._zs_gallerykC{float:left;width:33.3%;padding:10px}"),e.exports=l.View.extend({tmpl:function(r,a,e,l,t,i,s,d){if(e||(e=r),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,o=function(r){return"&"+n[r]+";"};t=function(r){return""+(null==r?"":r)},l=function(r){return t(r).replace(_,o)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(r){return g[r]},u=/[!')(*]/g;i=function(r){return encodeURIComponent(t(r)).replace(u,p)}}if(!d){var c=/[\\'"]/g;d=function(r){return t(r).replace(c,"\\$&")}}var f="",x=r.list;f+='<div mxa="_zs_gallerydb:_" class="_zs_gallerykA"><div mxs="_zs_gallerydb:_" class="_zs_gallerykB">标题标题</div><div mxa="_zs_gallerydb:a" class="clearfix">';for(var v=0,y=x.length;v<y;v++){f+='<div mxa="_zs_gallerydb:b" class="_zs_gallerykC"><div mxa="_zs_gallerydb:c" class="mb5 color-9">'+l(x[v].name)+'</div><div mxs="_zs_gallerydb:a">-</div></div>'}return f+="</div></div>"},init:function(r){this.updater.set(r.data)},render:function(){l.Router.parse();this.updater.digest({})}})});