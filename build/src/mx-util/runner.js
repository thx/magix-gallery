define("mx-util/runner",["magix"],(n,t,i)=>{var e=n("magix"),_=window.requestAnimationFrame||function(n){return setTimeout(n,16)},f=window.cancelAnimationFrame||clearTimeout,r=Date.now||function(){return(new Date).getTime()};i.exports={__ft:[],__bF:function(n,t){this.__ft.push({i:n||15,f:t,n:r()}),this.__fy()},__bH:function(n){for(var t=this.__ft,i=void 0,e=0;e<t.length;e++)if(!(i=t[e]).r&&i.f==n){i.r=1;break}},__fy:function(){var n=this;if(!n.__fF){var t=function(){for(var i=n.__ft,o=0,a=void 0,u=void 0;o<i.length;o++)(a=i[o]).r?i.splice(o--,1):(u=r())-a.n>=a.i&&(a.n=u,e.toTry(a.f));i.length?n.__fF=_(t):(f(n.__fF),delete n.__fF)};n.__fF=_(t)}}}});