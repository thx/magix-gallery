define("mx-tree/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./5","./4","./1","./3","__test__/api","__test__/event"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./2"),e("./5"),e("./4"),e("./1"),e("./3"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");d.exports=n.View.extend({tmpl:function(e,t,d,n,i,s,a,_){if(d||(d=e),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(m,v)}}if(!s){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return l[e]},y=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(y,r)}}if(!_){var c=/[\\'"]/g;_=function(e){return i(e).replace(c,"\\$&")}}a||(a=function(e,t,d,n){for(n=e[p];--n;)if(e[d=p+n]===t)return d;return e[d=p+e[p]++]=t,d});var p="",u="",x=e.viewId,f=e.options,k=e.events;return u+='<div mxv mxa="_zs_gallerye&:_" class="pr pr120"><div mx-view="__test__/subs?list='+a(d,[{name:"使用示例",key:x+"_demo",subs:[{name:"双向绑定",key:x+"_demo2"},{name:"一次性获取value",key:x+"_demo1"},{name:"一次性获取对象",key:x+"_demo5"},{name:"默认收起",key:x+"_demo3"},{name:"只读",key:x+"_demo4"}]},{name:"API",key:x+"_api"},{name:"Event",key:x+"_event"},{name:"Methods",key:x+"_method",subs:[{name:"getBottomValues",key:x+"_method"},{name:"getBottomItems",key:x+"_method"}]}])+'"></div><div id="'+n(x)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye&:a" class="clearfix mb20"><div mxa="_zs_gallerye&:b" class="_zs_galleryd"><div mx-view="mx-tree/__test__/2" id="'+n(x)+'_demo2"></div><div mx-view="mx-tree/__test__/5" id="'+n(x)+'_demo5"></div><div mx-view="mx-tree/__test__/4" id="'+n(x)+'_demo3"></div></div><div mxa="_zs_gallerye&:c" class="_zs_galleryd"><div mx-view="mx-tree/__test__/1" id="'+n(x)+'_demo1"></div><div mx-view="mx-tree/__test__/3" id="'+n(x)+'_demo4"></div></div></div><div id="'+n(x)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+a(d,f)+'" class="mb40"></div><div id="'+n(x)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+a(d,k)+'" class="mb40"></div><div id="'+n(x)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerye&:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>getBottomValues</td><td>获取选中值：最底层数据的value</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomValues\');\n                        </pre></td></tr><tr><td>getBottomItems</td><td>获取选中值：最底层数据完整对象</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomItems\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"bottom-values",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"need-all",desc:"是否需要全选功能",type:"boolean",def:"false"},{key:"read-only",desc:"是否只是展示",type:"boolean",def:"false"},{key:"has-line",desc:"是否有连接线",type:"boolean",def:"false"},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"false"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"}],events:[{type:"change",desc:"切换某个标签状态时触发",params:[{key:"bottomValues",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array"}]}]})}})});