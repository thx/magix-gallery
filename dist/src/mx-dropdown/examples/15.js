define("mx-dropdown/examples/15",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,n,i,r,d){if(a||(a=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,c=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(t,c)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(o,_)}}if(!d){var p=/[\\'"]/g;d=function(e){return n(e).replace(p,"\\$&")}}r||(r=function(e,l,a,s){for(s=e[v];--s;)if(e[a=v+s]===l)return a;return e[a=v+e[v]++]=l,a});var v="",g="",u=e.viewId,f=e.text1;return g+='<div mxa="_zs_gallerya[:_" class="_zs_galleryg"><div mxa="_zs_gallerya[:a" class="_zs_galleryj"><div mxs="_zs_gallerya[:_" class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">下拉框带名称</div></div><div class="w200" mx-view="mx-dropdown/index?name=%E6%95%B0%E5%AD%97&list='+r(a,[1,2,3])+'"></div></div><div mxa="_zs_gallerya[:b" class="_zs_galleryk"><div mxs="_zs_gallerya[:a" class="_zs_galleryi">选择为空时的提示文案定制</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_gallerya[:c" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerya[:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-dropdown class="w200" \n    name="数字"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});