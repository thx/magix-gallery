define("mx-slider/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./5","./2","./3","./4","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./5"),e("./2"),e("./3"),e("./4"),e("__test__/api"),e("__test__/event");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,_,s,n,m){if(i||(i=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,a=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},d=function(e){return _(e).replace(r,a)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return o[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(c,l)}}if(!m){var p=/[\\'"]/g;m=function(e){return _(e).replace(p,"\\$&")}}n||(n=function(e,t,i,d){for(d=e[y];--d;)if(e[i=y+d]===t)return i;return e[i=y+e[y]++]=t,i});var y="",x="",u=e.viewId,f=e.options,k=e.events;return x+='<div mxv mxa="_zs_gallerydU:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"输入框+单位",key:u+"_demo1"},{name:"刻度",key:u+"_demo2"},{name:"禁用",key:u+"_demo3"},{name:"垂直",key:u+"_demo4"},{name:"范围修正",key:u+"_demo5"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+d(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydU:a" class="clearfix mb20"><div mxa="_zs_gallerydU:b" class="_zs_galleryd"><div mx-view="mx-slider/__test__/1" id="'+d(u)+'_demo1"></div><div mx-view="mx-slider/__test__/5" id="'+d(u)+'_demo5"></div></div><div mxa="_zs_gallerydU:c" class="_zs_galleryd"><div mx-view="mx-slider/__test__/2" id="'+d(u)+'_demo2"></div><div mx-view="mx-slider/__test__/3" id="'+d(u)+'_demo3"></div><div mx-view="mx-slider/__test__/4" id="'+d(u)+'_demo4"></div></div></div><div id="'+d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(i,f)+'" class="mb40"></div><div id="'+d(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"min",desc:"区间最小值，保留小数位同step",type:"number",def:0},{key:"max",desc:"区间最大值，保留小数位同step",type:"number",def:100},{key:"step",desc:"步长，滑动时变化的刻度",type:"number",def:1},{key:"value",desc:"滑块当前值，超过可选范围会根据可选范围进行修正",type:"string",def:"默认取中间值"},{key:"need-input",desc:"是否需要输入框，横向时才有，width不包含输入框宽度",type:"boolean",def:"false"},{key:"width",desc:"滑块宽度，横向时可设置",type:"number",def:280},{key:"vertical",desc:"是否垂直",type:"boolean",def:"false"},{key:"height",desc:"滑块高度，纵向时（vertical=true）可设置",type:"number",def:280},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"tip",desc:"提示文案",type:"",def:""}],events:[{type:"change",desc:"刻度变化（输入框调整或者拖动滑轴）时触发",params:[{key:"value",desc:"当前刻度值",type:"number"}]}]})}})});