define("mx-style/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(a,s,t)=>{a("mx-copy/index"),a("__test__/hl");var l=a("magix"),n=a("__test__/example");a("$");l.applyStyle("_zs_galleryay","._zs_gallerylK{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylL{padding:10px}._zs_gallerylM{background-color:#eee}"),t.exports=n.extend({tmpl:function(a,s,t,l,n,e,r,i){if(t||(t=a),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,b=function(a){return"&"+c[a]+";"};n=function(a){return""+(null==a?"":a)},l=function(a){return n(a).replace(_,b)}}if(!e){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(a){return d[a]},g=/[!')(*]/g;e=function(a){return encodeURIComponent(n(a)).replace(g,p)}}if(!i){var m=/[\\'"]/g;i=function(a){return n(a).replace(m,"\\$&")}}var v="",f=a.viewId,o=a.text1;return v+='<div mxa="_zs_galleryd1:_" class="_zs_galleryh"><div mxs="_zs_galleryd1:_" class="_zs_galleryk"><div class="_zs_gallerylL"><a href="javascript:;" class="btn btn-brand mr20">品牌色按钮</a><a href="javascript:;" class="btn btn-brand btn-small mr20">小号品牌色按钮</a><a href="javascript:;" class="btn btn-brand"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL"><a href="javascript:;" class="btn mr20">普通按钮</a><a href="javascript:;" class="btn btn-small mr20">小号普通按钮</a><a href="javascript:;" class="btn"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL _zs_gallerylM"><a href="javascript:;" class="btn btn-white mr20">白色按钮</a><a href="javascript:;" class="btn btn-white btn-small mr20">小号白色按钮</a><a href="javascript:;" class="btn btn-white"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL"><a href="javascript:;" class="btn btn-disabled mr20">禁用按钮</a><a href="javascript:;" class="btn btn-disabled btn-small mr20">小号禁用按钮</a><a href="javascript:;" class="btn btn-disabled"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div></div><div mxa="_zs_galleryd1:a" class="_zs_galleryl"><div mxs="_zs_galleryd1:a" class="_zs_galleryj">按钮</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(f)+'_text_1"><span mxa="_zs_galleryd1:b" class="_zs_galleryo">'+n(o)+'</span><i mxs="_zs_galleryd1:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(f)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand"&gt;品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand btn-small"&gt;小号品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn"&gt;普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-small"&gt;小号普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-white"&gt;白色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-white btn-small"&gt;小号白色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-disabled"&gt;禁用按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-disabled btn-small"&gt;小号禁用按钮&lt;/a&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});