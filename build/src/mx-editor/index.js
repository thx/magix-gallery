define("mx-editor/index",["magix","mx-form/index","mx-form/validator"],(t,e,i)=>{var n=t("magix"),r=t("mx-form/index"),l=t("mx-form/validator");n.applyStyle("_zs_galleryK","._zs_galleryfm{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryfn ._zs_galleryfo{display:none}._zs_galleryfn ._zs_galleryfp{display:inline-block;word-break:break-all}._zs_galleryfn ._zs_galleryfp ._zs_galleryfq{opacity:0;position:relative;top:2px;left:2px;color:#ccc;cursor:pointer}._zs_galleryfn ._zs_galleryfp:hover ._zs_galleryfq{opacity:1}._zs_galleryfn._zs_galleryfs ._zs_galleryfo{display:inline-block}._zs_galleryfn._zs_galleryfs ._zs_galleryfp{display:none}");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,l,a,s){if(i||(i=t),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(t){return"&"+o[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(_,d)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return c[t]},u=/[!')(*]/g;l=function(t){return encodeURIComponent(r(t)).replace(u,p)}}if(!s){var f=/[\\'"]/g;s=function(t){return r(t).replace(f,"\\$&")}}a||(a=function(t,e,i,n){for(n=t[g];--n;)if(t[i=g+n]===e)return i;return t[i=g+t[g]++]=e,i});var g="",y="",m=t.editing,x=t.small,h=t.width,v=t.viewId,z=t.content,b=t.rules,k=t.dis;return y+='<div mxv class="_zs_galleryfn ',m&&(y+=" _zs_galleryfs "),y+='"><input mxe="'+e+"_0\" mxc=\"[{p:'content',f:'"+a(i,b)+'\'}]" class="input ',x&&(y+=" input-small "),y+=' _zs_galleryfo" style="width: '+n(h)+'px;" id="'+n(v)+'_input" value="'+n(z)+'" mx-keyup="'+e+'__cj()" mx-focusout="'+e+'__cj()"/><div mxa="_zs_gallerybb:_" class="_zs_galleryfp">'+r(k)+'<i mxs="_zs_gallerybb:_" class="mc-iconfont operations _zs_galleryfq" mx-click="'+e+'__n()">&#xe698;</i></div></div>'},mixins:[r,l],init:function(t){var e=this;e.updater.snapshot(),e.assign(t),e.on("destroy",function(){clearTimeout(e.__ch)})},assign:function(t){var e=this.updater.altered(),i=t.rules||{},n=t.content,r=/^true$/i.test(t.small),l=t.tmpl||"${content}";return this.__ci=n,this.updater.set({viewId:this.id,tmpl:l,dis:l.replace("${content}",n),content:n,rules:i,small:r,width:t.width||140,editing:!1}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__n<click>":function(t){t.preventDefault(),this.updater.digest({editing:!0}),$("#"+this.id+"_input").focus()},"__cj<keyup>":function(t){var e=this.isValid();if(13==t.keyCode&&e){var i=t.target.value,n=this.updater.get("tmpl");this.updater.digest({editing:!1,dis:n.replace("${content}",i),content:i})}},"__cj<focusout>":function(t){t.stopPropagation();if(this.isValid()){var e=t.target.value,i=this.updater.get("tmpl");this.updater.digest({editing:!1,dis:i.replace("${content}",e),content:e});e=this.updater.get("content");this.__ci!=e&&$("#"+this.id).trigger({type:"edit",editText:e})}}})});