define("mx-error/index",["magix"],(a,l,r)=>{var e=a("magix");e.applyStyle("_zs_galleryQ","._zs_gallerygo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygp{width:400px;margin:auto;padding-top:80px;padding-bottom:120px;text-align:center}._zs_gallerygp ._zs_gallerygq{margin-bottom:30px;font-size:240px;color:#ccc}._zs_gallerygp ._zs_gallerygr{margin-bottom:20px;font-size:16px;color:#999}._zs_gallerygp ._zs_gallerygs,._zs_gallerygp ._zs_gallerygt{width:90px}._zs_gallerygp ._zs_gallerygs{margin-left:20px}._zs_gallerygp ._zs_gallerygu{display:block;width:400px;margin:auto}._zs_gallerygp ._zs_gallerygv{text-align:center;font-size:40px;font-family:Tahoma}"),r.exports=e.View.extend({tmpl:function(a,l,r,e,s,g,t,n){if(r||(r=a),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,p=function(a){return"&"+i[a]+";"};s=function(a){return""+(null==a?"":a)},e=function(a){return s(a).replace(_,p)}}if(!g){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(a){return c[a]},y=/[!')(*]/g;g=function(a){return encodeURIComponent(s(a)).replace(y,o)}}if(!n){var z=/[\\'"]/g;n=function(a){return s(a).replace(z,"\\$&")}}var x="",d=a.type,f=a.tip,b=a.btns;return x+='<div mxa="_zs_gallerybS:_" class="_zs_gallerygp">',"404"==d&&(x+='<div mxs="_zs_gallerybS:_"><i class="mc-iconfont _zs_gallerygq">&#xe6c7;</i></div><div mxa="_zs_gallerybS:a" class="_zs_gallerygr">'+e(f)+"</div>"),x+=" ","502"!=d&&"500"!=d||(x+='<img mxs="_zs_gallerybS:a" class="_zs_gallerygu" src="//img.alicdn.com/tfs/TB1gwinx9rqK1RjSZK9XXXyypXa-1122-678.png"/><span mxa="_zs_gallerybS:b" class="_zs_gallerygv">'+e(d)+'</span><div mxa="_zs_gallerybS:c" class="_zs_gallerygr">'+e(f)+"</div>"),x+=" ",b&&(x+='<div mxs="_zs_gallerybS:b"><a href="#!" class="btn btn-brand _zs_gallerygt">回到首页</a><a href="javascript:;" class="btn _zs_gallerygs" mx-click="'+l+'back()">返回上一页</a></div>'),x+="</div>"},init:function(a){var l=a.type||"404",r=a.tip||"";if(!r)switch(l){case"404":r="抱歉，您查看的页面不存在或无权限查看当前页面";break;case"500":r="Internal Server Error";break;case"502":r="Bad Gateway"}this.updater.set({tip:r,type:l,btns:a.btns+""!="false"})},render:function(){this.updater.digest()},"back<click>":function(a){a.preventDefault(),history.back()}})});