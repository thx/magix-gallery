define("mx-wanxiang/__test__/index",["magix","$","mx-title/second","./1","__test__/api"],(e,n,t)=>{e("mx-title/second"),e("./1"),e("__test__/api");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,n,t,i,r,o,s,a){if(t||(t=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(d,x)}}if(!o){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return l[e]},u=/[!')(*]/g;o=function(e){return encodeURIComponent(r(e)).replace(u,m)}}if(!a){var _=/[\\'"]/g;a=function(e){return r(e).replace(_,"\\$&")}}s||(s=function(e,n,t,i){for(i=e[p];--i;)if(e[t=p+i]===n)return t;return e[t=p+e[p]++]=n,t});var p="",f="";return f+='<div mxs="_zs_galleryex:_" mx-view="mx-title/second?content=%E5%BC%95%E5%85%A5%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE%E5%B7%A5%E4%BD%9C"></div><div mxs="_zs_galleryex:a" class="mb40">详情参见<a href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank" rel="noopener noreferrer" class="color-brand">https://yuque.antfin-inc.com/wanxiang/technology/description</a></div><div mxs="_zs_galleryex:b" mx-view="mx-title/second?content=%E5%BC%95%E5%85%A5%E6%9C%8D%E5%8A%A1%E7%AA%97"></div><div mxs="_zs_galleryex:c" mx-view="mx-wanxiang/__test__/1" class="mb40"></div><div mxs="_zs_galleryex:d" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(t,e.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"biz-code",desc:"必填，引入配置中申请到的bizCode，项目唯一标识",type:"string",def:""},{key:"default-source-id",desc:"必填，页面问答的默认sourceId，若当前页面路径不在source-map，则默认为该sourceId",type:"string",def:"text"},{key:"source-map",desc:"如果不同路径的对应不同的问答，配置路径到sourceId的映射关系，例如：<pre>\n{\n    '/wanxiang/demo1': 432,\n    '/wanxiang/demo2': 496\n}\n</pre>\n<br/>\n<span class=\"color-red\">需要注意不同sourceId的页面默认配置项必须相同，不然会产生位置差错</span>",type:"object",def:"{}"},{key:"bottom",desc:"万象模块相对于页面右下角定位，该字段表示距离右边底部的距离",type:"number",def:"0"}]})}})});