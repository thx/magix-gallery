define("mx-style/examples/4",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,a,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,r,m,i,n){if(l||(l=e),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(x,_)}}if(!m){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},c=/[!')(*]/g;m=function(e){return encodeURIComponent(r(e)).replace(c,d)}}if(!n){var g=/[\\'"]/g;n=function(e){return r(e).replace(g,"\\$&")}}var p="",u=e.viewId,y=e.text1;return p+='<div mxv mxa="_zs_galleryeo:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryeo:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryeo:b" class="mb20"><span mxs="_zs_galleryeo:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_galleryeo:c" class="mr20"><input mxs="_zs_galleryeo:a" type="radio" class="anim-radio" value="1" name="magix" checked="true"/> 选中</label><label mxv mxa="_zs_galleryeo:d" class="mr20"><input mxs="_zs_galleryeo:b" type="radio" class="anim-radio" value="2" name="magix"/> 未选中</label><label mxv mxa="_zs_galleryeo:e" class="mr20"><input mxs="_zs_galleryeo:c" type="radio" class="anim-radio" value="3" name="magix" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryeo:d" type="radio" class="anim-radio" value="3" name="magix2" checked="true" disabled="true"/> 选中禁止选择</label></div><div mxv><span mxs="_zs_galleryeo:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_galleryeo:f" class="mr20"><input mxs="_zs_galleryeo:f" type="radio" value="1" name="magix3" checked="true"/> 选中</label><label mxv mxa="_zs_galleryeo:g" class="mr20"><input mxs="_zs_galleryeo:g" type="radio" value="2" name="magix3"/> 未选中</label><label mxv mxa="_zs_galleryeo:h" class="mr20"><input mxs="_zs_galleryeo:h" type="radio" value="3" name="magix3" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryeo:i" type="radio" value="3" name="magix4" checked="true" disabled="true"/> 选中禁止选择</label></div></div><div mxa="_zs_galleryeo:i" class="_zs_galleryk"><div mxs="_zs_galleryeo:j" class="_zs_galleryi">Radio</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+m(u)+'_text_1"><span mxa="_zs_galleryeo:j" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_galleryeo:k" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="radio" class="anim-radio"\n        value="1" name="magix" checked="true"/&gt;\n    动效加className（anim-radio）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="radio"  \n        value="2" name="magix2" checked="true"/&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});