define("mx-grid/__test__/9",["magix","__test__/example","$","./grid-body","mx-copy/index","__test__/hl"],(l,_,e)=>{l("./grid-body"),l("mx-copy/index"),l("__test__/hl");var r=l("magix"),a=l("__test__/example");l("$");r.applyStyle("_zs_galleryU","._zs_galleryfU{opacity:.1}._zs_galleryfU,._zs_galleryfV{background-color:var(--color-brand)}._zs_galleryfV{opacity:.2}._zs_galleryfW{opacity:.3}._zs_galleryfW,._zs_galleryfX{background-color:var(--color-brand)}._zs_galleryfX{opacity:.4}._zs_galleryfY{padding:16px;background-color:var(--app-bg)}"),e.exports=a.extend({tmpl:function(l,_,e,r,a,i,d,t){if(e||(e=l),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(l){return"&"+s[l]+";"};a=function(l){return""+(null==l?"":l)},r=function(l){return a(l).replace(g,n)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return c[l]},y=/[!')(*]/g;i=function(l){return encodeURIComponent(a(l)).replace(y,o)}}if(!t){var x=/[\\'"]/g;t=function(l){return a(l).replace(x,"\\$&")}}var m="",v=l.viewId,p=l.text1;return m+='<div mxa="_zs_galleryc_:_" class="_zs_galleryg"><div mxs="_zs_galleryc_:_" class="_zs_galleryj"><div class="mb10">内容区域支持指定一个view：</div><div class="_zs_galleryfY"><div class="grid"><div mx-view="mx-grid/__test__/grid-body" class="clearfix" style="padding: 16px 24px;"></div></div></div></div><div mxa="_zs_galleryc_:a" class="_zs_galleryk"><div mxs="_zs_galleryc_:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_galleryc_:b" class="_zs_galleryn">'+a(p)+'</span><i mxs="_zs_galleryc_:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(v)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.body mx-view="@./grid-body"&gt;&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n\n&lt;mx-grid&gt;\n    &lt;mx-grid.body&gt;grid-body&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});