define("mx-editor/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");i.exports=n.extend({tmpl:function(e,l,i,n,s,a,r,t){if(i||(i=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,x)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(p,_)}}if(!t){var o=/[\\'"]/g;t=function(e){return s(e).replace(o,"\\$&")}}r||(r=function(e,l,i,n){for(n=e[v];--n;)if(e[i=v+n]===l)return i;return e[i=v+e[v]++]=l,i});var v="",u="",g=e.content,y=e.viewId,f=e.text1;return u+='<div mxa="_zs_gallerybp:_" class="_zs_galleryg"><div mxa="_zs_gallerybp:a" class="_zs_galleryj"><div mxs="_zs_gallerybp:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_gallerybp:b" class="mb20"><span mxs="_zs_gallerybp:a" class="color-9">当前内容：</span><span>'+n(g)+'（要求必填且不小于200）</span></div><div mxa="_zs_gallerybp:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content='+a(g)+"&rules="+r(i,{required:!0,min:[200,"不小于200"]})+'"></div></div></div><div mxa="_zs_gallerybp:d" class="_zs_galleryk"><div mxs="_zs_gallerybp:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_gallerybp:e" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerybp:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(y)+'_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({content:2e3})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});