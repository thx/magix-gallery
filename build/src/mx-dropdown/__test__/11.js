define("mx-dropdown/__test__/11",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,l,t,_,s,a,i,r){if(t||(t=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(d,c)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(o,x)}}if(!r){var u=/[\\'"]/g;r=function(e){return s(e).replace(u,"\\$&")}}i||(i=function(e,l,t,_){for(_=e[p];--_;)if(e[t=p+_]===l)return t;return e[t=p+e[p]++]=l,t});var p="",g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryaV:_" class="_zs_galleryg"><div mxa="_zs_galleryaV:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?disabled=true&list='+i(t,[1,2,3])+'&selected=1"></div></div><div mxa="_zs_galleryaV:b" class="_zs_galleryk"><div mxs="_zs_galleryaV:_" class="_zs_galleryi">禁用单选框</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryaV:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryaV:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    disabled="true"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"\n    selected="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});