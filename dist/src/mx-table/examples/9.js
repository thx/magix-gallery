define("mx-table/examples/9",["magix","examples/example","$","../rwd","mx-copy/index","examples/hl"],(e,l,t)=>{e("../rwd"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,r,i,s,d){if(t||(t=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(g,x)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(c,m)}}if(!d){var o=/[\\'"]/g;d=function(e){return r(e).replace(o,"\\$&")}}var v="",f=e.viewId,y=e.text1;v+='<div mxa="_zs_gallerye8:_" class="_zs_galleryg"><div mxa="_zs_gallerye8:a" class="_zs_galleryj"><div mxs="_zs_gallerye8:_" class="mb20 clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>默认4列一页</div><div>默认开头固定2列，结尾固定1列</div></div></div><div mxa="_zs_gallerye8:b" class="mb20"><div mxa="_zs_gallerye8:c" mx-view="mx-table/rwd"><table mxa="_zs_gallerye8:d" class="table"><thead><tr>';for(var p=0;p<14;p++)v+='<th mxa="_zs_gallerye8:e" width="200">示例字段'+a(p)+"</th>";v+="</tr></thead><tbody>";for(var b=0;b<4;b++){v+="<tr>";for(p=0;p<14;p++)v+="<td>示例字段内容"+a(p)+"</td>";v+="</tr>"}return v+='</tbody></table></div></div></div><div mxa="_zs_gallerye8:f" class="_zs_galleryk"><div mxs="_zs_gallerye8:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerye8:g" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_gallerye8:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_1">\n&lt;mx-table.rwd&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;th width="200"&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;4;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;td&gt;示例字段内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.rwd&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});