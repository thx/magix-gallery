define("mx-form/__test__/20",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(l,t,s)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var a=l("__test__/example"),e=l("mx-form/index"),i=l("mx-form/validator");l("$");s.exports=a.extend({tmpl:function(l,t,s,a,e,i,r,n){if(s||(s=l),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(l){return"&"+m[l]+";"};e=function(l){return""+(null==l?"":l)},a=function(l){return e(l).replace(_,c)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(l){return d[l]},o=/[!')(*]/g;i=function(l){return encodeURIComponent(e(l)).replace(o,v)}}if(!n){var g=/[\\'"]/g;n=function(l){return e(l).replace(g,"\\$&")}}var x="",f=l.viewId,b=l.text1;return x+='<div mxv mxa="_zs_galleryb0:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb0:a" class="_zs_galleryk clearfix"><div mxs="_zs_galleryb0:_" class="mb10 lh22"><div>class：form-6（左文字预留6个字符），支持4 ~ 10</div></div><form mxv mxa="_zs_galleryb0:b" class="form form-4"><div mxv mxa="_zs_galleryb0:c" class="form-item"><div mxs="_zs_galleryb0:a" class="form-label">请输入</div><div mxv mxa="_zs_galleryb0:d" class="form-content"><input mxs="_zs_galleryb0:b" class="input w200"/></div></div><div mxv mxa="_zs_galleryb0:e" class="form-item"><div mxs="_zs_galleryb0:a" class="form-label">请输入</div><div mxv mxa="_zs_galleryb0:f" class="form-content"><input mxs="_zs_galleryb0:b" class="input w200"/></div></div><div mxs="_zs_galleryb0:c" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+t+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_galleryb0:g" class="_zs_galleryl"><div mxs="_zs_galleryb0:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryb0:h" class="_zs_galleryo">'+e(b)+'</span><i mxs="_zs_galleryb0:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;form class="form form-4"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[e,i],render:function(){this.updater.digest({viewId:this.id})}})});