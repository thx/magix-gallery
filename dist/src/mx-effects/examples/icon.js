define("mx-effects/examples/icon",["magix","$","examples/subs","mx-title/second","./14","./15","./16","./17","./28","examples/api"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./14"),e("./15"),e("./16"),e("./17"),e("./28"),e("examples/api");var m=e("magix");e("$");d.exports=m.View.extend({tmpl:function(e,i,d,m,s,t,n,o){if(d||(d=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,l=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},m=function(e){return s(e).replace(r,l)}}if(!t){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(c,x)}}if(!o){var p=/[\\'"]/g;o=function(e){return s(e).replace(p,"\\$&")}}n||(n=function(e,i,d,m){for(m=e[f];--m;)if(e[d=f+m]===i)return d;return e[d=f+e[f]++]=i,d});var f="",_="",u=e.viewId,y=e.options;return _+='<div mxv mxa="_zs_galleryb*:_" class="pr pr120"><div mx-view="examples/subs?list='+n(d,[{name:"使用示例",key:u+"_demo",subs:[{name:"实心默认",key:u+"_demo14"},{name:"带提示信息",key:u+"_demo17"},{name:"空心默认",key:u+"_demo15"},{name:"自定义颜色",key:u+"_demo16"},{name:"实际应用",key:u+"_demo28"}]},{name:"API",key:u+"_api"}])+'"></div><div id="'+m(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb*:a" class="clearfix mb20"><div mxa="_zs_galleryb*:b" class="_zs_galleryd"><div mx-view="mx-effects/examples/14" id="'+m(u)+'_demo14"></div><div mx-view="mx-effects/examples/15" id="'+m(u)+'_demo15"></div><div mx-view="mx-effects/examples/16" id="'+m(u)+'_demo16"></div></div><div mxa="_zs_galleryb*:c" class="_zs_galleryd"><div mx-view="mx-effects/examples/17" id="'+m(u)+'_demo17"></div><div mx-view="mx-effects/examples/28" id="'+m(u)+'_demo28"></div></div></div><div id="'+m(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+n(d,y)+'"></div></div>'},render:function(){var e=[{key:"mode",desc:"icon类型，可选实心打标（solid），空心打标（hollow）",type:"string",def:"solid"},{key:"type",desc:["展示类型","common：灰色类型提示（默认）","error：红色错误类型提示","warn：黄色警告类型提示","pass：绿色通过类型提示","highlight：品牌色图标强调提示"].join("<br>"),type:"string",def:"common"},{key:"color",desc:"自定义颜色，设置了color的时候忽略type",type:"hex格式色号",def:""},{key:"tip",desc:"hover提示信息",type:"string",def:""},{key:"tip-width",desc:"hover提示信息宽度",type:"number",def:"200"}];this.updater.digest({viewId:this.id,options:e})}})});