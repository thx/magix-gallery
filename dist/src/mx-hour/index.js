define("mx-hour/index",["magix","$"],(e,l,r)=>{var a=e("magix"),s=e("$");a.applyStyle("_zs_galleryaa",'._zs_gallerygB ._zs_gallerygC{padding-top:40px;padding-bottom:10px;border-bottom:1px solid var(--color-border)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygD,._zs_gallerygB ._zs_gallerygC ._zs_gallerygE{float:left;height:36px;text-align:center;vertical-align:middle;cursor:pointer}._zs_gallerygB ._zs_gallerygC ._zs_gallerygD{position:relative;width:10%;margin-right:1.8%;border-radius:4px;color:#333;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}._zs_gallerygB ._zs_gallerygC ._zs_gallerygD ._zs_gallerygF{position:absolute;top:-18px;width:100%;height:18px;line-height:18px;right:0;text-align:center;color:#999}._zs_gallerygB ._zs_gallerygC ._zs_gallerygD ._zs_gallerygG{width:100%;margin-top:8px;padding:0;font-size:12px}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE{position:relative;width:3.6%;color:#999;line-height:20px;font-weight:700;font-family:Tahoma}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE._zs_gallerygH{width:1.8%}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygI{position:relative;height:36px}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygI:before{content:"";position:absolute;top:-16px;left:0;width:100%;height:16px;background-color:transparent}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygJ{position:absolute;top:13px;left:0;width:0;height:10px;border-left:1px solid var(--color-border)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygJ ._zs_gallerygK{position:absolute;top:-31px;left:50%;width:40px;margin-left:-20px;color:#ccc}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE._zs_gallerygL ._zs_gallerygJ{height:16px}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE._zs_gallerygM ._zs_gallerygI{background-color:var(--color-brand-opacity)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE._zs_gallerygM ._zs_gallerygI:before{background-color:var(--color-brand)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE._zs_gallerygM ._zs_gallerygJ ._zs_gallerygK{color:#fff}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygN,._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygO{position:absolute;top:0;width:0;height:36px;border-left:1px solid var(--color-brand)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygN:before,._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygO:before{content:"";position:absolute;top:0;right:-3px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid var(--color-brand)}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygN ._zs_gallerygP,._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygO ._zs_gallerygP{position:absolute;top:-16px;left:-10px;width:20px;height:16px;background-color:var(--color-brand);color:#fff;text-align:center;line-height:16px;border-radius:2px}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygO{left:0}._zs_gallerygB ._zs_gallerygC ._zs_gallerygE ._zs_gallerygN{right:-1px}._zs_gallerygQ{padding:10px 0;color:#999}._zs_gallerygQ ._zs_gallerygR{font-size:12px;width:10%}._zs_gallerygQ ._zs_gallerygS{line-height:var(--input-small-height);margin-right:1.8%}'),r.exports=a.View.extend({tmpl:function(e,l,r,a,s,g,t,_){if(r||(r=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(n,o)}}if(!g){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return c[e]},y=/[!')(*]/g;g=function(e){return encodeURIComponent(s(e)).replace(y,d)}}if(!_){var p=/[\\'"]/g;_=function(e){return s(e).replace(p,"\\$&")}}var z="",u=e.simple,h=e.types,f=e.viewId,x=e.type,m=e.periods,v=e.tip;if(z+='<div mxv mxa="_zs_gallerycK:_" class="_zs_gallerygB">',!u){z+='<div mxv><span mxs="_zs_gallerycK:_" class="color-9 mr10">快捷操作：</span>';for(var b=0,w=h.length;b<w;b++){var E=h[b];z+='<label mxv mxa="_zs_gallerycK:a" class="mr40"><input type="radio" name="'+a(f)+'_opers" value="'+a(E.value)+'" mx-change="'+l+"changeType({type:'"+a(_(E.value))+"'})\" ",E.value==x&&(z+=' checked="true" '),z+="/>"+a(E.text)+"</label>"}z+="</div>"}z+=" ";for(var C=0,k=m.length;C<k;C++){var B=m[C];z+='<ul mxa="_zs_gallerycK:b" class="_zs_gallerygC clearfix"><li mxa="_zs_gallerycK:c" class="_zs_gallerygD"><span mxs="_zs_gallerycK:a" class="_zs_gallerygF">时间段</span><a href="javascript:;" class="btn btn-small _zs_gallerygG ',B.selected&&(z+=" btn-brand "),z+='" mx-click="'+l+"toggleAll({pIndex:"+a(C)+'})">'+a(B.name)+"</a></li>";for(var K=0,I=B.hours,S=I.length;K<S;K++){var D=I[K];z+='<li mx-mousedown="'+l+'drag()" class="_zs_gallerygE ',D.milestone&&(z+=" _zs_gallerygL "),z+=" ",D.selected&&(z+=" _zs_gallerygM "),z+='" data-period="'+a(C)+'" data-hour="'+a(D.index)+'"><div mxs="_zs_gallerycK:b" class="_zs_gallerygI"></div><div class="_zs_gallerygO ',D.firstSelected||(z+=" hide "),z+='" style="z-index: '+a(D.zIndex)+';"><span mxa="_zs_gallerycK:d" class="_zs_gallerygP">'+a(D.index)+'</span></div><div class="_zs_gallerygN ',D.endSelected||(z+=" hide "),z+='" style="z-index: '+a(D.zIndex)+'"><span mxa="_zs_gallerycK:e" class="_zs_gallerygP">'+a(D.indexNext)+'</span></div><div mxa="_zs_gallerycK:f" class="_zs_gallerygJ"><span mxa="_zs_gallerycK:g" class="_zs_gallerygK">'+a(D.index)+"</span></div></li>"}z+='<li mxs="_zs_gallerycK:c" class="_zs_gallerygE _zs_gallerygL _zs_gallerygH"><span class="_zs_gallerygJ"><span class="_zs_gallerygK">24</span></span></li></ul>'}return z+='</div><div mxa="_zs_gallerycK:h" class="clearfix _zs_gallerygQ"><a mxs="_zs_gallerycK:d" mx-click="'+l+'clearAll()" href="javascript:;" class="btn btn-small _zs_gallerygR"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_gallerycK:i" class="fr _zs_gallerygS">'+a(v)+"</span></div>"},init:function(e){var l=this,r=e.tip||"",a=e.simple+""!="false",s=e.selected||[],g={};s.forEach(function(e){g[e.week]=e.times||[]});var t;t=a?[{name:"周一至周五",week:"12345"},{name:"周六至周日",week:"67"}]:[{name:"周一",week:1},{name:"周二",week:2},{name:"周三",week:3,times:[0]},{name:"周四",week:4},{name:"周五",week:5},{name:"周六",week:6},{name:"周日",week:7}],l.$selected={},t.forEach(function(e,r){var a=(g[e.week]||[]).map(function(e){return e+""}),s=function(){for(var e=[],l=0;l<24;l++)e.push({index:l,indexNext:l+1,milestone:l%6==0,zIndex:l+10});return e}();s.forEach(function(e){e.selected=a.indexOf(e.index+"")>-1,e.selected&&(l.$selected[r+"_"+e.index]=!0)}),e.hours=s}),l.updater.set({viewId:l.id,tip:r,periods:l.sync(t),simple:a,type:"",types:[{text:"全日程",value:1},{text:"工作日",value:2},{text:"双休日",value:3}]})},render:function(){this.updater.digest()},sync:function(e){return e.forEach(function(e){for(var l=e.hours,r=!0,a=0;a<l.length;a++){var s=l[a],g=l[a-1],t=l[a+1];s.firstSelected=!1,s.endSelected=!1,s.selected&&((g&&!g.selected||!g)&&(s.firstSelected=!0),(t&&!t.selected||!t)&&(s.endSelected=!0)),r=r&&s.selected}e.selected=r}),e},"clearAll<click>":function(e){var l=this.updater.get("periods");l.forEach(function(e){e.hours.forEach(function(e){e.selected=!1})}),this.updater.digest({periods:this.sync(l)})},"toggleAll<click>":function(e){var l=this.updater.get("periods"),r=l[e.params.pIndex],a=!r.selected;r.hours.forEach(function(e){e.selected=a}),this.updater.digest({periods:this.sync(l)})},"drag<mousedown>":function(e){var l=this,r=l.updater.get("periods"),a=s(e.eventTarget),g=a.data("period"),t=a.data("hour"),_=!r[g].hours[t].selected;l.toggle(g,t,_);var i=a.parent("._zs_gallerygC").find("[data-hour]");return i.on("mouseenter.drag",function(e){e.preventDefault();var r=s(this);l.toggle(r.data("period"),r.data("hour"),_)}),s(document.body).off("mouseup.drag").on("mouseup.drag",function(e){i.off("mouseenter.drag")}),e.preventDefault(),!1},toggle:function(e,l,r){var a=this.updater.get("periods");a[e].hours[l].selected=r,this.updater.digest({periods:this.sync(a)})},"changeType<change>":function(e){var l=e.params.type,r=this.updater.get("periods"),a=[];switch(+l){case 2:a=[6,7];break;case 3:a=[1,2,3,4,5]}r.forEach(function(e){e.hours.forEach(function(l){l.selected=a.indexOf(e.week)<0})}),this.updater.digest({type:l,periods:this.sync(r)})},val:function(){var e=this.updater.get("periods"),l=[];return e.forEach(function(e){var r=[];e.hours.forEach(function(e){e.selected&&r.push(e.index)}),l.push({week:e.week,name:e.name,times:r})}),l}})});