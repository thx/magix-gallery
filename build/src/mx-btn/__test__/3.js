define("mx-btn/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,e,a)=>{t("mx-copy/index"),t("__test__/hl");var n=t("magix"),s=t("__test__/example");t("$");n.applyStyle("_zs_galleryo","._zs_gallerybE{padding:20px;background-color:var(--app-bg)}._zs_gallerybF{padding:20px 0}"),a.exports=s.extend({tmpl:function(t,e,a,n,s,l,r,_){if(a||(a=t),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(t){return"&"+i[t]+";"};s=function(t){return""+(null==t?"":t)},n=function(t){return s(t).replace(c,m)}}if(!l){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return g[t]},p=/[!')(*]/g;l=function(t){return encodeURIComponent(s(t)).replace(p,x)}}if(!_){var o=/[\\'"]/g;_=function(t){return s(t).replace(o,"\\$&")}}var d="",b=t.viewId,y=t.text1;return d+='<div mxa="_zs_galleryX:_" class="_zs_galleryg"><div mxs="_zs_galleryX:_" class="_zs_galleryj"><div class="_zs_gallerybE"><a href="javascript:;" class="mx-btn btn-white mr20 mb20" style=";">白色按钮</a><a href="javascript:;" class="mx-btn btn-small btn-white mr20 mb20" style=";">小号白色按钮</a><br/><a href="javascript:;" class="mx-btn btn-white mr20 mb20" style=";"><i class="mc-iconfont">&#xe731;</i>白色按钮</a><a href="javascript:;" class="mx-btn btn-white mr20 mb20" style=";">白色按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></a></div></div><div mxa="_zs_galleryX:a" class="_zs_galleryk"><div mxs="_zs_galleryX:a" class="_zs_galleryi">按钮</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(b)+'_text_1"><span mxa="_zs_galleryX:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryX:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(b)+'_text_1">\n&lt;mx-btn white="true" content="白色按钮"/&gt;\n\n&lt;mx-btn white="true" small="true" content="小号白色按钮"/&gt;\n\n&lt;mx-btn white="true"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;白色按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn white="true" content="白色按钮" tag-content="New"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});