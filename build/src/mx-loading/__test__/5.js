define("mx-loading/__test__/5",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,i,e)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var d=l("__test__/example");l("$");e.exports=d.extend({tmpl:function(l,i,e,d,a,n,t,c){if(e||(e=l),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(l){return"&"+r[l]+";"};a=function(l){return""+(null==l?"":l)},d=function(l){return a(l).replace(s,o)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return g[l]},m=/[!')(*]/g;n=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!c){var v=/[\\'"]/g;c=function(l){return a(l).replace(v,"\\$&")}}var _="",p=l.viewId,u=l.text1;return _+='<div mxa="_zs_gallerycU:_" class="_zs_galleryg"><div mxs="_zs_gallerycU:_" class="_zs_galleryj"><div class="clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-double-circle mx-loading-bg-grey"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-double-circle mx-loading-bg-brand"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-double-circle mx-loading-bg-grey"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-double-circle" style="background-color:#51a300"></div><div class="mx-loading-double-circle mx-loading-double-circle2" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_gallerycU:a" class="_zs_galleryk"><div mxs="_zs_gallerycU:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_gallerycU:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_gallerycU:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+d(p)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="double-circle" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="double-circle" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="double-circle" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="double-circle" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});