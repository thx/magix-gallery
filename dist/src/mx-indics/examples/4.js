define("mx-indics/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");l.exports=n.extend({tmpl:function(e,a,l,n,i,d,s,m){if(l||(l=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,_=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(r,_)}}if(!d){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},t=function(e){return x[e]},v=/[!')(*]/g;d=function(e){return encodeURIComponent(i(e)).replace(v,t)}}if(!m){var y=/[\\'"]/g;m=function(e){return i(e).replace(y,"\\$&")}}s||(s=function(e,a,l,n){for(n=e[p];--n;)if(e[l=p+n]===a)return l;return e[l=p+e[p]++]=a,l});var p="",g="",f=e.viewId,o=e.text1,z=e.text2;return g+='<div mxa="_zs_galleryc&:_" class="_zs_galleryg"><div mxa="_zs_galleryc&:a" class="_zs_galleryj"><div mxa="_zs_galleryc&:b" class="clearfix mb20"><div mxa="_zs_galleryc&:c" class="_zs_galleryd"><div mxs="_zs_galleryc&:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 无分组</div></div><div mx-view="mx-indics/index?fields='+s(l,[{id:1,name:"消耗"},{id:2,name:"展现量"},{id:3,name:"点击量"},{id:4,name:"点击率"},{id:5,name:"平均点击单价"},{id:6,name:"点击转化率"}])+"&valueKey=id&textKey=name&defaults="+s(l,[1,2,3])+'"></div></div><div mxa="_zs_galleryc&:d" class="_zs_galleryd"><div mxs="_zs_galleryc&:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 有分组（parents的key，value跟fields保持一致）</div></div><div mx-view="mx-indics/index?parents='+s(l,[{id:1,name:"组1"},{id:2,name:"组2"}])+"&fields="+s(l,[{id:1,name:"消耗",pId:1},{id:2,name:"展现量",pId:1},{id:3,name:"点击量",pId:1},{id:4,name:"点击率",pId:1},{id:5,name:"平均点击单价",pId:2},{id:6,name:"点击转化率",pId:2}])+"&parentKey=pId&valueKey=id&textKey=name&defaults="+s(l,[1,2,3])+'"></div></div></div></div><div mxa="_zs_galleryc&:e" class="clearfix"><div mxa="_zs_galleryc&:f" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryc&:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(f)+'_text_1"><span mxa="_zs_galleryc&:g" class="_zs_galleryn">'+i(o)+'</span><i mxs="_zs_galleryc&:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(f)+'_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\'\n    &#125;, &#123;\n        id: 2, name: \'展现量\'\n    &#125;, &#123;\n        id: 3, name: \'点击量\'\n    &#125;, &#123;\n        id: 4, name: \'点击率\'\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\'\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_galleryc&:h" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryc&:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(f)+'_text_2"><span mxa="_zs_galleryc&:i" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryc&:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(f)+"_text_2\">\n&lt;mx-indics \n    parents=\"&#123;&#123;@[&#123;\n        id: 1, name: '组1'\n    &#125;, &#123;\n        id: 2, name: '组2'\n    &#125;]&#125;&#125;\" \n    fields=\"&#123;&#123;@[&#123;\n        id: 1, name: '消耗', pId: 1\n    &#125;, &#123;\n        id: 2, name: '展现量', pId: 1\n    &#125;, &#123;\n        id: 3, name: '点击量', pId: 1\n    &#125;, &#123;\n        id: 4, name: '点击率', pId: 1\n    &#125;, &#123;\n        id: 5, name: '平均点击单价', pId: 2\n    &#125;, &#123;\n        id: 6, name: '点击转化率', pId: 2\n    &#125;]&#125;&#125;\" \n    parent-key=\"pId\"\n    value-key=\"id\"\n    text-key=\"name\"\n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"/&gt;\n            </pre></div></div></div>"},render:function(){this.updater.digest({})}})});