define("mx-uploader/index",["magix","$","../mx-util/runner"],(e,t,n)=>{var r=e("magix"),i=e("$"),a=e("../mx-util/runner");r.applyStyle("_zs_galleryaH",'[mx-view*="mx-uploader/index"]{position:relative;overflow:hidden}._zs_galleryl_{left:0;top:0;bottom:0;right:0;width:100%;height:100%;opacity:0;cursor:pointer;font-size:100px;filter:alpha(opacity=0)}._zs_galleryla,._zs_galleryl_{position:absolute}._zs_galleryla{left:-999999px}');var o=function(e,t,n,r,i,a,o,l){if(n||(n=e),!i){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(e){return"&"+p[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(s,d)}}if(!a){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(e){return u[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(c,f)}}if(!l){var _=/[\\'"]/g;l=function(e){return i(e).replace(_,"\\$&")}}var m="",g=e.nodeId,v=e.disabled,h=e.name;return m+='<input id="'+r(g)+'" class="_zs_galleryl_" ',v&&(m+=' disabled="true" '),m+=' type="file" name="'+r(h)+'" mx-change="'+t+'__fs()"/>'},l=r.Base.extend({destroy:function(){this.__fp=1}}),p=l.extend({__fq:function(e,t,n,o){var l=e.form,p=this,s=r.guid("up");l||(i("body").append('<div id="'+s+'_temp" class="_zs_galleryla"><form target="'+s+'"></form></div>'),(l=i("#"+s+"_temp").find("form")).append(e),l=l[0]);var d=0,u=2e3;if(e.files){u=0;for(var f=0;f<e.files.length;f++)u+=e.files[f].size;(u/=1e3)<2e3&&(u=2e3)}var c=1e3/u,_=function(){p.__fp?a.__bJ(_):d<1&&(o(d),d+=c+20*Math.random()*c)};a.__bH(100,_),i('<iframe name="'+s+'" id="'+s+'" style="display:none;"></iframe>').insertAfter(l).on("load",function(e){if(a.__bJ(_),!p.__fp){o(1);var t=e.target,r=i(t.contentWindow.document.body);r.find("script").remove();var l=i.trim(r.text());i(t).remove(),i("#"+s+"_temp").remove();try{n(null,new Function("return "+l)())}catch(e){n(e)}}}).on("error",function(e){a.__bJ(_),p.__fp||(i("#"+s+"_temp").remove(),n(e))}),l.target=s,l.action=t.get("action"),l.method="POST",l.enctype="multipart/form-data",l.submit()}}),s=l.extend({__fq:function(e,t,n,r){for(var i=new FormData,a=this,o=e.files,l=0;l<o.length;l++)i.append(t.get("name"),o[l]);var p=new XMLHttpRequest;p.withCredentials=!0,p.open("post",t.get("action"),!0),p.onload=function(){if(!a.__fp)try{n(null,new Function("return "+p.responseText)())}catch(e){n(e)}},p.onerror=function(e){a.__fp||(e.message="network error",n(e))},p.upload.onprogress=function(e){e.lengthComputable?r(e.loaded/e.total):r(0)},p.send(i)}});n.exports=r.View.extend({init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t,n=e.disabled+""=="true"||i("#"+this.id)[0].hasAttribute("mx-disabled"),r=e.type;return this.updater.set({name:e.name||"file",action:e.action||"",multiple:e.multiple+""=="true",accept:e.accept,disabled:n,type:r}),t="xhr"==r&&window.FormData?s:p,this.capture("__fr",new t),!0},render:function(){var e=this,t="file_"+e.id,n=i("#"+t);n.length&&n.remove();var r=e.updater.get(),a=i.isFunction(o)?o({disabled:r.disabled,name:r.name,nodeId:t},e.id):o;e.wrapEvent&&(a=e.wrapEvent(a)),i("#"+e.id).append(a),n=i("#"+t),r.multiple&&n.attr("multiple","multiple"),r.accept&&n.prop("accept",r.accept)},"__fs<change>":function(e){var t=this,n=i("#"+t.id),r=e.eventTarget.files,a=i.Event("start",{files:r});(n.trigger(a),a.isDefaultPrevented())?t.render():(t.capture("__fr").__fq(e.target,t.updater,function(e,t){e?n.trigger({type:"error",error:e}):n.trigger({type:"success",files:r,response:t})},function(e){n.trigger({type:"progress",percent:e})}),t.render())}})});