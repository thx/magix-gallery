define("mx-taginput/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,_,i,n,a){if(s||(s=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(d,c)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(g,u)}}if(!a){var m=/[\\'"]/g;a=function(e){return _(e).replace(m,"\\$&")}}n||(n=function(e,t,s,l){for(l=e[o];--l;)if(e[s=o+l]===t)return s;return e[s=o+e[o]++]=t,s});var o="",p="",v=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryeT:_" class="_zs_galleryg"><div mxa="_zs_galleryeT:a" class="_zs_galleryj"><div class="w250" mx-view="mx-taginput/index?disabled=true&list='+n(s,["test1","test2","test3","test4"])+'&selected=test1%2Ctest2"></div></div><div mxa="_zs_galleryeT:b" class="_zs_galleryk"><div mxs="_zs_galleryeT:_" class="_zs_galleryi">禁止操作</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_galleryeT:c" class="_zs_galleryn">'+_(y)+'</span><i mxs="_zs_galleryeT:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-taginput class="w250"\n    disabled="true"\n    list="&#123;&#123;@[\'test1\',\'test2\',\'test3\',\'test4\']&#125;&#125;"\n    selected="test1,test2"/&gt;</pre></div></div>'},render:function(){this.updater.digest({searchValue:""})}})});