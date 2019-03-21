define("mx-grid/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,r,l)=>{t("mx-copy/index"),t("__test__/hl");var g=t("magix"),i=t("__test__/example");t("$");g.applyStyle("_zs_galleryV","._zs_gallerygW{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygX{opacity:.1}._zs_gallerygX,._zs_gallerygY{background-color:#4d7fff}._zs_gallerygY{opacity:.2}._zs_gallerygZ{opacity:.3}._zs_gallerygZ,._zs_galleryh_{background-color:#4d7fff}._zs_galleryh_{opacity:.4}._zs_galleryha{opacity:.5}._zs_galleryha,._zs_galleryhb{background-color:#4d7fff}._zs_galleryhb{opacity:.6}._zs_galleryhc{opacity:.7}._zs_galleryhc,._zs_galleryhd{background-color:#4d7fff}._zs_galleryhd{opacity:.8}._zs_galleryhe{opacity:.9}._zs_galleryhe,._zs_galleryhf{background-color:#4d7fff}._zs_galleryhf{opacity:1}._zs_galleryhg{padding:16px;background-color:#e8ebf2}"),l.exports=i.extend({tmpl:function(t,r,l,g,i,a,e,c){if(l||(l=t),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(t){return"&"+s[t]+";"};i=function(t){return""+(null==t?"":t)},g=function(t){return i(t).replace(d,x)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(t){return m[t]},_=/[!')(*]/g;a=function(t){return encodeURIComponent(i(t)).replace(_,n)}}if(!c){var o=/[\\'"]/g;c=function(t){return i(t).replace(o,"\\$&")}}var v="",y=t.viewId,f=t.text1;return v+='<div mxa="_zs_galleryb(:_" class="_zs_galleryh"><div mxs="_zs_galleryb(:_" class="_zs_galleryk"><div class="mb10">justify（主轴对齐方式）</div><div class="mb10">1. left（默认值）：左对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">2. right：右对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-end;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">3. center：居中</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: center;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: space-between;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: space-around;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygY" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryb(:a" class="_zs_galleryl"><div mxs="_zs_galleryb(:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryb(:b" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryb(:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+g(y)+'_text_1">\n&lt;!-- 1. left（默认值）：左对齐 --&gt;\n&lt;mx-grid.row justify="left" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 2. right：右对齐 --&gt;\n&lt;mx-grid.row justify="right" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 3. center：居中 --&gt;\n&lt;mx-grid.row justify="center" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。 --&gt;\n&lt;mx-grid.row justify="space-between" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。 --&gt;\n&lt;mx-grid.row justify="space-around" height="60px" gutter="10px"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});