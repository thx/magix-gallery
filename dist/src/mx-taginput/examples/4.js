define("mx-taginput/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,a,i,n,r){if(s||(s=e),!a){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(_,d)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(p,m)}}if(!r){var u=/[\\'"]/g;r=function(e){return a(e).replace(u,"\\$&")}}n||(n=function(e,t,s,l){for(l=e[g];--l;)if(e[s=g+l]===t)return s;return e[s=g+e[g]++]=t,s});var g="",f="",o=e.viewId,v=e.text1;return f+='<div mxa="_zs_galleryf_:_" class="_zs_galleryg"><div mxa="_zs_galleryf_:a" class="_zs_galleryj"><div class="w250" mx-view="mx-taginput/index?disabled=true&list='+n(s,["test1","test2","test3","test4"])+'&selected=test1%2Ctest2"></div></div><div mxa="_zs_galleryf_:b" class="_zs_galleryk"><div mxs="_zs_galleryf_:_" class="_zs_galleryi">禁止操作</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(o)+'_text_1"><span mxa="_zs_galleryf_:c" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_galleryf_:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(o)+'_text_1">\n&lt;mx-taginput class="w250"\n    disabled="true"\n    list="&#123;&#123;@[\'test1\',\'test2\',\'test3\',\'test4\']&#125;&#125;"\n    selected="test1,test2"/&gt;</pre></div></div>'},render:function(){this.updater.digest({searchValue:""})}})});