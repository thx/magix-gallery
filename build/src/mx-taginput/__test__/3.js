define("mx-taginput/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,s)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var i=t("__test__/example");t("$");s.exports=i.extend({tmpl:function(t,e,s,i,l,n,_,a){if(s||(s=t),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(t){return"&"+r[t]+";"};l=function(t){return""+(null==t?"":t)},i=function(t){return l(t).replace(x,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return d[t]},g=/[!')(*]/g;n=function(t){return encodeURIComponent(l(t)).replace(g,m)}}if(!a){var u=/[\\'"]/g;a=function(t){return l(t).replace(u,"\\$&")}}_||(_=function(t,e,s,i){for(i=t[v];--i;)if(t[s=v+i]===e)return s;return t[s=v+t[v]++]=e,s});var v="",o="",p=t.viewId,y=t.text1;return o+='<div mxa="_zs_galleryet:_" class="_zs_galleryh"><div mxa="_zs_galleryet:a" class="_zs_galleryk"><div class="mb20 w280" mx-view="mx-taginput/index?list='+_(s,["test1","test2","test3","test4"])+'&selected=test1%2Ctest2"></div><div class="w280" mx-view="mx-taginput/index?list='+_(s,["test1","test2","test3","test4"])+'"></div></div><div mxa="_zs_galleryet:b" class="_zs_galleryl"><div mxs="_zs_galleryet:_" class="_zs_galleryj">简单list</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_galleryet:c" class="_zs_galleryo">'+l(y)+'</span><i mxs="_zs_galleryet:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(p)+"_text_1\">\n&lt;mx-taginput class=\"w280\"\n    list=\"&#123;&#123;@['test1','test2','test3','test4']&#125;&#125;\"\n    selected=\"test1,test2\"/&gt;\n\n&lt;mx-taginput class=\"w280\"\n    list=\"&#123;&#123;@['test1','test2','test3','test4']&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});