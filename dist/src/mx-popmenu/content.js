define("mx-popmenu/content",["magix"],(r,e,a)=>{var i=r("magix");i.applyStyle("_zs_galleryak","._zs_galleryjh{padding:8px 10px;overflow:auto}._zs_galleryjh ._zs_galleryji{padding:2px 0}._zs_galleryjh ._zs_galleryji ._zs_galleryjj{display:block;width:100%;padding:0 8px;cursor:pointer;height:var(--input-small-height);line-height:var(--input-small-height);border-radius:var(--border-radius);transition:all var(--duration)}._zs_galleryjh ._zs_galleryji ._zs_galleryjj:hover{background-color:var(--color-bg-hover)}"),a.exports=i.View.extend({tmpl:function(r,e,a,i,l,n,t,s){if(a||(a=r),!l){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(r){return"&"+u[r]+";"};l=function(r){return""+(null==r?"":r)},i=function(r){return l(r).replace(o,g)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(r){return _[r]},d=/[!')(*]/g;n=function(r){return encodeURIComponent(l(r)).replace(d,p)}}if(!s){var c=/[\\'"]/g;s=function(r){return l(r).replace(c,"\\$&")}}var v="",h=r.menus;v+='<div mxa="_zs_gallerydT:_" class="_zs_galleryjh">';for(var m=0,y=h.length;m<y;m++){var f=h[m];v+='<div mxa="_zs_gallerydT:a" class="_zs_galleryji"><span class="_zs_galleryjj ellipsis" mx-click="'+e+"submit({value:'"+i(s(f.value))+"'})\">"+i(f.text)+"</span></div>"}return v+="</div>"},init:function(r){this.viewOptions=r;var e=r.data||{};this.updater.set({menus:e.menus})},render:function(){this.updater.digest({})},"submit<click>":function(r){var e=this.viewOptions;e.submit&&e.submit(r.params.value)}})});