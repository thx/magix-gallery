define("mx-dragdrop/index",["$"],(e,o,n)=>{var t=e("$"),_=t(window),a=t(document),u=window.getComputedStyle,r=function(e){(e=window.getSelection)?e().removeAllRanges():(e=window.document.selection)&&(e.empty?e.empty():e=null)},l=function(e){e.preventDefault()};n.exports={ctor:function(){var e=this;e.on("destroy",function(){e.__aH()})},__aH:function(e){var o=this,n=o.__aI;if(n){delete o.__aI,a.off("mousemove touchmove",o.__aJ).off("mouseup touchend",o.__aK).off("keydown mousewheel DOMMouseScroll",l),_.off("blur",o.__aK);var u=n.__aL,r=n.__aM,i=n.__aN;t(u).off("losecapture",o.__aK),u.setCapture&&u.releaseCapture(),i&&r(e)}},dragdrop:function(e,o,n){var u=this;if(u.__aH(),e){r(),e.setCapture&&e.setCapture(),u.__aI={__aM:n,__aL:e,__aN:t.isFunction(n)};var i=t.isFunction(o);u.__aK=function(e){u.__aH(e)},u.__aJ=function(e){i&&o(e)},a.on("mousemove touchmove",u.__aJ).on("mouseup touchend",u.__aK).on("keydown mousewheel DOMMouseScroll",l),_.on("blur",u.__aK),t(e).on("losecapture",u.__aK)}},fromPoint:function(e,o){var n=null;if(document.elementFromPoint)for(!l.__aO&&u&&(l.__aO=!0,l.__aP=null!==document.elementFromPoint(-1,-1)),l.__aP&&(e+=_.scrollLeft(),o+=_.scrollTop()),n=document.elementFromPoint(e,o);n&&3==n.nodeType;)n=n.parentNode;return n},clear:r}});