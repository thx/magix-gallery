define("mx-footer/index",["magix","mx-mustache/index","$","mx-header/data"],(e,l,a)=>{var r=e("magix"),_=(e("mx-mustache/index"),e("$"),e("mx-header/data"));r.applyStyle("_zs_galleryO",'._zs_galleryfR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryfS{padding:30px 0;text-align:center}._zs_galleryfS ._zs_galleryfT{line-height:28px}._zs_galleryfS ._zs_galleryfT ._zs_galleryfU,._zs_galleryfS ._zs_galleryfT ._zs_galleryfV{padding:0 10px}._zs_galleryfS ._zs_galleryfT ._zs_galleryfU,._zs_galleryfS ._zs_galleryfT ._zs_galleryfU:active,._zs_galleryfS ._zs_galleryfT ._zs_galleryfU:focus,._zs_galleryfS ._zs_galleryfT ._zs_galleryfU:visited{color:#999}._zs_galleryfS ._zs_galleryfT ._zs_galleryfU:hover{color:#333}._zs_galleryfS ._zs_galleryfT ._zs_galleryfV{color:#999}._zs_galleryfS ._zs_galleryfT._zs_galleryfW ._zs_galleryfU{position:relative}._zs_galleryfS ._zs_galleryfT._zs_galleryfW ._zs_galleryfU:after{content:"";position:absolute;top:1px;right:0;width:0;height:12px;border-left:1px solid #eee}._zs_galleryfS ._zs_galleryfT._zs_galleryfW ._zs_galleryfU:last-child:after{content:none}._zs_galleryfS ._zs_galleryfX{padding-top:10px}._zs_galleryfS ._zs_galleryfX ._zs_galleryfY{padding:0 10px}._zs_galleryfS ._zs_galleryfX ._zs_galleryfY ._zs_galleryfZ{transition:opacity .25s;opacity:.5;border:none;-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:grey;filter:gray}._zs_galleryfS ._zs_galleryfX ._zs_galleryfY:hover ._zs_galleryfZ{opacity:1;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0);filter:grayscale(0);-webkit-filter:none;filter:none}._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfU,._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfU:active,._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfU:focus,._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfU:visited{color:#fff;opacity:.5}._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfU:hover{color:#fff;opacity:1}._zs_galleryfS._zs_galleryg_ ._zs_galleryfT ._zs_galleryfV{color:#fff;opacity:.5}._zs_galleryfS._zs_galleryg_ ._zs_galleryfT._zs_galleryfW ._zs_galleryfU:after{border-left:1px solid #fff;opacity:.3}@media screen and (max-width:767px){._zs_galleryfS ._zs_galleryfT ._zs_galleryfU,._zs_galleryfS ._zs_galleryfT ._zs_galleryfV{padding:0 5px}}._zs_galleryga{position:relative;max-width:100%;margin-bottom:20px;padding-left:220px;padding-right:220px;text-align:center}._zs_galleryga ._zs_gallerygb{position:absolute;top:0;left:0}._zs_galleryga ._zs_gallerygb img{width:110px}._zs_galleryga ._zs_gallerygb ._zs_gallerygc{display:block;width:110px;margin-top:5px;font-size:36px;color:#666}._zs_galleryga ._zs_gallerygd{position:absolute;top:0;right:0;line-height:22px}._zs_galleryga ._zs_gallerygd img{width:92px;margin-bottom:10px}._zs_galleryga dl{float:left;font-size:16px;line-height:32px}._zs_galleryga dl dt{margin-bottom:16px;opacity:.5}._zs_galleryga._zs_galleryg_ ._zs_gallerygb ._zs_gallerygc,._zs_galleryga._zs_galleryg_ dl dd a,._zs_galleryga._zs_galleryg_ dl dt{color:#fff}._zs_galleryga._zs_galleryg_ dl dd a:hover{color:#4d7fff}._zs_galleryga._zs_galleryg_ ._zs_gallerygd{color:#fff}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,_,s,g,n){if(a||(a=e),!_){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,f=function(e){return"&"+t[e]+";"};_=function(e){return""+(null==e?"":e)},r=function(e){return _(e).replace(o,f)}}if(!s){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return i[e]},z=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(z,y)}}if(!n){var c=/[\\'"]/g;n=function(e){return _(e).replace(c,"\\$&")}}var m="",p=e.len,d=e.dark,b=e.width,h=e.products,w=e.tanx,x=e.taobao,u=e.alimama,v=e.year,U=e.simple;if(p>0){m+='<div class="_zs_galleryga ',d&&(m+=" _zs_galleryg_ "),m+='" style="width: '+r(b)+'px;"><div mxs="_zs_gallerybn:_" class="_zs_gallerygb"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_gallerygc">&#xe601;</i></div><div mxa="_zs_gallerybn:_" class="clearfix">';for(var k=0,T=h.length;k<T;k++){var S=h[k];m+='<dl style="width: '+r(100/p)+'%;"><dt>'+r(S.title)+"</dt>";for(var X=0,A=S.thirds,V=A.length;X<V;X++){var C=A[X];m+='<dd><a href="'+r(C.link)+'" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">'+r(C.name)+"</a></dd>"}m+="</dl>"}m+='</div><div mxs="_zs_gallerybn:a" class="_zs_gallerygd"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>'}return m+='<div class="_zs_galleryfS ',d&&(m+=" _zs_galleryg_ "),m+='"><div mxa="_zs_gallerybn:a" class="_zs_galleryfT"><a mxs="_zs_gallerybn:b" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_gallerybn:c" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a>',w&&(m+='<a mxs="_zs_gallerybn:d" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//tanx.com/web/opt.html">隐私权保护</a>'),m+=" ",x&&(m+='<a mxs="_zs_gallerybn:e" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>'),m+=" ",u&&(m+='<a mxs="_zs_gallerybn:e" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>'),m+='<a mxs="_zs_gallerybn:f" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a><a mxs="_zs_gallerybn:g" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a>',w&&(m+='<span mxs="_zs_gallerybn:h" class="_zs_galleryfV">Tanx.com版权所有</span><a mxs="_zs_gallerybn:i" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">浙ICP备09109183号-10</a>'),m+=" ",x&&(m+='<span mxa="_zs_gallerybn:b" class="_zs_galleryfV">Taobao.com版权所有 2003-'+r(v)+'</span><a mxs="_zs_gallerybn:j" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20080224-1</a>'),m+=" ",u&&(m+='<span mxa="_zs_gallerybn:c" class="_zs_galleryfV">阿里妈妈版权所有 2007-'+r(v)+'</span><a mxs="_zs_gallerybn:k" class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20070195</a>'),m+="</div>",U||(m+='<div mxs="_zs_gallerybn:l" class="_zs_galleryfT _zs_galleryfW"><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">阿里妈妈</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a></div><div mxs="_zs_gallerybn:m" class="_zs_galleryfT _zs_galleryfW"><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_galleryfU" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_gallerybn:n" class="_zs_galleryfX"><a class="_zs_galleryfY" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfZ" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_galleryfY" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_galleryfZ" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_galleryfY" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfZ" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>'),m+="</div>"},init:function(e){this.assign(e)},assign:function(e){this.__bW="simple"===e.mode,this.__bX=e.products+""=="true",this.__bY=e.width||1184,this.__bZ=e.dark+""=="true"},render:function(){var e=this,l=e.__bX,a=[];l&&_.products.forEach(function(e){e.seconds.forEach(function(l){l.title||(l.title=e.title)}),a=a.concat(e.seconds)});var r,s,g,n=e.__bW;/alimama\.(com|net)/i.test(window.location.href)?r=!0:/taobao\.(com|net)/i.test(window.location.href)?s=!0:/tanx\.(com|net)/i.test(window.location.href)?g=!0:r=!0;var t=(new Date).getFullYear(),o={simple:n,alimama:r,taobao:s,tanx:g,products:a,len:a.length,width:e.__bY,dark:e.__bZ,year:t};e.updater.digest(o)}})});