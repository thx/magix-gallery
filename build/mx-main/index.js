define("mx-main/index",["magix"],(n,e,i)=>{var _=n("magix"),a=_.Router,t=_.Vframe;_.applyStyle("_zs_gallery_mx-main_index_","[mx-view*=\"mx-main/index\"] {\n  position: relative;\n  background-color: #e8ebf2;\n}\n._zs_gallery_mx-main_index_-main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding-top: 16px;\n  background-color: var(--app-nav-bg);\n  z-index: 3;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step {\n  position: relative;\n  font-size: 14px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 24px;\n  bottom: 0;\n  width: 0;\n  border-left: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:first-child::before {\n  top: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:last-child::before {\n  bottom: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step {\n  position: relative;\n  display: block;\n  height: 46px;\n  line-height: 46px;\n  padding-left: 36px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-text {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(-90deg, var(--app-brand) 0%, var(--app-brand-gradient) 100%);\n  background-color: var(--app-brand);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-idx {\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  border-radius: 50%;\n  background-color: #4D5873;\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  font-size: 12px;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-child::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 24px;\n  width: 10px;\n  height: 0;\n  border-top: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0.2;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-idx {\n  background-color: #fff;\n  color: var(--app-brand);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-locked-icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  margin-top: -6px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #4D5873;\n}\n._zs_gallery_mx-main_index_-main-content {\n  position: relative;\n  z-index: 2;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box {\n  position: relative;\n  margin-bottom: 16px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title {\n  padding: 8px 24px;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon > *,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tips {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  vertical-align: middle;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon {\n  margin-right: 5px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label {\n  font-size: 16px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tip {\n  margin-left: 20px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-bd {\n  padding: 16px 24px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side {\n  position: absolute;\n  background-color: #fff;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-title {\n  padding: 8px 24px;\n  line-height: 32px;\n  font-size: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-bd {\n  padding: 16px 24px;\n  color: #666;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer {\n  text-align: center;\n  padding: 40px 0;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn {\n  min-width: 100px;\n  margin-right: 20px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-main_index_-footer-error {\n  display: inline-block;\n  position: relative;\n  margin-top: 10px;\n  color: var(--color-red);\n}\n"),i.exports=_.View.extend({tmpl:function(n,e,i,_,a,t,l,r){if(i||(i=n),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(n){return"&"+s[n]+";"};a=function(n){return""+(null==n?"":n)},_=function(n){return a(n).replace(x,d)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(n){return m[n]},p=/[!')(*]/g;t=function(n){return encodeURIComponent(a(n)).replace(p,o)}}if(!r){var c=/[\\'"]/g;r=function(n){return a(n).replace(c,"\\$&")}}l||(l=function(n,e,i,_){for(_=n[y];--_;)if(n[i=y+_]===e)return i;return n[i=y+n[y]++]=e,i});var g,f,u,y="",b="",z=n.leftWidth,v=n.stepInfos,h=n.curStepIndex,I=n.curSubStepIndex,S=n.viewHeight,w=n.gapWidth,$=n.curStepInfo,k=n.rightWidth,W=n.childInfos,T=n.viewId;try{b+='<div class="_zs_gallery_mx-main_index_-main-nav" style="width: ',u=1,f="=leftWidth",b+=(g="<%=leftWidth%>",_(z)+'px;">'),u=2,f="each stepInfos as step stepIndex",g="<%for (var stepIndex = 0, $art_cjdvegerq$art_c = stepInfos.length; stepIndex < $art_cjdvegerq$art_c; stepIndex++) {    var step = stepInfos[stepIndex]%>";for(var j=0,D=v.length;j<D;j++){var H=v[j];if(b+='<div class="_zs_gallery_mx-main_index_-main-step ',u=3,f="if (step.index == curStepIndex)",g="<%if (step.index == curStepIndex) {%>",H.index==h&&(b+=" _zs_gallery_mx-main_index_-step-current ",u=3,f="/if",g="<%}%>"),b+=" ",u=3,f="if step.locked",g="<%if (step.locked) {%>",H.locked&&(b+=" _zs_gallery_mx-main_index_-step-locked ",u=3,f="/if",g="<%}%>"),b+='"><a href="javascript:;" class="_zs_gallery_mx-main_index_-step _zs_gallery_mx-main_index_-parent ',u=4,f="if ((step.index == curStepIndex) && (curSubStepIndex == -1))",g="<%if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {%>",H.index==h&&-1==I&&(b+=" _zs_gallery_mx-main_index_-on ",u=4,f="/if",g="<%}%>"),b+='" data-sub="-1" ',u=6,f="if !step.locked",g="<%if (!step.locked) {%>",H.locked||(b+=' mx-click="'+e+"nav({stepIndex:",u=6,f="=step.index",b+=(g="<%=step.index%>",_(H.index)+'})" '),u=6,f="/if",g="<%}%>"),b+=' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_galleryc?:_" class="_zs_gallery_mx-main_index_-idx">',u=7,f="=(stepIndex + 1)",b+=(g="<%=(stepIndex + 1)%>",_(j+1)+'</span><span mxs="_zs_galleryc?:_" class="_zs_gallery_mx-main_index_-pbg"></span><span mxa="_zs_galleryc?:a" class="_zs_gallery_mx-main_index_-text">'),u=9,f="=step.label",b+=(g="<%=step.label%>",_(H.label)+"</span></a>"),u=11,f="if !step.locked && (step.subs.length > 1)",g="<%if (!step.locked && (step.subs.length > 1)) {%>",!H.locked&&H.subs.length>1){b+=" ",u=12,f="each step.subs as sub",g="<%for (var $art_imdipcecpd$art_i = 0, $art_objpwigyfte$art_obj = step.subs, $art_cftsuhjbpfi$art_c = $art_objpwigyfte$art_obj.length; $art_imdipcecpd$art_i < $art_cftsuhjbpfi$art_c; $art_imdipcecpd$art_i++) {            var sub = $art_objpwigyfte$art_obj[$art_imdipcecpd$art_i]%>";for(var V=0,C=H.subs,E=C.length;V<E;V++){var q=C[V];b+='<a href="javascript:;" class="_zs_gallery_mx-main_index_-step _zs_gallery_mx-main_index_-child ',u=13,f="if ((step.index == curStepIndex) && (curSubStepIndex == sub.index))",g="<%if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {%>",H.index==h&&I==q.index&&(b+=" _zs_gallery_mx-main_index_-on ",u=13,f="/if",g="<%}%>"),b+='" data-sub="',u=14,f="=sub.index",b+=(g="<%=sub.index%>",_(q.index)+'" mx-click="'+e+"nav({stepIndex:"),u=15,f="=step.index",b+=(g="<%=step.index%>",_(H.index)+",subStepIndex:"),u=15,f="=sub.index",b+=(g="<%=sub.index%>",_(q.index)+'})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_galleryc?:_" class="_zs_gallery_mx-main_index_-pbg"></span><span mxa="_zs_galleryc?:b" class="_zs_gallery_mx-main_index_-text">'),u=17,f="=sub.label",b+=(g="<%=sub.label%>",_(q.label)+"</span></a>"),u=19,f="/each",g="<%}%>"}b+=" ",u=20,f="/if",g="<%}%>"}b+=" ",u=21,f="if step.locked",g="<%if (step.locked) {%>",H.locked&&(b+='<i mxs="_zs_galleryc?:a" class="mc-iconfont _zs_gallery_mx-main_index_-locked-icon">&#xe759;</i>',u=23,f="/if",g="<%}%>"),b+="</div>",u=25,f="/each",g="<%}%>"}b+='</div><div mxv class="_zs_gallery_mx-main_index_-main-content clearfix" style="min-height: ',u=27,f="=viewHeight",b+=(g="<%=viewHeight%>",_(S)+"px; padding-top: "),u=27,f="=gapWidth",b+=(g="<%=gapWidth%>",_(w)+"px; padding-right: "),u=27,f="=(gapWidth + (curStepInfo.sideWrapper ? (rightWidth + gapWidth) : 0))",b+=(g="<%=(gapWidth + (curStepInfo.sideWrapper ? (rightWidth + gapWidth) : 0))%>",_(w+($.sideWrapper?k+w:0))+"px; padding-left: "),u=27,f="=(leftWidth + gapWidth)",b+=(g="<%=(leftWidth + gapWidth)%>",_(z+w)+'px;">'),u=28,f="each curStepInfo.subs as sub",g="<%for (var $art_inurpltry$art_i = 0, $art_objpwxpgcobm$art_obj = curStepInfo.subs, $art_cwecug$art_c = $art_objpwxpgcobm$art_obj.length; $art_inurpltry$art_i < $art_cwecug$art_c; $art_inurpltry$art_i++) {    var sub = $art_objpwxpgcobm$art_obj[$art_inurpltry$art_i]%>";for(var F=0,R=$.subs,A=R.length;F<A;F++){q=R[F];b+='<div mxv mxa="_zs_galleryc?:c" class="_zs_gallery_mx-main_index_-content-box"><div mxa="_zs_galleryc?:d" class="_zs_gallery_mx-main_index_-box-title clearfix">',u=31,f="if sub.icon",g="<%if (sub.icon) {%>",q.icon&&(b+='<span mxa="_zs_galleryc?:e" class="_zs_gallery_mx-main_index_-title-icon">',u=31,f="!sub.icon",b+=(g="<%!sub.icon%>",a(q.icon)+"</span>"),u=31,f="/if",g="<%}%>"),b+='<span mxa="_zs_galleryc?:f" class="_zs_gallery_mx-main_index_-title-label">',u=32,f="=sub.label",b+=(g="<%=sub.label%>",_(q.label)+"</span>"),u=33,f="if sub.tip",g="<%if (sub.tip) {%>",q.tip&&(b+='<span mxa="_zs_galleryc?:g" class="_zs_gallery_mx-main_index_-title-tip">',u=34,f="!sub.tip",b+=(g="<%!sub.tip%>",a(q.tip)+"</span>"),u=35,f="/if",g="<%}%>"),b+='</div><div mxv="curStepInfo,childInfos" class="_zs_gallery_mx-main_index_-box-bd" id="sub_frame_',u=38,f="=sub.index",b+=(g="<%=sub.index%>",_(q.index)+'" mx-view="'),u=39,f="=sub.view",b+=(g="<%=sub.view%>",_(q.view)+"?info="),u=39,f="@sub",b+=(g="<%@sub%>",l(i,q)+"&data="),u=39,f="@childInfos",b+=(g="<%@childInfos%>",l(i,W)+'"><div mxs="_zs_galleryc?:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>'),u=43,f="/each",g="<%}%>"}b+=" ",u=44,f="if curStepInfo.sideWrapper",g="<%if (curStepInfo.sideWrapper) {%>",$.sideWrapper&&(b+='<div mxv="curStepInfo" class="_zs_gallery_mx-main_index_-content-side" style="top: ',u=45,f="=gapWidth",b+=(g="<%=gapWidth%>",_(w)+"px; right: "),u=45,f="=gapWidth",b+=(g="<%=gapWidth%>",_(w)+"px; width: "),u=45,f="=rightWidth",b+=(g="<%=rightWidth%>",_(k)+'px;" mx-view="'),u=46,f="=curStepInfo.sideWrapper",b+=(g="<%=curStepInfo.sideWrapper%>",_($.sideWrapper)+"?data="),u=46,f="@curStepInfo.sideData",b+=(g="<%@curStepInfo.sideData%>",l(i,$.sideData)+'"><div mxs="_zs_galleryc?:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>'),u=49,f="/if",g="<%}%>"),b+='<div mxa="_zs_galleryc?:h" class="_zs_gallery_mx-main_index_-content-footer"><div>',u=53,f="if curStepInfo.prevTip",g="<%if (curStepInfo.prevTip) {%>",$.prevTip&&(b+='<a mxa="_zs_galleryc?:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="'+e+'prev()">',u=55,f="=curStepInfo.prevTip",b+=(g="<%=curStepInfo.prevTip%>",_($.prevTip)+"</a>"),u=56,f="/if",g="<%}%>"),b+=" ",u=58,f="if curStepInfo.nextTip",g="<%if (curStepInfo.nextTip) {%>",$.nextTip&&(b+='<a mxa="_zs_galleryc?:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+e+'next()">',u=60,f="=curStepInfo.nextTip",b+=(g="<%=curStepInfo.nextTip%>",_($.nextTip)+"</a>"),u=61,f="/if",g="<%}%>"),b+='</div><div id="',u=63,f="=viewId",b+=(g="<%=viewId%>",_(T)+'_error" class="_zs_gallery_mx-main_index_-footer-error"></div></div></div>')}catch(n){var L="render view error:"+(n.message||n);throw f&&(L+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+u),L+="\r\n\t"+(f?"translate to:":"expr:"),L+=g+"\r\n\tat file:mx-main/index.html"}return b},init:function(n){var e=this;e.updater.set({gapWidth:16,leftWidth:+n.leftWidth||160,rightWidth:+n.rightWidth||260,alreadyStep:n.alreadyStep||1,stepInfos:n.stepInfos||[],viewId:e.id,viewHeight:$(window).height()}),e.observeLocation(["stepIndex","subStepIndex"]),e.owner.oncreated=function(){e.$init||(e.subScroll(),e.$init=1)},e.ondestroy=function(){e.owner.off("created")}},render:function(){var n=this;n.$init=null;var e=n.updater,i=+e.get("alreadyStep"),_=e.get("stepInfos"),t=a.parse().params,l=+(t.stepIndex||1);l>i&&(i=l);var r=+t.subStepIndex||-1;if(_.forEach(function(e,a){var t=a+1;e.index=t,e.subs=e.subs||[],(e=n.wrapSide(e)).locked=t>i,t==l&&(r>e.subs.length||1==e.subs.length)&&(r=-1);var s="";t>1&&!_[a-1].locked&&(s=e.prevTip||"返回上一步"),e.prevTip=s;var x="";t<_.length&&(x=e.nextTip||"下一步"),e.nextTip=x}),t.stepIndex+""==l+""&&t.subStepIndex+""==r+""){var s=function(){n.updater.digest({alreadyStep:i,curStepInfo:_[l-1],curStepIndex:l,curSubStepIndex:r})};if(n.$inited)if(a.diff().params.stepIndex)s();else{n.updater.set({curSubStepIndex:r});var x="_zs_gallery_mx-main_index_-on",d=$("#"+n.id+" ._zs_gallery_mx-main_index_-step-current");d.find("._zs_gallery_mx-main_index_-step").removeClass(x),d.find('._zs_gallery_mx-main_index_-step[data-sub="'+r+'"]').addClass(x),n.subScroll()}else n.$inited=1,s()}else a.to({stepIndex:l,subStepIndex:r})},wrapSide:function(n){var e=+this.updater.get("rightWidth"),i=!1,_=null,a={};(n.sideView||n.sideTip)&&(_="mx-main/tip",a={view:n.sideView||"",title:n.sideTitle||"",content:n.sideTip||""},i=!0);var t=!1;return n.subs.forEach(function(n,e){n.index=e+1;var _=null,a={};if(!i){var l=!1;(n.sideView||n.sideTip)&&(_="mx-main/tip",a={view:n.sideView||"",content:n.sideTip||""},l=!0),t=t||l}n.sideWrapper=_,n.sideData=a}),i=i||t,n.hasSide=i,n.sideWrapper=_,n.sideData=a,n.rightWidth=i?e:0,n},subScroll:function(){var n,e=+this.updater.get("curSubStepIndex");e>0?n=$("#"+this.id+" #sub_frame_"+e).offset().top:n=0;$(window).scrollTop(n)},"$win<scroll>":function(){var n=$("#"+this.id),e=n.find("._zs_gallery_mx-main_index_-main-content");if(e.length){var i=n.find("._zs_gallery_mx-main_index_-main-nav"),_=$(window).scrollTop();_>e.offset().top?i.css({position:"fixed"}):i.css({position:"absolute"});var a=n.find("._zs_gallery_mx-main_index_-content-side");if(a.length){var t=e.offset().top,l=this.updater.get().gapWidth;_>t+l?a.css({position:"fixed",top:0}):a.css({position:"absolute",top:l+"px"})}}},"$win<resize>":function(){var n=$(window).height();this.updater.set({viewHeight:n}),$("#"+this.id).find(".unfound-[main]-from-index.less").css({minHeight:n})},"prev<click>":function(n){var e=this.updater.get("curStepIndex");a.to({stepIndex:+e-1,subStepIndex:-1})},"next<click>":function(n){var e=this,i=e.updater.get("curStepInfo"),a=i.subs,l=a.map(function(n){return t.get("sub_frame_"+n.index).invoke("check")});Promise.all(l).then(function(n){var t=!0,l=[],r={},s=$("#"+e.id+"_error");if(n.forEach(function(n,e){t=t&&n.ok,n.ok||l.push({id:e+1,label:a[e].label,msg:n.msg||""}),_.mix(r,n.remain||{})}),t)s.html(""),i.nextFn?i.nextFn(r,function(n){e.next(n)}):e.next({});else{s.html('\n                    <i class="mc-iconfont unfound-[error-icon]-from-index.less">&#xe6ad;</i>\n                    '+l.map(function(n){return"\n                        <div>"+n.label+"："+n.msg+"</div>\n                    "}).join("")+"\n                ");var x=$("#"+e.id+" #sub_frame_"+l[0].id);$(window).scrollTop(x.offset().top)}})},"nav<click>":function(n){var e=n.params,i=e.stepIndex,_=e.subStepIndex||-1;a.to({stepIndex:i,subStepIndex:_})},next:function(n){var e=this.updater.get("curStepIndex");n.stepIndex=+e+1,a.to(n)}})});