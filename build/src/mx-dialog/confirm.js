define("mx-dialog/confirm",["magix","../mx-medusa/util"],(a,t,e)=>{var i=a("magix"),l=a("../mx-medusa/util");i.applyStyle("_zs_galleryE","._zs_galleryeh{font-size:16px;margin-bottom:20px}"),e.exports=i.View.extend({tmpl:function(a,t,e,i,l,n,_,r){if(e||(e=a),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(a){return"&"+c[a]+";"};l=function(a){return""+(null==a?"":a)},i=function(a){return l(a).replace(s,o)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(a){return d[a]},x=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(x,m)}}if(!r){var u=/[\\'"]/g;r=function(a){return l(a).replace(u,"\\$&")}}var g="",f=a.title,v=a.content,y=a.enterText,p=a.cancelText;return g+='<div mxa="_zs_galleryaP:_" class="dialog-body"><div mxa="_zs_galleryaP:a" class="_zs_galleryeh">'+i(f)+'</div><div mxa="_zs_galleryaP:b" class="word-break">'+l(v)+'</div></div><div mxa="_zs_galleryaP:c" class="dialog-footer"><a mxa="_zs_galleryaP:d" href="javascript:;" class="btn btn-small btn-brand min-width-60 mr16" mx-click="'+t+'__at();">'+i(y)+'</a><a mxa="_zs_galleryaP:e" href="javascript:;" class="btn btn-small min-width-60" mx-click="'+t+'__L()">'+i(p)+"</a></div>"},init:function(a){var t=this;t.__ax=a.dialog,t.__ay=a.content,t.__az=a.title||l["dialog.tip"],t.__aA=a.enterText||l["dialog.submit"],t.__aD=a.cancelText||l["dialog.cancel"],t.__aB=a.enterCallback,t.__aE=a.cancelCallback},render:function(){var a=this;a.updater.digest({content:a.__ay,title:a.__az,enterText:a.__aA,cancelText:a.__aD})},"__at<click>":function(){this.__ax.close(),this.__aB&&i.toTry(this.__aB)},"__L<click>":function(){this.__ax.close(),this.__aE&&i.toTry(this.__aE)}})});