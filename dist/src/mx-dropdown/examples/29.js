define("mx-dropdown/examples/29",["magix","examples/example","$","../bd","mx-copy/index","examples/hl"],(e,l,a)=>{e("../bd"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,t,s,r,i){if(a||(a=e),!t){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+u[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(x,d)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(v,o)}}if(!i){var c=/[\\'"]/g;i=function(e){return t(e).replace(c,"\\$&")}}r||(r=function(e,l,a,n){for(n=e[m];--n;)if(e[a=m+n]===l)return a;return e[a=m+e[m]++]=l,a});var m="",_="",g=e.viewId,b=e.text1;return _+='<div mxa="_zs_galleryba:_" class="_zs_galleryg"><div mxa="_zs_galleryba:a" class="_zs_galleryj"><div mxs="_zs_galleryba:_" class="mb20"><span class="color-9">以下示例：</span>多选部分选项禁用</div><div class="w200" mx-view="mx-dropdown/bd?multiple=true&searchbox=true&parents='+r(a,[{value:1,text:"第一组"},{value:2,text:"第二组"}])+"&list="+r(a,[{value:1,text:"test",disabled:!0,pValue:1},{value:2,text:"TestABC",pValue:1},{value:3,text:"Another",disabled:!0,pValue:2},{value:4,text:"选项1",pValue:1},{value:5,text:"选项2",pValue:2}])+'"></div></div><div mxa="_zs_galleryba:b" class="_zs_galleryk"><div mxs="_zs_galleryba:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryba:c" class="_zs_galleryn">'+t(b)+'</span><i mxs="_zs_galleryba:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(g)+"_text_1\">\n&lt;mx-dropdown.bd class=\"w200\" \n    multiple=\"true\"\n    searchbox=\"true\"\n    parents=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'第一组'\n    &#125;,&#123;\n        value:2,\n        text:'第二组'\n    &#125;]&#125;&#125;\"\n    list=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'test',\n        disabled: true,\n        pValue: 1\n    &#125;,&#123;\n        value:2,\n        text:'TestABC',\n        pValue: 1\n    &#125;,&#123;\n        value:3,\n        text:'Another',\n        disabled: true,\n        pValue: 2\n    &#125;,&#123;\n        value:4,\n        text:'选项1',\n        pValue: 1\n    &#125;,&#123;\n        value:5,\n        text:'选项2',\n        pValue: 2\n    &#125;]&#125;&#125;\"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>"},render:function(){this.updater.digest()}})});