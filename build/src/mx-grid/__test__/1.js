define("mx-grid/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,r,t)=>{l("mx-copy/index"),l("__test__/hl");var e=l("magix"),a=l("__test__/example");l("$");e.applyStyle("_zs_galleryU","._zs_galleryfU{opacity:.1}._zs_galleryfU,._zs_galleryfV{background-color:var(--color-brand)}._zs_galleryfV{opacity:.2}._zs_galleryfW{opacity:.3}._zs_galleryfW,._zs_galleryfX{background-color:var(--color-brand)}._zs_galleryfX{opacity:.4}._zs_galleryfY{padding:16px;background-color:var(--app-bg)}"),t.exports=a.extend({tmpl:function(l,r,t,e,a,g,i,s){if(t||(t=l),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(l){return"&"+_[l]+";"};a=function(l){return""+(null==l?"":l)},e=function(l){return a(l).replace(c,x)}}if(!g){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return d[l]},m=/[!')(*]/g;g=function(l){return encodeURIComponent(a(l)).replace(m,n)}}if(!s){var o=/[\\'"]/g;s=function(l){return a(l).replace(o,"\\$&")}}var f="",y=l.viewId,v=l.text1;f+='<div mxa="_zs_galleryb.:_" class="_zs_galleryg"><div mxa="_zs_galleryb.:a" class="_zs_galleryj"><div mxs="_zs_galleryb.:_" class="mb10">1:1:1:1等分，间隔为20px</div><div mxa="_zs_galleryb.:b" class="mb40" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);">';for(var p=0;p<4;p+=1)f+='<div mxs="_zs_galleryb.:a" class="_zs_galleryfU" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div>';return f+='</div><div mxs="_zs_galleryb.:b" class="mb10">1:3:1，间隔为20px</div><div mxs="_zs_galleryb.:c" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_galleryfU" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="3" class="_zs_galleryfV" style="flex: 3;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="1" class="_zs_galleryfW" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryb.:c" class="_zs_galleryk"><div mxs="_zs_galleryb.:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+g(y)+'_text_1"><span mxa="_zs_galleryb.:d" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_galleryb.:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(y)+'_text_1">\n&lt;!-- 1:1:1:1（支持动态） --&gt;\n&lt;mx-grid.row height="100px" gutter="20px" class="mb40"&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 1:3:1 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="3" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});