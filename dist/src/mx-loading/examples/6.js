define("mx-loading/examples/6",["magix","examples/example","$","mx-copy/index","examples/hl"],(i,l,a)=>{i("mx-copy/index"),i("examples/hl");i("magix");var d=i("examples/example");i("$");a.exports=d.extend({tmpl:function(i,l,a,d,e,n,g,r){if(a||(a=i),!e){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(i){return"&"+t[i]+";"};e=function(i){return""+(null==i?"":i)},d=function(i){return e(i).replace(s,c)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(i){return o[i]},m=/[!')(*]/g;n=function(i){return encodeURIComponent(e(i)).replace(m,x)}}if(!r){var v=/[\\'"]/g;r=function(i){return e(i).replace(v,"\\$&")}}var p="",y=i.viewId,_=i.text1;return p+='<div mxa="_zs_galleryc~:_" class="_zs_galleryg"><div mxs="_zs_galleryc~:_" class="_zs_galleryj clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-brand"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-rects"><div class="mx-loading-rect" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect2" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect3" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect4" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect5" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_galleryc~:a" class="_zs_galleryk"><div mxs="_zs_galleryc~:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_galleryc~:b" class="_zs_galleryn">'+e(_)+'</span><i mxs="_zs_galleryc~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+d(y)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="rectangle" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="rectangle" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="rectangle" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="rectangle" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});