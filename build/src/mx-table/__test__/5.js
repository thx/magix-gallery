define("mx-table/__test__/5",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,n,r,s,i){if(e||(e=t),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(t){return"&"+_[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(g,d)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return o[t]},x=/[!')(*]/g;r=function(t){return encodeURIComponent(n(t)).replace(x,c)}}if(!i){var m=/[\\'"]/g;i=function(t){return n(t).replace(m,"\\$&")}}var p="",b=t.viewId,f=t.text1;p+='<div mxa="_zs_gallerye_:_" class="_zs_galleryg"><div mxa="_zs_gallerye_:a" class="_zs_galleryj"><div mxs="_zs_gallerye_:_" class="mb20"><span class="color-9">该示例：</span>分栏 + 吸顶 + 宽度配置在th上 + 分页（单独写，不需要关心colspan）</div><div mxa="_zs_gallerye_:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_gallerye_:c" class="table" left="true"><thead><tr>';for(var v=0;v<4;v++)p+='<th mxa="_zs_gallerye_:d" width="120">固定字段'+a(v)+"</th>";p+="</tr></thead><tbody>";for(var y=0;y<3;y++){p+="<tr>";for(v=0;v<4;v++)p+="<td>固定内容"+a(v)+"</td>";p+='</tr><tr mxs="_zs_gallerye_:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}p+='</tbody></table></div><div><table mxa="_zs_gallerye_:e" class="table" center="true"><thead><tr>';for(v=0;v<10;v++)p+='<th mxa="_zs_gallerye_:f" width="120">滚动'+a(v)+"</th>";p+="</tr></thead><tbody>";for(y=0;y<3;y++){p+="<tr>";for(v=0;v<10;v++)p+="<td>滚动内容"+a(v)+"</td>";p+='</tr><tr mxs="_zs_gallerye_:b" class="operation-tr"><td colspan="10"></td></tr>'}return p+='</tbody></table></div></div><div mxs="_zs_gallerye_:c" class="table-pager-wrapper mb40" mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div><div mxa="_zs_gallerye_:g" class="_zs_galleryk"><div mxs="_zs_gallerye_:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(b)+'_text_1"><span mxa="_zs_gallerye_:h" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerye_:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(b)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="100" \n    size="40" \n    page="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});