define("mx-tabs/examples/8",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),t=e("mx-form/index"),r=e("mx-form/validator");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,t,r,n,x){if(s||(s=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(m,d)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(v,_)}}if(!x){var f=/[\\'"]/g;x=function(e){return t(e).replace(f,"\\$&")}}n||(n=function(e,l,s,a){for(a=e[o];--a;)if(e[s=o+a]===l)return s;return e[s=o+e[o]++]=l,s});var o="",p="",u=e.selected,g=e.viewId,y=e.text1;return p+='<div mxv mxa="_zs_galleryfb:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfb:a" class="_zs_galleryj"><div mxa="_zs_galleryfb:b" class="mb20"><span mxs="_zs_galleryfb:_" class="color-9">当前选中模块：</span>模块'+a(u)+'</div><div mxv="selected" mxe="'+l+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'selected'}]\" mx-view=\"mx-tabs/index?list="+n(s,[{value:1,text:"模块1"},{value:2,text:"模块2"}])+"&selected="+n(s,u)+'"></div></div><div mxa="_zs_galleryfb:c" class="_zs_galleryk"><div mxs="_zs_galleryfb:a" class="_zs_galleryi">双向绑定</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryfb:d" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_galleryfb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'模块1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'模块2\'\n    &#125;]&#125;&#125;" \n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tabs&gt;</pre></div></div>'},mixins:[t,r],render:function(){this.updater.digest({selected:2})}})});