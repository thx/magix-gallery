define("mx-style/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,c,_,t,n){if(a||(a=e),!c){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};c=function(e){return""+(null==e?"":e)},s=function(e){return c(e).replace(m,x)}}if(!_){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},i=function(e){return d[e]},b=/[!')(*]/g;_=function(e){return encodeURIComponent(c(e)).replace(b,i)}}if(!n){var u=/[\\'"]/g;n=function(e){return c(e).replace(u,"\\$&")}}var g="",y=e.viewId,v=e.text1;return g+='<div mxv mxa="_zs_gallerydq:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydq:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerydq:b" class="mb20"><span mxs="_zs_gallerydq:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_gallerydq:c" class="mr20"><input mxs="_zs_gallerydq:a" type="checkbox" class="anim-checkbox" name="cb2" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydq:d" class="mr20"><input mxs="_zs_gallerydq:b" type="checkbox" class="anim-checkbox" name="cb2" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydq:e" class="mr20"><input mxs="_zs_gallerydq:c" type="checkbox" class="anim-checkbox" name="cb2" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydq:d" type="checkbox" class="anim-checkbox" name="cb2" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxv><span mxs="_zs_gallerydq:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_gallerydq:f" class="mr20"><input mxs="_zs_gallerydq:f" type="checkbox" name="cb1" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydq:g" class="mr20"><input mxs="_zs_gallerydq:g" type="checkbox" name="cb1" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydq:h" class="mr20"><input mxs="_zs_gallerydq:h" type="checkbox" name="cb1" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydq:i" type="checkbox" name="cb1" value="4" disabled="true"/> 未选中禁止选择</label></div></div><div mxa="_zs_gallerydq:i" class="_zs_galleryl"><div mxs="_zs_gallerydq:j" class="_zs_galleryj">Checkbox</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_1"><span mxa="_zs_gallerydq:j" class="_zs_galleryo">'+c(v)+'</span><i mxs="_zs_gallerydq:k" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox" class="anim-checkbox" \n        name="cb2" value="2" checked="true" /&gt;\n    动效加className（anim-checkbox）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox"\n        name="cb1" value="1" checked="true" /&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});