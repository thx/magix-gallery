define("mx-form/examples/4",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,n,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),t=e("mx-form/index"),i=e("mx-form/validator");e("$");l.exports=a.extend({tmpl:function(e,n,l,a,t,i,r,s){if(l||(l=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,p=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(c,p)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return u[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(o,x)}}if(!s){var d=/[\\'"]/g;s=function(e){return t(e).replace(d,"\\$&")}}var _="",v=e.number,g=e.int,f=e.posint,y=e.negint,z=e.viewId,h=e.text1;return _+='<div mxv mxa="_zs_gallerycn:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycn:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycn:b" class="clearfix"><input mxe="'+n+'_0" mxc="[{p:\'number\',f:{number:true}}]" class="input mr20 mb20" placeholder="数字" value="'+a(v)+'"/> <input mxe="'+n+'_1" mxc="[{p:\'int\',f:{int:true}}]" class="input mr20 mb20" placeholder="整数" value="'+a(g)+'"/> <input mxe="'+n+'_2" mxc="[{p:\'posint\',f:{posint:[true,\'自定义提示输入正整数\']}}]" class="input mr20 mb20" placeholder="正整数" value="'+a(f)+'"/> <input mxe="'+n+'_3" mxc="[{p:\'negint\',f:{negint:[true,\'自定义提示输入负整数\']}}]" class="input mr20 mb20" placeholder="负整数" value="'+a(y)+'"/></div></div><div mxa="_zs_gallerycn:c" class="_zs_galleryk"><div mxs="_zs_gallerycn:_" class="_zs_galleryi">整数</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_1"><span mxa="_zs_gallerycn:d" class="_zs_galleryn">'+t(h)+'</span><i mxs="_zs_gallerycn:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(z)+'_text_1">\n&lt;input class="input" placeholder="数字" value="&#123;&#123;:number&#123;number:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="整数" value="&#123;&#123;:int&#123;int:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="正整数" value="&#123;&#123;:posint&#123;posint:[true,\'自定义提示输入正整数\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="负整数" value="&#123;&#123;:negint&#123;negint:[true,\'自定义提示输入负整数\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[t,i],render:function(){this.updater.digest()}})});