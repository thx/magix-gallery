!function(e,o,t){function a(e){void 0!==window.console&&window.console.error("[anywhere include] "+e)}e.getElementById(t)||function(t){var i,r,n=e.createElement(o),l=e.head||e.documentElement,w="176227",d="tcl_"+w,s=function(){a("version api request timeout")};window[d]=function(e){e&&e[w]&&e[w].value&&e[w].value.moduleinfo?i=e[w].value.moduleinfo:a("version api response wrong format")},r=setTimeout(s,5e3),n.async=!0,n.src="//tce.alicdn.com/api/data.htm?ids=176227&callback=tcl_176227",n.onload=n.onreadystatechange=function(){if(!n.readyState||/loaded|complete/.test(n.readyState)){clearTimeout(r),r=null,n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),i?t(i):s(),n=null,window[d]=null;try{delete window[d]}catch(e){}}},l.insertBefore(n,l.firstChild)}(function(i){var r=window.location.hostname.indexOf(".daily.")>-1,n=function(e,o){var t=new RegExp(e+"=([^&]+)").exec(location.search);return t?t[1]:o}("prepub",!1),l=r?i.development:n?i.prepub:i.production;if(l&&l.entryJS&&l.entryCSS){var w=e.getElementsByTagName(o)[0],d=e.createElement(o),s=e.createElement("link");d.src=l.entryJS,d.id=t,s.rel="stylesheet",s.href=l.entryCSS,d.charset=s.charset="utf-8",w.parentNode.insertBefore(s,w),w.parentNode.insertBefore(d,w)}else a("version api repsponse lost info")})}(document,"script","anywhere-sdk"),define("mx-wanxiang/index",["magix","$"],(e,o,t)=>{var a=e("magix"),i=a.Router,r=e("$");a.applyStyle("_zs_galleryaN",".mx-shadow{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}body .aw-wrapper{right:-4px!important}body .aw-wrapper .aw-window{top:auto;bottom:-185px}body .aw-wrapper .aw-dialog-wrapper.lowreso-dialog{top:-300px}body .aw-wrapper.small .aw-window{top:113px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.tool-ser-history{display:none!important}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify{border-top:1px solid #e6e6e6}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{border-top:1px solid #fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{width:36px;height:36px;border-left:1px solid #e6e6e6;border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;background:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item{width:36px;height:36px;line-height:32px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item .toolicon{font-size:20px;color:#ccc}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover{background:#4d7fff;border:1px solid #4d7fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover .aw-tool-item .toolicon{color:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem .aw-hover-tip.stress{top:-1px;height:36px;line-height:34px;background:#4d7fff;border:1px solid #4d7fff;color:#fff}body .aw-wrapper.small .aw-window .aw-anim-lge-logo,body .aw-wrapper.small .aw-window .aw-logo{right:3px!important}"),t.exports=a.View.extend({init:function(e){var o=this;o.observeLocation({path:!0});var t=e.bizCode,a=e.bottom||0,i=+e.defaultSourceId,r=e.sourceMap||{};for(var n in r)r[n]=+r[n];o.updater.set({bizCode:t,sourceId:i,defaultSourceId:i,bottom:+a,sourceMap:e.sourceMap||{},awLoading:!0}),window.awAsyncInit=function(){var e={isHidden:!0,bizCode:t,sourceId:i,logoWidth:40,onRendered:function(){o.updater.set({awLoading:!1}),o.reloc(),AW.show()}};AW.init(e)},o.assign(e),o.on("destroy",function(){o.loopTimer&&clearTimeout(o.loopTimer)})},assign:function(e){var o=this,t=i.parse().path,a=o.updater.get("sourceMap"),r=o.updater.get("defaultSourceId"),n=o.updater.get("sourceId"),l=a[t]||r,w=setTimeout(function(){clearTimeout(w),window.AW&&l!==n?(AW.refresh({sourceId:l}),o.updater.set({sourceId:l})):o.updater.get("awLoading")&&(w=setTimeout(arguments.callee,25))},25);return o.loopTimer=w,!0},reloc:function(){if(window.AW){var e=this.updater.get("bottom"),o=r(window).height();AW.moveTo(o-e-200)}},"$win<resize>":function(){this.reloc()}})});