define("mx-slider/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");i.exports=a.extend({tmpl:function(e,l,i,a,n,s,r,t){if(i||(i=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(x,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(p,c)}}if(!t){var v=/[\\'"]/g;t=function(e){return n(e).replace(v,"\\$&")}}var g="",u=e.viewId,o=e.text1;return g+='<div mxa="_zs_galleryd`:_" class="_zs_galleryg"><div mxs="_zs_galleryd`:_" class="_zs_galleryj"><div class="pl40"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.5&vertical=true&tip=%E5%85%83&height=200"></div></div></div><div mxa="_zs_galleryd`:a" class="_zs_galleryk"><div mxs="_zs_galleryd`:a" class="_zs_galleryi">纵向滑块 + 自定义高度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_galleryd`:b" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_galleryd`:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.5"\n    vertical="true"\n    tip="元"\n    height="200"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});