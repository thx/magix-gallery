define("mx-im/examples/wangwang",["magix","examples/example","$","examples/subs","mx-title/second","mx-copy/index","examples/hl","examples/api"],(e,s,a)=>{e("examples/subs"),e("mx-title/second"),e("mx-copy/index"),e("examples/hl"),e("examples/api");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,s,a,n,i,l,t,c){if(a||(a=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(m,o)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(i(e)).replace(x,p)}}if(!c){var g=/[\\'"]/g;c=function(e){return i(e).replace(g,"\\$&")}}t||(t=function(e,s,a,n){for(n=e[w];--n;)if(e[a=w+n]===s)return a;return e[a=w+e[w]++]=s,a});var w="",v="",_=e.viewId,u=e.text1,b=e.options;return v+='<div mxv mxa="_zs_galleryc#:_" class="pr pr120"><div mx-view="examples/subs?list='+t(a,[{name:"使用示例",key:_+"_demo"},{name:"API",key:_+"_api"}])+'"></div><div id="'+n(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc#:a" class="mb40"><div mxa="_zs_galleryc#:b" class="_zs_galleryg"><div mxs="_zs_galleryc#:_" class="_zs_galleryj"><div class="mb10"><span class="inline-block w120">默认（抖动图标）：</span><a class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">静态图：</span><a icon="static" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">抖动图标：</span><a icon="small" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">和我联系图标：</span><a icon="large" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span></a></div><div class="mb10"><span class="inline-block w120">无图标+文案：</span><a icon="none" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span>联系我</a></div><div class="mb10"><span class="inline-block w120">抖动+文案：</span><a icon="small" class="mx-ww" href="https://amos.alicdn.com/getcid.aw?v=3&uid=虞佳&site=cntaobao&groupid=0&s=1&charset=UTF-8" target="_blank" rel="noopener noreferrer"><span class="mx-ww-img"></span>联系我</a></div></div><div mxa="_zs_galleryc#:c" class="_zs_galleryk"><div mxs="_zs_galleryc#:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(_)+'_text_1"><span mxa="_zs_galleryc#:d" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryc#:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(_)+'_text_1">\n&lt;!-- 默认（抖动图标）：--&gt;\n&lt;mx-im.ww uid="虞佳"/&gt;\n\n&lt;!-- 静态图：--&gt;\n&lt;mx-im.ww icon="static" uid="虞佳"/&gt;\n\n&lt;!-- 抖动图标：--&gt;\n&lt;mx-im.ww icon="small" uid="虞佳"/&gt;\n\n&lt;!-- 和我联系图标：--&gt;\n&lt;mx-im.ww icon="large" uid="虞佳"/&gt;\n\n&lt;!-- 无图标+文案：--&gt;\n&lt;mx-im.ww icon="none" uid="虞佳" content="联系我"/&gt;\n\n&lt;!-- 抖动+文案：--&gt;\n&lt;mx-im.ww icon="small" uid="虞佳"&gt;联系我&lt;/mx-im.ww&gt;\n                </pre></div></div></div><div id="'+n(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+t(a,b)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({options:[{key:"uid",desc:"用户名，必填",type:"string",def:""},{key:"icon",desc:"图标类型<br/>small：抖动小图标<br/>static：静态图标<br/>large：带和我联系图标<br/>none：不需要图标",type:"string",def:"small"},{key:"content",desc:"提示内容",type:"string",def:""}]})}})});