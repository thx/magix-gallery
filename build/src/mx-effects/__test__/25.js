define("mx-effects/__test__/25",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,_)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,s,_,l,r,t,i,a){if(_||(_=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(c,d)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(g,m)}}if(!a){var o=/[\\'"]/g;a=function(e){return r(e).replace(o,"\\$&")}}var p="",v=e.viewId,y=e.text1,f=e.text2;return p+='<div mxa="_zs_gallerybI:_" class="_zs_galleryg"><div mxs="_zs_gallerybI:_" class="_zs_galleryj"><div mx-view="mx-effects/progress?type=circle&width=80&num=40"></div><div mx-view="mx-effects/progress?type=circle&border=4&num=40"></div></div><div mxa="_zs_gallerybI:a" class="_zs_galleryk"><div mxs="_zs_gallerybI:a" class="_zs_galleryi">自定义width</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerybI:b" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_gallerybI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    num="40"/&gt;</pre></div><div mxa="_zs_gallerybI:c" class="_zs_galleryk"><div mxs="_zs_gallerybI:c" class="_zs_galleryi">自定义border</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_gallerybI:d" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_gallerybI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_2">\n&lt;mx-effects.progress\n    type="circle"\n    border="4"\n    num="40"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});