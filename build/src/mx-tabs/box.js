define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(l,e,r)=>{l("mx-popover/index");var a=l("magix"),o=l("mx-tabs/base");a.applyStyle("_zs_galleryaG",'._zs_gallerymK{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymL,[mx-view*="mx-tabs/box"]{display:inline-block}._zs_gallerymL{height:18px;padding-left:4px;padding-right:4px;line-height:18px;border-radius:4px;background-color:#4d7fff;color:#fff;font-size:12px;font-weight:700;white-space:nowrap}._zs_gallerymM{position:relative;border-bottom:1px solid #e6e6e6}._zs_gallerymM ._zs_gallerymN{position:relative;float:left;height:52px;padding:10px 24px;font-size:16px;line-height:32px;transition:color .25s ease-out;color:#666}._zs_gallerymM ._zs_gallerymN:hover{color:#333}._zs_gallerymM ._zs_gallerymN._zs_gallerymO{color:#4d7fff}._zs_gallerymM ._zs_gallerymN ._zs_gallerymL{position:absolute;top:-4px;left:100%;margin-left:-26px}._zs_gallerymM ._zs_gallerymN ._zs_gallerymL ._zs_gallerymP{display:inline-block;-webkit-transform:scale(.92);transform:scale(.92)}._zs_gallerymM ._zs_gallerymN ._zs_gallerymL ._zs_gallerymQ{position:absolute;left:4px;top:18px;width:0;height:0;border-color:#4d7fff #fff #fff #4d7fff;border-style:solid;border-width:3px}._zs_gallerymM ._zs_gallerymR{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid #4d7fff;transition:width .25s cubic-bezier(.645,.045,.355,1),left .25s cubic-bezier(.645,.045,.355,1)}._zs_gallerymS ._zs_gallerymT{position:relative;top:1px;font-size:14px}._zs_gallerymS ._zs_gallerymU{cursor:pointer;text-align:center;padding:0 12px;transition:all .25s ease-out}._zs_gallerymS ._zs_gallerymU:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}._zs_gallerymS ._zs_gallerymU:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}._zs_gallerymS ._zs_gallerymU ._zs_gallerymL{-webkit-transform:scale(.9);transform:scale(.9)}._zs_gallerymS._zs_gallerymV ._zs_gallerymU{color:#999;cursor:not-allowed}._zs_gallerymS._zs_gallerymV ._zs_gallerymU:hover{color:#999}._zs_gallerymS._zs_gallerymV ._zs_gallerymU._zs_gallerymO{color:#999;background-color:#eee;border-color:#e6e6e6}._zs_gallerymS._zs_gallerymV ._zs_gallerymU ._zs_gallerymL{background-color:#ccc}._zs_gallerymW,._zs_gallerymW ._zs_gallerymU{position:relative;display:inline-block}._zs_gallerymW ._zs_gallerymU{z-index:2;height:32px;line-height:30px;border-radius:4px;color:#666;border:1px solid transparent}._zs_gallerymW ._zs_gallerymU:hover{color:#333}._zs_gallerymW ._zs_gallerymU._zs_gallerymO{color:#333;background-color:#f6f9ff;border:1px solid #4d7fff}._zs_gallerymW:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerymW:after,._zs_gallerymX{border-radius:4px;border:1px solid #e6e6e6}._zs_gallerymX{display:inline-block;height:32px}._zs_gallerymX ._zs_gallerymU{display:inline-block;height:30px;line-height:30px;color:#999;background-color:#fff}._zs_gallerymX ._zs_gallerymU:hover{color:#333}._zs_gallerymX ._zs_gallerymU._zs_gallerymO{color:#4d7fff;background-color:#f6f9ff}');var s={solid:"_zs_gallerymX",hollow:"_zs_gallerymW"};r.exports=o.extend({tmpl:function(l,e,r,a,o,s,_,t){if(r||(r=l),!o){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,m=function(l){return"&"+i[l]+";"};o=function(l){return""+(null==l?"":l)},a=function(l){return o(l).replace(g,m)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return n[l]},y=/[!')(*]/g;s=function(l){return encodeURIComponent(o(l)).replace(y,p)}}if(!t){var z=/[\\'"]/g;t=function(l){return o(l).replace(z,"\\$&")}}_||(_=function(l,e,r,a){for(a=l[d];--a;)if(l[r=d+a]===e)return r;return l[r=d+l[d]++]=e,r});var d="",f="",c=l.boxClass,x=l.disabled,b=l.list,h=l.selected,u=l.spm;f+='<div class="_zs_gallerymS '+a(c)+" "+a(x?"_zs_gallerymV":"")+'">';for(var v=0,U=b.length;v<U;v++){var k=b[v];f+='<a href="javascript:;" ',x||(f+=' mx-click="'+e+"__aa({item:'"+_(r,k)+"'})\" "),f+=' class="_zs_gallerymU '+a(k.value==h?"_zs_gallerymO":"")+'" ',u&&(f+=' data-spm-click="'+a(u)+a(v)+'" '),f+=">"+a(k.text)+" ",k.tag&&(f+='<span mxa="_zs_galleryeb:_" class="_zs_gallerymL">'+a(k.tag)+"</span>"),f+=" ",k.tips&&(f+='<i class="mc-iconfont color-9 _zs_gallerymT" mx-view="mx-popover/index?content='+s(k.tips)+'">&#xe7aa;</i>'),f+="</a>"}return f+="</div>"},render:function(){var l=this.updater.get("mode");this.updater.digest({boxClass:s[l]})}})});