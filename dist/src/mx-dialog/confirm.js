define("mx-dialog/confirm",["magix","../mx-medusa/util"],(a,t,e)=>{var i=a("magix"),l=a("../mx-medusa/util");i.applyStyle("_zs_galleryD","._zs_galleryea{font-size:16px;margin-bottom:20px}"),e.exports=i.View.extend({tmpl:function(a,t,e,i,l,n,_,r){if(e||(e=a),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(a){return"&"+c[a]+";"};l=function(a){return""+(null==a?"":a)},i=function(a){return l(a).replace(s,o)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(a){return d[a]},u=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(u,m)}}if(!r){var g=/[\\'"]/g;r=function(a){return l(a).replace(g,"\\$&")}}var x="",f=a.title,v=a.content,p=a.enterText,y=a.cancelText;return x+='<div mxa="_zs_galleryaV:_" class="dialog-body"><div mxa="_zs_galleryaV:a" class="_zs_galleryea">'+i(f)+'</div><div mxa="_zs_galleryaV:b" class="word-break">'+l(v)+'</div></div><div mxa="_zs_galleryaV:c" class="dialog-footer"><a mxa="_zs_galleryaV:d" href="javascript:;" class="btn btn-small btn-brand min-width-60 mr10" mx-click="'+t+'__aC();">'+i(p)+'</a><a mxa="_zs_galleryaV:e" href="javascript:;" class="btn btn-small min-width-60" mx-click="'+t+'__P()">'+i(y)+"</a></div>"},init:function(a){var t=this;t.__aG=a.dialog,t.__aH=a.content,t.__aI=a.title||l["dialog.tip"],t.__aJ=a.enterText||l["dialog.submit"],t.__aM=a.cancelText||l["dialog.cancel"],t.__aK=a.enterCallback,t.__aN=a.cancelCallback},render:function(){var a=this;a.updater.digest({content:a.__aH,title:a.__aI,enterText:a.__aJ,cancelText:a.__aM})},"__aC<click>":function(){this.__aG.close(),this.__aK&&i.toTry(this.__aK)},"__P<click>":function(){this.__aG.close(),this.__aN&&i.toTry(this.__aN)}})});