define("mx-slider/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,s,n,r,d){if(a||(a=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(t,m)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(p,c)}}if(!d){var v=/[\\'"]/g;d=function(e){return s(e).replace(v,"\\$&")}}var g="",u=e.viewId,o=e.text1;return g+='<div mxa="_zs_galleryd#:_" class="_zs_galleryg"><div mxs="_zs_galleryd#:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/index?max=200&min=100&value=50&step=0.5"></div></div></div><div mxa="_zs_galleryd#:a" class="_zs_galleryk"><div mxs="_zs_galleryd#:a" class="_zs_galleryi">根据可选范围对value进行修正</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_galleryd#:b" class="_zs_galleryn">'+s(o)+'</span><i mxs="_zs_galleryd#:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="50"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});