define("mx-main/index",["magix"],(e,l,r)=>{var a=e("magix"),s=a.Router,i=a.Vframe;a.applyStyle("_zs_galleryag",'._zs_galleryhy{position:relative;background-color:var(--color-bg)}._zs_galleryhy ._zs_galleryhz{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhB{color:#666}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhB:hover{color:var(--color-brand)}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhC{line-height:30px}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhC ._zs_galleryhD>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhC:hover ._zs_galleryhD>*{color:var(--color-brand)}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhE{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhE:before{content:"";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhE:after{content:"";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA ._zs_galleryhE:last-child:before{height:16px}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF{background-color:var(--color-brand-opacity)}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF ._zs_galleryhG,._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF ._zs_galleryhG ._zs_galleryhD>*,._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF ._zs_galleryhG:hover,._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF ._zs_galleryhG:hover ._zs_galleryhD>*{color:var(--color-brand)}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhF ._zs_galleryhH{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:var(--color-brand)}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhI ._zs_galleryhB,._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhI ._zs_galleryhB:hover{color:#666;cursor:not-allowed}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhI ._zs_galleryhC:hover ._zs_galleryhD>*{color:#999}._zs_galleryhy ._zs_galleryhz ._zs_galleryhA._zs_galleryhI ._zs_galleryhJ{position:absolute;top:50%;right:8px;height:18px;margin-top:-9px;font-size:14px;line-height:18px;font-weight:700;color:#eee}._zs_galleryhy ._zs_galleryhK ._zs_galleryhL{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryhy ._zs_galleryhK ._zs_galleryhM{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_galleryhy ._zs_galleryhK ._zs_galleryhM ._zs_galleryhN{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryhy ._zs_galleryhK ._zs_galleryhM ._zs_galleryhN:last-child{padding-bottom:40px}._zs_galleryhy ._zs_galleryhK ._zs_galleryhM ._zs_galleryhO{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid var(--color-border)}._zs_galleryhy ._zs_galleryhK ._zs_galleryhP{text-align:center;padding:40px 0}._zs_galleryhy ._zs_galleryhQ{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}._zs_galleryhy ._zs_galleryhQ ._zs_galleryhR{position:absolute;left:-20px;top:0;color:var(--color-red)}'),r.exports=a.View.extend({tmpl:function(e,l,r,a,s,i,_,t){if(r||(r=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(o,g)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(e){return d[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(p,h)}}if(!t){var y=/[\\'"]/g;t=function(e){return s(e).replace(y,"\\$&")}}_||(_=function(e,l,r,a){for(a=e[z];--a;)if(e[r=z+a]===l)return r;return e[r=z+e[z]++]=l,r});var z="",c="",x=e.viewHeight,v=e.leftWidth,f=e.stepInfos,u=e.curStepIndex,b=e.curSubStepIndex,m=e.curStepInfo,I=e.viewId;c+='<div mxv class="_zs_galleryhy" style="min-height: '+a(x)+'px;"><div class="_zs_galleryhz" style="width: '+a(v)+'px;">';for(var w=0,S=f.length;w<S;w++){var k=f[w];if(c+='<div class="_zs_galleryhA ',k.index==u&&(c+=" _zs_galleryhF "),c+=" ",k.locked&&(c+=" _zs_galleryhI "),c+='"><div mxa="_zs_galleryc[:_" class="_zs_galleryhC"><a href="javascript:;" class="_zs_galleryhB _zs_galleryhC clearfix ',k.index==u&&-1==b&&(c+=" _zs_galleryhG "),c+='" data-sub="-1" ',k.locked||(c+=' mx-click="'+l+"nav({stepIndex:"+a(k.index)+'})" '),c+=">",k.icon&&(c+='<span mxa="_zs_galleryc[:a" class="_zs_galleryhD fl">'+s(k.icon)+"</span>"),c+='<span mxa="_zs_galleryc[:b" class="fl">'+a(k.label)+"</span></a></div>",!k.locked&&k.subs.length>1){c+="<div>";for(var A=0,$=k.subs,T=$.length;A<T;A++){var W=$[A];c+='<div mxa="_zs_galleryc[:c" class="_zs_galleryhE"><a href="javascript:;" class="_zs_galleryhB ',k.index==u&&b==W.index&&(c+=" _zs_galleryhG "),c+='" data-sub="'+a(W.index)+'" mx-click="'+l+"nav({stepIndex:"+a(k.index)+",subStepIndex:"+a(W.index)+'})">'+a(W.label)+"</a></div>"}c+="</div>"}c+=" ",k.index==u&&(c+='<i mxs="_zs_galleryc[:_" class="mc-iconfont _zs_galleryhH">&#xe602;</i>'),c+=" ",k.locked&&(c+='<i mxs="_zs_galleryc[:a" class="mc-iconfont _zs_galleryhJ">&#xe759;</i>'),c+="</div>"}c+='</div><div mxv class="_zs_galleryhK" style="padding-left: '+a(v)+'px;"><div mxa="_zs_galleryc[:d" class="_zs_galleryhL">'+a(m.label)+'</div><div mxv mxa="_zs_galleryc[:e" class="_zs_galleryhM"><div mxv>';for(var D=0,F=m.subs,C=F.length;D<C;D++){W=F[D];c+='<div mxv class="_zs_galleryhN" style="padding-right: '+a(m.rightWidth+20)+'px;"><div mxv="curStepInfo" mx-view="'+a(W.view)+"?info="+_(r,W)+'" id="sub_frame_'+a(W.index)+'"><div mxs="_zs_galleryc[:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>',W.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+a(W.sideWrapper)+"?data="+_(r,W.sideData)+'" class="_zs_galleryhO" style="width: '+a(m.rightWidth)+'px;"><div mxs="_zs_galleryc[:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),c+="</div>"}return c+="</div>",m.sideWrapper&&(c+='<div mxv="curStepInfo" mx-view="'+a(m.sideWrapper)+"?data="+_(r,m.sideData)+'" class="_zs_galleryhO" style="width: '+a(m.rightWidth)+'px;"><div mxs="_zs_galleryc[:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'),c+="</div>",m.customTrigger||(c+='<div mxa="_zs_galleryc[:f" class="_zs_galleryhP"><div>',m.prevTip&&(c+='<a mxa="_zs_galleryc[:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+l+'prev()">'+a(m.prevTip)+"</a>"),c+=" ",m.nextTip&&(c+='<a mxa="_zs_galleryc[:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+a(m.nextTip)+"</a>"),c+='</div><div id="'+a(I)+'_error" class="_zs_galleryhQ"></div></div>'),c+="</div></div>"},init:function(e){var l=this;l.updater.set({leftWidth:e.leftWidth||160,rightWidth:e.rightWidth||260,alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:l.id,viewHeight:$(window).height()}),l.observeLocation(["stepIndex","subStepIndex"]),l.owner.oncreated=function(){l.$init||(l.subScroll(),l.$init=1)},l.ondestroy=function(){l.owner.off("created")}},render:function(){var e=this;e.$init=null;var l=e.updater,r=+l.get("alreadyStep"),a=l.get("stepInfos"),i=s.parse().params,_=+(i.stepIndex||1);_>r&&(r=_);var t=+i.subStepIndex||-1;if(a.forEach(function(l,s){var i=s+1;l.index=i,l.subs=l.subs||[],(l=e.wrapSide(l)).locked=i>r,i==_&&(t>l.subs.length||1==l.subs.length)&&(t=-1);var n="";!l.customTrigger&&i>1&&!a[s-1].locked&&(n=l.prevTip||"返回上一步"),l.prevTip=n;var o="";!l.customTrigger&&i<a.length&&(o=l.nextTip||"下一步"),l.nextTip=o}),i.stepIndex+""==_+""&&i.subStepIndex+""==t+""){var n=function(){e.updater.digest({alreadyStep:r,curStepInfo:a[_-1],curStepIndex:_,curSubStepIndex:t})};if(e.$inited)if(s.diff().params.stepIndex)n();else{e.updater.set({curSubStepIndex:t});var o=$("#"+e.id+" ._zs_galleryhF");o.find("._zs_galleryhB").removeClass("_zs_galleryhG"),o.find('._zs_galleryhB[data-sub="'+t+'"]').addClass("_zs_galleryhG"),e.subScroll()}else e.$inited=1,n()}else s.to({stepIndex:_,subStepIndex:t})},wrapSide:function(e){var l=+this.updater.get("rightWidth"),r=!1,a=null,s={};(e.sideView||e.sideTip)&&(a="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},r=!0);var i=!1;return e.subs.forEach(function(e,l){e.index=l+1;var a=null,s={};if(!r){var _=!1;(e.sideView||e.sideTip)&&(a="mx-main/tip",s={view:e.sideView||"",content:e.sideTip||""},_=!0),i=i||_}e.sideWrapper=a,e.sideData=s}),r=r||i,e.hasSide=r,e.sideWrapper=a,e.sideData=s,e.rightWidth=r?l:0,e},subScroll:function(){var e,l=+this.updater.get("curSubStepIndex");l>0?e=$("#"+this.id+" #sub_frame_"+l).offset().top:e=0;$(window).scrollTop(e)},"$win<scroll>":function(){var e=$("#"+this.id),l=e.find("._zs_galleryhK");if(l.length){var r=e.find("._zs_galleryhz");$(window).scrollTop()>l.offset().top?r.css({position:"fixed"}):r.css({position:"absolute"})}},"$win<resize>":function(){var e=$(window).height();this.updater.set({viewHeight:e}),$("#"+this.id).find("._zs_galleryhy").css({minHeight:e})},"prev<click>":function(e){var l=this.updater.get("curStepIndex");s.to({stepIndex:+l-1,subStepIndex:-1})},"next<click>":function(e){var l=this,r=l.updater.get("curStepInfo"),s=r.subs,_=s.map(function(e){return i.get("sub_frame_"+e.index).invoke("check")});Promise.all(_).then(function(e){var i=!0,_=[],t={},n=$("#"+l.id+"_error");if(e.forEach(function(e,l){i=i&&e.ok,e.ok||_.push({id:l+1,label:s[l].label,msg:e.msg||""}),a.mix(t,e.remain||{})}),i)n.html(""),r.nextFn?r.nextFn(t,function(e){l.next(e)}):l.next({});else{n.html('\n                    <i class="mc-iconfont _zs_galleryhR">&#xe6ad;</i>\n                    '+_.map(function(e){return"\n                        <div>"+e.label+"："+e.msg+"</div>\n                    "}).join("")+"\n                ");var o=$("#"+l.id+" #sub_frame_"+_[0].id);$(window).scrollTop(o.offset().top)}})},"nav<click>":function(e){var l=e.params,r=l.stepIndex,a=l.subStepIndex||-1;s.to({stepIndex:r,subStepIndex:a})},next:function(e){var l=this.updater.get("curStepIndex");e.stepIndex=+l+1,s.to(e)}})});