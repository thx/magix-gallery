define("mx-collapse/index",["magix","$"],(e,r,a)=>{var l=e("magix"),i=e("$");l.applyStyle("_zs_galleryz","._zs_gallerydh{border-radius:var(--border-radius);border:1px solid var(--color-border);overflow:hidden}._zs_gallerydh ._zs_gallerydi{border-bottom:1px solid var(--color-border)}._zs_gallerydh ._zs_gallerydi ._zs_gallerydj{cursor:pointer;position:relative;padding:10px 24px;background-color:var(--color-bg)}._zs_gallerydh ._zs_gallerydi ._zs_gallerydj ._zs_gallerydk>*{position:absolute;top:50%;left:20px;width:20px;height:20px;text-align:center;line-height:20px;margin-top:-10px;transition:all var(--duration);color:#999}._zs_gallerydh ._zs_gallerydi ._zs_gallerydj ._zs_gallerydl{margin-left:20px}._zs_gallerydh ._zs_gallerydi ._zs_gallerydm{display:none;border-top:1px solid var(--color-border);overflow:hidden;transition:height var(--duration),opacity var(--duration)}._zs_gallerydh ._zs_gallerydi ._zs_gallerydm ._zs_gallerydn{padding:10px 24px}._zs_gallerydh ._zs_gallerydi ._zs_gallerydm ._zs_gallerydl{line-height:22px}._zs_gallerydh ._zs_gallerydi:last-child{border-bottom:0}._zs_gallerydh ._zs_gallerydi._zs_gallerydo ._zs_gallerydj{opacity:.5;cursor:not-allowed}._zs_gallerydh ._zs_gallerydi._zs_gallerydp ._zs_gallerydj ._zs_gallerydk>*{-webkit-transform:rotate(90deg);transform:rotate(90deg)}"),a.exports=l.View.extend({tmpl:function(e,r,a,l,i,t,n,d){if(a||(a=e),!i){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(e){return"&"+s[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(o,_)}}if(!t){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(c,p)}}if(!d){var y=/[\\'"]/g;d=function(e){return i(e).replace(y,"\\$&")}}n||(n=function(e,r,a,l){for(l=e[h];--l;)if(e[a=h+l]===r)return a;return e[a=h+e[h]++]=r,a});var h="",u="",z=e.list,x=e.viewId;u+='<div mxv mxa="_zs_galleryak:_" class="_zs_gallerydh">';for(var f=0,v=z.length;f<v;f++){var m=z[f];u+='<div mxv class="_zs_gallerydi ',m.expand&&(u+=" _zs_gallerydp "),u+=" ",m.disabled&&(u+=" _zs_gallerydo "),u+='"><div class="_zs_gallerydj" ',m.disabled||(u+=' mx-click="'+r+"toggle({index: "+l(f)+'})" '),u+='><span mxa="_zs_galleryak:a" class="_zs_gallerydk">'+i(m.arrow)+'</span><span mxa="_zs_galleryak:b" class="_zs_gallerydl">'+l(m.title)+"</span></div>",m.disabled||(u+='<div mxv class="_zs_gallerydm" id="'+l(x)+"_content_"+l(f)+'" style="',m.height&&(u+=" \n                display: block; \n                ",m.expand?u+=" \n                    opacity: 1; height: "+l(m.height)+"px; \n                ":u+=" \n                    opacity: 0; height: 0; border-top: 0 none; \n                ",u+=" \n            "),u+='"><div mxv="list" class="_zs_gallerydn" mx-view="'+l(m.view)+"?data="+n(a,m)+'"></div></div>'),u+="</div>"}return u+="</div>"},init:function(e){var r=this;r.__a=i("#"+r.id),r.updater.snapshot(),r.assign(e),r.owner.oncreated=function(){if(!r.$init){r.$init=1;var e=r.id,a=r.updater.get("list");a.forEach(function(r,a){var l=i("#"+e+"_content_"+a);r.height=l.outerHeight()}),r.updater.digest({list:a})}},r.ondestroy=function(){r.owner.off("created")}},assign:function(e){var r=this.updater.altered();return this.updater.set({viewId:this.id,onlyOne:e.onlyOne+""!="false",originList:e.list||[]}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){this.$init=null;var e=this.updater.get("originList"),r=i.extend(!0,[],e),a=!1;if(r.forEach(function(e,r){e.arrow||(e.arrow='<span class="mc-iconfont" style="font-size: 14px;">&#xe602;</span>'),e.view||(e.view="mx-collapse/content"),e.expand=e.expand||!1,e.disabled&&(e.expand=!1),a=a||e.expand}),!a)for(var l=0;l<r.length;l++)if(!r[l].disabled){r[l].expand=!0;break}this.updater.digest({list:r}),a||this.__af()},__af:function(){var e=this.updater.get("list");this.__a.trigger({type:"change",expands:e.map(function(e){return e.expand})})},"toggle<click>":function(e){var r=e.params.index,a=this.updater.get(),l=a.list,i=a.onlyOne;l.forEach(function(e,a){a==r?e.expand=!e.expand:i&&(e.expand=!1)}),this.updater.digest({list:l}),this.__af()}})});