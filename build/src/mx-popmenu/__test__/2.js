define("mx-popmenu/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),a=e("__test__/example");e("$");n.applyStyle("_zs_galleryak","._zs_galleryki{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykj,._zs_gallerykk{margin-right:20px;padding-top:32px}._zs_gallerykl{position:relative;margin-right:20px}._zs_gallerykl ._zs_gallerykm{margin-bottom:136px}._zs_gallerykl ._zs_gallerykn{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=a.extend({tmpl:function(e,l,s,n,a,t,m,x){if(s||(s=e),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,_=function(e){return"&"+c[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(i,_)}}if(!t){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return r[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(d,p)}}if(!x){var v=/[\\'"]/g;x=function(e){return a(e).replace(v,"\\$&")}}m||(m=function(e,l,s,n){for(n=e[g];--n;)if(e[s=g+n]===l)return s;return e[s=g+e[g]++]=l,s});var g="",u="",o=e.menus,y=e.text,z=e.selected,h=e.viewId,w=e.text1,b=e.text2;return u+='<div mxv mxa="_zs_gallerycH:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerycH:a" class="_zs_galleryk"><div mxs="_zs_gallerycH:_" class="mb20"><span class="color-9">以下示例：</span>hover显示菜单</div><div mxv mxa="_zs_gallerycH:b" class="clearfix mb20"><div mxv mxa="_zs_gallerycH:c" class="fl _zs_gallerykj"><div mxv mxa="_zs_gallerycH:d" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左上对齐（lt）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_gallerycH:e" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左中对齐（lc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左下对齐（lb）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_gallerycH:f" class="fl _zs_gallerykl"><div mxv mxa="_zs_gallerycH:g" class="_zs_gallerykm"><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'上左对齐（tl）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'上中对齐（tc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'上右对齐（tr）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tr">上右对齐（tr）</span></div>',y&&z&&(u+='<div mxa="_zs_gallerycH:h" class="_zs_gallerykn">'+n(y)+"：选择操作"+n(z)+"</div>"),u+='<div mxv><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'下左对齐（bl）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'下中对齐（bc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'下右对齐（br）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_gallerycH:i" class="fl _zs_gallerykk"><div mxv mxa="_zs_gallerycH:j" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右上对齐（rt）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_gallerycH:k" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右中对齐（rc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右下对齐（rb）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerycH:l" class="clearfix"><div mxa="_zs_gallerycH:m" class="_zs_galleryl _zs_gallerye _zs_galleryg"><div mxs="_zs_gallerycH:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(h)+'_text_1"><span mxa="_zs_gallerycH:n" class="_zs_galleryo">'+a(w)+'</span><i mxs="_zs_gallerycH:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(h)+'_text_1">\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    mx-change="select()"&gt;下中对齐&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    place="lt"\n    mx-change="select()"&gt;左上对齐（lt）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_gallerycH:o" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerycH:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(h)+'_text_2"><span mxa="_zs_gallerycH:p" class="_zs_galleryo">'+a(b)+'</span><i mxs="_zs_gallerycH:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@2.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'select&lt;change&gt;'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n                \n            </pre></div></div></div>"},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var l=e.params.text,s=e.selected;this.updater.digest({text:l,selected:s})}})});