define("mx-wanxiang/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,n,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");a.exports=_.extend({tmpl:function(e,n,a,_,r,l,t,s){if(a||(a=e),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};r=function(e){return""+(null==e?"":e)},_=function(e){return r(e).replace(o,d)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(m,x)}}if(!s){var g=/[\\'"]/g;s=function(e){return r(e).replace(g,"\\$&")}}var u="",p=e.viewId,v=e.text1;return u+='<div mxa="_zs_gallerye7:_" class="_zs_galleryh"><div mxs="_zs_gallerye7:_" class="_zs_galleryk"><a href="#!/wanxiang/demo1" target="_blank" rel="noopener noreferrer" class="color-brand">新页面查看示例</a>，注意只在taobao域名下可用</div><div mxa="_zs_gallerye7:a" class="_zs_galleryl"><div mxs="_zs_gallerye7:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(p)+'_text_1"><span mxa="_zs_gallerye7:b" class="_zs_galleryo">'+r(v)+'</span><i mxs="_zs_gallerye7:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_1">\n&lt;mx-wanxiang \n    biz-code="PCMaMaAnyWhereWindow"\n    default-source-id="432"\n    source-map="&#123;&#123;@&#123;\n        \'/wanxiang/demo1\': 496,\n        \'/wanxiang/demo2?version=1\': 502\n    &#125;&#125;&#125;"\n    bottom="50"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({})}})});