define("mx-dropdown/__test__/19",["magix","__test__/example","$","../bd","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../bd"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,t,l,_,a,n,r,s){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(d,x)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(m,c)}}if(!s){var u=/[\\'"]/g;s=function(e){return a(e).replace(u,"\\$&")}}r||(r=function(e,t,l,_){for(_=e[v];--_;)if(e[l=v+_]===t)return l;return e[l=v+e[v]++]=t,l});var v="",g="",p=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryaW:_" class="_zs_galleryh"><div mxa="_zs_galleryaW:a" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/bd?list='+r(l,[{value:1,text:"选择1"},{value:2,text:"选择2"}])+'"></div></div><div mxa="_zs_galleryaW:b" class="_zs_galleryl"><div mxs="_zs_galleryaW:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_galleryaW:c" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryaW:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_1">\n&lt;mx-dropdown.bd class="w200" \n    list="&#123;&#123;@[&#123;value:1,text:\'选择1\'&#125;,&#123;value:2,text:\'选择2\'&#125;]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});