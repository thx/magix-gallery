define("mx-taginput/index",["magix","$","../mx-medusa/util","../mx-util/monitor"],(e,t,i)=>{var a=e("magix"),r=e("$"),_=e("../mx-medusa/util"),l=e("../mx-util/monitor");a.applyStyle("_zs_galleryaD",'[mx-view*="mx-taginput/index"]{--tag-left-padding:10px;--tag-gap:2px;--tag-height:calc(var(--input-height) - var(--tag-gap)*4 - 2px)}[mx-view*="mx-taginput/index"] ._zs_gallerykB{position:relative;height:auto;border:1px solid var(--border-highlight);border-radius:var(--border-radius);padding:var(--tag-gap) calc(var(--tag-left-padding) - 4px);cursor:text;transition:border-color var(--duration)}[mx-view*="mx-taginput/index"] ._zs_gallerykB:hover{border-color:var(--border-highlight-hover)}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykC,[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykD,[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykE{height:var(--tag-height);line-height:var(--tag-height)}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykD{position:absolute;top:calc(var(--tag-gap)*2);left:var(--tag-left-padding);color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykC,[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykE{float:left;margin-top:var(--tag-gap);margin-bottom:var(--tag-gap)}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykC{float:left;position:relative;max-width:220px;padding-right:26px;padding-left:6px;margin-right:calc(var(--tag-gap)*2);background-color:var(--color-bg-hover);border-radius:var(--border-radius);cursor:pointer;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykC ._zs_gallerykF{position:absolute;top:0;right:0;height:100%;width:20px;line-height:var(--tag-height);text-align:center;font-size:12px;font-weight:700;color:#ccc;transition:color var(--duration);border-left:1px solid #fff}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykC ._zs_gallerykF:hover{color:#999}[mx-view*="mx-taginput/index"] ._zs_gallerykB ._zs_gallerykE{padding:0;border:none;outline:none;background:transparent}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerykB,[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallerykB{cursor:not-allowed;background-color:var(--color-bg);border-color:var(--color-border)}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerykB:hover,[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallerykB:hover{border-color:var(--color-border)}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerykC,[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallerykC{cursor:not-allowed;color:#999}[mx-view*="mx-taginput/index"][mx-disabled] ._zs_gallerykC ._zs_gallerykF:hover,[mx-view*="mx-taginput/index"][mx-view*="disabled=true"] ._zs_gallerykC ._zs_gallerykF:hover{color:#ccc}[mx-view*="mx-taginput/index"] ._zs_gallerykG{margin:2px 0;padding:0 10px;cursor:pointer;height:var(--input-small-height);line-height:var(--input-small-height);border-radius:var(--border-radius);white-space:nowrap;word-break:break-all}[mx-view*="mx-taginput/index"] ._zs_gallerykG._zs_gallerykH,[mx-view*="mx-taginput/index"] ._zs_gallerykG:hover{background-color:var(--color-bg-hover)}');i.exports=a.View.extend({tmpl:function(e,t,i,a,r,_,l,n){if(i||(i=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(o,d)}}if(!_){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return g[e]},p=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(p,u)}}if(!n){var x=/[\\'"]/g;n=function(e){return r(e).replace(x,"\\$&")}}l||(l=function(e,t,i,a){for(a=e[c];--a;)if(e[i=c+a]===t)return i;return e[i=c+e[c]++]=t,i});var c="",m="",v=e.viewId,h=e.items,f=e.placeholder,y=e.inputWidth,k=e.iv,b=e.disabled,w=e.suggestLeft,z=e.show,B=e.loading,U=e.suggest,C=e.emptyText;if(m+='<div mxv class="_zs_gallerykB unselectable clearfix" mx-click="'+t+'__eV()" id="ipt_'+a(v)+'">',h.length||(m+='<span mxa="_zs_galleryfl:_" class="_zs_gallerykD">'+a(f)+"</span>"),m+=" ",h.length){m+=" ";for(var T=0,Z=h.length;T<Z;T++){m+='<span mxa="_zs_galleryfl:a" class="_zs_gallerykC clearfix" mx-contextmenu="'+t+'prevent()">'+a(h[T].text)+'<i class="mc-iconfont _zs_gallerykF" mx-click="'+t+"__eY({idx:"+a(T)+'})">&#xe603;</i></span>'}m+=" "}if(m+='<input class="_zs_gallerykE" autocomplete="off" style="width: '+a(y)+'px;" value="'+a(k)+'" mx-keydown="'+t+'__ca()" mx-keyup="'+t+'__ca()" mx-paste="'+t+'__ca()" mx-focusin="'+t+'__ca()" mx-focusout="'+t+'__p()" mx-change="'+t+'__p()" ',b&&(m+=' disabled="true" '),m+="/>",!b){if(m+='<div id="ul_'+a(v)+'" style="left: '+a(w)+'px;" class="mx-output mx-output-bottom ',z&&(m+=" mx-output-open "),m+='" mx-mouseout="'+t+'__cr()" mx-contextmenu="'+t+'__M()"><ul mxa="_zs_galleryfl:b" class="mx-output-list">',B)m+='<li mxs="_zs_galleryfl:_"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(m+=" ",U&&U.length){m+=" ";T=0;for(var A=U.length;T<A;T++){var D=U[T];m+='<li class="_zs_gallerykG" mx-click="'+t+"__t({item:'"+l(i,D)+'\'})" data-idx="'+a(T)+'" id="sg_'+a(v)+"_"+a(T)+'">'+r(D.text)+"</li>"}m+=" "}else m+='<li mxa="_zs_galleryfl:c" class="text-center color-9 pt20 pb20">'+a(C)+"</li>";m+=" "}m+="</ul></div>"}return m+="</div>"},init:function(e){var t=this,i=e.textKey||"text",n=e.valueKey||"value",s=0|e.max;t.__dA=e.dynamicList+""=="true",t.updater.set({textKey:i,valueKey:n});var o=t.rebuildList(e.list||[]),d=e.selected||"";d=(d+"").split(",");var g=[],u=e.items||[];if(u&&u.length)g=u;else{var p=a.toMap(o,"value");d.forEach(function(e){p[e]&&g.push(p[e])})}t.__d_=t.__dA?[]:o,t.__a=r("#"+t.id);var x=e.disabled+""=="true"||r("#"+t.id)[0].hasAttribute("mx-disabled");t.updater.set({viewId:t.id,disabled:x,placeholder:e.placeholder||_.choose,emptyText:_["empty.text"],inputWidth:10,items:g,max:s}),l.__k(),t.on("destroy",function(){l.__l(t),l.__m()})},rebuildList:function(e){var t=this.updater,i=t.get("textKey"),a=t.get("valueKey");return e="object"==typeof e[0]?e.map(function(e){return{text:e[i],value:e[a]}}):e.map(function(e){return{text:e,value:e}})},render:function(){this.updater.digest(),this.__eT(),this.__bU()},__bU:function(){var e=this.updater.get("items").map(function(e){return e.value});this.__a.val(e.join(","))},__eT:function(){var e=this;e.__eU=-1;var t=e.__d_,i=e.updater.get("items"),a=e.__bZ||"",_=[];if(e.__dA)_=t;else for(var l=i.map(function(e){return e.value+""}),n=0,s=void 0;n<t.length;n++)s=t[n],l.indexOf(s.value+"")<0&&((s.value+"").indexOf(a)>-1||(s.text+"").indexOf(a)>-1)&&_.push(s);var o=e.__a.find("input");o.width(10);var d=o.position(),g=r("#ipt_"+e.id).width()-d.left;e.updater.digest({iv:a,suggest:_,inputWidth:g>=10?g:10,suggestLeft:d.left-6})},"__eV<click>":function(){this.updater.get("disabled")||this.__a.find("input").focus()},"__M<contextmenu>":function(e){e.preventDefault()},"__p<change,focusout>":function(e){e.stopPropagation()},"__ca<focusin,paste,keyup,keydown>":function(e){e.stopPropagation();var t=this;t.__dB&&clearTimeout(t.__dB);var i=e.eventTarget.value;if(t.__bZ!==i){t.__bZ=i;var a=t.__a.find("._zs_gallerykD");i?a.hide():a.show()}if("keydown"!=e.type){var r=t.updater.get("suggest");if(40==e.keyCode)t.__eW(),t.__eU++,t.__eU>=r.length&&(t.__eU=0),t.__eX();else if(38==e.keyCode)t.__eW(),t.__eU--,t.__eU<0&&(t.__eU=r.length-1),t.__eX();else if(13==e.keyCode){if(t.__eU>-1&&t.__eU<r.length){var _=r[t.__eU];t.__eW(),t.__t(_)}}else t.__dB=setTimeout(t.wrapAsync(function(){var e=t.updater.get("items"),i=t.updater.get("max");(i<=0||e.length<i)&&(t.__eT(),t.__r())}),250)}if(!i&&"keydown"==e.type&&8==e.keyCode){var l=t.updater.get("items").length-1;l>-1&&(t["__eY<click>"]({params:{idx:l}}),t.__dA&&t.__q())}},__D:function(){for(var e=this.updater,t=[],i=e.get("items"),a=e.get("valueKey"),r=0,_=void 0;r<i.length;r++)_=i[r],t.push(a?_[a]:_);t=t.join(","),this.__a.val(t).trigger({type:"change",selected:t,items:i})},"__t<click>":function(e){e.stopPropagation&&e.stopPropagation(),this.__t(e.params.item)},__t:function(e){var t=this,i=t.updater;(r=i.get("items")).push(e),i.digest({items:r}),t.__bZ="",t.__bU(),t.__eT(),t.__D();var a=t.updater.get("max"),r=t.updater.get("items");a>0&&r.length>=a?t.__q():(t.__eZ(),t.__dA&&t.__q())},"__eY<click>":function(e){var t=this,i=t.updater.get();if(!i.disabled){var a=i.items,r=e.params.idx;a.splice(r,1),t.updater.digest({items:a}),t.__bZ="",t.__bU(),t.__eT(),t.__D(),t.__eZ()}},__eZ:function(){var e=this;if(e.__dA)e.__a.find("input").focus();else{var t=e.updater.get("suggest");t&&t.length?e.__a.find("input").focus():e.__q()}},__eW:function(){r("#sg_"+this.id+"_"+this.__eU).removeClass("_zs_gallerykH")},__eX:function(){var e=this,t=r("#sg_"+e.id+"_"+e.__eU);if(t.addClass("_zs_gallerykH"),t.length){e.__f_=1;var i=t.outerHeight(),a=(e.__eU+1)*i,_=r("#ul_"+e.id),l=_.height(),n=_.prop("scrollTop"),s=Math.ceil(l/i);a<n+i?_.prop("scrollTop",a-i):a>n+l&&_.prop("scrollTop",(e.__eU+2-s)*i)}},__q:function(){var e=this;e.__fa&&(e.__fa=!1,e.updater.digest({show:!1}),l.__l(e),e.__dA&&(e.__d_=[]))},__r:function(){var e=this;e.__a.trigger({type:"show",keyword:e.__bZ});var t=e.updater.get("suggest");!e.__fa&&t&&t.length&&(e.__fa=!0,e.updater.digest({show:!0}),l.__t(e))},__o:function(e){return a.inside(e,this.id)},"__cr<mouseout>":function(e){if(!a.inside(e.relateTarget,e.eventTarget)){this.__eW(),this.__eU=-1}},showLoading:function(){var e=this;e.__fa||(e.__fa=!0,e.updater.digest({show:!0,loading:!0,iv:e.__bZ}),l.__t(e))},hideLoading:function(){this.updater.digest({loading:!1})},update:function(e){e=this.rebuildList(e),this.__d_=e,this.updater.digest({iv:this.__bZ,suggest:e})}})});