define("mx-form/examples/2",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,r)=>{e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),s=e("mx-form/index"),n=e("mx-form/validator");e("$");r.exports=a.extend({tmpl:function(e,l,r,a,s,n,i,m){if(r||(r=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,x)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return d[e]},u=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(u,_)}}if(!m){var p=/[\\'"]/g;m=function(e){return s(e).replace(p,"\\$&")}}i||(i=function(e,l,r,a){for(a=e[o];--a;)if(e[r=o+a]===l)return r;return e[r=o+e[o]++]=l,r});var o="",g="",v=e.name,y=e.rules,f=e.viewId,z=e.text1,b=e.text2;return g+='<div mxv mxa="_zs_gallerycb:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycb:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycb:b" class="mb20"><span mxs="_zs_gallerycb:_" class="color-9 mr20">必填项：</span><input mxe="'+l+'_0" mxc="[{p:\'name\',f:{required:true}}]" class="input mr20" placeholder="必填项" value="'+a(v)+'"/> <input mxe="'+l+"_1\" mxc=\"[{p:'name',f:'"+i(r,y)+'\'}]" class="input mr20" placeholder="必填项" value="'+a(v)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'name\',f:{placement:\'right\',required:true}}]" class="input mr20" placeholder="必填项，提示在右侧" value="'+a(v)+'"/></div></div><div mxa="_zs_gallerycb:c" class="clearfix"><div mxa="_zs_gallerycb:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycb:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_gallerycb:e" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerycb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_1">\n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n    \n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&rules&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="必填项，提示在右侧" \n    value="&#123;&#123;:name&#123;placement:\'right\',required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerycb:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycb:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_gallerycb:g" class="_zs_galleryn">'+s(b)+'</span><i mxs="_zs_gallerycb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            rules: &#123;\n                required:true\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[s,n],render:function(){this.updater.digest({rules:{required:!0}})}})});