define("mx-gtip/examples/index",["magix","$","examples/subs","mx-title/second","./1"],(e,t,i)=>{e("examples/subs"),e("mx-title/second"),e("./1");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,n,r,s,a){if(i||(i=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,v=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(l,v)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(u,c)}}if(!a){var x=/[\\'"]/g;a=function(e){return n(e).replace(x,"\\$&")}}s||(s=function(e,t,i,d){for(d=e[p];--d;)if(e[i=p+d]===t)return i;return e[i=p+e[p]++]=t,i});var p="",f="",g=e.viewId;return f+='<div mxa="_zs_gallerycC:_" class="pr pr120"><div mx-view="examples/subs?list='+s(i,[{name:"使用示例",key:g+"_demo"},{name:"Methods",key:g+"_method"}])+'"></div><div id="'+d(g)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycC:_" class="clearfix mb20"><div mx-view="mx-gtip/examples/1"></div></div><div id="'+d(g)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerycC:a" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>gtip(msg, timeout)</td><td><div>显示通顶提示信息</div><div>msg：信息内容</div><div>timeout：延时自动关闭，不设置的时候显示关闭按钮手动关闭</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});