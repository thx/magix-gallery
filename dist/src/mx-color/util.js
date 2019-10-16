define("mx-color/util",[],(a,r,t)=>{var e=function(a){if(!a)return null;if(a.indexOf("rgb")>-1){for(var r=a.toString().match(/\d+/g),t="#",e=0;e<3;e++)t+=("0"+Number(r[e]).toString(16)).slice(-2);a=t}a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,r,t,e){return r+r+t+t+e+e});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16),alpha:1}:null},n=function(a){var r,t,e=a.r/255,n=a.g/255,i=a.b/255,l=a.alpha,o=Math.max(e,n,i),c=Math.min(e,n,i),f=(o+c)/2,h=o-c;if(o===c)r=t=0;else{switch(t=f>.5?h/(2-o-c):h/(o+c),o){case e:r=(n-i)/h+(n<i?6:0);break;case n:r=(i-e)/h+2;break;case i:r=(e-n)/h+4}r/=6}return{h:360*r,s:t,l:f,a:l}},i=function(a,r,t){var e=n(a),i=n(r),l=2*t-1,o=e.a-i.a,c=((l*o==-1?l:(l+o)/(1+l*o))+1)/2,f=1-c,h=a.r*c+r.r*f,s=a.g*c+r.g*f,u=a.b*c+r.b*f,p=a.alpha*t+r.alpha*(1-t);return{r:Math.ceil(h),g:Math.ceil(s),b:Math.ceil(u),alpha:p}};t.exports={toRgb:e,toHSL:n,toHex:function(a){var r=parseFloat(a.alpha||1),t=Math.floor(r*parseInt(a.r)+255*(1-r)),e=Math.floor(r*parseInt(a.g)+255*(1-r)),n=Math.floor(r*parseInt(a.b)+255*(1-r));return"#"+("0"+t.toString(16)).slice(-2)+("0"+e.toString(16)).slice(-2)+("0"+n.toString(16)).slice(-2)},mix:i,shade:function(a,r){var t=e(a);return i({r:0,g:0,b:0,alpha:1},t,r)}}});