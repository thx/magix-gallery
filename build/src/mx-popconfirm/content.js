define("mx-popconfirm/content",["magix"],(r,i,a)=>{var n=r("magix");n.applyStyle("_zs_galleryaj","._zs_galleryhZ,._zs_galleryi_,._zs_galleryia,._zs_galleryic,._zs_galleryid,._zs_galleryie,._zs_galleryif,._zs_galleryig,._zs_galleryih,._zs_galleryii,._zs_galleryij,._zs_galleryik{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryi_,._zs_galleryih{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryia,._zs_galleryie{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryhZ{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryif,._zs_galleryij{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryic,._zs_galleryik{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryii{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryid{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryig{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_galleryil{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryim{display:none}._zs_galleryin,._zs_galleryio{position:absolute;z-index:9999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryin{background-color:#fff;color:#333}._zs_galleryin ._zs_galleryip{padding:10px;word-break:break-all}._zs_galleryio{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryio ._zs_galleryip{padding:4px 10px}"),a.exports=n.View.extend({tmpl:function(r,i,a,n,l,e,t,s){if(a||(a=r),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(r){return"&"+o[r]+";"};l=function(r){return""+(null==r?"":r)},function(r){return l(r).replace(_,g)}}if(!e){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(r){return c[r]},y=/[!')(*]/g;e=function(r){return encodeURIComponent(l(r)).replace(y,f)}}if(!s){var m=/[\\'"]/g;s=function(r){return l(r).replace(m,"\\$&")}}var z="",p=r.content;return z+='<div mxa="_zs_galleryc%:_" class="_zs_galleryip">'+l(p)+'</div><div mxs="_zs_galleryc%:_" class="pl10 pt10 pb10"><a href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="'+i+'submit()">确定</a><a href="javascript:;" class="btn btn-small" mx-click="'+i+'cancel()">取消</a></div>'},init:function(r){this.viewOptions=r;var i=r.data||{};this.updater.set({content:i.content||""})},render:function(){this.updater.digest({})},"submit<click>":function(r){var i=this.viewOptions;i.submit&&i.submit()},"cancel<click>":function(r){var i=this.viewOptions;i.cancel&&i.cancel()}})});