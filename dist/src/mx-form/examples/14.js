define("mx-form/examples/14",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("mx-form/index"),n=e("mx-form/validator");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,n,r,t){if(a||(a=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(c,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(p,_)}}if(!t){var v=/[\\'"]/g;t=function(e){return i(e).replace(v,"\\$&")}}var g="",o=e.list,u=e.viewId,y=e.text1,f=e.text2;g+='<div mxv mxa="_zs_gallerycd:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycd:a" class="_zs_galleryj"><div mxs="_zs_gallerycd:_" class="mb20"><span class="color-9 mr20">动态添加（要求2 ~ 4个字符）：</span><a href="javascript:;" class="link-brand" mx-click="'+l+'add()">+ 再加一条</a></div><div mxv>';for(var z=0,h=o.length;z<h;z++){var k=o[z];g+='<input mxe="'+l+"_0_"+s(z)+'" mxc="[{p:\'list.'+s(z)+'.value\',f:{required:true,blength:[2,4]}}]" class="input mr20 mb20 w120" placeholder="请填写" value="'+s(k.value)+'"/>'}return g+='</div></div><div mxa="_zs_gallerycd:b" class="clearfix"><div mxa="_zs_gallerycd:c" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycd:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_gallerycd:d" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerycd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;a href="javascript:;"class="link-brand"\n    mx-click="add()"&gt;+ 再加一条&lt;/a&gt;\n\n&#123;&#123;each list as item&#125;&#125;\n&lt;input class="input mr20" placeholder="请填写" \n    value="&#123;&#123;:item.value&#123;required:true,blength:[2,4]&#125;&#125;&#125;"/&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div mxa="_zs_gallerycd:e" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycd:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_2"><span mxa="_zs_gallerycd:f" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerycd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 2; index++) &#123;\n            list.push(&#123;\n                key: index,\n                value: ''\n            &#125;)\n        &#125;\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    'add&lt;click&gt;'(e)&#123;\n        let list = this.updater.get('list');\n        let len = list.length;\n        list.push(&#123;\n            key: len,\n            value: 'test'\n        &#125;)\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[i,n],render:function(){for(var e=[],l=0;l<2;l++)e.push({key:l,value:""});this.updater.digest({list:e})},"add<click>":function(e){var l=this.updater.get("list"),a=l.length;l.push({key:a,value:"test"}),this.updater.digest({list:l})}})});