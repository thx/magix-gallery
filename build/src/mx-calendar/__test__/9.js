define("mx-calendar/__test__/9",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,n,a)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example"),r=e("moment");e("$");a.exports=t.extend({tmpl:function(e,n,a,t,r,i,l,s){if(a||(a=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(_,c)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},y=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(y,o)}}if(!s){var v=/[\\'"]/g;s=function(e){return r(e).replace(v,"\\$&")}}l||(l=function(e,n,a,t){for(t=e[x];--t;)if(e[a=x+t]===n)return a;return e[a=x+e[x]++]=n,a});var x="",g="",f=e.today,p=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallery*:_" class="_zs_galleryh"><div mxa="_zs_gallery*:a" class="_zs_galleryk"><div mxs="_zs_gallery*:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>不对比</div><div>快捷方式包含不限和动态计算的</div></div></div><div class="w200" mx-view="mx-calendar/rangepicker?start='+i(f)+"&end=%E4%B8%8D%E9%99%90&shortkeys="+l(a,["dynamicStart15","dynamicStart30","dynamicStart60","dynamicStart90","dynamicEndThisMonth","dynamicEndNextMonth","forever"])+'"></div></div><div mxa="_zs_gallery*:b" class="_zs_galleryl"><div mxs="_zs_gallery*:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_gallery*:c" class="_zs_galleryo">'+r(u)+'</span><i mxs="_zs_gallery*:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-calendar.rangepicker class="w200"\n    start="'+t(f)+"\"\n    end=\"不限\"\n    shortkeys=\"&#123;&#123;@[\n        'dynamicStart15',\n        'dynamicStart30',\n        'dynamicStart60',\n        'dynamicStart90',\n        'dynamicEndThisMonth',\n        'dynamicEndNextMonth',\n        'forever'\n    ]&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({today:r().format("YYYY-MM-DD")})}})});