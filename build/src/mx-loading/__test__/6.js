define("mx-loading/__test__/6",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(i,l,d)=>{i("mx-copy/index"),i("__test__/hl");i("magix");var a=i("__test__/example");i("$");d.exports=a.extend({tmpl:function(i,l,d,a,e,n,t,g){if(d||(d=i),!e){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(i){return"&"+r[i]+";"};e=function(i){return""+(null==i?"":i)},a=function(i){return e(i).replace(s,c)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(i){return o[i]},m=/[!')(*]/g;n=function(i){return encodeURIComponent(e(i)).replace(m,x)}}if(!g){var v=/[\\'"]/g;g=function(i){return e(i).replace(v,"\\$&")}}var _="",p=i.viewId,y=i.text1;return _+='<div mxa="_zs_gallerycR:_" class="_zs_galleryg"><div mxs="_zs_gallerycR:_" class="_zs_galleryj clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-brand"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-brand"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-rects"><div class="mx-loading-rect mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect2 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect3 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect4 mx-loading-bg-grey"></div><div class="mx-loading-rect mx-loading-rect5 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-rects"><div class="mx-loading-rect" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect2" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect3" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect4" style="background-color:#51a300"></div><div class="mx-loading-rect mx-loading-rect5" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_gallerycR:a" class="_zs_galleryk"><div mxs="_zs_gallerycR:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_gallerycR:b" class="_zs_galleryn">'+e(y)+'</span><i mxs="_zs_gallerycR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="rectangle" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="rectangle" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="rectangle" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="rectangle" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});