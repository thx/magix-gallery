define("mx-im/__test__/dingding",["magix","__test__/example","$","mx-title/second","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-title/second"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,t,_,a,n){if(s||(s=e),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,r=function(e){return"&"+c[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(d,r)}}if(!_){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},v=/[!')(*]/g;_=function(e){return encodeURIComponent(t(e)).replace(v,m)}}if(!n){var x=/[\\'"]/g;n=function(e){return t(e).replace(x,"\\$&")}}var o="",y=e.viewId,z=e.text1,p=e.text2;return o+='<div mxs="_zs_gallerycv:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycv:_" class="mb40"><div mxa="_zs_gallerycv:a" class="_zs_galleryg"><div mxs="_zs_gallerycv:a" class="_zs_galleryj"><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"><i class="mc-iconfont color-brand">&#xe677;</i>虞佳</a></div><div mxa="_zs_gallerycv:b" class="_zs_galleryk"><div mxs="_zs_gallerycv:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_1"><span mxa="_zs_gallerycv:c" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_gallerycv:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n&lt;mx-im.dd uid="t5z4z8s" uname="虞佳"/&gt;\n            </pre></div><div mxa="_zs_gallerycv:d" class="_zs_galleryk"><div mxs="_zs_gallerycv:d" class="_zs_galleryi">等同于</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_2"><span mxa="_zs_gallerycv:e" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_gallerycv:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_2">\n&lt;a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"&gt;\n    &lt;i class="mc-iconfont color-brand"&gt;&#38;&#35;xe677;&lt;/i&gt;虞佳\n&lt;/a&gt;</pre></div></div></div><div mxs="_zs_gallerycv:e" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_gallerycv:f" class="mb10">链接格式为：dingtalk://dingtalkclient/action/sendmsg?dingtalk_id={id} ，将{id}替换为用户的钉钉号</div><div mxs="_zs_gallerycv:g" class="mb10">关于目前如何获取钉钉号：</div><img mxs="_zs_gallerycv:h" src="https://img.alicdn.com/tfs/TB1qp3UaNTpK1RjSZFKXXa2wXXa-942-1516.png" width="400"/>'},render:function(){this.updater.digest({})}})});