define("mx-dragsort/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,n,s,_,r){if(e||(e=t),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,g=function(t){return"&"+d[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(i,g)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return x[t]},o=/[!')(*]/g;s=function(t){return encodeURIComponent(n(t)).replace(o,c)}}if(!r){var m=/[\\'"]/g;r=function(t){return n(t).replace(m,"\\$&")}}var y="",p=t.viewId,v=t.text1;y+='<div mxa="_zs_gallerya3:_" class="_zs_galleryg"><div mxa="_zs_gallerya3:a" class="_zs_galleryj"><div mxs="_zs_gallerya3:_" class="mb20"><span class="color-9">以下示例：</span>自定义拖动元素</div><div mxa="_zs_gallerya3:b" class="clearfix"><table mxa="_zs_gallerya3:c" class="table"><thead mxs="_zs_gallerya3:a"><tr><th></th><th>id</th><th>title1</th><th>title2</th></tr></thead><tbody mxa="_zs_gallerya3:d" mx-view="mx-dragsort/index?selector=span">';for(var h=0;h<3;h+=1)y+='<tr><td mxs="_zs_gallerya3:b"><span class="btn btn-brand">点我拖动</span></td><td>'+a(h)+"</td><td>text"+a(h)+"_1</td><td>text"+a(h)+"_2</td></tr>";return y+='</tbody></table></div></div><div mxa="_zs_gallerya3:e" class="_zs_galleryk"><div mxs="_zs_gallerya3:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_gallerya3:f" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_gallerya3:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;/th&gt;\n            &lt;th&gt;id&lt;/th&gt;\n            &lt;th&gt;title1&lt;/th&gt;\n            &lt;th&gt;title2&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody mx-view="@../../mx-dragsort/index" \n        view-selector="span"&gt;\n        &#123;&#123;for(let i=0;i&lt;3;i+=1)&#125;&#125;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;span class="btn btn-brand"&gt;点我拖动&lt;/span&gt;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;text&#123;&#123;=i&#125;&#125;_1&lt;/td&gt;\n            &lt;td&gt;text&#123;&#123;=i&#125;&#125;_2&lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/for&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});