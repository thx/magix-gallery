define("mx-cascade/card",["magix","$","./index","../mx-tree/util","../mx-medusa/util"],(e,l,a)=>{"use strict";l.__esModule=!0;var r=e("magix"),i=e("$"),d=e("./index"),s=e("../mx-tree/util"),t=e("../mx-medusa/util");r.default.Vframe;r.default.applyStyle("_zs_galleryy",'[mx-view*="mx-cascade/card"]{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap}._zs_gallerydf{position:relative;padding-right:var(--input-height);transition:background-color var(--duration),color var(--duration);cursor:pointer}._zs_gallerydf ._zs_gallerydg{display:block;width:100%;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}._zs_gallerydf ._zs_gallerydh{position:absolute;top:50%;right:0;width:var(--input-height);height:var(--input-height);margin-top:calc(var(--input-height)/-2);font-size:30px;color:#999;transform:rotate(-90deg)}._zs_gallerydf._zs_gallerydi{background-color:#f5f5f6}._zs_gallerydf._zs_gallerydj{color:var(--color-brand)}._zs_gallerydf._zs_gallerydj,._zs_gallerydf._zs_gallerydj._zs_gallerydi{background-color:var(--color-brand-opacity)}._zs_gallerydk{float:left;display:inline-block;min-width:100px;overflow-y:auto;overflow-x:hidden;vertical-align:top;border-radius:var(--border-radius)}._zs_gallerydl{padding:8px}._zs_gallerydl ._zs_gallerydf{height:var(--input-height);padding-left:16px;line-height:var(--input-height);border-radius:var(--border-radius);margin-bottom:4px}._zs_gallerydl ._zs_gallerydf:last-child{margin-bottom:0}._zs_gallerydm ._zs_gallerydn{padding:0 24px;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid var(--color-border)}._zs_gallerydm ._zs_gallerydn ._zs_gallerydo{font-size:16px;margin-right:16px}._zs_gallerydm ._zs_gallerydn ._zs_gallerydp{color:#999}._zs_gallerydm ._zs_gallerydq{overflow-y:auto;overflow-x:hidden}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf{display:table;width:100%;height:76px;padding-top:16px;padding-bottom:16px;padding-left:76px}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf ._zs_gallerydr{position:absolute;top:16px;left:24px;width:44px;height:44px;border-radius:50%;background-color:#fff;overflow:hidden}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf ._zs_gallerydr img{width:100%;height:100%}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf ._zs_galleryds{display:table-cell;vertical-align:middle}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf ._zs_galleryds ._zs_gallerydp{margin-top:5px;color:#999}._zs_gallerydm ._zs_gallerydq ._zs_gallerydf._zs_gallerydj ._zs_gallerydp{color:#333}'),l.default=d.default.extend({tmpl:function(e,l,a,r,i,d,s,t){if(a||(a=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(g,o)}}if(!d){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return n[e]},y=/[!')(*]/g;d=function(e){return encodeURIComponent(i(e)).replace(y,p)}}if(!t){var h=/[\\'"]/g;t=function(e){return i(e).replace(h,"\\$&")}}var c="",u=e.groups,z=e.viewId,x=e.width,v=e.title,m=e.tip,f=e.height,w=e.imgKey,b=e.textKey,K=e.tipKey;c+='<div mxa="_zs_galleryal:_" class="clearfix" mx-mouseout="'+l+'out()">';for(var k=0,q=u.length;k<q;k++){var I=u[k];if(c+=" ",0==k){c+='<div class="mx-shadow _zs_gallerydk _zs_gallerydm" id="'+r(z)+"_g_"+r(k)+'" style="width: '+r(x)+'px;"><div mxa="_zs_galleryal:a" class="clearfix" style="padding: 10px 24px;border-bottom: 1px solid var(--color-border)"><div mxa="_zs_galleryal:b" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryal:c" class="grid-title" style="margin-right: 16px;">'+r(v)+'</span><span mxa="_zs_galleryal:d" style="margin-right: 16px; color: #999;">'+r(m)+'</span></div></div><div class="_zs_gallerydq" style="height: '+r(f-55)+'px;">';for(var T=0,j=I.length;T<j;T++){c+='<div class="_zs_gallerydf ',($=I[T]).cur&&(c+=" _zs_gallerydj "),c+=" ",$.hover&&(c+=" _zs_gallerydi "),c+='" mx-click="'+l+"__ah({gIndex:"+r(k)+",iIndex:"+r(T)+'})" mx-mouseover="'+l+"__ah({gIndex:"+r(k)+",iIndex:"+r(T)+'})"><div mxa="_zs_galleryal:e" class="_zs_gallerydr"><img src="'+r($[w])+'"/></div><div mxa="_zs_galleryal:f" class="_zs_galleryds"><div mxa="_zs_galleryal:g" class="_zs_gallerydg">'+r($[b])+'</div><div mxa="_zs_galleryal:h" class="_zs_gallerydp">'+r($[K])+"</div></div>",$.children&&$.children.length&&(c+='<span mxs="_zs_galleryal:_" class="mc-iconfont _zs_gallerydh">&#xe692;</span>'),c+="</div>"}c+="</div></div>"}else{c+='<div class="mx-shadow _zs_gallerydk _zs_gallerydl" id="'+r(z)+"_g_"+r(k)+'" style="width: '+r(x)+"px; height: "+r(f)+'px;">';T=0;for(var V=I.length;T<V;T++){var $;c+='<div class="_zs_gallerydf ',($=I[T]).cur&&(c+=" _zs_gallerydj "),c+=" ",$.hover&&(c+=" _zs_gallerydi "),c+='" mx-click="'+l+"__ah({gIndex:"+r(k)+",iIndex:"+r(T)+'})" mx-mouseover="'+l+"__ah({gIndex:"+r(k)+",iIndex:"+r(T)+'})"><span mxa="_zs_galleryal:i" class="_zs_gallerydg">'+r($[b])+"</span>",$.children&&$.children.length&&(c+='<span mxs="_zs_galleryal:_" class="mc-iconfont _zs_gallerydh">&#xe692;</span>'),c+="</div>"}c+="</div>"}c+=" "}return c+="</div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),a=e.valueKey||"value",r=e.textKey||"text",d=e.parentKey||"pValue",_=e.imgKey||"img",g=e.tipKey||"tip",o=s.listToTree(e.list,a,d),n=o.map,p=o.list;this.updater.set({placeholder:this.placeholder||t.choose,valueKey:a,textKey:r,parentKey:d,imgKey:_,tipKey:g,map:n,list:p,title:e.headerTitle||"标题",tip:e.headerTip||"",width:e.width||280,height:e.height||360,triggerType:"hover"}),this.__ae=!0;var y=e.selected||"",h=this.__af(y);return this.updater.set({groups:[h.groups[0]],selectedTexts:h.selectedTexts,selectedValues:h.selectedValues,selectedValue:y}),this.__a=i("#"+this.id),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){var e=this;e.updater.digest();var l=e.updater.get().selectedValue;e.__a.val(l),e.__a.hover(function(){clearTimeout(e.__ag)},function(){clearTimeout(e.__ag),e.__ag=setTimeout(function(){e.__q()},300)})},__q:function(e){var l=this.updater.get().groups;l[0].forEach(function(e){e.hover=!1}),this.updater.digest({groups:[l[0]]})}})});