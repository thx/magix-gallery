define("mx-popmenu/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var t=e("magix"),n=e("examples/example");e("$");t.applyStyle("_zs_galleryam","._zs_galleryiM,._zs_galleryiN{margin-right:20px;padding-top:32px}._zs_galleryiO{position:relative;margin-right:20px}._zs_galleryiO ._zs_galleryiP{margin-bottom:136px}._zs_galleryiO ._zs_galleryiQ{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),a.exports=n.extend({tmpl:function(e,l,a,t,n,s,r,i){if(a||(a=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(p,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return _[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,g)}}if(!i){var d=/[\\'"]/g;i=function(e){return n(e).replace(d,"\\$&")}}r||(r=function(e,l,a,t){for(t=e[o];--t;)if(e[a=o+t]===l)return a;return e[a=o+e[o]++]=l,a});var o="",u="",v=e.selected,y=e.viewId,z=e.text1;return u+='<div mxa="_zs_gallerydk:_" class="_zs_galleryg"><div mxa="_zs_gallerydk:a" class="_zs_galleryj"><div mxa="_zs_gallerydk:b" class="mb20"><span mxs="_zs_gallerydk:_" class="color-9">trigger：</span><span class="color-brand" mx-change="'+l+'select()" mx-view="mx-popmenu/index?menus='+r(a,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'&triggerType=contextmenu">右键显示菜单</span><span mxs="_zs_gallerydk:a" class="color-9 ml40">当前选中：</span><span>',v&&(u+="操作"+t(v)),u+='</span></div></div><div mxa="_zs_gallerydk:c" class="_zs_galleryk"><div mxs="_zs_gallerydk:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallerydk:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydk:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(y)+'_text_1">\n&lt;mx-popmenu class="color-brand"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    trigger-type="contextmenu"&gt;右键显示菜单&lt;/mx-popmenu&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var l=e.params.text,a=e.selected;this.updater.digest({text:l,selected:a})}})});