define("mx-table/examples/10",["magix","examples/example","$","../rwd","mx-copy/index","examples/hl"],(e,t,l)=>{e("../rwd"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");l.exports=r.extend({tmpl:function(e,t,l,r,a,i,d,n){if(l||(l=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(g,x)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(c,m)}}if(!n){var v=/[\\'"]/g;n=function(e){return a(e).replace(v,"\\$&")}}var o="",f=e.viewId,y=e.text1;o+='<div mxa="_zs_galleryeI:_" class="_zs_galleryg"><div mxa="_zs_galleryeI:a" class="_zs_galleryj"><div mxs="_zs_galleryeI:_" class="mb20 clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>设置5列一页</div><div>开头固定2列，结尾固定2列</div><div>默认在第二页</div></div></div><div mxa="_zs_galleryeI:b" class="mb20"><div mxa="_zs_galleryeI:c" mx-view="mx-table/rwd?rwdRange=2%2C-2&rwdLimit=5&rwdCurrent=2"><table mxa="_zs_galleryeI:d" class="table"><thead><tr>';for(var p=0;p<25;p++)o+='<th mxa="_zs_galleryeI:e" width="200">示例字段'+r(p)+"</th>";o+="</tr></thead><tbody>";for(var u=0;u<4;u++){o+="<tr>";for(p=0;p<25;p++)o+="<td>示例字段内容"+r(p)+"</td>";o+="</tr>"}return o+='</tbody></table></div></div></div><div mxa="_zs_galleryeI:f" class="_zs_galleryk"><div mxs="_zs_galleryeI:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryeI:g" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryeI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+'_text_1">\n&lt;mx-table.rwd rwd-range="2,-2" rwd-limit="5" rwd-current="2"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;25;i++)&#125;&#125;\n                &lt;th width="200"&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;4;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;25;i++)&#125;&#125;\n                &lt;td&gt;示例字段内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.rwd&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});