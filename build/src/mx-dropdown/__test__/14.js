define("mx-dropdown/__test__/14",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");_.exports=n.extend({tmpl:function(e,t,_,n,l,a,r,s){if(_||(_=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},n=function(e){return l(e).replace(d,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!s){var p=/[\\'"]/g;s=function(e){return l(e).replace(p,"\\$&")}}r||(r=function(e,t,_,n){for(n=e[g];--n;)if(e[_=g+n]===t)return _;return e[_=g+e[g]++]=t,_});var g="",u="",v=e.viewId,y=e.text1;return u+='<div mxa="_zs_galleryaN:_" class="_zs_galleryh"><div mxa="_zs_galleryaN:a" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&list='+r(_,[1,2,3])+'"></div></div><div mxa="_zs_galleryaN:b" class="_zs_galleryl"><div mxs="_zs_galleryaN:_" class="_zs_galleryj">选择为空时的提示文案定制</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryaN:c" class="_zs_galleryo">'+l(y)+'</span><i mxs="_zs_galleryaN:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_1">\n&lt;mx-dropdown class="w200" \n    empty-text="请选择"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});