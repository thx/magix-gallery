define("mx-form/__test__/11",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,_,t)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),a=e("mx-form/index"),s=e("mx-form/validator");e("$");t.exports=l.extend({tmpl:function(e,_,t,l,a,s,r,c){if(t||(t=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(n,o)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(m,d)}}if(!c){var y=/[\\'"]/g;c=function(e){return a(e).replace(y,"\\$&")}}var u,g,v,b="",h=e.checkboxes,p=(e.selected,e.viewId),f=e.text1,z=e.text2;try{b+='<div mxv mxa="_zs_galleryb,:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb,:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb,:b" class="mb20"><span mxs="_zs_galleryb,:_" class="color-9 mr20">checkbox至少选择一个：</span>',v=5,g="each checkboxes as c",u="<%for (var $art_iykoubfsyw$art_i = 0, $art_ctjxmqdre$art_c = checkboxes.length; $art_iykoubfsyw$art_i < $art_ctjxmqdre$art_c; $art_iykoubfsyw$art_i++) {    var c = checkboxes[$art_iykoubfsyw$art_i]%>";for(var k=0,w=h.length;k<w;k++){var $=h[k];b+='<label mxv mxa="_zs_galleryb,:c" class="mr30"><input mxe="'+_+'_0" mxc="[',v=8,g=":selected{required:[true,'必选']}",b+='{p:\'selected\',f:{required:[true,\'必选\']}}]" type="checkbox" name="cb" value="',v=7,g="=c",b+=(u="<%=c%>",l($)+'" class="checkbox"/>'),v=9,g="=c",b+=(u="<%=c%>",l($)+"</label>"),v=11,g="/each",u="<%}%>"}b+='</div></div><div mxa="_zs_galleryb,:d" class="clearfix"><div mxa="_zs_galleryb,:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryb,:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',v=17,g="=viewId",b+=(u="<%!$eu(viewId)%>",s(p)+'_text_1"><span mxa="_zs_galleryb,:f" class="_zs_gallery___test___layout_-desc-tip">'),v=19,g="!text1",b+=(u="<%!text1%>",a(f)+'</span><i mxs="_zs_galleryb,:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=22,g="=viewId",b+=(u="<%=viewId%>",l(p)+'_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each checkboxes as c&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="checkbox" class="checkbox" \n            name="cb" \n            value="&#123;&#123;=c&#125;&#125;" \n            &#123;&#123;:selected&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=c&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryb,:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb,:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=37,g="=viewId",b+=(u="<%!$eu(viewId)%>",s(p)+'_text_2"><span mxa="_zs_galleryb,:h" class="_zs_gallery___test___layout_-desc-tip">'),v=39,g="!text2",b+=(u="<%!text2%>",a(z)+'</span><i mxs="_zs_galleryb,:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=42,g="=viewId",b+=(u="<%=viewId%>",l(p)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: ['checkbox1'],\n            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3']\n        });\n    }\n});</pre></div></div></div>")}catch(e){var I="render view error:"+(e.message||e);throw g&&(I+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+v),I+="\r\n\t"+(g?"translate to:":"expr:"),I+=u+"\r\n\tat file:mx-form/__test__/11.html"}return b},mixins:[a,s],render:function(){this.updater.digest({selected:["checkbox1"],checkboxes:["checkbox1","checkbox2","checkbox3"]})}})});