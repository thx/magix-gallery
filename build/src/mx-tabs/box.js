define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(r,l,e)=>{r("mx-popover/index");var a=r("magix"),o=r("mx-tabs/base");a.applyStyle("_zs_galleryaF",'._zs_galleryko,[mx-view*="mx-tabs/box"]{display:inline-block}._zs_galleryko{height:18px;padding-left:4px;padding-right:4px;line-height:18px;border-radius:var(--border-radius);background-color:var(--color-brand);color:#fff;font-size:12px;font-weight:700;white-space:nowrap}._zs_gallerykp{position:relative;border-bottom:1px solid var(--color-border)}._zs_gallerykp ._zs_gallerykq{position:relative;float:left;height:calc(var(--input-height) + 20px);padding:10px 24px;font-size:16px;line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_gallerykp ._zs_gallerykq:hover{color:#333}._zs_gallerykp ._zs_gallerykq._zs_gallerykr{color:var(--color-brand)}._zs_gallerykp ._zs_gallerykq ._zs_galleryko{position:absolute;top:-4px;left:100%;margin-left:-26px}._zs_gallerykp ._zs_gallerykq ._zs_galleryko ._zs_galleryks{display:inline-block;-webkit-transform:scale(.92);transform:scale(.92)}._zs_gallerykp ._zs_gallerykq ._zs_galleryko ._zs_gallerykt{position:absolute;left:4px;top:18px;width:0;height:0;border-left:3px solid var(--color-brand);border-bottom:3px solid #fff;border-right:3px solid #fff;border-top:3px solid var(--color-brand)}._zs_gallerykp ._zs_galleryku{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_gallerykv ._zs_gallerykw{position:relative;top:1px;font-size:14px}._zs_gallerykv ._zs_gallerykx{cursor:pointer;text-align:center;padding:0 12px;transition:all var(--duration)}._zs_gallerykv ._zs_gallerykx:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_gallerykv ._zs_gallerykx:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_gallerykv ._zs_gallerykx ._zs_galleryko{-webkit-transform:scale(.9);transform:scale(.9)}._zs_gallerykv._zs_galleryky ._zs_gallerykx{color:#999;cursor:not-allowed}._zs_gallerykv._zs_galleryky ._zs_gallerykx:hover{color:#999}._zs_gallerykv._zs_galleryky ._zs_gallerykx._zs_gallerykr{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_gallerykv._zs_galleryky ._zs_gallerykx ._zs_galleryko{background-color:#ccc}._zs_gallerykz,._zs_gallerykz ._zs_gallerykx{position:relative;display:inline-block}._zs_gallerykz ._zs_gallerykx{z-index:2;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_gallerykz ._zs_gallerykx:hover{color:#333}._zs_gallerykz ._zs_gallerykx._zs_gallerykr{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_gallerykz:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerykz:after,._zs_gallerykA{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_gallerykA{display:inline-block;height:var(--input-height)}._zs_gallerykA ._zs_gallerykx{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_gallerykA ._zs_gallerykx:hover{color:#333}._zs_gallerykA ._zs_gallerykx._zs_gallerykr{color:var(--color-brand);background-color:var(--color-brand-opacity)}');var s={solid:"_zs_gallerykA",hollow:"_zs_gallerykz"};e.exports=o.extend({tmpl:function(r,l,e,a,o,s,i,t){if(e||(e=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},a=function(r){return o(r).replace(g,n)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(r){return d[r]},p=/[!')(*]/g;s=function(r){return encodeURIComponent(o(r)).replace(p,c)}}if(!t){var z=/[\\'"]/g;t=function(r){return o(r).replace(z,"\\$&")}}i||(i=function(r,l,e,a){for(a=r[y];--a;)if(r[e=y+a]===l)return e;return r[e=y+r[y]++]=l,e});var y="",k="",b=r.boxClass,x=r.disabled,v=r.list,u=r.selected,h=r.spm;k+='<div class="_zs_gallerykv '+a(b)+" "+a(x?"_zs_galleryky":"")+'">';for(var f=0,m=v.length;f<m;f++){var w=v[f];k+='<a href="javascript:;" ',x||(k+=' mx-click="'+l+"__ac({item:'"+i(e,w)+"'})\" "),k+=' class="_zs_gallerykx '+a(w.value==u?"_zs_gallerykr":"")+'" ',h&&(k+=' data-spm-click="'+a(h)+a(f)+'" '),k+=">"+a(w.text)+" ",w.tag&&(k+='<span mxa="_zs_galleryeG:_" class="_zs_galleryko">'+a(w.tag)+"</span>"),k+=" ",w.tips&&(k+='<i class="mc-iconfont color-9 _zs_gallerykw" mx-view="mx-popover/index?content='+s(w.tips)+'">&#xe7aa;</i>'),k+="</a>"}return k+="</div>"},render:function(){var r=this.updater.get("mode");this.updater.digest({boxClass:s[r]})}})});