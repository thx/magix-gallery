define("mx-dropdown/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,n,t,l,_,a,i,s){if(t||(t=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(d,o)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(_(e)).replace(c,m)}}if(!s){var p=/[\\'"]/g;s=function(e){return _(e).replace(p,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerya(:_" class="_zs_galleryh"><div mxs="_zs_gallerya(:_" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/index"><i value="wed" class="none">周三</i><i value="thu" class="none">周四</i></div></div><div mxa="_zs_gallerya(:a" class="_zs_galleryl"><div mxs="_zs_gallerya(:a" class="_zs_galleryj">mx-dropdown.item</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerya(:b" class="_zs_galleryo">'+_(u)+'</span><i mxs="_zs_gallerya(:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-dropdown class="w200"&gt;\n    &lt;mx-dropdown.item value="wed"&gt;\n        周三\n    &lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;\n        周四\n    &lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});