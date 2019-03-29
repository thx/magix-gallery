define("mx-tree/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./4","./2","./5","__test__/api"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./4"),e("./2"),e("./5"),e("__test__/api");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,n,a,s,_){if(d||(d=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(l,m)}}if(!a){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return r[e]},y=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(y,v)}}if(!_){var c=/[\\'"]/g;_=function(e){return n(e).replace(c,"\\$&")}}s||(s=function(e,t,d,i){for(i=e[u];--i;)if(e[d=u+i]===t)return d;return e[d=u+e[u]++]=t,d});var u="",p="",x=e.viewId,f=e.options;return p+='<div mxv mxa="_zs_gallerye1:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(d,[{name:"使用示例",key:x+"_demo",subs:[{name:"一次性获取value",key:x+"_demo1"},{name:"实时获取value",key:x+"_demo2"},{name:"一次性获取对象",key:x+"_demo5"},{name:"默认收起",key:x+"_demo3"},{name:"只读",key:x+"_demo4"}]},{name:"API",key:x+"_api"},{name:"Methods",key:x+"_method",subs:[{name:"getBottomValues",key:x+"_method"},{name:"getBottomItems",key:x+"_method"}]}])+'"></div><div id="'+i(x)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye1:a" class="clearfix mb20"><div mxa="_zs_gallerye1:b" class="_zs_gallerye"><div mx-view="mx-tree/__test__/1" id="'+i(x)+'_demo1"></div><div mx-view="mx-tree/__test__/3" id="'+i(x)+'_demo4"></div><div mx-view="mx-tree/__test__/4" id="'+i(x)+'_demo3"></div></div><div mxa="_zs_gallerye1:c" class="_zs_gallerye"><div mx-view="mx-tree/__test__/2" id="'+i(x)+'_demo2"></div><div mx-view="mx-tree/__test__/5" id="'+i(x)+'_demo5"></div></div></div><div id="'+i(x)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(d,f)+'" class="mb40"></div><div id="'+i(x)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerye1:_" class="pr20"><table class="table _zs_galleryr"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>getBottomValues</td><td>获取选中值：最底层数据的value</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomValues\');\n                        </pre></td></tr><tr><td>getBottomItems</td><td>获取选中值：最底层数据完整对象</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomItems\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"bottom-values",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"need-all",desc:"是否需要全选功能",type:"boolean",def:"false"},{key:"read-only",desc:"是否只是展示",type:"boolean",def:"false"},{key:"has-line",desc:"是否有连接线",type:"boolean",def:"false"},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"false"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"}]})}})});