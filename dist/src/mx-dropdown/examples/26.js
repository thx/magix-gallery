define("mx-dropdown/examples/26",["magix","examples/example","$","../bd","mx-copy/index","examples/hl"],(e,l,a)=>{e("../bd"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,d,n,r,i){if(a||(a=e),!d){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};d=function(e){return""+(null==e?"":e)},s=function(e){return d(e).replace(m,x)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(d(e)).replace(_,c)}}if(!i){var p=/[\\'"]/g;i=function(e){return d(e).replace(p,"\\$&")}}r||(r=function(e,l,a,s){for(s=e[u];--s;)if(e[a=u+s]===l)return a;return e[a=u+e[u]++]=l,a});var u="",v="",g=e.viewId,b=e.text1;return v+='<div mxa="_zs_galleryba:_" class="_zs_galleryg"><div mxa="_zs_galleryba:a" class="_zs_galleryj"><div mxs="_zs_galleryba:_" class="mb20"><span class="color-9">以下示例：</span>单选/多选整体禁用</div><div mxa="_zs_galleryba:b" class="mb10"><div class="w200" mx-view="mx-dropdown/bd?disabled=true&list='+r(a,[1,2,3])+'"></div></div><div class="w200" mx-view="mx-dropdown/bd?multiple=true&disabled=true&list='+r(a,[1,2,3])+'"></div></div><div mxa="_zs_galleryba:c" class="_zs_galleryk"><div mxs="_zs_galleryba:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_galleryba:d" class="_zs_galleryn">'+d(b)+'</span><i mxs="_zs_galleryba:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(g)+'_text_1">\n&lt;mx-dropdown.bd class="w200" \n    disabled="true"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n\n&lt;mx-dropdown.bd class="w200"\n    multiple="true"\n    disabled="true"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});