define("mx-editor/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,n,t,i,l,a,s,r){if(t||(t=e),!l){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(d,c)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(m,x)}}if(!r){var v=/[\\'"]/g;r=function(e){return l(e).replace(v,"\\$&")}}s||(s=function(e,n,t,i){for(i=e[u];--i;)if(e[t=u+i]===n)return t;return e[t=u+e[u]++]=n,t});var u="",g="",p=e.content,y=e.viewId,f=e.text1;return g+='<div mxa="_zs_gallerya8:_" class="_zs_galleryh"><div mxa="_zs_gallerya8:a" class="_zs_galleryk"><div mxs="_zs_gallerya8:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_gallerya8:b" class="mb20"><span mxs="_zs_gallerya8:a" class="color-9">当前内容：</span><span>'+i(p)+'（要求必填且不小于200）</span></div><div mxa="_zs_gallerya8:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content='+a(p)+"&rules="+s(t,{required:!0,min:[200,"不小于200"]})+'"></div></div></div><div mxa="_zs_gallerya8:d" class="_zs_galleryl"><div mxs="_zs_gallerya8:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_gallerya8:e" class="_zs_galleryo">'+l(f)+'</span><i mxs="_zs_gallerya8:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({content:2e3})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});