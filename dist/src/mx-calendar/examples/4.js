define("mx-calendar/examples/4",["magix","examples/example","moment","$","../datepicker","mx-copy/index","examples/hl"],(e,a,l)=>{e("../datepicker"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("moment");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,i,n,t,d){if(l||(l=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(c,m)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(p,o)}}if(!d){var _=/[\\'"]/g;d=function(e){return i(e).replace(_,"\\$&")}}var v="",y=e.today,g=e.viewId,u=e.text1;return v+='<div mxa="_zs_gallery}:_" class="_zs_galleryg"><div mxa="_zs_gallery}:a" class="_zs_galleryj"><div mxs="_zs_gallery}:_" class="mb20"><span class="color-9">以下示例：</span>可选择时分秒，"all"="hour,minute,second"</div><div mxa="_zs_gallery}:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?timeType=all&selected='+n(y)+'%2018%3A08%3A20"></div></div><div class="w200" mx-view="mx-calendar/datepicker?timeType=hour%2Cminute%2Csecond&selected='+n(y)+'%2018%3A08%3A20"></div></div><div mxa="_zs_gallery}:c" class="_zs_galleryk"><div mxs="_zs_gallery}:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_gallery}:d" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallery}:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(g)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    time-type="all"\n    selected="&#123;&#123;=today&#125;&#125; 18:08:20"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    time-type="hour,minute,second"\n    selected="&#123;&#123;=today&#125;&#125; 18:08:20"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:i().add(2,"days").format("YYYY-MM-DD")})}})});