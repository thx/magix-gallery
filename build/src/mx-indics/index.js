define("mx-indics/index",["magix","$","mx-dialog/index"],(e,l,r)=>{var t=e("magix"),g=e("$"),a=e("mx-dialog/index");t.applyStyle("_zs_galleryY",'._zs_gallerygy{position:relative;height:100%}._zs_gallerygy ._zs_gallerygz{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid var(--color-border)}._zs_gallerygy ._zs_gallerygA{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_gallerygy ._zs_gallerygA ._zs_gallerygB{position:relative;padding:16px 24px}._zs_gallerygy ._zs_gallerygA ._zs_gallerygB:nth-of-type(2n){background-color:var(--color-bg)}._zs_gallerygy ._zs_gallerygA ._zs_gallerygC{position:absolute;top:16px;left:24px;width:90px;padding:8px 0;color:#999}._zs_gallerygy ._zs_gallerygA ._zs_gallerygD{float:left;padding:8px 0;white-space:nowrap}._zs_gallerygy ._zs_gallerygA ._zs_gallerygD ._zs_gallerygE{position:relative;top:1px;left:1px;font-size:14px;color:#ccc}._zs_gallerygy._zs_gallerygF ._zs_gallerygB{padding-left:122px}._zs_gallerygy._zs_gallerygG{padding-right:240px}._zs_gallerygy._zs_gallerygG ._zs_gallerygA{right:240px;border-right:1px solid var(--color-border)}._zs_gallerygy._zs_gallerygG ._zs_gallerygH{position:absolute;top:0;right:0;width:240px;height:98px}._zs_gallerygy._zs_gallerygG ._zs_gallerygH ._zs_gallerygI{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid var(--color-border)}._zs_gallerygy._zs_gallerygG ._zs_gallerygH ._zs_gallerygJ{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:var(--color-bg)}._zs_gallerygy._zs_gallerygG ._zs_gallerygK{position:absolute;top:98px;right:0;bottom:0;width:240px;padding:0 24px 16px;overflow-y:scroll;background-color:var(--color-bg)}._zs_gallerygy._zs_gallerygG ._zs_gallerygK ._zs_gallerygL{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:move}._zs_gallerygy._zs_gallerygG ._zs_gallerygK ._zs_gallerygL:last-child{margin-bottom:0}._zs_gallerygM{display:inline-block;width:40px;padding-right:10px;margin-right:10px;text-align:center}._zs_gallerygM ._zs_gallerygN{position:relative;top:2px;font-size:18px}._zs_gallerygO{display:inline-block;width:auto}[mx-view*="mx-indics/index"]{display:inline-block;vertical-align:middle}[mx-view*="mx-indics/index"]:hover ._zs_gallerygM,[mx-view*="mx-indics/index"]:hover ._zs_gallerygO{border-color:var(--border-highlight-hover);color:#333}[mx-view*="mx-indics/index"]:hover ._zs_gallerygO ._zs_gallerygP{color:var(--border-highlight-hover)}'),r.exports=t.View.extend({tmpl:function(e,l,r,t,g,a,i,s){if(r||(r=e),!g){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,n=function(e){return"&"+o[e]+";"};g=function(e){return""+(null==e?"":e)},t=function(e){return g(e).replace(_,n)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return p[e]},y=/[!')(*]/g;a=function(e){return encodeURIComponent(g(e)).replace(y,d)}}if(!s){var c=/[\\'"]/g;s=function(e){return g(e).replace(c,"\\$&")}}var x="";return x+='<a mxs="_zs_gallerycu:_" href="javascript:;" class="mx-trigger _zs_gallerygM" mx-click="'+l+'show()"><i class="mc-iconfont _zs_gallerygN">&#xe731;</i></a><a mxa="_zs_gallerycu:_" href="javascript:;" class="mx-trigger _zs_gallerygO" mx-click="'+l+'toggleDefault()">'+t(e.map[e.type].label)+'<i mxs="_zs_gallerycu:a" class="mc-iconfont mx-trigger-arrow _zs_gallerygP">&#xe692;</i></a>'},mixins:[a],init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=e.textKey||"text",t=e.valueKey||"value",g=e.parentKey||"pValue",a=[];(e.fields||[]).forEach(function(e){a.push({text:e[r],value:e[t],pValue:e[g],tip:e.tip||""})});var i=[];(e.parents||[]).forEach(function(e){i.push({text:e[r],value:e[t]})});var s=(e.customs||[]).map(function(e){return""+e}),o=(e.defaults||[]).map(function(e){return""+e});0==s.length&&(s=o);var _=+e.limit||0,n=e.sortable+""=="true",p=e.lineNumber||(n?4:5),d=e.custom+""=="true"?2:1,y={1:{label:"默认数据",list:o},2:{label:"自定义数据",list:s}};return this.updater.set({parents:i,fields:a,sortable:n,lineNumber:p,limit:_,map:y,type:d}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"toggleDefault<click>":function(e){var l=this.updater.get("type");l=1==l?2:1,this.updater.digest({type:l}),this.__af("btn-switch")},__af:function(e){var l=this.updater.get("type"),r=this.updater.get("map");g("#"+this.id).trigger({type:"change",triggerType:e,defaults:r[1].list,custom:2==l,customs:r[2].list})},"show<click>":function(e){e.preventDefault();var l=this,r=l.updater,t=(r.get("sortable"),g.extend(!0,{},r.get()));t.selected=t.map[t.type].list,t.callback=function(e){var t=r.get("map");t[2].list=e.selected,l.updater.digest({type:2,map:t}),l.__af("dialog-setting")},l.mxModal("mx-indics/dialog",t,{width:1e3,closable:!1,card:!1})}})});