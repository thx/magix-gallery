define("mx-table/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,r,n,s,i){if(e||(e=t),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,_=function(t){return"&"+d[t]+";"};r=function(t){return""+(null==t?"":t)},a=function(t){return r(t).replace(g,_)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return c[t]},b=/[!')(*]/g;n=function(t){return encodeURIComponent(r(t)).replace(b,o)}}if(!i){var m=/[\\'"]/g;i=function(t){return r(t).replace(m,"\\$&")}}var v="",h=t.width,f=t.viewId,x=t.text1;v+='<div mxa="_zs_galleryea:_" class="_zs_galleryg"><div mxa="_zs_galleryea:a" class="_zs_galleryj"><div mxs="_zs_galleryea:_" class="mb20 clearfix"><div class="fl color-9 lh22">该示例：</div><div class="fl lh22"><div>分栏会根据屏幕可视范围控制是否需要显示分栏，宽段配置在th上</div><div>模拟滚动条一直在可视范围内，windows下鼠标无法左右滚动，可直接操作模拟滚动条滚动</div></div></div><div mxs="_zs_galleryea:a" class="mb20"><a href="javascript:;" mx-click="'+l+'change()" class="btn btn-brand">切换宽度</a></div><div class="mb40" style="width: '+a(h)+'%;"><div mxa="_zs_galleryea:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryea:c" class="table" left="true"><thead><tr>';for(var y=0;y<4;y++)v+='<th mxa="_zs_galleryea:d" width="120">固定字段'+a(y)+"</th>";v+="</tr></thead><tbody>";for(var p=0;p<10;p++){v+="<tr>";for(y=0;y<4;y++)v+="<td>固定内容"+a(y)+"</td>";v+='</tr><tr mxs="_zs_galleryea:b" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small btn-small">操作</a></td></tr>'}v+='</tbody></table></div><div><table mxa="_zs_galleryea:e" class="table" center="true"><thead><tr>';for(y=0;y<4;y++)v+='<th mxa="_zs_galleryea:f" width="120">滚动'+a(y)+"</th>";v+="</tr></thead><tbody>";for(p=0;p<10;p++){v+="<tr>";for(y=0;y<4;y++)v+="<td>滚动内容"+a(y)+"</td>";v+='</tr><tr mxs="_zs_galleryea:c" class="operation-tr"><td colspan="4"></td></tr>'}return v+='</tbody></table></div></div></div></div><div mxa="_zs_galleryea:g" class="_zs_galleryk"><div mxs="_zs_galleryea:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryea:h" class="_zs_galleryn">'+r(x)+'</span><i mxs="_zs_galleryea:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest({width:100})},"change<click>":function(t){var l=this.updater.get("width");l=100==l?76:100,this.updater.digest({width:l})}})});