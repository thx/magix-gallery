define("mx-main/tip",["magix","$"],(r,e,a)=>{var t=r("magix");r("$");t.applyStyle("_zs_galleryai",'._zs_galleryjo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjp{position:relative;top:0;left:0;margin:0 20px 20px 0;padding-left:24px}._zs_galleryjp ._zs_galleryjq{padding:10px;border:1px solid #e6e6e6;border-radius:4px;color:#999;background-color:#fff}._zs_galleryjp ._zs_galleryjr{opacity:.5;position:absolute;top:50%;left:-8px;font-size:22px;margin-top:-10px;color:#4d7fff}._zs_galleryjp:after,._zs_galleryjp:before{content:"";position:absolute;top:50%;left:18px;width:0;height:0;margin-top:-7px;border-top:7px solid transparent;border-right:6px solid #ccc;border-bottom:6px solid transparent}._zs_galleryjp:after{border-right:6px solid #fff;left:19px}'),a.exports=t.View.extend({tmpl:function(r,e,a,t,l,i,o,n){if(a||(a=r),!l){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(r){return"&"+p[r]+";"};l=function(r){return""+(null==r?"":r)},t=function(r){return l(r).replace(s,d)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(r){return g[r]},f=/[!')(*]/g;i=function(r){return encodeURIComponent(l(r)).replace(f,_)}}if(!n){var c=/[\\'"]/g;n=function(r){return l(r).replace(c,"\\$&")}}var x="",u=r.view,y=r.content;return x+=u?'<div mx-view="'+t(u)+'"><div mxs="_zs_gallerycZ:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>':'<div mxa="_zs_gallerycZ:_" class="_zs_galleryjp"><i mxs="_zs_gallerycZ:a" class="mc-iconfont _zs_galleryjr">&#xe654;</i><div mxa="_zs_gallerycZ:a" class="_zs_galleryjq">'+l(y)+"</div></div>"},init:function(r){var e=r.data||{};this.updater.set(e)},render:function(){this.updater.digest()}})});