define("mx-form/__test__/7",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example"),r=e("mx-form/index"),m=e("mx-form/validator");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,r,m,i,t){if(a||(a=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,_=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(u,_)}}if(!m){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},x=/[!')(*]/g;m=function(e){return encodeURIComponent(r(e)).replace(x,p)}}if(!t){var d=/[\\'"]/g;t=function(e){return r(e).replace(d,"\\$&")}}var v="",o=e.number,g=e.viewId,b=e.text1;return v+='<div mxv mxa="_zs_galleryb^:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb^:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb^:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'number\',f:{range:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8之间的数字" value="'+n(o)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'number\',f:{range:[4, 8, \'自定义提示：4~8中间的数字\']}}]" class="input mr20 mb20" placeholder="4到8之间的数字" value="'+n(o)+'"/></div><div mxv mxa="_zs_galleryb^:c" class="clearfix"><input mxe="'+l+'_2" mxc="[{p:\'number\',f:{min:20}}]" class="input mr20 mb20" placeholder="数字不能小于20" value="'+n(o)+'"/> <input mxe="'+l+'_3" mxc="[{p:\'number\',f:{min:[20, \'自定义提示：数字不能小于20\']}}]" class="input mr20 mb20" placeholder="数字不能小于20" value="'+n(o)+'"/></div><div mxv mxa="_zs_galleryb^:d" class="clearfix"><input mxe="'+l+'_4" mxc="[{p:\'number\',f:{max:30}}]" class="input mr20 mb20" placeholder="数字不能大于30" value="'+n(o)+'"/> <input mxe="'+l+'_5" mxc="[{p:\'number\',f:{max:[30, \'自定义提示：数字不能大于30\']}}]" class="input mr20 mb20" placeholder="数字不能大于30" value="'+n(o)+'"/></div></div><div mxa="_zs_galleryb^:e" class="_zs_galleryk"><div mxs="_zs_galleryb^:_" class="_zs_galleryi">数字范围</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+m(g)+'_text_1"><span mxa="_zs_galleryb^:f" class="_zs_galleryn">'+r(b)+'</span><i mxs="_zs_galleryb^:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;input class="input" placeholder="4到8之间的数字" value="&#123;&#123;:number&#123;range:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="4到8之间的数字" value="&#123;&#123;:number&#123;range:[4, 8, \'自定义提示：4~8中间的数字\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能小于20" value="&#123;&#123;:number&#123;min:20&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能小于20" value="&#123;&#123;:number&#123;min:[20, \'自定义提示：数字不能小于20\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能大于30" value="&#123;&#123;:number&#123;max:30&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能大于30" value="&#123;&#123;:number&#123;max:[30, \'自定义提示：数字不能大于30\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[r,m],render:function(){this.updater.digest({rules:{required:!0}})}})});