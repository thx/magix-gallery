define("mx-collapse/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,s,a,i,_){if(n||(n=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!_){var v=/[\\'"]/g;_=function(e){return s(e).replace(v,"\\$&")}}i||(i=function(e,t,n,l){for(l=e[p];--l;)if(e[n=p+l]===t)return n;return e[n=p+e[p]++]=t,n});var p="",g="",u=e.list,y=e.viewId,f=e.text1;return g+='<div mxv mxa="_zs_galleryad:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryad:a" class="_zs_galleryk"><div mxs="_zs_galleryad:_" class="mb20"><span class="color-9">以下示例：</span><span>默认展开非禁止操作的第一个 + 只展示一个 + 每次只打开一个tab</span></div><div mxv="list" class="mb20" mx-view="mx-collapse/index?list='+i(n,u)+'"></div></div><div mxa="_zs_galleryad:b" class="_zs_galleryl"><div mxs="_zs_galleryad:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryad:c" class="_zs_galleryo">'+s(f)+'</span><i mxs="_zs_galleryad:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_1\">\n&lt;mx-collapse \n    list=\"&#123;&#123;@[&#123;\n        title: '标题1',\n        content: '内容1'\n    &#125;, &#123;\n        title: '标题2',\n        content: '内容2'\n    &#125;, &#123;\n        title: '标题3',\n        content: '内容3'\n    &#125;]&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({list:[{title:"笑一笑，十年少",content:"1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。"},{title:"是幽默的深刻，还是深刻的幽默",content:"1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？"},{title:"冷段一组，凉意浓",content:"1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。"}]})}})});