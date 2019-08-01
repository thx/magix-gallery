define("__test__/edit/logo",["magix","./theme","$","mx-color/index"],(e,t,_)=>{e("mx-color/index");var r=e("magix"),n=e("./theme"),i=e("$");r.applyStyle("_zs_gallery___test___edit_theme_",'._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n:root {\n  --edit-theme-width: 126px;\n  --edit-nav-size: 20px;\n  --edit-group-height: 50px;\n  --edit-wrapper-height: calc(var(--edit-group-height) * 2 + 800px);\n}\n._zs_gallery___test___edit_theme_-theme {\n  float: left;\n  text-align: center;\n}\n._zs_gallery___test___edit_theme_-edit {\n  position: relative;\n  height: var(--edit-wrapper-height);\n}\n._zs_gallery___test___edit_theme_-nav {\n  position: absolute;\n  z-index: 3;\n  top: calc(0px - var(--edit-nav-size));\n  left: 0;\n  height: var(--edit-nav-size);\n  text-align: center;\n  transition: left var(--duration);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow,\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-width: 0 var(--edit-nav-size) var(--edit-nav-size);\n  border-style: solid;\n  border-color: transparent transparent var(--color-border);\n}\n._zs_gallery___test___edit_theme_-nav ._zs_gallery___test___edit_theme_-white-arrow {\n  position: absolute;\n  top: 1px;\n  left: 50%;\n  margin-left: calc(0px - var(--edit-nav-size));\n  border-color: transparent transparent #fff;\n}\n._zs_gallery___test___edit_theme_-colors {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding-left: 15px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-item {\n  float: left;\n  width: 120px;\n  height: 90px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-icon {\n  position: relative;\n  top: 1px;\n  margin-left: 3px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-group {\n  height: var(--edit-group-height);\n  line-height: var(--edit-group-height);\n  font-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper {\n  width: 100px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*="mx-color/picker"] {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-colors ._zs_gallery___test___edit_theme_-color-wrapper [mx-view*="mx-color/picker"] .mx-trigger {\n  background-color: transparent;\n}\n._zs_gallery___test___edit_theme_-preview {\n  padding: 0 20px;\n}\n._zs_gallery___test___edit_theme_-preview ._zs_gallery___test___edit_theme_-iframe {\n  width: 100%;\n  height: var(--edit-wrapper-height);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery___test___edit_theme_-tip {\n  position: relative;\n  padding-left: calc(var(--font-size) * 15);\n}\n._zs_gallery___test___edit_theme_-tip ._zs_gallery___test___edit_theme_-tip-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--font-size) * 15);\n}\n._zs_gallery___test___edit_theme_-name {\n  position: relative;\n  height: 36px;\n  white-space: nowrap;\n}\n._zs_gallery___test___edit_theme_-name ._zs_gallery___test___edit_theme_-name-key {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  color: #999;\n}\n._zs_gallery___test___edit_theme_-name ._zs_gallery___test___edit_theme_-name-icon {\n  font-size: 12px;\n  color: #999;\n}\n'),_.exports=n.extend({tmpl:function(e,t,_,r,n,i,a,l){if(_||(_=e),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(o,d)}}if(!i){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return h[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(c,g)}}if(!l){var m=/[\\'"]/g;l=function(e){return n(e).replace(m,"\\$&")}}a||(a=function(e,t,_,r){for(r=e[x];--r;)if(e[_=x+r]===t)return _;return e[_=x+e[x]++]=t,_});var p,v,y,x="",f="",z=e.themes,u=e.info;try{f+='<div mxa="_zs_galleryg:_" class="pt10 pl10 pr10"><div mxs="_zs_galleryg:_" class="mb20">预置主题：</div><div mxa="_zs_galleryg:a" class="clearfix mb20">',y=4,v="each themes as t",p="<%for (var $art_igumdor$art_i = 0, $art_camogubca$art_c = themes.length; $art_igumdor$art_i < $art_camogubca$art_c; $art_igumdor$art_i++) {    var t = themes[$art_igumdor$art_i]%>";for(var b=0,w=z.length;b<w;b++){var k=z[b];f+='<div class="fl" style="width: ',y=5,v="=(100/themes.length)",f+=(p="<%=(100 / themes.length)%>",r(100/z.length)+'%;"><div mxa="_zs_galleryg:b" class="text-center"><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot" style="'),y=7,v="=t.styles",f+=(p="<%=t.styles%>",r(k.styles)+'" mx-click="'+t+"selectTheme({key:'"),y=7,v="=t.key",f+=(p="<%=$eq(t.key)%>",r(l(k.key))+'\'})"></a></div><div mxa="_zs_galleryg:c" class="text-center mt10">'),y=9,v="=t.text",f+=(p="<%=t.text%>",r(k.text)+"</div></div>"),y=11,v="/each",p="<%}%>"}f+='</div><div mxs="_zs_galleryg:a">自定义主题：</div></div><div mxv="info" mx-view="mx-color/index?data=',y=15,v="@info",f+=(p="<%@info%>",a(_,u)+'" mx-change="'+t+'selectColor()"></div>')}catch(e){var $="render view error:"+(e.message||e);throw v&&($+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+y),$+="\r\n\t"+(v?"translate to:":"expr:"),$+=p+"\r\n\tat file:__test__/edit/logo.html"}return f},init:function(e){this.updater.set({info:{showBtns:!0,color:e.color}}),this.initTheme()},render:function(){this.updater.digest()},"selectTheme<click>":function(e){for(var t=e.params.key,_=this.updater.get("themes"),r={},n=0;n<_.length;n++)if(_[n].key==t){r=_[n];break}this["@{owner.node}"].trigger(i.Event("change",{colors:r.colors}))},"selectColor<change>":function(e){e.stopPropagation();var t=e.color,_=this["@{get.base}"]({"--color-brand":t});this["@{owner.node}"].trigger(i.Event("change",{brand:t,colors:_}))}})});