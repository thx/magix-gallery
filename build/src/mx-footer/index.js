define("mx-footer/index",["magix","$","mx-header/data"],(e,l,a)=>{var r=e("magix"),_=(e("$"),e("mx-header/data"));r.applyStyle("_zs_galleryS",'._zs_galleryfC{padding:30px 0;text-align:center}._zs_galleryfC ._zs_galleryfD{line-height:28px}._zs_galleryfC ._zs_galleryfD ._zs_galleryfE,._zs_galleryfC ._zs_galleryfD ._zs_galleryfF{padding:0 10px}._zs_galleryfC ._zs_galleryfD ._zs_galleryfE,._zs_galleryfC ._zs_galleryfD ._zs_galleryfE:active,._zs_galleryfC ._zs_galleryfD ._zs_galleryfE:focus,._zs_galleryfC ._zs_galleryfD ._zs_galleryfE:visited{color:#999}._zs_galleryfC ._zs_galleryfD ._zs_galleryfE:hover{color:#333}._zs_galleryfC ._zs_galleryfD ._zs_galleryfF{color:#999}._zs_galleryfC ._zs_galleryfD._zs_galleryfG ._zs_galleryfE{position:relative}._zs_galleryfC ._zs_galleryfD._zs_galleryfG ._zs_galleryfE:after{content:"";position:absolute;top:1px;right:0;width:0;height:12px;border-left:1px solid #eee}._zs_galleryfC ._zs_galleryfD._zs_galleryfG ._zs_galleryfE:last-child:after{content:none}._zs_galleryfC ._zs_galleryfH{padding-top:10px}._zs_galleryfC ._zs_galleryfH ._zs_galleryfI{padding:0 10px}._zs_galleryfC ._zs_galleryfH ._zs_galleryfI ._zs_galleryfJ{transition:opacity var(--duration);opacity:.5;border:none;-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:grey;filter:gray}._zs_galleryfC ._zs_galleryfH ._zs_galleryfI:hover ._zs_galleryfJ{opacity:1;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0);filter:grayscale(0);-webkit-filter:none;filter:none}._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfE,._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfE:active,._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfE:focus,._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfE:visited{color:#fff;opacity:.5}._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfE:hover{color:#fff;opacity:1}._zs_galleryfC._zs_galleryfK ._zs_galleryfD ._zs_galleryfF{color:#fff;opacity:.5}._zs_galleryfC._zs_galleryfK ._zs_galleryfD._zs_galleryfG ._zs_galleryfE:after{border-left:1px solid #fff;opacity:.3}@media screen and (max-width:767px){._zs_galleryfC ._zs_galleryfD ._zs_galleryfE,._zs_galleryfC ._zs_galleryfD ._zs_galleryfF{padding:0 5px}}._zs_galleryfL{position:relative;max-width:100%;margin-bottom:20px;padding-left:220px;padding-right:220px;text-align:center}._zs_galleryfL ._zs_galleryfM{position:absolute;top:0;left:0}._zs_galleryfL ._zs_galleryfM img{width:110px}._zs_galleryfL ._zs_galleryfM ._zs_galleryfN{display:block;width:110px;margin-top:5px;font-size:36px;color:#666}._zs_galleryfL ._zs_galleryfO{position:absolute;top:0;right:0;line-height:22px}._zs_galleryfL ._zs_galleryfO img{width:92px;margin-bottom:10px}._zs_galleryfL dl{float:left;font-size:16px;line-height:32px}._zs_galleryfL dl dt{margin-bottom:16px;opacity:.5}._zs_galleryfL._zs_galleryfK ._zs_galleryfM ._zs_galleryfN,._zs_galleryfL._zs_galleryfK dl dd a,._zs_galleryfL._zs_galleryfK dl dt{color:#fff}._zs_galleryfL._zs_galleryfK dl dd a:hover{color:var(--color-brand)}._zs_galleryfL._zs_galleryfK ._zs_galleryfO{color:#fff}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,_,s,f,g){if(a||(a=e),!_){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};_=function(e){return""+(null==e?"":e)},r=function(e){return _(e).replace(t,o)}}if(!s){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return i[e]},z=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(z,y)}}if(!g){var c=/[\\'"]/g;g=function(e){return _(e).replace(c,"\\$&")}}var m="",p=e.len,d=e.dark,b=e.width,h=e.products,w=e.tanx,x=e.taobao,v=e.alimama,u=e.year,E=e.simple;if(p>0){m+='<div class="_zs_galleryfL ',d&&(m+=" _zs_galleryfK "),m+='" style="width: '+r(b)+'px;"><div mxs="_zs_galleryb*:_" class="_zs_galleryfM"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_galleryfN">&#xe601;</i></div><div mxa="_zs_galleryb*:_" class="clearfix">';for(var k=0,C=h.length;k<C;k++){var D=h[k];m+='<dl style="width: '+r(100/p)+'%;"><dt>'+r(D.title)+"</dt>";for(var K=0,F=D.thirds,X=F.length;K<X;K++){var I=F[K];m+='<dd><a href="'+r(I.link)+'" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">'+r(I.name)+"</a></dd>"}m+="</dl>"}m+='</div><div mxs="_zs_galleryb*:a" class="_zs_galleryfO"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>'}return m+='<div class="_zs_galleryfC ',d&&(m+=" _zs_galleryfK "),m+='"><div mxa="_zs_galleryb*:a" class="_zs_galleryfD"><a mxs="_zs_galleryb*:b" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_galleryb*:c" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a>',w&&(m+='<a mxs="_zs_galleryb*:d" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//tanx.com/web/opt.html">隐私权保护</a>'),m+=" ",x&&(m+='<a mxs="_zs_galleryb*:e" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>'),m+=" ",v&&(m+='<a mxs="_zs_galleryb*:e" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>'),m+='<a mxs="_zs_galleryb*:f" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a><a mxs="_zs_galleryb*:g" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a>',w&&(m+='<span mxs="_zs_galleryb*:h" class="_zs_galleryfF">Tanx.com版权所有</span><a mxs="_zs_galleryb*:i" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">浙ICP备09109183号-10</a>'),m+=" ",x&&(m+='<span mxa="_zs_galleryb*:b" class="_zs_galleryfF">Taobao.com版权所有 2003-'+r(u)+'</span><a mxs="_zs_galleryb*:j" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20080224-1</a>'),m+=" ",v&&(m+='<span mxa="_zs_galleryb*:c" class="_zs_galleryfF">阿里妈妈版权所有 2007-'+r(u)+'</span><a mxs="_zs_galleryb*:k" class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20070195</a>'),m+="</div>",E||(m+='<div mxs="_zs_galleryb*:l" class="_zs_galleryfD _zs_galleryfG"><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">阿里妈妈</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a></div><div mxs="_zs_galleryb*:m" class="_zs_galleryfD _zs_galleryfG"><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_galleryfE" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_galleryb*:n" class="_zs_galleryfH"><a class="_zs_galleryfI" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfJ" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_galleryfI" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_galleryfJ" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_galleryfI" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfJ" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>'),m+="</div>"},init:function(e){this.assign(e)},assign:function(e){this.__co="simple"===e.mode,this.__cp=e.products+""=="true",this.__cq=e.width||1200,this.__cr=e.dark+""=="true"},render:function(){var e=this,l=e.__cp,a=[];l&&_.products.forEach(function(e){e.seconds.forEach(function(l){l.title||(l.title=e.title)}),a=a.concat(e.seconds)});var r,s,f,g=e.__co;/alimama\.(com|net)/i.test(window.location.href)?r=!0:/taobao\.(com|net)/i.test(window.location.href)?s=!0:/tanx\.(com|net)/i.test(window.location.href)?f=!0:r=!0;(new Date).getFullYear();var n={simple:g,alimama:r,taobao:s,tanx:f,products:a,len:a.length,width:e.__cq,dark:e.__cr,year:"现在"};e.updater.digest(n)}})});