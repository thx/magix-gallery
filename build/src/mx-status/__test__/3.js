define("mx-status/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,i,s,a,c){if(n||(n=e),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,r=function(e){return"&"+o[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(_,r)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(v,x)}}if(!c){var m=/[\\'"]/g;c=function(e){return i(e).replace(m,"\\$&")}}a||(a=function(e,t,n,l){for(l=e[u];--l;)if(e[n=u+l]===t)return n;return e[n=u+e[u]++]=t,n});var u="",f="",g=e.viewId,p=e.text1;return f+='<div mxa="_zs_gallerydQ:_" class="_zs_galleryh"><div mxa="_zs_gallerydQ:a" class="_zs_galleryk"><div mxs="_zs_gallerydQ:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>额外的提示信息 + 可操作项</div><div>当有额外提示信息是，优先显示额外提示信息</div></div></div><div mx-view="mx-status/index?info='+a(n,{value:-99,text:"故障",icon:'<i class="mc-iconfont">&#xe67f;</i>',color:"#a40100"})+"&opers="+a(n,[{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"},{value:9,text:"结束投放",icon:'<i class="mc-iconfont">&#xe682;</i>',color:"#999999"}])+'&selected=9"></div></div><div mxa="_zs_gallerydQ:b" class="_zs_galleryl"><div mxs="_zs_gallerydQ:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerydQ:c" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_gallerydQ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+"_text_1\">\n&lt;mx-status \n    info=\"&#123;&#123;@&#123;\n        value: -99,\n        text: '故障',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n        color: '#a40100'\n    &#125;&#125;&#125;\"\n    opers=\"&#123;&#123;@[&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        color: '#51a300'\n    &#125;, &#123;\n        value: 9,\n        text: '结束投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe682;&lt;/i&gt;',\n        color: '#999999'\n    &#125;]&#125;&#125;\"\n    selected=\"9\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({})}})});