define("mx-util/color",[],(r,e,n)=>{n.exports={toRgb:function(r){if(!r)return null;if(r.indexOf("rgb")>-1){for(var e=r.toString().match(/\d+/g),n="#",t=0;t<3;t++)n+=("0"+Number(e[t]).toString(16)).slice(-2);r=n}r=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(r,e,n,t){return e+e+n+n+t+t});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}}});