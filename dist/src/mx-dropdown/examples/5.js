define("mx-dropdown/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");s.exports=n.extend({tmpl:function(e,l,s,n,a,i,r,d){if(s||(s=e),!a){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(x,m)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(p,o)}}if(!d){var g=/[\\'"]/g;d=function(e){return a(e).replace(g,"\\$&")}}var _="",v=e.viewId,u=e.text1;return _+='<div mxa="_zs_gallerybg:_" class="_zs_galleryg"><div mxs="_zs_gallerybg:_" class="_zs_galleryj"><div class="mb20 clearfix"><span class="fl w90 lh32">点击禁选：</span><div class="w200 fl" mx-view="mx-dropdown/index?disabled=true&list=%5B1%2C2%2C3%5D"></div></div><div class="mb20 clearfix"><span class="fl w90 lh32">hover禁选：</span><div class="w200 fl" mx-view="mx-dropdown/index?disabled=true&triggerType=hover&list=%5B1%2C2%2C3%5D"></div></div></div><div mxa="_zs_gallerybg:a" class="_zs_galleryk"><div mxs="_zs_gallerybg:a" class="_zs_galleryi">禁用单选框</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_gallerybg:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_gallerybg:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-dropdown class="w200" \n    disabled="true"\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n\n\n&lt;mx-dropdown class="w200" \n    disabled="true"\n    trigger-type="hover"\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});