define("mx-table/__test__/desc",["magix","$","__test__/subs","mx-title/second","__test__/api"],(t,e,i)=>{t("__test__/subs"),t("mx-title/second"),t("__test__/api");var n=t("magix");t("$");i.exports=n.View.extend({tmpl:function(t,e,i,n,s,d,a,r){if(i||(i=t),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,_=function(t){return"&"+o[t]+";"};s=function(t){return""+(null==t?"":t)},n=function(t){return s(t).replace(l,_)}}if(!d){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return v[t]},m=/[!')(*]/g;d=function(t){return encodeURIComponent(s(t)).replace(m,c)}}if(!r){var p=/[\\'"]/g;r=function(t){return s(t).replace(p,"\\$&")}}a||(a=function(t,e,i,n){for(n=t[u];--n;)if(t[i=u+n]===e)return i;return t[i=u+t[u]++]=e,i});var u="",x="",f=t.viewId,w=t.options;return x+='<div mxv mxa="_zs_galleryd!:_" class="pr pr120"><div mx-view="__test__/subs?list='+a(i,[{name:"注意事项",key:f+"_note"},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_note" mx-view="mx-title/second?content=%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"></div><div mxs="_zs_galleryd!:_" class="mb40 lh28"><div>1. mixins组件是附件行为，涉及操作dom，渲染表格涉及的参数建议直接挂载在组件上，确保每次digest更新时，数据能和展现保持一致&lt;mx-table sticky="true"<span class="color-brand ml5">list="&#123;&#123;@list&#125;&#125;"</span>&gt;）。</div><div>2. 表格内如果渲染了子view，请<span class="color-brand">提前设置子view的高度</span>；组件内计算高度的时候，如果子view未渲染完成，可能会出现偏差。</div><div>3. 表格组件会重新计算th，td的宽度，若自定义加上了table-layout: fixed;会导致重置宽度失效，所以组件内会覆盖设置table-layout: automatic;</div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+a(i,w)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"sticky",desc:"是否需要表头吸顶功能",type:"boolean",def:"false"},{key:"scroll-wrapper",desc:"自定义滚动节点id",type:"string",def:"window"}]})}})});