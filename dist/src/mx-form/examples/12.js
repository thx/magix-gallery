define("mx-form/examples/12",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example"),s=e("mx-form/index"),i=e("mx-form/validator");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,s,i,n,c){if(a||(a=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(m,x)}}if(!i){var t={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return t[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(o,_)}}if(!c){var g=/[\\'"]/g;c=function(e){return s(e).replace(g,"\\$&")}}var v="",p=e.radioes,y=(e.selected,e.viewId),u=e.text1,z=e.text2;v+='<div mxv mxa="_zs_gallerycc:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycc:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycc:b" class="mb20"><span mxs="_zs_gallerycc:_" class="color-9 mr20">radio：</span>';for(var f=0,h=p.length;f<h;f++){var b=p[f];v+='<label mxv mxa="_zs_gallerycc:c" class="mr30"><input mxe="'+l+'_0" mxc="[{p:\'selected\'}]" type="radio" value="'+r(b)+'" class="radio" name="magix"/>'+r(b)+"</label>"}return v+='</div></div><div mxa="_zs_gallerycc:d" class="clearfix"><div mxa="_zs_gallerycc:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycc:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_gallerycc:f" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerycc:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(y)+'_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each radioes as r&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="radio" class="radio" \n            name="magix" \n            value="&#123;&#123;=r&#125;&#125;" \n            &#123;&#123;:selected&#125;&#125; /&gt;\n        &#123;&#123;=r&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerycc:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycc:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_gallerycc:h" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerycc:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(y)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: 'radio2',\n            radioes: ['radio1', 'radio2', 'radio3']\n        });\n    }\n});</pre></div></div></div>"},mixins:[s,i],render:function(){this.updater.digest({selected:"radio2",radioes:["radio1","radio2","radio3"]})}})});