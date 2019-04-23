define("mx-calendar/range",["magix","$","mx-calendar/util","../mx-medusa/util","mx-switch/index","./datepicker"],(e,a,t)=>{e("mx-switch/index"),e("./datepicker");var r=e("magix"),l=e("$"),s=e("mx-calendar/util"),i=s.dateFormat,n=s.dateParse,c=s.getDefaultDate,_=s.getQuickInfos,g=s.foreverStr,d=e("../mx-medusa/util");r.applyStyle("_zs_galleryr",'._zs_gallerycj{--mx-calendar-range-input-width:calc(var(--font-size)*8);position:relative;z-index:1000;min-width:calc(var(--mx-calendar-range-input-width)*2 + 40px);width:100%;padding:10px;border-radius:var(--border-radius);background-color:#fff;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerycj ._zs_galleryck{color:#999}._zs_gallerycj ._zs_gallerycl{position:relative;line-height:var(--input-small-height)}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm{float:left;width:50%;min-width:var(--mx-calendar-range-input-width);text-align:center;cursor:text}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm [mx-view*="mx-calendar/datepicker"]{width:100%}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm ._zs_gallerycn,._zs_gallerycj ._zs_gallerycl ._zs_gallerycm ._zs_gallerybA{height:var(--input-small-height);padding:0;line-height:var(--input-small-height);border-radius:var(--border-radius);background-color:var(--color-bg-hover);border:0;color:#333}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm ._zs_galleryco ._zs_gallerybA{color:var(--color-brand)}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm ._zs_gallerycp ._zs_gallerybA{color:var(--color-brand-vs)}._zs_gallerycj ._zs_gallerycl ._zs_gallerycm ._zs_gallerycn{display:inline-block;width:100%;cursor:not-allowed;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;color:#999;vertical-align:middle}._zs_gallerycj ._zs_gallerycl ._zs_gallerycq{padding-right:9px}._zs_gallerycj ._zs_gallerycl ._zs_gallerycr{padding-left:9px}._zs_gallerycj ._zs_gallerycl ._zs_gallerycs{position:absolute;top:0;left:50%;width:18px;height:var(--input-small-height);margin-left:-9px;text-align:center}._zs_gallerycj ._zs_galleryct{margin-top:15px}._zs_gallerycj ._zs_galleryct ._zs_gallerycu{float:left;width:44%;height:var(--input-small-height);margin-right:6%;margin-top:10px;padding:0 10px;line-height:var(--input-small-height);border-radius:var(--border-radius);cursor:pointer;overflow:hidden;white-space:nowrap}._zs_gallerycj ._zs_galleryct ._zs_gallerycu:hover{background-color:var(--color-bg-hover)}._zs_gallerycj ._zs_galleryct ._zs_gallerycu._zs_gallerycv,._zs_gallerycj ._zs_galleryct ._zs_gallerycu._zs_gallerycv:hover{color:var(--color-brand);background-color:var(--color-brand-opacity)}._zs_gallerycj ._zs_galleryct._zs_gallerycw ._zs_gallerycu{width:32%;margin-right:1%}._zs_gallerycj._zs_gallerycx{--mx-calendar-range-input-width:calc(var(--font-size)*11)}');var o=r.View.extend({tmpl:function(e,a,t,r,l,s,i,n){if(t||(t=e),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,g=function(e){return"&"+c[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(_,g)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!n){var u=/[\\'"]/g;n=function(e){return l(e).replace(u,"\\$&")}}i||(i=function(e,a,t,r){for(r=e[y];--r;)if(e[t=y+r]===a)return t;return e[t=y+e[y]++]=a,t});var y="",v="",z=e.timeType,x=e.title,p=e.vsEnable,f=e.vs,h=e.startDisabled,k=e.dates,b=e.min,w=e.endDisabled,q=e.max,S=e.formatter,T=e.disabledWeeks,D=e.dateType,j=e.vsSingle,I=e.endMinFn,K=e.align,M=e.quickInfos,W=e.quickGap,A=e.quickTip,Y=e.submitText,F=e.cancelText;if(v+='<div mxv class="_zs_gallerycj ',z&&(v+=" _zs_gallerycx "),v+='" mx-contextmenu="'+a+'__J()"><div mxv mxa="_zs_gallery[:_" class="_zs_gallerycl"><div mxa="_zs_gallery[:a" class="_zs_galleryck clearfix"><span mxa="_zs_gallery[:b" class="fl">'+r(x)+"：</span>",p&&(v+='<span class="fr" mx-change="'+a+'__L()" mx-view="mx-switch/index?state='+s(f)+'"></span>'),v+='</div><div mxv mxa="_zs_gallery[:c" class="clearfix pr"><div mxv mxa="_zs_gallery[:d" class="_zs_gallerycm _zs_gallerycq">',h?v+='<div mxa="_zs_gallery[:e" class="_zs_gallerycn">'+r(k.startStr)+"</div>":(v+='<div mxv="disabledWeeks" ',f&&(v+=' class="_zs_galleryco" '),v+=' mx-change="'+a+"__K({trigger:'start'})\" mx-view=\"mx-calendar/datepicker?min="+s(b)+"&max="+s(w?k.endStr:q)+"&formatter="+s(S)+"&disabledWeeks="+i(t,T)+"&timeType="+s(z)+"&dateType="+s(D)+"&selected="+s(k.startStr)+'"></div>'),v+='</div><div mxs="_zs_gallery[:_" class="_zs_gallerycs">-</div><div mxv mxa="_zs_gallery[:f" class="_zs_gallerycm _zs_gallerycr">',!f&&j||w?v+='<div mxa="_zs_gallery[:g" class="_zs_gallerycn">'+r(k.endStr)+"</div>":(v+='<div mxv="disabledWeeks" ',f&&(v+=' class="_zs_gallerycp" '),v+=' mx-change="'+a+"__K({trigger:'end'})\" mx-view=\"mx-calendar/datepicker?min="+s(f?b:I(k.startStr,b))+"&max="+s(q)+"&formatter="+s(S)+"&disabledWeeks="+i(t,T)+"&timeType="+s(z)+"&dateType="+s(D)+"&align="+s(K)+"&selected="+s(k.endStr)+'"></div>'),v+="</div></div></div>",M.length&&!f&&!j){v+='<div class="_zs_galleryct ',M.length>W&&(v+="_zs_gallerycw"),v+='"><div mxa="_zs_gallery[:h" class="_zs_galleryck">'+r(A)+'：</div><div mxa="_zs_gallery[:i" class="clearfix">';for(var G=0,P=M.length;G<P;G++){var $=M[G];v+='<span class="_zs_gallerycu ',k.quickDateKey==$.key&&(v+="_zs_gallerycv"),v+='" mx-click="'+a+"__r({quick:true,quickInfo:'"+i(t,$)+'\'})" title="'+r($.text)+'">'+r($.text)+"</span>"}v+="</div></div>"}return v+='</div><div mxa="_zs_gallery[:j" class="mx-output-footer"><button mxa="_zs_gallery[:k" mx-click="'+a+'__r()" type="button" class="btn btn-small btn-brand mr10">'+r(Y)+'</button><button mxa="_zs_gallery[:l" mx-click="'+a+'__M()" type="button" class="btn btn-small">'+r(F)+"</button></div>"},init:function(e){var a=l.extend(!0,{},e.configs);a.dates=a.dates||{},a.formatter=a.formatter||"YYYY-MM-dd",a.title=a.title||d["calendar.range.title"];var t=a.dates,r=a.formatter,s=(a.quickDates,t.startStr),i=t.endStr,g=a.min,o=a.max;s||(t.startStr=s=c(g,o,r),t.start=n(s)),t.start||(t.start=n(t.startStr)),i||(t.endStr=i=c(g,o,r),t.end=n(i)),t.end||(t.end=n(t.endStr));var m=_(a.quickDates,s,r);if(!t.quickDateKey)for(var u=0;u<m.length;u++){var y=m[u];if(y.start==s&&y.end==i){t.quickDateKey=y.key,t.quickDateText=y.text;break}}a.quickInfos=m,a.quickGap=a.quickGap||7,a.quickTip=d["calendar.quick"],a.submitText=d["dialog.submit"],a.cancelText=d["dialog.cancel"],a.endMinFn=function(e,a){if(!a)return e;var t=new Date(e),r=new Date(a);return t.getTime()>r.getTime()?e:a},this.updater.set(a)},render:function(){this.updater.digest(),this.__a=l("#"+this.id)},"__K<change>":function(e){e.stopPropagation();var a=this.updater,t=a.get("dates"),r=a.get("vs"),l=a.get("vsSingle"),s=a.get("formatter"),n=a.get("quickDates"),c=a.get("quickInfos"),d=e.params.trigger,o=e.date+(e.time?" "+e.time:"");t[d+"Str"]=o;var m,u=t.startStr,y=t.endStr,v=new Date(i(u,s));y==g?m=g:(m=new Date(i(y,s)),!r&&!l&&m.getTime()<v.getTime()&&(y=i(m=v,s)));c=_(n,u,s);for(var z,x,p=0;p<c.length;p++){var f=c[p];if(f.start==u&&f.end==y){z=f.text,x=f.key;break}}this.updater.digest({quickInfos:c,dates:{start:v,end:m,startStr:u,endStr:y,quickDateText:z,quickDateKey:x}})},"__L<change>":function(e){e.stopPropagation(),this.updater.digest({vs:e.state})},"__r<click>":function(e){var a=this.updater,t=a.get(),l=t.dates,s=t.formatter,n=t.quickDates,c=e.params;if(c.quick){var d=c.quickInfo,o=new Date(i(d.start,s)),m=void 0;if(d.end==g)m=g;else{m=new Date(i(d.end,s));var u=void 0,y=void 0,v=void 0,z=void 0;t.min&&(v=(u=new Date(i(t.min,s))).getTime()),t.max&&(z=(y=new Date(i(t.max,s))).getTime());var x=o.getTime(),p=m.getTime();v&&x<v?o=u:z&&x>z&&(o=y),z&&p>z?m=y:v&&p<v&&(m=u),m.getTime()<o.getTime()&&(m=o)}for(var f=i(o,s),h=m==g?g:i(m,s),k=_(n,f,s),b=void 0,w=void 0,q=0;q<k.length;q++){var S=k[q];if(S.start==f&&S.end==h){b=S.text,w=S.key;break}}l={start:o,end:m,startStr:f,endStr:h,quickDateText:b,quickDateKey:w}}else{var T=t.vs,D=t.vsSingle;f=l.startStr,h=l.endStr,o=l.start,m=l.end;(h==g&&T||!T&&!D&&h!=g&&m.getTime()<o.getTime())&&(h=f,m=new Date(i(h,s))),r.mix(l,{end:m,endStr:h})}a.digest({dates:l}),this.__a.trigger({type:"change",vs:t.vs,dates:l})},"__M<click>":function(){this.__a.trigger("cancel")},"__J<contextmenu>":function(e){e.preventDefault()}});t.exports=o});