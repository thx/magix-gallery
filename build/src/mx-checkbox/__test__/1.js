define("mx-checkbox/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,n,s,_,i){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(r,c)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(g,d)}}if(!i){var v=/[\\'"]/g;i=function(e){return n(e).replace(v,"\\$&")}}var b="",u=e.viewId,o=e.text1;return b+='<div mxa="_zs_gallerya_:_" class="_zs_galleryg"><div mxa="_zs_gallerya_:a" class="_zs_galleryj"><div mxa="_zs_gallerya_:b" class="mb20"><label mxa="_zs_gallerya_:c" class="mr20 w120"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=1&checked=true"></span>选中</label><label mxa="_zs_gallerya_:d" class="mr20"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=2&checked=true&disabled=true"></span>选中禁选</label></div><div mxa="_zs_gallerya_:e" class="mb20"><label mxa="_zs_gallerya_:f" class="mr20 w120"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=3"></span>非选中</label><label mxa="_zs_gallerya_:g" class="mr20"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=4&disabled=true"></span>非选中禁选</label></div><div mxa="_zs_gallerya_:h" class="mb20"><label mxa="_zs_gallerya_:i" class="mr20 w120"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=5&indeterminate=true"></span>indeterminate</label><label mxa="_zs_gallerya_:j" class="mr20"><span mx-view="mx-checkbox/index?name='+s(u)+'_test&value=6&indeterminate=true&disabled=true"></span>indeterminate禁选</label></div></div><div mxa="_zs_gallerya_:k" class="_zs_galleryk"><div mxs="_zs_gallerya_:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallerya_:l" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_gallerya_:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="1"\n        checked="true"/&gt;\n    选中\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="2" \n        checked="true" \n        disabled="true"/&gt;\n    选中禁选\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="3"/&gt;\n    非选中\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="4" \n        disabled="true"/&gt;\n    非选中禁选\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="5"\n        indeterminate="true"/&gt;\n    indeterminate\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;mx-checkbox name="&#123;&#123;=viewId&#125;&#125;_test" value="6" \n        indeterminate="true" \n        disabled="true"/&gt;\n    indeterminate禁选\n&lt;/label&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});