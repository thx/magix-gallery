define("__test__/event",["magix","$"],(t,a,r)=>{var e=t("magix"),n=t("$");r.exports=e.View.extend({tmpl:function(t,a,r,e,n,i,o,p){if(r||(r=t),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(t){return"&"+s[t]+";"};n=function(t){return""+(null==t?"":t)},e=function(t){return n(t).replace(c,d)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(t){return _[t]},h=/[!')(*]/g;i=function(t){return encodeURIComponent(n(t)).replace(h,l)}}if(!p){var m=/[\\'"]/g;p=function(t){return n(t).replace(m,"\\$&")}}var f,u,$,g="",x=t.options;try{g+='<div mxa="_zs_galleryi:_" class="pr20"><table mxa="_zs_galleryi:a" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_galleryi:_"><tr><th width="70">事件</th><th width="120">事件说明</th><th width="90">返回参数</th><th width="200">参数说明</th><th width="80">参数类型</th></tr></thead><tbody>',$=13,u="each options as option",f="<%for (var $art_ixupatlsz$art_i = 0, $art_cncmrszk$art_c = options.length; $art_ixupatlsz$art_i < $art_cncmrszk$art_c; $art_ixupatlsz$art_i++) {    var option = options[$art_ixupatlsz$art_i]%>";for(var v=0,y=x.length;v<y;v++){var b=x[v];g+=" ",$=14,u="each option.params as param index",f="<%for (var index = 0, $art_objkcwtkhfhb$art_obj = option.params, $art_cfxkedycjq$art_c = $art_objkcwtkhfhb$art_obj.length; index < $art_cfxkedycjq$art_c; index++) {        var param = $art_objkcwtkhfhb$art_obj[index]%>";for(var w=0,k=b.params,z=k.length;w<z;w++){var j=k[w];g+="<tr>",$=16,u="if (index == 0)",f="<%if (index == 0) {%>",0==w&&(g+='<td rowspan="',$=17,u="=option.params.length",g+=(f="<%=option.params.length%>",e(b.params.length)+'">'),$=17,u="=option.type",g+=(f="<%=option.type%>",e(b.type)+'</td><td rowspan="'),$=18,u="=option.params.length",g+=(f="<%=option.params.length%>",e(b.params.length)+'">'),$=18,u="!option.desc",g+=(f="<%!option.desc%>",n(b.desc)+"</td>"),$=19,u="/if",f="<%}%>"),g+="<td>",$=21,u="=param.key",g+=(f="<%=param.key%>",e(j.key)+"</td><td>"),$=22,u="!param.desc",g+=(f="<%!param.desc%>",n(j.desc)+"</td><td>"),$=23,u="!param.type",g+=(f="<%!param.type%>",n(j.type)+"</td></tr>"),$=25,u="/each",f="<%}%>"}g+=" ",$=26,u="/each",f="<%}%>"}g+="</tbody></table></div>"}catch(t){var q="render view error:"+(t.message||t);throw u&&(q+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+$),q+="\r\n\t"+(u?"translate to:":"expr:"),q+=f+"\r\n\tat file:__test__/event.html"}return g},init:function(t){this.updater.digest(t)},render:function(){this.updater.digest()},"to<click>":function(t){var a=n("#"+t.params.id);n(window).scrollTop(a.offset().top)}})});