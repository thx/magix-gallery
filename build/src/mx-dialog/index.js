define("mx-dialog/index",["magix","$","../mx-medusa/util","mx-popover/index"],(a,e,t)=>{a("mx-popover/index");var r=a("magix"),l=a("$"),n=r.Vframe,i=a("../mx-medusa/util");r.applyStyle("_zs_galleryC",'._zs_gallerydJ,._zs_gallerydK{position:fixed;left:0;width:100%;height:100%;transition:all var(--duration)}._zs_gallerydJ{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_gallerydJ._zs_gallerydL{opacity:1}._zs_gallerydM{position:absolute;border-radius:var(--border-radius);background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydM ._zs_gallerydN{position:relative;word-break:break-all}._zs_gallerydM ._zs_gallerydO{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydM ._zs_gallerydO ._zs_gallerydP{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydM ._zs_gallerydO:focus,._zs_gallerydM ._zs_gallerydO:hover{background-color:#999;color:#fff}._zs_gallerydM._zs_gallerydQ{border-radius:0}@-webkit-keyframes _zs_gallerya{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes _zs_gallerya{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(2px);transform:translateY(2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes _zs_galleryb{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes _zs_galleryb{0%{-webkit-transform:translate(0);transform:translate(0)}25%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}50%{-webkit-transform:translate(0);transform:translate(0)}75%{-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translate(0);transform:translate(0)}}._zs_gallerydR,._zs_gallerydR:after,._zs_gallerydR:before{display:inline-block;width:4px;height:4px;background-color:#fff;vertical-align:middle;border-radius:50%}._zs_gallerydR{position:relative;margin:0 8px}._zs_gallerydR:after{content:" ";position:absolute;left:-8px;top:0;-webkit-animation:_zs_gallerya .6s linear 0s infinite;animation:_zs_gallerya .6s linear 0s infinite}._zs_gallerydR:before{content:" ";position:absolute;left:8px;top:0;-webkit-animation:_zs_galleryb .6s linear 0s infinite;animation:_zs_galleryb .6s linear 0s infinite}._zs_gallerydS{position:relative}._zs_gallerydS ._zs_gallerydT{opacity:1;position:relative;z-index:1}._zs_gallerydS ._zs_gallerydU{display:none;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}._zs_gallerydS._zs_gallerydV ._zs_gallerydT{opacity:0}._zs_gallerydS._zs_gallerydV ._zs_gallerydU{display:inline}');var s=500,o=[];t.exports=r.View.extend({tmpl:function(a,e,t,r,l,n,i,s){if(t||(t=a),!l){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(a){return"&"+o[a]+";"};l=function(a){return""+(null==a?"":a)},r=function(a){return l(a).replace(d,c)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(a){return _[a]},g=/[!')(*]/g;n=function(a){return encodeURIComponent(l(a)).replace(g,f)}}if(!s){var p=/[\\'"]/g;s=function(a){return l(a).replace(p,"\\$&")}}var m="",u=a.closable,y=a.cntId,x=a.full,h=a.fullHeader,b=a.fullFooter;return u&&(m+='<a mxs="_zs_galleryaW:_" href="javascript:;" mx-click="'+e+'__aL()" class="_zs_gallerydO"><i class="mc-iconfont _zs_gallerydP">&#xe603;</i></a>'),m+='<div class="_zs_gallerydN" id="'+r(y)+'_content">',x?(m+=" ",h.title&&(m+='<div class="dialog-header" id="'+r(y)+'_header"><span mxa="_zs_galleryaW:_" class="header-name">'+l(h.title)+"</span>",h.iconTip&&(m+='<i class="mc-iconfont color-c displacement-2" mx-view="mx-popover/index?content='+n(h.iconTip)+'">&#xe7aa;</i>'),m+=" ",h.tip&&(m+='<span mxa="_zs_galleryaW:a" class="color-9 ml10">'+l(h.tip)+"</span>"),m+="</div>"),m+='<div id="'+r(y)+'"><div mxs="_zs_galleryaW:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',(b.enter||b.cancel)&&(m+='<div class="dialog-footer clearfix" id="'+r(y)+'_footer">',b.enter&&(m+='<a mxa="_zs_galleryaW:b" href="javascript:;" class="fl btn btn-brand min-width-60 mr10 _zs_gallerydS" mx-click="'+e+'__aM()"><span mxa="_zs_galleryaW:c" class="_zs_gallerydT">'+l(b.enterText)+"</span></a>"),m+=" ",b.cancel&&(m+='<a mxa="_zs_galleryaW:d" href="javascript:;" class="fl btn min-width-60 mr10" mx-click="'+e+'__aL()">'+l(b.cancelText)+"</a>"),m+=" ",b.enter&&(m+='<span id="'+r(y)+'_footer_error" class="fl lh32 color-red"></span>'),m+="</div>"),m+=" "):m+='<div id="'+r(y)+'"><div mxs="_zs_galleryaW:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',m+="</div>"},init:function(a){var e=this;e.on("destroy",function(){!function(a){for(var e=o.length-1;e>=0;e--)if(o[e].id==a.id){o.splice(e,1);break}}(e),s-=2,l("#"+e.id).trigger("dlg_close"),e.__aI&&clearTimeout(e.__aI)}),s+=2,o.push(e),r.has(a,"closable")||(a.closable=!0),e.updater.set(r.mix({cntId:"cnt_"+e.id},a))},render:function(){var a=this,e=a.updater,t=e.get();e.digest(),setTimeout(a.wrapAsync(function(){var e=l("#wrapper_"+a.id);e.css(t.posTo),a.__aJ();var n=t.cntId,i=l("#mask_"+a.id);i.length>0?i.addClass("_zs_gallerydL"):e.on("click",function(e){r.inside(e.target,n+"_content")||l("#"+a.id).trigger("dlg_close")}),a.owner.mountVframe(n,t.view,t),e.on("scroll",function(){l(document).trigger("dialogScolll")})}),250)},__aJ:function(){var a=this.updater.get(),e=a.cntId;if(a.full){var t=window.innerHeight,r=l("#"+e+"_header"),n=l("#"+e+"_footer");r&&r.length&&(t-=r.outerHeight()),n&&n.length&&(t-=n.outerHeight());var i={height:t-2,overflowY:"auto"};a.card&&(i.backgroundColor="#e8ebf2",i.padding="16px 24px"),l("#"+e).css(i)}},__aK:function(a){var e=n.get("cnt_"+this.id);e&&e.invoke("fire",["unload",a])},"__aM<click>":function(a){var e=l(a.eventTarget),t="_zs_gallerydV";if(!e.hasClass(t)){e.addClass(t),e.append('<span class="_zs_gallerydU">\n            <span class="_zs_gallerydR"></span>\n        </span>');var r=this,i=r.updater.get(),s=i.cntId;n.get(s).invoke("check").then(function(a){e.find("._zs_gallerydU").remove(),e.removeClass(t);var n=l("#"+s+"_footer_error");a.ok?(n.html(""),r["__aL<click>"](),i.callback&&i.callback(a.data||{})):a.msg?n.html('<i class="mc-iconfont displacement-2">&#xe6ad;</i>'+a.msg):n.html("")})}},"__aL<click>":function(){l("#"+this.id).trigger("dlg_close")},"$doc<keyup>":function(a){if(27==a.keyCode){var e=o[o.length-1];if(e==this&&e.updater.get("closable"))l("#"+e.id).trigger("dlg_close")}},"$win<resize>":function(a){var e=this;e.__aI&&clearTimeout(e.__aI),e.__aI=setTimeout(e.wrapAsync(function(){e.__aJ()}),200)}},{__aN:function(a,e){var t=r.guid("dlg_");if(e.mask){var n=l('<div class="_zs_gallerydJ" id="mask_'+t+'" />');n.css({zIndex:s-1}),l(document.body).append(n)}var i="wrapper_"+t,d=s,c=e.width,_=e.left,f=e.top,g=l('<div class="_zs_gallerydK" id="'+i+'"\nstyle="z-index:'+d+'">\n<div class="_zs_gallerydM '+(e.full?"_zs_gallerydQ":"")+'" id="'+t+'"\n    style="top:'+f+"px; left:"+_+"px; width:"+c+'px;"></div>\n</div>');g.css(e.posFrom),l(document.body).append(g),window.innerWidth-document.body.clientWidth>0&&(document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+"px"),document.body.style.overflowY="hidden",g.css({overflowY:e.modal?"hidden":"auto"});var p,m=a.owner.mountVframe(t,"mx-dialog/index",e),u=l("#"+t);return u.on("dlg_close",function(){u.data("closed")||u.trigger({type:"beforeClose",closeFn:function(){if(!u.data("closing")&&!p){var r=function(){u.data("closing",1),l("#wrapper_"+t).css(e.posFrom),l("#mask_"+t).removeClass("_zs_gallerydL"),setTimeout(function(){u.trigger("close"),u.data("closed",1),a.owner&&a.owner.unmountVframe(t),l("#wrapper_"+t).remove(),l("#mask_"+t).remove(),0==o.length&&(document.body.style.paddingRight="",document.body.style.overflowY="")},250)},n={prevent:function(){p=1},resolve:function(){n.p=1,p=0,r()},reject:function(){n.p=1,p=0}};m.invoke("__aK",[n]),p||n.p||r()}}})})},alert:function(a,e,t,l){var n=(l=l||{}).btns+""!="false";return this.mxDialog("mx-dialog/alert",{title:a,content:e,enterCallback:t,hasBtns:n},r.mix({width:320,closable:!1,mask:!1},l))},confirm:function(a,e){return this.mxDialog("mx-dialog/confirm",a,r.mix({width:320,closable:!1,mask:!1},e||{}))},mxModal:function(a,e,t){return t=t||{},this.mxDialog(a,e,r.mix({closable:!0,mask:!0},r.mix(t,{full:!0,fullHeader:r.mix({title:"",tip:"",iconTip:""},t.header||{}),fullFooter:r.mix({enter:!0,enterText:i["dialog.submit"],cancel:!0,cancelText:i["dialog.cancel"]},t.footer||{}),modal:!1,height:window.innerHeight,placement:"right",card:t.card+""!="false"})))},mxDialog:function(a,e,t){var n,i,s,o=this,d={beforeClose:function(a){i=a},close:function(){n&&n.trigger("dlg_close")},afterClose:function(a){s=a}},c={view:a};return seajs.use(a,o.wrapAsync(function(_){var f="$dlg_"+a;if(!o[f]){o[f]=1;var g,p,m,u,y=_.dialogOptions||{},x=(t=t||{}).placement||y.placement||"center",h=t.width||y.width||400,b=t.height||y.height||260,v=window.innerWidth,w=window.innerHeight,z=t.target||y.target;if(z){var k=void 0;k="string"!=typeof z||/^#/.test(z)||/^\./.test(z)?l(z):l("#"+z);var Y=t.offset||y.offset||{};Y.top=+Y.top||0,Y.left=+Y.left||0;var T=k.offset();p=T.top+k.outerHeight()+10-l(window).scrollTop()+Y.top,g=T.left-(h-k.outerWidth())/2+Y.left,m={opacity:0,top:"-50px"},u={opacity:1,top:0}}else switch(x){case"center":g=(v-h)/2,p=Math.max((w-b)/2,0),m={opacity:0,top:"-50px"},u={opacity:1,top:0};break;case"right":g=v-h,p=0,m={opacity:0,top:0,left:v},u={opacity:1,top:0,left:0}}r.mix(c,{mask:!0,modal:!1,width:h,closable:!0,left:g,top:p,posFrom:m,posTo:u},y,t),r.mix(c,e),c.dialog=d,(n=o.__aN(o,c)).on("beforeClose",function(a){(!i||i&&i())&&a.closeFn()}),n.on("close",function(){delete o[f],s&&s()})}})),d},mxCloseAllDialogs:function(){o.forEach(function(a){var e=l("#"+a.id);e&&e.trigger("dlg_close")})}})});