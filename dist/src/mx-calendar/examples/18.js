define("mx-calendar/examples/18",["magix","examples/example","moment","$","../rangepicker","mx-copy/index","examples/hl"],(e,a,r)=>{e("../rangepicker"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),l=e("moment");e("$");r.exports=s.extend({tmpl:function(e,a,r,s,l,n,t,i){if(r||(r=e),!l){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(c,m)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(o,_)}}if(!i){var p=/[\\'"]/g;i=function(e){return l(e).replace(p,"\\$&")}}var g="",v=e.start,f=e.end,u=e.viewId,y=e.text1;return g+='<div mxa="_zs_gallery&:_" class="_zs_galleryg"><div mxa="_zs_gallery&:a" class="_zs_galleryj"><div mxs="_zs_gallery&:_" class="mb20"><span class="color-9">以下示例：</span><span>自定义formatter</span></div><div class="w220" mx-view="mx-calendar/rangepicker?shortcuts=false&formatter=YYYY%2FMM%2Fdd&start='+n(v)+"&end="+n(f)+'"></div></div><div mxa="_zs_gallery&:b" class="_zs_galleryk"><div mxs="_zs_gallery&:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_gallery&:c" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_gallery&:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    shortcuts="false"\n    formatter="YYYY/MM/dd"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({start:l().format("YYYY-MM-DD"),end:l().add(2,"days").format("YYYY-MM-DD")})}})});