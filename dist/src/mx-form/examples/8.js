define("mx-form/examples/8",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example"),i=e("mx-form/index"),n=e("mx-form/validator");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,i,n,s,t){if(a||(a=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(d,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(o,_)}}if(!t){var p=/[\\'"]/g;t=function(e){return i(e).replace(p,"\\$&")}}s||(s=function(e,l,a,r){for(r=e[u];--r;)if(e[a=u+r]===l)return a;return e[a=u+e[u]++]=l,a});var u="",g="",v=e.id,y=e.name,f=e.viewId,z=e.text1,h=e.text2;return g+='<div mxv mxa="_zs_gallerycr:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycr:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycr:b" class="clearfix"><input class="input mr20 mb20" placeholder="节点1" id="'+r(v)+'"/> <input mxe="'+l+"_0\" mxc=\"[{p:'name',f:{equalto:'"+s(a,v)+'\'}}]" class="input mr20 mb20" placeholder="同节点1" value="'+r(y)+'"/> <input mxe="'+l+"_1\" mxc=\"[{p:'name',f:{equalto:['"+s(a,v)+'\',\'自定义提示\']}}]" class="input mr20 mb20" placeholder="同节点1，自定义提示" value="'+r(y)+'"/></div></div><div mxa="_zs_gallerycr:c" class="clearfix"><div mxa="_zs_gallerycr:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycr:_" class="_zs_galleryi">与某个节点的结果保持一致</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_gallerycr:e" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_gallerycr:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+'_text_1">\n&lt;input class="input" placeholder="节点1" \n    id="&#123;&#123;=id&#125;&#125;"/&gt;\n\n&lt;!-- 双向绑定支持绑定动态参数，如下绑定动态id --&gt;\n&lt;input class="input" placeholder="同节点1" \n    value="&#123;&#123;:name&#123;equalto:id&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="同节点1，自定义提示" \n    value="&#123;&#123;:name&#123;equalto:[id,\'自定义提示\']&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerycr:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycr:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_gallerycr:g" class="_zs_galleryn">'+i(h)+'</span><i mxs="_zs_gallerycr:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            id: this.id + '_node'\n        });\n    }\n});</pre></div></div></div>"},mixins:[i,n],render:function(){var e=this.id+"_node";this.updater.digest({id:e})}})});