define("mx-im/__test__/wangwang",["magix","__test__/example","$","mx-title/second","mx-copy/index","__test__/hl"],(e,a,t)=>{e("mx-title/second"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,a,t,s,l,_,i,n){if(t||(t=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(c,o)}}if(!_){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},x=/[!')(*]/g;_=function(e){return encodeURIComponent(l(e)).replace(x,m)}}if(!n){var g=/[\\'"]/g;n=function(e){return l(e).replace(g,"\\$&")}}var v="",u=e.viewId,y=e.text1,p=e.text2;return v+='<div mxs="_zs_galleryb$:_" mx-view="mx-title/second?content=%E6%97%BA%E6%97%BA%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb$:_" class="mb40"><div mxa="_zs_galleryb$:a" class="_zs_galleryh"><div mxs="_zs_galleryb$:a" class="_zs_galleryk"><a target="_blank" href="//awp.taobao.com/bs/wwlight.html?ver=3&touid=虞佳&siteid=cntaobao&status=2&charset=utf-8"><img src="//amos.alicdn.com/online.aw?v=2&uid=虞佳&site=cntaobao&s=2&charset=utf-8"/></a></div><div mxa="_zs_galleryb$:b" class="_zs_galleryl"><div mxs="_zs_galleryb$:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(u)+'_text_1"><span mxa="_zs_galleryb$:c" class="_zs_galleryo">'+l(y)+'</span><i mxs="_zs_galleryb$:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+'_text_1">\n&lt;mx-wangwang uid="虞佳"/&gt;\n            </pre></div><div mxa="_zs_galleryb$:d" class="_zs_galleryl"><div mxs="_zs_galleryb$:d" class="_zs_galleryj">等同于</div><div class="_zs_gallerym" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(u)+'_text_2"><span mxa="_zs_galleryb$:e" class="_zs_galleryo">'+l(p)+'</span><i mxs="_zs_galleryb$:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+'_text_2">\n&lt;a target="_blank" href="//awp.taobao.com/bs/wwlight.html?ver=3&touid=虞佳&siteid=cntaobao&status=2&charset=utf-8" rel="noopener noreferrer" &gt;\n    &lt;img src="//amos.alicdn.com/online.aw?v=2&uid=虞佳&site=cntaobao&s=2&charset=utf-8"/&gt;\n&lt;/a&gt;\n            </pre></div></div></div>'},render:function(){this.updater.digest({})}})});