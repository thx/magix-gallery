define("mx-secradio/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,t,s,i,l,_,n,a){if(s||(s=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(d,x)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(l(e)).replace(o,m)}}if(!a){var v=/[\\'"]/g;a=function(e){return l(e).replace(v,"\\$&")}}n||(n=function(e,t,s,i){for(i=e[u];--i;)if(e[s=u+i]===t)return s;return e[s=u+e[u]++]=t,s});var u="",g="",p=e.list,f=e.viewId,y=e.text1;return g+='<div mxv mxa="_zs_gallerydK:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydK:a" class="_zs_galleryj"><div mxs="_zs_gallerydK:_" class="mb10"><span class="color-9">以下示例：</span>可选范围限制最大高度200，一键收起功能吸顶</div><div mxv="list" mx-view="mx-secradio/index?maxHeight=200&list='+n(s,p)+'"></div></div><div mxa="_zs_gallerydK:b" class="_zs_galleryk"><div mxs="_zs_gallerydK:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(f)+'_text_1"><span mxa="_zs_gallerydK:c" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_gallerydK:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+'_text_1">\n&lt;mx-secradio \n    max-height="200"    \n    list="&#123;&#123;@list&#125;&#125;"/&gt;</pre></div></div>'},render:function(){var e=[1,2,3,4,5].map(function(e){return{text:"计划"+e,subs:[1,2,3,4].map(function(t){return{value:e+""+t,text:"单元"+e+"_"+t}})}});this.updater.digest({list:e})}})});