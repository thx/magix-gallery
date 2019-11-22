define("mx-search/index",["magix","$","../mx-util/view","../mx-util/monitor"],(t,e,_)=>{"use strict";e.__esModule=!0;var i=t("magix"),a=t("$"),s=t("../mx-util/view"),r=t("../mx-util/monitor");i.default.applyStyle("_zs_galleryas","._zs_galleryjG,._zs_galleryjH{position:relative;height:32px}._zs_galleryjH ._zs_galleryjI{left:auto;right:0}._zs_galleryjG ._zs_galleryjI{left:0;right:auto}"),e.default=s.extend({tmpl:function(t,e,_,i,a,s,r,l){if(_||(_=t),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,u=function(t){return"&"+c[t]+";"};a=function(t){return""+(null==t?"":t)},i=function(t){return a(t).replace(n,u)}}if(!s){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return h[t]},d=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(d,o)}}if(!l){var p=/[\\'"]/g;l=function(t){return a(t).replace(p,"\\$&")}}r||(r=function(t,e,_,i){for(i=t[f];--i;)if(t[_=f+i]===e)return _;return t[_=f+t[f]++]=e,_});var f="",g="",m=t.align,v=t.placeholder,x=t.searchValue,y=t.spm,k=t.list,Y=t.show,j=t.searchKey;g+='<div mxv class="search-box ',g+="right"==m?" _zs_galleryjH ":" _zs_galleryjG ",g+='"><i mxs="_zs_galleryd-:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+i(v)+'" autocomplete="off" value="'+i(x)+'" mx-keyup="'+e+'__j()" mx-paste="'+e+'__j()" mx-focusin="'+e+'__j()" mx-focusout="'+e+'__p()" mx-change="'+e+'__p()" ',y&&(g+=' data-spm-click="'+i(y)+'i" '),g+='/><div class="mx-output mx-output-bottom ',k.length>1&&x&&Y&&(g+=" mx-output-open "),g+=' _zs_galleryjI"><ul mxa="_zs_galleryd-:_" class="mx-output-list">';for(var z=0,w=k.length;z<w;z++){var K=k[z];g+='<li mxa="_zs_galleryd-:a" class="mx-output-item"><span class="mx-output-link ',j==K.value&&(g+=" mx-output-link-active "),g+='" mx-click="'+e+"__ah({item:'"+r(_,K)+"'})\" ",y&&(g+=' data-spm-click="'+i(y)+i(K.value)+'" '),g+=">"+i(K.prefix)+i(x)+i(K.suffix)+"</span></li>"}return g+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t),r.__k(),e.on("destroy",function(){r.__l(e),r.__m(),e.__cd&&clearTimeout(e.__cd)})},assign:function(t){var e=this.updater.altered();this.__cY=t.searchKey||"",this.__cZ=this.__cY,this.__d_=t.searchValue||"",this.__da=t.placeholder||"",this.__db=t.align||"left";var _=[];if(t.list){var i=t.listText||"text",s=t.listValue||"value";try{_=new Function("return "+t.list)()}catch(e){_=t.list}if(_=_.map(function(t){var e=(t.tmpl||"搜索含有 “${content}” 的"+t[i]).split("${content}");return{prefix:e[0],suffix:e[1],text:t[i],value:t[s]}}),!this.__da){var r=_.map(function(t){return t.text});this.__da=a.unique(r).join("/")}}else this.__da||(this.__da="搜索");return this.__dc=_,this.__a=a("#"+this.id),this.updater.set({list:this.__dc,searchValue:this.__d_,searchKey:this.__cY,placeholder:this.__da,align:this.__db}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__j<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__cd&&clearTimeout(e.__cd);var _=e.updater.get("show"),i=e.__dc;if(40==t.keyCode||38==t.keyCode){if(_){for(var s=-1,r=e.__cY,l=0;l<i.length;l++)if(i[l].value==r){s=l;break}40==t.keyCode&&(s+=1)>=i.length&&(s=0),38==t.keyCode&&(s-=1)<0&&(s=i.length-1),e.updater.digest({searchKey:e.__cY=i[s].value})}}else 13==t.keyCode?(!e.__cY&&i&&i.length>0&&(e.__cY=i[0].value),e.__cZ=e.__cY,e.__d_=a.trim(t.eventTarget.value),e.__q(),e.__al()):e.__cd=setTimeout(e.wrapAsync(function(){e.__d_=a.trim(t.eventTarget.value),e.__r()}),250)},__q:function(){this.__cY!=this.__cZ&&(this.__cY=this.__cZ),this.updater.digest({searchKey:this.__cY,searchValue:this.__d_,show:!1}),r.__l(this)},__r:function(){this.updater.digest({searchKey:this.__cY,searchValue:this.__d_,show:!0}),r.__t(this)},__o:function(t){return i.default.inside(t,this.id)},"__p<change,focusout>":function(t){t.stopPropagation()},"__ah<click>":function(t){t.stopPropagation();var e=t.params.item;this.updater.digest({searchKey:this.__cY=this.__cZ=e.value,show:!1}),this.__al()},__al:function(){var t=this.__d_;this.__a.trigger({type:"change",searchKey:this.__cY,searchValue:t,selected:t}),this.__a.trigger({type:"search",searchKey:this.__cY,searchValue:t})}})});