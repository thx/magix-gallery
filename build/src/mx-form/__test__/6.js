define("mx-form/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,n)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example"),t=e("mx-form/index"),r=e("mx-form/validator");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,t,r,_,i){if(n||(n=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(s,x)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(p,u)}}if(!i){var d=/[\\'"]/g;i=function(e){return t(e).replace(d,"\\$&")}}var o="",v=e.number,g=e.viewId,b=e.text1;return o+='<div mxv mxa="_zs_galleryb4:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb4:a" class="_zs_galleryk"><div mxv mxa="_zs_galleryb4:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'number\',f:{blength:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8个字符之间" value="'+a(v)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'number\',f:{bminlength:2}}]" class="input mr20 mb20" placeholder="最少2个字符" value="'+a(v)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'number\',f:{bmaxlength:3}}]" class="input mr20 mb20" placeholder="最多3个字符" value="'+a(v)+'"/></div></div><div mxa="_zs_galleryb4:c" class="_zs_galleryl"><div mxs="_zs_galleryb4:_" class="_zs_galleryj">字符个数（一个汉字两个字符）</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryb4:d" class="_zs_galleryo">'+t(b)+'</span><i mxs="_zs_galleryb4:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+'_text_1">\n&lt;input class="input" placeholder="4到8个字之间" value="&#123;&#123;:number&#123;blength:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最少2个字" value="&#123;&#123;:number&#123;bminlength:2&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最多3个字" value="&#123;&#123;:number&#123;bmaxlength:3&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[t,r],render:function(){this.updater.digest()}})});