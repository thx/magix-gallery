define("mx-dropdown/examples/20",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,i)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");i.exports=a.extend({tmpl:function(e,l,i,a,r,t,n,s){if(i||(i=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(d,m)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(c,p)}}if(!s){var g=/[\\'"]/g;s=function(e){return r(e).replace(g,"\\$&")}}var _="",u=e.viewId,v=e.text1;_+='<div mxa="_zs_gallerya]:_" class="_zs_galleryg"><div mxa="_zs_gallerya]:a" class="_zs_galleryj"><div mxs="_zs_gallerya]:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>简单分组</div><div>选中上限max=5，此时全选为选择top max</div></div></div><div mxa="_zs_gallerya]:b" class="w200" mx-view="mx-dropdown/multiple?max=5&searchbox=true&height=250"><i mxs="_zs_gallerya]:a" group="true" class="none">第一组</i>';for(var f=0;f<4;f+=1)_+='<i value="'+a(f)+'" class="none">'+a(f)+"</i>";_+='<i mxs="_zs_gallerya]:b" group="true" class="none">第二组</i>';for(f=10;f<20;f+=1)_+='<i value="'+a(f)+'" class="none">'+a(f)+"</i>";return _+='</div></div><div mxa="_zs_gallerya]:c" class="_zs_galleryk"><div mxs="_zs_gallerya]:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_gallerya]:d" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_gallerya]:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    max="5"\n    searchbox="true"\n    height="250"&gt;\n    &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n    &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=10;i&lt;20;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-dropdown.multiple&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});