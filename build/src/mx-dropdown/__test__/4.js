define("mx-dropdown/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,_,n,l,t,a,r,s){if(n||(n=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(d,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(m,o)}}if(!s){var g=/[\\'"]/g;s=function(e){return t(e).replace(g,"\\$&")}}r||(r=function(e,_,n,l){for(l=e[p];--l;)if(e[n=p+l]===_)return n;return e[n=p+e[p]++]=_,n});var p="",u="",v=e.viewId,y=e.text1;return u+='<div mxa="_zs_gallerya/:_" class="_zs_galleryg"><div mxa="_zs_gallerya/:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index?list='+r(n,[1,2,3])+'"></div></div><div mxa="_zs_gallerya/:b" class="_zs_galleryk"><div mxs="_zs_gallerya/:_" class="_zs_galleryi">显示文案和前后端传递值一致</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerya/:c" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerya/:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-dropdown class="w200" \n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});