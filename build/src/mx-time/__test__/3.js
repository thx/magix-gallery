define("mx-time/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,_,t,i,l,s,n,a){if(t||(t=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(d,x)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(g,c)}}if(!a){var o=/[\\'"]/g;a=function(e){return l(e).replace(o,"\\$&")}}var v="",u=e.viewId,p=e.text1;return v+='<div mxa="_zs_gallerye#:_" class="_zs_galleryg"><div mxs="_zs_gallerye#:_" class="_zs_galleryj"><div class="w220" mx-view="mx-time/index?disabled=true&time=10%3A10%3A10"></div></div><div mxa="_zs_gallerye#:a" class="_zs_galleryk"><div mxs="_zs_gallerye#:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallerye#:b" class="_zs_galleryn">'+l(p)+'</span><i mxs="_zs_gallerye#:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(u)+'_text_1">\n&lt;mx-time class="w220" \n    disabled="true"\n    time="10:10:10" /&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});