define("mx-feedback/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,i,r,n,t){if(l||(l=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(x,d)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(p,m)}}if(!t){var g=/[\\'"]/g;t=function(e){return i(e).replace(g,"\\$&")}}var o="",u=e.viewId,v=e.text1;return o+='<div mxa="_zs_gallerycb:_" class="_zs_galleryg"><div mxs="_zs_gallerycb:_" class="_zs_galleryj h200"><div>请填写以下反馈文档，自动显示调查问卷</div><span class="cursor-pointer" mx-view="mx-feedback/index?fdId=19&triggerType=auto"></span></div><div mxa="_zs_gallerycb:a" class="_zs_galleryk"><div mxs="_zs_gallerycb:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallerycb:b" class="_zs_galleryn">'+i(v)+'</span><i mxs="_zs_gallerycb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-feedback fd-id="19" trigger-type="auto"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});