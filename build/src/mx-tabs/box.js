define("mx-tabs/box",["magix","mx-tabs/base","mx-popover/index"],(l,e,r)=>{l("mx-popover/index");var a=l("magix"),o=l("mx-tabs/base");a.applyStyle("_zs_galleryaG",'._zs_gallerymw{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymx,[mx-view*="mx-tabs/box"]{display:inline-block}._zs_gallerymx{height:18px;padding-left:4px;padding-right:4px;line-height:18px;border-radius:4px;background-color:#4d7fff;color:#fff;font-size:12px;font-weight:700;white-space:nowrap}._zs_gallerymy{position:relative;border-bottom:1px solid #e6e6e6}._zs_gallerymy ._zs_gallerymz{position:relative;float:left;height:52px;padding:10px 24px;font-size:16px;line-height:32px;transition:color .25s ease-out;color:#666}._zs_gallerymy ._zs_gallerymz:hover{color:#333}._zs_gallerymy ._zs_gallerymz._zs_gallerymA{color:#4d7fff}._zs_gallerymy ._zs_gallerymz ._zs_gallerymx{position:absolute;top:-4px;left:100%;margin-left:-26px}._zs_gallerymy ._zs_gallerymz ._zs_gallerymx ._zs_gallerymB{display:inline-block;-webkit-transform:scale(.92);transform:scale(.92)}._zs_gallerymy ._zs_gallerymz ._zs_gallerymx ._zs_gallerymC{position:absolute;left:4px;top:18px;width:0;height:0;border-color:#4d7fff #fff #fff #4d7fff;border-style:solid;border-width:3px}._zs_gallerymy ._zs_gallerymD{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid #4d7fff;transition:width .25s cubic-bezier(.645,.045,.355,1),left .25s cubic-bezier(.645,.045,.355,1)}._zs_gallerymE ._zs_gallerymF{position:relative;top:1px;font-size:14px}._zs_gallerymE ._zs_gallerymG{cursor:pointer;text-align:center;padding:0 12px;transition:all .25s ease-out}._zs_gallerymE ._zs_gallerymG:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}._zs_gallerymE ._zs_gallerymG:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}._zs_gallerymE ._zs_gallerymG ._zs_gallerymx{-webkit-transform:scale(.9);transform:scale(.9)}._zs_gallerymE._zs_gallerymH ._zs_gallerymG{color:#999;cursor:not-allowed}._zs_gallerymE._zs_gallerymH ._zs_gallerymG:hover{color:#999}._zs_gallerymE._zs_gallerymH ._zs_gallerymG._zs_gallerymA{color:#999;background-color:#eee;border-color:#e6e6e6}._zs_gallerymE._zs_gallerymH ._zs_gallerymG ._zs_gallerymx{background-color:#ccc}._zs_gallerymI,._zs_gallerymI ._zs_gallerymG{position:relative;display:inline-block}._zs_gallerymI ._zs_gallerymG{z-index:2;height:32px;line-height:30px;border-radius:4px;color:#666;border:1px solid transparent}._zs_gallerymI ._zs_gallerymG:hover{color:#333}._zs_gallerymI ._zs_gallerymG._zs_gallerymA{color:#333;background-color:#f6f9ff;border:1px solid #4d7fff}._zs_gallerymI:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerymI:after,._zs_gallerymJ{border-radius:4px;border:1px solid #e6e6e6}._zs_gallerymJ{display:inline-block;height:32px}._zs_gallerymJ ._zs_gallerymG{display:inline-block;height:30px;line-height:30px;color:#999;background-color:#fff}._zs_gallerymJ ._zs_gallerymG:hover{color:#333}._zs_gallerymJ ._zs_gallerymG._zs_gallerymA{color:#4d7fff;background-color:#f6f9ff}');var s={solid:"_zs_gallerymJ",hollow:"_zs_gallerymI"};r.exports=o.extend({tmpl:function(l,e,r,a,o,s,_,t){if(r||(r=l),!o){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,m=function(l){return"&"+i[l]+";"};o=function(l){return""+(null==l?"":l)},a=function(l){return o(l).replace(g,m)}}if(!s){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(l){return n[l]},z=/[!')(*]/g;s=function(l){return encodeURIComponent(o(l)).replace(z,y)}}if(!t){var p=/[\\'"]/g;t=function(l){return o(l).replace(p,"\\$&")}}_||(_=function(l,e,r,a){for(a=l[d];--a;)if(l[r=d+a]===e)return r;return l[r=d+l[d]++]=e,r});var d="",f="",c=l.boxClass,x=l.disabled,b=l.list,h=l.selected,u=l.spm;f+='<div class="_zs_gallerymE '+a(c)+" "+a(x?"_zs_gallerymH":"")+'">';for(var v=0,G=b.length;v<G;v++){var w=b[v];f+='<a href="javascript:;" ',x||(f+=' mx-click="'+e+"__ab({item:'"+_(r,w)+"'})\" "),f+=' class="_zs_gallerymG '+a(w.value==h?"_zs_gallerymA":"")+'" ',u&&(f+=' data-spm-click="'+a(u)+a(v)+'" '),f+=">"+a(w.text)+" ",w.tag&&(f+='<span mxa="_zs_galleryeF:_" class="_zs_gallerymx">'+a(w.tag)+"</span>"),f+=" ",w.tips&&(f+='<i class="mc-iconfont color-9 _zs_gallerymF" mx-view="mx-popover/index?content='+s(w.tips)+'">&#xe7aa;</i>'),f+="</a>"}return f+="</div>"},render:function(){var l=this.updater.get("mode");this.updater.digest({boxClass:s[l]})}})});