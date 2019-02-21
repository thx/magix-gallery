define("mx-suggest/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./4","./5","./3","./6","./7","./1","__test__/api","__test__/event"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./2"),e("./4"),e("./5"),e("./3"),e("./6"),e("./7"),e("./1"),e("__test__/api"),e("__test__/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,n,s,_,a){if(d||(d=e),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(m,r)}}if(!s){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,o)}}if(!a){var x=/[\\'"]/g;a=function(e){return n(e).replace(x,"\\$&")}}_||(_=function(e,t,d,i){for(i=e[p];--i;)if(e[d=p+i]===t)return d;return e[d=p+e[p]++]=t,d});var p="",g="",y=e.viewId,u=e.options,f=e.events;return g+='<div mxv mxa="_zs_gallerydK:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(d,[{name:"静态数据示例",key:y+"_demo_static",subs:[{name:"事件处理",key:y+"_demo2"},{name:"自定义字段",key:y+"_demo4"},{name:"搜索value和text",key:y+"_demo5"},{name:"简单数组",key:y+"_demo3"}]},{name:"动态数据示例",key:y+"_demo_dync",subs:[{name:"动态 + loading",key:y+"_demo6"},{name:"初始化选中",key:y+"_demo7"},{name:"直接更新数据",key:y+"_demo1"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"},{name:"Methods",key:y+"_method"}])+'"></div><div id="'+i(y)+'_demo_static" mx-view="mx-title/second?content=%E9%9D%99%E6%80%81%E6%95%B0%E6%8D%AE%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydK:a" class="clearfix mb20"><div mxa="_zs_gallerydK:b" class="_zs_gallerye"><div mx-view="mx-suggest/__test__/2" id="'+i(y)+'_demo2"></div></div><div mxa="_zs_gallerydK:c" class="_zs_gallerye"><div mx-view="mx-suggest/__test__/4" id="'+i(y)+'_demo4"></div><div mx-view="mx-suggest/__test__/5" id="'+i(y)+'_demo5"></div><div mx-view="mx-suggest/__test__/3" id="'+i(y)+'_demo3"></div></div></div><div id="'+i(y)+'_demo_dync" mx-view="mx-title/second?content=%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydK:d" class="clearfix mb20"><div mx-view="mx-suggest/__test__/6" id="'+i(y)+'_demo6"></div><div mx-view="mx-suggest/__test__/7" id="'+i(y)+'_demo7"></div><div mx-view="mx-suggest/__test__/1" id="'+i(y)+'_demo1"></div></div><div id="'+i(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(d,u)+'" class="mb40"></div><div id="'+i(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+_(d,f)+'" class="mb40"></div><div id="'+i(y)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerydK:_" class="pr20"><table class="table _zs_galleryr"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>update(list: Array)</td><td>动态更新下拉列表数据</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'update\');\n                        </pre></td></tr><tr><td>showLoading</td><td>动态更新数据时有延时，增加loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'showLoading\');\n                        </pre></td></tr><tr><td>hideLoading</td><td>动态更新数据完毕，去掉loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'hideLoading\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>可搜素类型列表\n支持简单数组，例如：\n[1, 2, 3, 4]\n\n或者对象数组，例如：[{\n    text: '文案',\n    value: '跟后端交互字段'\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"已选中项value值，动态更新数据的时候，如果初始list为空，请使用item传入已选项",type:"string",def:""},{key:"item",desc:"<pre>动态list时初始化已选状态\nitem: {\n    text: '文案',\n    value: '选中值'\n}\n同时设置selected和item时，已selected为准\n</pre>",type:"object",def:""},{key:"list-text",desc:"可搜索类型展示文案",type:"string",def:"text"},{key:"list-value",desc:"可搜索类型对应的key值",type:"string",def:"value"},{key:"placeholder",desc:"placeholder提示",type:"string",def:"搜素"},{key:"type",desc:"<pre>搜索类型：\n1. all：text或者value中包含关键词的\n2. text：只有text中包含关键词的\n3. value：只有value中包含关键词的</pre>",type:"string",def:"text"}],events:[{type:"show",desc:"出现提示框的时候触发，常用于动态更新可选项",params:[{key:"keyword",desc:"当前输入的关键词",type:"string"}]},{type:"suggest",desc:"选中某个可选项时触发",params:[{key:"selected",desc:"<pre>当前选中项完整对象\n{\n    value: '',\n    text: ''\n}\n</pre>",type:"object"}]}]})}})});