define("mx-grid/__test__/8",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,e,a)=>{l("mx-copy/index"),l("__test__/hl");var s=l("magix"),i=l("__test__/example");l("$");s.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),a.exports=i.extend({tmpl:function(l,e,a,s,i,_,r,t){if(a||(a=l),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,c=function(l){return"&"+n[l]+";"};i=function(l){return""+(null==l?"":l)},s=function(l){return i(l).replace(g,c)}}if(!_){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(l){return o[l]},x=/[!')(*]/g;_=function(l){return encodeURIComponent(i(l)).replace(x,d)}}if(!t){var m=/[\\'"]/g;t=function(l){return i(l).replace(m,"\\$&")}}var y="",p=l.icon,z=l.img,v=l.viewId,f=l.text1,u=l.text2;return y+='<div mxa="_zs_galleryco:_" class="_zs_galleryg"><div mxa="_zs_galleryco:a" class="_zs_galleryj"><div mxs="_zs_galleryco:_" class="mb10">只标题部分（支持自定义内容）：</div><div mxa="_zs_galleryco:b" class="_zs_gallerygb"><div mxa="_zs_galleryco:c" class="grid mb20"><div mxa="_zs_galleryco:d" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryco:e" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryco:f" style="margin-right: 4px; color: #ccc;">'+i(p)+'</span><span mxs="_zs_galleryco:a" class="grid-title" style="margin-right: 16px;">标题</span><span mxs="_zs_galleryco:b" style="margin-right: 16px; color: #999;">提示信息</span></div></div></div><div mxa="_zs_galleryco:g" class="grid"><div mxa="_zs_galleryco:h" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryco:i" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryco:j" class="grid-title" style="margin-right: 16px;">'+i(z)+'</span></div></div></div></div></div><div mxa="_zs_galleryco:k" class="clearfix"><div mxa="_zs_galleryco:l" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryco:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_galleryco:m" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryco:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title \n        border="none" \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n&lt;/mx-grid&gt;\n\n&lt;mx-grid.title \n    border="none" \n    content="&#123;&#123;!img&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_galleryco:n" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryco:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_2"><span mxa="_zs_galleryco:o" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryco:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: '&lt;i class=\"mc-iconfont fontsize-20 bold\"&gt;&#38;&#35;xe60e;&lt;/i&gt;',\n            img: '&lt;img src=\"//img.alicdn.com/tfs/TB1LtU5V5LaK1RjSZFxXXamPFXa-500-100.png\" /&gt;'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({icon:'<i class="mc-iconfont fontsize-20 bold">&#xe60e;</i>',img:'<img src="//img.alicdn.com/tfs/TB1LtU5V5LaK1RjSZFxXXamPFXa-500-100.png" />'})}})});