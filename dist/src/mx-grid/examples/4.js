define("mx-grid/examples/4",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,t,g)=>{l("mx-copy/index"),l("examples/hl");var i=l("magix"),e=l("examples/example");l("$");i.applyStyle("_zs_galleryW","._zs_gallerygb{opacity:.1}._zs_gallerygb,._zs_gallerygc{background-color:var(--color-brand)}._zs_gallerygc{opacity:.2}._zs_gallerygd{opacity:.3}._zs_gallerygd,._zs_galleryge{background-color:var(--color-brand)}._zs_galleryge{opacity:.4}._zs_gallerygf{padding:16px;background-color:var(--app-bg)}"),g.exports=e.extend({tmpl:function(l,t,g,i,e,r,s,a){if(g||(g=l),!e){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(l){return"&"+d[l]+";"};e=function(l){return""+(null==l?"":l)},i=function(l){return e(l).replace(c,x)}}if(!r){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(l){return n[l]},o=/[!')(*]/g;r=function(l){return encodeURIComponent(e(l)).replace(o,m)}}if(!a){var _=/[\\'"]/g;a=function(l){return e(l).replace(_,"\\$&")}}var p="",v=l.viewId,y=l.text1;return p+='<div mxa="_zs_gallerycr:_" class="_zs_galleryg"><div mxs="_zs_gallerycr:_" class="_zs_galleryj"><div class="mb10">align（交叉轴对齐方式）</div><div class="mb10">1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygb" style="flex: 1;"></div><div class="_zs_gallerygc" style="flex: 1;"></div><div class="_zs_gallerygd" style="flex: 1;"></div></div><div class="mb10">2. top：交叉轴的起点对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: flex-start;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygb" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygc" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygd" style="flex: 1;height: 60px;"></div></div><div class="mb10">3. bottom：交叉轴的终点对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: flex-end;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygb" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygc" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygd" style="flex: 1;height: 60px;"></div></div><div class="mb10">4. center：交叉轴的中点对齐</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: center;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygb" style="flex: 1;height: 20px;"></div><div class="_zs_gallerygc" style="flex: 1;height: 40px;"></div><div class="_zs_gallerygd" style="flex: 1;height: 60px;"></div></div></div><div mxa="_zs_gallerycr:a" class="_zs_galleryk"><div mxs="_zs_gallerycr:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerycr:b" class="_zs_galleryn">'+e(y)+'</span><i mxs="_zs_gallerycr:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;!-- 1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度 --&gt;\n&lt;mx-grid.row align="stretch" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- top：交叉轴的起点对齐 --&gt;\n&lt;mx-grid.row align="top" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- bottom：交叉轴的终点对齐 --&gt;\n&lt;mx-grid.row align="bottom" height="60px" class="mb40"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- center：交叉轴的中点对齐 --&gt;\n&lt;mx-grid.row align="center" height="60px"&gt;\n    &lt;mx-grid.col class="grid1" height="20px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2" height="40px"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3" height="60px"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});