define("mx-loading/examples/5",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,i,e)=>{l("mx-copy/index"),l("examples/hl");l("magix");var d=l("examples/example");l("$");e.exports=d.extend({tmpl:function(l,i,e,d,a,n,c,r){if(e||(e=l),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,t=function(l){return"&"+s[l]+";"};a=function(l){return""+(null==l?"":l)},d=function(l){return a(l).replace(o,t)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return g[l]},m=/[!')(*]/g;n=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!r){var v=/[\\'"]/g;r=function(l){return a(l).replace(v,"\\$&")}}var p="",u=l.viewId,_=l.text1;return p+='<div mxa="_zs_galleryc,:_" class="_zs_galleryg"><div mxs="_zs_galleryc,:_" class="_zs_galleryj"><div class="clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-double-circle mx-loading-bg-grey"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-double-circle mx-loading-bg-brand"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-double-circle mx-loading-bg-grey"></div><div class="mx-loading-double-circle mx-loading-double-circle2 mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-double-circle" style="background-color:#51a300"></div><div class="mx-loading-double-circle mx-loading-double-circle2" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_galleryc,:a" class="_zs_galleryk"><div mxs="_zs_galleryc,:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_galleryc,:b" class="_zs_galleryn">'+a(_)+'</span><i mxs="_zs_galleryc,:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+d(u)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="double-circle" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="double-circle" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="double-circle" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="double-circle" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});