define("mx-indics/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");i.exports=a.extend({tmpl:function(e,n,i,a,l,d,s,_){if(i||(i=e),!l){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};l=function(e){return""+(null==e?"":e)},a=function(e){return l(e).replace(c,m)}}if(!d){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return r[e]},v=/[!')(*]/g;d=function(e){return encodeURIComponent(l(e)).replace(v,x)}}if(!_){var y=/[\\'"]/g;_=function(e){return l(e).replace(y,"\\$&")}}s||(s=function(e,n,i,a){for(a=e[g];--a;)if(e[i=g+a]===n)return i;return e[i=g+e[g]++]=n,i});var g="",p="",f=e.viewId,o=e.text1,z=e.text2;return p+='<div mxa="_zs_galleryct:_" class="_zs_galleryg"><div mxa="_zs_galleryct:a" class="_zs_galleryj"><div mxa="_zs_galleryct:b" class="clearfix mb20"><div mxa="_zs_galleryct:c" class="_zs_galleryd"><div mxs="_zs_galleryct:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 无分组</div></div><div mx-view="mx-indics/index?fields='+s(i,[{id:1,name:"消耗"},{id:2,name:"展现量"},{id:3,name:"点击量"},{id:4,name:"点击率"},{id:5,name:"平均点击单价"},{id:6,name:"点击转化率"}])+"&valueKey=id&textKey=name&defaults="+s(i,[1,2,3])+'"></div></div><div mxa="_zs_galleryct:d" class="_zs_galleryd"><div mxs="_zs_galleryct:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">自定义key + 有分组（parents的key，value跟fields保持一致）</div></div><div mx-view="mx-indics/index?parents='+s(i,[{id:1,name:"组1"},{id:2,name:"组2"}])+"&fields="+s(i,[{id:1,name:"消耗",pId:1},{id:2,name:"展现量",pId:1},{id:3,name:"点击量",pId:1},{id:4,name:"点击率",pId:1},{id:5,name:"平均点击单价",pId:2},{id:6,name:"点击转化率",pId:2}])+"&parentKey=pId&valueKey=id&textKey=name&defaults="+s(i,[1,2,3])+'"></div></div></div></div><div mxa="_zs_galleryct:e" class="clearfix"><div mxa="_zs_galleryct:f" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryct:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(f)+'_text_1"><span mxa="_zs_galleryct:g" class="_zs_galleryn">'+l(o)+'</span><i mxs="_zs_galleryct:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        id: 1, name: \'消耗\'\n    &#125;, &#123;\n        id: 2, name: \'展现量\'\n    &#125;, &#123;\n        id: 3, name: \'点击量\'\n    &#125;, &#123;\n        id: 4, name: \'点击率\'\n    &#125;, &#123;\n        id: 5, name: \'平均点击单价\'\n    &#125;, &#123;\n        id: 6, name: \'点击转化率\'\n    &#125;]&#125;&#125;" \n    value-key="id"\n    text-key="name"\n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_galleryct:h" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryct:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(f)+'_text_2"><span mxa="_zs_galleryct:i" class="_zs_galleryn">'+l(z)+'</span><i mxs="_zs_galleryct:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+"_text_2\">\n&lt;mx-indics \n    parents=\"&#123;&#123;@[&#123;\n        id: 1, name: '组1'\n    &#125;, &#123;\n        id: 2, name: '组2'\n    &#125;]&#125;&#125;\" \n    fields=\"&#123;&#123;@[&#123;\n        id: 1, name: '消耗', pId: 1\n    &#125;, &#123;\n        id: 2, name: '展现量', pId: 1\n    &#125;, &#123;\n        id: 3, name: '点击量', pId: 1\n    &#125;, &#123;\n        id: 4, name: '点击率', pId: 1\n    &#125;, &#123;\n        id: 5, name: '平均点击单价', pId: 2\n    &#125;, &#123;\n        id: 6, name: '点击转化率', pId: 2\n    &#125;]&#125;&#125;\" \n    parent-key=\"pId\"\n    value-key=\"id\"\n    text-key=\"name\"\n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"/&gt;\n            </pre></div></div></div>"},render:function(){this.updater.digest({})}})});