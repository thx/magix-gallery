define("mx-table/__test__/5",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,l,a)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");t("magix");var e=t("__test__/example");t("$");a.exports=e.extend({tmpl:function(t,l,a,e,n,r,s,i){if(a||(a=t),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,_=function(t){return"&"+d[t]+";"};n=function(t){return""+(null==t?"":t)},e=function(t){return n(t).replace(g,_)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return o[t]},x=/[!')(*]/g;r=function(t){return encodeURIComponent(n(t)).replace(x,c)}}if(!i){var m=/[\\'"]/g;i=function(t){return n(t).replace(m,"\\$&")}}var p="",b=t.viewId,v=t.text1;p+='<div mxa="_zs_galleryd5:_" class="_zs_galleryh"><div mxa="_zs_galleryd5:a" class="_zs_galleryk"><div mxs="_zs_galleryd5:_" class="mb20"><span class="color-9">该示例：</span>分栏 + 吸顶 + 宽度配置在th上 + 分页（单独写，不需要关心colspan）</div><div mxa="_zs_galleryd5:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryd5:c" class="table" left="true"><thead><tr>';for(var f=0;f<4;f++)p+='<th mxa="_zs_galleryd5:d" width="120">固定字段'+e(f)+"</th>";p+="</tr></thead><tbody>";for(var y=0;y<3;y++){p+='<tr class="'+e(2==y?"last-tr":"")+'">';for(f=0;f<4;f++)p+="<td>固定内容"+e(f)+"</td>";p+='</tr><tr mxs="_zs_galleryd5:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}p+='</tbody></table></div><div><table mxa="_zs_galleryd5:e" class="table" center="true"><thead><tr>';for(f=0;f<10;f++)p+='<th mxa="_zs_galleryd5:f" width="120">滚动'+e(f)+"</th>";p+="</tr></thead><tbody>";for(y=0;y<3;y++){p+='<tr class="'+e(2==y?"last-tr":"")+'">';for(f=0;f<10;f++)p+="<td>滚动内容"+e(f)+"</td>";p+='</tr><tr mxs="_zs_galleryd5:b" class="operation-tr"><td colspan="10"></td></tr>'}return p+='</tbody></table></div></div><div mxs="_zs_galleryd5:c" class="table-pager-wrapper mb40"><div mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div></div><div mxa="_zs_galleryd5:g" class="_zs_galleryl"><div mxs="_zs_galleryd5:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(b)+'_text_1"><span mxa="_zs_galleryd5:h" class="_zs_galleryo">'+n(v)+'</span><i mxs="_zs_galleryd5:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(b)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="100" \n        size="40" \n        page="1"/&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});