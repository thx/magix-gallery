define("mx-table/examples/13",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(t,e,l)=>{t("../index"),t("mx-copy/index"),t("examples/hl");t("magix");var r=t("examples/example");t("$");l.exports=r.extend({tmpl:function(t,e,l,r,a,i,d,n){if(l||(l=t),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(t){return"&"+s[t]+";"};a=function(t){return""+(null==t?"":t)},r=function(t){return a(t).replace(g,o)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return x[t]},_=/[!')(*]/g;i=function(t){return encodeURIComponent(a(t)).replace(_,v)}}if(!n){var c=/[\\'"]/g;n=function(t){return a(t).replace(c,"\\$&")}}var p="",f=t.viewId,m=t.text1;p+='<div mxa="_zs_galleryex:_" class="_zs_galleryg"><div mxa="_zs_galleryex:a" class="_zs_galleryj"><div mxs="_zs_galleryex:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>配置自定义吸顶相对的容器 scroll-wrapper="{=id}}"</div><div>适用场景：浮层内表头固定</div><div>父容器宽高度限定</div></div></div><div id="'+r(f)+'_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"><div mx-view="mx-table/index?sticky=true&scrollWrapper='+i(f)+'_wrapper"><div><table mxa="_zs_galleryex:b" class="table" left="true"><thead><tr>';for(var y=0;y<4;y++)p+='<th mxa="_zs_galleryex:c" width="120">固定字段'+r(y)+"</th>";p+="</tr></thead><tbody>";for(var h=0;h<20;h++){p+="<tr>";for(y=0;y<4;y++)p+="<td>固定内容"+r(y)+"</td>";p+="</tr>"}p+='</tbody></table></div><div><table mxa="_zs_galleryex:d" class="table" center="true"><thead><tr>';for(y=0;y<10;y++)p+='<th mxa="_zs_galleryex:e" width="120">滚动'+r(y)+"</th>";p+="</tr></thead><tbody>";for(h=0;h<20;h++){p+="<tr>";for(y=0;y<10;y++)p+="<td>滚动内容"+r(y)+"</td>";p+="</tr>"}return p+='</tbody></table></div></div></div></div><div mxa="_zs_galleryex:f" class="_zs_galleryk"><div mxs="_zs_galleryex:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryex:g" class="_zs_galleryn">'+a(m)+'</span><i mxs="_zs_galleryex:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+'_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"&gt;\n    &lt;mx-table sticky="true" scroll-wrapper="&#123;&#123;=viewId&#125;&#125;_wrapper"&gt;\n        &lt;table class="table" left="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n        &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n        &lt;table class="table" center="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/mx-table&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});