define("mx-calendar/__test__/19",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../datepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),t=e("moment");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,t,_,r,i){if(l||(l=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(d,c)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(t(e)).replace(o,x)}}if(!i){var p=/[\\'"]/g;i=function(e){return t(e).replace(p,"\\$&")}}var g="",v=e.today,y=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallery5:_" class="_zs_galleryg"><div mxa="_zs_gallery5:a" class="_zs_galleryj"><div mxs="_zs_gallery5:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>禁止选择</div><div class="w200" mx-view="mx-calendar/datepicker?selected='+_(v)+'&disabled=true"></div></div><div mxa="_zs_gallery5:b" class="_zs_galleryk"><div mxs="_zs_gallery5:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_1"><span mxa="_zs_gallery5:c" class="_zs_galleryn">'+t(u)+'</span><i mxs="_zs_gallery5:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    selected="&#123;&#123;=today&#125;&#125;"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:t().format("YYYY-MM-DD")})}})});