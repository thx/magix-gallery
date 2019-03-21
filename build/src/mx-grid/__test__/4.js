define("mx-grid/__test__/4",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,t,g)=>{l("mx-copy/index"),l("__test__/hl");var i=l("magix"),e=l("__test__/example");l("$");i.applyStyle("_zs_galleryV","._zs_gallerygW{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygX{opacity:.1}._zs_gallerygX,._zs_gallerygY{background-color:#4d7fff}._zs_gallerygY{opacity:.2}._zs_gallerygZ{opacity:.3}._zs_gallerygZ,._zs_galleryh_{background-color:#4d7fff}._zs_galleryh_{opacity:.4}._zs_galleryha{opacity:.5}._zs_galleryha,._zs_galleryhb{background-color:#4d7fff}._zs_galleryhb{opacity:.6}._zs_galleryhc{opacity:.7}._zs_galleryhc,._zs_galleryhd{background-color:#4d7fff}._zs_galleryhd{opacity:.8}._zs_galleryhe{opacity:.9}._zs_galleryhe,._zs_galleryhf{background-color:#4d7fff}._zs_galleryhf{opacity:1}._zs_galleryhg{padding:16px;background-color:#e8ebf2}"),g.exports=e.extend({tmpl:function(l,t,g,i,e,r,s,a){if(g||(g=l),!e){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(l){return"&"+d[l]+";"};e=function(l){return""+(null==l?"":l)},i=function(l){return e(l).replace(c,x)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return _[l]},n=/[!')(*]/g;r=function(l){return encodeURIComponent(e(l)).replace(n,o)}}if(!a){var m=/[\\'"]/g;a=function(l){return e(l).replace(m,"\\$&")}}var y="",h=l.viewId,p=l.text1;return y+='<div mxa="_zs_galleryb):_" class="_zs_galleryh"><div mxs="_zs_galleryb):_" class="_zs_galleryk"><div class="mb10">align（交叉轴对齐方式）</div><div class="mb10">1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 1;"></div><div class="_zs_gallerygY" style="flex: 1;"></div><div class="_zs_gallerygZ" style="flex: 1;"></div></div><div class="mb10">2. top：交叉轴的起点对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: flex-start;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygY" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygZ" style="flex: 1;height: 60px;"></div></div><div class="mb10">3. bottom：交叉轴的终点对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: flex-end;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygY" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygZ" style="flex: 1;height: 60px;"></div></div><div class="mb10">4. center：交叉轴的中点对齐</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: center;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygX" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygY" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygZ" style="flex: 1;height: 60px;"></div></div></div><div mxa="_zs_galleryb):a" class="_zs_galleryl"><div mxs="_zs_galleryb):a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(h)+'_text_1"><span mxa="_zs_galleryb):b" class="_zs_galleryo">'+e(p)+'</span><i mxs="_zs_galleryb):b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(h)+'_text_1">\n&lt;!-- 1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度 --&gt;\n&lt;mx-grid.row align="stretch" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- top：交叉轴的起点对齐 --&gt;\n&lt;mx-grid.row align="top" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- bottom：交叉轴的终点对齐 --&gt;\n&lt;mx-grid.row align="bottom" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- center：交叉轴的中点对齐 --&gt;\n&lt;mx-grid.row align="center" height="60px"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});