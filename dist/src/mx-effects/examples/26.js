define("mx-effects/examples/26",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,l,s)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");s.exports=r.extend({tmpl:function(e,l,s,r,a,n,i,t){if(s||(s=e),!a){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(c,m)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},d=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(d,p)}}if(!t){var g=/[\\'"]/g;t=function(e){return a(e).replace(g,"\\$&")}}var o="",f=e.viewId,v=e.text1;return o+='<div mxa="_zs_gallerybW:_" class="_zs_galleryg"><div mxs="_zs_gallerybW:_" class="_zs_galleryj"><div mx-view="mx-effects/progress?type=circle&width=80&text=false&num=50"></div></div><div mxa="_zs_gallerybW:a" class="_zs_galleryk"><div mxs="_zs_gallerybW:a" class="_zs_galleryi">圆型，精度与传入数值保持一致</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_gallerybW:b" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_gallerybW:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    text="false"\n    num="50"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});