define("mx-grid/examples/8",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,e,a)=>{l("mx-copy/index"),l("examples/hl");var s=l("magix"),i=l("examples/example");l("$");s.applyStyle("_zs_galleryV","._zs_galleryfW{opacity:.1}._zs_galleryfW,._zs_galleryfX{background-color:var(--color-brand)}._zs_galleryfX{opacity:.2}._zs_galleryfY{opacity:.3}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.4}._zs_galleryg_{padding:16px;background-color:var(--app-bg)}"),a.exports=i.extend({tmpl:function(l,e,a,s,i,r,n,c){if(a||(a=l),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,t=function(l){return"&"+_[l]+";"};i=function(l){return""+(null==l?"":l)},s=function(l){return i(l).replace(g,t)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return d[l]},m=/[!')(*]/g;r=function(l){return encodeURIComponent(i(l)).replace(m,x)}}if(!c){var o=/[\\'"]/g;c=function(l){return i(l).replace(o,"\\$&")}}var p="",y=l.icon,z=l.img,v=l.viewId,f=l.text1,u=l.text2;return p+='<div mxa="_zs_gallerycH:_" class="_zs_galleryg"><div mxa="_zs_gallerycH:a" class="_zs_galleryj"><div mxs="_zs_gallerycH:_" class="mb10">只标题部分（支持自定义内容）：</div><div mxa="_zs_gallerycH:b" class="_zs_galleryg_"><div mxa="_zs_gallerycH:c" class="grid mb20"><div mxa="_zs_gallerycH:d" class="clearfix" style="padding: 10px 24px;"><div mxa="_zs_gallerycH:e" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_gallerycH:f" style="margin-right: 4px; color: #ccc;">'+i(y)+'</span><span mxs="_zs_gallerycH:a" class="grid-title" style="margin-right: 16px;">标题</span><span mxs="_zs_gallerycH:b" style="margin-right: 16px; color: #999;">提示信息</span></div></div></div><div mxa="_zs_gallerycH:g" class="grid"><div mxa="_zs_gallerycH:h" class="clearfix" style="padding: 10px 24px;"><div mxa="_zs_gallerycH:i" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_gallerycH:j" class="grid-title" style="margin-right: 16px;">'+i(z)+'</span></div></div></div></div></div><div mxa="_zs_gallerycH:k" class="clearfix"><div mxa="_zs_gallerycH:l" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerycH:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerycH:m" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerycH:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title \n        border="none" \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n&lt;/mx-grid&gt;\n\n&lt;mx-grid.title \n    border="none" \n    content="&#123;&#123;!img&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerycH:n" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerycH:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_2"><span mxa="_zs_gallerycH:o" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerycH:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: '&lt;i class=\"mc-iconfont fontsize-20 bold\"&gt;&#38;&#35;xe60e;&lt;/i&gt;',\n            img: '&lt;img src=\"//img.alicdn.com/tfs/TB1LtU5V5LaK1RjSZFxXXamPFXa-500-100.png\" /&gt;'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({icon:'<i class="mc-iconfont fontsize-20 bold">&#xe60e;</i>',img:'<img src="//img.alicdn.com/tfs/TB1LtU5V5LaK1RjSZFxXXamPFXa-500-100.png" />'})}})});