define("mx-util/monitor",["$"],(e,o,_)=>{var n=e("$"),i=0,f=[],t=n(document),r=n(window),u=function(e){for(var o=f.length;o--;){var _=f[o];if(_.__fs)f.splice(o,1);else{var n=_.__fw;"resize"!=e.type&&n.__o(e.target)||n.__q()}}},s=function(e){var o=f[e.id];o&&(o.__fs=!0),delete f[e.id]};_.exports={__t:function(e){s(e);var o={__fw:e};f.push(o),f[e.id]=o},__l:s,__k:function(){i||(t.on("mousedown keyup",u),r.on("resize",u)),i++},__m:function(){i>0&&(--i||(t.off("mousedown keyup",u),r.off("resize",u)))}}});