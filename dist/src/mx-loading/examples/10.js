define("mx-loading/examples/10",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,l,i)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");i.exports=n.extend({tmpl:function(e,l,i,n,a,d,t,o){if(i||(i=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(s,c)}}if(!d){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return g[e]},m=/[!')(*]/g;d=function(e){return encodeURIComponent(a(e)).replace(m,x)}}if(!o){var v=/[\\'"]/g;o=function(e){return a(e).replace(v,"\\$&")}}var p="",u=e.viewId,b=e.text1;return p+='<div mxa="_zs_galleryc2:_" class="_zs_galleryg"><div mxs="_zs_galleryc2:_" class="_zs_galleryj clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2 mx-loading-bg-grey"></div><div class="mx-loading-three-bounce mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1 mx-loading-bg-brand"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2 mx-loading-bg-brand"></div><div class="mx-loading-three-bounce mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 80px; height:80px; margin-left: -40px;"><div class="mx-loading-three-bounce mx-loading-three-bounce1" style="background-color:#51a300"></div><div class="mx-loading-three-bounce mx-loading-three-bounce2" style="background-color:#51a300"></div><div class="mx-loading-three-bounce" style="background-color:#51a300"></div></div></div></div><div mxa="_zs_galleryc2:a" class="_zs_galleryk"><div mxs="_zs_galleryc2:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(u)+'_text_1"><span mxa="_zs_galleryc2:b" class="_zs_galleryn">'+a(b)+'</span><i mxs="_zs_galleryc2:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(u)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="three-bounce" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="three-bounce" type="brand" /&gt;\n\n&lt;!-- 自定义颜色 + 颜色 --&gt;\n&lt;mx-loading.anim mode="three-bounce" size="80" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});