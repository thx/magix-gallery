define("mx-preview/__test__/6",["magix","$","../index"],(X,t,i)=>{X("../index");var r=X("magix");X("$");r.applyStyle("_zs_galleryap","._zs_galleryiF{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiG{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),i.exports=r.View.extend({tmpl:function(X,t,i,r,a,e,n,o){if(i||(i=X),!a){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(X){return"&"+p[X]+";"};a=function(X){return""+(null==X?"":X)},r=function(X){return a(X).replace(l,c)}}if(!e){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(X){return d[X]},s=/[!')(*]/g;e=function(X){return encodeURIComponent(a(X)).replace(s,g)}}if(!o){var m=/[\\'"]/g;o=function(X){return a(X).replace(m,"\\$&")}}var f="",u=X.viewId,x=X.list;f+='<div class="_zs_galleryiG" id="'+r(u)+'_scroll_wrapper">';for(var v=0,h=x.length;v<h;v++){f+='<div class="_zs_galleryiF" mx-view="mx-preview/index?format=2&url='+e(x[v])+'&maxWidth=150&maxHeight=150"></div>'}return f+="</div>"},render:function(){this.updater.digest({list:["https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg","https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg","https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png","https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png","https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png","https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png","https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png","https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png","https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg"]})}})});