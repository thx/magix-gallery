define("mx-dialog/__test__/demo",["magix"],(e,n,i)=>{var a=e("magix");i.exports=a.View.extend({tmpl:function(e,n,i,a,t,r,l,c){if(i||(i=e),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};t=function(e){return""+(null==e?"":e)},function(e){return t(e).replace(o,d)}}if(!r){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(e){return u[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(g,f)}}if(!c){var v=/[\\'"]/g;c=function(e){return t(e).replace(v,"\\$&")}}var p="";return p+='<div mxs="_zs_galleryaw:_" class="dialog-header"><span class="fontsize-16">浮层标题</span></div><div mxs="_zs_galleryaw:a" class="dialog-body">浮层内容</div><div mxs="_zs_galleryaw:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+n+'cancel()">取消</a></div>'},init:function(e){this.viewOptions=e},render:function(){this.updater.digest()},"cancel<click>":function(e){e.preventDefault();var n=this.viewOptions;n.dialog&&n.dialog.close()}})});