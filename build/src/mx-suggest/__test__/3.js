define("mx-suggest/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,l,n,i,r){if(t||(t=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(d,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return c[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(m,g)}}if(!r){var u=/[\\'"]/g;r=function(e){return l(e).replace(u,"\\$&")}}i||(i=function(e,_,t,s){for(s=e[o];--s;)if(e[t=o+s]===_)return t;return e[t=o+e[o]++]=_,t});var o="",v="",p=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerydX:_" class="_zs_galleryh"><div mxa="_zs_gallerydX:a" class="_zs_galleryk"><div mx-view="mx-suggest/index?list='+i(t,[1,2,3,4])+'"></div></div><div mxa="_zs_gallerydX:b" class="_zs_galleryl"><div mxs="_zs_gallerydX:_" class="_zs_galleryj">简单数组</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_gallerydX:c" class="_zs_galleryo">'+l(y)+'</span><i mxs="_zs_gallerydX:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;mx-suggest \n    list="&#123;&#123;@[1,2,3,4]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});