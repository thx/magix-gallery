define("mx-table/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,a)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var e=t("__test__/example");t("$");a.exports=e.extend({tmpl:function(t,l,a,e,s,n,r,i){if(a||(a=t),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(t){return"&"+_[t]+";"};s=function(t){return""+(null==t?"":t)},e=function(t){return s(t).replace(d,c)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return g[t]},m=/[!')(*]/g;n=function(t){return encodeURIComponent(s(t)).replace(m,o)}}if(!i){var x=/[\\'"]/g;i=function(t){return s(t).replace(x,"\\$&")}}var b="",v=t.viewId,p=t.text1;b+='<div mxa="_zs_galleryd{:_" class="_zs_galleryh"><div mxa="_zs_galleryd{:a" class="_zs_galleryk"><div mxs="_zs_galleryd{:_" class="mb20"><span class="color-9">该示例：</span>默认展开第一行下方操作项 + 选中行展示操作项</div><div mxa="_zs_galleryd{:b" mx-view="mx-table/index" class="mb20"><div><table mxa="_zs_galleryd{:c" class="table"><thead><tr>';for(var f=0;f<5;f++)b+='<th width="'+e(100*(f+1))+'">示例'+e(f)+"</th>";b+="</tr></thead><tbody>";for(var h=0;h<3;h++){b+='<tr class="'+e(2==h?"last-tr":"")+'">';for(f=0;f<5;f++)b+="<td>示例内容"+e(f)+"</td>";b+='</tr><tr mxs="_zs_galleryd{:a" class="operation-tr"><td colspan="5"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}return b+='</tbody></table></div></div></div><div mxa="_zs_galleryd{:d" class="_zs_galleryl"><div mxs="_zs_galleryd{:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryd{:e" class="_zs_galleryo">'+s(p)+'</span><i mxs="_zs_galleryd{:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(v)+'_text_1">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;th width="&#123;&#123;=(100*(i+1))&#125;&#125;"&gt;示例&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                    &lt;td&gt;示例内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="5"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});