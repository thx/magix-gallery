define("mx-preview/examples/7",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var r=e("magix"),i=e("examples/example");e("$");r.applyStyle("_zs_galleryaq","._zs_galleryiY{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiZ{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=i.extend({tmpl:function(e,l,a,r,i,s,n,d){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(o,m)}}if(!s){var t={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return t[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(c,p)}}if(!d){var g=/[\\'"]/g;d=function(e){return i(e).replace(g,"\\$&")}}var _="",v=e.viewId,u=e.text1;return _+='<div mxa="_zs_gallerydO:_" class="_zs_galleryg"><div mxs="_zs_gallerydO:_" class="_zs_galleryj"><div class="mb10"><span class="color-9">以下示例：</span>只有缩略图没有预览</div><div class="_zs_galleryiY" mx-view="mx-preview/index?preview=false&type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydO:a" class="_zs_galleryk"><div mxs="_zs_gallerydO:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydO:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerydO:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(v)+'_text_1">\n&lt;mx-preview class="demo"\n    preview="false"\n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});