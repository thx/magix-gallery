define("mx-popmenu/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),n=e("__test__/example");e("$");a.applyStyle("_zs_galleryan","._zs_gallerykj{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykk,._zs_gallerykl{margin-right:20px;padding-top:32px}._zs_gallerykm{position:relative;margin-right:20px}._zs_gallerykm ._zs_gallerykn{margin-bottom:136px}._zs_gallerykm ._zs_galleryko{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),l.exports=n.extend({tmpl:function(e,t,l,a,n,s,r,_){if(l||(l=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(x,c)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return p[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(o,g)}}if(!_){var m=/[\\'"]/g;_=function(e){return n(e).replace(m,"\\$&")}}r||(r=function(e,t,l,a){for(a=e[d];--a;)if(e[l=d+a]===t)return l;return e[l=d+e[d]++]=t,l});var d="",u="",y=e.selected,v=e.viewId,z=e.text1;return u+='<div mxa="_zs_galleryc9:_" class="_zs_galleryh"><div mxa="_zs_galleryc9:a" class="_zs_galleryk"><div mxa="_zs_galleryc9:b" class="mb20"><span mxs="_zs_galleryc9:_" class="color-9">trigger：</span><span class="color-brand" mx-change="'+t+'select()" mx-view="mx-popmenu/index?menus='+r(l,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'&triggerType=contextmenu">右键显示菜单</span><span mxs="_zs_galleryc9:a" class="color-9 ml40">当前选中：</span><span>',y&&(u+="操作"+a(y)),u+='</span></div></div><div mxa="_zs_galleryc9:c" class="_zs_galleryl"><div mxs="_zs_galleryc9:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryc9:d" class="_zs_galleryo">'+n(z)+'</span><i mxs="_zs_galleryc9:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-popmenu class="color-brand"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    trigger-type="contextmenu"&gt;右键显示菜单&lt;/mx-popmenu&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var t=e.params.text,l=e.selected;this.updater.digest({text:t,selected:l})}})});