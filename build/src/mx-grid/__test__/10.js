define("mx-grid/__test__/10",["magix","__test__/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","__test__/hl"],(t,l,r)=>{t("mx-calendar/datepicker"),t("mx-dropdown/index"),t("mx-copy/index"),t("__test__/hl");var i=t("magix"),e=t("__test__/example");t("$");i.applyStyle("_zs_galleryV","._zs_gallerygX{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygY{opacity:.1}._zs_gallerygY,._zs_gallerygZ{background-color:#4d7fff}._zs_gallerygZ{opacity:.2}._zs_galleryh_{opacity:.3}._zs_galleryh_,._zs_galleryha{background-color:#4d7fff}._zs_galleryha{opacity:.4}._zs_galleryhb{opacity:.5}._zs_galleryhb,._zs_galleryhc{background-color:#4d7fff}._zs_galleryhc{opacity:.6}._zs_galleryhd{opacity:.7}._zs_galleryhd,._zs_galleryhe{background-color:#4d7fff}._zs_galleryhe{opacity:.8}._zs_galleryhf{opacity:.9}._zs_galleryhf,._zs_galleryhg{background-color:#4d7fff}._zs_galleryhg{opacity:1}._zs_galleryhh{padding:16px;background-color:#e8ebf2}"),r.exports=e.extend({tmpl:function(t,l,r,i,e,a,g,d){if(r||(r=t),!e){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,x=function(t){return"&"+s[t]+";"};e=function(t){return""+(null==t?"":t)},i=function(t){return e(t).replace(n,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return c[t]},p=/[!')(*]/g;a=function(t){return encodeURIComponent(e(t)).replace(p,o)}}if(!d){var _=/[\\'"]/g;d=function(t){return e(t).replace(_,"\\$&")}}g||(g=function(t,l,r,i){for(i=t[m];--i;)if(t[r=m+i]===l)return r;return t[r=m+t[m]++]=l,r});var m="",y="",v=t.viewId,f=t.text1;return y+='<div mxa="_zs_galleryb&:_" class="_zs_galleryh"><div mxa="_zs_galleryb&:a" class="_zs_galleryk"><div mxs="_zs_galleryb&:_" class="mb10">完整组合使用示例：</div><div mxa="_zs_galleryb&:b" class="_zs_galleryhh"><div mxa="_zs_galleryb&:c" style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div mxa="_zs_galleryb&:d" flex="1" class="grid" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div mxa="_zs_galleryb&:e" content="标题" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;;"><div mxs="_zs_galleryb&:a" style="float:left; height: 32px; line-height: 32px;"><span style="font-size: 16px; margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxa="_zs_galleryb&:f" class="fr"><div mxs="_zs_galleryb&:b" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list='+g(r,[1,2,3])+'"></div></div></div><div mxs="_zs_galleryb&:c" class="clearfix" style="padding: 16px 24px;">区块4</div></div><div mxs="_zs_galleryb&:d" style="flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题1" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; height: 32px; line-height: 32px;"><span style="font-size: 16px; margin-right: 16px;">标题1</span><span style="margin-right: 16px; color: #999;">提示信息1</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块1</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题2" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; height: 32px; line-height: 32px;"><span style="font-size: 16px; margin-right: 16px;">标题2</span><span style="margin-right: 16px; color: #999;">提示信息2</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块2</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题3" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; height: 32px; line-height: 32px;"><span style="font-size: 16px; margin-right: 16px;">标题3</span><span style="margin-right: 16px; color: #999;">提示信息3</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块3</div></div></div></div></div></div></div><div mxa="_zs_galleryb&:g" class="_zs_galleryl"><div mxs="_zs_galleryb&:e" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryb&:h" class="_zs_galleryo">'+e(f)+'</span><i mxs="_zs_galleryb&:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-grid.row gutter="16px"&gt;\n    &lt;mx-grid.col flex="1" class="grid"&gt;\n        &lt;mx-grid.title content="标题" tip="提示信息" &gt;\n            &lt;div class="fr"&gt;\n                &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n                &lt;mx-dropdown class="w200" \n                    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n                &lt;/mx-dropdown&gt;\n            &lt;/div&gt;\n        &lt;/mx-grid.title&gt;\n        &lt;mx-grid.body&gt;区块4&lt;/mx-grid.body&gt;\n    &lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="16px"&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题1" \n                    tip="提示信息1"/&gt;\n                &lt;mx-grid.body&gt;区块1&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题2" \n                    tip="提示信息2"/&gt;\n                &lt;mx-grid.body&gt;区块2&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题3" \n                    tip="提示信息3"/&gt;\n                &lt;mx-grid.body&gt;区块3&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});