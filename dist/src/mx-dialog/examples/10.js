define("mx-dialog/examples/10",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("mx-dialog/index"),i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,n,i,s,r,t){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(c,d)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(_,o)}}if(!t){var p=/[\\'"]/g;t=function(e){return i(e).replace(p,"\\$&")}}var g="",f=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryaR:_" class="_zs_galleryg"><div mxs="_zs_galleryaR:_" class="_zs_galleryj"><a href="javascript:;" mx-click="'+l+'open()" class="btn btn-brand mr20">全屏右出浮层(只头部)</a></div><div mxa="_zs_galleryaR:a" class="_zs_galleryk"><div mxs="_zs_galleryaR:a" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryaR:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryaR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(f)+"_text_1\">\n'open&lt;click&gt;'(e) &#123;\n    this.mxModal('@./full', &#123;\n    &#125;, &#123;\n        header: &#123;\n            title: '全屏右出浮层'\n        &#125;,\n        footer: &#123;\n            enter: false,\n            cancel: false\n        &#125;\n    &#125;);\n&#125;\n        </pre></div></div>"},mixins:[n],render:function(){this.updater.digest()},"open<click>":function(e){this.mxModal("mx-dialog/examples/full",{readonly:!0},{header:{title:"全屏右出浮层"},footer:{enter:!1,cancel:!1}})}})});