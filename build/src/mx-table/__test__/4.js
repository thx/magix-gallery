define("mx-table/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,a)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var e=t("__test__/example");t("$");a.exports=e.extend({tmpl:function(t,l,a,e,r,s,n,d){if(a||(a=t),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,c=function(t){return"&"+i[t]+";"};r=function(t){return""+(null==t?"":t)},e=function(t){return r(t).replace(g,c)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return _[t]},b=/[!')(*]/g;s=function(t){return encodeURIComponent(r(t)).replace(b,o)}}if(!d){var m=/[\\'"]/g;d=function(t){return r(t).replace(m,"\\$&")}}var h="",v=t.width,f=t.viewId,x=t.text1;h+='<div mxa="_zs_galleryd[:_" class="_zs_galleryh"><div mxa="_zs_galleryd[:a" class="_zs_galleryk"><div mxs="_zs_galleryd[:_" class="mb20 clearfix"><div class="fl color-9 lh22">该示例：</div><div class="fl lh22"><div>分栏会根据屏幕可视范围控制是否需要显示分栏，宽段配置在th上</div><div>模拟滚动条一直在可视范围内，windows下鼠标无法左右滚动，可直接操作模拟滚动条滚动</div></div></div><div mxs="_zs_galleryd[:a" class="mb20"><a href="javascript:;" mx-click="'+l+'change()" class="btn btn-brand">切换宽度</a></div><div class="mb40" style="width: '+e(v)+'%;"><div mxa="_zs_galleryd[:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryd[:c" class="table" left="true"><thead><tr>';for(var y=0;y<4;y++)h+='<th mxa="_zs_galleryd[:d" width="120">固定字段'+e(y)+"</th>";h+="</tr></thead><tbody>";for(var p=0;p<10;p++){h+='<tr class="'+e(9==p?"last-tr":"")+'">';for(y=0;y<4;y++)h+="<td>固定内容"+e(y)+"</td>";h+='</tr><tr mxs="_zs_galleryd[:b" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small btn-small">操作</a></td></tr>'}h+='</tbody></table></div><div><table mxa="_zs_galleryd[:e" class="table" center="true"><thead><tr>';for(y=0;y<4;y++)h+='<th mxa="_zs_galleryd[:f" width="120">滚动'+e(y)+"</th>";h+="</tr></thead><tbody>";for(p=0;p<10;p++){h+='<tr class="'+e(9==p?"last-tr":"")+'">';for(y=0;y<4;y++)h+="<td>滚动内容"+e(y)+"</td>";h+='</tr><tr mxs="_zs_galleryd[:c" class="operation-tr"><td colspan="4"></td></tr>'}return h+='</tbody></table></div></div></div></div><div mxa="_zs_galleryd[:g" class="_zs_galleryl"><div mxs="_zs_galleryd[:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryd[:h" class="_zs_galleryo">'+r(x)+'</span><i mxs="_zs_galleryd[:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(f)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==9) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==9) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest({width:100})},"change<click>":function(t){var l=this.updater.get("width");l=100==l?76:100,this.updater.digest({width:l})}})});