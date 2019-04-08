define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],(_,e,t)=>{var i=_("magix"),o=_("../mx-dragdrop/index"),n=_("../mx-runner/index"),a=_("$");i.applyStyle("_zs_galleryH",'._zs_galleryer{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryes{left:-1000px;top:0;background:#4d7fff}._zs_galleryes,._zs_galleryet{position:absolute;z-index:10000}._zs_galleryet{width:20px;height:20px;border-radius:4px}._zs_galleryet:after{position:absolute;left:0;right:0;top:0;bottom:0;font-size:12px;line-height:20px;text-align:center;color:#4d7fff}._zs_galleryeu{background:#f6f9ff;border:1px solid #4d7fff}._zs_galleryeu:after{content:"✓"}');var r=i.guid("dbar_"),l=i.guid("pt_"),d=a(window),b=a(document),h={__aS:function(){a("#"+r).length||a('<div class="_zs_galleryes" id="'+r+'"/>').appendTo("body")},__aT:function(_){_.child&&(a(_.child).css({opacity:.4}),this.__aS())},__aW:function(_){_&&_.child&&a(_.child).css({opacity:1}),this.__aU(),this.__aV()},__aU:function(){a("#"+r).css({left:-1e5})},__aX:function(_,e){var t=a("#"+r),i=!1;2&_.anchor&&(2&e?(t.css({height:2,width:_.bound.width,top:_.bound.y-1,left:_.bound.x}),i=!0):8&e&&(t.css({height:2,width:_.bound.width,top:_.bound.y+_.bound.height-1,left:_.bound.x}),i=!0)),!i&&1&_.anchor&&(1&e?t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x-1}):4&e&&t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x+_.bound.width-1}))},__aZ:function(_){var e=this;_.atPlace&&_.child!=_.hover?(3==_.anchor?_.__aY&&e.__aX(_,_.side):_.__aZ&&e.__aX(_,_.position),e.__b_(!0)):(e.__aU(),e.__b_())},__ba:function(_){var e=a("#"+l);e.length||(e=a('<div class="_zs_galleryet" id="'+l+'"/>')).appendTo("body");var t=Math.max(0,Math.min(_.pageX+10,b.width()-e.width())),i=Math.max(0,Math.min(_.pageY+18,b.height()-e.height()));e.css({left:t,top:i,display:"block"})},__b_:function(_){var e=a("#"+l);_?e.addClass("_zs_galleryeu"):e.removeClass("_zs_galleryeu")},__aV:function(){a("#"+l).hide()}};t.exports=i.View.extend({mixins:[o],init:function(_){var e=this,t=a("#"+e.id);t.on("mousedown",_.selector,function(_){_.preventDefault(),e.__aT(_)}),e.on("destroy",function(){t.off("mousedown")}),e.__k=t;var o=[t.get(0)];_.drops&&(o=o.concat(_.drops.split(","))),e.__bb=o;var n=_.horizonal+""=="true",r=_.vertical+""=="true";n||r||(r=!0);var l=0;n&&(l|=1),r&&(l|=2),e.__bc=l;var d=!0;i.has(_,"sort")&&(d=_.sort+""=="true"),e.__bd=d},__be:function(_){for(var e=0,t=this.__bb;e<t.length;e++){var o=t[e];if(i.inside(_,o))return i.node(o)}return null},__bg:function(_,e){var t=null;if(e||(e=this.__be(_)),!this.__bd&&this.__bf)return{child:this.__bf,zone:e};for(;e!=_;){if(_.parentNode==e){t=_;break}_=_.parentNode}return!e||e.firstChild||t||(t=e),t&&"false"===t.getAttribute("ds-draggable")&&(t=null),{child:t,zone:e}},__bi:function(_,e){var t=0,i=0,o=-1,n=-1,a=-1,r=-1,l=!1;if(e.pageX>=_.x&&e.pageX<=_.x+_.width&&e.pageY>=_.y&&e.pageY<=_.y+_.height&&(t|=e.pageX<=_.x+_.width/2?1:4,o=e.pageX-_.x,a=_.x+_.width-e.pageX,t|=e.pageY<=_.y+_.height/2?2:8,n=e.pageY-_.y,r=_.y+_.height-e.pageY,l=!0),l){var d=Math.min(o,n,a,r);d>-1&&(d==o?i=1:d==n?i=2:d==a?i=4:d==r&&(i=8))}var b=this.__bh;return b&&b.zone===b.hover&&(t=2,i=1),{position:t,atPlace:l,side:i}},__aT:function(_){if(1===_.which){var e=this,t=e.__bg(_.target);t.child&&(e.__bf=t.child,e.__bj=t.zone,e.__k.trigger({type:"dragbegin",dragNode:t.child,dragZone:t.zone}),h.__aT(t),e.dragdrop(t.zone,function(_){e.__bk(_)},function(_){e.__aW(_)}))}},__bn:function(_,e,t){var i=this,o=i.__bi(_,e),n=o.side!=i.__bl,a=o.position!=i.__bm;(n||a)&&(i.__bl=o.side,i.__bm=o.position,t.__aY=n,t.__aZ=a,t.side=o.side,t.position=o.position,t.atPlace=o.atPlace,t.anchor=i.__bc,h.__aZ(t))},__bk:function(_){var e=o.fromPoint(_.clientX,_.clientY),t=this;if(h.__ba(_),t.__bo=_,t.__bp=!0,t.__bq(),t.__br(),t.__bs||t.__bt||!e)return delete t.__bu,delete t.__bl,void delete t.__bm;if(t.__bu!=e){if(e.id===r)return;t.__bu=e,delete t.__bl;var n=t.__be(e);if(n){n!=t.__bv&&(t.__bv=n,t.__k.trigger({type:"enterzone",zone:n,changePointer:h.__b_}));var l=t.__bg(e,n);if(!l.child)return;var d=a(l.child),b=d.offset(),s={x:b.left,y:b.top,width:d.outerWidth(),height:d.outerHeight()};b=(d=a(l.zone)).offset(),t.__bw={x:b.left,y:b.top,scrollX:d.prop("scrollLeft"),scrollY:d.prop("scrollTop"),maxWidth:d.prop("scrollWidth"),maxHeight:d.prop("scrollHeight"),width:d.width(),height:d.height()},t.__bn(t.__bx=s,_,t.__bh={child:t.__bf,bound:s,zone:l.zone,hover:l.child})}else t.__bv&&(t.__k.trigger({type:"leavezone",zone:t.__bv,changePointer:h.__b_}),delete t.__bv)}else t.__bx&&i.inside(e,t.__bh.zone)?t.__bn(t.__bx,_,t.__bh):(delete t.__bl,delete t.__bm,t.__bd&&(h.__aU(),h.__b_()))},__aW:function(){var _=this;_.__by(),_.__bz(),h.__aW({child:_.__bf});var e=_.__bm,t=_.__bl,i=_.__bp,o=_.__bh,n=_.__bf;if(i&&(e||t)){var a=o.zone,r=_.__bc,l=3===r?t:e;if(1&r&&1&l||2&l&&2&r)o.hover==a?a.appendChild(n):a.insertBefore(n,o.hover);else if(8&l&&2&r||4&l&&1&r){for(var d=o.hover.nextSibling;d&&1!=d.nodeType;)d=d.nextSibling;a.insertBefore(n,d),d||(a.scrollTop=a.scrollHeight)}}o&&_.__k.trigger({type:"dragfinish",moved:i,dragNode:n,dragZone:_.__bj,dropNode:o.hover,dropZone:o.zone,outZone:!_.__bv}),delete _.__bf,delete _.__bj,delete _.__bu,delete _.__bh,delete _.__bx,delete _.__bm,delete _.__bl,delete _.__bo,delete _.__bt,delete _.__bv,delete _.__bw,delete _.__bs,delete _.__bp},__bq:function(){var _=this;_.__bA||(_.__bA=function(){var e=_.__bw;if(e){var t=_.__bh.zone,i=0,o=0,n=_.__bo;n.pageX>e.x&&n.pageY>e.y&&n.pageX<e.x+e.width&&n.pageY<e.y+e.height?(n.pageX-e.x<20&&e.scrollX>0?i=-Math.min(7,e.scrollX):e.x+e.width-n.pageX<20&&e.scrollX+e.width<e.maxWidth&&(i=Math.min(7,e.maxWidth-e.scrollX-e.width)),n.pageY-e.y<20&&e.scrollY>0?o=-Math.min(7,e.scrollY):e.y+e.height-n.pageY<20&&e.scrollY+e.height<e.maxHeight&&(o=Math.min(7,e.maxHeight-e.scrollY-e.height)),i||o?(_.__bs=!0,_.__bB=!0,t.scrollTop+=o,t.scrollLeft+=i,e.scrollX+=i,e.scrollY+=o,delete _.__bp,h.__aU(),h.__b_()):(delete _.__bs,delete _.__bB)):(delete _.__bs,delete _.__bB)}},n.__bC(30,_.__bA))},__br:function(){var _=this;_.__bD||(_.__bD=function(){if(!_.__bB){var e=0,t=0,i=_.__bo,o=d.scrollTop(),n=d.height(),a=b.height(),r=b.width(),l=d.width(),s=d.scrollLeft();i.pageX-s<20&&s>0?e=-Math.min(7,s):s+l-i.pageX<20&&s+l<r&&(e=Math.min(7,r-l-s)),i.pageY-o<20&&o>0?t=-Math.min(7,o):o+n-i.pageY<20&&o+n<a&&(t=Math.min(7,a-n-o)),e||t?(_.__bt=!0,i.pageX+=e,i.pageY+=t,window.scrollBy(e,t),delete _.__bp,h.__aU(),h.__ba(i),h.__b_()):delete _.__bt}},n.__bC(30,_.__bD))},__by:function(){this.__bA&&(n.__bE(this.__bA),delete this.__bA,delete this.__bB)},__bz:function(){this.__bD&&(n.__bE(this.__bD),delete this.__bD)}})});