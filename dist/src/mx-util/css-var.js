define("mx-util/css-var",[],(e,t,o)=>{o.exports={get:function(e,t){var o=window.getComputedStyle(document.documentElement),r=document.body.style.getPropertyValue(e)||o.getPropertyValue(e);return r?r.trim():t||""}}});