<<<<<<< HEAD
define("mx-status/index",["magix","mx-status/base"],(s,t,a)=>{var _=s("magix"),e=s("mx-status/base");_.applyStyle("_zs_gallery_mx-status_base_",'._zs_gallery_mx-status_base_-status {\n  position: relative;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-icon > * {\n  font-size: 20px;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info {\n  display: block;\n  min-width: calc(var(--font-size) * 6 + 60px);\n  max-width: none;\n  top: -11px;\n  left: -11px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-icon,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: left;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name {\n  margin-left: 8px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: right;\n  color: #999;\n  font-weight: bold;\n  font-size: 20px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper {\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n  cursor: pointer;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper ._zs_gallery_mx-status_base_-oper-icon {\n  display: none;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur {\n  cursor: default;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur ._zs_gallery_mx-status_base_-oper-icon {\n  display: block;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-desc {\n  min-width: 140px;\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-tip {\n  width: 200px;\n  font-size: 12px;\n  padding: 0 10px 10px 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info._zs_gallery_mx-status_base_-status-info-dd {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon {\n  position: relative;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: calc((var(--input-small-height) - 4px) / 2);\n  right: 0;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  overflow: hidden;\n  border-style: solid;\n  border-width: 3px 3px 0 3px;\n  border-color: #999 transparent transparent transparent;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-line {\n  height: 0;\n  border-top: 1px solid var(--color-border);\n}\n[mx-view*="mx-status/index"] {\n  width: 36px;\n  height: var(--input-small-height);\n  min-width: 0;\n}\n[mx-view*="mx-status/dropdown"]:hover ._zs_gallery_mx-status_base_-readonly {\n  cursor: not-allowed;\n  border-color: var(--border-highlight);\n}\n'),a.exports=e.extend({tmpl:function(s,t,a,_,e,l,n,r){if(a||(a=s),!e){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(s){return"&"+i[s]+";"};e=function(s){return""+(null==s?"":s)},_=function(s){return e(s).replace(o,u)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(s){return m[s]},g=/[!')(*]/g;l=function(s){return encodeURIComponent(e(s)).replace(g,x)}}if(!r){var c=/[\\'"]/g;r=function(s){return e(s).replace(c,"\\$&")}}n||(n=function(s,t,a,_){for(_=s[b];--_;)if(s[a=b+_]===t)return a;return s[a=b+s[b]++]=t,a});var p,y,f,b="",h="",z=s.showInfo,d=s.info,v=s.cur,w=s.opers,$=s.show;try{if(h+='<div mxa="_zs_galleryd?:_" class="_zs_gallery_mx-status_base_-status" mx-mouseout="'+t+'out()"><div mxa="_zs_galleryd?:a" class="_zs_gallery_mx-status_base_-status-handle-icon" mx-mouseover="'+t+'over()">',f=5,y="if showInfo",p="<%if (showInfo) {%>",z?(h+='<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=6,y="=info.color",h+=(p="<%=info.color%>",_(d.color)+';">'),f=6,y="!info.icon",h+=(p="<%!info.icon%>",e(d.icon)+"</span>"),f=7,y="else",p="<%}else {%>"):(h+='<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=8,y="=cur.color",h+=(p="<%=cur.color%>",_(v.color)+';">'),f=8,y="!cur.icon",h+=(p="<%!cur.icon%>",e(v.icon)+"</span>"),f=9,y="/if",p="<%}%>"),h+=" ",f=11,y="if (opers.length > 0)",p="<%if (opers.length > 0) {%>",w.length>0&&(h+='<i mxs="_zs_galleryd?:_" class="_zs_gallery_mx-status_base_-status-arrow"></i>',f=13,y="/if",p="<%}%>"),h+="</div>",f=16,y="if show",p="<%if (show) {%>",$){h+='<ul mxa="_zs_galleryd?:b" class="mx-output _zs_gallery_mx-status_base_-status-info">',f=18,y="if showInfo",p="<%if (showInfo) {%>",z&&(h+='<li mxa="_zs_galleryd?:c" class="_zs_gallery_mx-status_base_-status-desc clearfix"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=20,y="=info.color",h+=(p="<%=info.color%>",_(d.color)+';">'),f=20,y="!info.icon",h+=(p="<%!info.icon%>",e(d.icon)+'</span><span mxa="_zs_galleryd?:d" class="_zs_gallery_mx-status_base_-status-name">'),f=21,y="!info.text",h+=(p="<%!info.text%>",e(d.text)+"</span></li>"),f=23,y="if info.tip",p="<%if (info.tip) {%>",d.tip&&(h+='<li mxa="_zs_galleryd?:e" class="_zs_gallery_mx-status_base_-status-tip">',f=24,y="!info.tip",h+=(p="<%!info.tip%>",e(d.tip)+"</li>"),f=25,y="/if",p="<%}%>"),h+=" ",f=26,y="if (opers.length > 0)",p="<%if (opers.length > 0) {%>",w.length>0&&(h+='<li mxs="_zs_galleryd?:a" class="_zs_gallery_mx-status_base_-status-line"></li>',f=28,y="/if",p="<%}%>"),h+=" ",f=29,y="/if",p="<%}%>"),h+=" ",f=31,y="each opers as item",p="<%for (var $art_inckbjf$art_i = 0, $art_cpydwcryd$art_c = opers.length; $art_inckbjf$art_i < $art_cpydwcryd$art_c; $art_inckbjf$art_i++) {        var item = opers[$art_inckbjf$art_i]%>";for(var k=0,I=w.length;k<I;k++){var j=w[k];h+='<li class="_zs_gallery_mx-status_base_-status-oper clearfix ',f=32,y="if (item.value == cur.value)",p="<%if (item.value == cur.value) {%>",j.value==v.value&&(h+=" _zs_gallery_mx-status_base_-status-oper-cur ",f=32,y="/if",p="<%}%>"),h+='" mx-click="'+t+"select({item:'",f=32,y="@item",h+=(p="<%@item%>",n(a,j)+'\'})"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: '),f=33,y="=item.color",h+=(p="<%=item.color%>",_(j.color)+';">'),f=33,y="!item.icon",h+=(p="<%!item.icon%>",e(j.icon)+'</span><span mxa="_zs_galleryd?:f" class="_zs_gallery_mx-status_base_-status-name">'),f=34,y="!item.text",h+=(p="<%!item.text%>",e(j.text)+'</span><i mxs="_zs_galleryd?:b" class="mc-iconfont _zs_gallery_mx-status_base_-oper-icon">&#xe65d;</i></li>'),f=37,y="/each",p="<%}%>"}h+="</ul>",f=39,y="/if",p="<%}%>"}h+="</div>"}catch(s){var A="render view error:"+(s.message||s);throw y&&(A+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+f),A+="\r\n\t"+(y?"translate to:":"expr:"),A+=p+"\r\n\tat file:mx-status/index.html"}return h}})});
=======
define("mx-status/index",["magix","mx-status/base"],(s,t,a)=>{var _=s("magix"),e=s("mx-status/base");_.applyStyle("_zs_gallery_mx-status_base_",'._zs_gallery_mx-status_base_-status {\n  position: relative;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-icon > * {\n  font-size: 20px;\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info {\n  display: block;\n  min-width: calc(var(--font-size) * 6 + 60px);\n  max-width: none;\n  top: -11px;\n  left: -11px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-icon,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name,\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: left;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-name {\n  margin-left: 8px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-oper-icon {\n  float: right;\n  color: #999;\n  font-weight: bold;\n  font-size: 20px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper {\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n  cursor: pointer;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper ._zs_gallery_mx-status_base_-oper-icon {\n  display: none;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur {\n  cursor: default;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-oper._zs_gallery_mx-status_base_-status-oper-cur ._zs_gallery_mx-status_base_-oper-icon {\n  display: block;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-desc {\n  min-width: 140px;\n  height: calc(var(--input-small-height) + 20px);\n  line-height: var(--input-small-height);\n  padding: 10px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info ._zs_gallery_mx-status_base_-status-tip {\n  width: 200px;\n  font-size: 12px;\n  padding: 0 10px 10px 10px;\n  line-height: 18px;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-info._zs_gallery_mx-status_base_-status-info-dd {\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon {\n  position: relative;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-handle-icon ._zs_gallery_mx-status_base_-status-arrow {\n  position: absolute;\n  top: calc((var(--input-small-height) - 4px) / 2);\n  right: 0;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  overflow: hidden;\n  border-style: solid;\n  border-width: 3px 3px 0 3px;\n  border-color: #999 transparent transparent transparent;\n}\n._zs_gallery_mx-status_base_-status ._zs_gallery_mx-status_base_-status-line {\n  height: 0;\n  border-top: 1px solid var(--color-border);\n}\n[mx-view*="mx-status/index"] {\n  width: 36px;\n  height: var(--input-small-height);\n  min-width: 0;\n}\n[mx-view*="mx-status/dropdown"]:hover ._zs_gallery_mx-status_base_-readonly {\n  cursor: not-allowed;\n  border-color: var(--border-highlight);\n}\n'),a.exports=e.extend({tmpl:function(s,t,a,_,e,l,n,r){if(a||(a=s),!e){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(s){return"&"+i[s]+";"};e=function(s){return""+(null==s?"":s)},_=function(s){return e(s).replace(o,u)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(s){return m[s]},x=/[!')(*]/g;l=function(s){return encodeURIComponent(e(s)).replace(x,g)}}if(!r){var c=/[\\'"]/g;r=function(s){return e(s).replace(c,"\\$&")}}n||(n=function(s,t,a,_){for(_=s[b];--_;)if(s[a=b+_]===t)return a;return s[a=b+s[b]++]=t,a});var p,y,f,b="",h="",z=s.showInfo,d=s.info,v=s.cur,w=s.opers,$=s.show;try{if(h+='<div mxa="_zs_galleryd?:_" class="_zs_gallery_mx-status_base_-status" mx-mouseout="'+t+'out()"><div mxa="_zs_galleryd?:a" class="_zs_gallery_mx-status_base_-status-handle-icon" mx-mouseover="'+t+'over()">',f=5,y="if showInfo",p="<%if (showInfo) {%>",z?(h+='<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=6,y="=info.color",h+=(p="<%=info.color%>",_(d.color)+';">'),f=6,y="!info.icon",h+=(p="<%!info.icon%>",e(d.icon)+"</span>"),f=7,y="else",p="<%}else {%>"):(h+='<span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=8,y="=cur.color",h+=(p="<%=cur.color%>",_(v.color)+';">'),f=8,y="!cur.icon",h+=(p="<%!cur.icon%>",e(v.icon)+"</span>"),f=9,y="/if",p="<%}%>"),h+=" ",f=11,y="if (opers.length > 0)",p="<%if (opers.length > 0) {%>",w.length>0&&(h+='<i mxs="_zs_galleryd?:_" class="_zs_gallery_mx-status_base_-status-arrow"></i>',f=13,y="/if",p="<%}%>"),h+="</div>",f=16,y="if show",p="<%if (show) {%>",$){h+='<ul mxa="_zs_galleryd?:b" class="mx-output _zs_gallery_mx-status_base_-status-info">',f=18,y="if showInfo",p="<%if (showInfo) {%>",z&&(h+='<li mxa="_zs_galleryd?:c" class="_zs_gallery_mx-status_base_-status-desc clearfix"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: ',f=20,y="=info.color",h+=(p="<%=info.color%>",_(d.color)+';">'),f=20,y="!info.icon",h+=(p="<%!info.icon%>",e(d.icon)+'</span><span mxa="_zs_galleryd?:d" class="_zs_gallery_mx-status_base_-status-name">'),f=21,y="!info.text",h+=(p="<%!info.text%>",e(d.text)+"</span></li>"),f=23,y="if info.tip",p="<%if (info.tip) {%>",d.tip&&(h+='<li mxa="_zs_galleryd?:e" class="_zs_gallery_mx-status_base_-status-tip">',f=24,y="!info.tip",h+=(p="<%!info.tip%>",e(d.tip)+"</li>"),f=25,y="/if",p="<%}%>"),h+=" ",f=26,y="if (opers.length > 0)",p="<%if (opers.length > 0) {%>",w.length>0&&(h+='<li mxs="_zs_galleryd?:a" class="_zs_gallery_mx-status_base_-status-line"></li>',f=28,y="/if",p="<%}%>"),h+=" ",f=29,y="/if",p="<%}%>"),h+=" ",f=31,y="each opers as item",p="<%for (var $art_idvrcokjc$art_i = 0, $art_clgpbqldo$art_c = opers.length; $art_idvrcokjc$art_i < $art_clgpbqldo$art_c; $art_idvrcokjc$art_i++) {        var item = opers[$art_idvrcokjc$art_i]%>";for(var k=0,I=w.length;k<I;k++){var j=w[k];h+='<li class="_zs_gallery_mx-status_base_-status-oper clearfix ',f=32,y="if (item.value == cur.value)",p="<%if (item.value == cur.value) {%>",j.value==v.value&&(h+=" _zs_gallery_mx-status_base_-status-oper-cur ",f=32,y="/if",p="<%}%>"),h+='" mx-click="'+t+"select({item:'",f=32,y="@item",h+=(p="<%@item%>",n(a,j)+'\'})"><span class="_zs_gallery_mx-status_base_-status-icon" style="color: '),f=33,y="=item.color",h+=(p="<%=item.color%>",_(j.color)+';">'),f=33,y="!item.icon",h+=(p="<%!item.icon%>",e(j.icon)+'</span><span mxa="_zs_galleryd?:f" class="_zs_gallery_mx-status_base_-status-name">'),f=34,y="!item.text",h+=(p="<%!item.text%>",e(j.text)+'</span><i mxs="_zs_galleryd?:b" class="mc-iconfont _zs_gallery_mx-status_base_-oper-icon">&#xe65d;</i></li>'),f=37,y="/each",p="<%}%>"}h+="</ul>",f=39,y="/if",p="<%}%>"}h+="</div>"}catch(s){var q="render view error:"+(s.message||s);throw y&&(q+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+f),q+="\r\n\t"+(y?"translate to:":"expr:"),q+=p+"\r\n\tat file:mx-status/index.html"}return h}})});
>>>>>>> f4da9c6137ebb53744d694c722dda9b9dcb28ad8
