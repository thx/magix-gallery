define("mx-form/__test__/18",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(l,t,s)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var a=l("__test__/example"),i=l("mx-form/index"),e=l("mx-form/validator");l("$");s.exports=a.extend({tmpl:function(l,t,s,a,i,e,r,n){if(s||(s=l),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(l){return"&"+m[l]+";"};i=function(l){return""+(null==l?"":l)},a=function(l){return i(l).replace(_,c)}}if(!e){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return d[l]},v=/[!')(*]/g;e=function(l){return encodeURIComponent(i(l)).replace(v,o)}}if(!n){var g=/[\\'"]/g;n=function(l){return i(l).replace(g,"\\$&")}}var x="",f=l.viewId,b=l.text1;return x+='<div mxv mxa="_zs_galleryb5:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb5:a" class="_zs_galleryk clearfix"><div mxs="_zs_galleryb5:_" class="mb10 lh22"><div>默认左侧文字提示预留8个字的位置，margin-bottom:30px</div><div>class：form form-item form-label form-content</div></div><form mxv mxa="_zs_galleryb5:b" class="form"><div mxv mxa="_zs_galleryb5:c" class="form-item"><div mxs="_zs_galleryb5:a" class="form-label">输入框</div><div mxv mxa="_zs_galleryb5:d" class="form-content"><input mxs="_zs_galleryb5:b" class="input w200"/></div></div><div mxv mxa="_zs_galleryb5:e" class="form-item"><div mxs="_zs_galleryb5:a" class="form-label">输入框</div><div mxv mxa="_zs_galleryb5:f" class="form-content"><input mxs="_zs_galleryb5:b" class="input w200"/></div></div><div mxs="_zs_galleryb5:c" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+t+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_galleryb5:g" class="_zs_galleryl"><div mxs="_zs_galleryb5:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(f)+'_text_1"><span mxa="_zs_galleryb5:h" class="_zs_galleryo">'+i(b)+'</span><i mxs="_zs_galleryb5:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;form class="form"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[i,e],render:function(){this.updater.digest({viewId:this.id})}})});