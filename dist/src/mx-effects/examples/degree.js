define("mx-effects/examples/degree",["magix","$","examples/subs","mx-title/second","./38","./35","./36","./37","examples/api"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./38"),e("./35"),e("./36"),e("./37"),e("examples/api");var s=e("magix");e("$");d.exports=s.View.extend({tmpl:function(e,i,d,s,t,m,n,a){if(d||(d=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(o,l)}}if(!m){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return v[e]},x=/[!')(*]/g;m=function(e){return encodeURIComponent(t(e)).replace(x,p)}}if(!a){var c=/[\\'"]/g;a=function(e){return t(e).replace(c,"\\$&")}}n||(n=function(e,i,d,s){for(s=e[f];--s;)if(e[d=f+s]===i)return d;return e[d=f+e[f]++]=i,d});var f="",u="",_=e.viewId,y=e.options;return u+='<div mxv mxa="_zs_galleryb^:_" class="pr pr120"><div mx-view="examples/subs?list='+n(d,[{name:"使用示例",key:_+"_demo",subs:[{name:"预置类型",key:_+"_demo38"},{name:"展示值取整",key:_+"_demo35"},{name:"自定义颜色",key:_+"_demo36"},{name:"基础透明度",key:_+"_demo37"}]},{name:"API",key:_+"_api"}])+'"></div><div id="'+s(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb^:a" class="clearfix mb20"><div mxa="_zs_galleryb^:b" class="_zs_galleryd"><div mx-view="mx-effects/examples/38" id="'+s(_)+'_demo38"></div><div mx-view="mx-effects/examples/35" id="'+s(_)+'_demo35"></div></div><div mxa="_zs_galleryb^:c" class="_zs_galleryd"><div mx-view="mx-effects/examples/36" id="'+s(_)+'_demo36"></div><div mx-view="mx-effects/examples/37" id="'+s(_)+'_demo37"></div></div></div><div id="'+s(_)+'_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="examples/api?options='+n(d,y)+'"></div></div>'},render:function(){var e=[{key:"num",desc:"当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数",type:"number",def:""},{key:"type",desc:["展示类型","error：红色错误类型提示","warn：黄色警告类型提示","pass：绿色通过类型提示","highlight：品牌色图标强调提示（默认）"].join("<br>"),type:"string",def:"highlight"},{key:"color",desc:"自定义颜色，配置了color的时候忽略type的配置",type:"string",def:"品牌色"},{key:"base-opacity",desc:"基础透明度，<1 的数值，<br/>表示第一个格子的透明度，后续计算为 opacity = base + i * (1 - base) / 9",type:"number",def:"0.08"}];this.updater.digest({viewId:this.id,options:e})}})});