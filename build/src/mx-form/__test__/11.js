define("mx-form/__test__/11",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example"),r=e("mx-form/index"),c=e("mx-form/validator");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,r,c,_,t){if(s||(s=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(i,x)}}if(!c){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},d=/[!')(*]/g;c=function(e){return encodeURIComponent(r(e)).replace(d,o)}}if(!t){var g=/[\\'"]/g;t=function(e){return r(e).replace(g,"\\$&")}}var v="",b=e.checkboxes,y=(e.selected,e.viewId),p=e.text1,u=e.text2;v+='<div mxv mxa="_zs_gallerybC:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerybC:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerybC:b" class="mb20"><span mxs="_zs_gallerybC:_" class="color-9 mr20">checkbox至少选择一个：</span>';for(var h=0,z=b.length;h<z;h++){var f=b[h];v+='<label mxv mxa="_zs_gallerybC:c" class="mr30"><input mxe="'+l+'_0" mxc="[{p:\'selected\',f:{required:[true,\'必选\']}}]" type="checkbox" name="cb" value="'+a(f)+'" class="checkbox"/>'+a(f)+"</label>"}return v+='</div></div><div mxa="_zs_gallerybC:d" class="clearfix"><div mxa="_zs_gallerybC:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerybC:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(y)+'_text_1"><span mxa="_zs_gallerybC:f" class="_zs_galleryo">'+r(p)+'</span><i mxs="_zs_gallerybC:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each checkboxes as c&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="checkbox" class="checkbox" \n            name="cb" \n            value="&#123;&#123;=c&#125;&#125;" \n            &#123;&#123;:selected&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=c&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerybC:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallerybC:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+c(y)+'_text_2"><span mxa="_zs_gallerybC:h" class="_zs_galleryo">'+r(u)+'</span><i mxs="_zs_gallerybC:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: ['checkbox1'],\n            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3']\n        });\n    }\n});</pre></div></div></div>"},mixins:[r,c],render:function(){this.updater.digest({selected:["checkbox1"],checkboxes:["checkbox1","checkbox2","checkbox3"]})}})});