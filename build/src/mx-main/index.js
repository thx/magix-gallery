define("mx-main/index",["magix"],(e,l,a)=>{var s=e("magix"),r=s.Router,i=s.Vframe;s.applyStyle("_zs_galleryaf",'._zs_galleryjc{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjd{position:relative;background-color:#fafafa}._zs_galleryjd ._zs_galleryje{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjg{color:#666}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjg:hover{color:#4d7fff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjh{line-height:30px}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjh ._zs_galleryji>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjh:hover ._zs_galleryji>*{color:#4d7fff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjj{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjj:before{content:"";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjj:after{content:"";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryjd ._zs_galleryje ._zs_galleryjf ._zs_galleryjj:last-child:before{height:16px}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk{background-color:#f6f9ff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk ._zs_galleryjl,._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk ._zs_galleryjl ._zs_galleryji>*,._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk ._zs_galleryjl:hover,._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk ._zs_galleryjl:hover ._zs_galleryji>*{color:#4d7fff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjk ._zs_galleryjm{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:#4d7fff}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjn ._zs_galleryjg,._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjn ._zs_galleryjg:hover{color:#666;cursor:not-allowed}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjn ._zs_galleryjh:hover ._zs_galleryji>*{color:#999}._zs_galleryjd ._zs_galleryje ._zs_galleryjf._zs_galleryjn ._zs_galleryjo{position:absolute;top:50%;right:8px;height:18px;margin-top:-9px;font-size:14px;line-height:18px;font-weight:700;color:#eee}._zs_galleryjd ._zs_galleryjp ._zs_galleryjq{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryjd ._zs_galleryjp ._zs_galleryjr{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}._zs_galleryjd ._zs_galleryjp ._zs_galleryjr ._zs_galleryjs{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryjd ._zs_galleryjp ._zs_galleryjr ._zs_galleryjs:last-child{padding-bottom:40px}._zs_galleryjd ._zs_galleryjp ._zs_galleryjr ._zs_galleryjt{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid #e6e6e6}._zs_galleryjd ._zs_galleryjp ._zs_galleryju{text-align:center;padding:40px 0}._zs_galleryjd ._zs_galleryjv{display:inline-block;position:relative;margin-top:10px;color:#a40100}._zs_galleryjd ._zs_galleryjv ._zs_galleryjw{position:absolute;left:-20px;top:0;color:#a40100}'),a.exports=s.View.extend({tmpl:function(e,l,a,s,r,i,_,t){if(a||(a=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(d,g)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},z=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(z,p)}}if(!t){var y=/[\\'"]/g;t=function(e){return r(e).replace(y,"\\$&")}}_||(_=function(e,l,a,s){for(s=e[c];--s;)if(e[a=c+s]===l)return a;return e[a=c+e[c]++]=l,a});var c="",f="",j=e.viewHeight,x=e.leftWidth,v=e.stepInfos,u=e.curStepIndex,h=e.curSubStepIndex,m=e.curStepInfo,b=e.viewId;f+='<div mxv class="_zs_galleryjd" style="min-height: '+s(j)+'px;"><div class="_zs_galleryje" style="width: '+s(x)+'px;">';for(var w=0,I=v.length;w<I;w++){var S=v[w];if(f+='<div class="_zs_galleryjf ',S.index==u&&(f+=" _zs_galleryjk "),f+=" ",S.locked&&(f+=" _zs_galleryjn "),f+='"><div mxa="_zs_gallerycz:_" class="_zs_galleryjh"><a href="javascript:;" class="_zs_galleryjg _zs_galleryjh clearfix ',S.index==u&&-1==h&&(f+=" _zs_galleryjl "),f+='" data-sub="-1" ',S.locked||(f+=' mx-click="'+l+"nav({stepIndex:"+s(S.index)+'})" '),f+=">",S.icon&&(f+='<span mxa="_zs_gallerycz:a" class="_zs_galleryji fl">'+r(S.icon)+"</span>"),f+='<span mxa="_zs_gallerycz:b" class="fl">'+s(S.label)+"</span></a></div>",!S.locked&&S.subs.length>1){f+="<div>";for(var k=0,$=S.subs,T=$.length;k<T;k++){var W=$[k];f+='<div mxa="_zs_gallerycz:c" class="_zs_galleryjj"><a href="javascript:;" class="_zs_galleryjg ',S.index==u&&h==W.index&&(f+=" _zs_galleryjl "),f+='" data-sub="'+s(W.index)+'" mx-click="'+l+"nav({stepIndex:"+s(S.index)+",subStepIndex:"+s(W.index)+'})">'+s(W.label)+"</a></div>"}f+="</div>"}f+=" ",S.index==u&&(f+='<i mxs="_zs_gallerycz:_" class="mc-iconfont _zs_galleryjm">&#xe602;</i>'),f+=" ",S.locked&&(f+='<i mxs="_zs_gallerycz:a" class="mc-iconfont _zs_galleryjo">&#xe759;</i>'),f+="</div>"}f+='</div><div mxv class="_zs_galleryjp" style="padding-left: '+s(x)+'px;"><div mxa="_zs_gallerycz:d" class="_zs_galleryjq">'+s(m.label)+'</div><div mxv mxa="_zs_gallerycz:e" class="_zs_galleryjr"><div mxv>';for(var V=0,D=m.subs,H=D.length;V<H;V++){W=D[V];f+='<div mxv class="_zs_galleryjs" style="padding-right: '+s(m.rightWidth+20)+'px;"><div mxv="curStepInfo" mx-view="'+s(W.view)+"?info="+_(a,W)+'" id="sub_frame_'+s(W.index)+'"><div mxs="_zs_gallerycz:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',W.sideWrapper&&(f+='<div mxv="curStepInfo" mx-view="'+s(W.sideWrapper)+"?data="+_(a,W.sideData)+'" class="_zs_galleryjt" style="width: '+s(m.rightWidth)+'px;"><div mxs="_zs_gallerycz:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),f+="</div>"}return f+="</div>",m.sideWrapper&&(f+='<div mxv="curStepInfo" mx-view="'+s(m.sideWrapper)+"?data="+_(a,m.sideData)+'" class="_zs_galleryjt" style="width: '+s(m.rightWidth)+'px;"><div mxs="_zs_gallerycz:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),f+="</div>",m.customTrigger||(f+='<div mxa="_zs_gallerycz:f" class="_zs_galleryju"><div>',m.prevTip&&(f+='<a mxa="_zs_gallerycz:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+s(m.prevTip)+"</a>"),f+=" ",m.nextTip&&(f+='<a mxa="_zs_gallerycz:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+s(m.nextTip)+"</a>"),f+='</div><div id="'+s(b)+'_error" class="_zs_galleryjv"></div></div>'),f+="</div></div>"},init:function(e){var l=this;l.updater.set({leftWidth:e.leftWidth||160,rightWidth:e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,a=+l.get("alreadyStep"),s=l.get("stepInfos"),i=r.parse().params,_=+(i.stepIndex||1);_>a&&(a=_);var t=+i.subStepIndex||-1;if(s.forEach(function(l,r){var i=r+1;l.index=i,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=i>a,i==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";!l.customTrigger&&i>1&&!s[r-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var d="";!l.customTrigger&&i<s.length&&(d=l.nextTip||"下一步"),l.nextTip=d}),i.stepIndex+""==_+""&&i.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:a,curStepInfo:s[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(r.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var d=$("#"+e.id+" ._zs_galleryjk");d.find("._zs_galleryjg").removeClass("_zs_galleryjl"),d.find('._zs_galleryjg[data-sub="'+t+'"]').addClass("_zs_galleryjl"),e.subScroll()}else e.$inited=1,n()}else r.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),a=!1,s=null,r={};(e.sideView||e.sideTip)&&(s="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},a=!0);var i=!1;return e.subs.forEach(function(e,l){e.index=l+1;var s=null,r={};if(!a){var _=!1;(e.sideView||e.sideTip)&&(s="mx-main/tip",r={view:e.sideView||"",content:e.sideTip||""},_=!0),i=i||_}e.sideWrapper=s,e.sideData=r}),a=a||i,e.hasSide=a,e.sideWrapper=s,e.sideData=r,e.rightWidth=a?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryjp");if(l.length){var a=e.find("._zs_galleryje");$(window).scrollTop()>l.offset().top?a.css({position:"fixed"}):a.css({position:"absolute"})}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find("._zs_galleryjd").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");r.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,a=l.updater.get("curStepInfo"),r=a.subs,_=r.map(function(e){return i.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var i=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){i=i&&e.ok,e.ok||_.push({id:l+1,label:r[l].label,msg:e.msg||""}),s.mix(t,e.remain||{})}),i)n.html(""),a.nextFn?a.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont _zs_galleryjw">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var d=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(d.offset().top)}})},"nav<click>":function(e){var l=e.params,a=l.stepIndex,s=l.subStepIndex||-1;r.to({stepIndex:a,subStepIndex:s})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,r.to(e)}})});