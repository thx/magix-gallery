define("mx-popover/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,i,n,r,t){if(s||(s=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,p=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(d,p)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(c,_)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}var v="",g=e.viewId,u=e.text1;return v+='<div mxa="_zs_gallerydE:_" class="_zs_galleryg"><div mxs="_zs_gallerydE:_" class="_zs_galleryj"><div class="w100 ellipsis" mx-view="mx-popover/index?content=%E8%B6%85%E9%95%BF%E5%86%85%E5%AE%B9%E7%BC%A9%E7%95%A5%E6%98%BE%E7%A4%BA">内容超长部分缩略点显示</div></div><div mxa="_zs_gallerydE:a" class="_zs_galleryk"><div mxs="_zs_gallerydE:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_gallerydE:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerydE:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-popover class="w100 ellipsis"\n    tag="div"\n    content="超长内容缩略显示"&gt;内容超长部分缩略点显示&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});