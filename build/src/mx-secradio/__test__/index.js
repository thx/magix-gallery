define("mx-secradio/__test__/index",["magix","__test__/subs","mx-title/second","./1","./3","./2","./4","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./4"),e("__test__/api");var d=e("magix");d.applyStyle("_zs_galleryav",""),i.exports=d.View.extend({tmpl:function(e,t,i,d,s,n,_,a){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,v=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},d=function(e){return s(e).replace(l,v)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return o[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(m,y)}}if(!a){var x=/[\\'"]/g;a=function(e){return s(e).replace(x,"\\$&")}}_||(_=function(e,t,i,d){for(d=e[c];--d;)if(e[i=c+d]===t)return i;return e[i=c+e[c]++]=t,i});var c="",p="",u=e.viewId,f=e.options;return p+='<div mxv mxa="_zs_gallerydz:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"带前缀",key:u+"_demo1"},{name:"val()",key:u+"_demo2"},{name:"默认收起",key:u+"_demo3"},{name:"最大高度",key:u+"_demo4"}]},{name:"API",key:u+"_api"}])+'"></div><div mxs="_zs_gallerydz:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydz:a" class="clearfix mb20"><div mxa="_zs_gallerydz:b" class="_zs_gallerye"><div mx-view="mx-secradio/__test__/1" id="'+d(u)+'_demo1"></div><div mx-view="mx-secradio/__test__/3" id="'+d(u)+'_demo3"></div></div><div mxa="_zs_gallerydz:c" class="_zs_gallerye"><div mx-view="mx-secradio/__test__/2" id="'+d(u)+'_demo2"></div><div mx-view="mx-secradio/__test__/4" id="'+d(u)+'_demo4"></div></div></div><div id="'+d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    text: '计划1',\n    subs: [{\n        value: 11,\n        text: '单元1-1'\n    }, {\n        value: 12,\n        text: '单元1-2'\n    }]\n}, {\n    text: '计划2',\n    subs: [{\n        value: 21,\n        text: '单元2-1'\n    }]\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"选中的sub的value",type:"string",def:""},{key:"text-key",desc:"渲染子节点text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染子节点value时读取的key",type:"string",def:"value"},{key:"parent-text-key",desc:"渲染父节点text时读取的key",type:"string",def:"text"},{key:"sub-key",desc:"子节点list的key值",type:"string",def:"subs"},{key:"prefix",desc:"子节点文案前缀",type:"string",def:""},{key:"parent-prefix",desc:"父节点文案前缀",type:"string",def:""},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"true"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"},{key:"max-height",desc:"操作区域最大高度，当有一键收起功能时，一键收起吸顶",type:"string",def:""}]})}})});