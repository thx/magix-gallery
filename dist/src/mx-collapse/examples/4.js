define("mx-collapse/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");n.exports=t.extend({tmpl:function(e,l,n,t,a,i,s,r){if(n||(n=e),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(x,o)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return m[e]},_=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(_,d)}}if(!r){var p=/[\\'"]/g;r=function(e){return a(e).replace(p,"\\$&")}}s||(s=function(e,l,n,t){for(t=e[v];--t;)if(e[n=v+t]===l)return n;return e[n=v+e[v]++]=l,n});var v="",g="",u=e.list,f=e.viewId,y=e.text1;return g+='<div mxv mxa="_zs_galleryaH:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryaH:a" class="_zs_galleryj"><div mxs="_zs_galleryaH:_" class="mb20"><span class="color-9">以下示例：</span><span>自定义icon，展开是顺时针旋转90度</span></div><div mxv="list" mx-view="mx-collapse/index?list='+s(n,u)+'"></div></div><div mxa="_zs_galleryaH:b" class="_zs_galleryk"><div mxs="_zs_galleryaH:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryaH:c" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryaH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+"_text_1\">\n&lt;mx-collapse \n    list=\"&#123;&#123;@[&#123;\n        disabled: true, \n        title: '标题1',\n        content: '内容1'\n    &#125;, &#123;\n        arrow: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe68f;&lt;/i&gt;',\n        title: '标题2',\n        content: '内容2'\n    &#125;, &#123;\n        title: '标题3',\n        content: '内容3'\n    &#125;]&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({list:[{disabled:!0,title:"笑一笑，十年少",content:"1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。"},{arrow:'<i class="mc-iconfont">&#xe68f;</i>',title:"是幽默的深刻，还是深刻的幽默",content:"1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？"},{title:"冷段一组，凉意浓",content:"1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。"}]})}})});