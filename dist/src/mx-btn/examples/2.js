define("mx-btn/examples/2",["magix","examples/example","$","mx-copy/index","examples/hl"],(t,n,e)=>{t("mx-copy/index"),t("examples/hl");var a=t("magix"),l=t("examples/example");t("$");a.applyStyle("_zs_galleryp","._zs_gallerybF{padding:10px;background-color:var(--app-bg)}._zs_gallerybG{padding:10px 0}"),e.exports=l.extend({tmpl:function(t,n,e,a,l,s,r,m){if(e||(e=t),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(t){return"&"+i[t]+";"};l=function(t){return""+(null==t?"":t)},a=function(t){return l(t).replace(x,c)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return o[t]},g=/[!')(*]/g;s=function(t){return encodeURIComponent(l(t)).replace(g,p)}}if(!m){var _=/[\\'"]/g;m=function(t){return l(t).replace(_,"\\$&")}}var b="",u=t.viewId,d=t.text1;return b+='<div mxa="_zs_gallery0:_" class="_zs_galleryg"><div mxs="_zs_gallery0:_" class="_zs_galleryj"><div class="_zs_gallerybG"><button type="button" class="mx-btn mr20 mb20">普通按钮</button><button type="button" class="mx-btn btn-small mr20 mb20">小号普通按钮</button><br/><button type="button" class="mx-btn mr20 mb20"><i class="mc-iconfont">&#xe731;</i>普通按钮</button><button type="button" class="mx-btn mr20 mb20">普通按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></button></div></div><div mxa="_zs_gallery0:a" class="_zs_galleryk"><div mxs="_zs_gallery0:a" class="_zs_galleryi">按钮</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallery0:b" class="_zs_galleryn">'+l(d)+'</span><i mxs="_zs_gallery0:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-btn content="普通按钮"/&gt;\n\n&lt;mx-btn small="true" content="小号普通按钮"/&gt;\n\n&lt;mx-btn&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;普通按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn content="普通按钮" tag-content="New"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});