define("mx-grid/__test__/5",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,r,t)=>{l("mx-copy/index"),l("__test__/hl");var g=l("magix"),a=l("__test__/example");l("$");g.applyStyle("_zs_galleryV","._zs_gallerygX{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygY{opacity:.1}._zs_gallerygY,._zs_gallerygZ{background-color:#4d7fff}._zs_gallerygZ{opacity:.2}._zs_galleryh_{opacity:.3}._zs_galleryh_,._zs_galleryha{background-color:#4d7fff}._zs_galleryha{opacity:.4}._zs_galleryhb{opacity:.5}._zs_galleryhb,._zs_galleryhc{background-color:#4d7fff}._zs_galleryhc{opacity:.6}._zs_galleryhd{opacity:.7}._zs_galleryhd,._zs_galleryhe{background-color:#4d7fff}._zs_galleryhe{opacity:.8}._zs_galleryhf{opacity:.9}._zs_galleryhf,._zs_galleryhg{background-color:#4d7fff}._zs_galleryhg{opacity:1}._zs_galleryhh{padding:16px;background-color:#e8ebf2}"),t.exports=a.extend({tmpl:function(l,r,t,g,a,e,i,c){if(t||(t=l),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(l){return"&"+s[l]+";"};a=function(l){return""+(null==l?"":l)},g=function(l){return a(l).replace(_,d)}}if(!e){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return o[l]},m=/[!')(*]/g;e=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!c){var n=/[\\'"]/g;c=function(l){return a(l).replace(n,"\\$&")}}var y="",p=l.viewId,v=l.text1;return y+='<div mxa="_zs_galleryb{:_" class="_zs_galleryh"><div mxs="_zs_galleryb{:_" class="_zs_galleryk"><div class="mb10">垂直方向1:1:1:1等分，间隔5px</div><div class="mb40"><div style="display: flex;height: 100px;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 5px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallerygY" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallerygZ" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryh_" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryha" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div class="mb10">垂直方向1:3:1，间隔5px</div><div style="display: flex;height: 100px;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_gallerygY" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div flex="3" class="_zs_gallerygZ" style="flex: 3;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div flex="1" class="_zs_galleryh_" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryb{:a" class="_zs_galleryl"><div mxs="_zs_galleryb{:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(p)+'_text_1"><span mxa="_zs_galleryb{:b" class="_zs_galleryo">'+a(v)+'</span><i mxs="_zs_galleryb{:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+g(p)+'_text_1">\n&lt;!-- 1:1:1:1 --&gt;\n&lt;mx-grid.row direction="col" height="100px" gutter="5px"&gt;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid3"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col class="grid4"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 1:3:1 --&gt;\n&lt;mx-grid.row direction="col" height="100px" gutter="10px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="3" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});