define("mx-title/__test__/index",["magix","__test__/example","$","__test__/subs","../second","../index","mx-copy/index","__test__/hl","./1","__test__/api"],(e,s,l)=>{e("__test__/subs"),e("../second"),e("../index"),e("mx-copy/index"),e("__test__/hl"),e("./1"),e("__test__/api");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,s,l,_,t,a,i,n){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(r,c)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(o,m)}}if(!n){var v=/[\\'"]/g;n=function(e){return t(e).replace(v,"\\$&")}}i||(i=function(e,s,l,_){for(_=e[g];--_;)if(e[l=g+_]===s)return l;return e[l=g+e[g]++]=s,l});var g="",y="",p=e.viewId,z=e.text1,E=e.text2,A=e.text5,U=e.text3,u=e.text4,B=e.text6,f=e.options;return y+='<div mxv mxa="_zs_galleryeU:_" class="pr pr120"><div mx-view="__test__/subs?list='+i(l,[{name:"使用示例",key:p+"_demo",subs:[{name:"一级",key:p+"_demo1"},{name:"二级",key:p+"_demo3"},{name:"一级+标签",key:p+"_demo2"},{name:"二级+标签",key:p+"_demo4"},{name:"实际应用场景",key:p+"_demo5"}]},{name:"API",key:p+"_api"}])+'"></div><div id="'+_(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeU:a" class="clearfix"><div mxa="_zs_galleryeU:b" class="_zs_gallerye"><div class="_zs_galleryh" id="'+_(p)+'_demo1"><div mxs="_zs_galleryeU:_" class="_zs_galleryk"><div mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_galleryeU:c" class="_zs_galleryl"><div mxs="_zs_galleryeU:a" class="_zs_galleryj">使用组件</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_galleryeU:d" class="_zs_galleryo">'+t(z)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_1">\n&lt;mx-title \n    content="一级标题"\n    tip="标题提示文案"/&gt;\n                    </pre></div><div mxa="_zs_galleryeU:e" class="_zs_galleryl"><div mxs="_zs_galleryeU:c" class="_zs_galleryj">可直接使用class</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_2"><span mxa="_zs_galleryeU:f" class="_zs_galleryo">'+t(E)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_2">\n&lt;div class="page-header"&gt;\n    &lt;span class="first-header"&gt;一级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n                    </pre></div></div><div class="_zs_galleryh" id="'+_(p)+'_demo2"><div mxs="_zs_galleryeU:d" class="_zs_galleryk"><div mx-view="mx-title/index?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%B8%80%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryeU:g" class="_zs_galleryl"><div mxs="_zs_galleryeU:e" class="_zs_galleryj">可包含html标签</div><div class="_zs_gallerym" mx-success="'+s+'done({id:5})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_5"><span mxa="_zs_galleryeU:h" class="_zs_galleryo">'+t(A)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_5">\n&lt;mx-title \n    content="&lt;span style=\'color: red;\'&gt;一级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n                    </pre></div></div></div><div mxa="_zs_galleryeU:i" class="_zs_gallerye"><div class="_zs_galleryh" id="'+_(p)+'_demo3"><div mxs="_zs_galleryeU:f" class="_zs_galleryk"><div mx-view="mx-title/second?content=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_galleryeU:j" class="_zs_galleryl"><div mxs="_zs_galleryeU:a" class="_zs_galleryj">使用组件</div><div class="_zs_gallerym" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_3"><span mxa="_zs_galleryeU:k" class="_zs_galleryo">'+t(U)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_3">\n&lt;mx-title.second\n    content="二级标题"\n    tip="二级标题提示文案"/&gt;\n                    </pre></div><div mxa="_zs_galleryeU:l" class="_zs_galleryl"><div mxs="_zs_galleryeU:c" class="_zs_galleryj">可直接使用class</div><div class="_zs_gallerym" mx-success="'+s+'done({id:4})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_4"><span mxa="_zs_galleryeU:m" class="_zs_galleryo">'+t(u)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_4">\n&lt;div class="page-header"&gt;\n    &lt;span class="second-header"&gt;二级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;二级标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n                    </pre></div></div><div class="_zs_galleryh" id="'+_(p)+'_demo4"><div mxs="_zs_galleryeU:g" class="_zs_galleryk"><div mx-view="mx-title/second?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%BA%8C%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryeU:n" class="_zs_galleryl"><div mxs="_zs_galleryeU:e" class="_zs_galleryj">可包含html标签</div><div class="_zs_gallerym" mx-success="'+s+'done({id:6})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_6"><span mxa="_zs_galleryeU:o" class="_zs_galleryo">'+t(B)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_6">\n&lt;mx-title.second \n    content="&lt;span style=\'color: red;\'&gt;二级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n                    </pre></div></div></div></div><div mxa="_zs_galleryeU:p" class="mb20"><div mx-view="mx-title/__test__/1" id="'+_(p)+'_demo5"></div></div><div id="'+_(p)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+i(l,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"标题内容",type:"string"},{key:"tip",desc:"提示内容",type:"string"}]})}})});