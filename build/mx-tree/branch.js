<<<<<<< HEAD
define("mx-tree/branch",["magix","$"],(e,n,i)=>{var t=e("magix"),r=e("$"),l=t.Vframe;t.applyStyle("_zs_gallery_mx-tree_index_",":root {\n  --mx-tree-oper-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  width: var(--mx-tree-oper-size);\n  height: var(--mx-tree-oper-size);\n  margin-right: 5px;\n  line-height: var(--mx-tree-oper-size);\n  font-size: var(--mx-tree-oper-size);\n  color: #ccc;\n  transition: color var(--duration);\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: calc(var(--mx-tree-oper-size) + 5px);\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: calc(var(--mx-tree-oper-size) / 2);\n  bottom: 2px;\n  width: 1px;\n  background-color: var(--color-border);\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n"),i.exports=t.View.extend({tmpl:function(e,n,i,t,r,l,a,c){if(i||(i=e),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,s=function(e){return"&"+_[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(d,s)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(m,x)}}if(!c){var h=/[\\'"]/g;c=function(e){return r(e).replace(h,"\\$&")}}a||(a=function(e,n,i,t){for(t=e[v];--t;)if(e[i=v+t]===n)return i;return e[i=v+e[v]++]=n,i});var g,f,p,v="",u="",y=e.list,z=e.needExpand,k=e.readOnly,b=e.viewId,w=e.valueKey,K=e.textKey,I=e.closeMap;try{p=1,f="each list as item index",g="<%for (var index = 0, $art_ceamzxflv$art_c = list.length; index < $art_ceamzxflv$art_c; index++) {    var item = list[index]%>";for(var O=0,$=y.length;O<$;O++){var E=y[O];u+='<div mxv mxa="_zs_galleryfb:_" class="_zs_gallery_mx-tree_index_-li"><div mxv mxa="_zs_galleryfb:a" class="_zs_gallery_mx-tree_index_-name clearfix">',p=4,f="if needExpand",g="<%if (needExpand) {%>",z&&(u+=" ",p=5,f="if (item.children && (item.children.length > 0))",g="<%if (item.children && (item.children.length > 0)) {%>",E.children&&E.children.length>0?(u+='<i class="mc-iconfont _zs_gallery_mx-tree_index_-icon _zs_gallery_mx-tree_index_-oper" mx-click="'+n+"@{toggle}({index:",p=6,f="=index",u+=(g="<%=index%>",t(O)+'})">'),p=7,f="if item.close",g="<%if (item.close) {%>",E.close?(u+="&#xe65b;",p=7,f="else",g="<%}            else {%>"):(u+="&#xe65a;",p=7,f="/if",g="<%}%>"),u+="</i>",p=9,f="else",g="<%}        else {%>"):(u+=" ",p=10,f="if readOnly",g="<%if (readOnly) {%>",k&&(u+='<i mxs="_zs_galleryfb:_" class="mc-iconfont _zs_gallery_mx-tree_index_-icon">&#xe732;</i>',p=13,f="/if",g="<%}%>"),u+=" ",p=14,f="/if",g="<%}%>"),u+=" ",p=15,f="/if",g="<%}%>"),u+='<label mxv mxa="_zs_galleryfb:b" class="fl">',p=17,f="if !readOnly",g="<%if (!readOnly) {%>",k||(u+='<input class="checkbox" type="checkbox" id="cb_',p=20,f="=viewId",u+=(g="<%=viewId%>",t(b)+"_"),p=20,f="=index",u+=(g="<%=index%>",t(O)+'" value="'),p=21,f="=item[valueKey]",u+=(g="<%=item[valueKey]%>",t(E[w])+'" name="'),p=22,f="=viewId",u+=(g="<%=viewId%>",t(b)+'" mx-change="'+n+"@{check}({index:"),p=23,f="=index",u+=(g="<%=index%>",t(O)+'})"/>'),p=24,f="/if",g="<%}%>"),p=24,f="=item[textKey]",u+=(g="<%=item[textKey]%>",t(E[K])+"</label></div>"),p=27,f="if (item.children && (item.children.length > 0))",g="<%if (item.children && (item.children.length > 0)) {%>",E.children&&E.children.length>0&&(u+='<div mxv="readOnly,needExpand,list,closeMap" id="',p=29,f="=viewId",u+=(g="<%=viewId%>",t(b)+"_"),p=29,f="=index",u+=(g="<%=index%>",t(O)+'" class="'),p=36,f="if item.close",g="<%if (item.close) {%>",E.close&&(u+=" _zs_gallery_mx-tree_index_-close ",p=36,f="/if",g="<%}%>"),u+=" ",p=36,f="if !item.isAll",g="<%if (!item.isAll) {%>",E.isAll||(u+=" _zs_gallery_mx-tree_index_-indent ",p=36,f="/if",g="<%}%>"),u+='" mx-view="mx-tree/branch?textKey=',p=30,f="=textKey",u+=(g="<%!$eu(textKey)%>",l(K)+"&valueKey="),p=31,f="=valueKey",u+=(g="<%!$eu(valueKey)%>",l(w)+"&readOnly="),p=32,f="@readOnly",u+=(g="<%@readOnly%>",a(i,k)+"&needExpand="),p=33,f="@needExpand",u+=(g="<%@needExpand%>",a(i,z)+"&list="),p=34,f="@item.children",u+=(g="<%@item.children%>",a(i,E.children)+"&closeMap="),p=35,f="@closeMap",u+=(g="<%@closeMap%>",a(i,I)+'"></div>'),p=37,f="/if",g="<%}%>"),u+="</div>",p=39,f="/each",g="<%}%>"}}catch(e){var A="render view error:"+(e.message||e);throw f&&(A+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+p),A+="\r\n\t"+(f?"translate to:":"expr:"),A+=g+"\r\n\tat file:mx-tree/branch.html"}return u},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({viewId:this.id})},"@{getCheckedState}":function(){var e,n,i=this.id;return r("#"+i+' input[name="'+i+'"]').each(function(i,t){t.indeterminate?e=n=!0:t.checked?e=!0:n=!0}),e&&n?3:e?2:1},"@{checkParentState}":function(e){var n=this.owner.parent(),i=0;if(n){for(var t=n.children(),a=0;a<t.length;a++)if(t[a]==e){var c=l.get(t[a]);c&&(i|=c.invoke("@{getCheckedState}"));break}var _=r("#cb_"+e);3===i?_.prop("indeterminate",!0):(_.prop("indeterminate",!1),_.prop("checked",2==i)),n.invoke("@{checkParentState}",[n.id])}},"@{checkAll}":function(e){var n=this.id;r("#"+n+' input[name="'+n+'"]').prop("indeterminate",!1).prop("checked",e);for(var i=0,t=this.owner.children();i<t.length;i++){var a=t[i],c=l.get(a);c&&c.invoke("@{checkAll}",[e])}},"@{check}<change>":function(e){var n=l.get(this.id+"_"+e.params.index);n&&n.invoke("@{checkAll}",[e.eventTarget.checked]),this["@{checkParentState}"](this.id)},"@{toggle}<click>":function(e){e.stopPropagation();var n=r(e.eventTarget),i=e.params.index,t="_zs_gallery_mx-tree_index_-close",l=r("#"+this.id+"_"+i);l.toggleClass(t);var a=this.updater.get("list"),c=this.updater.get("closeMap"),_=a[i].value;l.hasClass(t)?(n.html("&#xe65b;"),c[_]=!0):(n.html("&#xe65a;"),c[_]=!1)},setValues:function(e){e=e.map(function(e){return e+""});var n=this.id;r("#"+n+' input[name="'+n+'"]').each(function(n,i){e.indexOf(i.value+"")>-1&&(i.checked=!0)}),this["@{checkParentState}"](n)},getValues:function(){return this.get("value")},getItems:function(){return this.get("item")},get:function(e){var n=this.id,i=[];return this.updater.get("list").forEach(function(t,l){if(0==(t.children||[]).length){var a=r("#cb_"+n+"_"+l);a[0].checked&&("item"==e?i.push(t):i.push(a[0].value))}}),i}})});
=======
define("mx-tree/branch",["magix","$"],(e,n,i)=>{var t=e("magix"),r=e("$"),l=t.Vframe;t.applyStyle("_zs_gallery_mx-tree_index_",":root {\n  --mx-tree-oper-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  width: var(--mx-tree-oper-size);\n  height: var(--mx-tree-oper-size);\n  margin-right: 5px;\n  line-height: var(--mx-tree-oper-size);\n  font-size: var(--mx-tree-oper-size);\n  color: #ccc;\n  transition: color var(--duration);\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: calc(var(--mx-tree-oper-size) + 5px);\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: calc(var(--mx-tree-oper-size) / 2);\n  bottom: 2px;\n  width: 1px;\n  background-color: var(--color-border);\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n"),i.exports=t.View.extend({tmpl:function(e,n,i,t,r,l,a,c){if(i||(i=e),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,s=function(e){return"&"+_[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(d,s)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(m,x)}}if(!c){var h=/[\\'"]/g;c=function(e){return r(e).replace(h,"\\$&")}}a||(a=function(e,n,i,t){for(t=e[v];--t;)if(e[i=v+t]===n)return i;return e[i=v+e[v]++]=n,i});var g,f,p,v="",u="",y=e.list,z=e.needExpand,k=e.readOnly,b=e.viewId,w=e.valueKey,K=e.textKey,I=e.closeMap;try{p=1,f="each list as item index",g="<%for (var index = 0, $art_cndoisfjdk$art_c = list.length; index < $art_cndoisfjdk$art_c; index++) {    var item = list[index]%>";for(var O=0,$=y.length;O<$;O++){var E=y[O];u+='<div mxv mxa="_zs_galleryfb:_" class="_zs_gallery_mx-tree_index_-li"><div mxv mxa="_zs_galleryfb:a" class="_zs_gallery_mx-tree_index_-name clearfix">',p=4,f="if needExpand",g="<%if (needExpand) {%>",z&&(u+=" ",p=5,f="if (item.children && (item.children.length > 0))",g="<%if (item.children && (item.children.length > 0)) {%>",E.children&&E.children.length>0?(u+='<i class="mc-iconfont _zs_gallery_mx-tree_index_-icon _zs_gallery_mx-tree_index_-oper" mx-click="'+n+"@{toggle}({index:",p=6,f="=index",u+=(g="<%=index%>",t(O)+'})">'),p=7,f="if item.close",g="<%if (item.close) {%>",E.close?(u+="&#xe65b;",p=7,f="else",g="<%}            else {%>"):(u+="&#xe65a;",p=7,f="/if",g="<%}%>"),u+="</i>",p=9,f="else",g="<%}        else {%>"):(u+=" ",p=10,f="if readOnly",g="<%if (readOnly) {%>",k&&(u+='<i mxs="_zs_galleryfb:_" class="mc-iconfont _zs_gallery_mx-tree_index_-icon">&#xe732;</i>',p=13,f="/if",g="<%}%>"),u+=" ",p=14,f="/if",g="<%}%>"),u+=" ",p=15,f="/if",g="<%}%>"),u+='<label mxv mxa="_zs_galleryfb:b" class="fl">',p=17,f="if !readOnly",g="<%if (!readOnly) {%>",k||(u+='<input class="checkbox" type="checkbox" id="cb_',p=20,f="=viewId",u+=(g="<%=viewId%>",t(b)+"_"),p=20,f="=index",u+=(g="<%=index%>",t(O)+'" value="'),p=21,f="=item[valueKey]",u+=(g="<%=item[valueKey]%>",t(E[w])+'" name="'),p=22,f="=viewId",u+=(g="<%=viewId%>",t(b)+'" mx-change="'+n+"@{check}({index:"),p=23,f="=index",u+=(g="<%=index%>",t(O)+'})"/>'),p=24,f="/if",g="<%}%>"),p=24,f="=item[textKey]",u+=(g="<%=item[textKey]%>",t(E[K])+"</label></div>"),p=27,f="if (item.children && (item.children.length > 0))",g="<%if (item.children && (item.children.length > 0)) {%>",E.children&&E.children.length>0&&(u+='<div mxv="readOnly,needExpand,list,closeMap" id="',p=29,f="=viewId",u+=(g="<%=viewId%>",t(b)+"_"),p=29,f="=index",u+=(g="<%=index%>",t(O)+'" class="'),p=36,f="if item.close",g="<%if (item.close) {%>",E.close&&(u+=" _zs_gallery_mx-tree_index_-close ",p=36,f="/if",g="<%}%>"),u+=" ",p=36,f="if !item.isAll",g="<%if (!item.isAll) {%>",E.isAll||(u+=" _zs_gallery_mx-tree_index_-indent ",p=36,f="/if",g="<%}%>"),u+='" mx-view="mx-tree/branch?textKey=',p=30,f="=textKey",u+=(g="<%!$eu(textKey)%>",l(K)+"&valueKey="),p=31,f="=valueKey",u+=(g="<%!$eu(valueKey)%>",l(w)+"&readOnly="),p=32,f="@readOnly",u+=(g="<%@readOnly%>",a(i,k)+"&needExpand="),p=33,f="@needExpand",u+=(g="<%@needExpand%>",a(i,z)+"&list="),p=34,f="@item.children",u+=(g="<%@item.children%>",a(i,E.children)+"&closeMap="),p=35,f="@closeMap",u+=(g="<%@closeMap%>",a(i,I)+'"></div>'),p=37,f="/if",g="<%}%>"),u+="</div>",p=39,f="/each",g="<%}%>"}}catch(e){var A="render view error:"+(e.message||e);throw f&&(A+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+p),A+="\r\n\t"+(f?"translate to:":"expr:"),A+=g+"\r\n\tat file:mx-tree/branch.html"}return u},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({viewId:this.id})},"@{getCheckedState}":function(){var e,n,i=this.id;return r("#"+i+' input[name="'+i+'"]').each(function(i,t){t.indeterminate?e=n=!0:t.checked?e=!0:n=!0}),e&&n?3:e?2:1},"@{checkParentState}":function(e){var n=this.owner.parent(),i=0;if(n){for(var t=n.children(),a=0;a<t.length;a++)if(t[a]==e){var c=l.get(t[a]);c&&(i|=c.invoke("@{getCheckedState}"));break}var _=r("#cb_"+e);3===i?_.prop("indeterminate",!0):(_.prop("indeterminate",!1),_.prop("checked",2==i)),n.invoke("@{checkParentState}",[n.id])}},"@{checkAll}":function(e){var n=this.id;r("#"+n+' input[name="'+n+'"]').prop("indeterminate",!1).prop("checked",e);for(var i=0,t=this.owner.children();i<t.length;i++){var a=t[i],c=l.get(a);c&&c.invoke("@{checkAll}",[e])}},"@{check}<change>":function(e){var n=l.get(this.id+"_"+e.params.index);n&&n.invoke("@{checkAll}",[e.eventTarget.checked]),this["@{checkParentState}"](this.id)},"@{toggle}<click>":function(e){e.stopPropagation();var n=r(e.eventTarget),i=e.params.index,t="_zs_gallery_mx-tree_index_-close",l=r("#"+this.id+"_"+i);l.toggleClass(t);var a=this.updater.get("list"),c=this.updater.get("closeMap"),_=a[i].value;l.hasClass(t)?(n.html("&#xe65b;"),c[_]=!0):(n.html("&#xe65a;"),c[_]=!1)},setValues:function(e){e=e.map(function(e){return e+""});var n=this.id;r("#"+n+' input[name="'+n+'"]').each(function(n,i){e.indexOf(i.value+"")>-1&&(i.checked=!0)}),this["@{checkParentState}"](n)},getValues:function(){return this.get("value")},getItems:function(){return this.get("item")},get:function(e){var n=this.id,i=[];return this.updater.get("list").forEach(function(t,l){if(0==(t.children||[]).length){var a=r("#cb_"+n+"_"+l);a[0].checked&&("item"==e?i.push(t):i.push(a[0].value))}}),i}})});
>>>>>>> f4da9c6137ebb53744d694c722dda9b9dcb28ad8
