define("mx-dropdown/__test__/17",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,a,_,r,s){if(n||(n=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(x,d)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(a(e)).replace(m,o)}}if(!s){var p=/[\\'"]/g;s=function(e){return a(e).replace(p,"\\$&")}}r||(r=function(e,t,n,l){for(l=e[u];--l;)if(e[n=u+l]===t)return n;return e[n=u+e[u]++]=t,n});var u="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryaQ:_" class="_zs_galleryh"><div mxa="_zs_galleryaQ:a" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/index?placement=top&list='+r(n,[{value:1,text:"向上1"},{value:2,text:"向上2"}])+'"></div></div><div mxa="_zs_galleryaQ:b" class="_zs_galleryl"><div mxs="_zs_galleryaQ:_" class="_zs_galleryj">向上展开</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(g)+'_text_1"><span mxa="_zs_galleryaQ:c" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryaQ:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+'_text_1">\n&lt;mx-dropdown class="w200" \n    placement="top"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'向上1\'\n    &#125;,&#123;\n        value: 2,\n        text: \'向上2\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});