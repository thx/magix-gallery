define("mx-dialog/__test__/10",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,n)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("mx-dialog/index"),t=e("__test__/example");e("$");n.exports=t.extend({tmpl:function(e,l,n,a,t,_,i,s){if(n||(n=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(d,c)}}if(!_){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(t(e)).replace(m,x)}}if(!s){var g=/[\\'"]/g;s=function(e){return t(e).replace(g,"\\$&")}}var p="",f=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryad:_" class="_zs_galleryh"><div mxs="_zs_galleryad:_" class="_zs_galleryk"><a href="javascript:;" mx-click="'+l+'open()" class="btn btn-brand mr20">全屏右出浮层(只头部)</a></div><div mxa="_zs_galleryad:a" class="_zs_galleryl"><div mxs="_zs_galleryad:a" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(f)+'_text_1"><span mxa="_zs_galleryad:b" class="_zs_galleryo">'+t(u)+'</span><i mxs="_zs_galleryad:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+"_text_1\">\n'open&lt;click&gt;'(e) &#123;\n    this.mxModal('@./full', &#123;\n    &#125;, &#123;\n        header: &#123;\n            title: '全屏右出浮层'\n        &#125;,\n        footer: &#123;\n            enter: false,\n            cancel: false\n        &#125;\n    &#125;);\n&#125;\n        </pre></div></div>"},mixins:[a],render:function(){this.updater.digest()},"open<click>":function(e){this.mxModal("mx-dialog/__test__/full",{readonly:!0},{header:{title:"全屏右出浮层"},footer:{enter:!1,cancel:!1}})}})});