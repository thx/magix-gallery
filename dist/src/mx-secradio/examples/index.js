define("mx-secradio/examples/index",["magix","examples/subs","mx-title/second","./1","./3","./2","./4","examples/api"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./4"),e("examples/api");var s=e("magix");s.applyStyle("_zs_galleryas",""),t.exports=s.View.extend({tmpl:function(e,i,t,s,n,d,a,r){if(t||(t=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(m,x)}}if(!d){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return p[e]},o=/[!')(*]/g;d=function(e){return encodeURIComponent(n(e)).replace(o,v)}}if(!r){var y=/[\\'"]/g;r=function(e){return n(e).replace(y,"\\$&")}}a||(a=function(e,i,t,s){for(s=e[c];--s;)if(e[t=c+s]===i)return t;return e[t=c+e[c]++]=i,t});var c="",u="",f=e.viewId,g=e.options;return u+='<div mxv mxa="_zs_galleryeg:_" class="pr pr120"><div mx-view="examples/subs?list='+a(t,[{name:"使用示例",key:f+"_demo",subs:[{name:"带前缀",key:f+"_demo1"},{name:"val()",key:f+"_demo2"},{name:"默认收起",key:f+"_demo3"},{name:"最大高度",key:f+"_demo4"}]},{name:"API",key:f+"_api"}])+'"></div><div mxs="_zs_galleryeg:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeg:a" class="clearfix mb20"><div mxa="_zs_galleryeg:b" class="_zs_galleryd"><div mx-view="mx-secradio/examples/1" id="'+s(f)+'_demo1"></div><div mx-view="mx-secradio/examples/3" id="'+s(f)+'_demo3"></div></div><div mxa="_zs_galleryeg:c" class="_zs_galleryd"><div mx-view="mx-secradio/examples/2" id="'+s(f)+'_demo2"></div><div mx-view="mx-secradio/examples/4" id="'+s(f)+'_demo4"></div></div></div><div id="'+s(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(t,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    text: '计划1',\n    subs: [{\n        value: 11,\n        text: '单元1-1'\n    }, {\n        value: 12,\n        text: '单元1-2'\n    }]\n}, {\n    text: '计划2',\n    subs: [{\n        value: 21,\n        text: '单元2-1'\n    }]\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"选中的sub的value",type:"string",def:""},{key:"text-key",desc:"渲染子节点text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染子节点value时读取的key",type:"string",def:"value"},{key:"parent-text-key",desc:"渲染父节点text时读取的key",type:"string",def:"text"},{key:"sub-key",desc:"子节点list的key值",type:"string",def:"subs"},{key:"prefix",desc:"子节点文案前缀",type:"string",def:""},{key:"parent-prefix",desc:"父节点文案前缀",type:"string",def:""},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"true"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"},{key:"max-height",desc:"操作区域最大高度，当有一键收起功能时，一键收起吸顶",type:"string",def:""}]})}})});