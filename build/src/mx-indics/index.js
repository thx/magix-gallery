define("mx-indics/index",["magix","$","mx-dialog/index"],(l,e,t)=>{var a=l("magix"),r=l("$"),_=l("mx-dialog/index");a.applyStyle("_zs_galleryX",'._zs_galleryhs{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-indics/index"]{display:inline-block;vertical-align:middle}._zs_galleryht{position:relative;height:100%}._zs_galleryht ._zs_galleryhu{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid #e6e6e6}._zs_galleryht ._zs_galleryhv{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryht ._zs_galleryhv ._zs_galleryhw{padding:16px 24px}._zs_galleryht ._zs_galleryhv ._zs_galleryhw:nth-of-type(2n){background-color:#fafafa}._zs_galleryht ._zs_galleryhv ._zs_galleryhx{float:left;padding:8px 0;color:#999}._zs_galleryht ._zs_galleryhv ._zs_galleryhy{float:left;width:100%}._zs_galleryht ._zs_galleryhv ._zs_galleryhy ._zs_galleryhz{float:left;width:20%;padding:8px 0}._zs_galleryht ._zs_galleryhv ._zs_galleryhy ._zs_galleryhz ._zs_galleryhA{position:relative;top:1px;left:4px;font-size:14px;color:#ccc}._zs_galleryht._zs_galleryhB ._zs_galleryhx{width:15%}._zs_galleryht._zs_galleryhB ._zs_galleryhy{width:85%}._zs_galleryht._zs_galleryhB ._zs_galleryhy ._zs_galleryhz{width:25%}._zs_galleryht._zs_galleryhC ._zs_galleryhy{width:100%}._zs_galleryht._zs_galleryhC ._zs_galleryhy ._zs_galleryhz{width:25%}._zs_galleryht._zs_galleryhB._zs_galleryhC ._zs_galleryhx{width:20%}._zs_galleryht._zs_galleryhB._zs_galleryhC ._zs_galleryhy{width:80%}._zs_galleryht._zs_galleryhB._zs_galleryhC ._zs_galleryhy ._zs_galleryhz{width:33%}._zs_galleryht._zs_galleryhC{padding-right:32%}._zs_galleryht._zs_galleryhC ._zs_galleryhv{right:32%;border-right:1px solid #e6e6e6}._zs_galleryht._zs_galleryhC ._zs_galleryhD{position:absolute;top:0;right:0;width:32%;height:98px}._zs_galleryht._zs_galleryhC ._zs_galleryhD ._zs_galleryhE{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid #e6e6e6}._zs_galleryht._zs_galleryhC ._zs_galleryhD ._zs_galleryhF{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:#fafafa}._zs_galleryht._zs_galleryhC ._zs_galleryhG{position:absolute;top:98px;right:0;bottom:0;width:32%;padding:0 24px 16px;overflow-y:scroll;background-color:#fafafa}._zs_galleryht._zs_galleryhC ._zs_galleryhG ._zs_galleryhH{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:move}._zs_galleryht._zs_galleryhC ._zs_galleryhG ._zs_galleryhH:last-child{margin-bottom:0}._zs_galleryhI{position:relative;color:#333}._zs_galleryhI:hover{color:#333;border-color:#ccc}._zs_galleryhI:focus{border-color:#ccc}._zs_galleryhJ{margin-right:10px}._zs_galleryhJ ._zs_galleryhK{position:relative;top:2px}._zs_galleryhL{padding-right:20px}._zs_galleryhL ._zs_galleryhM{position:absolute;top:0;right:0;width:20px;height:32px;line-height:32px;text-align:center;font-size:18px}'),t.exports=a.View.extend({tmpl:function(l,e,t,a,r,_,s,i){if(t||(t=l),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},h=/[&<>"'`]/g,o=function(l){return"&"+g[l]+";"};r=function(l){return""+(null==l?"":l)},a=function(l){return r(l).replace(h,o)}}if(!_){var y={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return y[l]},p=/[!')(*]/g;_=function(l){return encodeURIComponent(r(l)).replace(p,n)}}if(!i){var z=/[\\'"]/g;i=function(l){return r(l).replace(z,"\\$&")}}var d="";return d+='<a mxs="_zs_galleryb*:_" href="javascript:;" class="input _zs_galleryhI _zs_galleryhJ" mx-click="'+e+'show()"><i class="mc-iconfont _zs_galleryhK">&#xe731;</i></a><a mxa="_zs_galleryb*:_" href="javascript:;" class="input _zs_galleryhI _zs_galleryhL" mx-click="'+e+'toggleDefault()">'+a(l.map[l.type].label)+'<i mxs="_zs_galleryb*:a" class="mc-iconfont _zs_galleryhM">&#xe692;</i></a>'},mixins:[_],init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this.updater.altered(),t=l.textKey||"text",a=l.valueKey||"value",r=l.parentKey||"pValue",_=[];(l.fields||[]).forEach(function(l){_.push({text:l[t],value:l[a],pValue:l[r],tip:l.tip||""})});var s=[];(l.parents||[]).forEach(function(l){s.push({text:l[t],value:l[a]})});var i=(l.customs||[]).map(function(l){return""+l}),g=(l.defaults||[]).map(function(l){return""+l});0==i.length&&(i=g);var h=+l.limit||0,o=l.sortable+""=="true",y=l.custom+""=="true"?2:1,n={1:{label:"默认数据",list:g},2:{label:"自定义数据",list:i}};return this.updater.set({parents:s,fields:_,sortable:o,limit:h,map:n,type:y}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"toggleDefault<click>":function(l){var e=this.updater.get("type");e=1==e?2:1,this.updater.digest({type:e}),this.__cd("btn-switch")},__cd:function(l){var e=this.updater.get("type"),t=this.updater.get("map");r("#"+this.id).trigger({type:"change",triggerType:l,defaults:t[1].list,custom:2==e,customs:t[2].list})},"show<click>":function(l){l.preventDefault();var e=this,t=e.updater,a=(t.get("sortable"),r.extend(!0,{},t.get()));a.selected=a.map[a.type].list,a.callback=function(l){var a=t.get("map");a[2].list=l.selected,e.updater.digest({type:2,map:a}),e.__cd("dialog-setting")},e.mxModal("mx-indics/dialog",a,{width:800,closable:!1,card:!1})}})});