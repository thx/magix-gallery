define("mx-table/sub",["$","magix"],(e,l,t)=>{var a=e("$");e("magix").applyStyle("_zs_galleryaE","._zs_gallerykl{position:relative;display:inline-block;width:1px;height:1px}._zs_gallerykl ._zs_gallerykm,._zs_gallerykl ._zs_gallerykn{position:absolute;top:-10px;left:0;width:16px;height:16px;text-align:center;line-height:16px}._zs_gallerykn{cursor:pointer;color:var(--color-brand)}._zs_gallerykm{cursor:pointer;color:#999}._zs_gallerykm:hover{color:#333}"),t.exports={ctor:function(){var e=this;e.__eI={};var l=function(l){var t=e.__eI;a("#"+(l.id||e.id)).find("[sub-toggle]").each(function(l,r){var i=a(r).attr("sub-toggle");/^true$/i.test(a(r).attr("data-expand"))&&!t[i]&&(t[i]={expand:!0});var n=t[i];e.sync(n&&n.expand,r,i)})};e.on("rendered",l),e.on("domready",l)},sync:function(e,l,t){var r=a("#"+this.id);a(l).addClass("_zs_gallerykl"),e?(a(l).html('<i class="mc-iconfont _zs_gallerykn">&#xe653;</i>'),r.find("[sub-toggle-parent="+t+"]").removeClass("hide")):(a(l).html('<i class="mc-iconfont _zs_gallerykm">&#xe652;</i>'),r.find("[sub-toggle-parent="+t+"]").addClass("hide"))},"$[sub-toggle]<click>":function(e){a("#"+this.id);var l=a(e.eventTarget),t=l.attr("sub-toggle"),r=this.__eI[t];r||(r=this.__eI[t]={}),r.expand=!r.expand,this.sync(r.expand,l,t),a(document).trigger("tableresize")}}});