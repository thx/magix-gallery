define("mx-style/__test__/5",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");a.exports=_.extend({tmpl:function(e,t,a,_,l,s,r,n){if(a||(a=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},_=function(e){return l(e).replace(x,d)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(g,m)}}if(!n){var o=/[\\'"]/g;n=function(e){return l(e).replace(o,"\\$&")}}var v="",y=e.viewId,p=e.text1;return v+='<div mxv mxa="_zs_galleryd*:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd*:a" class="_zs_galleryj"><textarea mxs="_zs_galleryd*:_" class="textarea w200" rows="4"></textarea></div><div mxa="_zs_galleryd*:b" class="_zs_galleryk"><div mxs="_zs_galleryd*:a" class="_zs_galleryi">Textarea</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryd*:c" class="_zs_galleryn">'+l(p)+'</span><i mxs="_zs_galleryd*:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(y)+'_text_1">\n&lt;textarea class="textarea w200" rows="4"&gt;&lt;/textarea&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});