define("mx-effects/__test__/26",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,s,t,_,l,r,n,i){if(t||(t=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},_=function(e){return l(e).replace(c,x)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(v,m)}}if(!i){var g=/[\\'"]/g;i=function(e){return l(e).replace(g,"\\$&")}}var o="",p=e.viewId,f=e.text1;return o+='<div mxa="_zs_gallerybv:_" class="_zs_galleryg"><div mxs="_zs_gallerybv:_" class="_zs_galleryj"><div mx-view="mx-effects/progress?type=circle&width=80&text=false&num=50"></div></div><div mxa="_zs_gallerybv:a" class="_zs_galleryk"><div mxs="_zs_gallerybv:a" class="_zs_galleryi">圆型，精度与传入数值保持一致</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallerybv:b" class="_zs_galleryn">'+l(f)+'</span><i mxs="_zs_gallerybv:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(p)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    text="false"\n    num="50"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});