define("mx-form/__test__/20",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(l,t,s)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var a=l("__test__/example"),r=l("mx-form/index"),i=l("mx-form/validator");l("$");s.exports=a.extend({tmpl:function(l,t,s,a,r,i,e,m){if(s||(s=l),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(l){return"&"+n[l]+";"};r=function(l){return""+(null==l?"":l)},a=function(l){return r(l).replace(_,c)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return d[l]},v=/[!')(*]/g;i=function(l){return encodeURIComponent(r(l)).replace(v,o)}}if(!m){var f=/[\\'"]/g;m=function(l){return r(l).replace(f,"\\$&")}}var g="",x=l.viewId,b=l.text1;return g+='<div mxv mxa="_zs_galleryb~:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb~:a" class="_zs_galleryj clearfix"><div mxs="_zs_galleryb~:_" class="mb10 lh22"><div>class：form-4（左文字预留4个字），支持form-4，form-6，form-8，form-10</div></div><form mxv mxa="_zs_galleryb~:b" class="form form-4"><div mxv mxa="_zs_galleryb~:c" class="form-item"><div mxs="_zs_galleryb~:a" class="form-label">请输入</div><div mxv mxa="_zs_galleryb~:d" class="form-content"><input mxs="_zs_galleryb~:b" class="input w200"/></div></div><div mxv mxa="_zs_galleryb~:e" class="form-item"><div mxs="_zs_galleryb~:a" class="form-label">请输入</div><div mxv mxa="_zs_galleryb~:f" class="form-content"><input mxs="_zs_galleryb~:b" class="input w200"/></div></div><div mxs="_zs_galleryb~:c" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+t+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_galleryb~:g" class="_zs_galleryk"><div mxs="_zs_galleryb~:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(x)+'_text_1"><span mxa="_zs_galleryb~:h" class="_zs_galleryn">'+r(b)+'</span><i mxs="_zs_galleryb~:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(x)+'_text_1">\n&lt;form class="form form-4"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[r,i],render:function(){this.updater.digest({viewId:this.id})}})});