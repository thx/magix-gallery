define("mx-btn/examples/4",["magix","examples/example","$","mx-copy/index","examples/hl"],(t,e,n)=>{t("mx-copy/index"),t("examples/hl");var l=t("magix"),a=t("examples/example");t("$");l.applyStyle("_zs_galleryp","._zs_gallerybF{padding:10px;background-color:var(--app-bg)}._zs_gallerybG{padding:10px 0}"),n.exports=a.extend({tmpl:function(t,e,n,l,a,s,r,i){if(n||(n=t),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},b=/[&<>"'`]/g,m=function(t){return"&"+d[t]+";"};a=function(t){return""+(null==t?"":t)},l=function(t){return a(t).replace(b,m)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return c[t]},o=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(o,x)}}if(!i){var p=/[\\'"]/g;i=function(t){return a(t).replace(p,"\\$&")}}var g="",u=t.viewId,_=t.text1;return g+='<div mxa="_zs_gallery0:_" class="_zs_galleryg"><div mxs="_zs_gallery0:_" class="_zs_galleryj"><div class="_zs_gallerybG"><button type="button" disabled="true" class="mx-btn btn-disabled mr20 mb20">禁用按钮</button><button type="button" disabled="true" class="mx-btn btn-small btn-disabled mr20 mb20">小号禁用按钮</button><br/><button type="button" disabled="true" class="mx-btn btn-disabled mr20 mb20"><i class="mc-iconfont">&#xe731;</i>禁用按钮</button><button type="button" disabled="true" class="mx-btn btn-disabled mr20 mb20">禁用按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></button></div></div><div mxa="_zs_gallery0:a" class="_zs_galleryk"><div mxs="_zs_gallery0:a" class="_zs_galleryi">按钮</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallery0:b" class="_zs_galleryn">'+a(_)+'</span><i mxs="_zs_gallery0:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(u)+'_text_1">\n&lt;mx-btn disabled="true" content="禁用按钮"/&gt;\n\n&lt;mx-btn disabled="true" small="true" content="小号禁用按钮"/&gt;\n\n&lt;mx-btn disabled="true"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;禁用按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn disabled="true" content="禁用按钮" tag-content="New"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()},"test<click>":function(t){}})});