define("mx-dropdown/__test__/18",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,a,_,r,s){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(c,x)}}if(!_){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(a(e)).replace(o,m)}}if(!s){var p=/[\\'"]/g;s=function(e){return a(e).replace(p,"\\$&")}}r||(r=function(e,t,l,n){for(n=e[u];--n;)if(e[l=u+n]===t)return l;return e[l=u+e[u]++]=t,l});var u="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryaV:_" class="_zs_galleryh"><div mxa="_zs_galleryaV:a" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/multiple?placement=top&list='+r(l,[{value:1,text:"向上1"},{value:2,text:"向上2"}])+'"></div></div><div mxa="_zs_galleryaV:b" class="_zs_galleryl"><div mxs="_zs_galleryaV:_" class="_zs_galleryj">向上展开</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(g)+'_text_1"><span mxa="_zs_galleryaV:c" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryaV:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200" \n    placement="top"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'向上1\'\n    &#125;,&#123;\n        value: 2,\n        text: \'向上2\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});