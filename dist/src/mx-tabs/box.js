define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(r,l,a)=>{r("mx-popover/index");var e=r("magix"),o=r("mx-tabs/base");e.applyStyle("_zs_galleryaD",'[mx-view*="mx-tabs/box"]{display:inline-block}._zs_gallerykq{position:relative;border-bottom:1px solid var(--color-border)}._zs_gallerykq ._zs_gallerykr{position:relative;float:left;padding:10px 24px;font-size:16px;line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_gallerykq ._zs_gallerykr:hover{color:#333}._zs_gallerykq ._zs_gallerykr._zs_galleryks{color:var(--color-brand)}._zs_gallerykq ._zs_gallerykr ._zs_gallerykt{margin-left:-24px}._zs_gallerykq ._zs_galleryku{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_gallerykv{position:relative;display:inline-block;height:var(--input-height);vertical-align:middle}._zs_gallerykv ._zs_gallerykw{position:relative;top:1px;font-size:14px}._zs_gallerykv ._zs_gallerykx{position:relative;padding:0 12px;text-align:center;cursor:pointer;transition:all var(--duration)}._zs_gallerykv ._zs_gallerykx:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_gallerykv ._zs_gallerykx:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_gallerykv ._zs_gallerykx ._zs_gallerykt{margin-left:-14px}._zs_gallerykv._zs_galleryky ._zs_gallerykx{color:#999;cursor:not-allowed}._zs_gallerykv._zs_galleryky ._zs_gallerykx:hover{color:#999}._zs_gallerykv._zs_galleryky ._zs_gallerykx._zs_galleryks{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_gallerykz ._zs_gallerykx{position:relative;z-index:2;display:inline-block;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_gallerykz ._zs_gallerykx:hover{color:#333}._zs_gallerykz ._zs_gallerykx._zs_galleryks{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_gallerykz:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerykz:after,._zs_gallerykA{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_gallerykA ._zs_gallerykx{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_gallerykA ._zs_gallerykx:hover{color:#333}._zs_gallerykA ._zs_gallerykx._zs_galleryks{color:var(--color-brand);background-color:var(--color-brand-opacity)}');var t={solid:"_zs_gallerykA",hollow:"_zs_gallerykz"};a.exports=o.extend({tmpl:function(r,l,a,e,o,t,s,i){if(a||(a=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},e=function(r){return o(r).replace(n,g)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(r){return d[r]},y=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(y,c)}}if(!i){var p=/[\\'"]/g;i=function(r){return o(r).replace(p,"\\$&")}}s||(s=function(r,l,a,e){for(e=r[z];--e;)if(r[a=z+e]===l)return a;return r[a=z+r[z]++]=l,a});var z="",k="",v=r.boxClass,x=r.disabled,b=r.list,u=r.selected,h=r.spm;k+='<div class="_zs_gallerykv '+e(v)+" "+e(x?"_zs_galleryky":"")+'">';for(var f=0,m=b.length;f<m;f++){var w=b[f];k+='<a href="javascript:;" ',x||(k+=' mx-click="'+l+"__ac({item:'"+s(a,w)+"'})\" "),k+=' class="_zs_gallerykx '+e(w.value==u?"_zs_galleryks":"")+'" ',h&&(k+=' data-spm-click="'+e(h)+e(f)+'" '),k+=">"+e(w.text)+" ",w.tag&&(k+='<span class="mx-tag _zs_gallerykt" style="background-color: '+e(w.color)+';"><span class="mx-tag-arrow" style="border-color: '+e(w.color)+" transparent transparent "+e(w.color)+';"></span><span mxa="_zs_galleryeX:_" class="mx-tag-name">'+o(w.tag)+"</span></span>"),k+=" ",w.tips&&(k+='<i class="mc-iconfont color-9 _zs_gallerykw" mx-view="mx-popover/index?width=280&content='+t(w.tips)+'">&#xe7aa;</i>'),k+="</a>"}return k+="</div>"},render:function(){var r=this.updater.get("mode");this.updater.digest({boxClass:t[r]})}})});