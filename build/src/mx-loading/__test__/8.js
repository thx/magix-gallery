define("mx-loading/__test__/8",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,e,i)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var t=l("__test__/example");l("$");i.exports=t.extend({tmpl:function(l,e,i,t,a,s,n,d){if(i||(i=l),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(l){return"&"+r[l]+";"};a=function(l){return""+(null==l?"":l)},t=function(l){return a(l).replace(_,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return o[l]},m=/[!')(*]/g;s=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!d){var p=/[\\'"]/g;d=function(l){return a(l).replace(p,"\\$&")}}var v="",c=l.viewId,u=l.text1;return v+='<div mxa="_zs_gallerycX:_" class="_zs_galleryg"><div mxs="_zs_gallerycX:_" class="_zs_galleryj clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-pulse mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-pulse mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-pulse mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-pulse" style="background-color:#51a300"></div></div></div></div><div mxa="_zs_gallerycX:a" class="_zs_galleryk"><div mxs="_zs_gallerycX:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(c)+'_text_1"><span mxa="_zs_gallerycX:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_gallerycX:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(c)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="pulse" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="pulse" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="pulse" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="pulse" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});