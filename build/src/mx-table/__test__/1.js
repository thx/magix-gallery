define("mx-table/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,n,s,r,d){if(e||(e=t),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,g=function(t){return"&"+_[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(i,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return o[t]},x=/[!')(*]/g;s=function(t){return encodeURIComponent(n(t)).replace(x,c)}}if(!d){var m=/[\\'"]/g;d=function(t){return n(t).replace(m,"\\$&")}}var v="",y=t.viewId,f=t.text1;v+='<div mxa="_zs_galleryd]:_" class="_zs_galleryh"><div mxa="_zs_galleryd]:a" class="_zs_galleryk"><div mxs="_zs_galleryd]:_" class="mb20"><span class="color-9">该示例：</span>默认选中第一行 + 选中行展示操作项</div><div mxa="_zs_galleryd]:b" mx-view="mx-table/index"><div><table mxa="_zs_galleryd]:c" class="table"><thead><tr>';for(var p=0;p<5;p++)v+="<th>示例字段"+a(p)+"</th>";v+='<th mxs="_zs_galleryd]:a">操作</th></tr></thead><tbody>';for(var b=0;b<3;b++){v+="<tr>";for(p=0;p<5;p++)v+="<td>示例字段"+a(p)+"</td>";v+='<td mxs="_zs_galleryd]:b"><div class="operations"><a href="javascript:;" class="btn btn-white btn-small">操作</a></div></td></tr>'}return v+='</tbody></table></div></div></div><div mxa="_zs_galleryd]:d" class="_zs_galleryl"><div mxs="_zs_galleryd]:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryd]:e" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryd]:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;th&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n                &lt;th&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;td&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n                &lt;td&gt;\n                    &lt;div class="operations"&gt;\n                        &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                    &lt;/div&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});