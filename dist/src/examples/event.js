define("examples/event",["magix","$"],(t,e,r)=>{var n=t("magix"),a=t("$");r.exports=n.View.extend({tmpl:function(t,e,r,n,a,i,d,l){if(r||(r=t),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,h=function(t){return"&"+o[t]+";"};a=function(t){return""+(null==t?"":t)},n=function(t){return a(t).replace(s,h)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return p[t]},u=/[!')(*]/g;i=function(t){return encodeURIComponent(a(t)).replace(u,c)}}if(!l){var f=/[\\'"]/g;l=function(t){return a(t).replace(f,"\\$&")}}var g="",m=t.options;g+='<div mxa="_zs_galleryi:_" class="pr20"><table mxa="_zs_galleryi:a" class="table _zs_galleryq"><thead mxs="_zs_galleryi:_"><tr><th width="70">事件</th><th width="120">事件说明</th><th width="90">返回参数</th><th width="200">参数说明</th><th width="80">参数类型</th></tr></thead><tbody>';for(var v=0,w=m.length;v<w;v++){var _=m[v];g+=" ";for(var y=0,x=_.params,b=x.length;y<b;y++){var z=x[y];g+="<tr>",0==y&&(g+='<td rowspan="'+n(_.params.length)+'">'+n(_.type)+'</td><td rowspan="'+n(_.params.length)+'">'+a(_.desc)+"</td>"),g+="<td>"+n(z.key)+"</td><td>"+a(z.desc)+"</td><td>"+a(z.type)+"</td></tr>"}g+=" "}return g+="</tbody></table></div>"},init:function(t){this.updater.digest(t)},render:function(){this.updater.digest()},"to<click>":function(t){var e=a("#"+t.params.id);a(window).scrollTop(e.offset().top)}})});