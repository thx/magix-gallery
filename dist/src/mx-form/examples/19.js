define("mx-form/examples/19",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(l,a,s)=>{l("mx-copy/index"),l("examples/hl");l("magix");var t=l("examples/example"),n=l("mx-form/index"),i=l("mx-form/validator");l("$");s.exports=t.extend({tmpl:function(l,a,s,t,n,i,e,r){if(s||(s=l),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+m[l]+";"};n=function(l){return""+(null==l?"":l)},t=function(l){return n(l).replace(c,d)}}if(!i){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return v[l]},g=/[!')(*]/g;i=function(l){return encodeURIComponent(n(l)).replace(g,o)}}if(!r){var x=/[\\'"]/g;r=function(l){return n(l).replace(x,"\\$&")}}var _="",f=l.viewId,p=l.text1;return _+='<div mxv mxa="_zs_gallerycn:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycn:a" class="_zs_galleryj clearfix"><div mxs="_zs_gallerycn:_" class="mb10 lh22"><div>class：small-form（margin-bottom:20px）；align-right（文字右对齐）</div></div><form mxv mxa="_zs_gallerycn:b" class="form small-form align-right"><div mxv mxa="_zs_gallerycn:c" class="form-item"><div mxs="_zs_gallerycn:a" class="form-label">请输入</div><div mxv mxa="_zs_gallerycn:d" class="form-content"><input mxs="_zs_gallerycn:b" class="input w200"/></div></div><div mxv mxa="_zs_gallerycn:e" class="form-item"><div mxs="_zs_gallerycn:c" class="form-label">右对齐输入框</div><div mxv mxa="_zs_gallerycn:f" class="form-content"><input mxs="_zs_gallerycn:b" class="input w200"/></div></div><div mxs="_zs_gallerycn:d" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+a+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_gallerycn:g" class="_zs_galleryk"><div mxs="_zs_gallerycn:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerycn:h" class="_zs_galleryn">'+n(p)+'</span><i mxs="_zs_gallerycn:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;form class="form small-form align-right"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;请输入&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;右对齐输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[n,i],render:function(){this.updater.digest({viewId:this.id})}})});