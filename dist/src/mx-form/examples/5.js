define("mx-form/examples/5",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example"),r=e("mx-form/index"),m=e("mx-form/validator");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,r,m,t,i){if(a||(a=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(c,x)}}if(!m){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return p[e]},d=/[!')(*]/g;m=function(e){return encodeURIComponent(r(e)).replace(d,u)}}if(!i){var _=/[\\'"]/g;i=function(e){return r(e).replace(_,"\\$&")}}var o="",g=e.number,v=e.viewId,f=e.text1;return o+='<div mxv mxa="_zs_galleryct:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryct:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryct:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'number\',f:{length:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8个字之间" value="'+n(g)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'number\',f:{minlength:2}}]" class="input mr20 mb20" placeholder="最少2个字" value="'+n(g)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'number\',f:{maxlength:[3,\'自定义提示，最多三个字\']}}]" class="input mr20 mb20" placeholder="最多3个字" value="'+n(g)+'"/></div></div><div mxa="_zs_galleryct:c" class="_zs_galleryk"><div mxs="_zs_galleryct:_" class="_zs_galleryi">字个数</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+m(v)+'_text_1"><span mxa="_zs_galleryct:d" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryct:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;input class="input" placeholder="4到8个字之间" value="&#123;&#123;:number&#123;length:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最少2个字" value="&#123;&#123;:number&#123;minlength:2&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最多3个字" value="&#123;&#123;:number&#123;maxlength:[3,\'自定义提示，最多三个字\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[r,m],render:function(){this.updater.digest()}})});