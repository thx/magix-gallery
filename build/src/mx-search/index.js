define("mx-search/index",["magix","$","../mx-monitor/index"],(t,a,r)=>{var s=t("magix"),e=t("$");s.applyStyle("_zs_galleryau","._zs_gallerykR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryu{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryu{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryv{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryv{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryw{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryw{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryx{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryx{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryy{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryy{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerykS,._zs_gallerykT{position:relative;height:32px}._zs_gallerykS ._zs_gallerykU,._zs_gallerykT ._zs_gallerykU{display:none;position:absolute;top:100%;min-width:100%;z-index:99;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV:hover,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV:hover{background-color:#f0f0f0}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:active,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:focus,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:hover,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:active,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:focus,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerykS ._zs_gallerykU._zs_gallerykX,._zs_gallerykT ._zs_gallerykU._zs_gallerykX{display:block;-webkit-animation:_zs_galleryu .25s ease-out;animation:_zs_galleryu .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerykT ._zs_gallerykU{right:0}._zs_gallerykS ._zs_gallerykU{left:0}");var n=t("../mx-monitor/index");r.exports=s.View.extend({tmpl:function(t,a,r,s,e,n,l,o){if(r||(r=t),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,f=function(t){return"&"+m[t]+";"};e=function(t){return""+(null==t?"":t)},s=function(t){return e(t).replace(_,f)}}if(!n){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},k=function(t){return i[t]},g=/[!')(*]/g;n=function(t){return encodeURIComponent(e(t)).replace(g,k)}}if(!o){var p=/[\\'"]/g;o=function(t){return e(t).replace(p,"\\$&")}}l||(l=function(t,a,r,s){for(s=t[y];--s;)if(t[r=y+s]===a)return r;return t[r=y+t[y]++]=a,r});var y="",z="",d=t.align,u=t.placeholder,c=t.searchValue,h=t.list,x=t.show,b=t.searchKey;z+='<div mxv class="search-box ',z+="right"==d?" _zs_gallerykT ":" _zs_gallerykS ",z+='"><i mxs="_zs_gallerydu:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+s(u)+'" autocomplete="off" value="'+s(c)+'" mx-keyup="'+a+'__e()" mx-paste="'+a+'__e()" mx-focusin="'+a+'__e()" mx-focusout="'+a+'__m()" mx-change="'+a+'__m()"/><ul class="_zs_gallerykU ',h.length>1&&c&&x&&(z+=" _zs_gallerykX "),z+='">';for(var Y=0,w=h.length;Y<w;Y++){var v=h[Y];z+='<li class="_zs_gallerykV ',b==v.value&&(z+=" _zs_gallerykW "),z+='" mx-click="'+a+"__ab({item:'"+l(r,v)+"'})\">"+s(v.prefix)+s(c)+s(v.suffix)+"</li>"}return z+="</ul></div>"},init:function(t){var a=this;a.updater.snapshot(),a.assign(t),n.__f(),a.on("destroy",function(){n.__g(a),n.__h(),a.__bU&&clearTimeout(a.__bU)})},assign:function(t){var a=this.updater.altered();this.__db=t.searchKey||"",this.__dc=this.__db,this.__dd=t.searchValue||"",this.__de=t.placeholder||"",this.__df=t.align||"left";var r=[];if(t.list){var s=t.listText||"text",n=t.listValue||"value";try{r=new Function("return "+t.list)()}catch(a){r=t.list}if(r=r.map(function(t){var a=(t.tmpl||"搜索含有“${content}”的"+t[s]).split("${content}");return{prefix:a[0],suffix:a[1],text:t[s],value:t[n]}}),!this.__de){var l=r.map(function(t){return t.text});this.__de=e.unique(l).join("/")}}else this.__de||(this.__de="搜索");return this.__dg=r,this.__k=e("#"+this.id),this.updater.set({viewId:this.id,list:this.__dg,searchValue:this.__dd,searchKey:this.__db,placeholder:this.__de,align:this.__df}),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__e<focusin,keyup,paste>":function(t){t.stopPropagation();var a=this;a.__bU&&clearTimeout(a.__bU);var r=a.updater.get("show"),s=a.__dg;if(40==t.keyCode||38==t.keyCode){if(r){for(var n=-1,l=a.__db,o=0;o<s.length;o++)if(s[o].value==l){n=o;break}40==t.keyCode&&(n+=1)>=s.length&&(n=0),38==t.keyCode&&(n-=1)<0&&(n=s.length-1),a.updater.digest({searchKey:a.__db=s[n].value})}}else 13==t.keyCode?(!a.__db&&s&&s.length>0&&(a.__db=s[0].value),a.__dc=a.__db,a.__dd=e.trim(t.eventTarget.value),a.__n(),a.__ae()):a.__bU=setTimeout(a.wrapAsync(function(){a.__dd=e.trim(t.eventTarget.value),a.__o()}),300)},__n:function(){this.__db!=this.__dc&&(this.__db=this.__dc),this.updater.digest({searchKey:this.__db,searchValue:this.__dd,show:!1}),n.__g(this)},__o:function(){this.updater.digest({searchKey:this.__db,searchValue:this.__dd,show:!0}),n.__q(this)},__l:function(t){return s.inside(t,this.id)},"__m<change,focusout>":function(t){t.stopPropagation()},"__ab<click>":function(t){t.stopPropagation();var a=t.params.item;this.updater.digest({searchKey:this.__db=this.__dc=a.value,show:!1}),this.__ae()},__ae:function(){this.__k.trigger({type:"search",searchKey:this.__db,searchValue:this.__dd})}})});