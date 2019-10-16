define("mx-cascade/index",["magix","mx-tree/util","../mx-medusa/util","../mx-util/monitor"],(e,t,a)=>{var r=e("magix"),l=(r.Vframe,e("mx-tree/util")),i=e("../mx-medusa/util"),n=e("../mx-util/monitor");r.applyStyle("_zs_galleryy","._zs_gallerydd{width:auto;min-width:0;max-width:none;white-space:nowrap}._zs_galleryde{display:inline-block;min-width:100px;height:calc(var(--input-small-height)*6);overflow-y:auto;vertical-align:top;border-left:1px solid var(--color-border)}._zs_galleryde:first-child{border-left:0}._zs_gallerydf{position:relative;height:var(--input-small-height);padding-right:var(--input-small-height);padding-left:10px;line-height:var(--input-small-height);transition:background-color var(--duration),color var(--duration);cursor:pointer}._zs_gallerydf ._zs_gallerydg{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_gallerydf ._zs_gallerydh{position:absolute;right:0;top:0;font-size:24px;line-height:var(--input-small-height);color:#999;transform:rotate(-90deg)}._zs_gallerydf:hover{background-color:var(--color-bg-hover)}._zs_gallerydf._zs_gallerydi{color:var(--color-brand)}._zs_gallerydf._zs_gallerydi,._zs_gallerydf._zs_gallerydi:hover{background-color:var(--color-brand-opacity)}"),a.exports=r.View.extend({tmpl:function(e,t,a,r,l,i,n,s){if(a||(a=e),!l){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(o,c)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return _[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(g,u)}}if(!s){var h=/[\\'"]/g;s=function(e){return l(e).replace(h,"\\$&")}}var p="",f=e.expand,v=e.disabled,x=e.name,m=e.selectedText,y=e.groups,z=e.viewId,b=e.textKey;if(p+='<div class="mx-trigger ',f&&(p+=" mx-trigger-open "),p+='" ',v||(p+=' mx-click="'+t+'__o()" '),p+='><span mxa="_zs_galleryam:_" class="mx-trigger-label">',x&&(p+=r(x)+"："),p+=r(m)+'</span><span mxs="_zs_galleryam:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div>',!v){p+='<div class="mx-output mx-output-bottom ',f&&(p+=" mx-output-open "),p+=' clearfix _zs_gallerydd">';for(var w=0,K=y.length;w<K;w++){var k=y[w];p+='<div class="_zs_galleryde" id="'+r(z)+"_g_"+r(w)+'">';for(var T=0,V=k.length;T<V;T++){var I=k[T];p+='<div class="_zs_gallerydf ',I.cur&&(p+=" _zs_gallerydi "),p+='" mx-click="'+t+"__ac({gIndex:"+r(w)+",iIndex:"+r(T)+'})"><span mxa="_zs_galleryam:a" class="_zs_gallerydg">'+r(I[b])+"</span>",I.children&&I.children.length&&(p+='<span mxs="_zs_galleryam:a" class="mc-iconfont _zs_gallerydh">&#xe692;</span>'),p+="</div>"}p+="</div>"}p+="</div>"}return p},init:function(e){var t=this;t.__s=e,n.__h(),t.on("destroy",function(){n.__i(t),n.__j()})},render:function(){var e=this,t=e.__s,a=t.valueKey||"value",r=t.textKey||"text",n=t.parentKey||"pValue",s=t.disabled+""=="true"||$("#"+e.id)[0].hasAttribute("mx-disabled"),d=l.listToTree(t.list,a,n),o=d.map,c=d.list;e.updater.set({viewId:e.id,disabled:s,placeholder:t.placeholder||i.choose,valueKey:a,textKey:r,parentKey:n,map:o,list:c,expand:!1});var _=t.selected||"",u=e.__ab(_);u.selectedText=u.selectedTexts.join("/"),u.selectedValue=_,e.updater.digest(u),e.__a=$("#"+e.id),e.__a.val(_)},__ab:function(e){var t=this.updater,a=t.get("valueKey"),r=t.get("textKey"),l=t.get("parentKey"),i=t.get("placeholder"),n=t.get("map"),s=t.get("list"),d=[],o=[],c=[];if(e&&n[e]){var _=function(e){var t=n[e];if(d.unshift(t[r]),o.unshift(t[a]+""),t[l]){var i=n[t[l]].children;i.forEach(function(e){e.cur=!1}),t.cur=!0,c.unshift(i),_(t[l])}else s.forEach(function(e){e.cur=!1}),t.cur=!0,c.unshift(s)};_(e)}else d=[i],c=[s];return{groups:c,selectedTexts:d,selectedValues:o}},__l:function(e){return r.inside(e,this.id)},__n:function(e){this.updater.get("expand")&&(this.updater.digest({expand:!1}),n.__i(this))},"__o<click>":function(e){var t=this.updater,a=t.get("expand"),r=t.get("selectedValue");if(!a){var l=this.__ab(r);l.expand=!0,t.digest(l),n.__q(this)}},"__ac<click>":function(e){var t=this.updater,a=t.get("selectedValues"),r=t.get("valueKey"),l=e.params.gIndex,i=e.params.iIndex,n=t.get("groups"),s=n[l],d=s[i];if(d.children=d.children||[],d.children.length>0)s.forEach(function(e){e.cur=!1}),d.cur=!0,n=n.slice(0,l+1),d.children.forEach(function(e){e.cur=a.indexOf(e[r]+"")>-1}),n.push(d.children),t.digest({groups:n});else{var o=d[r],c=this.__ab(o);c.selectedValue=o,c.selectedText=c.selectedTexts.join("/"),t.digest(c);var _=$.Event("change",{item:d,selected:o});this.__a.val(o).trigger(_),this.__n()}}})});