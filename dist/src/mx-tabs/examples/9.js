define("mx-tabs/examples/9",["magix","examples/example","mx-form/index","mx-form/validator","$","../box","mx-copy/index","examples/hl"],(e,l,s)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),t=e("mx-form/index"),r=e("mx-form/validator");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,t,r,x,n){if(s||(s=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(m,c)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return d[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(o,_)}}if(!n){var v=/[\\'"]/g;n=function(e){return t(e).replace(v,"\\$&")}}x||(x=function(e,l,s,a){for(a=e[f];--a;)if(e[s=f+a]===l)return s;return e[s=f+e[f]++]=l,s});var f="",p="",u=e.selected,g=e.viewId,b=e.text1;return p+='<div mxv mxa="_zs_galleryfb:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfb:a" class="_zs_galleryj"><div mxa="_zs_galleryfb:b" class="mb20"><span mxs="_zs_galleryfb:_" class="color-9">当前选中模块：</span>模块'+a(u)+'</div><div mxv="selected" mxe="'+l+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'selected'}]\" mx-view=\"mx-tabs/box?list="+x(s,[{value:1,text:"模块1"},{value:2,text:"模块2"}])+"&selected="+x(s,u)+'"></div></div><div mxa="_zs_galleryfb:c" class="_zs_galleryk"><div mxs="_zs_galleryfb:a" class="_zs_galleryi">双向绑定</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryfb:d" class="_zs_galleryn">'+t(b)+'</span><i mxs="_zs_galleryfb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-tabs.box \n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'模块1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'模块2\'\n    &#125;]&#125;&#125;" \n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tabs.box&gt;</pre></div></div>'},mixins:[t,r],render:function(){this.updater.digest({selected:2})}})});