define("__test__/pro/menu-custom5",["magix","../example","$","mx-copy/index","../hl"],(l,a,e)=>{l("mx-copy/index"),l("../hl");var _=l("magix"),r=l("../example");l("$");_.applyStyle("_zs_galleryf","._zs_galleryae{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryaf{height:160px;background-color:#fafafa}._zs_galleryag{height:160px;padding:30px}._zs_galleryah{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryah ._zs_galleryai{height:50px;background-color:#4d7fff}._zs_galleryah ._zs_galleryai ._zs_galleryaj,._zs_galleryah ._zs_galleryai ._zs_galleryak{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryah ._zs_galleryai ._zs_galleryaj{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryah ._zs_galleryai ._zs_galleryak{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryah ._zs_galleryal{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left .25s ease-out;font-size:14px}._zs_galleryah ._zs_galleryal ._zs_galleryam{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryah ._zs_galleryal ._zs_galleryam,._zs_galleryah ._zs_galleryal ._zs_galleryam ._zs_galleryan{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryah ._zs_galleryal ._zs_galleryam ._zs_galleryan{float:right;font-size:24px}._zs_galleryah ._zs_galleryal ._zs_galleryam._zs_galleryao ._zs_galleryan{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryah ._zs_galleryal ._zs_galleryam._zs_galleryap,._zs_galleryah ._zs_galleryal ._zs_galleryam._zs_galleryap ._zs_galleryan,._zs_galleryah ._zs_galleryal ._zs_galleryam:hover,._zs_galleryah ._zs_galleryal ._zs_galleryam:hover ._zs_galleryan{color:#fff}._zs_galleryah ._zs_galleryal ._zs_galleryaq{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryah ._zs_galleryal ._zs_galleryaq:hover{color:#fff}._zs_galleryah ._zs_galleryal ._zs_galleryaq._zs_galleryar{border-left:4px solid #4d7fff;color:#fff;background-color:#2e313a}._zs_galleryah ._zs_galleryal ._zs_galleryas{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryah ._zs_galleryal ._zs_galleryas._zs_galleryat ._zs_galleryaq{height:46px}._zs_galleryah ._zs_galleryau{position:absolute;top:0;left:210px;padding:30px}"),e.exports=r.extend({tmpl:function(l,a,e,_,r,s,g,i){if(e||(e=l),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,y=function(l){return"&"+t[l]+";"};r=function(l){return""+(null==l?"":l)},_=function(l){return r(l).replace(o,y)}}if(!s){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(l){return z[l]},n=/[!')(*]/g;s=function(l){return encodeURIComponent(r(l)).replace(n,d)}}if(!i){var p=/[\\'"]/g;i=function(l){return r(l).replace(p,"\\$&")}}var x="",h=l.viewId,c=l.text1;return x+='<div mxa="_zs_galleryA:_" class="_zs_galleryh"><div mxs="_zs_galleryA:_" class="_zs_galleryk"><div class="_zs_galleryah"><div class="_zs_galleryai clearfix"><div class="_zs_galleryaj">LOGO</div><div class="_zs_galleryak">一级标题</div></div><div class="clearfix pr"><div class="_zs_galleryal"><img src="//img.alicdn.com/tfs/TB1A_l1oBsmBKNjSZFsXXaXSVXa-210-153.png"></div><div class="_zs_galleryau"><div>view2：</div><div>映射到三级1这个页面</div><div>顶部显示与三级1完全一致，侧边内容自定义</div></div></div></div></div><div mxa="_zs_galleryA:a" class="_zs_galleryl"><div mxs="_zs_galleryA:a" class="_zs_galleryj">配置CustomPath</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(h)+'_text_1"><span mxa="_zs_galleryA:b" class="_zs_galleryo">'+r(c)+'</span><i mxs="_zs_galleryA:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(h)+"_text_1\">\nlet CustomPath = [&#123;\n    has: true,\n    name: 'view2',\n    path: '/example/outside2',\n    mapThirdPath: '/develop/example1',\n    leftView: '/develop/side',\n    view: '@./views/default'\n&#125;]</pre></div></div>"},render:function(){this.updater.digest()}})});