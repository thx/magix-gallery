define("mx-taginput/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,_,n,i,a){if(s||(s=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(d,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},u=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(u,m)}}if(!a){var g=/[\\'"]/g;a=function(e){return _(e).replace(g,"\\$&")}}i||(i=function(e,t,s,l){for(l=e[o];--l;)if(e[s=o+l]===t)return s;return e[s=o+e[o]++]=t,s});var o="",p="",v=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryd/:_" class="_zs_galleryh"><div mxa="_zs_galleryd/:a" class="_zs_galleryk"><div class="w250" mx-disabled mx-view="mx-taginput/index?list='+i(s,["test1","test2","test3","test4"])+'&selected=test1%2Ctest2"></div></div><div mxa="_zs_galleryd/:b" class="_zs_galleryl"><div mxs="_zs_galleryd/:_" class="_zs_galleryj">禁止操作</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryd/:c" class="_zs_galleryo">'+_(y)+'</span><i mxs="_zs_galleryd/:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_1\">\n&lt;mx-taginput class=\"w250\"\n    mx-disabled\n    list=\"&#123;&#123;@['test1','test2','test3','test4']&#125;&#125;\"\n    selected=\"test1,test2\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({searchValue:""})}})});