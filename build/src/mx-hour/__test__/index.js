define("mx-hour/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,d,_,r){if(i||(i=e),!s){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+m[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(o,a)}}if(!d){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(l,c)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}_||(_=function(e,t,i,n){for(n=e[u];--n;)if(e[i=u+n]===t)return i;return e[i=u+e[u]++]=t,i});var u="",x="",f=e.viewId,w=e.options;return x+='<div mxv mxa="_zs_galleryca:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"极简模式",key:f+"_demo1"},{name:"每日单独选择",key:f+"_demo2"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryca:a" class="clearfix mb20"><div mx-view="mx-hour/__test__/1" id="'+n(f)+'_demo1"></div><div mx-view="mx-hour/__test__/2" id="'+n(f)+'_demo2"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,w)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"simple",desc:"极简模式，默认只区分工作日和双休日，如需每天单独选择，请设置simple=false",type:"boolean",def:"true"},{key:"selected",desc:"<pre>\n当前选中值，week表示周几（1周一，7周日，以此类推），times表示当前选中小时，0 ~ 23\n1. simple = true时\n    selected = [{\n        week: 12345, //工作日\n        times: [2,3,4]\n    },{\n        week: 67, //双休日\n        times: []\n    }]\n\n2. simple = false时\n    selected = [{\n        week: 1, //周一\n        times: [2,3,4]\n    },\n    ...\n    {\n        week: 7, //周日\n        times: [1,2,4]\n    }]\n</pre>",type:"array",def:"[]"},{key:"tip",desc:"右下角提示文案信息",type:"string",def:""}]})}})});