define("mx-grid/examples/2",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,r,e)=>{l("mx-copy/index"),l("examples/hl");var a=l("magix"),g=l("examples/example");l("$");a.applyStyle("_zs_galleryV","._zs_galleryfZ{opacity:.1}._zs_galleryfZ,._zs_galleryg_{background-color:var(--color-brand)}._zs_galleryg_{opacity:.2}._zs_galleryga{opacity:.3}._zs_galleryga,._zs_gallerygb{background-color:var(--color-brand)}._zs_gallerygb{opacity:.4}._zs_gallerygc{padding:16px;background-color:var(--app-bg)}"),e.exports=g.extend({tmpl:function(l,r,e,a,g,t,i,s){if(e||(e=l),!g){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(l){return"&"+c[l]+";"};g=function(l){return""+(null==l?"":l)},a=function(l){return g(l).replace(x,d)}}if(!t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(l){return n[l]},m=/[!')(*]/g;t=function(l){return encodeURIComponent(g(l)).replace(m,_)}}if(!s){var o=/[\\'"]/g;s=function(l){return g(l).replace(o,"\\$&")}}var p="",y=l.viewId,v=l.text1;return p+='<div mxa="_zs_gallerycC:_" class="_zs_galleryg"><div mxs="_zs_gallerycC:_" class="_zs_galleryj"><div class="mb10">某一个固定宽度，最右侧固定为100px，剩余部分自适应</div><div style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)"><div flex="1" class="_zs_galleryfZ" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div flex="1" class="_zs_galleryg_" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div class="_zs_galleryga" style="flex: 0 0 100px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div></div></div><div mxa="_zs_gallerycC:a" class="_zs_galleryk"><div mxs="_zs_gallerycC:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_1"><span mxa="_zs_gallerycC:b" class="_zs_galleryn">'+g(v)+'</span><i mxs="_zs_gallerycC:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;!-- 某一个固定宽度 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="100px" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});