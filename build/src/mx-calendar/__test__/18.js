define("mx-calendar/__test__/18",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,a,r)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),t=e("moment");e("$");r.exports=s.extend({tmpl:function(e,a,r,s,t,n,l,_){if(r||(r=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(d,c)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(x,o)}}if(!_){var g=/[\\'"]/g;_=function(e){return t(e).replace(g,"\\$&")}}var p="",v=e.start,f=e.end,u=e.viewId,y=e.text1;return p+='<div mxa="_zs_gallery5:_" class="_zs_galleryh"><div mxa="_zs_gallery5:a" class="_zs_galleryk"><div mxs="_zs_gallery5:_" class="mb20"><span class="color-9">以下示例：</span><span>自定义formatter</span></div><div class="w300" mx-view="mx-calendar/rangepicker?shortcuts=false&formatter=YYYY%2FMM%2Fdd&start='+n(v)+"&end="+n(f)+'"></div></div><div mxa="_zs_gallery5:b" class="_zs_galleryl"><div mxs="_zs_gallery5:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_gallery5:c" class="_zs_galleryo">'+t(y)+'</span><i mxs="_zs_gallery5:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+'_text_1">\n&lt;mx-calendar.rangepicker class="w300"\n    shortcuts="false"\n    formatter="YYYY/MM/dd"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({start:t().format("YYYY-MM-DD"),end:t().add(2,"days").format("YYYY-MM-DD")})}})});