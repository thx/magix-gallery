define("mx-dialog/confirm",["magix","../mx-medusa/util"],(a,t,e)=>{var i=a("magix"),l=a("../mx-medusa/util");i.applyStyle("_zs_galleryD","._zs_gallerydW{font-size:16px;margin-bottom:20px}"),e.exports=i.View.extend({tmpl:function(a,t,e,i,l,n,_,r){if(e||(e=a),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(a){return"&"+c[a]+";"};l=function(a){return""+(null==a?"":a)},i=function(a){return l(a).replace(s,o)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(a){return d[a]},u=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(u,m)}}if(!r){var g=/[\\'"]/g;r=function(a){return l(a).replace(g,"\\$&")}}var x="",f=a.title,v=a.content,p=a.enterText,y=a.cancelText;return x+='<div mxa="_zs_galleryaT:_" class="dialog-body"><div mxa="_zs_galleryaT:a" class="_zs_gallerydW">'+i(f)+'</div><div mxa="_zs_galleryaT:b" class="word-break">'+l(v)+'</div></div><div mxa="_zs_galleryaT:c" class="dialog-footer"><a mxa="_zs_galleryaT:d" href="javascript:;" class="btn btn-small btn-brand min-width-60 mr10" mx-click="'+t+'__aw();">'+i(p)+'</a><a mxa="_zs_galleryaT:e" href="javascript:;" class="btn btn-small min-width-60" mx-click="'+t+'__M()">'+i(y)+"</a></div>"},init:function(a){var t=this;t.__aA=a.dialog,t.__aB=a.content,t.__aC=a.title||l["dialog.tip"],t.__aD=a.enterText||l["dialog.submit"],t.__aG=a.cancelText||l["dialog.cancel"],t.__aE=a.enterCallback,t.__aH=a.cancelCallback},render:function(){var a=this;a.updater.digest({content:a.__aB,title:a.__aC,enterText:a.__aD,cancelText:a.__aG})},"__aw<click>":function(){this.__aA.close(),this.__aE&&i.toTry(this.__aE)},"__M<click>":function(){this.__aA.close(),this.__aH&&i.toTry(this.__aH)}})});