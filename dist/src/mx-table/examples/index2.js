define("mx-table/examples/index2",["magix","$","examples/subs","mx-title/second","./cal","./6","./7"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./cal"),e("./6"),e("./7");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,a,m,d,l){if(n||(n=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(s,x)}}if(!m){var E={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return E[e]},c=/[!')(*]/g;m=function(e){return encodeURIComponent(a(e)).replace(c,v)}}if(!l){var o=/[\\'"]/g;l=function(e){return a(e).replace(o,"\\$&")}}d||(d=function(e,i,n,t){for(t=e[u];--t;)if(e[n=u+t]===i)return n;return e[n=u+e[u]++]=i,n});var u="",p="",f=e.viewId;return p+='<div mxa="_zs_galleryeL:_" class="pr pr120"><div mx-view="examples/subs?list='+d(n,[{name:"表头实际位置计算",key:f+"_cal"},{name:"使用示例",key:f+"_demo",subs:[{name:"左右分列+子表格",key:f+"_demo6"},{name:"普通table",key:f+"_demo7"}]}])+'"></div><div id="'+t(f)+'_cal" mx-view="mx-title/second?content=%E8%A1%A8%E5%A4%B4%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%E8%AE%A1%E7%AE%97&tip=%E8%8E%B7%E5%8F%96%E5%8D%95%E5%85%83%E6%A0%BC%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%7Bx%2Cy%7D"></div><div mxs="_zs_galleryeL:_" mx-view="mx-table/examples/cal" class="pr20 mb40"></div><div id="'+t(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeL:a" class="clearfix mb20"><div mx-view="mx-table/examples/6" id="'+t(f)+'_demo6"></div><div mx-view="mx-table/examples/7" id="'+t(f)+'_demo7"></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});