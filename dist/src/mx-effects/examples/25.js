define("mx-effects/examples/25",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,l)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");l.exports=r.extend({tmpl:function(e,s,l,r,a,i,n,t){if(l||(l=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(c,x)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return m[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(p,d)}}if(!t){var g=/[\\'"]/g;t=function(e){return a(e).replace(g,"\\$&")}}var o="",v=e.viewId,y=e.text1,f=e.text2;return o+='<div mxa="_zs_gallerybS:_" class="_zs_galleryg"><div mxs="_zs_gallerybS:_" class="_zs_galleryj"><div mx-view="mx-effects/progress?type=circle&width=80&num=40"></div><div mx-view="mx-effects/progress?type=circle&border=4&num=40"></div></div><div mxa="_zs_gallerybS:a" class="_zs_galleryk"><div mxs="_zs_gallerybS:a" class="_zs_galleryi">自定义width</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_gallerybS:b" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_gallerybS:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(v)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    num="40"/&gt;</pre></div><div mxa="_zs_gallerybS:c" class="_zs_galleryk"><div mxs="_zs_gallerybS:c" class="_zs_galleryi">自定义border</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_2"><span mxa="_zs_gallerybS:d" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_gallerybS:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(v)+'_text_2">\n&lt;mx-effects.progress\n    type="circle"\n    border="4"\n    num="40"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});