define("mx-form/__test__/8",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example"),n=e("mx-form/index"),r=e("mx-form/validator");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,n,r,s,t){if(a||(a=e),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+_[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(d,m)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(o,c)}}if(!t){var u=/[\\'"]/g;t=function(e){return n(e).replace(u,"\\$&")}}s||(s=function(e,l,a,i){for(i=e[p];--i;)if(e[a=p+i]===l)return a;return e[a=p+e[p]++]=l,a});var p="",g="",v=e.id,y=e.name,f=e.viewId,z=e.text1,b=e.text2;return g+='<div mxv mxa="_zs_galleryb(:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb(:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb(:b" class="clearfix"><input class="input mr20 mb20" placeholder="节点1" id="'+i(v)+'"/> <input mxe="'+l+"_0\" mxc=\"[{p:'name',f:{equalto:'"+s(a,v)+'\'}}]" class="input mr20 mb20" placeholder="同节点1" value="'+i(y)+'"/> <input mxe="'+l+"_1\" mxc=\"[{p:'name',f:{equalto:['"+s(a,v)+'\',\'自定义提示\']}}]" class="input mr20 mb20" placeholder="同节点1，自定义提示" value="'+i(y)+'"/></div></div><div mxa="_zs_galleryb(:c" class="clearfix"><div mxa="_zs_galleryb(:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryb(:_" class="_zs_galleryi">与某个节点的结果保持一致</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_galleryb(:e" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryb(:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+'_text_1">\n&lt;input class="input" placeholder="节点1" \n    id="&#123;&#123;=id&#125;&#125;"/&gt;\n\n&lt;!-- 双向绑定支持绑定动态参数，如下绑定动态id --&gt;\n&lt;input class="input" placeholder="同节点1" \n    value="&#123;&#123;:name&#123;equalto:id&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="同节点1，自定义提示" \n    value="&#123;&#123;:name&#123;equalto:[id,\'自定义提示\']&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryb(:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb(:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_2"><span mxa="_zs_galleryb(:g" class="_zs_galleryn">'+n(b)+'</span><i mxs="_zs_galleryb(:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            id: this.id + '_node'\n        });\n    }\n});</pre></div></div></div>"},mixins:[n,r],render:function(){var e=this.id+"_node";this.updater.digest({id:e})}})});