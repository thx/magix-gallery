define("mx-time/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,s,n,t,r){if(a||(a=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(m,d)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(p,c)}}if(!r){var g=/[\\'"]/g;r=function(e){return s(e).replace(g,"\\$&")}}var o="",v=e.viewId,u=e.text1;return o+='<div mxa="_zs_galleryft:_" class="_zs_galleryg"><div mxs="_zs_galleryft:_" class="_zs_galleryj"><div class="w220" mx-view="mx-time/index?disabled=true&time=10%3A10%3A10"></div></div><div mxa="_zs_galleryft:a" class="_zs_galleryk"><div mxs="_zs_galleryft:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryft:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryft:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;mx-time class="w220" \n    disabled="true"\n    time="10:10:10" /&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});