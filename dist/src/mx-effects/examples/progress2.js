define("mx-effects/examples/progress2",["magix","$","examples/subs","mx-title/second","./10","./24","./32","examples/api"],(e,i,s)=>{e("examples/subs"),e("mx-title/second"),e("./10"),e("./24"),e("./32"),e("examples/api");var d=e("magix");e("$");s.exports=d.View.extend({tmpl:function(e,i,s,d,n,t,a,m){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},d=function(e){return n(e).replace(o,l)}}if(!t){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(c,x)}}if(!m){var p=/[\\'"]/g;m=function(e){return n(e).replace(p,"\\$&")}}a||(a=function(e,i,s,d){for(d=e[f];--d;)if(e[s=f+d]===i)return s;return e[s=f+e[f]++]=i,s});var f="",u="",_=e.viewId,y=e.options;return u+='<div mxv mxa="_zs_galleryb{:_" class="pr pr120"><div mx-view="examples/subs?list='+a(s,[{name:"使用示例",key:_+"_demo",subs:[{name:"展示值取整",key:_+"_demo10"},{name:"自定义颜色",key:_+"_demo24"},{name:"基础透明度",key:_+"_demo32"}]},{name:"API",key:_+"_api"}])+'"></div><div id="'+d(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb{:a" class="clearfix mb20"><div mxa="_zs_galleryb{:b" class="_zs_galleryd"><div mx-view="mx-effects/examples/10" id="'+d(_)+'_demo10"></div><div mx-view="mx-effects/examples/24" id="'+d(_)+'_demo24"></div></div><div mxa="_zs_galleryb{:c" class="_zs_galleryd"><div mx-view="mx-effects/examples/32" id="'+d(_)+'_demo32"></div></div></div><div id="'+d(_)+'_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="examples/api?options='+a(s,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"num",desc:"当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数",type:"number",def:""},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)",type:"string",def:"品牌色"},{key:"base-opacity",desc:"基础透明度，<1 的数值，<br/>表示第一个格子的透明度，后续计算为 opacity = base + i * (1 - base) / 9",type:"number",def:"0.08"}]})}})});