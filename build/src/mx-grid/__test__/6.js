define("mx-grid/__test__/6",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(r,t,l)=>{r("mx-copy/index"),r("__test__/hl");var g=r("magix"),i=r("__test__/example");r("$");g.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),l.exports=i.extend({tmpl:function(r,t,l,g,i,e,a,c){if(l||(l=r),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(r){return"&"+s[r]+";"};i=function(r){return""+(null==r?"":r)},g=function(r){return i(r).replace(d,x)}}if(!e){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(r){return _[r]},m=/[!')(*]/g;e=function(r){return encodeURIComponent(i(r)).replace(m,n)}}if(!c){var o=/[\\'"]/g;c=function(r){return i(r).replace(o,"\\$&")}}var p="",v=r.viewId,y=r.text1;return p+='<div mxa="_zs_galleryci:_" class="_zs_galleryg"><div mxs="_zs_galleryci:_" class="_zs_galleryj"><div class="mb10">嵌套：右侧固定200px，左侧自适应，间隔20px</div><div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_galleryfY" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div style="flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfZ" style="flex: 1;height: 20px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryg_" style="flex: 1;height: 40px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryga" style="flex: 1;height: 60px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div></div></div></div></div><div mxa="_zs_galleryci:a" class="_zs_galleryk"><div mxs="_zs_galleryci:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(v)+'_text_1"><span mxa="_zs_galleryci:b" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryci:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+g(v)+'_text_1">\n&lt;mx-grid.row gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="20px"&gt;\n            &lt;mx-grid.col class="grid2" height="20px"&gt;&lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid3" height="40px"&gt;&lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid4" height="60px"&gt;&lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});