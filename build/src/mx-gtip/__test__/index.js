define("mx-gtip/__test__/index",["magix","$","__test__/subs","mx-title/second","./1"],(t,e,i)=>{t("__test__/subs"),t("mx-title/second"),t("./1");var d=t("magix");t("$");i.exports=d.View.extend({tmpl:function(t,e,i,d,n,r,s,_){if(i||(i=t),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,m=function(t){return"&"+v[t]+";"};n=function(t){return""+(null==t?"":t)},d=function(t){return n(t).replace(a,m)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(t){return o[t]},c=/[!')(*]/g;r=function(t){return encodeURIComponent(n(t)).replace(c,l)}}if(!_){var u=/[\\'"]/g;_=function(t){return n(t).replace(u,"\\$&")}}s||(s=function(t,e,i,d){for(d=t[x];--d;)if(t[i=x+d]===e)return i;return t[i=x+t[x]++]=e,i});var x="",f="",g=t.viewId;return f+='<div mxa="_zs_galleryct:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:g+"_demo"},{name:"Methods",key:g+"_method"}])+'"></div><div id="'+d(g)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryct:_" class="clearfix mb20"><div mx-view="mx-gtip/__test__/1"></div></div><div id="'+d(g)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryct:a" class="pr20 mb40"><table class="table _zs_galleryq"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>gtip(msg, timeout)</td><td><div>显示通顶提示信息</div><div>msg：信息内容</div><div>timeout：延时自动关闭，不设置的时候显示关闭按钮手动关闭</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});