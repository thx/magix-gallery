define("mx-preview/index",["magix","$"],(e,i,r)=>{var t,a=e("magix"),l=e("$");a.applyStyle("_zs_galleryaq",'[mx-view*="mx-preview/index"]{display:inline-block;vertical-align:middle}._zs_galleryjy{color:#ccc;font-size:30px}._zs_galleryjz{display:table;text-align:center}._zs_galleryjz ._zs_galleryjA{display:table-cell;vertical-align:middle}._zs_galleryjz ._zs_galleryjA ._zs_galleryjB,._zs_galleryjz ._zs_galleryjA ._zs_galleryjC{max-width:100%;max-height:100%}._zs_galleryjz ._zs_galleryjA ._zs_galleryjD{word-break:break-all;overflow:hidden;text-overflow:ellipsis}._zs_galleryjz ._zs_galleryjA ._zs_galleryjE{transform-origin:left top}._zs_galleryjF{display:none;position:absolute;z-index:999999;border-collapse:separate;background-color:#fff;padding:10px}._zs_galleryjF ._zs_galleryjG{display:block;width:100%;height:100%;overflow:hidden}'),r.exports=a.View.extend({tmpl:function(e,i,r,t,a,l,s,n){if(r||(r=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,c)}}if(!l){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(e){return p[e]},v=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(v,h)}}if(!n){var g=/[\\'"]/g;n=function(e){return a(e).replace(g,"\\$&")}}var m="",_=e.maxWidth,f=e.maxHeight,w=e.preview,u=e.type,y=e.viewId;return m+='<div class="_zs_galleryjz" style="width: '+t(_)+"px; height: "+t(f)+'px;" ',w&&(m+=' mx-mouseover="'+i+'preview()" mx-mouseout="'+i+'hide()" '),m+='><div class="_zs_galleryjA" style="height: '+t(f)+"px; ","text"!=u&&(m+=" font-size: 0; "),m+='" id="'+t(y)+'_inner"><i mxs="_zs_galleryd/:_" class="mc-iconfont _zs_galleryjy">&#xe615;</i></div></div>'},init:function(e){var i=this;i.updater.snapshot(),i.assign(e),i.on("destroy",function(){clearTimeout(i.timer),l("#pic_preview_"+i.id).remove()})},assign:function(e){var i,r=this.updater.altered();if(e.format){var t=+e.format||5,a={image:[2,11],flash:[3,9],video:[4],text:[5],iframe:[10]};for(var s in a)a[s].indexOf(t)>-1&&(i=s)}else i=e.type||"text";return this.updater.set({viewId:this.id,placement:e.placement||"right",preview:e.preview+""!="false",type:i,url:e.url,clickUrl:e.clickUrl,width:+e.width,height:+e.height,maxWidth:+e.maxWidth||100,maxHeight:+e.maxHeight||100,previewData:l.extend(!0,{},e.previewData),previewView:e.previewView||""}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var e=this;if(e.updater.digest({}),window.IntersectionObserver){var i=new IntersectionObserver(function(r){r.forEach(function(r){var t=r.target;(r.isIntersecting||r.intersectionRatio>0)&&(e.thumbnail(),i.unobserve(t))})},{rootMargin:"10px 0px"});i.observe(document.querySelector("#"+e.id)),e.capture("observer",{destroy:function(){i.disconnect()}})}else e.thumbnail()},thumbnail:function(){var e=this.updater.get(),i=e.type,r=e.url,t=e.maxWidth,a=e.maxHeight,s=e.width,n=e.height,o=e.clickUrl,d="";switch(i){case"image":d='<img class="_zs_galleryjB" src="'+r+'"/>';break;case"flash":d="flash已下线";case"video":d='<video src="'+r+'" class="_zs_galleryjC"></video>';break;case"text":(d=l('<div class="_zs_galleryjD" style="max-width: '+t+"px; max-height: "+a+'px;"></div>'))[0].innerText=r;break;case"iframe":var c=Math.min(t/s,a/n);d='<div style="width: '+s*c+"px; height: "+n*c+'px; overflow: hidden">\n                                <iframe src="'+r+'" class="_zs_galleryjE"\n                                    sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n                                    style="transform:scale('+c+')"\n                                    width="'+s+'" \n                                    height="'+n+'" \n                                    frameborder="0"\n                                    scrolling="no" \n                                    marginheight="0" \n                                    marginwidth="0" \n                                    border="0"></iframe>\n                            </div>'}o&&(d=l(d).wrap('<a href="'+o+'" target="_blank" rel="noopener noreferrer"></a>')),l("#"+this.id+"_inner").html(d)},"preview<mouseover>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.show()},show:function(){var e=this;t&&t!=e&&t.immediatelyHide(),t=e,clearTimeout(e.timer);var i=function(i,r,t){void 0===t&&(t="right");var a=l("#"+e.id+" ._zs_galleryjz"),s=a.offset(),n=s.left,o=s.top,d=l(window),c=d.width(),p=d.height(),h=d.scrollTop();o<h&&(o=h);var v=0;switch(t){case"left":v=s.left-10;break;case"right":v=c-(s.left+a.outerWidth()+10)}(v<i&&(r*=v/i,i=v),r>p&&(i=i*p/r,r=p),h+p<o+r)&&(o-=Math.min(o+r-h-p,o-h));switch(t){case"left":n=n-i-10;break;case"right":n=n+a.outerWidth()+10}return{display:"block",left:n,top:o,width:i,height:r||"auto"}},r=e.updater.get(),a={};if(a=l.isEmptyObject(r.previewData)?r:r.previewData,r.previewView){var s=l("#pic_preview_"+e.id);s.length||(s=l('<div id="pic_preview_'+e.id+'" class="_zs_galleryjF mx-shadow"></div>').appendTo("body"));var n="pic_preview_"+e.id+"_custom_view";s.empty().append('<div id="'+n+'"></div>');var o=+a.width||200,d=+a.height||200,c=+a.scale||1,p=i(o*=c,d*=c,r.placement);s.css(p),e.owner.mountVframe(n,r.previewView,a)}else{var h=a.type,v=a.url;if(!v||!h||"flash"==h)return;var g=function(t,s){var n=+a.scale||1;t*=n,s*=n;var o="";switch(h){case"image":o=l('<img src="'+v+'" class="_zs_galleryjG"/>');break;case"video":o=l('<video src="'+v+'" class="_zs_galleryjG"\n                        controls="controls" autoplay="autoplay"></video>');break;case"text":(o=l('<div class="_zs_galleryjG"></div>'))[0].innerText=v;break;case"iframe":var d=a.width,c=a.height;o=l('<div class="_zs_galleryjG">\n                            <iframe src="'+v+'"\n                                sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n                                style="transform: scale('+(t-20)/d+'); transform-origin: left top;"\n                                width="'+d+'" \n                                height="'+c+'"\n                                frameborder="0" \n                                scrolling="no" \n                                marginheight="0" \n                                marginwidth="0" \n                                border="0"></iframe>\n                        </div>')}var p=l("#pic_preview_"+e.id);p.length||(p=l('<div id="pic_preview_'+e.id+'" class="_zs_galleryjF mx-shadow"></div>').appendTo("body")),p.empty().append(o);var g=i(t,s,r.placement);p.css(g);var m=r.clickUrl;m&&o.wrap('<a href="'+m+'" target="_blank" rel="noopener noreferrer"></a>')};if(a.width&&a.height)g(+a.width+20,+a.height+20);else if("text"==h)g(600,0);else if("image"==h){var m=new Image;m.onload=function(){g(this.width+20,this.height+20)},m.src=v}}},"hide<mouseout>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.hide()},hide:function(){var e=this;e.delayHide();var i=l("#pic_preview_"+e.id);i.off("mouseover.preview").on("mouseover.preview",function(){clearTimeout(e.timer),i.off("mouseout.preview").on("mouseout.preview",function(i){e.delayHide()})})},immediatelyHide:function(){clearTimeout(this.timer),l("#pic_preview_"+this.id).empty().css({display:"none"})},delayHide:function(){var e=this;clearTimeout(e.timer),e.timer=setTimeout(function(){l("#pic_preview_"+e.id).empty().css({display:"none"})},300)}})});