define("mx-grid/__test__/7",["magix","__test__/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","__test__/hl"],(l,a,s)=>{l("mx-calendar/datepicker"),l("mx-dropdown/index"),l("mx-copy/index"),l("__test__/hl");var e=l("magix"),r=l("__test__/example");l("$");e.applyStyle("_zs_galleryR","._zs_gallerygq{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygr{opacity:.1}._zs_gallerygr,._zs_gallerygs{background-color:#4d7fff}._zs_gallerygs{opacity:.2}._zs_gallerygt{opacity:.3}._zs_gallerygt,._zs_gallerygu{background-color:#4d7fff}._zs_gallerygu{opacity:.4}._zs_gallerygv{opacity:.5}._zs_gallerygv,._zs_gallerygw{background-color:#4d7fff}._zs_gallerygw{opacity:.6}._zs_gallerygx{opacity:.7}._zs_gallerygx,._zs_gallerygy{background-color:#4d7fff}._zs_gallerygy{opacity:.8}._zs_gallerygz{opacity:.9}._zs_gallerygz,._zs_gallerygA{background-color:#4d7fff}._zs_gallerygA{opacity:1}._zs_gallerygB{padding:16px;background-color:#fafafa}"),s.exports=r.extend({tmpl:function(l,a,s,e,r,t,_,i){if(s||(s=l),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,n=function(l){return"&"+g[l]+";"};r=function(l){return""+(null==l?"":l)},e=function(l){return r(l).replace(d,n)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return c[l]},o=/[!')(*]/g;t=function(l){return encodeURIComponent(r(l)).replace(o,x)}}if(!i){var y=/[\\'"]/g;i=function(l){return r(l).replace(y,"\\$&")}}_||(_=function(l,a,s,e){for(e=l[m];--e;)if(l[s=m+e]===a)return s;return l[s=m+l[m]++]=a,s});var m="",p="",v=l.viewId,z=l.text1,f=l.text3;return p+='<div mxa="_zs_gallerybS:_" class="_zs_galleryh"><div mxa="_zs_gallerybS:a" class="_zs_galleryk"><div mxs="_zs_gallerybS:_" class="mb10">使用 &lt;mx-grid&gt; 标签；也可直接用 class grid 样式</div><div mxs="_zs_gallerybS:a" class="mb10">其中标题部分，<span class="color-brand">标题+提示信息固定向左浮动</span>，标题上其他内容请自行控制左右浮动</div><div mxa="_zs_gallerybS:b" class="_zs_gallerygB"><div mxa="_zs_gallerybS:c" class="grid"><div mxa="_zs_gallerybS:d" content="标题" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div mxs="_zs_gallerybS:b" style="float:left; line-height: 32px;"><span style="font-size: 20px; margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxs="_zs_gallerybS:c" class="fl"><div class="w200 mr10" mx-view="mx-calendar/datepicker"></div></div><div mxa="_zs_gallerybS:e" class="fr"><div mxs="_zs_gallerybS:d" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list='+_(s,[1,2,3])+'"></div></div></div><div mxs="_zs_gallerybS:e" class="clearfix" style="padding: 16px 24px;">test</div></div></div></div><div mxa="_zs_gallerybS:f" class="clearfix"><div mxa="_zs_gallerybS:g" class="_zs_gallerye _zs_galleryg"><div mxa="_zs_gallerybS:h" class="_zs_galleryl"><div mxs="_zs_gallerybS:f" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerybS:i" class="_zs_galleryo">'+r(z)+'</span><i mxs="_zs_gallerybS:g" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(v)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n                </pre></div></div><div mxa="_zs_gallerybS:j" class="_zs_gallerye"><div mxa="_zs_gallerybS:k" class="_zs_galleryl"><div mxs="_zs_gallerybS:h" class="_zs_galleryj">等同于使用class grid</div><div class="_zs_gallerym" mx-success="'+a+'done({id:3})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_3"><span mxa="_zs_gallerybS:l" class="_zs_galleryo">'+r(f)+'</span><i mxs="_zs_gallerybS:g" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(v)+'_text_3">\n&lt;div class="grid"&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/div&gt;\n                </pre></div></div></div></div>'},render:function(){this.updater.digest()}})});