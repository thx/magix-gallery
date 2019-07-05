define("mx-form/validator",["$","magix","mx-form/rule","./util"],(e,r,t)=>{var a=e("$"),o=e("magix"),l=e("mx-form/rule"),i=e("./util");o.applyStyle("_zs_galleryU","html ._zs_galleryfY,html ._zs_galleryfY:focus,html ._zs_galleryfY:hover{border-color:var(--color-red)}._zs_galleryfZ{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-red);font-size:var(--font-size);line-height:18px}._zs_galleryg_,._zs_galleryg_:focus,._zs_galleryg_:hover{border-color:var(--color-warn)}._zs_galleryga{display:none;position:absolute;white-space:nowrap;word-wrap:normal;pointer-events:none;color:var(--color-warn);font-size:var(--font-size)}");var s=function(e,r,t){var a,i,s,n=!0;for(var f in r)if(o.has(r,f)){if(l[f]){var p=l[f](t,i=r[f]);n=p.valid,s=p.tip}else n=!0,s="过滤掉不在校验规则内的";if(!n){a=f;break}}return{type:e,placement:r.placement,valid:n,action:a,rule:i,val:t,tip:s}},n=function(e){var r=a('[mxe="'+e+'"]');r.removeClass("_zs_galleryg_ _zs_galleryfY"),r.each(function(e,r){var t=(r=a(r)).attr("id")+"_msg";a("#"+t).hide()})},f=function(e,r,t){var l=a('[mxe="'+r+'"]');if(l.length){switch(e){case"warn":l.addClass("_zs_galleryg_").removeClass("_zs_galleryfY");break;case"error":l.addClass("_zs_galleryfY").removeClass("_zs_galleryg_")}return"checkbox"!=l.prop("type")&&"radio"!=l.prop("type")||(l=a(l[0])),l.each(function(r,l){var i=(l=a(l)).parent(),s=l.attr("id");s||(s=o.guid(),l.attr("id",s));var n=s+"_msg",f=a("#"+n);f.length||("static"==i.css("position")&&i.css({position:"relative"}),l.after('<div id="'+n+'"/>'),f=a("#"+n));switch(e){case"warn":f[0].className="_zs_galleryga";break;case"error":f[0].className="_zs_galleryfZ"}f.html(t.tip).show();var p=t.placement||"bottom",c=l.outerWidth(),d=l.outerHeight(),m=l.offset(),v=i.offset(),h="32px";if(window.getComputedStyle){var g=getComputedStyle(document.documentElement);h=document.body.style.getPropertyValue("--input-height").trim()||g.getPropertyValue("--input-height").trim()}switch(p){case"right":f.css({lineHeight:h,top:m.top-v.top,left:m.left-v.left+c+10});break;case"bottom":f.css({lineHeight:"18px",top:m.top-v.top+d,left:m.left-v.left+10})}}),!0}};t.exports={isValid:function(e,r){e=o.mix({element:null,scrollIntoView:!0,checkSubs:!0},e||{});var t,l=this,i=!0,s=l.owner.children(),n=!1;if(r||(r=[],n=!0),e.checkSubs)for(var f=0;f<s.length;f++){!1===o.Vframe.get(s[f]).invoke("isValid",[r])&&(i=!1)}e.element?(t="string"!=typeof e.element||/^#/.test(e.element)||/^\./.test(e.element)?a(e.element):a("#"+e.element)).attr("mxe")||(t=t.find('[mxe^="'+l.id+'"]')):t=a("#"+l.id+' [mxe^="'+l.id+'"]');var p=[];t.each(function(e,r){l.__bY(a(r)),p.push(a(r).attr("mxe"))});var c=l.updater.$form;if(c)for(var d=0;d<p.length;d++){var m=p[d];if(c[m]&&"error"==c[m].type){r.push(m),i=!1;break}}if(n&&e.scrollIntoView){for(var v=1e20,h=void 0,g=r.length,u=void 0,_=void 0;g--;)(u=a('[mxe="'+r[g]+'"]')).length&&(_=u.offset()).top<v&&(h=u[0],v=_.top);h&&(h.scrollIntoViewIfNeeded?h.scrollIntoViewIfNeeded():h.scrollIntoView&&h.scrollIntoView())}return i},"$[mxc]<keyup,change,focusout>":function(e){var r=a(e.eventTarget),t=r.attr("mxe");t&&t.startsWith(this.id)&&this.__bY(r)},__bY:function(e){for(var r=this.updater,t=r.$form||(r.$form={}),l=e.attr("mxc"),p=!0,c=0,d=r.parse(l);c<d.length;c++){for(var m=d[c],v=m.f||{},h=m.p.split("."),g=h.pop(),u=void 0,_=r.get();_&&h.length;)_=_[h.shift()];if("checkbox"==e.prop("type")){var y=_[g],w=e.prop("checked");if(!0===y||!1===y)u=w;else if(u=e.val(),a.isArray(y)){var x=e.prop("name");if(x)y=[],i.addCheckbox(x,y,v);else{var b=i.indexOf(y,u);w?-1===b&&y.push(u):b>-1&&y.splice(b,1)}u=y}else a.isPlainObject(y)?(w?y[u]=u:delete y[u],u=y):u=w?u:""}else if("radio"==e.prop("type")){var z=e.prop("name");u=a("input[name="+z+"]:checked").val()}else u=e.val();if(p){var k=s("error",v,u),V=e.attr("mxe");if(k.valid){if(delete t[V],n(V),o.has(v,"warn")){var $=s("warn",v.warn,u);$.valid?(delete t[V],n(V)):(t[V]=$,f("warn",V,$))}}else t[V]=k,p=!1,f("error",V,k)}}},clearValid:function(){var e=this.updater.$form;if(e)for(var r in e)n(r);this.updater.$form={}},"$doc<htmlchanged>":function(e){var r=this.updater.$form;if(e.vId==this.id&&r)for(var t in r){var a=r[t];f(a.type,t,a)||delete r[t]}}}});