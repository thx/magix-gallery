define("mx-calendar/__test__/3",["magix","__test__/example","moment","$","../datepicker","mx-copy/index","__test__/hl"],(e,a,t)=>{e("../datepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),s=e("moment");e("$");t.exports=l.extend({tmpl:function(e,a,t,l,s,_,r,i){if(t||(t=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,c)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},x=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(x,o)}}if(!i){var p=/[\\'"]/g;i=function(e){return s(e).replace(p,"\\$&")}}var y="",g=e.today,v=e.viewId,u=e.text1;return y+='<div mxa="_zs_gallery9:_" class="_zs_galleryg"><div mxa="_zs_gallery9:a" class="_zs_galleryj"><div mxs="_zs_gallery9:_" class="mb20"><span class="color-9">以下示例：</span>可选择小时和分钟，秒数不可选</div><div class="w200" mx-view="mx-calendar/datepicker?timeType=hour%2Cminute&selected='+_(g)+'%2018%3A08%3A20"></div></div><div mxa="_zs_gallery9:b" class="_zs_galleryk"><div mxs="_zs_gallery9:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_gallery9:c" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallery9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    time-type="hour,minute"\n    selected="&#123;&#123;=today&#125;&#125; 18:08:20"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:s().add(2,"days").format("YYYY-MM-DD")})}})});