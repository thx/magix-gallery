define("mx-main/steps",["magix"],(e,t,n)=>{var i=e("magix"),a=i.Router,r=i.Vframe;i.applyStyle("_zs_galleryah","._zs_galleryjl{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjm{position:relative;padding-top:10px;padding-left:20px;color:#a40100}._zs_galleryjm ._zs_galleryjn{position:absolute;left:0;top:10px;color:#a40100}"),n.exports=i.View.extend({init:function(e){this.updater.set({alreadyStep:e.alreadyStep||1,stepInfos:e.stepInfos||[],viewId:this.id,viewHeight:$(window).height()}),this.observeLocation(["stepIndex"])},render:function(){var e=this.updater,t=+e.get("alreadyStep"),n=e.get("stepInfos"),i=a.parse().params,r=+(i.stepIndex||1);r>t&&(t=r);n.forEach(function(e,i){var a=i+1;e.index=a,e.locked=a>t,e.lineOn=a<t,e.current=a==r,e.icon=e.icon||'<span class="fontsize-16">'+e.index+"</span>";var p="";a>1&&!n[i-1].locked&&(p=e.prevTip||"返回上一步"),e.prevTip=p;var s="";a<n.length&&(s=e.nextTip||"下一步"),e.nextTip=s}),i.stepIndex+""==r+""?this.updater.digest({alreadyStep:t,stepInfos:n,curStepInfo:n[r-1],curStepIndex:r}):a.to({stepIndex:r})},"prev<click>":function(e){var t=this.updater.get("curStepIndex");a.to({stepIndex:+t-1})},"nav<click>":function(e){var t=e.params.stepIndex;a.to({stepIndex:t})},next:function(e){var t=this.updater.get("curStepIndex");e.stepIndex=+t+1,a.to(e)},"next<click>":function(e){var t=this,n=t.updater.get("curStepInfo");r.get(t.id+"_cur_content").invoke("check").then(function(e){var i=$("#"+t.id+"_error");e.ok?(i.html(""),n.nextFn?n.nextFn(e.remain,function(e){t.next(e)}):t.next({})):i.html('<div class="_zs_galleryjm"><i class="mc-iconfont _zs_galleryjn">&#xe6ad;</i>'+e.msg+"</div>")})}})});