define("mx-table/__test__/index5",["magix","$","__test__/subs","mx-title/second","./9","./10","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./9"),e("./10"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,r,d,s){if(i||(i=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(m,o)}}if(!r){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(_(e)).replace(u,c)}}if(!s){var l=/[\\'"]/g;s=function(e){return _(e).replace(l,"\\$&")}}d||(d=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",f=e.viewId,w=e.options;return p+='<div mxv mxa="_zs_galleryeE:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(i,[{name:"使用示例",key:f+"_demo"},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeE:_" class="clearfix mb20"><div mx-view="mx-table/__test__/9"></div><div mx-view="mx-table/__test__/10"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+d(i,w)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"rwd-range",desc:"固定的列",type:"string",def:"2,-1"},{key:"rwd-limit",desc:"几列一页",type:"number",def:"4"},{key:"rwd-current",desc:"当前显示第几页",type:"number",def:"1"}]})}})});