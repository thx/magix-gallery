define("mx-style/examples/3",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,c,m,n,r){if(a||(a=e),!c){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};c=function(e){return""+(null==e?"":e)},s=function(e){return c(e).replace(t,_)}}if(!m){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},b=function(e){return i[e]},p=/[!')(*]/g;m=function(e){return encodeURIComponent(c(e)).replace(p,b)}}if(!r){var u=/[\\'"]/g;r=function(e){return c(e).replace(u,"\\$&")}}var g="",y=e.viewId,d=e.text1;return g+='<div mxv mxa="_zs_galleryew:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryew:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryew:b" class="mb20"><span mxs="_zs_galleryew:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_galleryew:c" class="mr20"><input mxs="_zs_galleryew:a" type="checkbox" class="anim-checkbox" name="cb2" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_galleryew:d" class="mr20"><input mxs="_zs_galleryew:b" type="checkbox" class="anim-checkbox" name="cb2" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_galleryew:e" class="mr20"><input mxs="_zs_galleryew:c" type="checkbox" class="anim-checkbox" name="cb2" value="3"/> 未选中</label><label mxv><input mxs="_zs_galleryew:d" type="checkbox" class="anim-checkbox" name="cb2" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxv><span mxs="_zs_galleryew:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_galleryew:f" class="mr20"><input mxs="_zs_galleryew:f" type="checkbox" name="cb1" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_galleryew:g" class="mr20"><input mxs="_zs_galleryew:g" type="checkbox" name="cb1" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_galleryew:h" class="mr20"><input mxs="_zs_galleryew:h" type="checkbox" name="cb1" value="3"/> 未选中</label><label mxv><input mxs="_zs_galleryew:i" type="checkbox" name="cb1" value="4" disabled="true"/> 未选中禁止选择</label></div></div><div mxa="_zs_galleryew:i" class="_zs_galleryk"><div mxs="_zs_galleryew:j" class="_zs_galleryi">Checkbox</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+m(y)+'_text_1"><span mxa="_zs_galleryew:j" class="_zs_galleryn">'+c(d)+'</span><i mxs="_zs_galleryew:k" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox" class="anim-checkbox" \n        name="cb2" value="2" checked="true" /&gt;\n    动效加className（anim-checkbox）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox"\n        name="cb1" value="1" checked="true" /&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});