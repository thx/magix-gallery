define("mx-form/validator",["$","magix","mx-form/rule","./util"],(e,r,t)=>{var a=e("$"),o=e("magix"),l=e("mx-form/rule"),i=e("./util");o.applyStyle("_zs_galleryR","html ._zs_galleryfD,html ._zs_galleryfD:focus,html ._zs_galleryfD:hover{border-color:var(--color-red)}._zs_galleryfE{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-red);font-size:var(--font-size)}._zs_galleryfF,._zs_galleryfF:focus,._zs_galleryfF:hover{border-color:var(--color-warn)}._zs_galleryfG{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-warn);font-size:var(--font-size)}");var s=function(e,r,t){var a,i,s,n=!0;for(var f in r)if(o.has(r,f)){if(l[f]){var c=l[f](t,i=r[f]);n=c.valid,s=c.tip}else n=!0,s="过滤掉不在校验规则内的";if(!n){a=f;break}}return{type:e,placement:r.placement,valid:n,action:a,rule:i,val:t,tip:s}},n=function(e){var r=a('[mxe="'+e+'"]');r.removeClass("_zs_galleryfF _zs_galleryfD"),r.each(function(e,r){var t=(r=a(r)).attr("id")+"_msg";a("#"+t).hide()})},f=function(e,r,t){var l=a('[mxe="'+r+'"]');if(l.length){switch(e){case"warn":l.addClass("_zs_galleryfF").removeClass("_zs_galleryfD");break;case"error":l.addClass("_zs_galleryfD").removeClass("_zs_galleryfF")}return"checkbox"!=l.prop("type")&&"radio"!=l.prop("type")||(l=a(l[0])),l.each(function(r,l){var i=(l=a(l)).parent(),s=l.attr("id");s||(s=o.guid(),l.attr("id",s));var n=s+"_msg",f=a("#"+n);f.length||("static"==i.css("position")&&i.css({position:"relative"}),l.after('<div id="'+n+'"/>'),f=a("#"+n));switch(e){case"warn":f[0].className="_zs_galleryfG";break;case"error":f[0].className="_zs_galleryfE"}f.html(t.tip).show();var c=t.placement||"bottom",p=l.outerWidth(),d=l.outerHeight(),m=l.offset(),v=i.offset(),h="32px";if(window.getComputedStyle){var u=getComputedStyle(document.documentElement);h=document.body.style.getPropertyValue("--input-height").trim()||u.getPropertyValue("--input-height").trim()}switch(c){case"right":f.css({lineHeight:h,top:m.top-v.top,left:m.left-v.left+p+10});break;case"bottom":f.css({lineHeight:"18px",top:m.top-v.top+d,left:m.left-v.left+10})}}),!0}};t.exports={isValid:function(e,r){e=o.mix({element:null,scrollIntoView:!0,checkSubs:!0},e||{});var t,l=this,i=!0,s=l.owner.children(),n=!1;if(r||(r=[],n=!0),e.checkSubs)for(var f=0;f<s.length;f++){!1===o.Vframe.get(s[f]).invoke("isValid",[r])&&(i=!1)}e.element?(t="string"!=typeof e.element||/^#/.test(e.element)||/^\./.test(e.element)?a(e.element):a("#"+e.element)).attr("mxe")||(t=t.find('[mxe^="'+l.id+'"]')):t=a("#"+l.id+' [mxe^="'+l.id+'"]');var c=[];t.each(function(e,r){l.__bW(a(r)),c.push(a(r).attr("mxe"))});var p=l.updater.$form;if(p)for(var d=0;d<c.length;d++){var m=c[d];if(p[m]&&"error"==p[m].type){r.push(m),i=!1;break}}if(n&&e.scrollIntoView){for(var v=1e20,h=void 0,u=r.length,g=void 0,_=void 0;u--;)(g=a('[mxe="'+r[u]+'"]')).length&&(_=g.offset()).top<v&&(h=g[0],v=_.top);h&&(h.scrollIntoViewIfNeeded?h.scrollIntoViewIfNeeded():h.scrollIntoView&&h.scrollIntoView())}return i},"$[mxc]<keyup,change,focusout>":function(e){var r=a(e.eventTarget),t=r.attr("mxe");t&&t.startsWith(this.id)&&this.__bW(r)},__bW:function(e){for(var r=this.updater,t=r.$form||(r.$form={}),l=e.attr("mxc"),c=!0,p=0,d=r.parse(l);p<d.length;p++){for(var m=d[p],v=m.f||{},h=m.p.split("."),u=h.pop(),g=void 0,_=r.get();_&&h.length;)_=_[h.shift()];if("checkbox"==e.prop("type")){var y=_[u],w=e.prop("checked");if(!0===y||!1===y)g=w;else if(g=e.val(),a.isArray(y)){var x=e.prop("name");if(x)y=[],i.addCheckbox(x,y,v);else{var b=i.indexOf(y,g);w?-1===b&&y.push(g):b>-1&&y.splice(b,1)}g=y}else a.isPlainObject(y)?(w?y[g]=g:delete y[g],g=y):g=w?g:""}else if("radio"==e.prop("type")){var z=e.prop("name");g=a("input[name="+z+"]:checked").val()}else g=e.val();if(c){var k=s("error",v,g),V=e.attr("mxe");if(k.valid){if(delete t[V],n(V),o.has(v,"warn")){var $=s("warn",v.warn,g);$.valid?(delete t[V],n(V)):(t[V]=$,f("warn",V,$))}}else t[V]=k,c=!1,f("error",V,k)}}},clearValid:function(){var e=this.updater.$form;if(e)for(var r in e)n(r);this.updater.$form={}},"$doc<htmlchanged>":function(e){var r=this.updater.$form;if(e.vId==this.id&&r)for(var t in r){var a=r[t];f(a.type,t,a)||delete r[t]}}}});