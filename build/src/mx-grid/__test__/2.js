define("mx-grid/__test__/2",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,r,e)=>{l("mx-copy/index"),l("__test__/hl");var t=l("magix"),a=l("__test__/example");l("$");t.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),e.exports=a.extend({tmpl:function(l,r,e,t,a,g,i,_){if(e||(e=l),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+s[l]+";"};a=function(l){return""+(null==l?"":l)},t=function(l){return a(l).replace(c,d)}}if(!g){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return n[l]},m=/[!')(*]/g;g=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!_){var o=/[\\'"]/g;_=function(l){return a(l).replace(o,"\\$&")}}var y="",v=l.viewId,p=l.text1;return y+='<div mxa="_zs_galleryce:_" class="_zs_galleryg"><div mxs="_zs_galleryce:_" class="_zs_galleryj"><div class="mb10">某一个固定宽度，最右侧固定为100px，剩余部分自适应</div><div style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_galleryfY" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="1" class="_zs_galleryfZ" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryg_" style="flex: 0 0 100px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryce:a" class="_zs_galleryk"><div mxs="_zs_galleryce:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+g(v)+'_text_1"><span mxa="_zs_galleryce:b" class="_zs_galleryn">'+a(p)+'</span><i mxs="_zs_galleryce:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;!-- 某一个固定宽度 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="100px" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});