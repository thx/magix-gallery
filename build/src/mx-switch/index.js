define("mx-switch/index",["magix","mx-popover/index"],(l,e,a)=>{l("mx-popover/index");var r=l("magix");r.applyStyle("_zs_galleryj",'._zs_gallerylV{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryaF,[mx-view*="mx-switch/index"]{position:relative;display:inline-block}._zs_galleryaF{width:40px;height:18px;border-radius:9px;background-color:#e6e6e6;cursor:pointer}._zs_galleryaF ._zs_galleryaH{opacity:.95;position:absolute;top:50%;left:0;width:18px;height:18px;margin-top:-9px;border-radius:50%;background-color:#ccc;transition:left .25s;-moz-transition:left .25s;-webkit-transition:left .25s;-o-transition:left .25s}._zs_galleryaF._zs_galleryaG{background-color:#d8e3ff}._zs_galleryaF._zs_galleryaG ._zs_galleryaH{left:22px;background-color:#4d7fff}._zs_galleryaF._zs_gallerylW{cursor:not-allowed;opacity:.6}._zs_gallerylX{display:inline-block;position:relative;height:18px;cursor:pointer;line-height:18px}._zs_gallerylX:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;border-radius:4px;border:1px solid #e6e6e6;background-color:#fff}._zs_gallerylX ._zs_gallerylY,._zs_gallerylX ._zs_gallerylZ{transition:color .25s}._zs_gallerylX ._zs_gallerylZ{color:#999}._zs_gallerylX ._zs_gallerylY{color:#fff}._zs_gallerylX ._zs_galleryaH,._zs_gallerylX ._zs_gallerym_{display:inline-block;width:24px;height:18px;text-align:center;line-height:18px;border-radius:4px}._zs_gallerylX ._zs_gallerym_{position:relative;z-index:3}._zs_gallerylX ._zs_galleryaH{position:absolute;top:0;left:0;z-index:2;background-image:linear-gradient(90deg,#4d7fff,#4d7fff);background-image:-moz-linear-gradient(right,#4d7fff,#4d7fff);transition:left .25s;-moz-transition:left .25s;-webkit-transition:left .25s;-o-transition:left .25s}._zs_gallerylX._zs_galleryaG ._zs_gallerylZ{color:#fff}._zs_gallerylX._zs_galleryaG ._zs_gallerylY{color:#999}._zs_gallerylX._zs_galleryaG ._zs_galleryaH{left:50%}._zs_gallerylX._zs_gallerylW{cursor:not-allowed;opacity:.6}._zs_galleryma{cursor:not-allowed;position:absolute;top:0;left:0;width:100%;height:100%}'),a.exports=r.View.extend({tmpl:function(l,e,a,r,s,t,i,_){if(a||(a=l),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(l){return"&"+n[l]+";"};s=function(l){return""+(null==l?"":l)},r=function(l){return s(l).replace(o,g)}}if(!t){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(l){return p[l]},y=/[!')(*]/g;t=function(l){return encodeURIComponent(s(l)).replace(y,d)}}if(!_){var z=/[\\'"]/g;_=function(l){return s(l).replace(z,"\\$&")}}var c="",f=l.text,u=l.on,x=l.disabled,h=l.tip;return c+=f?'<span class="_zs_gallerylX '+r(u?"_zs_galleryaG":"")+" "+r(x?"_zs_gallerylW":"")+'" mx-click="'+e+'__o()"><span mxs="_zs_gallerydI:_" class="_zs_gallerym_ _zs_gallerylY">关</span><span mxs="_zs_gallerydI:a" class="_zs_gallerym_ _zs_gallerylZ">开</span><span mxs="_zs_gallerydI:b" class="_zs_galleryaH"></span></span>':'<span class="_zs_galleryaF '+r(u?"_zs_galleryaG":"")+" "+r(x?"_zs_gallerylW":"")+'" mx-click="'+e+'__o()"><span mxs="_zs_gallerydI:b" class="_zs_galleryaH"></span></span>',c+=" ",x&&h&&(c+='<span class="_zs_galleryma" mx-view="mx-popover/index?content='+t(h)+'"></span>'),c},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this.updater.altered();return this.__j=$("#"+this.id),this.updater.set({on:l.state+""=="true",disabled:l.disabled+""=="true",tip:l.tip||"",text:"text"==l.mode}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__o<click>":function(l){var e=this.updater;if(!e.get("disabled")){var a=!e.get("on");this.updater.set({on:a}).digest();var r=$.Event("change",{state:a});this.__j.val(a).trigger(r)}}})});