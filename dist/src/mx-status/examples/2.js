define("mx-status/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");i.exports=a.extend({tmpl:function(e,l,i,a,n,s,t,r){if(i||(i=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(c,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(_,m)}}if(!r){var v=/[\\'"]/g;r=function(e){return n(e).replace(v,"\\$&")}}t||(t=function(e,l,i,a){for(a=e[p];--a;)if(e[i=p+a]===l)return i;return e[i=p+e[p]++]=l,i});var p="",u="",g=e.viewId,f=e.text1;return u+='<div mxa="_zs_galleryed:_" class="_zs_galleryg"><div mxa="_zs_galleryed:a" class="_zs_galleryj"><div mxs="_zs_galleryed:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯提示信息，无操作项</div></div></div><div mx-view="mx-status/index?info='+t(i,{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',tip:"当前正在投放中<br/>换一行",color:"#51a300"})+'"></div></div><div mxa="_zs_galleryed:b" class="_zs_galleryk"><div mxs="_zs_galleryed:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryed:c" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_galleryed:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+"_text_1\">\n&lt;mx-status \n    info=\"&#123;&#123;@&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        tip: '当前正在投放中'\n        color: '#51a300'\n    &#125;&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({})}})});