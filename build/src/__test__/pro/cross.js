define("__test__/pro/cross",["magix","$","../subs","mx-title/second"],(s,a,e)=>{s("../subs"),s("mx-title/second");var r=s("magix");s("$");r.applyStyle("_zs_gallerye","._zs_galleryaf{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryag{position:relative;padding-left:20px;line-height:32px}._zs_galleryag ._zs_galleryah{position:absolute;top:0;left:0;width:20px}._zs_galleryai{box-shadow:0 6px 8px rgba(51,51,51,.08)}"),e.exports=r.View.extend({tmpl:function(s,a,e,r,n,l,i,p){if(e||(e=s),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,c=function(s){return"&"+o[s]+";"};n=function(s){return""+(null==s?"":s)},r=function(s){return n(s).replace(t,c)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(s){return d[s]},m=/[!')(*]/g;l=function(s){return encodeURIComponent(n(s)).replace(m,g)}}if(!p){var _=/[\\'"]/g;p=function(s){return n(s).replace(_,"\\$&")}}i||(i=function(s,a,e,r){for(r=s[v];--r;)if(s[e=v+r]===a)return e;return s[e=v+s[v]++]=a,e});var v="",b="",h=s.viewId;return b+='<div mxa="_zs_galleryk:_" class="pr pr140"><div mx-view="__test__/subs?list='+i(e,[{name:"直接配置路径",key:h+"_magix1"},{name:"新建view mount",key:h+"_magix2"}])+'"></div><div mxs="_zs_galleryk:_" mx-view="mx-title/second?content=%E5%87%A0%E4%B8%AA%E9%87%8D%E7%82%B9"></div><div mxs="_zs_galleryk:a" class="pr20 mb40"><div class="_zs_galleryag"><span class="_zs_galleryah">1.</span>使用&nbsp;magix3&nbsp;提供的&nbsp;vframe&nbsp;功能，允许项目间类似&nbsp;iframe&nbsp;那样引用对方的view。该功能支持把复杂的项目拆分成n个子项目进行维护；</div><div class="_zs_galleryag"><span class="_zs_galleryah">2.</span>子项目中的&nbsp;view&nbsp;被渲染在宿主项目时，使用<span class="color-brand">宿主项目</span>里的组件（project/gallery/）以及品牌色；</div><div class="_zs_galleryag"><span class="_zs_galleryah">3.</span>子项目中界面显示所需要的相关颜色，会由&nbsp;/gallery/mx-style/&nbsp;统一提供，自己在&nbsp;view&nbsp;定制的样式请使用<span class="color-brand">&nbsp;css3&nbsp;</span>变量进行改造；</div><div class="_zs_galleryag"><span class="_zs_galleryah">4.</span>关于包名的约定，&nbsp;seajs&nbsp;或&nbsp;requirejs&nbsp;需要配置一个包名来使用某个目录下的js文件，指向不同目录下的包名不能同名。这要求我们在开发新项目时，<span class="color-brand">使用新项目的名称来做为包名</span>，不能再像以前那样使用统一的app名称；</div></div><div mxs="_zs_galleryk:b" mx-view="mx-title/second?content=%E5%85%B7%E4%BD%93%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4"></div><div><div mxs="_zs_galleryk:c" class="_zs_galleryag mb10"><span class="_zs_galleryah">1.</span>项目A（<a href="//gitlab.alibaba-inc.com/mm/cross1" class="color-brand" target="_blank" rel="noopener noreferrer">git@gitlab.alibaba-inc.com:mm/cross1.git</a>）中有通用模块“页面1”和“页面2”</div><div mxs="_zs_galleryk:d" class="pl20 mb10"><iframe src="https://mo.m.taobao.com/page_201806071452566" class="_zs_galleryai" width="100%" height="680" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div><div mxs="_zs_galleryk:e" class="_zs_galleryag mb10"><div class="_zs_galleryah">2.</div><div>跨项目mount的时候，子项目会使用宿主项目的组件和品牌色；</div><div>如果子模块有单独的样式，请使用&nbsp;css3&nbsp;变量（应用宿主项目中的变量定义，组件里mx-style/_group.less；本地覆盖assets/group_override.less）替代&nbsp;less&nbsp;变量；具体示例如下：</div></div><div mxs="_zs_galleryk:f" class="pl20 mb10"><div class="tip-content"><pre class="inline">\n&lt;!-- group_override.less --&gt;\n:root&#123;\n    --color-brand: #4ca26f;\n    --color-brand-vs: #ffe066;\n&#125;\n        \n&lt;!-- 页面1的样式 --&gt;\n@import \'../../../gallery/mx-style/_vars\';\n\n.demo&#123;\n    margin-bottom: 20px;\n    padding: 20px;\n    background-color: </pre><pre class="inline color-brand">var(--color-bg);</pre><pre>\n    border-radius: var(--border-radius);\n    .item&#123;\n        float: left;\n        width: 25%;\n        font-size: 14px;\n        line-height: 28px;\n        font-weight: bold;\n        .line1&#123;\n            color: var(--color-brand);\n        &#125;\n        .line2&#123;\n            color: var(--color-brand-vs);\n        &#125;\n    &#125;\n&#125;</pre></div></div><div mxs="_zs_galleryk:g" class="_zs_galleryag"><div class="_zs_galleryah">3.</div><div>脚手架（<a href="//gitlab.alibaba-inc.com/mm/zs_scaffold" class="color-brand" target="_blank" rel="noopener noreferrer">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a>）作为宿主项目需要加载这两个模块</div><div>页面1：直接完整加载</div><div>页面2：其中只需要加载子模块2和子模块3</div></div><div mxs="_zs_galleryk:h" class="_zs_galleryag mb10"><span class="_zs_galleryah">4.</span>在宿主项目的&nbsp;boot.ts&nbsp;中加入子项目的包配置和prepare处理</div><div mxs="_zs_galleryk:i" class="pl20 mb10"><div class="tip-content"><pre>seajs.config({\n    paths: {\n        //主项目配置好要加载的子项目的包名</pre><pre class="color-brand">\n        cross1: "//g.alicdn.com/mm/cross1/20180917.120657.043/cross1",</pre><pre>\n        [projectName]: src + \'/\' + projectName\n    }\n});\n\nseajs.use([\'magix\'], (Magix) => {\n    Magix.config({\n        //主项目需要配置子项目的接口的host</pre><pre class="color-brand">\n        \'cross1.api.host\': \'//mo.m.taobao.com\',</pre><pre>\n        projectName\n    })</pre><pre class="inline">\n\n    seajs.use([`${projectName}/prepare`, </pre><pre class="color-brand inline">\'cross1/prepare\'</pre><pre class="inline">], (Prepare, </pre><pre class="color-brand inline">CrossPrpare</pre><pre class="inline">) => {\n        Promise.all([Prepare(), </pre><pre class="color-brand inline">CrossPrpare()</pre><pre class="inline">]).then(() => {\n            // 其他处理\n        })\n    });\n})</pre></div></div><div class="_zs_galleryag mb10" id="'+r(h)+"_magix1\"><span mxs=\"_zs_galleryk:j\" class=\"_zs_galleryah\">5.</span>模块直接加载或者只需传递一些固定参数的时候，直接在&nbsp;menu.ts&nbsp;中配置路径即可</div><div mxs=\"_zs_galleryk:k\" class=\"pl20 mb10\"><div class=\"tip-content\"><pre>let Menus = [{\n    has: true,\n    name: '导航菜单',\n    path: '/example/path1',\n    subs: [{\n        name: '跨项目加载view',\n        thirds: [{\n            has: true,\n            name: '直接配置路径',</pre><pre class=\"color-brand\">\n            viewPath: 'cross1/views/pages', //页面所属项目路径，跨项目mount的时候需要配置\n            viewData: { //传入viewPath的参数\n                tip: 'zs_scaffold项目mount子项目'\n            },</pre><pre>\n            path: '/example/path1',\n            icon: '&#38;&#35;xe64f;'\n        }]\n    }]\n}]</pre></div></div><div class=\"_zs_galleryag\" id=\""+r(h)+'_magix2"><span mxs="_zs_galleryk:l" class="_zs_galleryah">6.</span>如果需要根据上下文进行一些前置参数计算，可在宿主项目中创建一个view进行逻辑处理，处理完手动mount子项目的view</div><div mxs="_zs_galleryk:m" class="pl20 mb10"><div class="lh32 mb10">menu.ts的配置：</div><div class="tip-content mb10"><pre>let Menus = [{\n    has: true,\n    name: \'导航菜单\',\n    path: \'/example/path1\',\n    subs: [{\n        name: \'跨项目加载view\',\n        thirds: [{\n            has: true,\n            name: \'新建view mount子页面\',\n            path: \'/example/third2\',\n            icon: \'&#38;&#35;xe64e;\'\n        }]\n    }]\n}]</pre></div><div class="lh32 mb10">third2.html：</div><div class="tip-content"><pre>\n&lt;div mx-view="cross1/views/pages/example/path2?filters=&#123;&#123;@[1,2,3]&#125;&#125;"&gt;&lt;/div&gt;</pre></div></div><div mxs="_zs_galleryk:n" class="_zs_galleryag mb10"><span class="_zs_galleryah">7.</span>脚手架（<a href="//gitlab.alibaba-inc.com/mm/zs_scaffold" class="color-brand" target="_blank" rel="noopener noreferrer">git@gitlab.alibaba-inc.com:mm/zs_scaffold.git</a>）具体展现如下：</div><div mxs="_zs_galleryk:o" class="pl20"><iframe src="https://mo.m.taobao.com/page_201809162348244" class="_zs_galleryai" width="100%" height="680" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});