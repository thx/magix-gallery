define("mx-grid/examples/9",["magix","examples/example","$","./grid-body","mx-copy/index","examples/hl"],(l,e,r)=>{l("./grid-body"),l("mx-copy/index"),l("examples/hl");var a=l("magix"),g=l("examples/example");l("$");a.applyStyle("_zs_galleryW","._zs_gallerygc{opacity:.1}._zs_gallerygc,._zs_gallerygd{background-color:var(--color-brand)}._zs_gallerygd{opacity:.2}._zs_galleryge{opacity:.3}._zs_galleryge,._zs_gallerygf{background-color:var(--color-brand)}._zs_gallerygf{opacity:.4}._zs_gallerygg{padding:16px;background-color:var(--app-bg)}"),r.exports=g.extend({tmpl:function(l,e,r,a,g,i,d,s){if(r||(r=l),!g){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,t=function(l){return"&"+n[l]+";"};g=function(l){return""+(null==l?"":l)},a=function(l){return g(l).replace(_,t)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return c[l]},o=/[!')(*]/g;i=function(l){return encodeURIComponent(g(l)).replace(o,x)}}if(!s){var y=/[\\'"]/g;s=function(l){return g(l).replace(y,"\\$&")}}var m="",p=l.viewId,v=l.text1;return m+='<div mxa="_zs_gallerycA:_" class="_zs_galleryg"><div mxs="_zs_gallerycA:_" class="_zs_galleryj"><div class="mb10">内容区域支持指定一个view：</div><div class="_zs_gallerygg"><div class="grid"><div mx-view="mx-grid/examples/grid-body" class="clearfix" style="padding: 16px 24px;"></div></div></div></div><div mxa="_zs_gallerycA:a" class="_zs_galleryk"><div mxs="_zs_gallerycA:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_gallerycA:b" class="_zs_galleryn">'+g(v)+'</span><i mxs="_zs_gallerycA:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(p)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.body mx-view="@./grid-body"&gt;&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n\n&lt;mx-grid&gt;\n    &lt;mx-grid.body&gt;grid-body&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});