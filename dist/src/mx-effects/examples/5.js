define("mx-effects/examples/5",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(e,l,n)=>{e("../notice"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,s,t,i,r){if(n||(n=e),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+c[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,m)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return _[e]},o=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(o,d)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}var g="",v=e.viewId,f=e.text1;return g+='<div mxa="_zs_galleryb5:_" class="_zs_galleryg"><div mxs="_zs_galleryb5:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-effects/notice?type=warn&content=%E9%BB%84%E8%89%B2%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA"></div></div><div mxa="_zs_galleryb5:a" class="_zs_galleryk"><div mxs="_zs_galleryb5:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryb5:b" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryb5:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-effects.notice \n    type="warn"\n    content="黄色警告提示"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});