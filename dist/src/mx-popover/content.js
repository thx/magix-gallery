define("mx-popover/content",["magix"],(r,l,a)=>{var g=r("magix");g.applyStyle("_zs_gallerya_","._zs_gallerygF,._zs_gallerygG,._zs_gallerygH,._zs_gallerygI,._zs_gallerygJ,._zs_gallerygK,._zs_gallerygL,._zs_gallerygM,._zs_gallerygN,._zs_gallerygO,._zs_gallerygP,._zs_gallerygQ{opacity:0;transition:transform .15s,opacity .15s;transform:scale(0)}._zs_gallerygG,._zs_gallerygN{transform-origin:0 0}._zs_gallerygH,._zs_gallerygK{transform-origin:100% 0}._zs_gallerygF{transform-origin:50% 0}._zs_gallerygL,._zs_gallerygP{transform-origin:0 100%}._zs_gallerygI,._zs_gallerygQ{transform-origin:100% 100%}._zs_gallerygO{transform-origin:50% 100%}._zs_gallerygJ{transform-origin:100% 50%}._zs_gallerygM{transform-origin:0 50%}._zs_gallerygR{opacity:1;transform:scale(1)}._zs_gallerygS{display:none}._zs_gallerygT,._zs_gallerygU{position:absolute;z-index:999999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_gallerygT{background-color:#fff;color:#333}._zs_gallerygT ._zs_gallerygV{padding:10px;word-break:break-all}._zs_gallerygU{background-color:rgba(33,33,33,.72);color:#fff}._zs_gallerygU ._zs_gallerygV{padding:4px 10px}"),a.exports=g.View.extend({tmpl:function(r,l,a,g,e,n,_,s){if(a||(a=r),!e){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,o=function(r){return"&"+i[r]+";"};e=function(r){return""+(null==r?"":r)},function(r){return e(r).replace(t,o)}}if(!n){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(r){return y[r]},f=/[!')(*]/g;n=function(r){return encodeURIComponent(e(r)).replace(f,z)}}if(!s){var c=/[\\'"]/g;s=function(r){return e(r).replace(c,"\\$&")}}var p="",u=r.content;return p+='<div mxa="_zs_gallerydt:_" class="_zs_gallerygV">'+e(u)+"</div>"},init:function(r){var l=r.data||{};this.updater.set({content:l.content||""})},render:function(){this.updater.digest({})}})});