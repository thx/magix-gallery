define("mx-effects/examples/star",["magix","$","examples/subs","mx-title/second","./11","./12","./13","examples/api"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./11"),e("./12"),e("./13"),e("examples/api");var n=e("magix");e("$");t.exports=n.View.extend({tmpl:function(e,i,t,n,s,d,r,m){if(t||(t=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,l=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(v,l)}}if(!d){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},c=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(c,o)}}if(!m){var p=/[\\'"]/g;m=function(e){return s(e).replace(p,"\\$&")}}r||(r=function(e,i,t,n){for(n=e[f];--n;)if(e[t=f+n]===i)return t;return e[t=f+e[f]++]=i,t});var f="",u="",_=e.viewId,g=e.options;return u+='<div mxv mxa="_zs_galleryb8:_" class="pr pr120"><div mx-view="examples/subs?list='+r(t,[{name:"使用示例",key:_+"_demo"},{name:"API",key:_+"_api"}])+'"></div><div id="'+n(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb8:_" class="clearfix mb20"><div class="_zs_galleryd"><div mx-view="mx-effects/examples/11"></div></div><div class="_zs_galleryd"><div mx-view="mx-effects/examples/12"></div><div mx-view="mx-effects/examples/13"></div></div></div><div id="'+n(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+r(t,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"num",desc:"当前评分，0， 0.5， 1， 1.5 ... 4， 4.5， 5，超出范围会进行修正",type:"number",def:""},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)",type:"string",def:"品牌色"}]})}})});