define("mx-dialog/alert",["magix","../mx-medusa/util"],(a,t,e)=>{var n=a("magix"),i=a("../mx-medusa/util");n.applyStyle("_zs_galleryC","._zs_gallerydK{font-size:16px;margin-bottom:20px}"),e.exports=n.View.extend({tmpl:function(a,t,e,n,i,l,r,_){if(e||(e=a),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(a){return"&"+s[a]+";"};i=function(a){return""+(null==a?"":a)},n=function(a){return i(a).replace(o,c)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(a){return d[a]},g=/[!')(*]/g;l=function(a){return encodeURIComponent(i(a)).replace(g,u)}}if(!_){var m=/[\\'"]/g;_=function(a){return i(a).replace(m,"\\$&")}}var f="",x=a.title,v=a.content,p=a.hasBtns,y=a.enterText;return f+='<div mxa="_zs_galleryaN:_" class="dialog-body"><div mxa="_zs_galleryaN:a" class="_zs_gallerydK">'+n(x)+'</div><div mxa="_zs_galleryaN:b" class="word-break">'+i(v)+"</div></div>",p&&(f+='<div mxa="_zs_galleryaN:c" class="dialog-footer"><a mxa="_zs_galleryaN:d" href="javascript:;" class="btn btn-small btn-brand min-width-60" mx-click="'+t+'__az();">'+n(y)+"</a></div>"),f},init:function(a){var t=this;t.__aD=a.dialog,t.__aE=a.content,t.__aF=a.title||i["dialog.tip"],t.__aG=i["dialog.submit"],t.__aH=a.enterCallback,t.__aI=a.hasBtns},render:function(){var a=this;a.updater.digest({content:a.__aE,title:a.__aF,enterText:a.__aG,hasBtns:a.__aI})},"__az<click>":function(){this.__aD.close(),this.__aH&&n.toTry(this.__aH)}})});