define("mx-dropdown/examples/13",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,a)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,n,t,i,s){if(a||(a=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(m,o)}}if(!t){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return p[e]},v=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(v,d)}}if(!s){var _=/[\\'"]/g;s=function(e){return n(e).replace(_,"\\$&")}}i||(i=function(e,l,a,r){for(r=e[c];--r;)if(e[a=c+r]===l)return a;return e[a=c+e[c]++]=l,a});var c="",u="",g=e.viewId,y=e.text1;return u+='<div mxa="_zs_gallerya`:_" class="_zs_galleryg"><div mxa="_zs_gallerya`:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?triggerType=hover&list='+i(a,[{value:1,text:"hover展开1"},{value:2,text:"hover展开2"}])+'"></div></div><div mxa="_zs_gallerya`:b" class="_zs_galleryk"><div mxs="_zs_gallerya`:_" class="_zs_galleryi">hover展开下拉选项</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(g)+'_text_1"><span mxa="_zs_gallerya`:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerya`:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200" \n    trigger-type="hover"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'hover展开1\'\n    &#125;,&#123;\n        value: 2,\n        text: \'hover展开2\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});