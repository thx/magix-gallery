define("mx-dropdown/examples/30",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,s,r,i,t){if(n||(n=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,m)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(c,o)}}if(!t){var p=/[\\'"]/g;t=function(e){return s(e).replace(p,"\\$&")}}i||(i=function(e,l,n,a){for(a=e[g];--a;)if(e[n=g+a]===l)return n;return e[n=g+e[g]++]=l,n});var g="",f="",u=e.viewId,v=e.text1;return f+='<div mxa="_zs_gallerybf:_" class="_zs_galleryg"><div mxa="_zs_gallerybf:a" class="_zs_galleryj"><div mxs="_zs_gallerybf:_" class="mb20"><span class="color-9">以下示例：</span>小尺寸展示</div><div mx-view="mx-dropdown/index?small=true&list='+i(n,[1,2,3])+'"></div></div><div mxa="_zs_gallerybf:b" class="_zs_galleryk"><div mxs="_zs_gallerybf:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallerybf:c" class="_zs_galleryn">'+s(v)+'</span><i mxs="_zs_gallerybf:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-dropdown \n    small="true"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});