define("mx-popover/examples/9",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,n,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,n,l,a,s,t,i,r){if(l||(l=e),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+o[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,d)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},m=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(m,p)}}if(!r){var _=/[\\'"]/g;r=function(e){return s(e).replace(_,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryd3:_" class="_zs_galleryg"><div mxs="_zs_galleryd3:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>提示浮层显示样式为黑底白字</div><span class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=60&content=%E5%88%A0%E9%99%A4&mode=dark&placement=top&alignText=center">&#xe68d;</span></div><div mxa="_zs_galleryd3:a" class="_zs_galleryk"><div mxs="_zs_galleryd3:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryd3:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryd3:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    width="60"\n    content="删除"\n    mode="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});