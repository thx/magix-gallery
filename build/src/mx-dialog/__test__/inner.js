define("mx-dialog/__test__/inner",["magix","mx-dialog/index"],(i,n,e)=>{var a=i("magix"),t=i("mx-dialog/index");e.exports=a.View.extend({tmpl:function(i,n,e,a,t,r,l,o){if(e||(e=i),!t){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(i){return"&"+s[i]+";"};t=function(i){return""+(null==i?"":i)},function(i){return t(i).replace(c,d)}}if(!r){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(i){return u[i]},f=/[!')(*]/g;r=function(i){return encodeURIComponent(t(i)).replace(f,g)}}if(!o){var p=/[\\'"]/g;o=function(i){return t(i).replace(p,"\\$&")}}var v="";return v+='<div mxs="_zs_galleryaW:_" class="dialog-header"><span class="fontsize-16">浮层</span></div><div mxs="_zs_galleryaW:a" class="dialog-body">属性配置在浮层内部</div><div mxs="_zs_galleryaW:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+n+'cancel()">取消</a></div>'},mixins:[t],init:function(i){this.viewOptions=i},render:function(){this.updater.digest()},"cancel<click>":function(i){i.preventDefault();var n=this.viewOptions;n.dialog&&n.dialog.close()}},{dialogOptions:{top:0,width:800}})});