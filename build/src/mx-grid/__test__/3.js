define("mx-grid/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,r,l)=>{t("mx-copy/index"),t("__test__/hl");var g=t("magix"),i=t("__test__/example");t("$");g.applyStyle("_zs_galleryU","._zs_galleryfW{opacity:.1}._zs_galleryfW,._zs_galleryfX{background-color:var(--color-brand)}._zs_galleryfX{opacity:.2}._zs_galleryfY{opacity:.3}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.4}._zs_galleryg_{padding:16px;background-color:var(--app-bg)}"),l.exports=i.extend({tmpl:function(t,r,l,g,i,e,a,c){if(l||(l=t),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(t){return"&"+d[t]+";"};i=function(t){return""+(null==t?"":t)},g=function(t){return i(t).replace(s,x)}}if(!e){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(t){return m[t]},v=/[!')(*]/g;e=function(t){return encodeURIComponent(i(t)).replace(v,n)}}if(!c){var _=/[\\'"]/g;c=function(t){return i(t).replace(_,"\\$&")}}var f="",o=t.viewId,u=t.text1;return f+='<div mxa="_zs_galleryb~:_" class="_zs_galleryg"><div mxs="_zs_galleryb~:_" class="_zs_galleryj"><div class="mb10">justify（主轴对齐方式）</div><div class="mb10">1. left（默认值）：左对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfW" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">2. right：右对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-end;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfW" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">3. center：居中</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: center;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfW" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: space-between;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfW" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: space-around;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfW" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryb~:a" class="_zs_galleryk"><div mxs="_zs_galleryb~:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(o)+'_text_1"><span mxa="_zs_galleryb~:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryb~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+g(o)+'_text_1">\n&lt;!-- 1. left（默认值）：左对齐 --&gt;\n&lt;mx-grid.row justify="left" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 2. right：右对齐 --&gt;\n&lt;mx-grid.row justify="right" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 3. center：居中 --&gt;\n&lt;mx-grid.row justify="center" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。 --&gt;\n&lt;mx-grid.row justify="space-between" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。 --&gt;\n&lt;mx-grid.row justify="space-around" height="60px" gutter="10px"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});