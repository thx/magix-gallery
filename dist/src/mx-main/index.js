define("mx-main/index",["magix"],(e,l,a)=>{var r=e("magix"),s=r.Router,i=r.Vframe;r.applyStyle("_zs_galleryaf",'[mx-view*="mx-main/index"]{position:relative;background-color:#e8ebf2}._zs_galleryhx{position:absolute;top:0;left:0;bottom:0;padding-top:16px;background-color:var(--app-nav-bg);z-index:3}._zs_galleryhx ._zs_galleryhy{position:relative;font-size:14px}._zs_galleryhx ._zs_galleryhy:before{content:"";position:absolute;top:0;left:24px;bottom:0;width:0;border-left:1px solid #4d5873}._zs_galleryhx ._zs_galleryhy:first-child:before{top:23px}._zs_galleryhx ._zs_galleryhy:last-child:before{bottom:23px}._zs_galleryhx ._zs_galleryhy ._zs_galleryhz{position:relative;display:block;height:46px;line-height:46px;padding-left:36px}._zs_galleryhx ._zs_galleryhy ._zs_galleryhz ._zs_galleryhA{color:#fff;opacity:.5}._zs_galleryhx ._zs_galleryhy ._zs_galleryhz ._zs_galleryhB{opacity:0;position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-image:linear-gradient(-90deg,var(--app-brand),var(--app-brand-gradient));background-color:var(--app-brand);transition:all var(--duration)}._zs_galleryhx ._zs_galleryhy ._zs_galleryhz._zs_galleryhC ._zs_galleryhB,._zs_galleryhx ._zs_galleryhy ._zs_galleryhz._zs_galleryhC ._zs_galleryhA,._zs_galleryhx ._zs_galleryhy ._zs_galleryhz:hover ._zs_galleryhA{opacity:1}._zs_galleryhx ._zs_galleryhy ._zs_galleryhD ._zs_galleryhE{position:absolute;top:50%;left:16px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background-color:#4d5873;color:#fff;text-align:center;line-height:16px;font-size:12px;transition:all var(--duration)}._zs_galleryhx ._zs_galleryhy ._zs_galleryhF:before{content:"";position:absolute;top:50%;left:24px;width:10px;height:0;border-top:1px solid #4d5873}._zs_galleryhx ._zs_galleryhy._zs_galleryhG ._zs_galleryhD ._zs_galleryhA{opacity:1}._zs_galleryhx ._zs_galleryhy._zs_galleryhG ._zs_galleryhD ._zs_galleryhB{opacity:.2}._zs_galleryhx ._zs_galleryhy._zs_galleryhG ._zs_galleryhD._zs_galleryhC ._zs_galleryhE{background-color:#fff;color:var(--app-brand)}._zs_galleryhx ._zs_galleryhy._zs_galleryhG ._zs_galleryhD._zs_galleryhC ._zs_galleryhB{opacity:1}._zs_galleryhx ._zs_galleryhy._zs_galleryhH ._zs_galleryhz{cursor:not-allowed}._zs_galleryhx ._zs_galleryhy._zs_galleryhH ._zs_galleryhz:hover ._zs_galleryhA{opacity:.5}._zs_galleryhx ._zs_galleryhy._zs_galleryhH ._zs_galleryhI{position:absolute;top:50%;right:16px;margin-top:-6px;font-size:14px;font-weight:700;color:#4d5873}._zs_galleryhJ{position:relative;z-index:2}._zs_galleryhJ ._zs_galleryhK{position:relative;margin-bottom:16px;border-radius:var(--border-radius);background-color:#fff}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL{padding:8px 24px;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid var(--color-border)}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhM,._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhM>*,._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhN,._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhO{display:inline-block;height:32px;line-height:32px;vertical-align:middle;overflow:hidden}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhM{margin-right:5px;color:#999}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhN{font-size:16px}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhL ._zs_galleryhP{margin-left:20px;color:#999}._zs_galleryhJ ._zs_galleryhK ._zs_galleryhQ{padding:16px 24px}._zs_galleryhJ ._zs_galleryhR{position:absolute;background-color:#fff;border-radius:var(--border-radius)}._zs_galleryhJ ._zs_galleryhR ._zs_galleryhS{padding:8px 24px;line-height:32px;font-size:16px;border-bottom:1px solid var(--color-border)}._zs_galleryhJ ._zs_galleryhR ._zs_galleryhT{padding:16px 24px;color:#666}._zs_galleryhJ ._zs_galleryhU{text-align:center;padding:40px 0}._zs_galleryhJ ._zs_galleryhU ._zs_galleryhV{min-width:100px;margin-right:20px}._zs_galleryhJ ._zs_galleryhU ._zs_galleryhV:last-child{margin-right:0}._zs_galleryhW{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,s,i,_,t){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(o,g)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(e){return d[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(p,h)}}if(!t){var y=/[\\'"]/g;t=function(e){return s(e).replace(y,"\\$&")}}_||(_=function(e,l,a,r){for(r=e[z];--r;)if(e[a=z+r]===l)return a;return e[a=z+e[z]++]=l,a});var z="",c="",x=e.leftWidth,f=e.stepInfos,u=e.curStepIndex,v=e.curSubStepIndex,b=e.viewHeight,m=e.gapWidth,w=e.curStepInfo,I=e.rightWidth,S=e.childInfos,k=e.viewId;c+='<div class="_zs_galleryhx" style="width: '+r(x)+'px;">';for(var J=0,$=f.length;J<$;J++){var W=f[J];if(c+='<div class="_zs_galleryhy ',W.index==u&&(c+=" _zs_galleryhG "),c+=" ",W.locked&&(c+=" _zs_galleryhH "),c+='"><a href="javascript:;" class="_zs_galleryhz _zs_galleryhD ',W.index==u&&-1==v&&(c+=" _zs_galleryhC "),c+='" data-sub="-1" ',W.locked||(c+=' mx-click="'+l+"nav({stepIndex:"+r(W.index)+'})" '),c+=' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_galleryc.:_" class="_zs_galleryhE">'+r(J+1)+'</span><span mxs="_zs_galleryc.:_" class="_zs_galleryhB"></span><span mxa="_zs_galleryc.:a" class="_zs_galleryhA">'+r(W.label)+"</span></a>",!W.locked&&W.subs.length>1){c+=" ";for(var T=0,C=W.subs,K=C.length;T<K;T++){var L=C[T];c+='<a href="javascript:;" class="_zs_galleryhz _zs_galleryhF ',W.index==u&&v==L.index&&(c+=" _zs_galleryhC "),c+='" data-sub="'+r(L.index)+'" mx-click="'+l+"nav({stepIndex:"+r(W.index)+",subStepIndex:"+r(L.index)+'})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_galleryc.:_" class="_zs_galleryhB"></span><span mxa="_zs_galleryc.:b" class="_zs_galleryhA">'+r(L.label)+"</span></a>"}c+=" "}c+=" ",W.locked&&(c+='<i mxs="_zs_galleryc.:a" class="mc-iconfont _zs_galleryhI">&#xe759;</i>'),c+="</div>"}c+='</div><div mxv class="_zs_galleryhJ clearfix" style="min-height: '+r(b)+"px; padding-top: "+r(m)+"px; padding-right: "+r(m+(w.sideWrapper?I+m:0))+"px; padding-left: "+r(x+m)+'px;">';for(var D=0,A=w.subs,H=A.length;D<H;D++){c+='<div mxv mxa="_zs_galleryc.:c" class="_zs_galleryhK"><div mxa="_zs_galleryc.:d" class="_zs_galleryhL clearfix">',(L=A[D]).icon&&(c+='<span mxa="_zs_galleryc.:e" class="_zs_galleryhM">'+s(L.icon)+"</span>"),c+='<span mxa="_zs_galleryc.:f" class="_zs_galleryhN">'+r(L.label)+"</span>",L.tip&&(c+='<span mxa="_zs_galleryc.:g" class="_zs_galleryhP">'+s(L.tip)+"</span>"),c+='</div><div mxv="curStepInfo,childInfos" class="_zs_galleryhQ" id="sub_frame_'+r(L.index)+'" mx-view="'+r(L.view)+"?info="+_(a,L)+"&data="+_(a,S)+'"><div mxs="_zs_galleryc.:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>'}return c+=" ",w.sideWrapper&&(c+='<div mxv="curStepInfo" class="_zs_galleryhR" style="top: '+r(m)+"px; right: "+r(m)+"px; width: "+r(I)+'px;" mx-view="'+r(w.sideWrapper)+"?data="+_(a,w.sideData)+'"><div mxs="_zs_galleryc.:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>'),c+='<div mxa="_zs_galleryc.:h" class="_zs_galleryhU"><div>',w.prevTip&&(c+='<a mxa="_zs_galleryc.:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+r(w.prevTip)+"</a>"),c+=" ",w.nextTip&&(c+='<a mxa="_zs_galleryc.:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+r(w.nextTip)+"</a>"),c+='</div><div id="'+r(k)+'_error" class="_zs_galleryhW"></div></div></div>'},init:function(e){var l=this;l.updater.set({gapWidth:16,leftWidth:+e.leftWidth||160,rightWidth:+e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,a=+l.get("alreadyStep"),r=l.get("stepInfos"),i=s.parse().params,_=+(i.stepIndex||1);_>a&&(a=_);var t=+i.subStepIndex||-1;if(r.forEach(function(l,s){var i=s+1;l.index=i,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=i>a,i==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";i>1&&!r[s-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var o="";i<r.length&&(o=l.nextTip||"下一步"),l.nextTip=o}),i.stepIndex+""==_+""&&i.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:a,curStepInfo:r[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(s.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var o=$("#"+e.id+" ._zs_galleryhG");o.find("._zs_galleryhz").removeClass("_zs_galleryhC"),o.find('._zs_galleryhz[data-sub="'+t+'"]').addClass("_zs_galleryhC"),e.subScroll()}else e.$inited=1,n()}else s.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),a=!1,r=null,s={};(e.sideView||e.sideTip)&&(r="mx-main/tip",s={view:e.sideView||"",title:e.sideTitle||"",content:e.sideTip||""},a=!0);var i=!1;return e.subs.forEach(function(e,l){e.index=l+1;var r=null,s={};if(!a){var _=!1;(e.sideView||e.sideTip)&&(r="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},_=!0),i=i||_}e.sideWrapper=r,e.sideData=s}),a=a||i,e.hasSide=a,e.sideWrapper=r,e.sideData=s,e.rightWidth=a?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryhJ");if(l.length){var a=e.find("._zs_galleryhx"),r=$(window).scrollTop();r>l.offset().top?a.css({position:"fixed"}):a.css({position:"absolute"});var s=e.find("._zs_galleryhR");if(s.length){var i=l.offset().top,_=this.updater.get().gapWidth;r>i+_?s.css({position:"fixed",top:0}):s.css({position:"absolute",top:_+"px"})}}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find(".unfound-[main]-from-index.less").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");s.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,a=l.updater.get("curStepInfo"),s=a.subs,_=s.map(function(e){return i.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var i=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){i=i&&e.ok,e.ok||_.push({id:l+1,label:s[l].label,msg:e.msg||""}),r.mix(t,e.remain||{})}),i)n.html(""),a.nextFn?a.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont unfound-[error-icon]-from-index.less">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var o=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(o.offset().top)}})},"nav<click>":function(e){var l=e.params,a=l.stepIndex,r=l.subStepIndex||-1;s.to({stepIndex:a,subStepIndex:r})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,s.to(e)}})});