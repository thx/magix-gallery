define("__test__/pro/menu-custom5",["magix","../example","$","mx-copy/index","../hl"],(a,l,e)=>{a("mx-copy/index"),a("../hl");var _=a("magix"),r=a("../example");a("$");_.applyStyle("_zs_galleryh","._zs_galleryaA{height:160px;background-color:var(--color-bg)}._zs_galleryaB{height:160px;padding:30px}._zs_galleryaC{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaC ._zs_galleryaD{height:50px;background-color:var(--color-brand)}._zs_galleryaC ._zs_galleryaD ._zs_galleryaE,._zs_galleryaC ._zs_galleryaD ._zs_galleryaF{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaC ._zs_galleryaD ._zs_galleryaE{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaC ._zs_galleryaD ._zs_galleryaF{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaC ._zs_galleryaG{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaC ._zs_galleryaG ._zs_galleryaH{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaC ._zs_galleryaG ._zs_galleryaH,._zs_galleryaC ._zs_galleryaG ._zs_galleryaH ._zs_galleryaI{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaC ._zs_galleryaG ._zs_galleryaH ._zs_galleryaI{float:right;font-size:24px}._zs_galleryaC ._zs_galleryaG ._zs_galleryaH._zs_galleryaJ ._zs_galleryaI{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryaC ._zs_galleryaG ._zs_galleryaH._zs_galleryaK,._zs_galleryaC ._zs_galleryaG ._zs_galleryaH._zs_galleryaK ._zs_galleryaI,._zs_galleryaC ._zs_galleryaG ._zs_galleryaH:hover,._zs_galleryaC ._zs_galleryaG ._zs_galleryaH:hover ._zs_galleryaI{color:#fff}._zs_galleryaC ._zs_galleryaG ._zs_galleryaL{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaC ._zs_galleryaG ._zs_galleryaL:hover{color:#fff}._zs_galleryaC ._zs_galleryaG ._zs_galleryaL._zs_galleryaM{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaC ._zs_galleryaG ._zs_galleryaN{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaC ._zs_galleryaG ._zs_galleryaN ._zs_galleryaL{padding-left:40px}._zs_galleryaC ._zs_galleryaG ._zs_galleryaN._zs_galleryaO ._zs_galleryaL{height:46px}._zs_galleryaC ._zs_galleryaP{position:absolute;top:0;left:210px;padding:30px}"),e.exports=r.extend({tmpl:function(a,l,e,_,r,s,g,i){if(e||(e=a),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,y=function(a){return"&"+t[a]+";"};r=function(a){return""+(null==a?"":a)},_=function(a){return r(a).replace(o,y)}}if(!s){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(a){return z[a]},n=/[!')(*]/g;s=function(a){return encodeURIComponent(r(a)).replace(n,d)}}if(!i){var p=/[\\'"]/g;i=function(a){return r(a).replace(p,"\\$&")}}var c="",x=a.viewId,v=a.text1;return c+='<div mxa="_zs_galleryC:_" class="_zs_galleryg"><div mxs="_zs_galleryC:_" class="_zs_galleryj"><div class="_zs_galleryaC"><div class="_zs_galleryaD clearfix"><div class="_zs_galleryaE">LOGO</div><div class="_zs_galleryaF">一级标题</div></div><div class="clearfix pr"><div class="_zs_galleryaG"><img src="//img.alicdn.com/tfs/TB1A_l1oBsmBKNjSZFsXXaXSVXa-210-153.png"></div><div class="_zs_galleryaP"><div>view2：</div><div>映射到三级1这个页面</div><div>顶部显示与三级1完全一致，侧边内容自定义</div></div></div></div></div><div mxa="_zs_galleryC:a" class="_zs_galleryk"><div mxs="_zs_galleryC:a" class="_zs_galleryi">配置CustomPath</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(x)+'_text_1"><span mxa="_zs_galleryC:b" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_galleryC:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(x)+"_text_1\">\nlet CustomPath = [&#123;\n    has: true,\n    name: 'view2',\n    path: '/example/outside2',\n    mapThirdPath: '/develop/example1',\n    leftView: '/develop/side',\n    view: '@./views/default'\n&#125;]</pre></div></div>"},render:function(){this.updater.digest()}})});