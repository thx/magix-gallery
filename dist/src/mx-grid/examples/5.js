define("mx-grid/examples/5",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,r,t)=>{l("mx-copy/index"),l("examples/hl");var g=l("magix"),a=l("examples/example");l("$");g.applyStyle("_zs_galleryV","._zs_galleryfX{opacity:.1}._zs_galleryfX,._zs_galleryfY{background-color:var(--color-brand)}._zs_galleryfY{opacity:.2}._zs_galleryfZ{opacity:.3}._zs_galleryfZ,._zs_galleryg_{background-color:var(--color-brand)}._zs_galleryg_{opacity:.4}._zs_galleryga{padding:16px;background-color:var(--app-bg)}"),t.exports=a.extend({tmpl:function(l,r,t,g,a,e,i,c){if(t||(t=l),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(l){return"&"+s[l]+";"};a=function(l){return""+(null==l?"":l)},g=function(l){return a(l).replace(d,x)}}if(!e){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return m[l]},n=/[!')(*]/g;e=function(l){return encodeURIComponent(a(l)).replace(n,o)}}if(!c){var _=/[\\'"]/g;c=function(l){return a(l).replace(_,"\\$&")}}var v="",p=l.viewId,y=l.text1;return v+='<div mxa="_zs_gallerycG:_" class="_zs_galleryg"><div mxs="_zs_gallerycG:_" class="_zs_galleryj"><div class="mb10">垂直方向1:1:1:1等分，间隔5px</div><div class="mb40"><div style="display: flex;height: 100px;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 5px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2)"><div class="_zs_galleryfX" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div><div class="_zs_galleryfY" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div><div class="_zs_galleryfZ" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div><div class="_zs_galleryg_" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div></div></div><div class="mb10">垂直方向1:3:1，间隔5px</div><div style="display: flex;height: 100px;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2)"><div flex="1" class="_zs_galleryfX" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div><div flex="3" class="_zs_galleryfY" style="flex: 3;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div><div flex="1" class="_zs_galleryfZ" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"></div></div></div><div mxa="_zs_gallerycG:a" class="_zs_galleryk"><div mxs="_zs_gallerycG:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(p)+'_text_1"><span mxa="_zs_gallerycG:b" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_gallerycG:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+g(p)+'_text_1">\n&lt;!-- 1:1:1:1 --&gt;\n&lt;mx-grid.row direction="col" height="100px" gutter="5px"&gt;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid4"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 1:3:1 --&gt;\n&lt;mx-grid.row direction="col" height="100px" gutter="10px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="3" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});