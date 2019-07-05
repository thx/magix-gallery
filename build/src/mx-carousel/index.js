define("mx-carousel/index",["magix","$"],(t,e,i)=>{var a=t("magix"),_=t("$");a.applyStyle("_zs_galleryx","._zs_gallerycX{position:relative;width:100%;overflow:hidden}._zs_gallerycX ._zs_gallerycY{position:relative;z-index:3}._zs_gallerycZ{display:inline-block;vertical-align:top}._zs_gallerycZ ._zs_galleryd_{cursor:pointer;background-color:#fff;opacity:.5;display:block;border-radius:1px;transition:all .5s}._zs_gallerycZ ._zs_galleryd_:hover{opacity:.8}._zs_galleryda{position:absolute;left:0;bottom:12px;z-index:4;height:5px;width:100%;text-align:center}._zs_galleryda ._zs_gallerycZ{padding:0 2px}._zs_galleryda ._zs_gallerycZ ._zs_galleryd_{width:20px;height:5px}._zs_galleryda ._zs_gallerycZ ._zs_galleryd_._zs_gallerydb{opacity:1;width:28px}._zs_gallerydc{position:absolute;top:50%;right:12px;z-index:4;width:5px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}._zs_gallerydc ._zs_gallerycZ{padding:2px 0}._zs_gallerydc ._zs_gallerycZ ._zs_galleryd_{width:5px;height:20px}._zs_gallerydc ._zs_gallerycZ ._zs_galleryd_._zs_gallerydb{opacity:1;height:28px}"),i.exports=a.View.extend({tmpl:function(t,e,i,a,_,s,l,r){if(i||(i=t),!_){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(t){return"&"+n[t]+";"};_=function(t){return""+(null==t?"":t)},a=function(t){return _(t).replace(o,c)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(t){return d[t]},g=/[!')(*]/g;s=function(t){return encodeURIComponent(_(t)).replace(g,h)}}if(!r){var u=/[\\'"]/g;r=function(t){return _(t).replace(u,"\\$&")}}var p="",y=t.height,v=t.content,f=t.dots,z=t.vertical,m=t.len,x=t.dotClass;if(p+='<div class="_zs_gallerycX" style="height: '+a(y)+'px;"><div mxa="_zs_galleryad:_" class="_zs_gallerycY" mx-mouseover="'+e+'__m()" mx-mouseout="'+e+'__aa()">'+_(v)+"</div>",f){p+='<ul class="',p+=z?" _zs_gallerydc ":" _zs_galleryda ",p+=' clearfix" mx-mouseover="'+e+'__m()" mx-mouseout="'+e+'__aa()">';for(var w=0;w<m;w+=1)p+='<li mxa="_zs_galleryad:a" class="_zs_gallerycZ"><i class="_zs_galleryd_ '+a(x)+'" mx-click="'+e+"__a_({idx:"+a(w)+'})"></i></li>';p+="</ul>"}return p+="</div>"},init:function(t){var e=this,i=_("#"+e.id);e.__a=i,e.__P=t,e.updater.set({mode:t.mode||"carousel",width:t.width||_(i).width()||400,height:t.height||_(i).height()||200,active:t.active||0,interval:0|t.interval||3e3,autoplay:t.autoplay+""=="true",dots:t.dots+""!="false",vertical:t.vertical+""=="true",timing:t.timing||"ease-in-out",duration:t.duration||".5s",dotClass:t.dotClass||""}),t.prevTrigger&&_("#"+t.prevTrigger).on("click",function(){e.__Q(-1)}),t.nextTrigger&&_("#"+t.nextTrigger).on("click",function(){e.__Q(1)}),e.on("destroy",function(){e.__R(),e.__S&&clearTimeout(e.__S)})},render:function(){var t=this.updater.get(),e=this.__a,i=e.children();this.updater.digest({len:i.length,content:e.html()}),this.__T=e.find("._zs_galleryd_");var a=e.find("._zs_gallerycY");this.__U=a,this.__V=a.find('[data-carousel="true"]'),this.__W(),this.__X(t.active,1),t.autoplay&&this.__Y()},__W:function(){this.__a;var t=this.updater.get(),e=t.width,i=t.height,a=t.mode,s=this.__V;switch(a){case"carousel":for(var l=0;l<s.length;l++){var r=_(s[l]);t.vertical?r.css({position:"absolute",top:i*l,left:0,width:e,height:i}):r.css({position:"absolute",top:0,left:e*l,width:e,height:i})}break;case"fade":for(l=0;l<s.length;l++){(r=_(s[l])).css({position:"absolute",opacity:0,top:0,left:0,width:e,height:i})}}t.vertical?this.__U.height(s.length*i).width(e):this.__U.width(s.length*e).height(i)},__X:function(t,e){var i=this.updater,a=i.get(),_=a.mode,s=a.duration,l=a.timing;switch(_){case"carousel":i.set({active:t});var r=a.width,n=a.height,o={transform:"translate3d("+(a.vertical?"0,-"+t*n+"px":"-"+t*r+"px,0")+",0)",transition:"transform "+s+" "+l};e&&delete o.transition,this.__U.css(o);break;case"fade":var c=this.__V;c.css({opacity:0});o={opacity:1,transition:"opacity "+s+" "+l};c.eq(t).css(o),i.set({active:t})}this.__T.removeClass("_zs_gallerydb").eq(t).addClass("_zs_gallerydb")},__Y:function(){var t=this,e=t.updater.get();if(e.autoplay){var i=e.active;t.__Z=setInterval(function(){var e=++i;e>=t.__V.length&&(i=e=0),t.__X(e)},e.interval)}},__R:function(){this.__Z&&clearInterval(this.__Z)},__Q:function(t){var e=this.updater.get(),i=e.active,a=e.len;(i=+i+t)>=a&&(i=0),i<0&&(i=a-1),this.__X(i)},"__a_<click>":function(t){this.__X(t.params.idx)},"__aa<mouseout>":function(t){a.inside(t.relatedTarget,this.id)||(this.__S=setTimeout(this.wrapAsync(this.__Y,this),50))},"__m<mouseover>":function(t){a.inside(t.relatedTarget,this.id)||(this.__S&&clearTimeout(this.__S),this.__R())},"$win<resize>":function(){var t=this.updater.get(),e=this.__P,i=this.__a;this.updater.set({width:e.width||_(i).width()||400}),this.__W(),this.__X(t.active,1)}})});