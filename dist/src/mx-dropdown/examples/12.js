define("mx-dropdown/examples/12",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,n,i,s,t){if(a||(a=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,v=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(d,v)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},_=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(_,c)}}if(!t){var m=/[\\'"]/g;t=function(e){return n(e).replace(m,"\\$&")}}s||(s=function(e,l,a,r){for(r=e[p];--r;)if(e[a=p+r]===l)return a;return e[a=p+e[p]++]=l,a});var p="",g="",u=e.viewId,y=e.text1;return g+='<div mxa="_zs_gallerya[:_" class="_zs_galleryg"><div mxa="_zs_gallerya[:a" class="_zs_galleryj"><div mxs="_zs_gallerya[:_" class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">hover展开下拉选项</div></div><div class="w200" mx-view="mx-dropdown/index?triggerType=hover&list='+s(a,[{value:1,text:"hover展开1"},{value:2,text:"hover展开2"}])+'"></div></div><div mxa="_zs_gallerya[:b" class="_zs_galleryk"><div mxs="_zs_gallerya[:a" class="_zs_galleryi">hover展开下拉选项</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_gallerya[:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerya[:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(u)+'_text_1">\n&lt;mx-dropdown class="w200" \n    trigger-type="hover"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'hover展开1\'\n    &#125;,&#123;\n        value: 2,\n        text: \'hover展开2\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});