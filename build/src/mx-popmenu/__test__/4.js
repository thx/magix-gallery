define("mx-popmenu/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),n=e("__test__/example");e("$");a.applyStyle("_zs_galleryak","._zs_galleryiq,._zs_galleryir{margin-right:20px;padding-top:32px}._zs_galleryis{position:relative;margin-right:20px}._zs_galleryis ._zs_galleryit{margin-bottom:136px}._zs_galleryis ._zs_galleryiu{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),l.exports=n.extend({tmpl:function(e,t,l,a,n,s,r,_){if(l||(l=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(c,x)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(o,p)}}if(!_){var m=/[\\'"]/g;_=function(e){return n(e).replace(m,"\\$&")}}r||(r=function(e,t,l,a){for(a=e[u];--a;)if(e[l=u+a]===t)return l;return e[l=u+e[u]++]=t,l});var u="",d="",v=e.selected,y=e.viewId,z=e.text1;return d+='<div mxa="_zs_galleryc):_" class="_zs_galleryg"><div mxa="_zs_galleryc):a" class="_zs_galleryj"><div mxa="_zs_galleryc):b" class="mb20"><span mxs="_zs_galleryc):_" class="color-9">trigger：</span><span class="color-brand" mx-change="'+t+'select()" mx-view="mx-popmenu/index?menus='+r(l,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'&triggerType=contextmenu">右键显示菜单</span><span mxs="_zs_galleryc):a" class="color-9 ml40">当前选中：</span><span>',v&&(d+="操作"+a(v)),d+='</span></div></div><div mxa="_zs_galleryc):c" class="_zs_galleryk"><div mxs="_zs_galleryc):b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryc):d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryc):c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;mx-popmenu class="color-brand"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    trigger-type="contextmenu"&gt;右键显示菜单&lt;/mx-popmenu&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var t=e.params.text,l=e.selected;this.updater.digest({text:t,selected:l})}})});