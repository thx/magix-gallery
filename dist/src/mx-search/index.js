define("mx-search/index",["magix","$","../mx-util/monitor"],(t,e,i)=>{var _=t("magix"),a=t("$");_.applyStyle("_zs_galleryas","._zs_galleryji,._zs_galleryjj{position:relative;height:32px}._zs_galleryjj ._zs_galleryjk{left:auto;right:0}._zs_galleryji ._zs_galleryjk{left:0;right:auto}");var s=t("../mx-util/monitor");i.exports=_.View.extend({tmpl:function(t,e,i,_,a,s,r,c){if(i||(i=t),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,u=function(t){return"&"+n[t]+";"};a=function(t){return""+(null==t?"":t)},_=function(t){return a(t).replace(l,u)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(t){return o[t]},p=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(p,h)}}if(!c){var f=/[\\'"]/g;c=function(t){return a(t).replace(f,"\\$&")}}r||(r=function(t,e,i,_){for(_=t[g];--_;)if(t[i=g+_]===e)return i;return t[i=g+t[g]++]=e,i});var g="",d="",m=t.align,v=t.placeholder,x=t.searchValue,y=t.list,k=t.show,R=t.searchKey;d+='<div mxv class="search-box ',d+="right"==m?" _zs_galleryjj ":" _zs_galleryji ",d+='"><i mxs="_zs_gallerydX:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+_(v)+'" autocomplete="off" value="'+_(x)+'" mx-keyup="'+e+'__g()" mx-paste="'+e+'__g()" mx-focusin="'+e+'__g()" mx-focusout="'+e+'__m()" mx-change="'+e+'__m()"/><div class="mx-output mx-output-bottom ',y.length>1&&x&&k&&(d+=" mx-output-open "),d+=' _zs_galleryjk"><ul mxa="_zs_gallerydX:_" class="mx-output-list">';for(var j=0,z=y.length;j<z;j++){var T=y[j];d+='<li mxa="_zs_gallerydX:a" class="mx-output-item"><span class="mx-output-link ',R==T.value&&(d+=" mx-output-link-active "),d+='" mx-click="'+e+"__ac({item:'"+r(i,T)+"'})\">"+_(T.prefix)+_(x)+_(T.suffix)+"</span></li>"}return d+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t),s.__h(),e.on("destroy",function(){s.__i(e),s.__j(),e.__bZ&&clearTimeout(e.__bZ)})},assign:function(t){var e=this.updater.altered();this.__cR=t.searchKey||"",this.__cS=this.__cR,this.__cT=t.searchValue||"",this.__cU=t.placeholder||"",this.__cV=t.align||"left";var i=[];if(t.list){var _=t.listText||"text",s=t.listValue||"value";try{i=new Function("return "+t.list)()}catch(e){i=t.list}if(i=i.map(function(t){var e=(t.tmpl||"搜索含有 “${content}” 的"+t[_]).split("${content}");return{prefix:e[0],suffix:e[1],text:t[_],value:t[s]}}),!this.__cU){var r=i.map(function(t){return t.text});this.__cU=a.unique(r).join("/")}}else this.__cU||(this.__cU="搜索");return this.__cW=i,this.__a=a("#"+this.id),this.updater.set({viewId:this.id,list:this.__cW,searchValue:this.__cT,searchKey:this.__cR,placeholder:this.__cU,align:this.__cV}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__g<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__bZ&&clearTimeout(e.__bZ);var i=e.updater.get("show"),_=e.__cW;if(40==t.keyCode||38==t.keyCode){if(i){for(var s=-1,r=e.__cR,c=0;c<_.length;c++)if(_[c].value==r){s=c;break}40==t.keyCode&&(s+=1)>=_.length&&(s=0),38==t.keyCode&&(s-=1)<0&&(s=_.length-1),e.updater.digest({searchKey:e.__cR=_[s].value})}}else 13==t.keyCode?(!e.__cR&&_&&_.length>0&&(e.__cR=_[0].value),e.__cS=e.__cR,e.__cT=a.trim(t.eventTarget.value),e.__n(),e.__af()):e.__bZ=setTimeout(e.wrapAsync(function(){e.__cT=a.trim(t.eventTarget.value),e.__o()}),250)},__n:function(){this.__cR!=this.__cS&&(this.__cR=this.__cS),this.updater.digest({searchKey:this.__cR,searchValue:this.__cT,show:!1}),s.__i(this)},__o:function(){this.updater.digest({searchKey:this.__cR,searchValue:this.__cT,show:!0}),s.__q(this)},__l:function(t){return _.inside(t,this.id)},"__m<change,focusout>":function(t){t.stopPropagation()},"__ac<click>":function(t){t.stopPropagation();var e=t.params.item;this.updater.digest({searchKey:this.__cR=this.__cS=e.value,show:!1}),this.__af()},__af:function(){this.__a.trigger({type:"search",searchKey:this.__cR,searchValue:this.__cT})}})});