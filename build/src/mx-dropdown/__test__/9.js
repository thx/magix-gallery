define("mx-dropdown/__test__/9",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,_,s,i,a){if(l||(l=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(d,c)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return m[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(x,u)}}if(!a){var o=/[\\'"]/g;a=function(e){return _(e).replace(o,"\\$&")}}i||(i=function(e,t,l,n){for(n=e[p];--n;)if(e[l=p+n]===t)return l;return e[l=p+e[p]++]=t,l});var p="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryb_:_" class="_zs_galleryg"><div mxa="_zs_galleryb_:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?list='+i(l,[{id:1,name:"选项1"},{id:2,name:"选项2"}])+'&textKey=name&valueKey=id"></div></div><div mxa="_zs_galleryb_:b" class="_zs_galleryk"><div mxs="_zs_galleryb_:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryb_:c" class="_zs_galleryn">'+_(y)+'</span><i mxs="_zs_galleryb_:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[&#123;id:1,name:\'选项1\'&#125;,&#123;id:2,name:\'选项2\'&#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>'},render:function(){for(var e=[],t=0;t<6;t++)e.push({text:"多选"+(t+1),value:t+1});this.updater.digest({list:e,selected:"1,2,3"})},"select<change>":function(e){this.updater.digest({selected:e.values})}})});