define("mx-popover/__test__/15",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),s=e("__test__/example"),a=e("$");n.exports=s.extend({tmpl:function(e,t,n,l,s,a,r,o){if(n||(n=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(i,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(p,c)}}if(!o){var m=/[\\'"]/g;o=function(e){return s(e).replace(m,"\\$&")}}var v="",g=e.top,f=e.left,u=e.auto,y=e.viewId,z=e.text1,h=e.text2;return v+='<div mxa="_zs_galleryc`:_" class="_zs_galleryh"><div mxa="_zs_galleryc`:a" class="_zs_galleryk"><span class="btn" mx-mouseover="'+t+'enter()" mx-view="mx-popover/index?content=%E8%87%AA%E5%AE%9A%E4%B9%89left%20%2B%20top&top='+a(g)+"&left="+a(f)+"&auto="+a(u)+'">鼠标hover节点自定义更新left + top</span></div><div mxa="_zs_galleryc`:b" class="_zs_galleryl"><div mxs="_zs_galleryc`:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryc`:c" class="_zs_galleryo">'+s(z)+'</span><i mxs="_zs_galleryc`:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;mx-popover class="btn"\n    content="自定义left + top"\n    top="&#123;&#123;=top&#125;&#125;"\n    left="&#123;&#123;=left&#125;&#125;"\n    auto="&#123;&#123;=auto&#125;&#125;"\n    mx-mouseover="enter()"&gt;鼠标hover节点自定义更新left + top&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc`:d" class="_zs_galleryl"><div mxs="_zs_galleryc`:b" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryc`:e" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_galleryc`:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            auto: false, //控制节点展开\n            top: '',\n            left: ''\n        &#125;);\n    &#125;,\n    'enter&lt;mouseover&gt;' (event) &#123;\n        if (Magix.inside(event.relatedTarget, event.eventTarget)) &#123;\n            return;\n        &#125;\n\n        let node = $(event.eventTarget);\n        let offset = node.offset();\n\n        this.updater.digest(&#123;\n            auto: true,\n            top: offset.top,\n            left: offset.left + 220\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({auto:!1,top:"",left:""})},"enter<mouseover>":function(e){if(!l.inside(e.relatedTarget,e.eventTarget)){var t=a(e.eventTarget).offset();this.updater.digest({auto:!0,top:t.top,left:t.left+220})}}})});