define("mx-hour/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","examples/api"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("examples/api");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,s,m,d,r){if(n||(n=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,l=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(o,l)}}if(!m){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},v=/[!')(*]/g;m=function(e){return encodeURIComponent(s(e)).replace(v,x)}}if(!r){var c=/[\\'"]/g;r=function(e){return s(e).replace(c,"\\$&")}}d||(d=function(e,i,n,t){for(t=e[u];--t;)if(e[n=u+t]===i)return n;return e[n=u+e[u]++]=i,n});var u="",f="",w=e.viewId,y=e.options;return f+='<div mxv mxa="_zs_galleryc4:_" class="pr pr120"><div mx-view="examples/subs?list='+d(n,[{name:"使用示例",key:w+"_demo",subs:[{name:"极简模式",key:w+"_demo1"},{name:"每日单独选择",key:w+"_demo2"}]},{name:"API",key:w+"_api"}])+'"></div><div id="'+t(w)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc4:a" class="clearfix mb20"><div mx-view="mx-hour/examples/1" id="'+t(w)+'_demo1"></div><div mx-view="mx-hour/examples/2" id="'+t(w)+'_demo2"></div></div><div id="'+t(w)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+d(n,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"simple",desc:"极简模式，默认只区分工作日和双休日，如需每天单独选择，请设置simple=false",type:"boolean",def:"true"},{key:"selected",desc:"<pre>\n当前选中值，week表示周几（1周一，7周日，以此类推），times表示当前选中小时，0 ~ 23\n1. simple = true时\n    selected = [{\n        week: 12345, //工作日\n        times: [2,3,4]\n    },{\n        week: 67, //双休日\n        times: []\n    }]\n\n2. simple = false时\n    selected = [{\n        week: 1, //周一\n        times: [2,3,4]\n    },\n    ...\n    {\n        week: 7, //周日\n        times: [1,2,4]\n    }]\n</pre>",type:"array",def:"[]"},{key:"tip",desc:"右下角提示文案信息",type:"string",def:""}]})}})});