define("mx-form/__test__/15",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-taginput/index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-taginput/index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example"),i=e("mx-form/index"),r=e("mx-form/validator");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,i,r,t,_){if(s||(s=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(x,d)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!_){var o=/[\\'"]/g;_=function(e){return i(e).replace(o,"\\$&")}}t||(t=function(e,l,s,a){for(a=e[v];--a;)if(e[s=v+a]===l)return s;return e[s=v+e[v]++]=l,s});var v="",p="",u=e.list,y=e.tags,f=e.viewId,z=e.text1,b=e.text2;return p+='<div mxv mxa="_zs_galleryb[:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb[:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb[:b" class="mb20 clearfix"><span mxs="_zs_galleryb[:_" class="color-9 mr20 fl lh32">taginput必选：</span><div mxv="list,tags" mxe="'+l+'_0" mxc="[{p:\'tags\',f:{required:true},a:\'selected\'}]" class="fl w220" mx-view="mx-taginput/index?list='+t(s,u)+"&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected="+t(s,y)+'"></div></div></div><div mxa="_zs_galleryb[:c" class="clearfix"><div mxa="_zs_galleryb[:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryb[:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_galleryb[:e" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryb[:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;mx-taginput class="w220"\n    list="&#123;&#123;@list&#125;&#125;"\n    placeholder="请选择标签"\n    selected="&#123;&#123;:tags&#123;required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryb[:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb[:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_2"><span mxa="_zs_galleryb[:g" class="_zs_galleryn">'+i(b)+'</span><i mxs="_zs_galleryb[:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [1, 2, 3],\n            tags: [1]\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[i,r],render:function(){this.updater.digest({list:[1,2,3],tags:[1]})}})});