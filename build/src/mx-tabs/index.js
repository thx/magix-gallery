define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(r,l,e)=>{r("mx-popover/index");var a=r("magix"),o=r("mx-tabs/base");a.applyStyle("_zs_galleryaF",'[mx-view*="mx-tabs/box"]{display:inline-block}._zs_galleryko{position:relative;border-bottom:1px solid var(--color-border)}._zs_galleryko ._zs_gallerykp{position:relative;float:left;padding:10px 24px;font-size:16px;line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_galleryko ._zs_gallerykp:hover{color:#333}._zs_galleryko ._zs_gallerykp._zs_gallerykq{color:var(--color-brand)}._zs_galleryko ._zs_gallerykp ._zs_gallerykr{margin-left:-24px}._zs_galleryko ._zs_galleryks{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_gallerykt{position:relative;display:inline-block;height:var(--input-height);vertical-align:middle}._zs_gallerykt ._zs_galleryku{position:relative;top:1px;font-size:14px}._zs_gallerykt ._zs_gallerykv{position:relative;padding:0 12px;text-align:center;cursor:pointer;transition:all var(--duration)}._zs_gallerykt ._zs_gallerykv:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_gallerykt ._zs_gallerykv:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_gallerykt ._zs_gallerykv ._zs_gallerykr{margin-left:-14px}._zs_gallerykt._zs_gallerykw ._zs_gallerykv{color:#999;cursor:not-allowed}._zs_gallerykt._zs_gallerykw ._zs_gallerykv:hover{color:#999}._zs_gallerykt._zs_gallerykw ._zs_gallerykv._zs_gallerykq{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_gallerykx ._zs_gallerykv{position:relative;z-index:2;display:inline-block;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_gallerykx ._zs_gallerykv:hover{color:#333}._zs_gallerykx ._zs_gallerykv._zs_gallerykq{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_gallerykx:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerykx:after,._zs_galleryky{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_galleryky ._zs_gallerykv{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_galleryky ._zs_gallerykv:hover{color:#333}._zs_galleryky ._zs_gallerykv._zs_gallerykq{color:var(--color-brand);background-color:var(--color-brand-opacity)}'),e.exports=o.extend({tmpl:function(r,l,e,a,o,t,s,i){if(e||(e=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},a=function(r){return o(r).replace(n,g)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(r){return c[r]},p=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(p,d)}}if(!i){var y=/[\\'"]/g;i=function(r){return o(r).replace(y,"\\$&")}}s||(s=function(r,l,e,a){for(a=r[v];--a;)if(r[e=v+a]===l)return e;return r[e=v+r[v]++]=l,e});var v="",k="",u=r.type,z=r.list,h=r.selected,b=r.viewId,x=r.spm,f=r.left,m=r.width,w=r.disabled;if("border"==u){k+='<div mxa="_zs_gallerye1:_" class="_zs_galleryko clearfix">';for(var q=0,L=z.length;q<L;q++){k+='<a class="_zs_gallerykp '+a((J=z[q]).value==h?"_zs_gallerykq":"")+'" href="javascript:;" id="'+a(b)+"_"+a(J.value)+'" mx-mouseover="'+l+"__eN({value:'"+a(i(J.value))+'\'})" mx-mouseout="'+l+'__cn()" mx-click="'+l+"__ac({item:'"+s(e,J)+"'})\" ",x&&(k+=' data-spm-click="'+a(x)+a(q)+'" '),k+=">"+a(J.text)+" ",J.tag&&(k+='<span class="mx-tag _zs_gallerykr" style="background-color: '+a(J.color)+';"><span class="mx-tag-arrow" style="border-color: '+a(J.color)+" transparent transparent "+a(J.color)+';"></span><span mxa="_zs_gallerye1:a" class="mx-tag-name">'+o(J.tag)+"</span></span>"),k+=" ",J.tips&&(k+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content='+t(J.tips)+'">&#xe7aa;</i>'),k+="</a>"}k+='<span class="_zs_galleryks" style="left: '+a(f)+"px; width: "+a(m)+'px;"></span></div>'}else{k+='<div class="_zs_gallerykt '+a(w?"_zs_gallerykw":"")+'">';for(var j=0,I=z.length;j<I;j++){var J=z[j];k+='<a href="javascript:;" ',w||(k+=' mx-click="'+l+"__ac({item:'"+s(e,J)+"'})\" "),k+=' class="_zs_gallerykv '+a(J.value==h?"_zs_gallerykq":"")+'" ',x&&(k+=' data-spm-click="'+a(x)+a(q)+'" '),k+=">"+a(J.text)+" ",J.tag&&(k+='<span mxa="_zs_gallerye1:b" class="_zs_gallerykr">'+a(J.tag)+"</span>"),k+="</a>"}k+="</div>"}return k},render:function(){this.updater.digest(),this.__eL(this.__eJ)},__eL:function(r){if("border"==this.__eK){this.__eM=r;var l=$("#"+this.id+"_"+r),e=l.offset().left-this.__a.offset().left,a=l.outerWidth();this.updater.digest({left:e,width:a})}},"__eN<mouseover>":function(r){var l=r.params.value;this.__eL(l)},"__cn<mouseout>":function(r){this.__eL(this.__eJ)}})});