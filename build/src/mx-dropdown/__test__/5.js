define("mx-dropdown/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");s.exports=n.extend({tmpl:function(e,l,s,n,a,i,d,t){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(_,x)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(m,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return a(e).replace(p,"\\$&")}}var v="",g=e.viewId,f=e.text1;return v+='<div mxa="_zs_galleryaZ:_" class="_zs_galleryh"><div mxs="_zs_galleryaZ:_" class="_zs_galleryk"><div class="mb20 clearfix"><span class="fl w90 lh32">点击禁选：</span><div class="w200 fl" mx-disabled mx-view="mx-dropdown/index?list=%5B1%2C2%2C3%5D"></div></div><div class="mb20 clearfix"><span class="fl w90 lh32">hover禁选：</span><div class="w200 fl" mx-disabled mx-view="mx-dropdown/index?triggerType=hover&list=%5B1%2C2%2C3%5D"></div></div></div><div mxa="_zs_galleryaZ:a" class="_zs_galleryl"><div mxs="_zs_galleryaZ:a" class="_zs_galleryj">禁用单选框</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(g)+'_text_1"><span mxa="_zs_galleryaZ:b" class="_zs_galleryo">'+a(f)+'</span><i mxs="_zs_galleryaZ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown class="w200" \n    mx-disabled\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n\n\n&lt;mx-dropdown class="w200" \n    mx-disabled\n    trigger-type="hover"\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});