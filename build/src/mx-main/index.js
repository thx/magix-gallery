define("mx-main/index",["magix"],(e,l,a)=>{var r=e("magix"),s=r.Router,i=r.Vframe;r.applyStyle("_zs_galleryag",'._zs_galleryje{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjf{position:relative;background-color:#fafafa}._zs_galleryjf ._zs_galleryjg{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryji{color:#666}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryji:hover{color:#4d7fff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjj{line-height:30px}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjj ._zs_galleryjk>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjj:hover ._zs_galleryjk>*{color:#4d7fff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjl{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjl:before{content:"";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjl:after{content:"";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh ._zs_galleryjl:last-child:before{height:16px}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm{background-color:#f6f9ff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm ._zs_galleryjn,._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm ._zs_galleryjn ._zs_galleryjk>*,._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm ._zs_galleryjn:hover,._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm ._zs_galleryjn:hover ._zs_galleryjk>*{color:#4d7fff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjm ._zs_galleryjo{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:#4d7fff}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjp ._zs_galleryji,._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjp ._zs_galleryji:hover{color:#666;cursor:not-allowed}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjp ._zs_galleryjj:hover ._zs_galleryjk>*{color:#999}._zs_galleryjf ._zs_galleryjg ._zs_galleryjh._zs_galleryjp ._zs_galleryjq{position:absolute;top:50%;right:8px;height:18px;margin-top:-9px;font-size:14px;line-height:18px;font-weight:700;color:#eee}._zs_galleryjf ._zs_galleryjr ._zs_galleryjs{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryjf ._zs_galleryjr ._zs_galleryjt{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}._zs_galleryjf ._zs_galleryjr ._zs_galleryjt ._zs_galleryju{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryjf ._zs_galleryjr ._zs_galleryjt ._zs_galleryju:last-child{padding-bottom:40px}._zs_galleryjf ._zs_galleryjr ._zs_galleryjt ._zs_galleryjv{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid #e6e6e6}._zs_galleryjf ._zs_galleryjr ._zs_galleryjw{text-align:center;padding:40px 0}._zs_galleryjf ._zs_galleryjx{display:inline-block;position:relative;margin-top:10px;color:#a40100}._zs_galleryjf ._zs_galleryjx ._zs_galleryjy{position:absolute;left:-20px;top:0;color:#a40100}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,s,i,_,t){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(g,o)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},y=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(y,p)}}if(!t){var f=/[\\'"]/g;t=function(e){return s(e).replace(f,"\\$&")}}_||(_=function(e,l,a,r){for(r=e[z];--r;)if(e[a=z+r]===l)return a;return e[a=z+e[z]++]=l,a});var z="",c="",j=e.viewHeight,x=e.leftWidth,h=e.stepInfos,v=e.curStepIndex,u=e.curSubStepIndex,m=e.curStepInfo,b=e.viewId;c+='<div mxv class="_zs_galleryjf" style="min-height: '+r(j)+'px;"><div class="_zs_galleryjg" style="width: '+r(x)+'px;">';for(var w=0,I=h.length;w<I;w++){var S=h[w];if(c+='<div class="_zs_galleryjh ',S.index==v&&(c+=" _zs_galleryjm "),c+=" ",S.locked&&(c+=" _zs_galleryjp "),c+='"><div mxa="_zs_gallerycD:_" class="_zs_galleryjj"><a href="javascript:;" class="_zs_galleryji _zs_galleryjj clearfix ',S.index==v&&-1==u&&(c+=" _zs_galleryjn "),c+='" data-sub="-1" ',S.locked||(c+=' mx-click="'+l+"nav({stepIndex:"+r(S.index)+'})" '),c+=">",S.icon&&(c+='<span mxa="_zs_gallerycD:a" class="_zs_galleryjk fl">'+s(S.icon)+"</span>"),c+='<span mxa="_zs_gallerycD:b" class="fl">'+r(S.label)+"</span></a></div>",!S.locked&&S.subs.length>1){c+="<div>";for(var k=0,$=S.subs,D=$.length;k<D;k++){var T=$[k];c+='<div mxa="_zs_gallerycD:c" class="_zs_galleryjl"><a href="javascript:;" class="_zs_galleryji ',S.index==v&&u==T.index&&(c+=" _zs_galleryjn "),c+='" data-sub="'+r(T.index)+'" mx-click="'+l+"nav({stepIndex:"+r(S.index)+",subStepIndex:"+r(T.index)+'})">'+r(T.label)+"</a></div>"}c+="</div>"}c+=" ",S.index==v&&(c+='<i mxs="_zs_gallerycD:_" class="mc-iconfont _zs_galleryjo">&#xe602;</i>'),c+=" ",S.locked&&(c+='<i mxs="_zs_gallerycD:a" class="mc-iconfont _zs_galleryjq">&#xe759;</i>'),c+="</div>"}c+='</div><div mxv class="_zs_galleryjr" style="padding-left: '+r(x)+'px;"><div mxa="_zs_gallerycD:d" class="_zs_galleryjs">'+r(m.label)+'</div><div mxv mxa="_zs_gallerycD:e" class="_zs_galleryjt"><div mxv>';for(var W=0,V=m.subs,H=V.length;W<H;W++){T=V[W];c+='<div mxv class="_zs_galleryju" style="padding-right: '+r(m.rightWidth+20)+'px;"><div mxv="curStepInfo" mx-view="'+r(T.view)+"?info="+_(a,T)+'" id="sub_frame_'+r(T.index)+'"><div mxs="_zs_gallerycD:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',T.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+r(T.sideWrapper)+"?data="+_(a,T.sideData)+'" class="_zs_galleryjv" style="width: '+r(m.rightWidth)+'px;"><div mxs="_zs_gallerycD:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),c+="</div>"}return c+="</div>",m.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+r(m.sideWrapper)+"?data="+_(a,m.sideData)+'" class="_zs_galleryjv" style="width: '+r(m.rightWidth)+'px;"><div mxs="_zs_gallerycD:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),c+="</div>",m.customTrigger||(c+='<div mxa="_zs_gallerycD:f" class="_zs_galleryjw"><div>',m.prevTip&&(c+='<a mxa="_zs_gallerycD:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+r(m.prevTip)+"</a>"),c+=" ",m.nextTip&&(c+='<a mxa="_zs_gallerycD:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+r(m.nextTip)+"</a>"),c+='</div><div id="'+r(b)+'_error" class="_zs_galleryjx"></div></div>'),c+="</div></div>"},init:function(e){var l=this;l.updater.set({leftWidth:e.leftWidth||160,rightWidth:e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,a=+l.get("alreadyStep"),r=l.get("stepInfos"),i=s.parse().params,_=+(i.stepIndex||1);_>a&&(a=_);var t=+i.subStepIndex||-1;if(r.forEach(function(l,s){var i=s+1;l.index=i,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=i>a,i==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";!l.customTrigger&&i>1&&!r[s-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var g="";!l.customTrigger&&i<r.length&&(g=l.nextTip||"下一步"),l.nextTip=g}),i.stepIndex+""==_+""&&i.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:a,curStepInfo:r[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(s.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var g=$("#"+e.id+" ._zs_galleryjm");g.find("._zs_galleryji").removeClass("_zs_galleryjn"),g.find('._zs_galleryji[data-sub="'+t+'"]').addClass("_zs_galleryjn"),e.subScroll()}else e.$inited=1,n()}else s.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),a=!1,r=null,s={};(e.sideView||e.sideTip)&&(r="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},a=!0);var i=!1;return e.subs.forEach(function(e,l){e.index=l+1;var r=null,s={};if(!a){var _=!1;(e.sideView||e.sideTip)&&(r="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},_=!0),i=i||_}e.sideWrapper=r,e.sideData=s}),a=a||i,e.hasSide=a,e.sideWrapper=r,e.sideData=s,e.rightWidth=a?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryjr");if(l.length){var a=e.find("._zs_galleryjg");$(window).scrollTop()>l.offset().top?a.css({position:"fixed"}):a.css({position:"absolute"})}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find("._zs_galleryjf").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");s.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,a=l.updater.get("curStepInfo"),s=a.subs,_=s.map(function(e){return i.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var i=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){i=i&&e.ok,e.ok||_.push({id:l+1,label:s[l].label,msg:e.msg||""}),r.mix(t,e.remain||{})}),i)n.html(""),a.nextFn?a.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont _zs_galleryjy">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var g=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(g.offset().top)}})},"nav<click>":function(e){var l=e.params,a=l.stepIndex,r=l.subStepIndex||-1;s.to({stepIndex:a,subStepIndex:r})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,s.to(e)}})});