define("__test__/pro/menu4",["magix","../example","$","mx-copy/index","../hl"],(a,l,e)=>{a("mx-copy/index"),a("../hl");var _=a("magix"),r=a("../example");a("$");_.applyStyle("_zs_galleryh","._zs_galleryax{height:160px;background-color:var(--color-bg)}._zs_galleryay{height:160px;padding:30px}._zs_galleryaz{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaz ._zs_galleryaA{height:50px;background-color:var(--color-brand)}._zs_galleryaz ._zs_galleryaA ._zs_galleryaB,._zs_galleryaz ._zs_galleryaA ._zs_galleryaC{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaz ._zs_galleryaA ._zs_galleryaB{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaz ._zs_galleryaA ._zs_galleryaC{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaz ._zs_galleryaD{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaz ._zs_galleryaD ._zs_galleryaE{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaz ._zs_galleryaD ._zs_galleryaE,._zs_galleryaz ._zs_galleryaD ._zs_galleryaE ._zs_galleryaF{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaz ._zs_galleryaD ._zs_galleryaE ._zs_galleryaF{float:right;font-size:24px}._zs_galleryaz ._zs_galleryaD ._zs_galleryaE._zs_galleryaG ._zs_galleryaF{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryaz ._zs_galleryaD ._zs_galleryaE._zs_galleryaH,._zs_galleryaz ._zs_galleryaD ._zs_galleryaE._zs_galleryaH ._zs_galleryaF,._zs_galleryaz ._zs_galleryaD ._zs_galleryaE:hover,._zs_galleryaz ._zs_galleryaD ._zs_galleryaE:hover ._zs_galleryaF{color:#fff}._zs_galleryaz ._zs_galleryaD ._zs_galleryaI{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaz ._zs_galleryaD ._zs_galleryaI:hover{color:#fff}._zs_galleryaz ._zs_galleryaD ._zs_galleryaI._zs_galleryaJ{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaz ._zs_galleryaD ._zs_galleryaK{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaz ._zs_galleryaD ._zs_galleryaK ._zs_galleryaI{padding-left:40px}._zs_galleryaz ._zs_galleryaD ._zs_galleryaK._zs_galleryaL ._zs_galleryaI{height:46px}._zs_galleryaz ._zs_galleryaM{position:absolute;top:0;left:210px;padding:30px}"),e.exports=r.extend({tmpl:function(a,l,e,_,r,s,g,z){if(e||(e=a),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},y=/[&<>"'`]/g,t=function(a){return"&"+i[a]+";"};r=function(a){return""+(null==a?"":a)},_=function(a){return r(a).replace(y,t)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(a){return o[a]},d=/[!')(*]/g;s=function(a){return encodeURIComponent(r(a)).replace(d,n)}}if(!z){var p=/[\\'"]/g;z=function(a){return r(a).replace(p,"\\$&")}}var c="",x=a.viewId,f=a.text1;return c+='<div mxa="_zs_galleryI:_" class="_zs_galleryg"><div mxs="_zs_galleryI:_" class="_zs_galleryj"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">无侧边，无padding，深底色</div></div><div class="_zs_galleryaz"><div class="_zs_galleryaA clearfix"><div class="_zs_galleryaB">LOGO</div><div class="_zs_galleryaC">一级标题</div></div><div class="clearfix"><div class="_zs_galleryax">内容区域</div></div></div></div><div mxa="_zs_galleryI:a" class="_zs_galleryk"><div mxs="_zs_galleryI:a" class="_zs_galleryi">配置Menus</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(x)+'_text_1"><span mxa="_zs_galleryI:b" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(x)+"_text_1\">\nlet Menus = [{\n    has: true,\n    name: '一级标题',\n    path: '/develop/index',\n    custom: true\n}]</pre></div></div>"},render:function(){this.updater.digest()}})});