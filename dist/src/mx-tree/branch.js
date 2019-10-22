define("mx-tree/branch",["magix","$"],(e,r,t)=>{var i=e("magix"),n=e("$"),a=i.Vframe;i.applyStyle("_zs_galleryaF",':root{--mx-tree-oper-size:calc(var(--font-size) + 2px)}._zs_gallerykJ{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerykJ ._zs_gallerykK{float:left;width:var(--mx-tree-oper-size);height:var(--mx-tree-oper-size);margin-right:5px;line-height:var(--mx-tree-oper-size);font-size:var(--mx-tree-oper-size);color:#ccc;transition:color var(--duration);-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerykJ ._zs_gallerykL{cursor:pointer}._zs_gallerykJ ._zs_gallerykL:hover{color:#666}._zs_gallerykM ._zs_gallerykJ{height:0;padding-bottom:0}._zs_gallerykN{position:relative}._zs_gallerykO{padding-left:calc(var(--mx-tree-oper-size) + 5px)}._zs_gallerykP,._zs_gallerykP ._zs_gallerykN{position:relative}._zs_gallerykP ._zs_gallerykN:after{content:"";position:absolute;top:22px;left:calc(var(--mx-tree-oper-size)/2);bottom:2px;width:1px;background-color:var(--color-border)}._zs_gallerykP ._zs_gallerykN:last-child:after{content:none}'),t.exports=i.View.extend({tmpl:function(e,r,t,i,n,a,l,s){if(t||(t=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(c,_)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(p,g)}}if(!s){var h=/[\\'"]/g;s=function(e){return n(e).replace(h,"\\$&")}}l||(l=function(e,r,t,i){for(i=e[u];--i;)if(e[t=u+i]===r)return t;return e[t=u+e[u]++]=r,t});for(var u="",f="",v=e.list,x=e.needExpand,m=e.readOnly,z=e.viewId,k=e.valueKey,y=e.textKey,b=e.closeMap,w=0,M=v.length;w<M;w++){var K=v[w];f+='<div mxv mxa="_zs_galleryfz:_" class="_zs_gallerykN"><div mxv mxa="_zs_galleryfz:a" class="_zs_gallerykJ clearfix">',x&&(f+=" ",K.children&&K.children.length>0?(f+='<i class="mc-iconfont _zs_gallerykK _zs_gallerykL" mx-click="'+r+"__s({index:"+i(w)+'})">',K.close?f+="&#xe65b;":f+="&#xe65a;",f+="</i>"):(f+=" ",m&&(f+='<i mxs="_zs_galleryfz:_" class="mc-iconfont _zs_gallerykK">&#xe732;</i>'),f+=" "),f+=" "),f+='<label mxv mxa="_zs_galleryfz:b" class="fl">',m||(f+='<input class="checkbox" type="checkbox" id="cb_'+i(z)+"_"+i(w)+'" value="'+i(K[k])+'" name="'+i(z)+'" mx-change="'+r+"__ca({index:"+i(w)+'})"/>'),f+=i(K[y])+"</label></div>",K.children&&K.children.length>0&&(f+='<div mxv="readOnly,needExpand,list,closeMap" id="'+i(z)+"_"+i(w)+'" class="',K.close&&(f+=" _zs_gallerykM "),f+=" ",K.isAll||(f+=" _zs_gallerykO "),f+='" mx-view="mx-tree/branch?textKey='+a(y)+"&valueKey="+a(k)+"&readOnly="+l(t,m)+"&needExpand="+l(t,x)+"&list="+l(t,K.children)+"&closeMap="+l(t,b)+'"></div>'),f+="</div>"}return f},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({viewId:this.id})},__fo:function(){var e,r,t=this.id;return n("#"+t+' input[name="'+t+'"]').each(function(t,i){i.indeterminate?e=r=!0:i.checked?e=!0:r=!0}),e&&r?3:e?2:1},__fp:function(e){var r=this.owner.parent(),t=0;if(r){for(var i=r.children(),l=0;l<i.length;l++)if(i[l]==e){var s=a.get(i[l]);s&&(t|=s.invoke("__fo"));break}var o=n("#cb_"+e);3===t?o.prop("indeterminate",!0):(o.prop("indeterminate",!1),o.prop("checked",2==t)),r.invoke("__fp",[r.id])}},__c_:function(e){var r=this.id;n("#"+r+' input[name="'+r+'"]').prop("indeterminate",!1).prop("checked",e);for(var t=0,i=this.owner.children();t<i.length;t++){var l=i[t],s=a.get(l);s&&s.invoke("__c_",[e])}},"__ca<change>":function(e){var r=a.get(this.id+"_"+e.params.index);r&&r.invoke("__c_",[e.eventTarget.checked]),this.__fp(this.id)},"__s<click>":function(e){e.stopPropagation();var r=n(e.eventTarget),t=e.params.index,i=n("#"+this.id+"_"+t);i.toggleClass("_zs_gallerykM");var a=this.updater.get("list"),l=this.updater.get("closeMap"),s=a[t].value;i.hasClass("_zs_gallerykM")?(r.html("&#xe65b;"),l[s]=!0):(r.html("&#xe65a;"),l[s]=!1)},setValues:function(e){e=e.map(function(e){return e+""});var r=this.id;n("#"+r+' input[name="'+r+'"]').each(function(r,t){e.indexOf(t.value+"")>-1&&(t.checked=!0)}),this.__fp(r)},getValues:function(){return this.get("value")},getItems:function(){return this.get("item")},get:function(e){var r=this.id,t=[];return this.updater.get("list").forEach(function(i,a){if(0==(i.children||[]).length){var l=n("#cb_"+r+"_"+a);l[0].checked&&("item"==e?t.push(i):t.push(l[0].value))}}),t}})});