define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(t,e,i)=>{var a=t("magix"),s=t("$"),l=t("../mx-medusa/util"),_=t("../mx-util/monitor");a.applyStyle("_zs_galleryax",'[mx-view*="mx-suggest/index"]{position:relative;display:inline-block}[mx-view*="mx-suggest/index"] ._zs_galleryjX{position:absolute;right:6px;top:50%;width:12px;height:12px;font-size:12px;margin-top:-6px;color:#ccc;cursor:pointer;transition:all var(--duration);background-color:#fff}[mx-view*="mx-suggest/index"] ._zs_galleryjX:hover{color:#999}'),i.exports=a.View.extend({tmpl:function(t,e,i,a,s,l,_,n){if(i||(i=t),!s){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,u=function(t){return"&"+o[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(r,u)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return d[t]},h=/[!')(*]/g;l=function(t){return encodeURIComponent(s(t)).replace(h,c)}}if(!n){var p=/[\\'"]/g;n=function(t){return s(t).replace(p,"\\$&")}}_||(_=function(t,e,i,a){for(a=t[g];--a;)if(t[i=g+a]===e)return i;return t[i=g+t[g]++]=e,i});var g="",x="",v=t.placeholder,f=t.viewId,m=t.selectedText,y=t.show,w=t.loading,k=t.list,z=t.selectedValue,T=t.emptyText;if(x+='<div mxv mxa="_zs_galleryeg:_" class="search-box"><i mxs="_zs_galleryeg:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+a(v)+'" autocomplete="off" id="'+a(f)+'_input" value="'+a(m)+'" mx-keyup="'+e+'__dD()" mx-paste="'+e+'__dD()" mx-focusin="'+e+'__dD()" mx-focusout="'+e+'__m()" mx-change="'+e+'__m()"/>',m&&(x+='<i mxs="_zs_galleryeg:a" class="mc-iconfont _zs_galleryjX" mx-click="'+e+'__dE()">&#xe6f8;</i>'),x+='<div class="mx-output mx-output-bottom ',y&&(x+=" mx-output-open "),x+='"><ul mxa="_zs_galleryeg:a" class="mx-output-list">',w)x+='<li mxs="_zs_galleryeg:b"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(x+=" ",k.length>0){x+=" ";for(var b=0,C=k.length;b<C;b++){var V=k[b];x+='<li mxa="_zs_galleryeg:b" class="mx-output-item"><span class="mx-output-link ',z+""==V.value+""&&(x+=" mx-output-link-active "),x+="\" data-active=\"(selectedValue + '') === (item.value + '')\" mx-click=\""+e+"__ac({item:'"+_(i,V)+"'})\">"+s(V.text)+"</span></li>"}x+=" "}else x+='<li mxa="_zs_galleryeg:c" class="text-center color-9 pt20 pb20">'+a(T)+"</li>";x+=" "}return x+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t);var i=t.list||[];e.__du=0==i.length,_.__h(),e.on("destroy",function(){_.__i(e),_.__j(),e.__dv&&clearTimeout(e.__dv)})},assign:function(t){var e=this.updater.altered(),i=t.placeholder||"";i||(i=l.search),this.__dw=t.dynamicEnter+""=="true",this.__dx=t.listValue||"value",this.__dy=t.listText||"text";var a=this.__dz(t.list||this.__dA);this.__dA=a;var _=t.item||{},n=_.value||t.selected||"",o=_.text||"";if(n)for(var r=0;r<a.length;r++)if(a[r].value==n){o=a[r].text;break}this.__dB=n;var u=(t.type||"text")+"";return"all"==u&&(u="text,value"),this.__dC=u.split(","),this.updater.set({viewId:this.id,list:a,selectedValue:n,selectedText:o,placeholder:i,show:!1,emptyText:l["empty.text"]}),this.__a=s("#"+this.id),this.__a.val(n),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},__dz:function(t){var e=this.__dx,i=this.__dy,a=[];return t&&t.length>0&&(a="object"==typeof t[0]?t.map(function(t){return{value:t[e],text:t[i]}}):t.map(function(t){return{value:t,text:t}})),a},render:function(){this.updater.digest()},"__dD<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__dv&&clearTimeout(e.__dv);for(var i=e.updater.get(),a=i.list,l=i.selectedValue,_=-1,n=0;n<a.length;n++)if(a[n].value==l){_=n;break}if(40==t.keyCode||38==t.keyCode)40==t.keyCode&&(_+=1)>=a.length&&(_=0),38==t.keyCode&&(_-=1)<0&&(_=a.length-1),e.updater.digest({selectedValue:a[_].value});else if(13==t.keyCode)if(e.__dw){var o=s("#"+e.id+"_input").val();e.__ac({value:o,text:o})}else e.__aw(_);else e.__dv=setTimeout(e.wrapAsync(function(){e.__o()}),250)},"__dE<click>":function(){this.updater.digest({selectedText:""}),this.__ac({value:"",text:""})},__o:function(t){var e=s("#"+this.id+"_input").val(),i=this.__dA,a=[];if(this.__du){if(!e)return this.updater.set({list:this.__dA=[]}),void this.__n();a=i}else{var l=(e+"").toLowerCase(),n=this.__dC;i.forEach(function(t){var e=!1;n.forEach(function(i){(t[i]+"").toLowerCase().indexOf(l)>-1&&(e=!0)}),e&&a.push(t)})}this.updater.digest({list:a,selectedText:e,show:!0}),_.__q(this),t||this.__a.trigger({type:"show",keyword:e})},__n:function(t){this.__dv&&clearTimeout(this.__dv);var e=(t=t||{text:s("#"+this.id+"_input").val()}).value||"",i=t.text||"";this.updater.digest({selectedValue:e,selectedText:i,show:!1,loading:!1}),_.__i(this),this.__a.trigger({type:"focusout",keyword:i})},__aw:function(t){if(!s("#"+this.id+"_input").val()&&this.__du)this.__ac({value:"",text:""});else{var e=this.updater.get().list;t<0&&(t=0),e[t]&&this.__ac(e[t])}},"__ac<click>":function(t){t.stopPropagation();var e=t.params.item;this.__ac(e)},__ac:function(t){var e=!(t.value==this.__dB),i=this.__dB=t.value;this.__n(t),e&&(this.__a.val(i).trigger({type:"change",selected:i,item:t}),this.__a.trigger({type:"suggest",selected:{value:i,text:t.text}}))},__l:function(t){return a.inside(t,this.id)},"__m<change,focusout>":function(t){t.stopPropagation()},showLoading:function(){this.updater.digest({loading:!0})},hideLoading:function(){this.updater.digest({loading:!1})},update:function(t){this.__dA=this.__dz(t),this.__o(!0)}})});