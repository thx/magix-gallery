define("mx-time/content",["magix","$"],(e,_,t)=>{var i=e("magix"),a=e("$");i.applyStyle("_zs_galleryaI",'._zs_gallerymR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymS{position:relative;z-index:2}._zs_gallerymT ._zs_gallerymU{width:100%;height:40px;font-size:24px;text-align:center}._zs_gallerymT ._zs_gallerymV{width:24px;height:24px;line-height:24px;font-weight:700;font-size:12px;text-align:center;background-color:#e6e6e6;border-radius:4px;cursor:pointer;transition:all .25s}._zs_gallerymT ._zs_gallerymV:hover{background-color:#ccc}._zs_gallerymT ._zs_gallerymW ._zs_gallerymV{background-color:#eee;color:#ccc}._zs_gallerymX{position:absolute;top:0;left:0;z-index:1;width:100%;height:40px}._zs_gallerymX ._zs_gallerymY{float:left;width:50%;font-size:24px;height:40px;line-height:40px;font-weight:bolder;text-align:center}._zs_gallerymX ._zs_gallerymY._zs_gallerymZ{padding-left:26px}._zs_gallerymX ._zs_gallerymY._zs_galleryn_{padding-right:26px}[mx-view*="mx-time/content"]{padding:10px 10px 0}');var l=function(e){if(!e){var _=new Date;e=_.getHours()+":"+_.getMinutes()+":"+_.getSeconds()}var t=e.split(":");if(3!=t.length)throw new Error("bad time:"+e);return{__fh:parseInt(t[0],10)||0,__fi:parseInt(t[1],10)||0,__fj:parseInt(t[2],10)||0}},r=function(e){return e<10?"0"+e:e};t.exports=i.View.extend({tmpl:function(e,_,t,i,a,l,r,s){if(t||(t=e),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,m=function(e){return"&"+n[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(f,m)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},p=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(p,o)}}if(!s){var g=/[\\'"]/g;s=function(e){return a(e).replace(g,"\\$&")}}var d="",y=e.format,u=e.time,x=e.types;return d+='<div mxv mxa="_zs_galleryeF:_" class="clearfix pr"><div mxs="_zs_galleryeF:_" class="clearfix _zs_gallerymX"><div class="_zs_gallerymY _zs_gallerymZ">:</div><div class="_zs_gallerymY _zs_galleryn_">:</div></div><div mxv mxa="_zs_galleryeF:a" class="_zs_gallerymS" style="display: flex;flex-direction: row;justify-content: space-between;align-items: stretch;--mx-grid-gutter: 0;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div mxv mxa="_zs_galleryeF:b" class="_zs_gallerymT" style="flex: 0 0 52px;"><div mxv mxa="_zs_galleryeF:c" class="mb5"><input class="input _zs_gallerymU" maxlength="2" autocomplete="off" value="'+i(y(u.__fh))+'" ',x.__fh?d+=' mx-change="'+_+"__fm({type:'__fh'})\" ":d+=' disabled="disabled" ',d+=' mx-keydown="'+_+"__fr({type:'__fh'})\"/></div><div class=\"clearfix ",x.__fh||(d+=" _zs_gallerymW "),d+='"><i class="mc-iconfont _zs_gallerymV fl" ',x.__fh&&(d+=' mx-click="'+_+"__ab({type:'__fh'})\" mx-mousedown=\""+_+"__fp({type:'__fh'})\" "),d+='>&#xe618;</i><i class="mc-iconfont _zs_gallerymV fr" ',x.__fh&&(d+=' mx-click="'+_+"__ab({type:'__fh',inc:1})\" mx-mousedown=\""+_+"__fp({type:'__fh',inc:1})\" "),d+='>&#xe605;</i></div></div><div mxv mxa="_zs_galleryeF:d" class="_zs_gallerymT" style="flex: 0 0 52px;"><div mxv mxa="_zs_galleryeF:e" class="mb5"><input class="input _zs_gallerymU" maxlength="2" autocomplete="off" value="'+i(y(u.__fi))+'" ',x.__fi?d+=' mx-change="'+_+"__fm({type:'__fi'})\" ":d+=' disabled="disabled" ',d+=' mx-keydown="'+_+"__fr({type:'__fi'})\"/></div><div class=\"clearfix ",x.__fi||(d+=" _zs_gallerymW "),d+='"><i class="mc-iconfont _zs_gallerymV fl" ',x.__fi&&(d+=' mx-click="'+_+"__ab({type:'__fi'})\" mx-mousedown=\""+_+"__fp({type:'__fi'})\" "),d+='>&#xe618;</i><i class="mc-iconfont _zs_gallerymV fr" ',x.__fi&&(d+=' mx-click="'+_+"__ab({type:'__fi',inc:1})\" mx-mousedown=\""+_+"__fp({type:'__fi',inc:1})\" "),d+='>&#xe605;</i></div></div><div mxv mxa="_zs_galleryeF:f" class="_zs_gallerymT" style="flex: 0 0 52px;"><div mxv mxa="_zs_galleryeF:g" class="mb5"><input class="input _zs_gallerymU" maxlength="2" autocomplete="off" value="'+i(y(u.__fj))+'" ',x.__fj?d+=' mx-change="'+_+"__fm({type:'__fj'})\" ":d+=' disabled="disabled" ',d+=' mx-keydown="'+_+"__fr({type:'__fj'})\"/></div><div class=\"clearfix ",x.__fj||(d+=" _zs_gallerymW "),d+='"><i class="mc-iconfont _zs_gallerymV fl" ',x.__fj&&(d+=' mx-click="'+_+"__ab({type:'__fj'})\" mx-mousedown=\""+_+"__fp({type:'__fj'})\" "),d+='>&#xe618;</i><i class="mc-iconfont _zs_gallerymV fr" ',x.__fj&&(d+=' mx-click="'+_+"__ab({type:'__fj',inc:1})\" mx-mousedown=\""+_+"__fp({type:'__fj',inc:1})\" "),d+=">&#xe605;</i></div></div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var _=this.updater.altered(),t=l(e.time),i=function(e){e||(e="all");var _={__fh:!0,__fi:!0,__fj:!0},t={hour:"__fh",minute:"__fi",second:"__fj"};if("all"!=e)for(var i in t)-1===e.indexOf(i)&&delete _[t[i]];return _}(e.types);return this.updater.set({format:r,time:t,types:i}),_||(_=this.updater.altered()),!!_&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},val:function(e){var _=this.updater;e&&_.digest({time:l(e)});var t=_.get("time");return r(t.__fh)+":"+r(t.__fi)+":"+r(t.__fj)},__fk:function(e,_){var t=this.updater.get("time"),i="__fh"==e?23:59;_?t[e]++:t[e]--,t[e]>i?t[e]=0:t[e]<0&&(t[e]=i),this.updater.digest({time:t})},__y:function(){var e=a("#"+this.id),_=this.updater.get("time");e.trigger({type:"change",time:r(_.__fh)+":"+r(_.__fi)+":"+r(_.__fj)})},"__ab<click>":function(e){if(!this.__fl){var _=e.params;this.__fk(_.type,_.inc),this.__y()}},"__fm<change>":function(e){e.stopPropagation();var _=e.params.type,t="__fh"==_?23:59,i=e.eventTarget,a=i.value,l=parseInt(a,10),s=this.updater.get("time");l||0===l?(l<0?l=0:l>t&&(l=t),l!==s[_]?(s[_]=l,this.updater.digest({time:s}),this.__y()):i.value=r(l)):i.value=r(s[_])},"__fp<mousedown>":function(e){var _=this,t=e.params;_.__fn=setTimeout(_.wrapAsync(function(){_.__fo=setInterval(_.wrapAsync(function(){_.__fl=!0,_.__fk(t.type,t.inc)}),50)}),300)},"__fr<keydown>":function(e){if(38==e.keyCode||40==e.keyCode){e.preventDefault();var _=this;_.__fk(e.params.type,38==e.keyCode),clearTimeout(_.__fq),_.__fq=setTimeout(_.wrapAsync(function(){_.__y()}),100)}},"$doc<mouseup>":function(){var e=this;clearTimeout(e.__fn),clearInterval(e.__fo),setTimeout(e.wrapAsync(function(){e.__fl&&e.__y(),delete e.__fl}),0)}})});