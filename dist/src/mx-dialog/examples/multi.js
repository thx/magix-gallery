define("mx-dialog/examples/multi",["magix","mx-dialog/index"],(i,a,e)=>{var l=i("magix"),n=i("mx-dialog/index");e.exports=l.View.extend({tmpl:function(i,a,e,l,n,t,s,r){if(e||(e=i),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(i){return"&"+c[i]+";"};n=function(i){return""+(null==i?"":i)},l=function(i){return n(i).replace(o,d)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(i){return m[i]},g=/[!')(*]/g;t=function(i){return encodeURIComponent(n(i)).replace(g,u)}}if(!r){var v=/[\\'"]/g;r=function(i){return n(i).replace(v,"\\$&")}}var h="",x=i.height,f=i.number;return h+='<div mxs="_zs_gallerya8:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div class="dialog-body" style="height:'+l(x)+'px;"><div mxa="_zs_gallerya8:_" class="mb20">浮层'+l(f)+'</div><div mxs="_zs_gallerya8:a" class="mb20"><a href="javascript:;" mx-click="'+a+'modal()" class="btn btn-brand">再开一个</a></div><div mxs="_zs_gallerya8:b"><a href="javascript:;" mx-click="'+a+'closeAll()" class="btn btn-brand">关闭所有展开浮层</a></div></div><div mxs="_zs_gallerya8:c" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+a+'cancel()">取消</a></div>'},mixins:[n],init:function(i){this.viewOptions=i},render:function(){var i=+this.viewOptions.number;this.updater.digest({number:i,width:800-100*i,height:140+40*i})},"cancel<click>":function(i){i.preventDefault();var a=this.viewOptions;a.dialog&&a.dialog.close()},"modal<click>":function(i){var a=this.updater.get(),e=a.width,l=a.height,n=a.number;this.mxDialog("mx-dialog/examples/multi",{number:n+1},{width:e-100,height:l+170,modal:!0})},"closeAll<click>":function(i){this.mxCloseAllDialogs()}})});