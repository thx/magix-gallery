define("mx-table/examples/desc",["magix","$","examples/subs","mx-title/second","examples/api"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("examples/api");var n=e("magix");e("$");t.exports=n.View.extend({tmpl:function(e,i,t,n,s,a,d,l){if(t||(t=e),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(r,c)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return p[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(v,m)}}if(!l){var u=/[\\'"]/g;l=function(e){return s(e).replace(u,"\\$&")}}d||(d=function(e,i,t,n){for(n=e[x];--n;)if(e[t=x+n]===i)return t;return e[t=x+e[x]++]=i,t});var x="",f="",y=e.viewId,b=e.options;return f+='<div mxv mxa="_zs_galleryeG:_" class="pr pr120"><div mx-view="examples/subs?list='+d(t,[{name:"注意事项",key:y+"_note"},{name:"API",key:y+"_api"}])+'"></div><div id="'+n(y)+'_note" mx-view="mx-title/second?content=%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"></div><div mxs="_zs_galleryeG:_" class="mb40 lh28"><div>1. mixins组件是附件行为，涉及操作dom，渲染表格涉及的参数建议直接挂载在组件上，确保每次digest更新时，数据能和展现保持一致&lt;mx-table sticky="true"<span class="color-brand ml5">list="&#123;&#123;@list&#125;&#125;"</span>&gt;）。</div><div>2. 表格内如果渲染了子view，请<span class="color-brand">提前设置子view的高度</span>；组件内计算高度的时候，如果子view未渲染完成，可能会出现偏差。</div><div>3. 表格组件会重新计算th，td的宽度，若自定义加上了table-layout: fixed;会导致重置宽度失效，所以组件内会覆盖设置table-layout: automatic;</div></div><div id="'+n(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+d(t,b)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"sticky",desc:"是否需要表头吸顶功能",type:"boolean",def:"false"},{key:"sticky-end",desc:"表头吸顶时，是否结束滚动时显示吸顶，滚动时隐藏吸顶",type:"boolean",def:"false"},{key:"scroll-wrapper",desc:"自定义滚动节点id",type:"string",def:"window"}]})}})});