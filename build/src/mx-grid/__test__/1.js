define("mx-grid/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,r,g)=>{l("mx-copy/index"),l("__test__/hl");var e=l("magix"),t=l("__test__/example");l("$");e.applyStyle("_zs_galleryT","._zs_gallerygB{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygC{opacity:.1}._zs_gallerygC,._zs_gallerygD{background-color:#4d7fff}._zs_gallerygD{opacity:.2}._zs_gallerygE{opacity:.3}._zs_gallerygE,._zs_gallerygF{background-color:#4d7fff}._zs_gallerygF{opacity:.4}._zs_gallerygG{opacity:.5}._zs_gallerygG,._zs_gallerygH{background-color:#4d7fff}._zs_gallerygH{opacity:.6}._zs_gallerygI{opacity:.7}._zs_gallerygI,._zs_gallerygJ{background-color:#4d7fff}._zs_gallerygJ{opacity:.8}._zs_gallerygK{opacity:.9}._zs_gallerygK,._zs_gallerygL{background-color:#4d7fff}._zs_gallerygL{opacity:1}._zs_gallerygM{padding:16px;background-color:#e8ebf2}"),g.exports=t.extend({tmpl:function(l,r,g,e,t,a,i,s){if(g||(g=l),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+_[l]+";"};t=function(l){return""+(null==l?"":l)},e=function(l){return t(l).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return x[l]},o=/[!')(*]/g;a=function(l){return encodeURIComponent(t(l)).replace(o,n)}}if(!s){var m=/[\\'"]/g;s=function(l){return t(l).replace(m,"\\$&")}}var y="",f=l.viewId,p=l.text1;y+='<div mxa="_zs_gallerybX:_" class="_zs_galleryh"><div mxa="_zs_gallerybX:a" class="_zs_galleryk"><div mxs="_zs_gallerybX:_" class="mb10">1:1:1:1等分，间隔为20px</div><div mxa="_zs_gallerybX:b" class="mb40" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);">';for(var v=0;v<4;v+=1)y+='<div mxs="_zs_gallerybX:a" class="_zs_gallerygC" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div>';return y+='</div><div mxs="_zs_gallerybX:b" class="mb10">1:3:1，间隔为20px</div><div mxs="_zs_gallerybX:c" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_gallerygC" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="3" class="_zs_gallerygD" style="flex: 3;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div flex="1" class="_zs_gallerygE" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_gallerybX:c" class="_zs_galleryl"><div mxs="_zs_gallerybX:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(f)+'_text_1"><span mxa="_zs_gallerybX:d" class="_zs_galleryo">'+t(p)+'</span><i mxs="_zs_gallerybX:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(f)+'_text_1">\n&lt;!-- 1:1:1:1（支持动态） --&gt;\n&lt;mx-grid.row height="100px" gutter="20px" class="mb40"&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 1:3:1 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="3" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});