define("mx-popmenu/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),n=e("__test__/example");e("$");t.applyStyle("_zs_galleryam","._zs_galleryiD,._zs_galleryiE{margin-right:20px;padding-top:32px}._zs_galleryiF{position:relative;margin-right:20px}._zs_galleryiF ._zs_galleryiG{margin-bottom:136px}._zs_galleryiF ._zs_galleryiH{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=n.extend({tmpl:function(e,l,s,t,n,a,i,c){if(s||(s=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,r=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(x,r)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(g,p)}}if(!c){var d=/[\\'"]/g;c=function(e){return n(e).replace(d,"\\$&")}}i||(i=function(e,l,s,t){for(t=e[v];--t;)if(e[s=v+t]===l)return s;return e[s=v+e[v]++]=l,s});var v="",u="",y=e.menus,o=e.text,z=e.selected,h=e.viewId,b=e.text1,w=e.text2;return u+='<div mxv mxa="_zs_galleryc(:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryc(:a" class="_zs_galleryj"><div mxs="_zs_galleryc(:_" class="mb20"><span class="color-9">以下示例：</span>点击显示菜单</div><div mxv mxa="_zs_galleryc(:b" class="clearfix mb20"><div mxv mxa="_zs_galleryc(:c" class="fl _zs_galleryiD"><div mxv mxa="_zs_galleryc(:d" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左上对齐（lt）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_galleryc(:e" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左中对齐（lc）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左下对齐（lb）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_galleryc(:f" class="fl _zs_galleryiF"><div mxv mxa="_zs_galleryc(:g" class="_zs_galleryiG"><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'上左对齐（tl）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'上中对齐（tc）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn" mx-change="'+l+"select({text:'上右对齐（tr）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=tr">上右对齐（tr）</span></div>',o&&z&&(u+='<div mxa="_zs_galleryc(:h" class="_zs_galleryiH">'+t(o)+"：选择操作"+t(z)+"</div>"),u+='<div mxv><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'下左对齐（bl）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'下中对齐（bc）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn" mx-change="'+l+"select({text:'下右对齐（br）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_galleryc(:i" class="fl _zs_galleryiE"><div mxv mxa="_zs_galleryc(:j" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右上对齐（rt）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_galleryc(:k" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右中对齐（rc）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右下对齐（rb）'})\" mx-view=\"mx-popmenu/index?menus="+i(s,y)+'&width=100&triggerType=click&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_galleryc(:l" class="clearfix"><div mxa="_zs_galleryc(:m" class="_zs_galleryk _zs_galleryd _zs_galleryf"><div mxs="_zs_galleryc(:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(h)+'_text_1"><span mxa="_zs_galleryc(:n" class="_zs_galleryn">'+n(b)+'</span><i mxs="_zs_galleryc(:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(h)+'_text_1">\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"&gt;下中对齐（bc）&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"\n    place="lc"\n    mx-change="select()"&gt;左中对齐（lc）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_galleryc(:o" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryc(:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(h)+'_text_2"><span mxa="_zs_galleryc(:p" class="_zs_galleryn">'+n(w)+'</span><i mxs="_zs_galleryc(:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@2.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'select&lt;change&gt;'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var l=e.params.text,s=e.selected;this.updater.digest({text:l,selected:s})}})});