define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(t,a,r)=>{var s=t("magix"),e=t("$"),n=t("../mx-medusa/util"),l=t("../mx-monitor/index");s.applyStyle("_zs_galleryaz",'._zs_gallerylN{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-suggest/index"]{display:inline-block}._zs_gallerylO{position:relative;height:32px}'),s.applyStyle("_zs_galleryaA","._zs_gallerylP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryz{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryz{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryA{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryA{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryB{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryB{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylQ{display:none;position:absolute;top:100%;z-index:99;min-width:100%;max-height:300px;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylQ ._zs_gallerylR{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylQ ._zs_gallerylR._zs_gallerylS,._zs_gallerylQ ._zs_gallerylR:hover{background-color:#f0f0f0}._zs_gallerylQ ._zs_gallerylR._zs_gallerylT,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:active,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:focus,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylQ._zs_gallerylU{display:block;-webkit-animation:_zs_galleryz .25s ease-out;animation:_zs_galleryz .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"),r.exports=s.View.extend({tmpl:function(t,a,r,s,e,n,l,o){if(r||(r=t),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,i=function(t){return"&"+m[t]+";"};e=function(t){return""+(null==t?"":t)},s=function(t){return e(t).replace(f,i)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return _[t]},d=/[!')(*]/g;n=function(t){return encodeURIComponent(e(t)).replace(d,p)}}if(!o){var u=/[\\'"]/g;o=function(t){return e(t).replace(u,"\\$&")}}l||(l=function(t,a,r,s){for(s=t[g];--s;)if(t[r=g+s]===a)return r;return t[r=g+t[g]++]=a,r});var g="",x="",c=t.placeholder,h=t.viewId,y=t.selectedText,z=t.show,k=t.align,Y=t.loading,b=t.list,w=t.selectedValue,v=t.emptyText;if(x+='<div mxv mxa="_zs_galleryd&:_" class="search-box"><i mxs="_zs_galleryd&:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+s(c)+'" autocomplete="off" id="'+s(h)+'_input" value="'+s(y)+'" mx-keyup="'+a+'__dN()" mx-paste="'+a+'__dN()" mx-focusin="'+a+'__dN()" mx-focusout="'+a+'__m()" mx-change="'+a+'__m()"/><ul class="_zs_gallerylQ ',z&&(x+=" _zs_gallerylU "),x+='" style="',x+="right"==k?"right: 0;":"left: 0;",x+='">',Y)x+='<li mxs="_zs_galleryd&:a"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(x+=" ",b.length>0){x+=" ";for(var T=0,C=b.length;T<C;T++){var Q=b[T];x+='<li class="_zs_gallerylR ',w+""==Q.value+""&&(x+=" _zs_gallerylT "),x+='" mx-click="'+a+"__ab({item:'"+l(r,Q)+"'})\">"+e(Q.text)+"</li>"}x+=" "}else x+='<li mxa="_zs_galleryd&:a" class="text-center color-9">'+s(v)+"</li>";x+=" "}return x+="</ul></div>"},init:function(t){var a=this;a.updater.snapshot(),a.assign(t),l.__f(),a.on("destroy",function(){l.__g(a),l.__h(),a.__dI&&clearTimeout(a.__dI)})},assign:function(t){var a=this.updater.altered(),r=t.placeholder||"";r||(r=n.search),this["key.value"]=t.listValue||"value",this["key.text"]=t.listText||"text";var s=this.__dJ(t.list||this.__dK);this.__dK=s;var l=t.item||{},o=t.selected||l.value||"",m=l.text||"";if(o)for(var f=0;f<s.length;f++)if(s[f].value==o){m=s[f].text;break}this.__dL=o;var i=(t.type||"text")+"";return"all"==i&&(i="text,value"),this.__dM=i.split(","),this.updater.set({viewId:this.id,list:s,selectedValue:o,selectedText:m,placeholder:r,align:t.align||"left",show:!1,emptyText:n["empty.text"]}),this.__k=e("#"+this.id),this.__k.val(o),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},__dJ:function(t){var a=this["key.value"],r=this["key.text"],s=[];return t&&t.length>0&&(s="object"==typeof t[0]?t.map(function(t){return{value:t[a],text:t[r]}}):t.map(function(t){return{value:t,text:t}})),s},render:function(){this.updater.digest()},"__dN<focusin,keyup,paste>":function(t){t.stopPropagation();var a=this;a.__dI&&clearTimeout(a.__dI);for(var r=a.updater.get(),s=r.list,e=r.selectedValue,n=-1,l=0;l<s.length;l++)if(s[l].value==e){n=l;break}40==t.keyCode||38==t.keyCode?(40==t.keyCode&&(n+=1)>=s.length&&(n=0),38==t.keyCode&&(n-=1)<0&&(n=s.length-1),a.updater.digest({selectedValue:s[n].value})):13==t.keyCode?(n<0&&(n=0),a.__ab(s[n])):a.__dI=setTimeout(a.wrapAsync(function(){a.__o()}),300)},showLoading:function(){this.updater.digest({loading:!0})},hideLoading:function(){this.updater.digest({loading:!1})},update:function(t){if(this.updater.get("show")){this.__dK=this.__dJ(t);var a=e("#"+this.id+"_input").val();this.updater.digest({list:this.__dK,selectedText:a}),l.__q(this)}},__l:function(t){return s.inside(t,this.id)},"__m<change,focusout>":function(t){t.stopPropagation()},__o:function(t){var a=this.__dK,r=e("#"+this.id+"_input").val(),s=(r+"").toLowerCase(),n=[],o=this.__dM;a.forEach(function(t){var a=!1;o.forEach(function(r){(t[r]+"").toLowerCase().indexOf(s)>-1&&(a=!0)}),a&&n.push(t)}),this.updater.digest({list:n,selectedText:r,show:!0}),l.__q(this),this.__k.trigger({type:"show",keyword:r})},__n:function(){for(var t=this.updater.get().list,a=this.__dL+"",r="",s=0;s<t.length;s++){var e=t[s];if(e.value+""===a){r=e.text;break}}this.updater.digest({selectedValue:a,selectedText:r,show:!1}),l.__g(this),this.__k.trigger("focusout")},"__ab<click>":function(t){t.stopPropagation();var a=t.params.item;this.__ab(a)},__ab:function(t){var a=!(t.value==this.__dL),r=t.text,s=this.__dL=t.value;this.__n(),a&&(this.__k.val(s).trigger({type:"suggest",selected:{value:s,text:r}}),this.__k.trigger("change"))},__ae:function(t,a){this.__k.val(t).trigger({type:"suggest",selected:{value:t,text:a}})}})});