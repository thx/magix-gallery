define("mx-tabs/__test__/8",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),a=e("mx-form/index"),r=e("mx-form/validator");e("$");l.exports=s.extend({tmpl:function(e,t,l,s,a,r,_,n){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(x,d)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(v,c)}}if(!n){var o=/[\\'"]/g;n=function(e){return a(e).replace(o,"\\$&")}}_||(_=function(e,t,l,s){for(s=e[u];--s;)if(e[l=u+s]===t)return l;return e[l=u+e[u]++]=t,l});var u="",g="",f=e.selected,p=e.viewId,y=e.text1;return g+='<div mxv mxa="_zs_galleryeA:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryeA:a" class="_zs_galleryj"><div mxa="_zs_galleryeA:b" class="mb20"><span mxs="_zs_galleryeA:_" class="color-9">当前选中模块：</span>模块'+s(f)+'</div><div mxv="selected" mxe="'+t+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'selected'}]\" mx-view=\"mx-tabs/index?list="+_(l,[{value:1,text:"模块1"},{value:2,text:"模块2"}])+"&selected="+_(l,f)+'"></div></div><div mxa="_zs_galleryeA:c" class="_zs_galleryk"><div mxs="_zs_galleryeA:a" class="_zs_galleryi">双向绑定</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryeA:d" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryeA:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'模块1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'模块2\'\n    &#125;]&#125;&#125;" \n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tabs&gt;</pre></div></div>'},mixins:[a,r],render:function(){this.updater.digest({selected:2})}})});