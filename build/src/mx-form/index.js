define("mx-form/index",["magix","$","./util"],(e,t,r)=>{var i=e("magix"),a=e("$"),o=e("./util");r.exports={ctor:function(){var e=this,t=e.updater;e.on("domready",function(){for(var r=0,i=a('input[type="checkbox"][mxe^="'+e.id+'"],input[type="radio"][mxe^="'+e.id+'"]');r<i.length;r++)for(var p=i[r],n=(p=a(p)).attr("mxc"),c=0,s=t.parse(n);c<s.length;c++){for(var f=s[c],h=f.p.split("."),l=h.pop(),d=(f.f,t.get());d&&h.length;){d=d[h.shift()]}if(!h.length){if(void 0===d)return;var v=d[l];if(!0===v)p.prop("checked",v);else{var m=p.val();a.isArray(v)?o.indexOf(v,m)>=0&&p.prop("checked",!0):a.isPlainObject(v)?v[m]&&p.prop("checked",!0):v==m&&p.prop("checked",!0)}}}})},fromKeys:function(e,t){t=(t+"").split(",");for(var r={},a=0,o=void 0;a<t.length;a++)r[o=t[a]]=i.has(e,o)?e[o]:"";return r},"$[mxc]<change,focusout>":function(e){var t=a(e.eventTarget),r=t.attr("mxe");if(r&&r.startsWith(this.id)){for(var p=t.attr("mxc"),n=this.updater,c=n.parse(p),s=n.$k,f=!1,h=0,l=c;h<l.length;h++){for(var d=l[h],v=d.p.split("."),m=d.f||{},x=v.pop(),u=void 0,g=void 0,k=void 0,y=n.get();y&&v.length;)u=v.shift(),k||(k=u),y=y[u];if(k=k||x,t.attr("mx-view")&&t.attr("mx-view").indexOf("mx-calendar/rangepicker")>-1)g=JSON.parse(t.val())[d.a];else if("checkbox"==t.prop("type")){var O=y[x],b=t.prop("checked");if(!0===O||!1===O)g=b;else if(g=t.val(),a.isArray(O)){var $=t.prop("name");if($)O=[],o.addCheckbox($,O,m);else{var _=o.indexOf(O,g);b?-1===_&&O.push(g):_>-1&&O.splice(_,1)}g=O}else a.isPlainObject(O)?(b?O[g]=g:delete O[g],g=O):g=b?g:""}else if("radio"==t.prop("type")){var T=t.prop("name");g=a("input[name="+T+"]:checked").val()}else g=t.val();y&&(!d.a||i.has(e,d.a)||g)&&(i.has(e,d.a)&&(g=e[d.a]),y[x]=g,m.refresh&&(f=!0),!f&&m.silent||(s&&(s[k]=1),n.$c=1))}f&&"change"===e.type&&(clearTimeout(this.__co),this.__co=setTimeout(function(){n.digest()},0))}}}});