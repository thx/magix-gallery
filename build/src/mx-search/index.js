define("mx-search/index",["magix","$","../mx-monitor/index"],(t,a,r)=>{var s=t("magix"),e=t("$");s.applyStyle("_zs_galleryau","._zs_galleryle{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryA{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryA{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryB{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryB{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryE{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryE{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylf,._zs_gallerylg{position:relative;height:32px}._zs_gallerylf ._zs_gallerylh,._zs_gallerylg ._zs_gallerylh{display:none;position:absolute;top:100%;min-width:100%;z-index:99;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylf ._zs_gallerylh ._zs_galleryli,._zs_gallerylg ._zs_gallerylh ._zs_galleryli{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylf ._zs_gallerylh ._zs_galleryli:hover,._zs_gallerylg ._zs_gallerylh ._zs_galleryli:hover{background-color:#f0f0f0}._zs_gallerylf ._zs_gallerylh ._zs_galleryli._zs_gallerylj,._zs_gallerylf ._zs_gallerylh ._zs_galleryli._zs_gallerylj:active,._zs_gallerylf ._zs_gallerylh ._zs_galleryli._zs_gallerylj:focus,._zs_gallerylf ._zs_gallerylh ._zs_galleryli._zs_gallerylj:hover,._zs_gallerylg ._zs_gallerylh ._zs_galleryli._zs_gallerylj,._zs_gallerylg ._zs_gallerylh ._zs_galleryli._zs_gallerylj:active,._zs_gallerylg ._zs_gallerylh ._zs_galleryli._zs_gallerylj:focus,._zs_gallerylg ._zs_gallerylh ._zs_galleryli._zs_gallerylj:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylf ._zs_gallerylh._zs_gallerylk,._zs_gallerylg ._zs_gallerylh._zs_gallerylk{display:block;-webkit-animation:_zs_galleryA .25s ease-out;animation:_zs_galleryA .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerylg ._zs_gallerylh{right:0}._zs_gallerylf ._zs_gallerylh{left:0}");var l=t("../mx-monitor/index");r.exports=s.View.extend({tmpl:function(t,a,r,s,e,l,n,o){if(r||(r=t),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,f=function(t){return"&"+m[t]+";"};e=function(t){return""+(null==t?"":t)},s=function(t){return e(t).replace(_,f)}}if(!l){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return i[t]},g=/[!')(*]/g;l=function(t){return encodeURIComponent(e(t)).replace(g,c)}}if(!o){var p=/[\\'"]/g;o=function(t){return e(t).replace(p,"\\$&")}}n||(n=function(t,a,r,s){for(s=t[y];--s;)if(t[r=y+s]===a)return r;return t[r=y+t[y]++]=a,r});var y="",h="",z=t.align,u=t.placeholder,x=t.searchValue,Y=t.list,k=t.show,d=t.searchKey;h+='<div mxv class="search-box ',h+="right"==z?" _zs_gallerylg ":" _zs_gallerylf ",h+='"><i mxs="_zs_galleryc;:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+s(u)+'" autocomplete="off" value="'+s(x)+'" mx-keyup="'+a+'__e()" mx-paste="'+a+'__e()" mx-focusin="'+a+'__e()" mx-focusout="'+a+'__l()" mx-change="'+a+'__l()"/><ul class="_zs_gallerylh ',Y.length>1&&x&&k&&(h+=" _zs_gallerylk "),h+='">';for(var b=0,w=Y.length;b<w;b++){var v=Y[b];h+='<li class="_zs_galleryli ',d==v.value&&(h+=" _zs_gallerylj "),h+='" mx-click="'+a+"__aa({item:'"+n(r,v)+"'})\">"+s(v.prefix)+s(x)+s(v.suffix)+"</li>"}return h+="</ul></div>"},init:function(t){var a=this;a.updater.snapshot(),a.assign(t),l.__f(),a.on("destroy",function(){l.__g(a),l.__h(),a.__bK&&clearTimeout(a.__bK)})},assign:function(t){var a=this.updater.altered();this.__cM=t.searchKey||"",this.__cN=this.__cM,this.__cO=t.searchValue||"",this.__cP=t.placeholder||"",this.__cQ=t.align||"left";var r=[];if(t.list){var s=t.listText||"text",l=t.listValue||"value";try{r=new Function("return "+t.list)()}catch(a){r=t.list}if(r=r.map(function(t){var a=(t.tmpl||"搜索含有“${content}”的"+t[s]).split("${content}");return{prefix:a[0],suffix:a[1],text:t[s],value:t[l]}}),!this.__cP){var n=r.map(function(t){return t.text});this.__cP=e.unique(n).join("/")}}else this.__cP||(this.__cP="搜索");return this.__cR=r,this.__j=e("#"+this.id),this.updater.set({viewId:this.id,list:this.__cR,searchValue:this.__cO,searchKey:this.__cM,placeholder:this.__cP,align:this.__cQ}),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__e<focusin,keyup,paste>":function(t){t.stopPropagation();var a=this;a.__bK&&clearTimeout(a.__bK);var r=a.updater.get("show"),s=a.__cR;if(40==t.keyCode||38==t.keyCode){if(r){for(var l=-1,n=a.__cM,o=0;o<s.length;o++)if(s[o].value==n){l=o;break}40==t.keyCode&&(l+=1)>=s.length&&(l=0),38==t.keyCode&&(l-=1)<0&&(l=s.length-1),a.updater.digest({searchKey:a.__cM=s[l].value})}}else 13==t.keyCode?(!a.__cM&&s&&s.length>0&&(a.__cM=s[0].value),a.__cN=a.__cM,a.__cO=e.trim(t.eventTarget.value),a.__m(),a.__cd()):a.__bK=setTimeout(a.wrapAsync(function(){a.__cO=e.trim(t.eventTarget.value),a.__n()}),300)},__m:function(){this.__cM!=this.__cN&&(this.__cM=this.__cN),this.updater.digest({searchKey:this.__cM,searchValue:this.__cO,show:!1}),l.__g(this)},__n:function(){this.updater.digest({searchKey:this.__cM,searchValue:this.__cO,show:!0}),l.__p(this)},__k:function(t){return s.inside(t,this.id)},"__l<change,focusout>":function(t){t.stopPropagation()},"__aa<click>":function(t){t.stopPropagation();var a=t.params.item;this.updater.digest({searchKey:this.__cM=this.__cN=a.value,show:!1}),this.__cd()},__cd:function(){this.__j.trigger({type:"search",searchKey:this.__cM,searchValue:this.__cO})}})});