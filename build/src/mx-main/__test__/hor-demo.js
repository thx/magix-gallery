define("mx-main/__test__/hor-demo",["magix","$","__test__/example","../hor"],(e,n,r)=>{e("../hor");var t=e("magix"),a=(e("$"),t.Router),i=e("__test__/example");r.exports=i.extend({tmpl:function(e,n,r,t,a,i,o,_){if(r||(r=e),!a){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,l=function(e){return"&"+p[e]+";"};a=function(e){return""+(null==e?"":e)},function(e){return a(e).replace(s,l)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return m[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(c,u)}}if(!_){var d=/[\\'"]/g;_=function(e){return a(e).replace(d,"\\$&")}}o||(o=function(e,n,r,t){for(t=e[f];--t;)if(e[r=f+t]===n)return r;return e[r=f+e[f]++]=n,r});var f="",x="",v=e.alreadyStep,g=e.stepInfos;return x+='<div mxv mxa="_zs_galleryc5:_" class="pl20 pr20 pt20"><div mxs="_zs_galleryc5:_" class="mb40"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep='+i(v)+"&stepInfos="+o(r,g)+'"></div></div>'},render:function(){var e=a.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",view:"mx-main/__test__/hor-inner"},{label:"完成",view:"mx-main/__test__/hor-inner"}],alreadyStep:n})}})});