define("mx-table/examples/5",["magix","examples/example","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(t,l,e)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("examples/hl");t("magix");var a=t("examples/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,n,r,s,i){if(e||(e=t),!n){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(t){return"&"+g[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(d,o)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return c[t]},m=/[!')(*]/g;r=function(t){return encodeURIComponent(n(t)).replace(m,x)}}if(!i){var p=/[\\'"]/g;i=function(t){return n(t).replace(p,"\\$&")}}var _="",b=t.viewId,f=t.text1;_+='<div mxa="_zs_galleryeA:_" class="_zs_galleryg"><div mxa="_zs_galleryeA:a" class="_zs_galleryj"><div mxs="_zs_galleryeA:_" class="mb20"><span class="color-9">该示例：</span>分栏 + 吸顶 + 宽度配置在th上 + 分页（单独写，不需要关心colspan）</div><div mxa="_zs_galleryeA:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryeA:c" class="table" left="true"><thead><tr>';for(var v=0;v<4;v++)_+='<th mxa="_zs_galleryeA:d" width="120">固定字段'+a(v)+"</th>";_+="</tr></thead><tbody>";for(var y=0;y<3;y++){_+="<tr>";for(v=0;v<4;v++)_+="<td>固定内容"+a(v)+"</td>";_+='</tr><tr mxs="_zs_galleryeA:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>'}_+='</tbody></table></div><div><table mxa="_zs_galleryeA:e" class="table" center="true"><thead><tr>';for(v=0;v<10;v++)_+='<th mxa="_zs_galleryeA:f" width="120">滚动'+a(v)+"</th>";_+="</tr></thead><tbody>";for(y=0;y<3;y++){_+="<tr>";for(v=0;v<10;v++)_+="<td>滚动内容"+a(v)+"</td>";_+='</tr><tr mxs="_zs_galleryeA:b" class="operation-tr"><td colspan="10"></td></tr>'}return _+='</tbody></table></div></div><div mxs="_zs_galleryeA:c" class="table-pager-wrapper mb40" mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div><div mxa="_zs_galleryeA:g" class="_zs_galleryk"><div mxs="_zs_galleryeA:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(b)+'_text_1"><span mxa="_zs_galleryeA:h" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_galleryeA:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(b)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="100" \n    size="40" \n    page="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});