define("mx-tree/index",["magix","mx-tree/util","../mx-medusa/util","./branch"],(e,t,n)=>{e("./branch");var l=e("magix"),r=l.Vframe,i=e("mx-tree/util"),o=e("../mx-medusa/util");l.applyStyle("_zs_galleryaM",'._zs_gallerynz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerynA{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerynA ._zs_gallerynB{float:left;height:20px;margin-right:5px;line-height:20px;color:#ccc;transition:color .25s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerynA ._zs_gallerynC{cursor:pointer;font-size:14px}._zs_gallerynA ._zs_gallerynC:hover{color:#666}._zs_gallerynD ._zs_gallerynA{height:0;padding-bottom:0}._zs_gallerynE{position:relative}._zs_gallerynF{padding-left:20px}._zs_gallerynG,._zs_gallerynG ._zs_gallerynE{position:relative}._zs_gallerynG ._zs_gallerynE:after{content:"";position:absolute;top:22px;left:7px;bottom:2px;width:1px;background-color:#e6e6e6}._zs_gallerynG ._zs_gallerynE:last-child:after{content:none}'),n.exports=l.View.extend({tmpl:function(e,t,n,l,r,i,o,a){if(n||(n=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,c=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(u,c)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return g[e]},_=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(_,d)}}if(!a){var p=/[\\'"]/g;a=function(e){return r(e).replace(p,"\\$&")}}o||(o=function(e,t,n,l){for(l=e[f];--l;)if(e[n=f+l]===t)return n;return e[n=f+e[f]++]=t,n});var f="",h="",x=e.viewId,y=e.hasLine,v=e.readOnly,m=e.needExpand,z=e.textKey,b=e.valueKey,w=e.list;return h+='<div mxv="readOnly,needExpand,list" id="tree_'+l(x)+'" class="',y&&(h+=" _zs_gallerynG "),h+='" mx-view="mx-tree/branch?readOnly='+o(n,v)+"&needExpand="+o(n,m)+"&textKey="+i(z)+"&valueKey="+i(b)+"&list="+o(n,w)+"&fromTop="+o(n,!0)+'"></div>'},init:function(e){this.__i=e},render:function(){var e,t=this.__i,n=t.readOnly+""=="true",l=t.hasLine+""=="true",r=t.valueKey||"value",a=t.textKey||"text",s=t.parentKey||"pValue",u=t.needAll+""=="true",c=t.needExpand+""=="true",g=t.close+""=="true",d=i.listToTree(t.list,r,s,g);if(u){var _={};_[r]="all",_[a]=o["select.all"],_.isAll=!0,_.children=d.list,_.close=g,e=[_]}else e=d.list;this.updater.digest({viewId:this.id,valueKey:r,textKey:a,list:e,readOnly:n,hasLine:l,needExpand:c});var p=t.bottomValues||[];p.length>0&&this.setBottomValues(p)},setBottomValues:function(e){this.loop(function(t){t.invoke("setValues",[e])})},getBottomValues:function(){var e=[];return this.loop(function(t){var n=t.invoke("getValues");e=e.concat(n)}),e},getBottomItems:function(){var e=[];return this.loop(function(t){var n=t.invoke("getItems");e=e.concat(n)}),e},loop:function(e){var t=this.owner.children(),n=function(t){for(var l=0,i=t;l<i.length;l++){var o=i[l],a=r.get(o);e(a);var s=a.children();s&&s.length>0&&n(s)}};n(t)}})});