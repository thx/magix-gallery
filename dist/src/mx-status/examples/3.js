define("mx-status/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");n.exports=i.extend({tmpl:function(e,l,n,i,t,s,a,c){if(n||(n=e),!t){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+o[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(r,x)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(v,m)}}if(!c){var f=/[\\'"]/g;c=function(e){return t(e).replace(f,"\\$&")}}a||(a=function(e,l,n,i){for(i=e[_];--i;)if(e[n=_+i]===l)return n;return e[n=_+e[_]++]=l,n});var _="",u="",g=e.viewId,p=e.text1;return u+='<div mxa="_zs_galleryef:_" class="_zs_galleryg"><div mxa="_zs_galleryef:a" class="_zs_galleryj"><div mxs="_zs_galleryef:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>额外的提示信息 + 可操作项</div><div>当有额外提示信息是，优先显示额外提示信息</div></div></div><div mx-view="mx-status/index?info='+a(n,{value:-99,text:"故障",icon:'<i class="mc-iconfont">&#xe67f;</i>',color:"#a40100"})+"&opers="+a(n,[{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"},{value:9,text:"结束投放",icon:'<i class="mc-iconfont">&#xe682;</i>',color:"#999999"}])+'&selected=9"></div></div><div mxa="_zs_galleryef:b" class="_zs_galleryk"><div mxs="_zs_galleryef:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryef:c" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_galleryef:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(g)+"_text_1\">\n&lt;mx-status \n    info=\"&#123;&#123;@&#123;\n        value: -99,\n        text: '故障',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n        color: '#a40100'\n    &#125;&#125;&#125;\"\n    opers=\"&#123;&#123;@[&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        color: '#51a300'\n    &#125;, &#123;\n        value: 9,\n        text: '结束投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe682;&lt;/i&gt;',\n        color: '#999999'\n    &#125;]&#125;&#125;\"\n    selected=\"9\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({})}})});