define("mx-switch/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");_.exports=t.extend({tmpl:function(e,s,_,t,l,a,i,n){if(_||(_=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(d,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(o,m)}}if(!n){var g=/[\\'"]/g;n=function(e){return l(e).replace(g,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryd*:_" class="_zs_galleryg"><div mxs="_zs_galleryd*:_" class="_zs_galleryj clearfix"><div class="mb20"><span class="color-9">以下示例：</span>已选中 + 禁止选择</div><span mx-disabled mx-view="mx-switch/index?state=true"></span></div><div mxa="_zs_galleryd*:a" class="_zs_galleryk"><div mxs="_zs_galleryd*:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryd*:b" class="_zs_galleryn">'+l(u)+'</span><i mxs="_zs_galleryd*:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-switch\n    state="true"\n    mx-disabled/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});