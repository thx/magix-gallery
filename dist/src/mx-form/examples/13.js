define("mx-form/examples/13",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-dropdown/index","mx-copy/index","examples/hl"],(e,l,r)=>{e("mx-dropdown/index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),n=e("mx-form/index"),s=e("mx-form/validator");e("$");r.exports=a.extend({tmpl:function(e,l,r,a,n,s,d,m){if(r||(r=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,t=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(x,t)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(_,c)}}if(!m){var p=/[\\'"]/g;m=function(e){return n(e).replace(p,"\\$&")}}d||(d=function(e,l,r,a){for(a=e[v];--a;)if(e[r=v+a]===l)return r;return e[r=v+e[v]++]=l,r});var v="",g="",u=e.day,y=e.viewId,f=e.text1;return g+='<div mxv mxa="_zs_galleryce:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryce:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryce:b" class="mb20"><span mxs="_zs_galleryce:_" class="color-9 mr20">dropdown必选（请选择为空状态提示）：</span><div mxv="day" mxe="'+l+'_0" mxc="[{p:\'day\',f:{required:true},a:\'selected\'}]" class="w200" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected='+d(r,u)+'"><i mxs="_zs_galleryce:a" value="1" class="none">1</i><i mxs="_zs_galleryce:b" value="2" class="none">2</i></div></div></div><div mxa="_zs_galleryce:c" class="_zs_galleryk"><div mxs="_zs_galleryce:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryce:d" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_galleryce:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;mx-dropdown class="w200"\n    empty-text="请选择"\n    selected="&#123;&#123;:day&#123;required:true&#125;&#125;&#125;"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},mixins:[n,s],render:function(){this.updater.digest()}})});