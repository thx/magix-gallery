define("mx-hour/index",["magix","$"],(e,l,a)=>{var r=e("magix"),s=e("$");r.applyStyle("_zs_gallerya_",'._zs_galleryhG{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryhH{width:10%}._zs_galleryhI ._zs_galleryhJ{padding-top:40px;padding-bottom:10px;border-bottom:1px solid #e6e6e6}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhK,._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL{float:left;height:36px;text-align:center;vertical-align:middle;cursor:pointer}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhK{position:relative;width:10%;margin-right:1.8%;border-radius:4px;color:#333;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhK ._zs_galleryhM{position:absolute;top:-18px;width:100%;height:18px;line-height:18px;right:0;text-align:center;color:#999}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhK ._zs_galleryhN{width:100%;margin-top:8px;padding:0}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL{position:relative;width:3.6%;color:#999;line-height:20px;font-weight:700;font-family:Tahoma}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhO{width:1.8%}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhP{position:relative;height:36px}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhP:before{content:"";position:absolute;top:-16px;left:0;width:100%;height:16px;background-color:transparent}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhQ{position:absolute;top:13px;left:0;width:0;height:10px;border-left:1px solid #e6e6e6}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhQ ._zs_galleryhR{position:absolute;top:-31px;left:50%;width:40px;margin-left:-20px;color:#ccc}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhS ._zs_galleryhQ{height:16px}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhT ._zs_galleryhP{background-color:#f6f9ff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhT ._zs_galleryhP:before{background-color:#4d7fff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhT ._zs_galleryhQ{border-left:1px solid #d8e3ff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL._zs_galleryhT ._zs_galleryhQ ._zs_galleryhR{color:#fff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhU,._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhV{position:absolute;top:0;width:0;height:36px;border-left:1px solid #4d7fff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhU:before,._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhV:before{content:"";position:absolute;top:0;right:-3px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #4d7fff}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhU ._zs_galleryhW,._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhV ._zs_galleryhW{position:absolute;top:-16px;left:-10px;width:20px;height:16px;background-color:#4d7fff;color:#fff;text-align:center;line-height:16px;border-radius:2px}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhV{left:0}._zs_galleryhI ._zs_galleryhJ ._zs_galleryhL ._zs_galleryhU{right:-1px}._zs_galleryhX{margin-right:1.8%;padding:10px 0;color:#999}'),a.exports=r.View.extend({tmpl:function(e,l,a,r,s,_,t,h){if(a||(a=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(g,n)}}if(!_){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},c=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(c,d)}}if(!h){var y=/[\\'"]/g;h=function(e){return s(e).replace(y,"\\$&")}}var p="",z=e.simple,f=e.types,u=e.viewId,x=e.type,m=e.periods,v=e.tip;if(p+='<div mxv mxa="_zs_gallerycj:_" class="_zs_galleryhI">',!z){p+='<div mxv><span mxs="_zs_gallerycj:_" class="color-9 mr10">快捷操作：</span>';for(var b=0,w=f.length;b<w;b++){var I=f[b];p+='<label mxv mxa="_zs_gallerycj:a" class="mr40"><input type="radio" name="'+r(u)+'_opers" value="'+r(I.value)+'" mx-change="'+l+"changeType({type:'"+r(h(I.value))+"'})\" ",I.value==x&&(p+=' checked="true" '),p+="/>"+r(I.text)+"</label>"}p+="</div>"}p+=" ";for(var J=0,k=m.length;J<k;J++){var L=m[J];p+='<ul mxa="_zs_gallerycj:b" class="_zs_galleryhJ clearfix"><li mxa="_zs_gallerycj:c" class="_zs_galleryhK"><span mxs="_zs_gallerycj:a" class="_zs_galleryhM">时间段</span><a href="javascript:;" class="btn btn-small _zs_galleryhN ',L.selected&&(p+=" btn-brand "),p+='" mx-click="'+l+"toggleAll({pIndex:"+r(J)+'})">'+r(L.name)+"</a></li>";for(var j=0,E=L.hours,S=E.length;j<S;j++){var T=E[j];p+='<li mx-mousedown="'+l+'drag()" class="_zs_galleryhL ',T.milestone&&(p+=" _zs_galleryhS "),p+=" ",T.selected&&(p+=" _zs_galleryhT "),p+='" data-period="'+r(J)+'" data-hour="'+r(T.index)+'"><div mxs="_zs_gallerycj:b" class="_zs_galleryhP"></div><div class="_zs_galleryhV ',T.firstSelected||(p+=" hide "),p+='" style="z-index: '+r(T.zIndex)+';"><span mxa="_zs_gallerycj:d" class="_zs_galleryhW">'+r(T.index)+'</span></div><div class="_zs_galleryhU ',T.endSelected||(p+=" hide "),p+='" style="z-index: '+r(T.zIndex)+'"><span mxa="_zs_gallerycj:e" class="_zs_galleryhW">'+r(T.indexNext)+'</span></div><div mxa="_zs_gallerycj:f" class="_zs_galleryhQ"><span mxa="_zs_gallerycj:g" class="_zs_galleryhR">'+r(T.index)+"</span></div></li>"}p+='<li mxs="_zs_gallerycj:c" class="_zs_galleryhL _zs_galleryhS _zs_galleryhO"><span class="_zs_galleryhQ"><span class="_zs_galleryhR">24</span></span></li></ul>'}return p+='</div><div mxa="_zs_gallerycj:h" class="clearfix _zs_galleryhX"><a mxs="_zs_gallerycj:d" mx-click="'+l+'clearAll()" href="javascript:;" class="btn btn-small _zs_galleryhH"><i class="mc-iconfont displacement-2 mr5 color-9">&#xe72e;</i>清空</a><span mxa="_zs_gallerycj:i" class="fr lh28">'+r(v)+"</span></div>"},init:function(e){var l=this,a=e.tip||"",r=e.simple+""!="false",s=e.selected||[],_={};s.forEach(function(e){_[e.week]=e.times||[]});var t;t=r?[{name:"周一至周五",week:"12345"},{name:"周六至周日",week:"67"}]:[{name:"周一",week:1},{name:"周二",week:2},{name:"周三",week:3,times:[0]},{name:"周四",week:4},{name:"周五",week:5},{name:"周六",week:6},{name:"周日",week:7}],l.$selected={},t.forEach(function(e,a){var r=(_[e.week]||[]).map(function(e){return e+""}),s=function(){for(var e=[],l=0;l<24;l++)e.push({index:l,indexNext:l+1,milestone:l%6==0,zIndex:l+10});return e}();s.forEach(function(e){e.selected=r.indexOf(e.index+"")>-1,e.selected&&(l.$selected[a+"_"+e.index]=!0)}),e.hours=s}),l.updater.set({viewId:l.id,tip:a,periods:l.sync(t),simple:r,type:"",types:[{text:"全日程",value:1},{text:"工作日",value:2},{text:"双休日",value:3}]})},render:function(){this.updater.digest()},sync:function(e){return e.forEach(function(e){for(var l=e.hours,a=!0,r=0;r<l.length;r++){var s=l[r],_=l[r-1],t=l[r+1];s.firstSelected=!1,s.endSelected=!1,s.selected&&((_&&!_.selected||!_)&&(s.firstSelected=!0),(t&&!t.selected||!t)&&(s.endSelected=!0)),a=a&&s.selected}e.selected=a}),e},"clearAll<click>":function(e){var l=this.updater.get("periods");l.forEach(function(e){e.hours.forEach(function(e){e.selected=!1})}),this.updater.digest({periods:this.sync(l)})},"toggleAll<click>":function(e){var l=this.updater.get("periods"),a=l[e.params.pIndex],r=!a.selected;a.hours.forEach(function(e){e.selected=r}),this.updater.digest({periods:this.sync(l)})},"drag<mousedown>":function(e){var l=this,a=l.updater.get("periods"),r=s(e.eventTarget),_=r.data("period"),t=r.data("hour"),h=!a[_].hours[t].selected;l.toggle(_,t,h);var i=r.parent("._zs_galleryhJ").find("[data-hour]");return i.on("mouseenter.drag",function(e){e.preventDefault();var a=s(this);l.toggle(a.data("period"),a.data("hour"),h)}),s(document.body).off("mouseup.drag").on("mouseup.drag",function(e){i.off("mouseenter.drag")}),e.preventDefault(),!1},toggle:function(e,l,a){var r=this.updater.get("periods");r[e].hours[l].selected=a,this.updater.digest({periods:this.sync(r)})},"changeType<change>":function(e){var l=e.params.type,a=this.updater.get("periods"),r=[];switch(+l){case 2:r=[6,7];break;case 3:r=[1,2,3,4,5]}a.forEach(function(e){e.hours.forEach(function(l){l.selected=r.indexOf(e.week)<0})}),this.updater.digest({type:l,periods:this.sync(a)})},val:function(){var e=this.updater.get("periods"),l=[];return e.forEach(function(e){var a=[];e.hours.forEach(function(e){e.selected&&a.push(e.index)}),l.push({week:e.week,name:e.name,times:a})}),l}})});