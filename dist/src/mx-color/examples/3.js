define("mx-color/examples/3",["magix","examples/example","$","../picker","mx-copy/index","examples/hl"],(e,l,a)=>{e("../picker"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");a.exports=r.extend({tmpl:function(e,l,a,r,c,n,s,o){if(a||(a=e),!c){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};c=function(e){return""+(null==e?"":e)},r=function(e){return c(e).replace(t,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},d=/[!')(*]/g;n=function(e){return encodeURIComponent(c(e)).replace(d,_)}}if(!o){var g=/[\\'"]/g;o=function(e){return c(e).replace(g,"\\$&")}}var p="",v=e.color,u=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryaN:_" class="_zs_galleryg"><div mxa="_zs_galleryaN:a" class="_zs_galleryj"><div mxa="_zs_galleryaN:b" class="mb20"><span mxa="_zs_galleryaN:c" class="color-9">当前选中颜色：'+r(v)+'</span></div><div mx-change="'+l+'changeColor()" mx-view="mx-color/picker?dot=true&color='+n(v)+'"></div></div><div mxa="_zs_galleryaN:d" class="_zs_galleryk"><div mxs="_zs_galleryaN:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_galleryaN:e" class="_zs_galleryn">'+c(y)+'</span><i mxs="_zs_galleryaN:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(u)+'_text_1">\n&lt;mx-color.picker \n    dot="true"\n    color="&#123;&#123;=color&#125;&#125;"\n    mx-change="changeColor()"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({color:"#9a3c3c"})},"changeColor<change>":function(e){this.updater.digest({color:e.color})}})});