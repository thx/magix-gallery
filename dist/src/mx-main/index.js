define("mx-main/index",["magix"],(e,l,i)=>{var a=e("magix"),r=a.Router,s=a.Vframe;a.applyStyle("_zs_galleryaf",'[mx-view*="mx-main/index"]{position:relative;background-color:#e8ebf2}._zs_galleryhW{position:absolute;top:0;left:0;bottom:0;padding-top:16px;background-color:var(--app-nav-bg);z-index:3}._zs_galleryhW ._zs_galleryhX{position:relative;font-size:14px}._zs_galleryhW ._zs_galleryhX:before{content:"";position:absolute;top:0;left:24px;bottom:0;width:0;border-left:1px solid #4d5873}._zs_galleryhW ._zs_galleryhX:first-child:before{top:23px}._zs_galleryhW ._zs_galleryhX:last-child:before{bottom:23px}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY{position:relative;display:block;height:46px;line-height:46px;padding-left:36px}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY ._zs_galleryhZ{color:#fff;opacity:.5}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY ._zs_galleryi_{opacity:0;position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-image:linear-gradient(-90deg,var(--app-brand),var(--app-brand-gradient));background-color:var(--app-brand);transition:all var(--duration)}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY._zs_galleryia ._zs_galleryi_,._zs_galleryhW ._zs_galleryhX ._zs_galleryhY._zs_galleryia ._zs_galleryhZ,._zs_galleryhW ._zs_galleryhX ._zs_galleryhY:hover ._zs_galleryhZ{opacity:1}._zs_galleryhW ._zs_galleryhX ._zs_galleryic ._zs_galleryid{position:absolute;top:50%;left:16px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background-color:#4d5873;color:#fff;text-align:center;line-height:16px;font-size:12px;transition:all var(--duration)}._zs_galleryhW ._zs_galleryhX ._zs_galleryie:before{content:"";position:absolute;top:50%;left:24px;width:10px;height:0;border-top:1px solid #4d5873}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic ._zs_galleryhZ{opacity:1}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic ._zs_galleryi_{opacity:.2}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic._zs_galleryia ._zs_galleryid{background-color:#fff;color:var(--app-brand)}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic._zs_galleryia ._zs_galleryi_{opacity:1}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryhY{cursor:not-allowed}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryhY:hover ._zs_galleryhZ{opacity:.5}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryih{position:absolute;top:50%;right:16px;margin-top:-6px;font-size:14px;font-weight:700;color:#4d5873}._zs_galleryii{position:relative;z-index:2}._zs_galleryii ._zs_galleryij{position:relative;margin-bottom:16px;border-radius:var(--border-radius);background-color:#fff}._zs_galleryii ._zs_galleryij ._zs_galleryik{padding:8px 24px;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid var(--color-border)}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil>*,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryim,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryin{display:inline-block;height:32px;line-height:32px;vertical-align:middle;overflow:hidden}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil{margin-right:5px;color:#999}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryim{font-size:16px}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryio{margin-left:20px;color:#999}._zs_galleryii ._zs_galleryij ._zs_galleryip{padding:16px 24px}._zs_galleryii ._zs_galleryiq{position:absolute;background-color:#fff;border-radius:var(--border-radius)}._zs_galleryii ._zs_galleryiq ._zs_galleryir{padding:8px 24px;line-height:32px;font-size:16px;border-bottom:1px solid var(--color-border)}._zs_galleryii ._zs_galleryiq ._zs_galleryis{padding:16px 24px;color:#666}._zs_galleryii ._zs_galleryit{text-align:center;padding:40px 0}._zs_galleryii ._zs_galleryit ._zs_galleryiu{min-width:100px;margin-right:20px}._zs_galleryii ._zs_galleryit ._zs_galleryiu:last-child{margin-right:0}._zs_galleryiv{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}'),i.exports=a.View.extend({tmpl:function(e,l,i,a,r,s,_,t){if(i||(i=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(d,o)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},y=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(y,p)}}if(!t){var z=/[\\'"]/g;t=function(e){return r(e).replace(z,"\\$&")}}_||(_=function(e,l,i,a){for(a=e[c];--a;)if(e[i=c+a]===l)return i;return e[i=c+e[c]++]=l,i});var c="",h="",x=e.leftWidth,f=e.stepInfos,u=e.curStepIndex,v=e.curSubStepIndex,m=e.viewHeight,b=e.gapWidth,w=e.curStepInfo,I=e.rightWidth,k=e.childInfos,W=e.viewId;h+='<div class="_zs_galleryhW" style="width: '+a(x)+'px;">';for(var S=0,X=f.length;S<X;S++){var $=f[S];if(h+='<div class="_zs_galleryhX ',$.index==u&&(h+=" _zs_galleryif "),h+=" ",$.locked&&(h+=" _zs_galleryig "),h+='"><a href="javascript:;" class="_zs_galleryhY _zs_galleryic ',$.index==u&&-1==v&&(h+=" _zs_galleryia "),h+='" data-sub="-1" ',$.locked||(h+=' mx-click="'+l+"nav({stepIndex:"+a($.index)+'})" '),h+=' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_gallerydm:_" class="_zs_galleryid">'+a(S+1)+'</span><span mxs="_zs_gallerydm:_" class="_zs_galleryi_"></span><span mxa="_zs_gallerydm:a" class="_zs_galleryhZ">'+a($.label)+"</span></a>",!$.locked&&$.subs.length>1){h+=" ";for(var j=0,T=$.subs,Y=T.length;j<Y;j++){var Z=T[j];h+='<a href="javascript:;" class="_zs_galleryhY _zs_galleryie ',$.index==u&&v==Z.index&&(h+=" _zs_galleryia "),h+='" data-sub="'+a(Z.index)+'" mx-click="'+l+"nav({stepIndex:"+a($.index)+",subStepIndex:"+a(Z.index)+'})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_gallerydm:_" class="_zs_galleryi_"></span><span mxa="_zs_gallerydm:b" class="_zs_galleryhZ">'+a(Z.label)+"</span></a>"}h+=" "}h+=" ",$.locked&&(h+='<i mxs="_zs_gallerydm:a" class="mc-iconfont _zs_galleryih">&#xe759;</i>'),h+="</div>"}h+='</div><div mxv class="_zs_galleryii clearfix" style="min-height: '+a(m)+"px; padding-top: "+a(b)+"px; padding-right: "+a(b+(w.sideWrapper?I+b:0))+"px; padding-left: "+a(x+b)+'px;">';for(var V=0,q=w.subs,H=q.length;V<H;V++){h+='<div mxv mxa="_zs_gallerydm:c" class="_zs_galleryij"><div mxa="_zs_gallerydm:d" class="_zs_galleryik clearfix">',(Z=q[V]).icon&&(h+='<span mxa="_zs_gallerydm:e" class="_zs_galleryil">'+r(Z.icon)+"</span>"),h+='<span mxa="_zs_gallerydm:f" class="_zs_galleryim">'+a(Z.label)+"</span>",Z.tip&&(h+='<span mxa="_zs_gallerydm:g" class="_zs_galleryio">'+r(Z.tip)+"</span>"),h+='</div><div mxv="curStepInfo,childInfos" class="_zs_galleryip" id="sub_frame_'+a(Z.index)+'" mx-view="'+a(Z.view)+"?info="+_(i,Z)+"&data="+_(i,k)+'"><div mxs="_zs_gallerydm:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>'}return h+=" ",w.sideWrapper&&(h+='<div mxv="curStepInfo" class="_zs_galleryiq" style="top: '+a(b)+"px; right: "+a(b)+"px; width: "+a(I)+'px;" mx-view="'+a(w.sideWrapper)+"?data="+_(i,w.sideData)+'"><div mxs="_zs_gallerydm:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>'),h+='<div mxa="_zs_gallerydm:h" class="_zs_galleryit"><div>',w.prevTip&&(h+='<a mxa="_zs_gallerydm:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+a(w.prevTip)+"</a>"),h+=" ",w.nextTip&&(h+='<a mxa="_zs_gallerydm:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+a(w.nextTip)+"</a>"),h+='</div><div id="'+a(W)+'_error" class="_zs_galleryiv"></div></div></div>'},init:function(e){var l=this;l.updater.set({gapWidth:16,leftWidth:+e.leftWidth||160,rightWidth:+e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,i=+l.get("alreadyStep"),a=l.get("stepInfos"),s=r.parse().params,_=+(s.stepIndex||1);_>i&&(i=_);var t=+s.subStepIndex||-1;if(a.forEach(function(l,r){var s=r+1;l.index=s,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=s>i,s==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";s>1&&!a[r-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var d="";s<a.length&&(d=l.nextTip||"下一步"),l.nextTip=d}),s.stepIndex+""==_+""&&s.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:i,curStepInfo:a[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(r.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var d=$("#"+e.id+" ._zs_galleryif");d.find("._zs_galleryhY").removeClass("_zs_galleryia"),d.find('._zs_galleryhY[data-sub="'+t+'"]').addClass("_zs_galleryia"),e.subScroll()}else e.$inited=1,n()}else r.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),i=!1,a=null,r={};(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",title:e.sideTitle||"",content:e.sideTip||""},i=!0);var s=!1;return e.subs.forEach(function(e,l){e.index=l+1;var a=null,r={};if(!i){var _=!1;(e.sideView||e.sideTip)&&(a="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},_=!0),s=s||_}e.sideWrapper=a,e.sideData=r}),i=i||s,e.hasSide=i,e.sideWrapper=a,e.sideData=r,e.rightWidth=i?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryii");if(l.length){var i=e.find("._zs_galleryhW"),a=$(window).scrollTop();a>l.offset().top?i.css({position:"fixed"}):i.css({position:"absolute"});var r=e.find("._zs_galleryiq");if(r.length){var s=l.offset().top,_=this.updater.get().gapWidth;a>s+_?r.css({position:"fixed",top:0}):r.css({position:"absolute",top:_+"px"})}}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find(".unfound-[main]-from-index.less").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");r.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,i=l.updater.get("curStepInfo"),r=i.subs,_=r.map(function(e){return s.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var s=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){s=s&&e.ok,e.ok||_.push({id:l+1,label:r[l].label,msg:e.msg||""}),a.mix(t,e.remain||{})}),s)n.html(""),i.nextFn?i.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont unfound-[error-icon]-from-index.less">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var d=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(d.offset().top)}})},"nav<click>":function(e){var l=e.params,i=l.stepIndex,a=l.subStepIndex||-1;r.to({stepIndex:i,subStepIndex:a})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,r.to(e)}})});