define("mx-calendar/__test__/16",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(e,a,t)=>{e("../datepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("moment"),e("$");t.exports=l.extend({tmpl:function(e,a,t,l,s,n,_,r){if(t||(t=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,d)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(o,x)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}var g="",v=e.selected,y=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallery5:_" class="_zs_galleryh"><div mxa="_zs_gallery5:a" class="_zs_galleryk"><div mxs="_zs_gallery5:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>限制只可选择到月份</div><div class="w200" mx-change="'+a+'select()" mx-view="mx-calendar/datepicker?min=2018-02&max=2018-10&dateType=year%2Cmonth&selected='+n(v)+'"></div></div><div mxa="_zs_gallery5:b" class="_zs_galleryl"><div mxs="_zs_gallery5:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_gallery5:c" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_gallery5:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    min="2018-02"\n    max="2018-10"\n    date-type="year,month"\n    selected="2018-05"/&gt;</pre></div></div>'},render:function(){this.updater.digest({selected:"2018-05"})},"select<change>":function(e){this.updater.digest({selected:e.date})}})});