define("mx-collapse/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,s,n,i,_){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(v,g)}}if(!_){var m=/[\\'"]/g;_=function(e){return s(e).replace(m,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[o];--a;)if(e[t=o+a]===l)return t;return e[t=o+e[o]++]=l,t});var o="",f="",p=e.list,y=e.expands,z=e.viewId,u=e.text1,h=e.text2;f+='<div mxv mxa="_zs_galleryaf:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryaf:a" class="_zs_galleryk"><div mxs="_zs_galleryaf:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>默认展开非禁止操作的第一个 + 只展示一个 + 每次只打开一个tab</div><div>完整事件处理示例</div></div></div><div mxa="_zs_galleryaf:b" class="mb20 clearfix"><div mxs="_zs_galleryaf:a" class="fl color-9">模块展开收起状态：</div><div mxa="_zs_galleryaf:c" class="fl">';for(var b=0,w=p.length;b<w;b++){p[b];f+="<div>第"+a(b)+"个模块：",y[b]?f+=" 展开 ":f+=" 收起 ",f+="</div>"}return f+='</div></div><div mxv="list" class="mb20" mx-change="'+l+'change()" mx-view="mx-collapse/index?list='+i(t,p)+'"></div></div><div mxa="_zs_galleryaf:d" class="clearfix"><div mxa="_zs_galleryaf:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryaf:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(z)+'_text_1"><span mxa="_zs_galleryaf:f" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_galleryaf:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+'_text_1">\n&lt;div class="mb20 clearfix"&gt;\n    &lt;div class="fl color-9"&gt;模块展开收起状态：&lt;/div&gt;\n    &lt;div class="fl"&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n        &lt;div&gt;第&#123;&#123;=index&#125;&#125;个模块：&#123;&#123;if expands[index]&#125;&#125; 展开 &#123;&#123;else&#125;&#125; 收起 &#123;&#123;/if&#125;&#125;&lt;/div&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;mx-collapse class="mb20"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="change()"/&gt;\n            </pre></div><div mxa="_zs_galleryaf:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryaf:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(z)+'_text_2"><span mxa="_zs_galleryaf:h" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_galleryaf:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                title: '笑一笑，十年少',\n                content: '1、岁月磨平了你的棱角，其实就是你被生活盘了。&lt;br/&gt;2、你不是真的胖，只是女娲捏土造你的时候土用多了。&lt;br/&gt;3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。'\n            &#125;, &#123;\n                title: '是幽默的深刻，还是深刻的幽默',\n                content: '1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。&lt;br/&gt;2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。&lt;br/&gt;3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？'\n            &#125;, &#123;\n                title: '冷段一组，凉意浓',\n                content: '1、过夜的叫酒店，喝酒的却叫夜店。&lt;br/&gt;2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。&lt;br/&gt;3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。'\n            &#125;],\n            expands: []\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;'(event)&#123;\n        this.updater.digest(&#123;\n            expands: event.expands\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({list:[{title:"笑一笑，十年少",content:"1、岁月磨平了你的棱角，其实就是你被生活盘了。<br/>2、你不是真的胖，只是女娲捏土造你的时候土用多了。<br/>3、当员工好累埃平时做牛做马，到年底了还要表演节目给领导逗乐子。"},{title:"是幽默的深刻，还是深刻的幽默",content:"1、人生，总有不得不走的回头路：比如出门上班走到楼下才发现没带手机。<br/>2、为什么经常看见妻子吊打小三，却很少看见丈夫痛殴奸夫？因为小三一般比妻子瘦弱，而奸夫一般比较丈夫健硕。<br/>3、怕开宝马的同学认出没戴头盔骑摩托车的你，真的想多了。人家工作、购物、居注娱乐去的地方，走的是和你一条线吗？"},{title:"冷段一组，凉意浓",content:"1、过夜的叫酒店，喝酒的却叫夜店。<br/>2、打呼噜的人能在自己的呼噜声中睡着也太不公平了。<br/>3、友谊其实很简单，就是在自己吃到好吃的食物的时候想着对方，然后拍下来发给他。"}],expands:[]})},"change<change>":function(e){this.updater.digest({expands:e.expands})}})});