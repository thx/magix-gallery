define("mx-dropdown/examples/6",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,i,s,r,t){if(n||(n=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(x,m)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(_,p)}}if(!t){var c=/[\\'"]/g;t=function(e){return i(e).replace(c,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerybh:_" class="_zs_galleryg"><div mxs="_zs_gallerybh:_" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index"><i value="wed" class="none">周三</i><i value="thu" class="none">周四</i></div></div><div mxa="_zs_gallerybh:a" class="_zs_galleryk"><div mxs="_zs_gallerybh:a" class="_zs_galleryi">mx-dropdown.item</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerybh:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerybh:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-dropdown class="w200"&gt;\n    &lt;mx-dropdown.item value="wed"&gt;\n        周三\n    &lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;\n        周四\n    &lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});