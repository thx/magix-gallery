define("mx-dialog/alert",["magix","../mx-medusa/util"],(a,t,e)=>{var i=a("magix"),n=a("../mx-medusa/util");i.applyStyle("_zs_galleryB","._zs_gallerydD{font-size:16px;margin-bottom:20px}"),e.exports=i.View.extend({tmpl:function(a,t,e,i,n,l,r,_){if(e||(e=a),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(a){return"&"+s[a]+";"};n=function(a){return""+(null==a?"":a)},i=function(a){return n(a).replace(o,c)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(a){return d[a]},u=/[!')(*]/g;l=function(a){return encodeURIComponent(n(a)).replace(u,g)}}if(!_){var m=/[\\'"]/g;_=function(a){return n(a).replace(m,"\\$&")}}var f="",x=a.title,v=a.content,p=a.hasBtns,h=a.enterText;return f+='<div mxa="_zs_galleryaw:_" class="dialog-body"><div mxa="_zs_galleryaw:a" class="_zs_gallerydD">'+i(x)+'</div><div mxa="_zs_galleryaw:b" class="word-break">'+n(v)+"</div></div>",p&&(f+='<div mxa="_zs_galleryaw:c" class="dialog-footer"><a mxa="_zs_galleryaw:d" href="javascript:;" class="btn btn-small btn-brand min-width-60" mx-click="'+t+'__al();">'+i(h)+"</a></div>"),f},init:function(a){var t=this;t.__af=a.dialog,t.__ag=a.content,t.__ah=a.title||n["dialog.tip"],t.__ai=n["dialog.submit"],t.__aj=a.enterCallback,t.__ak=a.hasBtns},render:function(){var a=this;a.updater.digest({content:a.__ag,title:a.__ah,enterText:a.__ai,hasBtns:a.__ak})},"__al<click>":function(){this.__af.close(),this.__aj&&i.toTry(this.__aj)}})});