define("mx-form/__test__/4",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,t,n)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),i=e("mx-form/index"),r=e("mx-form/validator");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,i,r,a,s){if(n||(n=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,u=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(m,u)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(x,c)}}if(!s){var o=/[\\'"]/g;s=function(e){return i(e).replace(o,"\\$&")}}var d="",v=e.number,g=e.int,f=e.posint,y=e.negint,b=e.viewId,z=e.text1;return d+='<div mxv mxa="_zs_galleryb$:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb$:a" class="_zs_galleryk"><div mxv mxa="_zs_galleryb$:b" class="clearfix"><input mxe="'+t+'_0" mxc="[{p:\'number\',f:{number:true}}]" class="input mr20 mb20" placeholder="数字" value="'+l(v)+'"/> <input mxe="'+t+'_1" mxc="[{p:\'int\',f:{int:true}}]" class="input mr20 mb20" placeholder="整数" value="'+l(g)+'"/> <input mxe="'+t+'_2" mxc="[{p:\'posint\',f:{posint:[true,\'自定义提示输入正整数\']}}]" class="input mr20 mb20" placeholder="正整数" value="'+l(f)+'"/> <input mxe="'+t+'_3" mxc="[{p:\'negint\',f:{negint:[true,\'自定义提示输入负整数\']}}]" class="input mr20 mb20" placeholder="负整数" value="'+l(y)+'"/></div></div><div mxa="_zs_galleryb$:c" class="_zs_galleryl"><div mxs="_zs_galleryb$:_" class="_zs_galleryj">整数</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(b)+'_text_1"><span mxa="_zs_galleryb$:d" class="_zs_galleryo">'+i(z)+'</span><i mxs="_zs_galleryb$:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(b)+'_text_1">\n&lt;input class="input" placeholder="数字" value="&#123;&#123;:number&#123;number:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="整数" value="&#123;&#123;:int&#123;int:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="正整数" value="&#123;&#123;:posint&#123;posint:[true,\'自定义提示输入正整数\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="负整数" value="&#123;&#123;:negint&#123;negint:[true,\'自定义提示输入负整数\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[i,r],render:function(){this.updater.digest()}})});