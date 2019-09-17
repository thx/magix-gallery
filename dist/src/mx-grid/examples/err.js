define("mx-grid/examples/err",["magix","$"],(l,e,r)=>{var s=l("magix");l("$");r.exports=s.View.extend({tmpl:function(l,e,r,s,i,n,a,d){if(r||(r=l),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,t=function(l){return"&"+c[l]+";"};i=function(l){return""+(null==l?"":l)},function(l){return i(l).replace(o,t)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(l){return v[l]},x=/[!')(*]/g;n=function(l){return encodeURIComponent(i(l)).replace(x,f)}}if(!d){var g=/[\\'"]/g;d=function(l){return i(l).replace(g,"\\$&")}}return'<div mxs="_zs_gallerycJ:_" class="lh22">mx-grid使用 flex 布局，flex 布局存在的一个问题，容器如果不设置宽度，可以被子节点无限撑开。</div><div mxs="_zs_gallerycJ:a" class="lh22">为了避免这种情况，可在容器上加上样式<span class="color-brand">overflow: hidden;</span></div><div mxs="_zs_gallerycJ:b" class="lh22">则可保证在容器设置了 flex 时，它会动态的获得父容器的剩余宽度，且不会被自己的子元素把内容撑开。</div><div mxs="_zs_gallerycJ:c" class="lh22">组件没有直接限制死overflow: hidden; 避免一些场景无法实现</div>','<div mxs="_zs_gallerycJ:_" class="lh22">mx-grid使用 flex 布局，flex 布局存在的一个问题，容器如果不设置宽度，可以被子节点无限撑开。</div><div mxs="_zs_gallerycJ:a" class="lh22">为了避免这种情况，可在容器上加上样式<span class="color-brand">overflow: hidden;</span></div><div mxs="_zs_gallerycJ:b" class="lh22">则可保证在容器设置了 flex 时，它会动态的获得父容器的剩余宽度，且不会被自己的子元素把内容撑开。</div><div mxs="_zs_gallerycJ:c" class="lh22">组件没有直接限制死overflow: hidden; 避免一些场景无法实现</div>'},render:function(){this.updater.digest()}})});