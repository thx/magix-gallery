define("mx-wanxiang/index",["magix","$"],(e,o,r)=>{var t=e("magix"),i=t.Router,a=e("$");r.exports=t.View.extend({init:function(e){var o=this;o.observeLocation({path:!0});var r=e.bizCode,i=e.bottom||0,a=+e.defaultSourceId,n=e.sourceMap||{},d=[];for(var u in n)d.push({id:n[u],hash:t.parseUrl(u)});o.updater.set({bizCode:r,bottom:+i,defaultSourceId:a,sourceMap:n,sourceList:d,awLoading:!0});var s=o.getCurSourceId();o.updater.set({sourceId:s}),seajs.use("//g.alicdn.com/crm/anywhere/0.4.5/lib/include",function(){window.awAsyncInit=function(){var e={isHidden:!0,bizCode:r,sourceId:s,logoWidth:40,onRendered:function(){o.updater.set({awLoading:!1}),o.reloc(),AW.show()}};AW.init(e)}}),o.on("destroy",function(){o.loopTimer&&clearTimeout(o.loopTimer)})},assign:function(){return!0},getCurSourceId:function(){for(var e=this.updater.get(),o=e.sourceList,r=e.defaultSourceId,t=i.parse(),n=t.path,d=t.params,u={},s=0;s<o.length;s++){var c=o[s].hash,p=c.path==n;for(var l in c.params)p=p&&c.params[l]==d[l];if(p){u=o[s];break}}return a.isEmptyObject(u)?r:u.id},render:function(){var e=this,o=e.updater.get(),r=o.oldSourceId,t=o.bizCode,i=e.getCurSourceId(),a=setTimeout(function(){e.loopTimer&&clearTimeout(e.loopTimer),window.AW?i+""!=r+""&&(AW.refresh({bizCode:t,sourceId:i}),e.updater.set({sourceId:i})):e.updater.get("awLoading")&&(a=setTimeout(arguments.callee,25))},25);e.loopTimer=a},reloc:function(){var e=this.updater.get(),o=e.awLoading,r=e.bottom;if(window.AW&&!o){var t=a(window).height();AW.moveTo(t-r-200)}},"$win<resize>":function(){this.reloc()}})});