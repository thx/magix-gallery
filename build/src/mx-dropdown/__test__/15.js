define("mx-dropdown/__test__/15",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");a.exports=_.extend({tmpl:function(e,l,a,_,s,n,i,r){if(a||(a=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(d,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!r){var v=/[\\'"]/g;r=function(e){return s(e).replace(v,"\\$&")}}i||(i=function(e,l,a,_){for(_=e[g];--_;)if(e[a=g+_]===l)return a;return e[a=g+e[g]++]=l,a});var g="",p="",u=e.viewId,f=e.text1;return p+='<div mxa="_zs_galleryaG:_" class="_zs_galleryh"><div mxa="_zs_galleryaG:a" class="_zs_galleryk"><div mxs="_zs_galleryaG:_" class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">下拉框带名称</div></div><div class="w200" mx-view="mx-dropdown/index?name=%E6%95%B0%E5%AD%97&list='+i(a,[1,2,3])+'"></div></div><div mxa="_zs_galleryaG:b" class="_zs_galleryl"><div mxs="_zs_galleryaG:a" class="_zs_galleryj">选择为空时的提示文案定制</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_galleryaG:c" class="_zs_galleryo">'+s(f)+'</span><i mxs="_zs_galleryaG:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(u)+'_text_1">\n&lt;mx-dropdown class="w200" \n    name="数字"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});