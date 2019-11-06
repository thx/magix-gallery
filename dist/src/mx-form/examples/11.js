define("mx-form/examples/11",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var c=e("examples/example"),s=e("mx-form/index"),r=e("mx-form/validator");e("$");a.exports=c.extend({tmpl:function(e,l,a,c,s,r,x,i){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,t=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},c=function(e){return s(e).replace(m,t)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return _[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(o,d)}}if(!i){var g=/[\\'"]/g;i=function(e){return s(e).replace(g,"\\$&")}}var v="",p=e.checkboxes,y=(e.selected,e.viewId),u=e.text1,z=e.text2;v+='<div mxv mxa="_zs_gallerycg:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycg:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycg:b" class="mb20"><span mxs="_zs_gallerycg:_" class="color-9 mr20">checkbox至少选择一个：</span>';for(var b=0,h=p.length;b<h;b++){var f=p[b];v+='<label mxv mxa="_zs_gallerycg:c" class="mr30"><input mxe="'+l+'_0" mxc="[{p:\'selected\',f:{required:[true,\'必选\']}}]" type="checkbox" name="cb" value="'+c(f)+'" class="checkbox"/>'+c(f)+"</label>"}return v+='</div></div><div mxa="_zs_gallerycg:d" class="clearfix"><div mxa="_zs_gallerycg:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycg:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerycg:f" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerycg:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+c(y)+'_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each checkboxes as c&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="checkbox" class="checkbox" \n            name="cb" \n            value="&#123;&#123;=c&#125;&#125;" \n            &#123;&#123;:selected&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=c&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerycg:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycg:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_2"><span mxa="_zs_gallerycg:h" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerycg:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+c(y)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: ['checkbox1'],\n            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3']\n        });\n    }\n});</pre></div></div></div>"},mixins:[s,r],render:function(){this.updater.digest({selected:["checkbox1"],checkboxes:["checkbox1","checkbox2","checkbox3"]})}})});