define("examples/pro/menu1",["magix","../example","$","mx-copy/index","../hl"],(a,l,e)=>{a("mx-copy/index"),a("../hl");var s=a("magix"),_=a("../example");a("$");s.applyStyle("_zs_galleryi","._zs_galleryaE{height:160px;background-color:var(--color-bg)}._zs_galleryaF{height:160px;padding:30px}._zs_galleryaG{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaH{height:50px;background-color:var(--color-brand)}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI,._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaG ._zs_galleryaK{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{float:right;font-size:24px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaN ._zs_galleryaM{transform:rotate(180deg)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO ._zs_galleryaM,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover ._zs_galleryaM{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP:hover{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP._zs_galleryaQ{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR ._zs_galleryaP{padding-left:40px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR._zs_galleryaS ._zs_galleryaP{height:46px}._zs_galleryaG ._zs_galleryaT{position:absolute;top:0;left:210px;padding:30px}"),e.exports=_.extend({tmpl:function(a,l,e,s,_,r,i,n){if(e||(e=a),!_){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,o=function(a){return"&"+g[a]+";"};_=function(a){return""+(null==a?"":a)},s=function(a){return _(a).replace(t,o)}}if(!r){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(a){return y[a]},z=/[!')(*]/g;r=function(a){return encodeURIComponent(_(a)).replace(z,d)}}if(!n){var p=/[\\'"]/g;n=function(a){return _(a).replace(p,"\\$&")}}var c="",x=a.viewId,v=a.text1,m=a.text2;return c+='<div mxa="_zs_galleryI:_" class="_zs_galleryg"><div mxs="_zs_galleryI:_" class="_zs_galleryj"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">侧边不分组，配置subs，无leftView</div></div><div class="_zs_galleryaG"><div class="_zs_galleryaH clearfix"><div class="_zs_galleryaI">LOGO</div><div class="_zs_galleryaJ">一级标题</div></div><div class="clearfix"><div class="_zs_galleryaK"><div><a href="javascript:;" class="_zs_galleryaP _zs_galleryaQ"><i class="mc-iconfont mr5">&#xe731;</i>三级1</a></div><div><a href="javascript:;" class="_zs_galleryaP"><i class="mc-iconfont mr5">&#xe609;</i>三级2</a></div><div><a href="javascript:;" class="_zs_galleryaP"><i class="mc-iconfont mr5">&#xe698;</i>三级3</a></div></div></div></div></div><div mxa="_zs_galleryI:a" class="_zs_galleryk"><div mxs="_zs_galleryI:a" class="_zs_galleryi">配置Menus</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(x)+'_text_1"><span mxa="_zs_galleryI:b" class="_zs_galleryn">'+_(v)+'</span><i mxs="_zs_galleryI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(x)+"_text_1\">\nlet Menus = [&#123;\n    has: true,\n    name: '一级标题',\n    path: '/develop/example1',\n    subs: [&#123;\n        thirds: [&#123;\n            has: true,\n            name: '三级1',\n            path: '/develop/example1',\n            icon: '&#38;&#35;xe731;'\n        &#125;, &#123;\n            has: true,\n            name: '三级2',\n            path: '/develop/example2',\n            icon: '&#38;&#35;xe609;'\n        &#125;, &#123;\n            has: true,\n            name: '三级3',\n            path: '/develop/example3',\n            icon: '&#38;&#35;xe698;'\n        &#125;]\n    &#125;]\n&#125;]</pre></div><div mxa=\"_zs_galleryI:c\" class=\"_zs_galleryk\"><div mxs=\"_zs_galleryI:c\" class=\"_zs_galleryi\">等价于以下配置方法</div><div class=\"_zs_galleryl\" mx-success=\""+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(x)+'_text_2"><span mxa="_zs_galleryI:d" class="_zs_galleryn">'+_(m)+'</span><i mxs="_zs_galleryI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(x)+"_text_2\">\nlet Menus = [&#123;\n    has: true,\n    name: '一级标题',\n    path: '/develop/example1',\n    subs: [&#123;\n        thirds: [&#123;\n            has: true,\n            name: '三级1',\n            path: '/develop/example1'\n        &#125;]\n    &#125;, &#123;\n        thirds: [&#123;\n            has: true,\n            name: '三级2',\n            path: '/develop/example2'\n        &#125;]\n    &#125;, &#123;\n        thirds: [&#123;\n            has: true,\n            name: '三级3',\n            path: '/develop/example3'\n        &#125;]\n    &#125;]\n&#125;]</pre></div></div>"},render:function(){this.updater.digest()}})});