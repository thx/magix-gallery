define("mx-table/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var r=t("__test__/example");t("$");l.exports=r.extend({tmpl:function(t,e,l,r,d,i,a,n){if(l||(l=t),!d){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(t){return"&"+s[t]+";"};d=function(t){return""+(null==t?"":t)},r=function(t){return d(t).replace(_,g)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return o[t]},c=/[!')(*]/g;i=function(t){return encodeURIComponent(d(t)).replace(c,v)}}if(!n){var x=/[\\'"]/g;n=function(t){return d(t).replace(x,"\\$&")}}var f="",p=t.viewId,y=t.text1;f+='<div mxa="_zs_galleryd::_" class="_zs_galleryg"><div mxa="_zs_galleryd::a" class="_zs_galleryj"><div mxs="_zs_galleryd::_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>配置自定义吸顶相对的容器 scroll-wrapper="{=id}}"</div><div>适用场景：浮层内表头固定</div><div>父容器宽高度限定</div></div></div><div id="'+r(p)+'_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"><div mx-view="mx-table/index?sticky=true&scrollWrapper='+i(p)+'_wrapper"><div><table mxa="_zs_galleryd::b" class="table" left="true"><thead><tr>';for(var m=0;m<4;m++)f+='<th mxa="_zs_galleryd::c" width="120">固定字段'+r(m)+"</th>";f+="</tr></thead><tbody>";for(var h=0;h<20;h++){f+="<tr>";for(m=0;m<4;m++)f+="<td>固定内容"+r(m)+"</td>";f+="</tr>"}f+='</tbody></table></div><div><table mxa="_zs_galleryd::d" class="table" center="true"><thead><tr>';for(m=0;m<10;m++)f+='<th mxa="_zs_galleryd::e" width="120">滚动'+r(m)+"</th>";f+="</tr></thead><tbody>";for(h=0;h<20;h++){f+="<tr>";for(m=0;m<10;m++)f+="<td>滚动内容"+r(m)+"</td>";f+="</tr>"}return f+='</tbody></table></div></div></div></div><div mxa="_zs_galleryd::f" class="_zs_galleryk"><div mxs="_zs_galleryd::a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_galleryd::g" class="_zs_galleryn">'+d(y)+'</span><i mxs="_zs_galleryd::b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(p)+'_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"&gt;\n    &lt;mx-table sticky="true" scroll-wrapper="&#123;&#123;=viewId&#125;&#125;_wrapper"&gt;\n        &lt;table class="table" left="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n        &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n        &lt;table class="table" center="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/mx-table&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});