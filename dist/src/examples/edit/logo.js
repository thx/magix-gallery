define("examples/edit/logo",["magix","./theme","$","mx-color/index"],(e,r,a)=>{e("mx-color/index");var t=e("magix"),l=e("./theme"),i=e("$");t.applyStyle("_zs_galleryd",'._zs_galleryaf{display:inline-block;width:var(--input-height);height:var(--input-height);border-radius:50%;vertical-align:middle}:root{--edit-theme-width:126px;--edit-nav-size:20px;--edit-group-height:50px;--edit-wrapper-height:calc(var(--edit-group-height)*2 + 800px)}._zs_galleryag{float:left;text-align:center}._zs_galleryah{position:relative;height:var(--edit-wrapper-height)}._zs_galleryai{position:absolute;z-index:3;top:calc(0px - var(--edit-nav-size));left:0;height:var(--edit-nav-size);text-align:center;transition:left var(--duration)}._zs_galleryai ._zs_galleryaj,._zs_galleryai ._zs_galleryak{display:inline-block;width:0;height:0;border-left:var(--edit-nav-size) solid transparent;border-bottom:var(--edit-nav-size) solid var(--color-border);border-right:var(--edit-nav-size) solid transparent;border-top:0 solid transparent}._zs_galleryai ._zs_galleryak{position:absolute;top:1px;left:50%;margin-left:calc(0px - var(--edit-nav-size));border-color:transparent transparent #fff}._zs_galleryal{position:absolute;z-index:2;top:0;left:0;height:100%;padding-left:15px;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_galleryal ._zs_galleryam{float:left;width:120px;height:90px}._zs_galleryal ._zs_galleryan{position:relative;top:1px;margin-left:3px;color:#999;font-size:14px}._zs_galleryal ._zs_galleryao{height:var(--edit-group-height);line-height:var(--edit-group-height);font-size:calc(var(--font-size) + 2px)}._zs_galleryal ._zs_galleryap{width:100px;border-radius:var(--border-radius)}._zs_galleryal ._zs_galleryap [mx-view*="mx-color/picker"],._zs_galleryal ._zs_galleryap [mx-view*="mx-color/picker"] .mx-trigger{background-color:transparent}._zs_galleryaq{padding:0 20px}._zs_galleryaq ._zs_galleryar{width:100%;height:var(--edit-wrapper-height);border:1px solid var(--color-border)}._zs_galleryas{position:relative;padding-left:calc(var(--font-size)*15)}._zs_galleryas ._zs_galleryat{position:absolute;top:0;left:0;width:calc(var(--font-size)*15)}._zs_galleryau{position:relative;height:36px;white-space:nowrap}._zs_galleryau ._zs_galleryav{position:absolute;top:18px;left:0;color:#999}._zs_galleryau ._zs_galleryaw{font-size:12px;color:#999}'),a.exports=l.extend({tmpl:function(e,r,a,t,l,i,o,s){if(a||(a=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(g,d)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(c,p)}}if(!s){var h=/[\\'"]/g;s=function(e){return l(e).replace(h,"\\$&")}}o||(o=function(e,r,a,t){for(t=e[v];--t;)if(e[a=v+t]===r)return a;return e[a=v+e[v]++]=r,a});var v="",z="",x=e.themes,f=e.info;z+='<div mxa="_zs_galleryg:_" class="pt10 pl10 pr10"><div mxs="_zs_galleryg:_" class="mb20">预置主题：</div><div mxa="_zs_galleryg:a" class="clearfix mb20">';for(var y=0,u=x.length;y<u;y++){var m=x[y];z+='<div class="fl" style="width: '+t(100/x.length)+'%;"><div mxa="_zs_galleryg:b" class="text-center"><a href="javascript:;" class="_zs_galleryaf" style="'+t(m.styles)+'" mx-click="'+r+"selectTheme({key:'"+t(s(m.key))+'\'})"></a></div><div mxa="_zs_galleryg:c" class="text-center mt10">'+t(m.text)+"</div></div>"}return z+='</div><div mxs="_zs_galleryg:a">自定义主题：</div></div><div mxv="info" mx-view="mx-color/index?data='+o(a,f)+'" mx-change="'+r+'selectColor()"></div>'},init:function(e){this.updater.set({info:{showBtns:!0,color:e.color}}),this.initTheme()},render:function(){this.updater.digest()},"selectTheme<click>":function(e){for(var r=e.params.key,a=this.updater.get("themes"),t={},l=0;l<a.length;l++)if(a[l].key==r){t=a[l];break}this.__a.trigger(i.Event("change",{colors:t.colors}))},"selectColor<change>":function(e){e.stopPropagation();var r=e.color,a=this.___({"--color-brand":r});this.__a.trigger(i.Event("change",{brand:r,colors:a}))}})});