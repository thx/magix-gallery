define("mx-preview/index",["magix","$"],(e,i,r)=>{var t,a=e("magix"),l=e("$");a.applyStyle("_zs_galleryat",'._zs_gallerykG{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-preview/index"]{display:inline-block}._zs_gallerykH{color:#ccc;font-size:30px}._zs_gallerykI{display:table;text-align:center}._zs_gallerykI ._zs_gallerykJ{display:table-cell;vertical-align:middle}._zs_gallerykI ._zs_gallerykJ ._zs_gallerykK,._zs_gallerykI ._zs_gallerykJ ._zs_gallerykL{max-width:100%;max-height:100%}._zs_gallerykI ._zs_gallerykJ ._zs_gallerykM{white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}._zs_gallerykI ._zs_gallerykJ ._zs_gallerykN{font-size:20px;color:#999}._zs_gallerykI ._zs_gallerykJ ._zs_gallerykO{-webkit-transform-origin:left top;transform-origin:left top}._zs_gallerykP{display:none;position:absolute;z-index:99999;border-collapse:separate;background-color:#fff;padding:10px;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykP ._zs_gallerykQ{display:block;width:100%;height:100%;overflow:hidden}'),r.exports=a.View.extend({tmpl:function(e,i,r,t,a,l,s,n){if(r||(r=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,c)}}if(!l){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return h[e]},p=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(p,g)}}if(!n){var f=/[\\'"]/g;n=function(e){return a(e).replace(f,"\\$&")}}var m="",_=e.maxWidth,u=e.maxHeight,v=e.preview,y=e.type,w=e.viewId;return m+='<div class="_zs_gallerykI" style="width: '+t(_)+"px; height: "+t(u)+'px;" ',v&&(m+=' mx-mouseover="'+i+'preview()" mx-mouseout="'+i+'hide()" '),m+='><div class="_zs_gallerykJ" style="height: '+t(u)+"px; ","text"!=y&&(m+=" font-size: 0; "),m+='" id="'+t(w)+'_inner"><i mxs="_zs_gallerydk:_" class="mc-iconfont _zs_gallerykH">&#xe615;</i></div></div>'},init:function(e){var i=this;i.updater.snapshot(),i.assign(e),i.on("destroy",function(){clearTimeout(i.timer),l("#pic_preview_"+i.id).remove()})},assign:function(e){var i,r=this.updater.altered(),t=+e.format||5,a={image:[2,11],flash:[3,9],taotu:[23],video:[4],text:[5],iframe:[10]};for(var l in a)a[l].indexOf(t)>-1&&(i=l);var s=e.url,n=e.xiaotuUrl,o=e.datuUrl;return"taotu"==i&&(s=e.xiaotuUrl),this.updater.set({viewId:this.id,placement:e.placement||"right",preview:e.preview+""!="false",type:i,url:s,xiaotuUrl:n,datuUrl:o,clickUrl:e.clickUrl,width:+e.width,height:+e.height,maxWidth:+e.maxWidth||100,maxHeight:+e.maxHeight||100}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var e=this;if(e.updater.digest({}),window.IntersectionObserver){var i=new IntersectionObserver(function(r){r.forEach(function(r){var t=r.target;r.isIntersecting&&(e.thumbnail(),i.unobserve(t))})},{rootMargin:"10px 0px"});i.observe(document.querySelector("#"+e.id)),e.capture("observer",{destroy:function(){i.disconnect()}})}else e.thumbnail()},thumbnail:function(){var e=this.updater.get(),i=e.type,r=e.url,t=e.maxWidth,a=e.maxHeight,s="";switch(i){case"image":case"taotu":s='<img class="_zs_gallerykK" src="'+r+'"/>';break;case"flash":s="flash已下线";case"video":s='<video src="'+r+'" class="_zs_gallerykL"></video>';break;case"text":(s=l('<div class="_zs_gallerykM" style="max-width: '+t+'px;"></div>'))[0].innerText=r;break;case"iframe":var n=e.width,o=e.height,d=Math.min(t/n,a/o);s='<div style="width: '+n*d+"px; height: "+o*d+'px; overflow: hidden">\n                                <iframe src="'+r+'" class="_zs_gallerykO"\n                                    style="transform:scale('+d+')"\n                                    width="'+n+'" \n                                    height="'+o+'" \n                                    frameborder="0"\n                                    scrolling="no" \n                                    marginheight="0" \n                                    marginwidth="0" \n                                    border="0"></iframe>\n                            </div>'}var c=e.clickUrl;c&&(s=l(s).wrap('<a href="'+c+'" target="_blank" rel="noopener noreferrer"></a>')),l("#"+this.id+"_inner").html(s)},"preview<mouseover>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.show()},show:function(){var e=this,i=l("#"+e.id+" ._zs_gallerykI"),r=i.offset(),a=r.left,s=r.top;t&&t!=e&&t.immediatelyHide(),t=e,clearTimeout(e.timer);var n=e.updater.get(),o=n.type,d=n.url;if(d&&o&&"flash"!=o){var c=function(r,t){var c=l(window),h=c.width(),g=c.height(),p=c.scrollTop();s<p&&(s=p);var f=n.placement,m=0;if((m="left"==f?a-10:h-(a+=i.outerWidth()+10))<r&&(t*=m/r,r=m),t>g&&(r=r*g/t,t=g),p+g<s+t){var _=Math.min(s+t-p-g,s-p);s-=_}var u="";switch(o){case"image":u=l('<img src="'+d+'" class="_zs_gallerykQ"/>');break;case"taotu":u=l('<div class="clearfix">\n                        <img src="'+d+'" class="fl"/>    \n                        <img src="'+n.datuUrl+'" class="fr"/>\n                    </div>');break;case"video":u=l('<video src="'+d+'" class="_zs_gallerykQ"\n                        controls="controls" autoplay="autoplay"></video>');break;case"text":(u=l('<div class="_zs_gallerykQ"></div>'))[0].innerText=d;break;case"iframe":var v=n.width,y=n.height;u=l('<div class="_zs_gallerykQ">\n                        <iframe src="'+d+'"\n                            style="transform: scale('+(r-20)/v+'); transform-origin: left top;"\n                            width="'+v+'" \n                            height="'+y+'"\n                            frameborder="0" \n                            scrolling="no" \n                            marginheight="0" \n                            marginwidth="0" \n                            border="0"></iframe>\n                    </div>')}var w=n.clickUrl;w&&u.wrap('<a href="'+w+'" target="_blank" rel="noopener noreferrer"></a>');var x=l("#pic_preview_"+e.id);x.length||(x=l('<div id="pic_preview_'+e.id+'" class="_zs_gallerykP"></div>').appendTo("body")),x.empty().append(u),x.css({width:r,height:t||"auto",left:"left"==f?a-r-10:a,top:s,display:"block"})};if("taotu"==o)(h=new Image).onload=function(){var e=n.width+10+this.width+20,i=Math.max(n.height,this.height)+20;c(e,i)},h.src=n.datuUrl;else if(n.width&&n.height)c(n.width+20,n.height+20);else if("text"==o)c(600,0);else if("image"==o){var h;(h=new Image).onload=function(){c(this.width+20,this.height+20)},h.src=d}}},"hide<mouseout>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.hide()},hide:function(){var e=this;e.delayHide();var i=l("#pic_preview_"+e.id);i.off("mouseover.preview").on("mouseover.preview",function(){clearTimeout(e.timer),i.off("mouseout.preview").on("mouseout.preview",function(i){e.delayHide()})})},immediatelyHide:function(){clearTimeout(this.timer),l("#pic_preview_"+this.id).empty().css({display:"none"})},delayHide:function(){var e=this;clearTimeout(e.timer),e.timer=setTimeout(function(){l("#pic_preview_"+e.id).empty().css({display:"none"})},300)}})});