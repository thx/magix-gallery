define("mx-main/index",["magix"],(l,e,i)=>{var a=l("magix"),r=a.Router,s=a.Vframe;a.applyStyle("_zs_galleryaf",'[mx-view*="mx-main/index"]{position:relative;background-color:#e8ebf2}._zs_galleryhV{position:absolute;top:0;left:0;bottom:0;padding-top:16px;background-color:var(--app-nav-bg);z-index:3}._zs_galleryhV ._zs_galleryhW{position:relative;font-size:14px}._zs_galleryhV ._zs_galleryhW:before{content:"";position:absolute;top:0;left:24px;bottom:0;width:0;border-left:1px solid #4d5873}._zs_galleryhV ._zs_galleryhW:first-child:before{top:23px}._zs_galleryhV ._zs_galleryhW:last-child:before{bottom:23px}._zs_galleryhV ._zs_galleryhW ._zs_galleryhX{position:relative;display:block;height:46px;line-height:46px;padding-left:36px}._zs_galleryhV ._zs_galleryhW ._zs_galleryhX ._zs_galleryhY{color:#fff;opacity:.5}._zs_galleryhV ._zs_galleryhW ._zs_galleryhX ._zs_galleryhZ{opacity:0;position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-image:linear-gradient(-90deg,var(--app-brand),var(--app-brand-gradient));background-color:var(--app-brand);transition:all var(--duration)}._zs_galleryhV ._zs_galleryhW ._zs_galleryhX._zs_galleryi_ ._zs_galleryhZ,._zs_galleryhV ._zs_galleryhW ._zs_galleryhX._zs_galleryi_ ._zs_galleryhY,._zs_galleryhV ._zs_galleryhW ._zs_galleryhX:hover ._zs_galleryhY{opacity:1}._zs_galleryhV ._zs_galleryhW ._zs_galleryia ._zs_galleryic{position:absolute;top:50%;left:16px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background-color:#4d5873;color:#fff;text-align:center;line-height:16px;font-size:12px;transition:all var(--duration)}._zs_galleryhV ._zs_galleryhW ._zs_galleryid:before{content:"";position:absolute;top:50%;left:24px;width:10px;height:0;border-top:1px solid #4d5873}._zs_galleryhV ._zs_galleryhW._zs_galleryie ._zs_galleryia ._zs_galleryhY{opacity:1}._zs_galleryhV ._zs_galleryhW._zs_galleryie ._zs_galleryia ._zs_galleryhZ{opacity:.2}._zs_galleryhV ._zs_galleryhW._zs_galleryie ._zs_galleryia._zs_galleryi_ ._zs_galleryic{background-color:#fff;color:var(--app-brand)}._zs_galleryhV ._zs_galleryhW._zs_galleryie ._zs_galleryia._zs_galleryi_ ._zs_galleryhZ{opacity:1}._zs_galleryhV ._zs_galleryhW._zs_galleryif ._zs_galleryhX{cursor:not-allowed}._zs_galleryhV ._zs_galleryhW._zs_galleryif ._zs_galleryhX:hover ._zs_galleryhY{opacity:.5}._zs_galleryhV ._zs_galleryhW._zs_galleryif ._zs_galleryig{position:absolute;top:50%;right:16px;margin-top:-6px;font-size:14px;font-weight:700;color:#4d5873}._zs_galleryih{position:relative;z-index:2}._zs_galleryih ._zs_galleryii{position:relative;margin-bottom:16px;border-radius:var(--border-radius);background-color:#fff}._zs_galleryih ._zs_galleryii ._zs_galleryij{padding:8px 24px;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid var(--color-border)}._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryik,._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryik>*,._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryil,._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryim{display:inline-block;height:32px;line-height:32px;vertical-align:middle;overflow:hidden}._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryik{margin-right:5px;color:#999}._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryil{font-size:16px}._zs_galleryih ._zs_galleryii ._zs_galleryij ._zs_galleryin{margin-left:20px;color:#999}._zs_galleryih ._zs_galleryii ._zs_galleryio{padding:16px 24px}._zs_galleryih ._zs_galleryip{position:absolute;background-color:#fff;border-radius:var(--border-radius)}._zs_galleryih ._zs_galleryip ._zs_galleryiq{padding:8px 24px;line-height:32px;font-size:16px;border-bottom:1px solid var(--color-border)}._zs_galleryih ._zs_galleryip ._zs_galleryir{padding:16px 24px;color:#666}._zs_galleryih ._zs_galleryis{text-align:center;padding:40px 0}._zs_galleryih ._zs_galleryis ._zs_galleryit{min-width:100px;margin-right:20px}._zs_galleryih ._zs_galleryis ._zs_galleryit:last-child{margin-right:0}._zs_galleryiu{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}'),i.exports=a.View.extend({tmpl:function(l,e,i,a,r,s,_,t){if(i||(i=l),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(l){return"&"+n[l]+";"};r=function(l){return""+(null==l?"":l)},a=function(l){return r(l).replace(d,o)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return g[l]},y=/[!')(*]/g;s=function(l){return encodeURIComponent(r(l)).replace(y,p)}}if(!t){var h=/[\\'"]/g;t=function(l){return r(l).replace(h,"\\$&")}}_||(_=function(l,e,i,a){for(a=l[z];--a;)if(l[i=z+a]===e)return i;return l[i=z+l[z]++]=e,i});var z="",c="",x=l.leftWidth,f=l.stepInfos,u=l.curStepIndex,v=l.curSubStepIndex,b=l.viewHeight,m=l.gapWidth,w=l.curStepInfo,I=l.rightWidth,S=l.childInfos,W=l.viewId;c+='<div class="_zs_galleryhV" style="width: '+a(x)+'px;">';for(var k=0,V=f.length;k<V;k++){var $=f[k];if(c+='<div class="_zs_galleryhW ',$.index==u&&(c+=" _zs_galleryie "),c+=" ",$.locked&&(c+=" _zs_galleryif "),c+='"><a href="javascript:;" class="_zs_galleryhX _zs_galleryia ',$.index==u&&-1==v&&(c+=" _zs_galleryi_ "),c+='" data-sub="-1" ',$.locked||(c+=' mx-click="'+e+"nav({stepIndex:"+a($.index)+'})" '),c+=' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_gallerydl:_" class="_zs_galleryic">'+a(k+1)+'</span><span mxs="_zs_gallerydl:_" class="_zs_galleryhZ"></span><span mxa="_zs_gallerydl:a" class="_zs_galleryhY">'+a($.label)+"</span></a>",!$.locked&&$.subs.length>1){c+=" ";for(var T=0,j=$.subs,X=j.length;T<X;T++){var Y=j[T];c+='<a href="javascript:;" class="_zs_galleryhX _zs_galleryid ',$.index==u&&v==Y.index&&(c+=" _zs_galleryi_ "),c+='" data-sub="'+a(Y.index)+'" mx-click="'+e+"nav({stepIndex:"+a($.index)+",subStepIndex:"+a(Y.index)+'})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_gallerydl:_" class="_zs_galleryhZ"></span><span mxa="_zs_gallerydl:b" class="_zs_galleryhY">'+a(Y.label)+"</span></a>"}c+=" "}c+=" ",$.locked&&(c+='<i mxs="_zs_gallerydl:a" class="mc-iconfont _zs_galleryig">&#xe759;</i>'),c+="</div>"}c+='</div><div mxv class="_zs_galleryih clearfix" style="min-height: '+a(b)+"px; padding-top: "+a(m)+"px; padding-right: "+a(m+(w.sideWrapper?I+m:0))+"px; padding-left: "+a(x+m)+'px;">';for(var Z=0,H=w.subs,C=H.length;Z<C;Z++){c+='<div mxv mxa="_zs_gallerydl:c" class="_zs_galleryii"><div mxa="_zs_gallerydl:d" class="_zs_galleryij clearfix">',(Y=H[Z]).icon&&(c+='<span mxa="_zs_gallerydl:e" class="_zs_galleryik">'+r(Y.icon)+"</span>"),c+='<span mxa="_zs_gallerydl:f" class="_zs_galleryil">'+a(Y.label)+"</span>",Y.tip&&(c+='<span mxa="_zs_gallerydl:g" class="_zs_galleryin">'+r(Y.tip)+"</span>"),c+='</div><div mxv="curStepInfo,childInfos" class="_zs_galleryio" id="sub_frame_'+a(Y.index)+'" mx-view="'+a(Y.view)+"?info="+_(i,Y)+"&data="+_(i,S)+'"><div mxs="_zs_gallerydl:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>'}return c+=" ",w.sideWrapper&&(c+='<div mxv="curStepInfo" class="_zs_galleryip" style="top: '+a(m)+"px; right: "+a(m)+"px; width: "+a(I)+'px;" mx-view="'+a(w.sideWrapper)+"?data="+_(i,w.sideData)+'"><div mxs="_zs_gallerydl:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>'),c+='<div mxa="_zs_gallerydl:h" class="_zs_galleryis"><div>',w.prevTip&&(c+='<a mxa="_zs_gallerydl:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+e+'prev()">'+a(w.prevTip)+"</a>"),c+=" ",w.nextTip&&(c+='<a mxa="_zs_gallerydl:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+e+'next()">'+a(w.nextTip)+"</a>"),c+='</div><div id="'+a(W)+'_error" class="_zs_galleryiu"></div></div></div>'},init:function(l){var e=this;e.updater.set({gapWidth:16,leftWidth:+l.leftWidth||160,rightWidth:+l.rightWidth||260,alreadyStep:l.alreadyStep||1,stepInfos:l.stepInfos||[],viewId:e.id,viewHeight:$(window).height()}),e.observeLocation(["stepIndex","subStepIndex"]),e.owner.oncreated=function(){e.$init||(e.subScroll(),e.$init=1)},e.ondestroy=function(){e.owner.off("created")}},render:function(){var l=this;l.$init=null;var e=l.updater,i=+e.get("alreadyStep"),a=e.get("stepInfos"),s=r.parse().params,_=+(s.stepIndex||1);_>i&&(i=_);var t=+s.subStepIndex||-1;if(a.forEach(function(e,r){var s=r+1;e.index=s,e.subs=e.subs||[],(e=l.wrapSide(e)).locked=s>i,s==_&&(t>e.subs.length||1==e.subs.length)&&(t=-1);var n="";s>1&&!a[r-1].locked&&(n=e.prevTip||"返回上一步"),e.prevTip=n;var d="";s<a.length&&(d=e.nextTip||"下一步"),e.nextTip=d}),s.stepIndex+""==_+""&&s.subStepIndex+""==t+""){var n=function(){l.updater.digest({alreadyStep:i,curStepInfo:a[_-1],curStepIndex:_,curSubStepIndex:t})};if(l.$inited)if(r.diff().params.stepIndex)n();else{l.updater.set({curSubStepIndex:t});var d=$("#"+l.id+" ._zs_galleryie");d.find("._zs_galleryhX").removeClass("_zs_galleryi_"),d.find('._zs_galleryhX[data-sub="'+t+'"]').addClass("_zs_galleryi_"),l.subScroll()}else l.$inited=1,n()}else r.to({stepIndex:_,subStepIndex:t})},wrapSide:function(l){var e=+this.updater.get("rightWidth"),i=!1,a=null,r={};(l.sideView||l.sideTip)&&(a="mx-main/tip",r={view:l.sideView||"",title:l.sideTitle||"",content:l.sideTip||""},i=!0);var s=!1;return l.subs.forEach(function(l,e){l.index=e+1;var a=null,r={};if(!i){var _=!1;(l.sideView||l.sideTip)&&(a="mx-main/tip",r={view:l.sideView||"",content:l.sideTip||""},_=!0),s=s||_}l.sideWrapper=a,l.sideData=r}),i=i||s,l.hasSide=i,l.sideWrapper=a,l.sideData=r,l.rightWidth=i?e:0,l},subScroll:function(){var l,e=+this.updater.get("curSubStepIndex");e>0?l=$("#"+this.id+" #sub_frame_"+e).offset().top:l=0;$(window).scrollTop(l)},"$win<scroll>":function(){var l=$("#"+this.id),e=l.find("._zs_galleryih");if(e.length){var i=l.find("._zs_galleryhV"),a=$(window).scrollTop();a>e.offset().top?i.css({position:"fixed"}):i.css({position:"absolute"});var r=l.find("._zs_galleryip");if(r.length){var s=e.offset().top,_=this.updater.get().gapWidth;a>s+_?r.css({position:"fixed",top:0}):r.css({position:"absolute",top:_+"px"})}}},"$win<resize>":function(){var l=$(window).height();this.updater.set({viewHeight:l}),$("#"+this.id).find(".unfound-[main]-from-index.less").css({minHeight:l})},"prev<click>":function(l){var e=this.updater.get("curStepIndex");r.to({stepIndex:+e-1,subStepIndex:-1})},"next<click>":function(l){var e=this,i=e.updater.get("curStepInfo"),r=i.subs,_=r.map(function(l){return s.get("sub_frame_"+l.index).invoke("check")});Promise.all(_).then(function(l){var s=!0,_=[],t={},n=$("#"+e.id+"_error");if(l.forEach(function(l,e){s=s&&l.ok,l.ok||_.push({id:e+1,label:r[e].label,msg:l.msg||""}),a.mix(t,l.remain||{})}),s)n.html(""),i.nextFn?i.nextFn(t,function(l){e.next(l)}):e.next({});else{n.html('\n                    <i class="mc-iconfont unfound-[error-icon]-from-index.less">&#xe6ad;</i>\n                    '+_.map(function(l){return"\n                        <div>"+l.label+"："+l.msg+"</div>\n                    "}).join("")+"\n                ");var d=$("#"+e.id+" #sub_frame_"+_[0].id);$(window).scrollTop(d.offset().top)}})},"nav<click>":function(l){var e=l.params,i=e.stepIndex,a=e.subStepIndex||-1;r.to({stepIndex:i,subStepIndex:a})},next:function(l){var e=this.updater.get("curStepIndex");l.stepIndex=+e+1,r.to(l)}})});