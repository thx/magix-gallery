<<<<<<< HEAD
define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(e,t,a)=>{e("mx-popover/index");var i=e("magix"),r=e("mx-tabs/base");i.applyStyle("_zs_gallery_mx-tabs_index_","[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  padding: 10px 24px;\n  font-size: 16px;\n  line-height: var(--input-height);\n  transition: color var(--duration) ease-out;\n  color: #666;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -24px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -1px;\n  border-bottom: 2px solid var(--color-brand);\n  transition: width var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1), left var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  position: relative;\n  display: inline-block;\n  height: var(--input-height);\n  vertical-align: middle;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -14px;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: var(--color-disabled);\n  border-color: var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  height: var(--input-height);\n  line-height: calc(var(--input-height) - 2px);\n  border-radius: var(--border-radius);\n  color: #666;\n  border: 1px solid transparent;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #333;\n  background-color: var(--color-brand-opacity);\n  border: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-hollow-box::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--border-highlight);\n}\n._zs_gallery_mx-tabs_index_-solid-box {\n  border: 1px solid var(--border-highlight);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: calc(var(--input-height) - 2px);\n  line-height: calc(var(--input-height) - 2px);\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n"),a.exports=r.extend({tmpl:function(e,t,a,i,r,_,l,n){if(a||(a=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(o,d)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},b=function(e){return x[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(m,b)}}if(!n){var c=/[\\'"]/g;n=function(e){return r(e).replace(c,"\\$&")}}l||(l=function(e,t,a,i){for(i=e[v];--i;)if(e[a=v+i]===t)return a;return e[a=v+e[v]++]=t,a});var g,p,y,v="",u="",h=e.type,f=e.list,z=e.selected,w=e.viewId,$=e.spm,k=e.left,I=e.width,q=e.disabled;try{if(y=1,p="if type == 'border'",g="<%if (type == 'border') {%>","border"==h){u+='<div mxa="_zs_gallerye8:_" class="_zs_gallery_mx-tabs_index_-border clearfix">',y=3,p="each list as item index",g="<%for (var index = 0, $art_caofvhac$art_c = list.length; index < $art_caofvhac$art_c; index++) {        var item = list[index]%>";for(var j=0,A=f.length;j<A;j++){var C=f[j];u+='<a class="_zs_gallery_mx-tabs_index_-border-item ',y=4,p="= (item.value == selected) ? 'selected' : ''",u+=(g="<%=(item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : ''%>",i(C.value==z?"_zs_gallery_mx-tabs_index_-selected":"")+'" href="javascript:;" id="'),y=4,p="=viewId",u+=(g="<%=viewId%>",i(w)+"_"),y=4,p="=item.value",u+=(g="<%=item.value%>",i(C.value)+'" mx-mouseover="'+t+"@{over}({value:'"),y=5,p="=item.value",u+=(g="<%=$eq(item.value)%>",i(n(C.value))+'\'})" mx-mouseout="'+t+'@{out}()" mx-click="'+t+"@{select}({item:'"),y=7,p="@item",u+=(g="<%@item%>",l(a,C)+"'})\" "),y=8,p="if spm",g="<%if (spm) {%>",$&&(u+=' data-spm-click="',y=8,p="=spm",u+=(g="<%=spm%>",i($)+""),y=8,p="=index",u+=(g="<%=index%>",i(j)+'" '),y=8,p="/if",g="<%}%>"),u+=">",y=9,p="=item.text",u+=(g="<%=item.text%>",i(C.text)+" "),y=10,p="if item.tag",g="<%if (item.tag) {%>",C.tag&&(u+='<span class="mx-tag _zs_gallery_mx-tabs_index_-tag" style="background-color: ',y=11,p="=item.color",u+=(g="<%=item.color%>",i(C.color)+';"><span class="mx-tag-arrow" style="border-color: '),y=12,p="=item.color",u+=(g="<%=item.color%>",i(C.color)+" transparent transparent "),y=12,p="=item.color",u+=(g="<%=item.color%>",i(C.color)+';"></span><span mxa="_zs_gallerye8:a" class="mx-tag-name">'),y=13,p="!item.tag",u+=(g="<%!item.tag%>",r(C.tag)+"</span></span>"),y=15,p="/if",g="<%}%>"),u+=" ",y=16,p="if item.tips",g="<%if (item.tips) {%>",C.tips&&(u+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content=',y=20,p="=item.tips",u+=(g="<%!$eu(item.tips)%>",_(C.tips)+'">&#xe7aa;</i>'),y=21,p="/if",g="<%}%>"),u+="</a>",y=23,p="/each",g="<%}%>"}u+='<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ',y=24,p="=left",u+=(g="<%=left%>",i(k)+"px; width: "),y=24,p="=width",u+=(g="<%=width%>",i(I)+'px;"></span></div>'),y=26,p="else",g="<%}else {%>"}else{u+='<div class="_zs_gallery_mx-tabs_index_-box ',y=27,p="= disabled ? 'box-disabled' : ''",u+=(g="<%=disabled ? '_zs_gallery_mx-tabs_index_-box-disabled' : ''%>",i(q?"_zs_gallery_mx-tabs_index_-box-disabled":"")+'">'),y=28,p="each list as item",g="<%for (var $art_ikixmlacer$art_i = 0, $art_cquxweydc$art_c = list.length; $art_ikixmlacer$art_i < $art_cquxweydc$art_c; $art_ikixmlacer$art_i++) {        var item = list[$art_ikixmlacer$art_i]%>";for(var R=0,S=f.length;R<S;R++){C=f[R];u+='<a href="javascript:;" ',y=29,p="if !disabled",g="<%if (!disabled) {%>",q||(u+=' mx-click="'+t+"@{select}({item:'",y=29,p="@item",u+=(g="<%@item%>",l(a,C)+"'})\" "),y=29,p="/if",g="<%}%>"),u+=' class="_zs_gallery_mx-tabs_index_-box-item ',y=29,p="= (item.value == selected) ? 'selected' : ''",u+=(g="<%=(item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : ''%>",i(C.value==z?"_zs_gallery_mx-tabs_index_-selected":"")+'" '),y=30,p="if spm",g="<%if (spm) {%>",$&&(u+=' data-spm-click="',y=30,p="=spm",u+=(g="<%=spm%>",i($)+""),y=30,p="=index",u+=(g="<%=index%>",i(j)+'" '),y=30,p="/if",g="<%}%>"),u+=">",y=31,p="=item.text",u+=(g="<%=item.text%>",i(C.text)+" "),y=32,p="if item.tag",g="<%if (item.tag) {%>",C.tag&&(u+='<span mxa="_zs_gallerye8:b" class="_zs_gallery_mx-tabs_index_-tag">',y=33,p="=item.tag",u+=(g="<%=item.tag%>",i(C.tag)+"</span>"),y=34,p="/if",g="<%}%>"),u+="</a>",y=36,p="/each",g="<%}%>"}u+="</div>",y=38,p="/if",g="<%}%>"}}catch(e){var U="render view error:"+(e.message||e);throw p&&(U+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+y),U+="\r\n\t"+(p?"translate to:":"expr:"),U+=g+"\r\n\tat file:mx-tabs/index.html"}return u},render:function(){this.updater.digest(),this["@{sync.line}"](this["@{data.selected}"])},"@{sync.line}":function(e){if("border"==this["@{display.type}"]){this["@{data.hover}"]=e;var t=$("#"+this.id+"_"+e),a=t.offset().left-this["@{owner.node}"].offset().left,i=t.outerWidth();this.updater.digest({left:a,width:i})}},"@{over}<mouseover>":function(e){var t=e.params.value;this["@{sync.line}"](t)},"@{out}<mouseout>":function(e){this["@{sync.line}"](this["@{data.selected}"])}})});
=======
define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(e,t,i)=>{e("mx-popover/index");var a=e("magix"),r=e("mx-tabs/base");a.applyStyle("_zs_gallery_mx-tabs_index_","[mx-view*=\"mx-tabs/box\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-tabs_index_-border {\n  position: relative;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item {\n  position: relative;\n  float: left;\n  padding: 10px 24px;\n  font-size: 16px;\n  line-height: var(--input-height);\n  transition: color var(--duration) ease-out;\n  color: #666;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-border-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -24px;\n}\n._zs_gallery_mx-tabs_index_-border ._zs_gallery_mx-tabs_index_-underline {\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -1px;\n  border-bottom: 2px solid var(--color-brand);\n  transition: width var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1), left var(--duration) cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n._zs_gallery_mx-tabs_index_-box {\n  position: relative;\n  display: inline-block;\n  height: var(--input-height);\n  vertical-align: middle;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-tip {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:first-child {\n  border-top-left-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item:last-child {\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-box ._zs_gallery_mx-tabs_index_-box-item ._zs_gallery_mx-tabs_index_-tag {\n  margin-left: -14px;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #999;\n}\n._zs_gallery_mx-tabs_index_-box._zs_gallery_mx-tabs_index_-box-disabled ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #999;\n  background-color: var(--color-disabled);\n  border-color: var(--color-border);\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  height: var(--input-height);\n  line-height: calc(var(--input-height) - 2px);\n  border-radius: var(--border-radius);\n  color: #666;\n  border: 1px solid transparent;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-hollow-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: #333;\n  background-color: var(--color-brand-opacity);\n  border: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-tabs_index_-hollow-box::after {\n  content: ' ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--border-highlight);\n}\n._zs_gallery_mx-tabs_index_-solid-box {\n  border: 1px solid var(--border-highlight);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item {\n  display: inline-block;\n  height: calc(var(--input-height) - 2px);\n  line-height: calc(var(--input-height) - 2px);\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item:hover {\n  color: #333;\n}\n._zs_gallery_mx-tabs_index_-solid-box ._zs_gallery_mx-tabs_index_-box-item._zs_gallery_mx-tabs_index_-selected {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n"),i.exports=r.extend({tmpl:function(e,t,i,a,r,_,n,l){if(i||(i=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(o,d)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},b=function(e){return x[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(m,b)}}if(!l){var c=/[\\'"]/g;l=function(e){return r(e).replace(c,"\\$&")}}n||(n=function(e,t,i,a){for(a=e[v];--a;)if(e[i=v+a]===t)return i;return e[i=v+e[v]++]=t,i});var g,p,u,v="",y="",h=e.type,z=e.list,f=e.selected,w=e.viewId,$=e.spm,k=e.left,I=e.width,q=e.disabled;try{if(u=1,p="if type == 'border'",g="<%if (type == 'border') {%>","border"==h){y+='<div mxa="_zs_gallerye8:_" class="_zs_gallery_mx-tabs_index_-border clearfix">',u=3,p="each list as item index",g="<%for (var index = 0, $art_chpdpe$art_c = list.length; index < $art_chpdpe$art_c; index++) {        var item = list[index]%>";for(var j=0,A=z.length;j<A;j++){var C=z[j];y+='<a class="_zs_gallery_mx-tabs_index_-border-item ',u=4,p="= (item.value == selected) ? 'selected' : ''",y+=(g="<%=(item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : ''%>",a(C.value==f?"_zs_gallery_mx-tabs_index_-selected":"")+'" href="javascript:;" id="'),u=4,p="=viewId",y+=(g="<%=viewId%>",a(w)+"_"),u=4,p="=item.value",y+=(g="<%=item.value%>",a(C.value)+'" mx-mouseover="'+t+"@{over}({value:'"),u=5,p="=item.value",y+=(g="<%=$eq(item.value)%>",a(l(C.value))+'\'})" mx-mouseout="'+t+'@{out}()" mx-click="'+t+"@{select}({item:'"),u=7,p="@item",y+=(g="<%@item%>",n(i,C)+"'})\" "),u=8,p="if spm",g="<%if (spm) {%>",$&&(y+=' data-spm-click="',u=8,p="=spm",y+=(g="<%=spm%>",a($)+""),u=8,p="=index",y+=(g="<%=index%>",a(j)+'" '),u=8,p="/if",g="<%}%>"),y+=">",u=9,p="=item.text",y+=(g="<%=item.text%>",a(C.text)+" "),u=10,p="if item.tag",g="<%if (item.tag) {%>",C.tag&&(y+='<span class="mx-tag _zs_gallery_mx-tabs_index_-tag" style="background-color: ',u=11,p="=item.color",y+=(g="<%=item.color%>",a(C.color)+';"><span class="mx-tag-arrow" style="border-color: '),u=12,p="=item.color",y+=(g="<%=item.color%>",a(C.color)+" transparent transparent "),u=12,p="=item.color",y+=(g="<%=item.color%>",a(C.color)+';"></span><span mxa="_zs_gallerye8:a" class="mx-tag-name">'),u=13,p="!item.tag",y+=(g="<%!item.tag%>",r(C.tag)+"</span></span>"),u=15,p="/if",g="<%}%>"),y+=" ",u=16,p="if item.tips",g="<%if (item.tips) {%>",C.tips&&(y+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content=',u=20,p="=item.tips",y+=(g="<%!$eu(item.tips)%>",_(C.tips)+'">&#xe7aa;</i>'),u=21,p="/if",g="<%}%>"),y+="</a>",u=23,p="/each",g="<%}%>"}y+='<span class="_zs_gallery_mx-tabs_index_-underline" style="left: ',u=24,p="=left",y+=(g="<%=left%>",a(k)+"px; width: "),u=24,p="=width",y+=(g="<%=width%>",a(I)+'px;"></span></div>'),u=26,p="else",g="<%}else {%>"}else{y+='<div class="_zs_gallery_mx-tabs_index_-box ',u=27,p="= disabled ? 'box-disabled' : ''",y+=(g="<%=disabled ? '_zs_gallery_mx-tabs_index_-box-disabled' : ''%>",a(q?"_zs_gallery_mx-tabs_index_-box-disabled":"")+'">'),u=28,p="each list as item",g="<%for (var $art_izxudhutv$art_i = 0, $art_cqbsdyzsc$art_c = list.length; $art_izxudhutv$art_i < $art_cqbsdyzsc$art_c; $art_izxudhutv$art_i++) {        var item = list[$art_izxudhutv$art_i]%>";for(var R=0,S=z.length;R<S;R++){C=z[R];y+='<a href="javascript:;" ',u=29,p="if !disabled",g="<%if (!disabled) {%>",q||(y+=' mx-click="'+t+"@{select}({item:'",u=29,p="@item",y+=(g="<%@item%>",n(i,C)+"'})\" "),u=29,p="/if",g="<%}%>"),y+=' class="_zs_gallery_mx-tabs_index_-box-item ',u=29,p="= (item.value == selected) ? 'selected' : ''",y+=(g="<%=(item.value == selected) ? '_zs_gallery_mx-tabs_index_-selected' : ''%>",a(C.value==f?"_zs_gallery_mx-tabs_index_-selected":"")+'" '),u=30,p="if spm",g="<%if (spm) {%>",$&&(y+=' data-spm-click="',u=30,p="=spm",y+=(g="<%=spm%>",a($)+""),u=30,p="=index",y+=(g="<%=index%>",a(j)+'" '),u=30,p="/if",g="<%}%>"),y+=">",u=31,p="=item.text",y+=(g="<%=item.text%>",a(C.text)+" "),u=32,p="if item.tag",g="<%if (item.tag) {%>",C.tag&&(y+='<span mxa="_zs_gallerye8:b" class="_zs_gallery_mx-tabs_index_-tag">',u=33,p="=item.tag",y+=(g="<%=item.tag%>",a(C.tag)+"</span>"),u=34,p="/if",g="<%}%>"),y+="</a>",u=36,p="/each",g="<%}%>"}y+="</div>",u=38,p="/if",g="<%}%>"}}catch(e){var U="render view error:"+(e.message||e);throw p&&(U+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+u),U+="\r\n\t"+(p?"translate to:":"expr:"),U+=g+"\r\n\tat file:mx-tabs/index.html"}return y},render:function(){this.updater.digest(),this["@{sync.line}"](this["@{data.selected}"])},"@{sync.line}":function(e){if("border"==this["@{display.type}"]){this["@{data.hover}"]=e;var t=$("#"+this.id+"_"+e),i=t.offset().left-this["@{owner.node}"].offset().left,a=t.outerWidth();this.updater.digest({left:i,width:a})}},"@{over}<mouseover>":function(e){var t=e.params.value;this["@{sync.line}"](t)},"@{out}<mouseout>":function(e){this["@{sync.line}"](this["@{data.selected}"])}})});
>>>>>>> f4da9c6137ebb53744d694c722dda9b9dcb28ad8
