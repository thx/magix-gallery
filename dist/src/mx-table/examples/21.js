define("mx-table/examples/21",["magix","examples/example","$","mx-tabs/index"],(e,n,t)=>{e("mx-tabs/index");e("magix");var a=e("examples/example");e("$");t.exports=a.extend({tmpl:function(e,n,t,a,i,r,l,s){if(t||(t=e),!i){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+u[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(c,d)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(o,m)}}if(!s){var p=/[\\'"]/g;s=function(e){return i(e).replace(p,"\\$&")}}l||(l=function(e,n,t,a){for(a=e[f];--a;)if(e[t=f+a]===n)return t;return e[t=f+e[f]++]=n,t});var f="",v="",g=e.selected;return v+='<div mx-change="'+n+'change()" mx-view="mx-tabs/index?list='+l(t,[{value:22,text:"模块1"},{value:23,text:"模块2"}])+"&selected="+r(g)+'"></div><div mx-view="mx-table/examples/'+a(g)+"?selected="+r(g)+'"><div mxs="_zs_gallerye0:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>'},render:function(){this.updater.digest({selected:22})},"change<change>":function(e){var n=this;setTimeout(function(){n.updater.digest({selected:e.value})})}})});