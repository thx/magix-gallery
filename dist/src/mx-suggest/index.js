define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(t,e,i)=>{var a=t("magix"),s=t("$"),l=t("../mx-medusa/util"),_=t("../mx-util/monitor");a.applyStyle("_zs_galleryaw",'[mx-view*="mx-suggest/index"]{position:relative;display:inline-block}[mx-view*="mx-suggest/index"] ._zs_galleryjW{position:absolute;right:6px;top:50%;width:12px;height:12px;font-size:12px;margin-top:-6px;color:#ccc;cursor:pointer;transition:all var(--duration);background-color:#fff}[mx-view*="mx-suggest/index"] ._zs_galleryjW:hover{color:#999}'),i.exports=a.View.extend({tmpl:function(t,e,i,a,s,l,_,n){if(i||(i=t),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(t){return"&"+r[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(o,u)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return d[t]},p=/[!')(*]/g;l=function(t){return encodeURIComponent(s(t)).replace(p,c)}}if(!n){var h=/[\\'"]/g;n=function(t){return s(t).replace(h,"\\$&")}}_||(_=function(t,e,i,a){for(a=t[f];--a;)if(t[i=f+a]===e)return i;return t[i=f+t[f]++]=e,i});var f="",x="",g=t.placeholder,v=t.viewId,m=t.selectedText,y=t.show,k=t.loading,w=t.list,z=t.selectedValue,T=t.emptyText;if(x+='<div mxv mxa="_zs_galleryeK:_" class="search-box"><i mxs="_zs_galleryeK:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+a(g)+'" autocomplete="off" id="'+a(v)+'_input" value="'+a(m)+'" mx-keyup="'+e+'__dJ()" mx-paste="'+e+'__dJ()" mx-focusin="'+e+'__dJ()" mx-focusout="'+e+'__p()" mx-change="'+e+'__p()"/>',m&&(x+='<i mxs="_zs_galleryeK:a" class="mc-iconfont _zs_galleryjW" mx-click="'+e+'__dK()">&#xe6f8;</i>'),x+='<div class="mx-output mx-output-bottom ',y&&(x+=" mx-output-open "),x+='"><ul mxa="_zs_galleryeK:a" class="mx-output-list">',k)x+='<li mxs="_zs_galleryeK:b"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(x+=" ",w.length>0){x+=" ";for(var b=0,C=w.length;b<C;b++){var K=w[b];x+='<li mxa="_zs_galleryeK:b" class="mx-output-item"><span class="mx-output-link ',z+""==K.value+""&&(x+=" mx-output-link-active "),x+="\" data-active=\"(selectedValue + '') === (item.value + '')\" mx-click=\""+e+"__af({item:'"+_(i,K)+"'})\">"+s(K.text)+"</span></li>"}x+=" "}else x+='<li mxa="_zs_galleryeK:c" class="text-center color-9 pt20 pb20">'+a(T)+"</li>";x+=" "}return x+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t);var i=t.list||[];e.__dA=0==i.length,_.__k(),e.on("destroy",function(){_.__l(e),_.__m(),e.__dB&&clearTimeout(e.__dB)})},assign:function(t){var e=this.updater.altered(),i=t.placeholder||"";i||(i=l.search),this.__dC=t.dynamicEnter+""=="true",this.__dD=t.listValue||"value",this.__dE=t.listText||"text";var a=this.__dF(t.list||this.__dG);this.__dG=a;var _=t.item||{},n=_.value||t.selected||"",r=_.text||"";if(n)for(var o=0;o<a.length;o++)if(a[o].value==n){r=a[o].text;break}this.__dH=n;var u=(t.type||"text")+"";return"all"==u&&(u="text,value"),this.__dI=u.split(","),this.updater.set({viewId:this.id,list:a,selectedValue:n,selectedText:r,placeholder:i,show:!1,emptyText:l["empty.text"]}),this.__a=s("#"+this.id),this.__a.val(n),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},__dF:function(t){var e=this.__dD,i=this.__dE,a=[];return t&&t.length>0&&(a="object"==typeof t[0]?t.map(function(t){return{value:t[e],text:t[i]}}):t.map(function(t){return{value:t,text:t}})),a},render:function(){this.updater.digest()},"__dJ<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__dB&&clearTimeout(e.__dB);for(var i=e.updater.get(),a=i.list,l=i.selectedValue,_=-1,n=0;n<a.length;n++)if(a[n].value==l){_=n;break}if(40==t.keyCode||38==t.keyCode)40==t.keyCode&&(_+=1)>=a.length&&(_=0),38==t.keyCode&&(_-=1)<0&&(_=a.length-1),e.updater.digest({selectedValue:a[_].value});else if(13==t.keyCode)if(e.__dC){var r=s("#"+e.id+"_input").val();e.__af({value:r,text:r})}else e.__az(_);else e.__dB=setTimeout(e.wrapAsync(function(){e.__r()}),250)},"__dK<click>":function(){this.updater.digest({selectedText:""}),this.__af({value:"",text:""})},__r:function(t){var e=s("#"+this.id+"_input").val(),i=this.__dG,a=[];if(this.__dA){if(!e)return this.updater.set({list:this.__dG=[]}),void this.__q();a=i}else{var l=(e+"").toLowerCase(),n=this.__dI;i.forEach(function(t){var e=!1;n.forEach(function(i){(t[i]+"").toLowerCase().indexOf(l)>-1&&(e=!0)}),e&&a.push(t)})}this.updater.digest({list:a,selectedText:e,show:!0}),_.__t(this),t||this.__a.trigger({type:"show",keyword:e})},__q:function(t){this.__dB&&clearTimeout(this.__dB);var e=(t=t||{text:s("#"+this.id+"_input").val()}).value||"",i=t.text||"";this.updater.digest({selectedValue:e,selectedText:i,show:!1,loading:!1}),_.__l(this),this.__a.trigger({type:"focusout",keyword:i})},__az:function(t){if(!s("#"+this.id+"_input").val()&&this.__dA)this.__af({value:"",text:""});else{var e=this.updater.get().list;t<0&&(t=0),e[t]&&this.__af(e[t])}},"__af<click>":function(t){t.stopPropagation();var e=t.params.item;this.__af(e)},__af:function(t){var e=!(t.value==this.__dH),i=this.__dH=t.value;this.__q(t),e&&(this.__a.val(i).trigger({type:"change",selected:i,item:t}),this.__a.trigger({type:"suggest",selected:{value:i,text:t.text}}))},__o:function(t){return a.inside(t,this.id)},"__p<change,focusout>":function(t){t.stopPropagation()},showLoading:function(){this.updater.digest({loading:!0})},hideLoading:function(){this.updater.digest({loading:!1})},update:function(t){this.__dG=this.__dF(t),this.__r(!0)}})});