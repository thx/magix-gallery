define("mx-effects/icon",["magix","$","mx-popover/index"],(e,r,l)=>{e("mx-popover/index");var a=e("magix");e("$");a.applyStyle("_zs_galleryM","._zs_galleryeJ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeK{font-size:12px;font-weight:700;transform:scale(.9)}._zs_galleryeL,._zs_galleryeK{display:inline-block}._zs_galleryeL{height:16px;padding:0 4px;border-radius:4px;color:#fff;text-align:center;line-height:16px}._zs_galleryeL._zs_galleryeM{background-color:#ccc}._zs_galleryeL._zs_galleryeN{background-color:var(--color-red)}._zs_galleryeL._zs_galleryeO{background-color:var(--color-warn)}._zs_galleryeL._zs_galleryeP{background-color:var(--color-brand)}._zs_galleryeQ{display:inline-block;height:16px;padding:0 4px;border-radius:8px;text-align:center;line-height:14px}._zs_galleryeQ._zs_galleryeM{border:1px solid #ccc;color:#999}._zs_galleryeQ._zs_galleryeN{border:1px solid var(--color-red);color:var(--color-red)}._zs_galleryeQ._zs_galleryeO{border:1px solid var(--color-warn);color:var(--color-warn)}._zs_galleryeQ._zs_galleryeP{border:1px solid var(--color-brand);color:var(--color-brand)}");var o={solid:"_zs_galleryeL",hollow:"_zs_galleryeQ",common:"_zs_galleryeM",error:"_zs_galleryeN",warn:"_zs_galleryeO",highlight:"_zs_galleryeP"};l.exports=a.View.extend({tmpl:function(e,r,l,a,o,s,n,t){if(l||(l=e),!o){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+i[e]+";"};o=function(e){return""+(null==e?"":e)},a=function(e){return o(e).replace(c,_)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return p[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(o(e)).replace(d,g)}}if(!t){var y=/[\\'"]/g;t=function(e){return o(e).replace(y,"\\$&")}}var u="",x=e.tip,z=e.classNames,h=e.styles,f=e.content;return u+=x?'<span class="'+a(z)+'" style="'+a(h)+'" mx-view="mx-popover/index?content='+s(x)+'"><span mxa="_zs_galleryb3:_" class="_zs_galleryeK">'+o(f)+"</span></span>":'<span class="'+a(z)+'" style="'+a(h)+'"><span mxa="_zs_galleryb3:a" class="_zs_galleryeK">'+o(f)+"</span></span>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var r=this.updater.altered(),l=e.color,a=[],s=e.mode||"solid",n=e.type||"common",t=[];if(o[s]&&t.push(o[s]),o[n]&&t.push(o[n]),l)switch(s){case"solid":a.push("background-color:"+l);break;case"hollow":a.push("color:"+l,"border: 1px solid "+l)}return this.updater.set({content:e.content||"icon",classNames:t.join(" "),styles:a.join(";"),tip:e.tip||""}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()}})});