define("mx-preview/examples/6",["magix","$","../index"],(X,r,t)=>{X("../index");var i=X("magix");X("$");i.applyStyle("_zs_galleryap","._zs_galleryjw{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryjx{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),t.exports=i.View.extend({tmpl:function(X,r,t,i,e,a,n,o){if(t||(t=X),!e){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(X){return"&"+p[X]+";"};e=function(X){return""+(null==X?"":X)},i=function(X){return e(X).replace(l,c)}}if(!a){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(X){return g[X]},s=/[!')(*]/g;a=function(X){return encodeURIComponent(e(X)).replace(s,d)}}if(!o){var m=/[\\'"]/g;o=function(X){return e(X).replace(m,"\\$&")}}var x="",f=X.viewId,u=X.list;x+='<div class="_zs_galleryjx" id="'+i(f)+'_scroll_wrapper">';for(var v=0,h=u.length;v<h;v++){x+='<div class="_zs_galleryjw" mx-view="mx-preview/index?type=image&url='+a(u[v])+'&maxWidth=150&maxHeight=150"></div>'}return x+="</div>"},render:function(){this.updater.digest({list:["https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg","https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg","https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png","https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png","https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png","https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png","https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png","https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png","https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg"]})}})});