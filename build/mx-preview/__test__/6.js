<<<<<<< HEAD
define("mx-preview/__test__/6",["magix","$","../index"],(t,r,e)=>{t("../index");var i=t("magix");t("$");i.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),e.exports=i.View.extend({tmpl:function(t,r,e,i,n,a,X,_){if(e||(e=t),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(t){return"&"+l[t]+";"};n=function(t){return""+(null==t?"":t)},i=function(t){return n(t).replace(c,o)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(t){return p[t]},d=/[!')(*]/g;a=function(t){return encodeURIComponent(n(t)).replace(d,s)}}if(!_){var m=/[\\'"]/g;_=function(t){return n(t).replace(m,"\\$&")}}var g,v,x,u="",f=t.viewId,h=t.list;try{u+='<div class="_zs_gallery_mx-preview___test___index_-scroll" id="',x=1,v="=viewId",u+=(g="<%=viewId%>",i(f)+'_scroll_wrapper">'),x=2,v="each list as item",g="<%for (var $art_incltybcp$art_i = 0, $art_cqdfulouoqr$art_c = list.length; $art_incltybcp$art_i < $art_cqdfulouoqr$art_c; $art_incltybcp$art_i++) {    var item = list[$art_incltybcp$art_i]%>";for(var w=0,y=h.length;w<y;w++){var b=h[w];u+='<div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=image&url=',x=5,v="=item",u+=(g="<%!$eu(item)%>",a(b)+'&maxWidth=150&maxHeight=150"></div>'),x=8,v="/each",g="<%}%>"}u+="</div>"}catch(t){var $="render view error:"+(t.message||t);throw v&&($+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+x),$+="\r\n\t"+(v?"translate to:":"expr:"),$+=g+"\r\n\tat file:mx-preview/__test__/6.html"}return u},render:function(){this.updater.digest({list:["https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg","https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg","https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png","https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png","https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png","https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png","https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png","https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png","https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg"]})}})});
=======
define("mx-preview/__test__/6",["magix","$","../index"],(t,e,r)=>{t("../index");var i=t("magix");t("$");i.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n"),r.exports=i.View.extend({tmpl:function(t,e,r,i,a,n,X,_){if(r||(r=t),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,s=function(t){return"&"+l[t]+";"};a=function(t){return""+(null==t?"":t)},i=function(t){return a(t).replace(o,s)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(t){return c[t]},p=/[!')(*]/g;n=function(t){return encodeURIComponent(a(t)).replace(p,d)}}if(!_){var m=/[\\'"]/g;_=function(t){return a(t).replace(m,"\\$&")}}var g,x,v,f="",u=t.viewId,h=t.list;try{f+='<div class="_zs_gallery_mx-preview___test___index_-scroll" id="',v=1,x="=viewId",f+=(g="<%=viewId%>",i(u)+'_scroll_wrapper">'),v=2,x="each list as item",g="<%for (var $art_ilkdwxue$art_i = 0, $art_cffthi$art_c = list.length; $art_ilkdwxue$art_i < $art_cffthi$art_c; $art_ilkdwxue$art_i++) {    var item = list[$art_ilkdwxue$art_i]%>";for(var w=0,y=h.length;w<y;w++){var $=h[w];f+='<div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?type=image&url=',v=5,x="=item",f+=(g="<%!$eu(item)%>",n($)+'&maxWidth=150&maxHeight=150"></div>'),v=8,x="/each",g="<%}%>"}f+="</div>"}catch(t){var b="render view error:"+(t.message||t);throw x&&(b+="\r\n\tsrc art:{{"+x+"}}\r\n\tat line:"+v),b+="\r\n\t"+(x?"translate to:":"expr:"),b+=g+"\r\n\tat file:mx-preview/__test__/6.html"}return f},render:function(){this.updater.digest({list:["https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg","https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg","https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png","https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png","https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png","https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png","https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png","https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png","https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg"]})}})});
>>>>>>> f4da9c6137ebb53744d694c722dda9b9dcb28ad8
