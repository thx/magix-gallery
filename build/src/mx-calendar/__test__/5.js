define("mx-calendar/__test__/5",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../datepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),i=e("moment");e("$");s.exports=l.extend({tmpl:function(e,a,s,l,i,r,t,d){if(s||(s=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,_=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(n,_)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(v,x)}}if(!d){var o=/[\\'"]/g;d=function(e){return i(e).replace(o,"\\$&")}}var y="",g=e.yesterday,p=e.tomorrow,u=e.viewId,w=e.text1;return y+='<div mxa="_zs_gallery):_" class="_zs_galleryg"><div mxa="_zs_gallery):a" class="_zs_galleryj"><div mxs="_zs_gallery):_" class="mb20"><div class="mb5">根据可选范围对默认值进行修正</div><div class="mb5">1. 未配置默认选中项且有min时，默认取min和今天中的较大值</div><div>2. 未配置默认选中项且有max时，默认取max和今天中的较小值</div></div><div mxa="_zs_gallery):b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min='+r(g)+'"></div></div><div mxa="_zs_gallery):c" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min='+r(p)+'"></div></div><div mxa="_zs_gallery):d" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?max='+r(g)+'"></div></div><div class="w200" mx-view="mx-calendar/datepicker?max='+r(p)+'"></div></div><div mxa="_zs_gallery):e" class="_zs_galleryk"><div mxs="_zs_gallery):a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallery):f" class="_zs_galleryn">'+i(w)+'</span><i mxs="_zs_gallery):b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=tomorrow&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=tomorrow&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:i().format("YYYY-MM-DD"),yesterday:i().subtract(1,"days").format("YYYY-MM-DD"),tomorrow:i().add(1,"days").format("YYYY-MM-DD")})}})});