define("mx-wanxiang/index",["magix","$"],(o,a,e)=>{var t=o("magix"),r=t.Router,i=o("$");t.applyStyle("_zs_galleryaL","body .aw-dialog,body .aw-wrapper{z-index:10!important}body .aw-wrapper{right:-4px!important}body .aw-wrapper .aw-window{top:auto;bottom:-185px}body .aw-wrapper .aw-dialog-wrapper.lowreso-dialog{top:-300px}body .aw-wrapper.small .aw-window{top:113px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.tool-ser-history{display:none!important}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify{border-top:1px solid var(--color-border)}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{border-top:1px solid #fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{width:36px;height:36px;border-left:1px solid var(--color-border);border-right:1px solid var(--color-border);border-bottom:1px solid var(--color-border);background:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item{width:36px;height:36px;line-height:32px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item .toolicon{font-size:20px;color:#ccc}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover{background:var(--color-brand);border:1px solid var(--color-brand)}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover .aw-tool-item .toolicon{color:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem .aw-hover-tip.stress{top:-1px;height:36px;line-height:34px;background:var(--color-brand);border:1px solid var(--color-brand);color:#fff}body .aw-wrapper.small .aw-window .aw-anim-lge-logo,body .aw-wrapper.small .aw-window .aw-logo{right:3px!important}"),e.exports=t.View.extend({init:function(o){var a=this;a.observeLocation({path:!0});var e=o.bizCode,r=o.bottom||0,i=+o.defaultSourceId,w=o.sourceMap||{},l=[];for(var d in w)l.push({id:w[d],hash:t.parseUrl(d)});a.updater.set({bizCode:e,bottom:+r,defaultSourceId:i,sourceMap:w,sourceList:l,awLoading:!0});var n=a.getCurSourceId();a.updater.set({sourceId:n}),seajs.use("//g.alicdn.com/crm/anywhere/0.4.5/lib/include",function(){window.awAsyncInit=function(){var o={isHidden:!0,bizCode:e,sourceId:n,logoWidth:40,onRendered:function(){a.updater.set({awLoading:!1}),a.reloc(),AW.show()}};AW.init(o)}}),a.on("destroy",function(){a.loopTimer&&clearTimeout(a.loopTimer)})},assign:function(){return!0},getCurSourceId:function(){for(var o=this.updater.get(),a=o.sourceList,e=o.defaultSourceId,t=r.parse(),w=t.path,l=t.params,d={},n=0;n<a.length;n++){var s=a[n].hash,p=s.path==w;for(var c in s.params)p=p&&s.params[c]==l[c];if(p){d=a[n];break}}return i.isEmptyObject(d)?e:d.id},render:function(){var o=this,a=o.updater.get("sourceId"),e=o.updater.get("bizCode"),t=o.getCurSourceId(),r=setTimeout(function(){o.loopTimer&&clearTimeout(o.loopTimer),window.AW?t+""!=a+""&&(AW.refresh({bizCode:e,sourceId:t}),o.updater.set({sourceId:t})):o.updater.get("awLoading")&&(r=setTimeout(arguments.callee,25))},25);o.loopTimer=r},reloc:function(){if(window.AW&&!this.updater.get("awLoading")){var o=this.updater.get("bottom"),a=i(window).height();AW.moveTo(a-o-200)}},"$win<resize>":function(){this.reloc()}})});