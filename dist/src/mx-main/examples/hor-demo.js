define("mx-main/examples/hor-demo",["magix","$","examples/example","../hor"],(e,n,r)=>{e("../hor");var a=e("magix"),i=(e("$"),a.Router),t=e("examples/example");r.exports=t.extend({tmpl:function(e,n,r,a,i,t,p,l){if(r||(r=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,s=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},function(e){return i(e).replace(o,s)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(c,u)}}if(!l){var d=/[\\'"]/g;l=function(e){return i(e).replace(d,"\\$&")}}p||(p=function(e,n,r,a){for(a=e[f];--a;)if(e[r=f+a]===n)return r;return e[r=f+e[f]++]=n,r});var f="",v="",g=e.alreadyStep,h=e.stepInfos;return v+='<div mxv mxa="_zs_galleryc*:_" class="pl20 pr20 pt20"><div mxs="_zs_galleryc*:_" class="mb40"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep='+t(g)+"&stepInfos="+p(r,h)+'"></div></div>'},render:function(){var e=i.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/examples/hor-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/examples/hor-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",view:"mx-main/examples/hor-inner"},{label:"完成",view:"mx-main/examples/hor-inner"}],alreadyStep:n})}})});