define("mx-loading/examples/4",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,l,i)=>{e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");i.exports=a.extend({tmpl:function(e,l,i,a,s,n,t,d){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,g=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,g)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(v,o)}}if(!d){var c=/[\\'"]/g;d=function(e){return s(e).replace(c,"\\$&")}}var p="",_=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryc+:_" class="_zs_galleryg"><div mxs="_zs_galleryc+:_" class="_zs_galleryj"><div class="clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-square mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-square mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-square mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-square" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_galleryc+:a" class="_zs_galleryk"><div mxs="_zs_galleryc+:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(_)+'_text_1"><span mxa="_zs_galleryc+:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryc+:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(_)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="square" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="square" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="square" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="square" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});