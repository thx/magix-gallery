define("mx-popconfirm/content",["magix"],(r,i,a)=>{var l=r("magix");l.applyStyle("_zs_galleryaj","._zs_galleryin,._zs_galleryio,._zs_galleryip,._zs_galleryiq,._zs_galleryir,._zs_galleryis,._zs_galleryit,._zs_galleryiu,._zs_galleryiv,._zs_galleryiw,._zs_galleryix,._zs_galleryiy{opacity:0;transition:transform .15s,opacity .15s;transform:scale(0)}._zs_galleryio,._zs_galleryiv{transform-origin:0 0}._zs_galleryip,._zs_galleryis{transform-origin:100% 0}._zs_galleryin{transform-origin:50% 0}._zs_galleryit,._zs_galleryix{transform-origin:0 100%}._zs_galleryiq,._zs_galleryiy{transform-origin:100% 100%}._zs_galleryiw{transform-origin:50% 100%}._zs_galleryir{transform-origin:100% 50%}._zs_galleryiu{transform-origin:0 50%}._zs_galleryiz{opacity:1;transform:scale(1)}._zs_galleryiA{display:none}._zs_galleryiB,._zs_galleryiC{position:absolute;z-index:999999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryiB{background-color:#fff;color:#333}._zs_galleryiB ._zs_galleryiD{padding:10px;word-break:break-all}._zs_galleryiC{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryiC ._zs_galleryiD{padding:4px 10px}"),a.exports=l.View.extend({tmpl:function(r,i,a,l,e,n,s,t){if(a||(a=r),!e){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(r){return"&"+_[r]+";"};e=function(r){return""+(null==r?"":r)},function(r){return e(r).replace(o,g)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(r){return c[r]},f=/[!')(*]/g;n=function(r){return encodeURIComponent(e(r)).replace(f,y)}}if(!t){var z=/[\\'"]/g;t=function(r){return e(r).replace(z,"\\$&")}}var p="",u=r.content;return p+='<div mxa="_zs_gallerydc:_" class="_zs_galleryiD">'+e(u)+'</div><div mxs="_zs_gallerydc:_" class="pl10 pt10 pb10"><a href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+i+'submit()">确定</a><a href="javascript:;" class="btn btn-small" mx-click="'+i+'cancel()">取消</a></div>'},init:function(r){this.viewOptions=r;var i=r.data||{};this.updater.set({content:i.content||""})},render:function(){this.updater.digest({})},"submit<click>":function(r){var i=this.viewOptions;i.submit&&i.submit()},"cancel<click>":function(r){var i=this.viewOptions;i.cancel&&i.cancel()}})});