define("mx-search/index",["magix","$","../mx-util/view","../mx-util/monitor"],(t,e,i)=>{"use strict";e.__esModule=!0;var _=t("magix"),a=t("$"),s=t("../mx-util/view"),r=t("../mx-util/monitor");_.default.applyStyle("_zs_galleryar","._zs_galleryjp,._zs_galleryjq{position:relative;height:32px}._zs_galleryjq ._zs_galleryjr{left:auto;right:0}._zs_galleryjp ._zs_galleryjr{left:0;right:auto}"),e.default=s.extend({tmpl:function(t,e,i,_,a,s,r,c){if(i||(i=t),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,u=function(t){return"&"+l[t]+";"};a=function(t){return""+(null==t?"":t)},_=function(t){return a(t).replace(n,u)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(t){return o[t]},p=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(p,h)}}if(!c){var f=/[\\'"]/g;c=function(t){return a(t).replace(f,"\\$&")}}r||(r=function(t,e,i,_){for(_=t[d];--_;)if(t[i=d+_]===e)return i;return t[i=d+t[d]++]=e,i});var d="",g="",m=t.align,v=t.placeholder,x=t.searchValue,y=t.spm,V=t.list,k=t.show,j=t.searchKey;g+='<div mxv class="search-box ',g+="right"==m?" _zs_galleryjq ":" _zs_galleryjp ",g+='"><i mxs="_zs_galleryd,:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+_(v)+'" autocomplete="off" value="'+_(x)+'" mx-keyup="'+e+'__j()" mx-paste="'+e+'__j()" mx-focusin="'+e+'__j()" mx-focusout="'+e+'__p()" mx-change="'+e+'__p()" ',y&&(g+=' data-spm-click="'+_(y)+'i" '),g+='/><div class="mx-output mx-output-bottom ',V.length>1&&x&&k&&(g+=" mx-output-open "),g+=' _zs_galleryjr"><ul mxa="_zs_galleryd,:_" class="mx-output-list">';for(var z=0,w=V.length;z<w;z++){var K=V[z];g+='<li mxa="_zs_galleryd,:a" class="mx-output-item"><span class="mx-output-link ',j==K.value&&(g+=" mx-output-link-active "),g+='" mx-click="'+e+"__af({item:'"+r(i,K)+"'})\" ",y&&(g+=' data-spm-click="'+_(y)+_(K.value)+'" '),g+=">"+_(K.prefix)+_(x)+_(K.suffix)+"</span></li>"}return g+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t),r.__k(),e.on("destroy",function(){r.__l(e),r.__m(),e.__ca&&clearTimeout(e.__ca)})},assign:function(t){var e=this.updater.altered();this.__cV=t.searchKey||"",this.__cW=this.__cV,this.__cX=t.searchValue||"",this.__cY=t.placeholder||"",this.__cZ=t.align||"left";var i=[];if(t.list){var _=t.listText||"text",s=t.listValue||"value";try{i=new Function("return "+t.list)()}catch(e){i=t.list}if(i=i.map(function(t){var e=(t.tmpl||"搜索含有 “${content}” 的"+t[_]).split("${content}");return{prefix:e[0],suffix:e[1],text:t[_],value:t[s]}}),!this.__cY){var r=i.map(function(t){return t.text});this.__cY=a.unique(r).join("/")}}else this.__cY||(this.__cY="搜索");return this.__d_=i,this.__a=a("#"+this.id),this.updater.set({list:this.__d_,searchValue:this.__cX,searchKey:this.__cV,placeholder:this.__cY,align:this.__cZ}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__j<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__ca&&clearTimeout(e.__ca);var i=e.updater.get("show"),_=e.__d_;if(40==t.keyCode||38==t.keyCode){if(i){for(var s=-1,r=e.__cV,c=0;c<_.length;c++)if(_[c].value==r){s=c;break}40==t.keyCode&&(s+=1)>=_.length&&(s=0),38==t.keyCode&&(s-=1)<0&&(s=_.length-1),e.updater.digest({searchKey:e.__cV=_[s].value})}}else 13==t.keyCode?(!e.__cV&&_&&_.length>0&&(e.__cV=_[0].value),e.__cW=e.__cV,e.__cX=a.trim(t.eventTarget.value),e.__q(),e.__ai()):e.__ca=setTimeout(e.wrapAsync(function(){e.__cX=a.trim(t.eventTarget.value),e.__r()}),250)},__q:function(){this.__cV!=this.__cW&&(this.__cV=this.__cW),this.updater.digest({searchKey:this.__cV,searchValue:this.__cX,show:!1}),r.__l(this)},__r:function(){this.updater.digest({searchKey:this.__cV,searchValue:this.__cX,show:!0}),r.__t(this)},__o:function(t){return _.default.inside(t,this.id)},"__p<change,focusout>":function(t){t.stopPropagation()},"__af<click>":function(t){t.stopPropagation();var e=t.params.item;this.updater.digest({searchKey:this.__cV=this.__cW=e.value,show:!1}),this.__ai()},__ai:function(){var t=this.__cX;this.__a.trigger({type:"change",searchKey:this.__cV,searchValue:t,selected:t}),this.__a.trigger({type:"search",searchKey:this.__cV,searchValue:t})}})});