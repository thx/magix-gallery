define("mx-effects/examples/progress3",["magix","$","examples/subs","mx-title/second","./25","./26","./19","examples/api"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./25"),e("./26"),e("./19"),e("examples/api");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,n,s,m,r){if(d||(d=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(o,l)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,x)}}if(!r){var p=/[\\'"]/g;r=function(e){return n(e).replace(p,"\\$&")}}m||(m=function(e,i,d,t){for(t=e[f];--t;)if(e[d=f+t]===i)return d;return e[d=f+e[f]++]=i,d});var f="",u="",_=e.viewId,y=e.options;return u+='<div mxv mxa="_zs_galleryb^:_" class="pr pr120"><div mx-view="examples/subs?list='+m(d,[{name:"使用示例",key:_+"_demo",subs:[{name:"自定义宽度",key:_+"_demo25"},{name:"无文案",key:_+"_demo26"},{name:"精度",key:_+"_demo19"}]},{name:"API",key:_+"_api"}])+'"></div><div id="'+t(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb^:a" class="clearfix mb20"><div mxa="_zs_galleryb^:b" class="_zs_galleryd"><div mx-view="mx-effects/examples/25" id="'+t(_)+'_demo25"></div><div mx-view="mx-effects/examples/26" id="'+t(_)+'_demo26"></div></div><div mxa="_zs_galleryb^:c" class="_zs_galleryd"><div mx-view="mx-effects/examples/19" id="'+t(_)+'_demo19"></div></div></div><div id="'+t(_)+'_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="examples/api?options='+m(d,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"num",desc:"当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数",type:"number",def:""},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)",type:"string",def:"品牌色"},{key:"text",desc:"是否显示比例文案",type:"boolean",def:!0},{key:"width",desc:"圆形直径",type:"number",def:"120"},{key:"border",desc:"圆形边宽",type:"number",def:"8"}]})}})});