define("mx-form/examples/18",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(l,a,s)=>{l("mx-copy/index"),l("examples/hl");l("magix");var t=l("examples/example"),e=l("mx-form/index"),i=l("mx-form/validator");l("$");s.exports=t.extend({tmpl:function(l,a,s,t,e,i,r,m){if(s||(s=l),!e){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+n[l]+";"};e=function(l){return""+(null==l?"":l)},t=function(l){return e(l).replace(c,d)}}if(!i){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return v[l]},x=/[!')(*]/g;i=function(l){return encodeURIComponent(e(l)).replace(x,o)}}if(!m){var g=/[\\'"]/g;m=function(l){return e(l).replace(g,"\\$&")}}var _="",f=l.viewId,p=l.text1;return _+='<div mxv mxa="_zs_gallerych:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerych:a" class="_zs_galleryj clearfix"><div mxs="_zs_gallerych:_" class="mb10 lh22"><div>默认左侧文字提示预留8个字的位置，margin-bottom:30px</div><div>class：form form-item form-label form-content</div></div><form mxv mxa="_zs_gallerych:b" class="form"><div mxv mxa="_zs_gallerych:c" class="form-item"><div mxs="_zs_gallerych:a" class="form-label">输入框</div><div mxv mxa="_zs_gallerych:d" class="form-content"><input mxs="_zs_gallerych:b" class="input w200"/></div></div><div mxv mxa="_zs_gallerych:e" class="form-item"><div mxs="_zs_gallerych:a" class="form-label">输入框</div><div mxv mxa="_zs_gallerych:f" class="form-content"><input mxs="_zs_gallerych:b" class="input w200"/></div></div><div mxs="_zs_gallerych:c" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+a+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_gallerych:g" class="_zs_galleryk"><div mxs="_zs_gallerych:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerych:h" class="_zs_galleryn">'+e(p)+'</span><i mxs="_zs_gallerych:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;form class="form"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[e,i],render:function(){this.updater.digest({viewId:this.id})}})});